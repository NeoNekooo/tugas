// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import anggota from '@/components/anggota.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/anggota', name: 'anggota', component: anggota },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
