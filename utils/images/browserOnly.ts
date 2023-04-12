/**
 * Wrap function to fire only in browser
 *
 * @param {Function} f
 * @returns {Function}
 */
export function browserOnly(f: (...args: any) => void) {
  return (...args: any) => {
    if (typeof window === 'undefined') {
      return;
    }

    return f(...args);
  };
}