import type { App as AppType } from 'vue'
import App from './App.vue'

const isDev = import.meta.env.MODE === 'development'
if (isDev) {
  const { createApp } = await import('vue')
  const PlayGroundApp = (await import('../playground/App.vue')).default
  await import('../playground/assets/main.css')
  createApp(PlayGroundApp).mount('#app')
}

export default {
  install(app: AppType) {
    app.component('MtFocus', App)
  },
}
