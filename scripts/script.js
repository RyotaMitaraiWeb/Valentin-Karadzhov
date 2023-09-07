window.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme') || 'light';
  setTheme(theme);

  const menuButton = document.querySelector('#menu-button');
  menuButton.addEventListener('click', showNavigationMenu);

  const slideToggle = document.querySelector('#switch');
  slideToggle.checked = theme === 'dark';
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
  }

  const menuButton = document.querySelector('#menu-button');
  menuButton.addEventListener('click', showNavigationMenu);

  function showNavigationMenu(event) {
    event.preventDefault();
    const links = document.querySelector('.links');
    links.classList.add('visible');

    const body = document.querySelector('body');
    body.classList.add('locked');

    createOverlay();
  }

  function createOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const body = document.querySelector('body');
    body.appendChild(overlay);

    overlay.addEventListener('click', hideNavigationMenu);
  }

  function hideNavigationMenu(event) {
    event.preventDefault();
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('body');
    const links = document.querySelector('.links');

    overlay.classList.add('hide-overlay');
    links.classList.add('invisible');

    setTimeout(() => {
      body.removeChild(overlay);
      body.classList.remove('locked');
      links.classList.remove('visible', 'invisible');
    }, 500);
  }
});