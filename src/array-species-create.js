/**
 * @template T
 * @param {T[]} originalArray
 * @param {number} length
 * @returns {T[]}
 */
export default function arraySpeciesCreate(originalArray, length) {
  const isArray = Array.isArray(originalArray);
  if (!isArray) {
    return Array(length);
  }
  /**
   * @type {ArrayConstructor|undefined|null} C
   */
  let C = Object.getPrototypeOf(originalArray).constructor;
  if (C) { // If IsConstructor(C) is true... not sure how this can be reliably checked without invoking it. Likely not insignificant.
    if (typeof C === 'object' || typeof C === 'function') {
      C = C[Symbol.species.toString()];
      C = C !== null ? C : undefined;
    }
    if (C === undefined) {
      return Array(length);
    }
    if (typeof C !== 'function') {
      throw TypeError('invalid constructor');
    }
    /** @type {Array} */
    const result = new C(length);
    return result;
  }
}
