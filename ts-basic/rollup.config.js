import { nodeResolve } from '@rollup/plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import typescript from '@rollup/plugin-typescript'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import json from '@rollup/plugin-json'

// 当前文件路径
const __filename = fileURLToPath(import.meta.url)

// 前文件所在目录
const __dirname = dirname(__filename)

// console.log(__dirname, __filename)

const __dirname2 = fileURLToPath(new URL('.', import.meta.url))
// console.log('🚀 ~ __dirname2:', __dirname2)

export default {
  input: resolve(__dirname, 'src/index.ts'),
  output: {
    file: resolve(__dirname, 'dist/bundle.js'),
    format: 'iife',
    sourcemap: true // 源码调试的功能
  },
  plugins: [
    nodeResolve({
      extensions: ['.ts', '.js']
    }),
    typescript({
      tsconfig: resolve(__dirname, 'tsconfig.json')
    }),
    serve({
      port: 3000,
      openPage: '/public/index.html'
      //   open: true
    }),
    json()
  ]
}
