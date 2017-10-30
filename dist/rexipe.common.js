'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isArray = Array.isArray;

function isNull (value) {
  return value === null
}

function isObject (value) {
  return typeof value === 'object' && value !== null && isArray(value) === false
}

function isUndefined (value) {
  return value === undefined
}

exports.isArray = isArray;
exports.isNull = isNull;
exports.isObject = isObject;
exports.isUndefined = isUndefined;
