<template>
  <nav class="fixed top-4 left-0 right-0 z-50 flex justify-center">
    <div
      class="hidden md:flex items-center space-x-6 text-white text-sm font-medium bg-[#C53534] rounded-full px-6 py-2 shadow-lg">
      <a v-for="(item, i) in menu" :key="item.name" :href="item.url"
        :target="item.url.startsWith('http') ? '_blank' : '_self'" @click="active = i" :class="[
          active === i ? 'border-b-2 border-white pb-0.5' : 'hover:underline'
        ]">
        {{ item.label }}
      </a>
    </div>

    <!-- Mobile Menu -->
    <div class="md:hidden relative">
      <button @click="isOpen = !isOpen"
        class="text-white bg-[#C53534] border border-red-700 px-4 py-1 rounded-full text-sm">
        Menu
      </button>

      <div v-if="isOpen" class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
        <a v-for="(item, i) in menu" :key="item.name" :href="item.url"
          :target="item.url.startsWith('http') ? '_blank' : '_self'" @click="active = i; isOpen = false" :class="[
            'block px-4 py-2 text-sm text-gray-700 hover:bg-red-100',
            active === i ? 'font-semibold text-red-700' : ''
          ]">
          {{ item.label }}
        </a>
      </div>
    </div>
  </nav>


</template>

<script setup>
import { ref } from 'vue'

const menu = [
  { name: 'profil', label: 'profil', url: '/' },
  { name: 'produk', label: 'produk', url: '/#product' },
  { name: 'blog', label: 'blog', url: 'https://manypage.id/blog' },
  { name: 'karir', label: 'karir', url: 'https://www.linkedin.com/company/pt-booster-teknologi-indonesia' },
  { name: 'Anggota', label: 'Anggota', url: '/keanggota' },
  { name: 'Keuangan', label: 'Keuangan', url: '#' },
]

const active = ref(0)
const isOpen = ref(false)
</script>