import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig(() => ({
  plugins: [vue(), vueJsx()],
  server: {
    watch: {
      usePolling: true, // For Docker.
      ignored: ['!**/node_modules/mt-template-vue-lib-core/**']
    }
  },
  optimizeDeps: {
    exclude: ['mt-template-vue-lib-core']
  }
}))
