#!/usr/bin/env python3
"""
Sincroniza los .md del curso Magento a Google Drive.

SETUP (una sola vez):
1. pip3 install google-auth google-auth-oauthlib google-auth-httplib2 google-api-python-client
2. Crear proyecto en: https://console.cloud.google.com
3. Habilitar "Google Drive API"
4. Crear credenciales OAuth 2.0 (Desktop App)
5. Descargar credentials.json y colocarlo junto a este script
6. Primera ejecución: abre el browser para autorizar — luego queda guardado en token.json

USO:
  python3 sync-to-drive.py               # sincroniza todo
  python3 sync-to-drive.py --watch       # observa cambios y sincroniza automáticamente
  python3 sync-to-drive.py --folder-id X # usa carpeta específica de Drive
"""

import os
import sys
import time
import json
import hashlib
import argparse
from pathlib import Path
from datetime import datetime

try:
    from google.auth.transport.requests import Request
    from google.oauth2.credentials import Credentials
    from google_auth_oauthlib.flow import InstalledAppFlow
    from googleapiclient.discovery import build
    from googleapiclient.http import MediaFileUpload
except ImportError:
    print("Instalando dependencias...")
    os.system("pip3 install google-auth google-auth-oauthlib google-auth-httplib2 google-api-python-client")
    print("Dependencias instaladas. Vuelve a ejecutar el script.")
    sys.exit(0)

# Permisos necesarios
SCOPES = ['https://www.googleapis.com/auth/drive']

# Directorio base del curso (relativo a este script)
CURSO_DIR = Path(__file__).parent

# Nombre de la carpeta raíz en Google Drive
DRIVE_FOLDER_NAME = "Curso Magento 2 - De Laravel a Expert"

# Archivo de estado local (evita re-subir archivos sin cambios)
STATE_FILE = CURSO_DIR / ".sync-state.json"


def get_file_hash(filepath: Path) -> str:
    """MD5 del archivo para detectar cambios."""
    return hashlib.md5(filepath.read_bytes()).hexdigest()


def load_state() -> dict:
    """Carga el estado de la última sincronización."""
    if STATE_FILE.exists():
        return json.loads(STATE_FILE.read_text())
    return {}


def save_state(state: dict):
    """Guarda el estado de la sincronización actual."""
    STATE_FILE.write_text(json.dumps(state, indent=2))


