const toggleButton = document.getElementById("themeToggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    toggleButton.textContent = "DARK THEME";
  } else {
    toggleButton.textContent = "BLACK THEME";
  }
});