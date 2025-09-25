// Mark current page in nav
(function () {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(a => {
    if ((path === '' && a.getAttribute('href') === 'index.html') || a.getAttribute('href') === path) {
      a.classList.add('active');
    }
  });
})();
