/** Class for immutable work with array */
export class immArr {
  /** Return last element from array without immutable source array
   * @return last element
   */
  static pop<Type>(array: Type[]): Type {
    return array[array.length - 1];
  }
}
