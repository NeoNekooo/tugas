// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import keanggotaan from '@/components/keanggotaan.vue'
import view_amggota from '@/components/anggota/view_amggota.vue'
import login from '@/components/login.vue'
import form from '@/components/form.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/keanggota', name: 'keanggota', component: keanggotaan },
  { path: '/anggota/:id', name: 'anggota', component: view_amggota },
  { path: '/login', name: 'login', component: login },
  { path: '/form', name: 'form', component: form },
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
