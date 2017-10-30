import assert from 'assert'
import { isObject } from '..'

describe('# isObject.js', () => {
  describe('- is `Object`', () => {
    const correctSet = [
      {},
      new Date(),
      new Error(),
      new Map(),
      new Set(),
      new RegExp(),
      new WeakMap(),
      new WeakSet(),
      Buffer.from('')
    ]

    correctSet.forEach((value) => {
      it(`\`isObject(${JSON.stringify(value)})\` should return \`true\''`, () => {
        assert.strictEqual(isObject(value), true)
      })
    })
  })

  describe('- is not `Object`', () => {
    const errorSet = [
      undefined,
      null,
      [],
      true,
      false,
      function () {},
      0,
      '',
      Symbol()
    ]

    errorSet.forEach((value) => {
      it(`\`isObject(${JSON.stringify(value)})\` should return \`false\``, () => {
        assert.strictEqual(isObject(value), false)
      })
    })
  })
})
