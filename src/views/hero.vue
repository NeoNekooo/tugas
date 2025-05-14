<script setup>

import { ref, computed } from 'vue';

const showModal = ref(false);  // Untuk kontrol modal konfirmasi logout

const isAdmin = computed(() => {
  return localStorage.getItem('role') === 'admin'
})

// Fungsi untuk logout (misalnya, kamu akan mengarahkan ke halaman login atau menghapus session)
const logout = () => {
  console.log('Logout');

  
  // Menghapus token dan role dari localStorage
  localStorage.removeItem('token')
  localStorage.removeItem('role')

  alert('Anda Berhasil Logout')
  showModal.value = false
  location.reload()
};


</script>

<template>
  <section class="relative min-h-screen bg-white overflow-hidden flex flex-col">

    <!-- background -->
    <div class="absolute w-full h-full overflow-hidden">
      <img src="../assets/img/wlee.png" alt="background"
        class="w-full h-full object-cover object-top md:object-center md:rotate-0 rotate-90 transition-all duration-500">
    </div>

    <!-- Navbar -->
    <nav class="w-full z-20 px-6 py-4 flex justify-between items-center relative">
      <!-- Logo dan Nama Perusahaan -->
      <div class="text-[#C53534] whitespace-nowrap list-none text-sm font-bold mt-2">
        <li>PT BOOSTER</li>
        <li>TEKNOLOGI INDONESIA</li>
      </div>

      <!-- Tombol Hubungi Kami dan Logout -->
      <div class="flex items-center gap-4">
        <!-- Tombol Hubungi Kami -->
        <button class="hidden md:inline-block bg-[#C53534] text-white text-sm py-2 px-4 rounded-full hover:bg-red-700 mt-2">
          Hubungi Kami
        </button>

        <!-- Tombol Logout -->
        <button v-if="isAdmin" @click="showModal = true" class="bg-[#C53534] text-white text-sm py-2 px-4 rounded-full hover:bg-red-700 mt-2">
          Logout
        </button>
      </div>
    </nav>

    <!-- Konfirmasi Modal Logout -->
    <div v-if="showModal" class="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-md w-96 text-center">
        <h2 class="text-lg font-semibold mb-4">Yakin ingin logout?</h2>
        <div class="flex justify-center gap-4">
          <button @click="logout" class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Logout</button>
          <button @click="showModal = false" class="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">Batal</button>
        </div>
      </div>
    </div>

    <!-- Konten Hero -->
    <div data-aos="zoom-in" class="flex-grow flex items-center justify-center px-6 text-center relative z-10 mb-8">
      <div>
        <h1 class="text-3xl md:text-6xl font-bold text-black leading-tight">
          Software Hebat, <br> Bisnis Melesat
        </h1>
        <p class="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Solusi Digital untuk Mengoptimalkan Pertumbuhan dan Produktivitas Bisnis Anda dengan Teknologi Terjangkau.
        </p>
        <div class="mt-8 flex justify-center">
          <a href="#statistik"
            class="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition duration-300">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </div>

  </section>
</template>
