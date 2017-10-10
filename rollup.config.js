import flow from 'rollup-plugin-flow'
import cleanup from 'rollup-plugin-cleanup'

export default {
  input: './src/index.js',
  output: {
    file: './dist/rexipe.common.js', format: 'cjs'
  },
  plugins: [
    flow({ pretty: true }),
    cleanup({ comments: 'none' })
  ]
}
