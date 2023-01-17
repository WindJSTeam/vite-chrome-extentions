import {defineConfig} from 'vite'
import preact from "@preact/preset-vite"
// @ts-ignore
import { resolve } from 'path';

import manifest from "./scripts/manifest"
// @ts-ignore
const src = resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), manifest()],
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        background: resolve(src, 'scripts', 'background.ts'),
        // @ts-ignore
        index: resolve(__dirname, 'index.html')
      },
      output: {
        entryFileNames: chunk => `${chunk.name}.js`,
      },
    }
  }
})
