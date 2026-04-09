(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var audioEl = document.querySelector('audio');
    if (!audioEl) return;

    var wrapper = audioEl.closest('p') || audioEl.parentElement;
    if (!wrapper) return;

    // Encontrar el contenedor que scrollea (mdBook usa un div interno, no window)
    function getScrollParent(el) {
      while (el && el !== document.body) {
        var style = window.getComputedStyle(el);
        if (style.overflowY === 'auto' || style.overflowY === 'scroll') return el;
        el = el.parentElement;
      }
      return window;
    }

    var scroller = getScrollParent(wrapper);

    // Guardar posición original ANTES de cualquier modificación al DOM
    // offsetTop relativo al scrollParent
    function getOffsetTop(el, parent) {
      var top = 0;
      while (el && el !== parent) {
        top += el.offsetTop;
        el = el.offsetParent;
      }
      return top;
    }

    var triggerAt = getOffsetTop(wrapper, scroller === window ? document.body : scroller);

    // Placeholder invisible para reservar el espacio
    var placeholder = document.createElement('div');
    placeholder.style.cssText = 'display:none;margin:0;padding:0;border:0;';
    wrapper.parentNode.insertBefore(placeholder, wrapper);

    var isFixed = false;

    function getScrollTop() {
      return scroller === window ? window.scrollY : scroller.scrollTop;
    }

    function fix() {
      var h = wrapper.offsetHeight;
      var rect;

      // Medir ANTES de fijar (una sola vez, sin loop)
      if (scroller === window) {
        rect = { left: wrapper.getBoundingClientRect().left, width: wrapper.offsetWidth };
      } else {
        rect = { left: wrapper.getBoundingClientRect().left, width: wrapper.offsetWidth };
      }

      placeholder.style.height  = h + 'px';
      placeholder.style.display = 'block';

      wrapper.style.cssText = [
        'position:fixed',
        'top:0',
        'left:' + rect.left + 'px',
        'width:' + rect.width + 'px',
        'z-index:200',
        'margin:0',
        'padding:4px 0',
        'background:var(--bg,#1a1a2e)',
        'box-shadow:0 2px 8px rgba(0,0,0,0.5)',
      ].join(';');

      isFixed = true;
    }

    function unfix() {
      wrapper.style.cssText     = '';
      placeholder.style.display = 'none';
      isFixed = false;
    }

    function onScroll() {
      var scrollTop = getScrollTop();
      if (!isFixed && scrollTop >= triggerAt) {
        fix();
      } else if (isFixed && scrollTop < triggerAt) {
        unfix();
      }
    }

    scroller.addEventListener('scroll', onScroll, { passive: true });

    window.addEventListener('resize', function () {
      // Recalcular posición original por si cambia el layout
      triggerAt = getOffsetTop(wrapper, scroller === window ? document.body : scroller);
      if (isFixed) {
        wrapper.style.left  = placeholder.getBoundingClientRect().left + 'px';
        wrapper.style.width = placeholder.offsetWidth + 'px';
      }
    });
  });
})();
