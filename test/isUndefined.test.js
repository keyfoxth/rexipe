import assert from 'assert'
import { isUndefined } from '..'

describe('# isUndefined.js', () => {
  describe('- is `undefined`', () => {
    const correctSet = [
      undefined
    ]

    correctSet.forEach((value) => {
      it(`\`isUndefined(${JSON.stringify(value)})\` should return \`true\''`, () => {
        assert.strictEqual(isUndefined(value), true)
      })
    })
  })

  describe('- is not `undefined`', () => {
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
      it(`\`isUndefined(${JSON.stringify(value)})\` should return \`false\``, () => {
        assert.strictEqual(isUndefined(value), false)
      })
    })
  })
})
