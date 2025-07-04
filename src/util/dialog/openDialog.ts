import { SETTINGS_MENU_DIALOG_ID } from "../../common/dialog";

export function openDialog(dialogId: string) {
  const menu = document.getElementById(
      dialogId
    ) as HTMLDialogElement;
    menu.showModal();

    history.pushState({ dialogOpen: true }, '');

    requestAnimationFrame(() => {
      menu.classList.add("open");
      const html = document.querySelector("html")!;
      html.classList.add("locked");
    });
}