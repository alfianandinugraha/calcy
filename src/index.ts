/**
 * @packageDocumentation A tiny library to calculate number
 */

/**
 * Add two number
 *
 * @param a - first number
 * @param b - second number
 *
 * @public
 */
function add(a: number, b: number): number {
  return a + b;
}

/**
 * Substract two numbers
 *
 * @param a - first number
 * @param b - second number
 *
 * @public
 */
function substract(a: number, b: number): number {
  return a - b;
}

/**
 * Times two number
 *
 * @param a - first number
 * @param b - second number
 *
 * @public
 */
function times(a: number, b: number): number {
  return a * b;
}

/**
 * Divide two numbers
 *
 * @param a - fisrt number
 * @param b - second number
 *
 * @public
 */
function divide(a: number, b: number): number {
  return a / b;
}

export { add, substract, times, divide };
