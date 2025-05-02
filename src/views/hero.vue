<script setup>
import navbar from "../components/navbar.vue";
// import { ref } from 'vue';
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
      <div class="text-[#C53534] whitespace-nowrap list-none text-sm font-bold mt-2">
        <li>PT BOOSTER</li>
        <li>TEKNOLOGI INDONESIA</li>
      </div>

      <navbar></navbar>

      <button
        class="hidden md:inline-block bg-[#C53534] text-white text-sm py-2 px-4 rounded-full hover:bg-red-700 mt-2">
        Hubungi Kami
      </button>
    </nav>

    <!-- Konten Hero -->
    <div class="flex-grow flex items-center justify-center px-6 text-center relative z-10 mb-8">
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
