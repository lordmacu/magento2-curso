(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var audioEl = document.querySelector('audio');
    if (!audioEl) return;

    var wrapper = audioEl.closest('p') || audioEl.parentElement;
    if (!wrapper) return;

    // Placeholder mantiene el espacio cuando wrapper está fixed
    var placeholder = document.createElement('div');
    placeholder.style.display = 'none';
    wrapper.parentNode.insertBefore(placeholder, wrapper);

    var isFixed = false;
    var originalTop = 0;

    function getOriginalTop() {
      // offsetTop relativo al scroll del contenedor
      var el = wrapper;
      var top = 0;
      while (el) {
        top += el.offsetTop || 0;
        el = el.offsetParent;
      }
      return top;
    }

    function fix() {
      var rect = wrapper.getBoundingClientRect();
      placeholder.style.height  = rect.height + 'px';
      placeholder.style.display = 'block';

      wrapper.style.position   = 'fixed';
      wrapper.style.top        = '0';
      wrapper.style.left       = rect.left + 'px';
      wrapper.style.width      = rect.width + 'px';
      wrapper.style.zIndex     = '200';
      wrapper.style.margin     = '0';
      wrapper.style.padding    = '0';
      wrapper.style.background = 'var(--bg, #1a1a2e)';
      wrapper.style.boxShadow  = '0 2px 8px rgba(0,0,0,0.4)';
      isFixed = true;
    }

    function unfix() {
      wrapper.style.cssText      = '';
      placeholder.style.display  = 'none';
      isFixed = false;
    }

    function onScroll() {
      if (!isFixed) {
        // Medir posición del wrapper real en pantalla
        var top = wrapper.getBoundingClientRect().top;
        if (top <= 0) {
          originalTop = getOriginalTop();
          fix();
        }
      } else {
        // Medir posición del placeholder (ocupa el lugar original del wrapper)
        var phTop = placeholder.getBoundingClientRect().top;
        if (phTop > 0) {
          unfix();
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    window.addEventListener('resize', function () {
      if (isFixed) {
        var rect = placeholder.getBoundingClientRect();
        wrapper.style.left  = rect.left + 'px';
        wrapper.style.width = rect.width + 'px';
      }
    });
  });
})();
