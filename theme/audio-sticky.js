(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var audioEl = document.querySelector('audio');
    if (!audioEl) return;

    // El nav-wrapper de mdBook ya es sticky — lo usamos como contenedor
    var nav = document.querySelector('.nav-wrapper');
    if (!nav) return;

    // Crear un contenedor para el audio dentro del nav
    var audioBar = document.createElement('div');
    audioBar.id = 'audio-bar';
    audioBar.appendChild(audioEl);

    // Insertarlo debajo del nav-wrapper (como sibling, dentro del mismo sticky context)
    nav.parentNode.insertBefore(audioBar, nav.nextSibling);

    // Eliminar el <p> vacío que quedó donde estaba el audio
    var content = document.getElementById('content');
    if (content) {
      var emptyPs = content.querySelectorAll('p');
      emptyPs.forEach(function (p) {
        if (p.childNodes.length === 0 || (p.childNodes.length === 1 && p.childNodes[0].nodeType === 3 && p.textContent.trim() === '')) {
          p.remove();
        }
      });
    }
  });
})();
