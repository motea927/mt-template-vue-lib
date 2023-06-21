import { fileURLToPath } from 'node:url'
import { configDefaults, defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vue(), vueJsx()],
  test: {
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'e2e/*'],
    include: ['**/__test__/*.spec.ts'],
    root: fileURLToPath(new URL('./', import.meta.url)),
    transformMode: {
      web: [/\.[jt]sx$/]
    }
  }
})
