import { themes, type theme } from "../common/theme";
import { detectCurrentTheme } from "./detectCurrentTheme";

export function changeTheme(theme: theme) {
  const currentTheme = detectCurrentTheme();
  const html = document.querySelector('html');

  if (currentTheme === theme || !html) return;

  html.classList.remove(currentTheme);
  html.classList.add(theme);

  localStorage.setItem("theme", theme);
}