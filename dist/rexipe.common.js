'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Check if `value` is `null`.
 *
 * @export
 * @param {any} value The value to check.
 * @return {boolean} Return `true` if `value` is `null`, else `false`.
 */
function isNull (value) {
  return value === null
}

/**
 * Check if `value` is `undefined`.
 *
 * @export
 * @param {any} value The value to check.
 * @return {boolean} Return `true` if `undefined` is `null`, else `false`.
 */
function isUndefined (value) {
  return value === undefined
}

exports.isNull = isNull;
exports.isUndefined = isUndefined;
