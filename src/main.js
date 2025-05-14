import './assets/main.css'
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'

const app = createApp(App)
app.use(router)
app.mount('#app')

AOS.init({
  duration: 1000,
  once: true,
})
