import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      include: ['/packages/core/*.ts'],
      insertTypesEntry: true,
      copyDtsFiles: false,
      tsConfigFilePath: '../../tsconfig.app.json'
    })
  ],
  resolve: {
    alias: {
      '@/core': fileURLToPath(new URL('.', import.meta.url))
    }
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: fileURLToPath(new URL('index.ts', import.meta.url)),
      name: 'MyLib',
      fileName: 'index'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
