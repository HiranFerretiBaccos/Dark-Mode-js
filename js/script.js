const changeThemeButton = document.querySelector("#change-theme");

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

changeThemeButton.addEventListener("change", function () {
  toggleDarkMode();

  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});

function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme();
