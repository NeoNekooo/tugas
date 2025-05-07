// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import anggota from '@/components/anggota.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/anggota', name: 'anggota', component: anggota },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach(() => {
  setTimeout(() => {
    AOS.refresh()
  }, 100)
})

export default router
