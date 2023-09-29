window.addEventListener('DOMContentLoaded', () => {
  setThemeOnLoad();
  setAnimationPreferencesOnLoad();

  const overlay = createOverlay();

  const menuButtons = document.querySelectorAll('[data-menu]');
  menuButtons.forEach(b => b.addEventListener('click', showMenu));

  const themeButtons = document.querySelectorAll('.theme-buttons button');
  themeButtons.forEach(b => b.addEventListener('click', changeThemeFromButton));

  const animationButtons = document.querySelectorAll('.animation-buttons button');
  animationButtons.forEach(b => b.addEventListener('click', changeAnimationPreferenceFromButton));

  const closeMenuButtons = document.querySelectorAll('.close-menu');
  closeMenuButtons.forEach(cmb => cmb.addEventListener('click', hideMenus));

  function createOverlay() {
    const overlay = document.createElement('div');

    overlay.classList.add('overlay', 'hide-overlay');

    const body = document.querySelector('body');
    body.appendChild(overlay);

    overlay.addEventListener('click', hideMenus);
    return overlay;
  }

  function hideMenus(event) {
    event.preventDefault();
    const menus = document.querySelectorAll('.menu');

    menus.forEach(m => {
      m.classList.add('invisible');
    });

    overlay.classList.add('hide-overlay');

    toggleDisableStatusForMenuButtons(false);
  }

  function showMenu(event) {
    event.preventDefault();
    
    const button = this;
    const menuValue = button.dataset.menu;

    const menu = document.getElementById(menuValue);
    menu.classList.remove('invisible');
    menu.classList.add('visible');

    const overlay = document.querySelector('.overlay');
    overlay.classList.remove('hide-overlay');

    toggleDisableStatusForMenuButtons(true);
  }

  function toggleDisableStatusForMenuButtons(disabled) {
    menuButtons.forEach(b => b.disabled = disabled);
  }

  const body = document.querySelector('body');
  body.classList.remove('no-script');
  setTimeout(() => body.classList.add('loaded'), 1);

  function setThemeOnLoad() {
    const localStorageTheme = localStorage.getItem('theme');

    if (!localStorageTheme) {
      changeTheme('system');
    } else {
      changeTheme(localStorageTheme);
    }
  }

  function setAnimationPreferencesOnLoad() {
    const localStorageOption = localStorage.getItem('animations');

    if (!localStorageOption) {
      changeAnimationSettings('system');
    } else {
      changeAnimationSettings(localStorageOption);
    }
  }

  function changeTheme(theme) {
    const body = document.querySelector('body');
    if (theme === 'system') {
      const mediaTheme = mediaThemePreference();

      body.classList.add(mediaTheme);
      body.classList.remove(mediaTheme === 'light' ? 'dark' : 'light');
    } else {
      body.classList.add(theme);
      body.classList.remove(theme === 'light' ? 'dark' : 'light');
    }

    const buttons = document.querySelectorAll('.theme-buttons button');
    buttons.forEach(b => {
      const buttonTheme = b.dataset.theme;
      if (buttonTheme === theme) {
        b.classList.add('selected');
      } else {
        b.classList.remove('selected');
      }
    });
  }

  function changeAnimationSettings(option) {
    const body = document.querySelector('body');
    if (option === 'system') {
      const mediaPreference = mediaMotionPreference();

      body.classList.add(mediaPreference);
      body.classList.remove(mediaPreference === 'animate' ? 'no-animate' : 'animate');
    } else {
      body.classList.add(option);
      body.classList.remove(option === 'animate' ? 'no-animate' : 'animate');
    }

    const buttons = document.querySelectorAll('.animation-buttons button');
    buttons.forEach(b => {
      const buttonOption = b.dataset.option;
      if (buttonOption === option) {
        b.classList.add('selected');
      } else {
        b.classList.remove('selected');
      }
    });
  }

  function changeThemeFromButton(event) {
    event.preventDefault();

    const button = this;
    const theme = button.dataset.theme;
    changeTheme(theme);
    localStorage.setItem('theme', theme);

    const buttons = document.querySelectorAll('.theme-buttons button');
    buttons.forEach(b => {
      const buttonTheme = b.dataset.theme;
      if (buttonTheme === theme) {
        b.classList.add('selected');
      } else {
        b.classList.remove('selected');
      }
    });
  }

  function changeAnimationPreferenceFromButton(event) {
    event.preventDefault();

    const button = this;
    const option = button.dataset.option;
    changeAnimationSettings(option);
    localStorage.setItem('animations', option);

    const buttons = document.querySelectorAll('.animation-buttons button');
    buttons.forEach(b => {
      const buttonOption = b.dataset.option;
      if (buttonOption === option) {
        b.classList.add('selected');
      } else {
        b.classList.remove('selected');
      }
    });
  }

  function mediaThemePreference() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }

  function mediaMotionPreference() {
    return window.matchMedia || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches
      ? 'no-animate'
      : 'animate';
  }
});