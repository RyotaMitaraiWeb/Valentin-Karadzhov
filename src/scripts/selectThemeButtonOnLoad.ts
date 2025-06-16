import { themes } from "../common/theme";

const theme = localStorage.getItem("theme") || themes.system.value;

const themeButtons = document.querySelectorAll(
  "[data-theme]"
) as NodeListOf<HTMLButtonElement>;

for (const button of themeButtons) {
  button.setAttribute("aria-pressed", `${button.dataset.theme === theme}`);
}
