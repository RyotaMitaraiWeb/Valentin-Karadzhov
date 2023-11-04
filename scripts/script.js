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

  let currentMenu = '';

  function createOverlay() {
    const overlay = document.createElement('div');

    overlay.classList.add('overlay', 'hide-overlay');

    const body = document.querySelector('body');
    body.appendChild(overlay);

    overlay.addEventListener('click', hideMenus);
    return overlay;
  }

  window.addEventListener('keyup', (event) => {
    if (event.key === 'Escape' && currentMenu) {
      hideMenus(event);
    }
  });

  function getCurrentMenu() {
    return document.getElementById(currentMenu);
  }

  function hideMenus(event) {
    event.preventDefault();
    const menus = document.querySelectorAll('.menu');
    const menuToFocus = document.querySelector(`button[data-menu=${currentMenu}]`);

    menus.forEach(m => {
      m.classList.add('invisible');
    });

    overlay.classList.add('hide-overlay');

    // toggleDisableStatusForMenuButtons(false);
    menuToFocus.focus();
    currentMenu = '';
    body.classList.remove('locked');
  }

  function showMenu(event) {
    event.preventDefault();
    
    const button = this;
    const menuValue = button.dataset.menu;

    currentMenu = menuValue;

    const menu = getCurrentMenu();
    menu.classList.remove('invisible');
    menu.classList.add('visible');

    const overlay = document.querySelector('.overlay');
    overlay.classList.remove('hide-overlay');

    // toggleDisableStatusForMenuButtons(true);

    const firstFocusableElement = menu.querySelector('button, a');
    firstFocusableElement.focus();
    focusTrap(menu);

    body.classList.add('locked');
  }

  function focusTrap(menu) {
    const focusableElements = menu.querySelectorAll('a, button');
    const length = focusableElements.length;

    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[length - 1];

    lastFocusableElement.addEventListener('keydown', redirectFocusFromLastFocusableElement);
    firstFocusableElement.addEventListener('keydown', redirectFocusFromFirstFocusableEelement);
  }

  function redirectFocusFromLastFocusableElement(event) {
    const menu = getCurrentMenu();
    const firstFocusableElement = menu.querySelector('a, button');

    if ((event.key === 'Tab' && !event.shiftKey) || event.key === 'ArrowDown') {
      event.preventDefault();
      firstFocusableElement.focus();
    }
  }

  function redirectFocusFromFirstFocusableEelement(event) {
    const menu = getCurrentMenu();

    const focusableElements = menu.querySelectorAll('a, button');
    const length = focusableElements.length;

    const lastFocusableElement = focusableElements[length - 1];

    if ((event.key === 'Tab' && event.shiftKey) || event.key === 'ArrowUp') {
      event.preventDefault();
      lastFocusableElement.focus();
    }
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

      b.setAttribute('aria-current', buttonTheme === theme);
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

      b.setAttribute('aria-current', buttonOption === option);
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