def authenticate():
    """Autenticación OAuth 2.0 con Google."""
    creds = None
    token_file = CURSO_DIR / "token.json"
    creds_file = CURSO_DIR / "credentials.json"

    if not creds_file.exists():
        print("""
ERROR: No encontré credentials.json

Para crear las credenciales:
1. Ve a: https://console.cloud.google.com/apis/credentials
2. Crea un proyecto (si no tienes uno)
3. Habilita "Google Drive API" en: APIs & Services > Library
4. Ve a "Credentials" > "Create Credentials" > "OAuth 2.0 Client ID"
5. Tipo: "Desktop App"
6. Descarga el JSON y nómbralo: credentials.json
7. Colócalo en: {}
        """.format(CURSO_DIR))
        sys.exit(1)

    if token_file.exists():
        creds = Credentials.from_authorized_user_file(str(token_file), SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(str(creds_file), SCOPES)
            creds = flow.run_local_server(port=0)
        token_file.write_text(creds.to_json())

    return creds


def get_or_create_folder(service, name: str, parent_id: str = None) -> str:
    """Obtiene o crea una carpeta en Drive. Retorna su ID."""
    query = f"name='{name}' and mimeType='application/vnd.google-apps.folder' and trashed=false"
    if parent_id:
        query += f" and '{parent_id}' in parents"

    results = service.files().list(q=query, fields="files(id, name)").execute()
    files = results.get('files', [])

    if files:
        return files[0]['id']

    # Crear la carpeta
    metadata = {
        'name': name,
        'mimeType': 'application/vnd.google-apps.folder'
    }
    if parent_id:
        metadata['parents'] = [parent_id]

    folder = service.files().create(body=metadata, fields='id').execute()
    print(f"  📁 Carpeta creada: {name}")
    return folder['id']


def upload_or_update_file(service, filepath: Path, folder_id: str, drive_name: str = None) -> str:
    """Sube o actualiza un archivo en Drive. Retorna el ID del archivo."""
    name = drive_name or filepath.name
    mime_type = "text/markdown" if filepath.suffix == ".md" else "text/plain"

    # Buscar si ya existe
    query = f"name='{name}' and '{folder_id}' in parents and trashed=false"
    results = service.files().list(q=query, fields="files(id, name)").execute()
    existing = results.get('files', [])

    media = MediaFileUpload(str(filepath), mimetype=mime_type, resumable=True)

    if existing:
        file_id = existing[0]['id']
        service.files().update(
            fileId=file_id,
            media_body=media
        ).execute()
        return file_id
    else:
        metadata = {'name': name, 'parents': [folder_id]}
        file = service.files().create(
            body=metadata,
            media_body=media,
            fields='id'
        ).execute()
        return file['id']


def sync(service, folder_id: str = None, force: bool = False):
    """Sincroniza todos los .md del curso a Drive."""
    state = load_state()
    new_state = {}
    uploaded = 0
    skipped = 0

    # Carpeta raíz en Drive
    root_id = get_or_create_folder(service, DRIVE_FOLDER_NAME, folder_id)

    # Carpeta de módulos
    modulos_id = get_or_create_folder(service, "modulos", root_id)

    # Archivos a sincronizar
    files_to_sync = [
        (CURSO_DIR / "SILABO.md", root_id, "SILABO.md"),
    ]

    # Agregar todos los .md de /modulos/
    modulos_dir = CURSO_DIR / "modulos"
    if modulos_dir.exists():
        for md_file in sorted(modulos_dir.glob("*.md")):
            files_to_sync.append((md_file, modulos_id, md_file.name))

    print(f"\n{'='*50}")
    print(f"  Sincronizando {len(files_to_sync)} archivos...")
    print(f"  Carpeta Drive: {DRIVE_FOLDER_NAME}")
    print(f"{'='*50}\n")

    for filepath, parent_id, drive_name in files_to_sync:
        if not filepath.exists():
            continue

        file_hash = get_file_hash(filepath)
        state_key = str(filepath)

        if not force and state.get(state_key) == file_hash:
            skipped += 1
            continue

        try:
            file_id = upload_or_update_file(service, filepath, parent_id, drive_name)
            new_state[state_key] = file_hash
            print(f"  ✅ {drive_name}")
            uploaded += 1
        except Exception as e:
            print(f"  ❌ Error en {drive_name}: {e}")
            new_state[state_key] = state.get(state_key, "")  # mantener estado previo

    # Preservar estado de archivos no procesados
    for key, val in state.items():
        if key not in new_state:
            new_state[key] = val

    save_state(new_state)

    print(f"\n{'='*50}")
    print(f"  Subidos: {uploaded} | Sin cambios: {skipped}")
    print(f"  {datetime.now().strftime('%H:%M:%S')}")
    print(f"{'='*50}\n")


def watch_mode(service, folder_id: str = None, interval: int = 30):
    """Observa cambios y sincroniza automáticamente."""
    print(f"Modo watch activo — sincronizando cada {interval} segundos")
    print("Ctrl+C para detener\n")

    while True:
        try:
            sync(service, folder_id)
            time.sleep(interval)
        except KeyboardInterrupt:
            print("\nWatch detenido.")
            break


def main():
    parser = argparse.ArgumentParser(description="Sincroniza el curso Magento a Google Drive")
    parser.add_argument("--watch", action="store_true", help="Modo watch: sincroniza automáticamente")
    parser.add_argument("--interval", type=int, default=30, help="Intervalo en segundos para el modo watch (default: 30)")
    parser.add_argument("--folder-id", type=str, help="ID de carpeta padre en Drive (opcional)")
    parser.add_argument("--force", action="store_true", help="Forzar re-subida de todos los archivos")
    args = parser.parse_args()

    print("Autenticando con Google Drive...")
    creds = authenticate()
    service = build('drive', 'v3', credentials=creds)
    print("Autenticado correctamente.\n")

    if args.watch:
        watch_mode(service, args.folder_id, args.interval)
    else:
        sync(service, args.folder_id, args.force)


if __name__ == "__main__":
    main()
