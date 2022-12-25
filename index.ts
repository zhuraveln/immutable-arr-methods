//----------------------------------------------------------------
// POP

/** Return last element from array without mutable source array
 * @param {array<T>} array - source array
 * @return {element<T>} last element of array
 */
export function pop<Type>(array: Type[]): Type {
  return array[array.length - 1]
}

//----------------------------------------------------------------
// PUSH

/** Return new array with a new elements at end of array without mutable source array
 * @param {array<T>} array - source array
 * @param {elements<T>} elements - new elements to push
 * @return {array<T>} new array
 */
export function push<Type>(array: Type[], ...elements: Type[]): Type[] {
  return [...array, ...elements]
}

//----------------------------------------------------------------
// SHIFT

/** Return first element from array without mutable source array
 * @param {array<T>} array - source array
 * @return {element<T>} first element of array
 */
export function shift<Type>(array: Type[]): Type {
  return array[0]
}

//----------------------------------------------------------------
// UNSHIFT

/** Return new array with new a elements at start of array without mutable source array
 * @param {array<T>} array - source array
 * @param {elements<T>} elements - array of a new elements to push
 * @return {array<T>} new array
 */
export function unshift<Type>(array: Type[], ...elements: Type[]): Type[] {
  return [...elements, ...array]
}

//----------------------------------------------------------------
// REVERSE

/** Return new reversed array without mutable source array
 * @param {array<T>} array - source array
 * @return {array<T>} new array
 */
export function reverse<Type>(array: Type[]): Type[] {
  return [...array].reverse()
}

//----------------------------------------------------------------
// SORT

/** Return new sorted array without mutable source array
 * @param {array<T>} array - source array
 * @param {function} callback - callback function for sorted array
 * @return {array<T>} new array
 */
export function sort<Type>(array: Type[], callback?: (a: Type, b: Type) => number): Type[] {
  return [...array].sort(callback)
}

//----------------------------------------------------------------
// SPLICE

/** Return new spliced array without mutable source array
 * @param {array<T>} array - source array
 * @param {number} startIndex - array's index to start removing
 * @param {number} deleteCount - count of elements to remove
 * @param {elements<T>} elements - array of a new elements to add
 * @return {array<T>} new array
 */
export function splice<Type>(
  array: Type[],
  startIndex: number,
  deleteCount: number,
  elements: Type[],
): Type[] {
  return [...array.slice(0, startIndex), ...elements, ...array.slice(startIndex + deleteCount)]
}

//----------------------------------------------------------------
