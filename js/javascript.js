/* ===================================================================
   REMEC S.A.S. — Propuesta de diseño 2
   script.js — comportamiento independiente del HTML
   =================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- header shrink on scroll ---------- */
  var header = document.getElementById('rmc2Header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('rmc2-scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  /* ---------- mobile hamburger menu ---------- */
  var burgerBtn = document.getElementById('rmc2BurgerBtn');
  var mobileMenu = document.getElementById('rmc2MobileMenu');
  var scrim = document.getElementById('rmc2Scrim');

  function closeMenu() {
    if (!burgerBtn) return;
    burgerBtn.classList.remove('rmc2-open');
    mobileMenu.classList.remove('rmc2-open');
    scrim.classList.remove('rmc2-open');
    burgerBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('rmc2-locked');
  }
  function toggleMenu() {
    var isOpen = mobileMenu.classList.toggle('rmc2-open');
    burgerBtn.classList.toggle('rmc2-open', isOpen);
    scrim.classList.toggle('rmc2-open', isOpen);
    burgerBtn.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('rmc2-locked', isOpen);
  }
  if (burgerBtn) {
    burgerBtn.addEventListener('click', toggleMenu);
    scrim.addEventListener('click', closeMenu);
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 900) closeMenu();
    });
  }

  /* ---------- scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.rmc2-reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('rmc2-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('rmc2-in'); });
  }

  /* ---------- animated stat counters ---------- */
  var statEls = document.querySelectorAll('.rmc2-stat-num[data-count]');
  if ('IntersectionObserver' in window && statEls.length) {
    var countIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.getAttribute('data-count'), 10);
        var suffix = el.getAttribute('data-suffix') || '';
        var duration = 1400;
        var start = performance.now();
        function tick(now) {
          var p = Math.min(1, (now - start) / duration);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        countIO.unobserve(el);
      });
    }, { threshold: 0.6 });
    statEls.forEach(function (el) { countIO.observe(el); });
  }

  /* ---------- swatch chips scroll to matching service card ---------- */
  document.querySelectorAll('.rmc2-swatch-chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      var targetId = chip.getAttribute('data-target');
      var targetEl = targetId && document.getElementById(targetId);
      if (targetEl) {
        var y = targetEl.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: y, behavior: 'smooth' });
        targetEl.style.transition = 'box-shadow .3s ease';
        targetEl.style.boxShadow = '0 0 0 3px currentColor';
        setTimeout(function () { targetEl.style.boxShadow = ''; }, 900);
      }
    });
  });

  /* ---------- smooth scroll with header offset for in-page anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var y = target.getBoundingClientRect().top + window.scrollY - 78;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

});