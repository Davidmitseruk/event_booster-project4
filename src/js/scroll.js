window.addEventListener('scroll', function () {
  const backToTopButton = document.getElementById('backToTop');
  if (window.scrollY > window.innerHeight / 2) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});
document.getElementById('backToTop').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
