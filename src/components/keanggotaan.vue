<script setup>
import { ref } from 'vue'
import navbar from './navbar.vue'

const showModal = ref(false)

const form = ref({
    nama: '',
    bidang: '',
    keahlian: '',
    ttl: '',
    pendidikan: '',
    hoby: '',
    judul1: '',
    deskripsi1: '',
    gambar1: null,
    judul2: '',
    deskripsi2: '',
    gambar2: null,
    avatar: null,
    youtube: '',
    instagram: '',
    linkx: '',
    linkedin: '',
})

function handleFileUpload(index, event) {
    const file = event.target.files[0]
    if (index === 1) {
        form.value.gambar1 = file
    } else {
        form.value.gambar2 = file
    }
}

function handleAvatarUpload(event) {
    const file = event.target.files[0]
    form.value.avatar = file
}

function closeModal() {
    showModal.value = false
}

function saveForm() {
    // TODO: panggil API atau emit event dengan `form.value`
    console.log('Data akan disimpan:', form.value)
    closeModal()
}
</script>

<template>
    <navbar />

    <div class="flex justify-center items-center min-h-screen bg-white">
        <div class="grid grid-cols-4 gap-10">
            <div></div>
            <div class="col-span-2 flex flex-col items-center">
                <a href="/anggota">
                    <img src="../assets/img/sample1.jpg" alt="avatar" class="w-28 h-28 mb-2 rounded-full" />
                </a>
                <span class="text-sm font-medium">Nama</span>
                <span class="text-xs text-gray-500">Bidang</span>
            </div>
            <div></div>

            <div class="flex flex-col items-center ml-15">
                <img src="../assets/img/sample2.jpg" alt="avatar" class="w-28 h-28 mb-2 rounded-full" />
                <span class="text-sm font-medium">Nama</span>
                <span class="text-xs text-gray-500">Bidang</span>
            </div>
            <div class="flex flex-col items-center">
                <img src="../assets/img/sample2.jpg" alt="avatar" class="w-28 h-28 mb-2 rounded-full" />
                <span class="text-sm font-medium">Nama</span>
                <span class="text-xs text-gray-500">Bidang</span>
            </div>
            <div class="flex flex-col items-center">
                <img src="../assets/img/sample2.jpg" alt="avatar" class="w-28 h-28 mb-2 rounded-full" />
                <span class="text-sm font-medium">Nama</span>
                <span class="text-xs text-gray-500">Bidang</span>
            </div>
            <div class="flex flex-col items-center">
                <img src="../assets/img/sample2.jpg" alt="avatar" class="w-28 h-28 mb-2 rounded-full" />
                <span class="text-sm font-medium">Nama</span>
                <span class="text-xs text-gray-500">Bidang</span>
            </div>
        </div>

        <!-- Floating Button -->
        <div @click="showModal = true"
            class="fixed left-4 top-1/2 transform -translate-y-1/2 bg-red-600 p-2 rounded-full shadow-md cursor-pointer z-50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0M18 14.25h1.5a2.25 2.25 0 010 4.5H18v-4.5z" />
            </svg>
        </div>
    </div>

    <!-- Modal Tambah Anggota -->
    <div v-if="showModal" class="fixed inset-0 bg-opacity-20 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-lg w-full max-w-6xl mx-4 md:mx-auto overflow-auto max-h-screen">
            <!-- Header Merah -->
            <div class="bg-red-600 text-white px-6 py-3 rounded-t-lg flex justify-between items-center">
                <h2 class="text-sm font-semibold">Form Tambah Anggota</h2>
            </div>
            
            <!-- Tombol Tutup Modal -->
            <div @click="closeModal"
                class="fixed left-4 top-1/2 transform -translate-y-1/2 bg-red-600 p-2 rounded-full shadow-md cursor-pointer z-50">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </div>


            <!-- Body Form dengan padding horisontal ekstra -->
            <div class="px-12 py-6">
                <!-- Avatar Upload -->
                <div class="flex justify-center mb-6">
                    <label
                        class="w-24 h-24 flex items-center justify-center rounded-full bg-gray-200 border cursor-pointer hover:bg-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-600" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0l-4 4m4-4v12" />
                        </svg>
                        <input type="file" @change="handleAvatarUpload" class="hidden" />
                    </label>
                </div>

                <!-- Form Inputs -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <!-- Baris 1 -->
                    <input v-model="form.nama" type="text" placeholder="Nama" class="border px-3 py-2 rounded w-full" />
                    <input v-model="form.bidang" type="text" placeholder="Bidang"
                        class="border px-3 py-2 rounded w-full" />
                    <input v-model="form.keahlian" type="text" placeholder="Keahlian"
                        class="border px-3 py-2 rounded w-full" />

                    <!-- Baris 2 -->
                    <input v-model="form.ttl" type="text" placeholder="Tempat Tanggal Lahir"
                        class="border px-3 py-2 rounded w-full" />
                    <input v-model="form.pendidikan" type="text" placeholder="Riwayat Pendidikan"
                        class="border px-3 py-2 rounded w-full" />
                    <input v-model="form.hoby" type="text" placeholder="Hobi" class="border px-3 py-2 rounded w-full" />

                    <!-- Portofolio 1 -->
                    <input v-model="form.judul1" type="text" placeholder="Judul portofolio 1"
                        class="border px-3 py-2 rounded w-full" />
                    <input v-model="form.deskripsi1" type="text" placeholder="Deskripsi portofolio 1"
                        class="border px-3 py-2 rounded w-full" />
                    <label
                        class="bg-gray-200 text-gray-700 px-3 py-2 rounded w-full text-center cursor-pointer hover:bg-gray-300">
                        Upload gambar 1
                        <input type="file" @change="handleFileUpload(1, $event)" class="hidden" />
                    </label>

                    <!-- Portofolio 2 -->
                    <input v-model="form.judul2" type="text" placeholder="Judul portofolio 2"
                        class="border px-3 py-2 rounded w-full" />
                    <input v-model="form.deskripsi2" type="text" placeholder="Deskripsi portofolio 2"
                        class="border px-3 py-2 rounded w-full" />
                    <label
                        class="bg-gray-200 text-gray-700 px-3 py-2 rounded w-full text-center cursor-pointer hover:bg-gray-300">
                        Upload gambar 2
                        <input type="file" @change="handleFileUpload(2, $event)" class="hidden" />
                    </label>
                </div>

                <!-- Sosial Media: 4 kolom -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                    <input v-model="form.youtube" type="text" placeholder="Link Youtube"
                        class="border px-3 py-2 rounded w-full" />
                    <input v-model="form.instagram" type="text" placeholder="Link Instagram"
                        class="border px-3 py-2 rounded w-full" />
                    <input v-model="form.linkx" type="text" placeholder="Link X"
                        class="border px-3 py-2 rounded w-full" />
                    <input v-model="form.linkedin" type="text" placeholder="Link Linkedin"
                        class="border px-3 py-2 rounded w-full" />
                </div>

                <!-- Tombol Simpan -->
                <div class="flex justify-end mt-6">
                    <button @click="saveForm"
                        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
                        Simpan
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped></style>
