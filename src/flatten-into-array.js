/**
 * @template T, U
 * @param {Array<U>} target
 * @param {Array<T>} source
 * @param {number} start
 * @param {number} depth
 * @param {function(T): U[]} mapperFunction
 * @param {Array<T>} thisArg
 * @returns {number}
 */
export default function flattenIntoArray(target, source, start, depth, mapperFunction, thisArg) {

  const mapperFunctionProvied = mapperFunction !== undefined;
  let targetIndex = start;
  let sourceIndex = 0;
  const sourceLen = source.length;
  while (sourceIndex < sourceLen) {
    const p = sourceIndex;
    const exists = !!source[p];
    if (exists === true) {
      let element = source[p];
      if (element) {
        if (mapperFunctionProvied) {
          element = mapperFunction.call(thisArg, element, sourceIndex, target);
        }
        const spreadable = Object.getOwnPropertySymbols(element).includes(Symbol.isConcatSpreadable) || Array.isArray(element);
        if (spreadable === true && depth > 0) {
          const nextIndex = flattenIntoArray(target, element, targetIndex, depth - 1);
          targetIndex = nextIndex;
        } else {
          if (!Number.isSafeInteger(targetIndex)) {
            throw TypeError();
          }
          target[targetIndex] = element;
        }
      }
    }
    targetIndex += 1;
    sourceIndex += 1;
  }
  return targetIndex;
}
