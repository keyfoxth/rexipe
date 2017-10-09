import assert from 'assert'
import { isUndefined } from '..'

const correctSet = [
  undefined
]
correctSet.forEach((value) => {
  assert.strictEqual(isUndefined(value), true,
    'isUndefined(' + JSON.stringify(value) + ') should return true')
})

const errorSet = [
  null,
  [],
  true,
  false,
  new Date(),
  new Error(),
  function () {},
  0,
  {},
  new RegExp(),
  '',
  new Map(),
  new Set(),
  Symbol(),
  new WeakMap(),
  new WeakSet(),
  Buffer.from('')
]
errorSet.forEach((value) => {
  assert.strictEqual(isUndefined(value), false,
    'isUndefined(' + JSON.stringify(value) + ') should return false')
})
