interface Array<T> {
  /**
   * Recursively flattens the nested array into a new flat Array.
  
   * @template T 
   * @param {((T | T[] | this)[])} this 
   * @param {number} [depth] 
   * @returns {T[]} 
   * @memberof Array
   */
  flatten<T>(this: (T | T[] | this)[], depth?: number): T[];

  /**
   * projects each element of the array into a new array and flattens the result.
   * 
   * @template U 
   * @param {(value: T, index: number, array: T[]) => U[]} callbackfn 
   * @param {*} [thisArg] 
   * @returns {U[]} 
   * @memberof Array
   */
  flatMap<U>(callbackFn: (value: T, index: number, array: T[]) => U[], thisArg?: any): U[];
}