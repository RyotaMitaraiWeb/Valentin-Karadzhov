export function hasNotBlockedAnimations() {
  return window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
}