const devicePreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const listeners = new Set<(enabled: boolean) => void>();
export const isMotionEnabled = () => !devicePreference.matches;
const notify = () => {
  const enabled = isMotionEnabled();
  document.documentElement.dataset.motion = enabled ? 'on' : 'off';
  listeners.forEach((listener) => listener(enabled));
};
export function onMotionChange(listener: (enabled: boolean) => void) {
  listeners.add(listener);
  listener(isMotionEnabled());
}
devicePreference.addEventListener('change', notify);
notify();
