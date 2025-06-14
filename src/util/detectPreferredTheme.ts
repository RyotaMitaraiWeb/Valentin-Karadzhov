import { themes, type theme } from "../common/theme";

export function detectPreferredTheme(): theme {
  const savedTheme = localStorage.getItem('theme') as theme | null;
  if (!savedTheme) {
    return themes.system.value;
  }

  const isValid = Object.values(themes)
    .find(theme => theme.value === savedTheme) !== undefined;

  if (!isValid) {
    return themes.system.value;
  }

  return savedTheme;
}