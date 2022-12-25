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

/** Return new array with new a elements at end of array without mutable source array
 * @param {array<T>} array - source array
 * @param {elements<T>} elements - array of a new elements to push
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
