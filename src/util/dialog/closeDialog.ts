export function closeDialog(target: HTMLDialogElement | string) {
  if (typeof target === 'string') {
    target = document.getElementById(target) as HTMLDialogElement;
  }

  target.classList.add("close");

  setTimeout(() => {
    target.close();
    target.classList.remove("close");
  }, 150);
}
