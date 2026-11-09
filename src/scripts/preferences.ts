const devicePreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const storageKey = 'narrcorp-reduce-motion';
let reduceMotion = false;
try {
  reduceMotion = localStorage.getItem(storageKey) === 'true';
} catch {
  // Device preferences still work when browser storage is unavailable.
}
const listeners = new Set<(enabled: boolean) => void>();
export const isMotionEnabled = () => !reduceMotion && !devicePreference.matches;
const notify = () => {
  const enabled = isMotionEnabled();
  document.documentElement.dataset.motion = enabled ? 'on' : 'off';
  listeners.forEach((listener) => listener(enabled));
};
export function onMotionChange(listener: (enabled: boolean) => void) {
  listeners.add(listener);
  listener(isMotionEnabled());
}
export function setReducedMotionPreference(reduced: boolean) {
  reduceMotion = reduced;
  try {
    localStorage.setItem(storageKey, String(reduced));
  } catch {
    // Apply the preference for this visit even without persistent storage.
  }
  notify();
}
devicePreference.addEventListener('change', notify);
notify();
