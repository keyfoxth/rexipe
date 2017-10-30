/* @flow */

import isArray from './isArray'

/**
 * Check if `value` is an `object`.
 *
 * @export
 * @param {any} value The value to check.
 * @return {boolean} Return `true` if `value` is an `object`, else `false`.
 */
export default function isObject (value: any): boolean {
  return typeof value === 'object' && value !== null && isArray(value) === false
}
