/* @flow */

/**
 * Check if `value` is `null`.
 *
 * @export
 * @param {any} value The value to check.
 * @return {boolean} Return `true` if `value` is `null`, else `false`.
 */
export default function isNull (value: any): boolean {
  return value === null
}
