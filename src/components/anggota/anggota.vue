<script setup>
import navbar from '../navbar.vue'
import noProfile from '@/assets/img/kosong.png'
import { ref, computed } from 'vue'

const isAdmin = computed(() => {
  return localStorage.getItem('role') === 'admin'
})

// Props dari luar untuk data anggota
const props = defineProps({
  anggota: {
    type: Object,
    required: true
  }
})

const showModal = ref(false)
const memberId = ref(null)

const form = ref({
  name: '',
  bidang: '',
  keahlian: '',
  tanggalLahir: '',
  pendidikan: '',
  hobi: '',
  judul1: '',
  deskripsi1: '',
  gambar1: null,
  judul2: '',
  deskripsi2: '',
  gambar2: null,
  fotoProfil: null,
  fotoProfilPreview: null,
  youtube: '',
  instagram: '',
  linkx: '',
  linkedin: '',
})

// Buka modal setelah data berhasil diambil
async function openUpdateModal(id) {
  memberId.value = id
  await fetchMemberData(id) // tunggu datanya sampai selesai
  showModal.value = true    // baru tampilkan modal setelah itu
}


// Ambil data dari backend dan isi form
async function fetchMemberData(id) {
  try {
    const response = await fetch(`https://backend-profile-production.up.railway.app/anggota/${id}`)
    const data = await response.json()

    form.value = {
      name: data.name || '',
      bidang: data.bidang || '',
      keahlian: data.keahlian || '',
      tanggalLahir: data.tanggalLahir || '',
      pendidikan: data.pendidikan || '',
      hobi: data.hobi || '',
      judul1: data.judul1 || '',
      deskripsi1: data.deskripsi1 || '',
      gambar1: null,
      judul2: data.judul2 || '',
      deskripsi2: data.deskripsi2 || '',
      gambar2: null,
      fotoProfil: null,
      fotoProfilPreview: data.fotoProfil ? `https://backend-profile-production.up.railway.app/uploads/${data.fotoProfil}` : null,
      youtube: data.sosmed?.[0] || '',
      instagram: data.sosmed?.[1] || '',
      linkx: data.sosmed?.[2] || '',
      linkedin: data.sosmed?.[3] || '',
    }
  } catch (err) {
    console.error('Gagal ambil data anggota', err)
  }
}

// Tangani file upload
function handleFileUpload(field, event) {
  const file = event.target.files[0]
  if (!file) return

  if (field === 'fotoProfil') {
    form.value.fotoProfil = file
    form.value.fotoProfilPreview = URL.createObjectURL(file)
  } else if (field === 1) {
    form.value.gambar1 = file
  } else if (field === 2) {
    form.value.gambar2 = file
  }
}

// Submit PATCH ke backend
async function submitForm() {
  if (!memberId.value) return alert('ID anggota tidak ditemukan.')

  try {
    const sosmedArray = [
      form.value.youtube,
      form.value.instagram,
      form.value.linkx,
      form.value.linkedin,
    ]

    const formData = new FormData()
    formData.append('name', form.value.name)
    formData.append('bidang', form.value.bidang)
    formData.append('keahlian', form.value.keahlian)
    formData.append('tanggalLahir', form.value.tanggalLahir)
    formData.append('pendidikan', form.value.pendidikan)
    formData.append('hobi', form.value.hobi)
    formData.append('judul1', form.value.judul1)
    formData.append('deskripsi1', form.value.deskripsi1)
    formData.append('judul2', form.value.judul2)
    formData.append('deskripsi2', form.value.deskripsi2)

    if (form.value.fotoProfil) formData.append('fotoProfil', form.value.fotoProfil)
    if (form.value.gambar1) formData.append('gambar1', form.value.gambar1)
    if (form.value.gambar2) formData.append('gambar2', form.value.gambar2)

    sosmedArray.forEach(link => formData.append('sosmed', link))

    const response = await fetch(`https://backend-profile-production.up.railway.app/anggota/${memberId.value}`, {
      method: 'PATCH',
      body: formData,
    })
    console.log('Status:', response.status)
    const resText = await response.text()
    console.log('Response body:', resText)


    if (!response.ok) throw new Error('Gagal memperbarui data')
    alert('Data berhasil diperbarui!')
    showModal.value = false
    setTimeout(function () {
      location.reload();
    });
  } catch (error) {
    console.error(error)
    alert('Terjadi kesalahan saat menyimpan data.')
  }
}

