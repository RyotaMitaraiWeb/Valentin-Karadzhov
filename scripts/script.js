window.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme') || 'light';
  setTheme(theme);

  createOverlay();

  const menuButton = document.querySelector('#menu-button');
  menuButton.addEventListener('click', showNavigationMenu);

  const slideToggle = document.querySelector('#switch');
  slideToggle.checked = theme === 'dark';
  const slideToggleTooltip = document.querySelector('.switch.tooltip .tooltip-text');
  slideToggleTooltip.addEventListener('click', () => {
    setTheme(localStorage.getItem('theme') === 'light' ? 'dark' : 'light' );
  });

  slideToggle.addEventListener('change', () => {
    setTheme(localStorage.getItem('theme') === 'light' ? 'dark' : 'light' );
  });

  function setTheme(theme) {
    localStorage.setItem('theme', theme);
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
});