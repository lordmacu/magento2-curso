(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var audioEl = document.querySelector('audio');
    if (!audioEl) return;

    var wrapper = audioEl.closest('p') || audioEl.parentElement;
    if (!wrapper) return;

    // Sentinel: div invisible justo antes del wrapper
    var sentinel = document.createElement('div');
    sentinel.style.cssText = 'height:1px;margin:0;padding:0;border:0;';
    wrapper.parentNode.insertBefore(sentinel, wrapper);

    // Cuando el sentinel sale del viewport por arriba → fijar el reproductor
    var observer = new IntersectionObserver(function (entries) {
      var isAbove = !entries[0].isIntersecting &&
                    entries[0].boundingClientRect.top < 0;
      if (isAbove) {
        // Calcular posición y ancho del área de contenido
        var rect = wrapper.getBoundingClientRect();
        var contentLeft = rect.left;
        var contentWidth = rect.width;

        wrapper.style.position = 'fixed';
        wrapper.style.top = '0';
        wrapper.style.left  = contentLeft + 'px';
        wrapper.style.width = contentWidth + 'px';
        wrapper.style.zIndex = '200';
        wrapper.style.margin = '0';
        wrapper.style.padding = '0';
        wrapper.style.background = 'var(--bg, #1a1a2e)';
        wrapper.style.boxShadow = '0 2px 8px rgba(0,0,0,0.4)';

        // Placeholder para evitar salto de contenido
        sentinel.style.height = wrapper.offsetHeight + 'px';
        sentinel.style.display = 'block';
      } else {
        wrapper.style.cssText = '';
        sentinel.style.height = '1px';
      }
    }, { threshold: 0 });

    observer.observe(sentinel);

    // Recalcular ancho al redimensionar ventana
    window.addEventListener('resize', function () {
      if (wrapper.style.position === 'fixed') {
        var rect = sentinel.getBoundingClientRect();
        wrapper.style.left  = rect.left + 'px';
        wrapper.style.width = rect.width + 'px';
      }
    });
  });
})();
