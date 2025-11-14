js/**
 * Delays execution by a given number of milliseconds.
 */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}