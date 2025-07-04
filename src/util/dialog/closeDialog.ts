import { hasNotBlockedAnimations } from "../hasNotBlockedAnimations";

export function closeDialog(target: HTMLDialogElement | string) {
  if (typeof target === "string") {
    target = document.getElementById(target) as HTMLDialogElement;
  }

  target.classList.add("close");

  if (history.state?.dialogOpen) {
    history.back();
  }

  if (hasNotBlockedAnimations()) {
    setTimeout(() => {
      target.close();
    }, 150);
  } else {
    target.close();
  }
}
