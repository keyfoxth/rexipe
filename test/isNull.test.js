import assert from 'assert'
import { isNull } from '..'

describe('# isNull.js', () => {
  describe('- is `null`', () => {
    const correctSet = [
      null
    ]

    correctSet.forEach((value) => {
      it(`\`isNull(${JSON.stringify(value)})\` should return \`true\''`, () => {
        assert.strictEqual(isNull(value), true)
      })
    })
  })

  describe('- is not `null`', () => {
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
      it(`\`isNull(${JSON.stringify(value)})\` should return \`false\``, () => {
        assert.strictEqual(isNull(value), false)
      })
    })
  })
})
