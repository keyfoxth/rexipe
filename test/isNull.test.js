import assert from 'assert'
import { isNull } from '..'

const correctSet = [
  null
]
correctSet.forEach((value) => {
  assert.strictEqual(isNull(value), true,
    'isNull(' + JSON.stringify(value) + ') should return true')
})

const errorSet = [
  undefined,
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
  assert.strictEqual(isNull(value), false,
    'isNull(' + JSON.stringify(value) + ') should return false')
})
