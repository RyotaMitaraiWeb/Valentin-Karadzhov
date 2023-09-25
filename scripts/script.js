window.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme') || 'light';
  setThemeOnLoad();

  createOverlay();

  const menuButton = document.querySelector('#menu-button');
  menuButton.addEventListener('click', showNavigationMenu);

  function setTheme(theme) {
    const body = document.querySelector('body');
    if (theme === 'light') {
      body.classList.add('light');
      body.classList.remove('dark');
    } else {
      body.classList.remove('light');
      body.classList.add('dark');
    }

    const toggle = document.querySelector('#switch');
    toggle.checked = theme === 'dark';
  }


  const closeMenuButton = document.querySelector('.close-menu');
  closeMenuButton.addEventListener('click', hideNavigationMenu);

  function createOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay', 'hide-overlay');

    const body = document.querySelector('body');
    body.appendChild(overlay);

    overlay.addEventListener('click', hideNavigationMenu);
  }

  function showNavigationMenu(event) {
    event.preventDefault();
    const links = document.querySelector('.links');
    links.classList.add('visible');
    links.classList.remove('invisible');

    const body = document.querySelector('body');
    body.classList.add('locked');

    const overlay = document.querySelector('.overlay');
    overlay.classList.remove('hide-overlay');


  }

  function hideNavigationMenu(event) {
    event.preventDefault();
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('body');
    const links = document.querySelector('.links');

    overlay.classList.add('hide-overlay');
    body.classList.remove('locked');

    links.classList.add('invisible');
  }

  const body = document.querySelector('body');
  setTimeout(() => body.classList.add('loaded'), 1);

  function setThemeOnLoad() {
    const localStorageTheme = localStorage.getItem('theme');
    const slideToggle = document.querySelector('#switch');

    if (!localStorageTheme) {
      const preference = prefersDarkMode();
      setTheme(preference);
      slideToggle.checked = true;
    } else {
      setTheme(localStorageTheme);
      slideToggle.checked = localStorageTheme === 'dark';
    }

    const slideToggleTooltip = document.querySelector('.switch.tooltip .tooltip-text');
    slideToggleTooltip.addEventListener('click', updateThemeFromToggle);

    slideToggle.addEventListener('click', updateThemeFromToggle);
  }

  function updateThemeFromToggle() {
    const localStorageTheme = localStorage.getItem('theme');

    if (!localStorageTheme && prefersDarkMode()) {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else if (!localStorageTheme && prefersDarkMode()) {
      setTheme('light');
      localStorage.setItem('theme', 'dark');
    } else {
      const theme = localStorageTheme === 'light' ? 'dark' : 'light';
      setTheme(theme);
      localStorage.setItem('theme', theme);
    }
  }

  function prefersDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? 'dark'
      : 'light'
  }
});