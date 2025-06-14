import { themes, type theme } from "../common/theme";

export function detectCurrentTheme(): theme {
  const html = document.querySelector('html');
  if (!html) return themes.system.value;

  const htmlTheme: theme = Object.values(themes)
    .find(theme => html.classList.contains(theme.value))
    ?.value || themes.system.value;

  return htmlTheme;
}