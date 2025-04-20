const toggleButton = document.getElementById("themeToggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const text = document.querySelector('.header__btn-text');

  if (document.body.classList.contains("light-theme")) {
    text.textContent = `WHITE THEME`;
    toggleButton.classList.add('header__btn-light');
    toggleButton.classList.remove('header__btn-dark');
  } else {
    text.textContent = `BLACK THEME`;
    toggleButton.classList.add('header__btn-dark');
    toggleButton.classList.remove('header__btn-light');
  }
});