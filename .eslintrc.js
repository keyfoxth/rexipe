module.exports = {
  root: true,
  parser: 'babel-eslint',
  globals: {
    'describe': false,
    'it': false
  },
  plugins: [
    'flowtype'
  ],
  extends: [
    'x',
    'plugin:flowtype/recommended'
  ]
}
