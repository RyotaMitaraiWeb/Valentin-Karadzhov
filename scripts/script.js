window.addEventListener('DOMContentLoaded', () => {
  setThemeOnLoad();
  setAnimationPreferencesOnLoad();

  createOverlay();
  createOverlay('settings-overlay')

  const menuButton = document.querySelector('#menu-button');
  menuButton.addEventListener('click', showNavigationMenu);

  const settingsButton = document.querySelector('#settings-button');
  settingsButton.addEventListener('click', showSettingsMenu);

  const themeButtons = document.querySelectorAll('.theme-buttons button');
  themeButtons.forEach(b => b.addEventListener('click', changeThemeFromButton));

  const animationButtons = document.querySelectorAll('.animation-buttons button');
  animationButtons.forEach(b => b.addEventListener('click', changeAnimationPreferenceFromButton));

  const menuButtons = document.querySelectorAll('.menu-button');
  menuButtons.forEach(mb => mb.addEventListener('click', function (e) {
    e.preventDefault();
    menuButtons.forEach(mb => mb.disabled = true);
  }));

  const closeMenuButton = document.querySelector('.close-menu');
  closeMenuButton.addEventListener('click', hideMenus);

  const closeSettings = document.querySelector('#close-settings');
  closeSettings.addEventListener('click', hideMenus);

  function createOverlay(...additionalClassNames) {
    const overlay = document.createElement('div');

    overlay.classList.add('overlay', 'hide-overlay', ...additionalClassNames);

    const body = document.querySelector('body');
    body.appendChild(overlay);

    overlay.addEventListener('click', hideMenus);
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

    const firstLink = document.querySelector('.link');
    firstLink.focus();
  }

  function showSettingsMenu(event) {
    event.preventDefault();
    const settingsMenu = document.querySelector('.settings-menu');
    settingsMenu.classList.remove('closed');

    const body = document.querySelector('body');
    body.classList.add('locked');

    const overlay = document.querySelector('.settings-overlay');
    overlay.classList.remove('hide-overlay');

    const button = settingsMenu.querySelector('button');
    button.focus();
  }

  function hideMenus(event) {
    event.preventDefault();
    const overlays = document.querySelectorAll('.overlay');
    const body = document.querySelector('body');
    const links = document.querySelector('.links');

    const settingsMenu = document.querySelector('.settings-menu');
    settingsMenu.classList.add('closed');

    overlays.forEach(o => o.classList.add('hide-overlay'));
    body.classList.remove('locked');

    links.classList.add('invisible');

    menuButtons.forEach(mb => mb.disabled = false);
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