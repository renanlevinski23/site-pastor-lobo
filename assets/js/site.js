// Pastor Oswaldo Lôbo — scripts do site (sem dependências)
(function () {
  // Menu mobile
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      document.body.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', open);
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        document.body.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Carrossel de banners
  document.querySelectorAll('.slider').forEach(function (slider) {
    var track = slider.querySelector('.slides');
    var slides = track.children;
    var dotsBox = slider.querySelector('.dots');
    var i = 0, timer;
    if (slides.length < 2) return;
    for (var k = 0; k < slides.length; k++) {
      var b = document.createElement('button');
      b.setAttribute('aria-label', 'Banner ' + (k + 1));
      (function (n) { b.addEventListener('click', function () { go(n); restart(); }); })(k);
      dotsBox.appendChild(b);
    }
    function go(n) {
      i = (n + slides.length) % slides.length;
      track.style.transform = 'translateX(' + (-100 * i) + '%)';
      dotsBox.querySelectorAll('button').forEach(function (d, j) { d.classList.toggle('active', j === i); });
    }
    var calmo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function stop() { clearInterval(timer); }
    function restart() { stop(); if (!calmo) timer = setInterval(function () { go(i + 1); }, 6000); }
    // Pausa enquanto a pessoa está com o mouse ou o teclado no banner
    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', restart);
    slider.addEventListener('focusin', stop);
    slider.addEventListener('focusout', restart);
    slider.querySelector('.prev').addEventListener('click', function () { go(i - 1); restart(); });
    slider.querySelector('.next').addEventListener('click', function () { go(i + 1); restart(); });
    // swipe
    var x0 = null;
    slider.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) { go(i + (dx < 0 ? 1 : -1)); restart(); }
      x0 = null;
    });
    go(0); restart();
  });

  // YouTube leve: só carrega o player ao clicar
  document.querySelectorAll('.yt-lite').forEach(function (el) {
    var id = el.dataset.id;
    el.style.backgroundImage = 'url(https://i.ytimg.com/vi/' + id + '/hqdefault.jpg)';
    el.addEventListener('click', function () {
      el.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id +
        '?autoplay=1&rel=0" title="' + (el.dataset.title || 'Vídeo') +
        '" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    }, { once: true });
  });

  // Animação ao rolar
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  // Ano no rodapé
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
