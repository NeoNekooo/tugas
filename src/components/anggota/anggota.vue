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

                <div class="flex space-x-4">
                    <!-- Youtube -->
                    <a href="#"
                        class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="0,5" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-youtube-icon lucide-youtube">
                            <path
                                d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                            <path d="m10 15 5-3-5-3z" />
                        </svg>
                    </a>

                    <!-- Instagram -->
                    <a href="#"
                        class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" viewBox="0 0 24 24"
                            fill="currentColor">

                            <path
                                d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.5-1a1 1 0 110 2 1 1 0 010-2z" />
                        </svg>
                    </a>

                    <!-- X -->
                    <a href="#"
                        class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M13.72 10.79l5.58-6.79h-1.35l-4.88 5.94-3.89-5.94H5.11l5.91 9.04-5.91 7.18h1.35l5.21-6.33 4.14 6.33h3.07l-5.16-8.43z" />
                        </svg>
                    </a>

                    <!-- LinkedIn -->
                    <a href="#"
                        class="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.96 0-1.72-.78-1.72-1.72s.76-1.72 1.72-1.72 1.72.78 1.72 1.72-.76 1.72-1.72 1.72zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.37h.04c.4-.76 1.36-1.56 2.8-1.56 3 0 3.55 1.97 3.55 4.53v5.66z" />
                        </svg>
                    </a>
                </div>

            </div>

            <div class="text-center md:text-left mt-10">
                <h3 class="text-xl font-bold">Hobby</h3>
                <p class="text-gray-800">kucingg ❤️❤️❤️❤️</p>
            </div>
        </div>
    </div>
</template>
