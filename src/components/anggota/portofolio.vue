<script setup>
defineProps(['anggota'])
import noProfile from '@/assets/img/kosong.png'
</script>


<template>
    <div class="min-h-screen flex flex-col bg-white py-10 px-6 md:px-20 items-center">
      <!-- Header -->
      <div class="text-center mb-10">
        <p class="text-red-500 font-semibold">Portofolio</p>
        <h1 class="text-3xl font-bold">Project Terbaru</h1>
      </div>
  
      <!-- Grid Project -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 w-full max-w-5xl">
        <!-- Card 1 -->
        <div>
          <h2 class="text-lg font-bold text-center">{{anggota.judul1}}</h2>
          <p class="text-sm text-gray-700 mb-4 text-center">{{anggota.deskripsi1}}</p>
          <div class="bg-gray-50 rounded-lg shadow overflow-hidden">
            <div class="w-full aspect-video">
              <img
                :src="anggota.gambar1 ? `https://backend-profile-production.up.railway.app/uploads/${anggota.gambar1}` : noProfile" 
                alt="Project Image"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
  
        <!-- Card 2 -->
        <div>
          <h2 class="text-lg font-bold text-center">{{anggota.judul2}}</h2>
          <p class="text-sm text-gray-700 mb-4 text-center">{{anggota.deskripsi2}}</p>
          <div class="bg-gray-50 rounded-lg shadow overflow-hidden">
            <div class="w-full aspect-video">
              <img
                :src="anggota.gambar2 ? `https://backend-profile-production.up.railway.app/uploads/${anggota.gambar2}` : noProfile" 
                alt="Project Image"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  

  