import { resolve } from 'node:path'
import { defineConfig } from 'vite'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      formats: ['es', 'cjs'],
      entry: resolve(__dirname, 'src/index.ts'),
    },
  },
})
