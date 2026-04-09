(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var audioEl = document.querySelector('audio');
    if (!audioEl) return;

    var menuBar = document.getElementById('menu-bar');
    if (!menuBar) return;

    // Crear una fila dedicada al audio dentro del menu-bar
    var audioRow = document.createElement('div');
    audioRow.id = 'audio-bar';
    audioRow.appendChild(audioEl);

    // Insertar al final del #menu-bar
    menuBar.appendChild(audioRow);
  });
})();
