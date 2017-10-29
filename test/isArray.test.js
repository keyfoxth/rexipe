import assert from 'assert'
import { isArray } from '..'

describe('# isArray.js', () => {
  describe('- is `null`', () => {
    const correctSet = [
      []
    ]

    correctSet.forEach((value) => {
      it(`\`isArray(${JSON.stringify(value)})\` should return \`true\''`, () => {
        assert.strictEqual(isArray(value), true)
      })
    })
  })

  describe('- is not `null`', () => {
    const errorSet = [
      undefined,
      null,
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
      it(`\`isArray(${JSON.stringify(value)})\` should return \`false\``, () => {
        assert.strictEqual(isArray(value), false)
      })
    })
  })
})
