(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var audioEl = document.querySelector('audio');
    if (!audioEl) return;

    // Barra de título de mdBook — ya es sticky nativa
    var menuBar = document.getElementById('mdbook-menu-bar');
    if (!menuBar) return;

    // Crear contenedor del reproductor
    var audioBar = document.createElement('div');
    audioBar.id = 'audio-bar';
    audioBar.appendChild(audioEl);

    // Insertar justo debajo del menu-bar
    menuBar.parentNode.insertBefore(audioBar, menuBar.nextSibling);
  });
})();
