document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('darkModeToggle');

  function setDarkModePreference(value) {
    localStorage.setItem("darkMode", value.toString());
    document.documentElement.dataset.theme = value ? "dark" : "light";
    darkModeToggle.checked = !!value;
  }

  function checkDarkModePreference() {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode !== null) {
      setDarkModePreference(storedDarkMode === "true");
    } else {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkModePreference(prefersDarkMode);
    }
  }

  checkDarkModePreference();

  darkModeToggle.addEventListener('change', function () {
    setDarkModePreference(darkModeToggle.checked)
  });
});