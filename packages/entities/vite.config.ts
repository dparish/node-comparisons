import typescript from '@rollup/plugin-typescript'
import {defineConfig} from 'vite'
import eslint from 'vite-plugin-eslint'
// const resolvePath = (str: string) => path.resolve(__dirname, str)

// @ts-ignore
// @ts-ignore
export default defineConfig({
  plugins: [eslint()],
  build: {
    sourcemap: true,
    lib: {
      entry: {
        index: './src/index.ts'
      },
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      output: {
      },
      plugins: [
        // @ts-ignore
        typescript({
          exclude: ['**/*.test.ts']
        })
      ]

    }
  }
})
