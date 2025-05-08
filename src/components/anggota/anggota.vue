<script setup>
import navbar from '../navbar.vue';
</script>

<template>
    <navbar></navbar>
    <div class="min-h-screen flex flex-col items-center justify-center bg-white py-10 px-4 mt-20">
        <div class="flex flex-col items-center mb-10">
            <img src="../../assets/img/sample1.jpg" alt="Avatar" class="w-32 h-32 rounded-full mb-2 object-cover" />
            <h2 class="text-lg font-semibold">Nama</h2>
            <p class="text-sm text-gray-700">Bidang</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-3xl">
            <div class="text-center md:text-left">
                <p class="text-red-500 font-medium mb-1">Tentang saya</p>
                <h3 class="text-xl font-bold">Keahlian</h3>
                <p class="text-gray-800">Saya Bisa Berteman Dengan Semua Orang</p>
            </div>

            <div class="text-center md:text-left ml-10">
                <h3 class="text-xl font-bold">Lahir</h3>
                <p class="text-gray-800"> 1200 tahun lalu</p>
            </div>

            <div class="text-center md:text-left mt-10">
                <h3 class="text-xl font-bold">Riwayat Pendidikan</h3>
                <p class="text-gray-800">Sarjana Percintaan</p>
            </div>

            <div class="text-center md:text-left ml-10 mt-10">
                <h3 class="text-xl font-bold">social media</h3>
                <p class="text-gray-800">backend tambahin icon</p>
            </div>

            <div class="text-center md:text-left mt-10">
                <h3 class="text-xl font-bold">Hobby</h3>
                <p class="text-gray-800">kucingg ❤️❤️❤️❤️</p>
            </div>
        </div>
    </div>
</template>

