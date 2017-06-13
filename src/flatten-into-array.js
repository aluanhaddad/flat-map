/**
 * @param {Array} target
 * @param {Array} source
 * @param {number} start
 * @param {number} depth
 * @param {Function} mapperFunction
 * @param {Array} thisArg
 * @returns {number}
 */
export default function flattenIntoArray(target, source, start, depth, mapperFunction, thisArg) {
  console.info({target, source, start, depth, mapperFunction, thisArg});
  console.info({
    target: typeof target,
    source: typeof source,
    start: typeof start,
    depth: typeof depth,
    mapperFunction: typeof mapperFunction,
    thisArg: typeof thisArg
  });
  const mapperFunctionProvied = mapperFunction !== undefined;
  let targetIndex = start;
  let sourceIndex = 0;
  const sourceLen = source.length;
  console.info({targetIndex, sourceIndex, sourceLen});
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
        console.info({element, spreadable});
        if (spreadable === true && depth >= 0) {
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