// Tutup modal dan reset form
function closeModal() {
  showModal.value = false
  resetForm()
}

// Reset form ke nilai awal
function resetForm() {
  form.value = {
    name: '',
    bidang: '',
    keahlian: '',
    tanggalLahir: '',
    pendidikan: '',
    hobi: '',
    judul1: '',
    deskripsi1: '',
    gambar1: null,
    judul2: '',
    deskripsi2: '',
    gambar2: null,
    fotoProfil: null,
    fotoProfilPreview: null,
    youtube: '',
    instagram: '',
    linkx: '',
    linkedin: '',
  }
  memberId.value = null
}

// Tombol simpan
function saveForm() {
  submitForm()
}
</script>


<template>
    <navbar></navbar>
    <div class="min-h-screen flex flex-col items-center justify-center bg-white py-10 px-4 mt-20">
        <div class="flex flex-col items-center mb-10">
            <img :src="anggota.fotoProfil ? `https://backend-profile-production.up.railway.app/uploads/${anggota.fotoProfil}` : noProfile" alt="Avatar" class="w-40 h-40 border-3 border-gray-300 rounded-full mb-2 object-cover" />
            <h2 class="text-lg font-semibold">{{ anggota.name}}</h2>

            <p class="text-sm text-gray-700">{{ anggota.bidang }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-3xl">
            <div class="text-center md:text-left">
                <p class="text-red-500 font-medium mb-1">Tentang saya</p>
                <h3 class="text-xl font-bold">Keahlian</h3>
                <p class="text-gray-800">{{ anggota.keahlian }}</p>
            </div>

            <div class="text-center md:text-left ml-10">
                <h3 class="text-xl font-bold">Tempat, Tanggal Lahir</h3>
                <p class="text-gray-800"> {{ anggota.tanggalLahir }}</p>
            </div>

            <div class="text-center md:text-left mt-10">
                <h3 class="text-xl font-bold">Riwayat Pendidikan</h3>
                <p class="text-gray-800">{{ anggota.pendidikan }}</p>
            </div>

            <div class="text-center md:text-left ml-10 mt-10">
                <h3 class="text-xl font-bold">social media</h3>

                <div class="flex space-x-4">
                    <!-- Youtube -->
                    <a v-if="anggota?.sosmed?.[0]" :href="anggota.sosmed[0]"
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
                    <a v-if="anggota?.sosmed?.[1]" :href="anggota.sosmed[1]"
                        class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" viewBox="0 0 24 24"
                            fill="currentColor">

                            <path
                                d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.5-1a1 1 0 110 2 1 1 0 010-2z" />
                        </svg>
                    </a>

                    <!-- X -->
                    <a v-if="anggota?.sosmed?.[2]" :href="anggota.sosmed[2]"
                        class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M13.72 10.79l5.58-6.79h-1.35l-4.88 5.94-3.89-5.94H5.11l5.91 9.04-5.91 7.18h1.35l5.21-6.33 4.14 6.33h3.07l-5.16-8.43z" />
                        </svg>
                    </a>

                    <!-- LinkedIn -->
                    <a v-if="anggota?.sosmed?.[3]" :href="anggota.sosmed[3]"
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
                <p class="text-gray-800">{{anggota?.hobi}}</p>
            </div>
        </div>
        <!-- Floating Button -->
        <div v-if="isAdmin" @click="openUpdateModal(anggota._id)"
             class="fixed left-4 top-1/2 transform -translate-y-1/2 bg-red-600 p-2 rounded-full shadow-md cursor-pointer z-50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
                 class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.862 4.487a2.25 2.25 0 013.182 3.182L9.75 16.605a1.125 1.125 0 01-.48.322l-4.5 1.5a1.125 1.125 0 01-1.42-1.42l1.5-4.5a1.125 1.125 0 01.322-.48l8.936-10.294a2.25 2.25 0 011.582-.738z" />
            </svg>
        </div>

    </div>

    <!-- Modal Update Anggota -->
    <transition name="fade">
      <div v-if="showModal" class="fixed inset-0 bg-opacity-20 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-lg w-full max-w-6xl mx-4 md:mx-auto overflow-auto max-h-screen">
          <!-- Header Merah -->
          <div class="bg-red-600 text-white px-6 py-3 rounded-t-lg flex justify-between items-center">
            <h2 class="text-sm font-semibold">Form Update Anggota</h2>
          </div>
        
          <!-- Tombol Tutup Modal -->
          <div @click="closeModal"
               class="fixed left-4 top-1/2 transform -translate-y-1/2 bg-red-600 p-2 rounded-full shadow-md cursor-pointer z-50">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        
          <!-- Body Form -->
          <div class="px-12 py-6">
            <!-- Foto Profil -->
            <div class="flex flex-col items-center mb-4">
              <div class="w-24 h-24 flex items-center justify-center rounded-full bg-gray-100 border border-gray-300 mb-2 overflow-hidden">
                <img v-if="form.fotoProfilPreview" :src="form.fotoProfilPreview" alt="Foto Profil" class="object-cover w-full h-full" />
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0l-4 4m4-4v12" />
                </svg>
              </div>
              <label class="flex items-center justify-center bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-2 rounded cursor-pointer">
                <span class="text-sm font-medium">Upload Foto Profil</span>
                <input type="file" @change="handleFileUpload('fotoProfil', $event)" class="hidden" />
              </label>
            </div>
          
            <!-- Form Inputs -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input v-model="form.name" type="text" placeholder="Nama" class="border px-3 py-2 rounded w-full" />
              <input v-model="form.bidang" type="text" placeholder="Bidang" class="border px-3 py-2 rounded w-full" />
              <input v-model="form.keahlian" type="text" placeholder="Keahlian" class="border px-3 py-2 rounded w-full" />
              <input v-model="form.tanggalLahir" type="text" placeholder="Tempat Tanggal Lahir" class="border px-3 py-2 rounded w-full" />
              <input v-model="form.pendidikan" type="text" placeholder="Riwayat Pendidikan" class="border px-3 py-2 rounded w-full" />
              <input v-model="form.hobi" type="text" placeholder="Hobi" class="border px-3 py-2 rounded w-full" />
              <input v-model="form.judul1" type="text" placeholder="Judul portofolio 1" class="border px-3 py-2 rounded w-full" />
              <input v-model="form.deskripsi1" type="text" placeholder="Deskripsi portofolio 1" class="border px-3 py-2 rounded w-full" />
              <label class="bg-gray-200 text-gray-700 px-3 py-2 rounded w-full text-center cursor-pointer hover:bg-gray-300">
                Upload gambar 1
                <input type="file" @change="handleFileUpload(1, $event)" class="hidden" />
              </label>
              <input v-model="form.judul2" type="text" placeholder="Judul portofolio 2" class="border px-3 py-2 rounded w-full" />
              <input v-model="form.deskripsi2" type="text" placeholder="Deskripsi portofolio 2" class="border px-3 py-2 rounded w-full" />
              <label class="bg-gray-200 text-gray-700 px-3 py-2 rounded w-full text-center cursor-pointer hover:bg-gray-300">
                Upload gambar 2
                <input type="file" @change="handleFileUpload(2, $event)" class="hidden" />
              </label>
            </div>
          
            <!-- Sosial Media -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
              <input v-model="form.youtube" type="text" placeholder="Link Youtube" class="border px-3 py-2 rounded w-full" />
              <input v-model="form.instagram" type="text" placeholder="Link Instagram" class="border px-3 py-2 rounded w-full" />
              <input v-model="form.linkx" type="text" placeholder="Link X" class="border px-3 py-2 rounded w-full" />
              <input v-model="form.linkedin" type="text" placeholder="Link Linkedin" class="border px-3 py-2 rounded w-full" />
            </div>
          
            <!-- Tombol Simpan -->
            <div class="flex justify-end mt-6">
              <button @click="saveForm" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">Simpan</button>
            </div>
          </div>
        </div>
      </div>
    </transition>

</template>

<style>

.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}


</style>