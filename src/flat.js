import arraySpeciesCreate from './array-species-create';
import flattenIntoArray from './flatten-into-array';

if (!Object.prototype.hasOwnProperty.call(Array.prototype, 'flat')) {

  /**
   * @param {number=Infinity} depth
   */
  Array.prototype.flat = function flat(depth) {
    const o = Object(this);
    const a = arraySpeciesCreate(o, this.length);
    const depthNum = depth !== undefined ? Number(depth) : Infinity;
    flattenIntoArray(a, o, 0, depthNum);
    return a.filter(e => e !== undefined);
  };
}
