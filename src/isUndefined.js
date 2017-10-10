/* @flow */

/**
 * Check if `value` is `undefined`.
 *
 * @export
 * @param {any} value The value to check.
 * @return {boolean} Return `true` if `undefined` is `null`, else `false`.
 */
export default function isUndefined (value: any): boolean {
  return value === undefined
}
