module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: [
    'flowtype'
  ],
  extends: [
    'x',
    'plugin:flowtype/recommended'
  ],
  rules: {
    'flowtype/require-parameter-type': 2,
    'flowtype/require-return-type': 2,
    'flowtype/require-variable-type': 2
  }
}
