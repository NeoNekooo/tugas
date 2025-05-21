<script setup>
import { ref, onMounted, computed } from 'vue' 
import navbar from './navbar.vue'
import noProfile from '@/assets/img/kosong.png'

const anggota = ref([]); // Data anggota yang diambil dari MongoDB
const ketua = ref(null); // Ketuan akan diset di sini
const showDeleteModal = ref(false)
const idToDelete = ref(null)
const showModal = ref(false)

const isAdmin = computed(() => {
  return localStorage.getItem('role') === 'admin'
})

onMounted(async () => {
  // Ambil data anggota dari MongoDB
  const response = await fetch('https://backend-profile-production.up.railway.app/anggota');
  const data = await response.json();

  // Menyaring ketua berdasarkan nama
  ketua.value = data.find(anggota => anggota.name === 'Sultan Malik Ahmad'); // Ganti dengan nama ketua yang sesuai
  anggota.value = data.filter(anggota => anggota.name !== 'Sultan Malik Ahmad'); // Mengambil anggota selain ketua
});


const form = ref({
  name: '',
  bidang: '',
  keahlian: '',
  tanggalLahir: '',
  pendidikan: '',
  hoby: '',
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

async function submitForm() {
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
    formData.append('hobi', form.value.hoby)
    formData.append('judul1', form.value.judul1)
    formData.append('deskripsi1', form.value.deskripsi1)
    formData.append('judul2', form.value.judul2)
    formData.append('deskripsi2', form.value.deskripsi2)

    if (form.value.fotoProfil) formData.append('fotoProfil', form.value.fotoProfil)
    if (form.value.gambar1) formData.append('gambar1', form.value.gambar1)
    if (form.value.gambar2) formData.append('gambar2', form.value.gambar2)

    sosmedArray.forEach(link => {
      formData.append('sosmed', link)
    })

    const response = await fetch('https://backend-profile-production.up.railway.app/anggota', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) throw new Error('Gagal menyimpan data')
    alert('Data berhasil disimpan!')
    showModal.value = false
    setTimeout(function () {
      location.reload();
    });
  } catch (error) {
    console.error(error)
    alert('Terjadi kesalahan saat menyimpan data.')
  }
}

function closeModal() {
  showModal.value = false
}

function confirmDelete(id) {
  idToDelete.value = id
  showDeleteModal.value = true
}

async function deleteAnggota() {
  try {
    const response = await fetch(`https://backend-profile-production.up.railway.app/anggota/${idToDelete.value}`, {
      method: 'DELETE'
    })

    if (!response.ok) throw new Error('Gagal menghapus anggota')

    alert('Anggota berhasil dihapus')
    showDeleteModal.value = false
    location.reload()
  } catch (err) {
    alert('Terjadi kesalahan saat menghapus')
  }
}

function saveForm() {
  submitForm()
}
</script>


<template>
    <navbar />

    <div :class="[
      'flex justify-center items-center min-h-screen bg-white',
      anggota.length > 4 ? 'mt-30' : 'mt-0'
      ]">
        <div class="grid grid-cols-4 gap-10">
          <div></div>
          <!-- Ketua -->
          <div v-if="ketua" class="-mt-10 col-span-4 flex flex-col items-center ">
            
            <div class="relative w-40 h-40 mb-2 group">
              <a :href="`/anggota/${ketua._id}`">
                <img 
                  :src="ketua.fotoProfil ? `https://backend-profile-production.up.railway.app/uploads/${ketua.fotoProfil}` : noProfile" 
                  alt="avatar" 
                  class="w-40 h-40 rounded-full border-3 border-gray-300 transition duration-200" 
                />
              </a>
            
              <!-- Tombol X muncul saat hover -->
              <button
                v-if="isAdmin"
                @click="confirmDelete(ketua._id)"
                class="absolute top-1 right-1 text-gray-600 rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600 shadow opacity-0 group-hover:opacity-100 transition duration-200"
              >
                x
              </button>
            </div>


            <span class="text-sm font-medium">{{ ketua.name }}</span>
            <span class="text-xs text-gray-500">{{ ketua.bidang }}</span>
          </div>
      
          <!-- Anggota -->
          <div v-for="(anggota, index) in anggota" :key="anggota._id" class="flex flex-col items-center mx-5">

            <div class="relative w-40 h-40 mb-2 group">
            <a :href="`/anggota/${anggota._id}`">
              <img 
                :src="anggota.fotoProfil ? `https://backend-profile-production.up.railway.app/uploads/${anggota.fotoProfil}` : noProfile" 
                alt="avatar" 
                class="w-40 h-40 mb-2 rounded-full" 
              />
            </a>
            <!-- Tombol X muncul saat hover -->
              <button
                v-if="isAdmin"
                @click="confirmDelete(anggota._id)"
                class="absolute top-1 right-1 text-gray-600 rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600 shadow opacity-0 group-hover:opacity-100 transition duration-200"
              >
                x
              </button>
            </div>
            <span class="text-sm font-medium">{{ anggota.name }}</span>
            <span class="text-xs text-gray-500">{{ anggota.bidang }}</span>
          </div>
        </div>

        <!-- Floating Button -->
         <div v-if="isAdmin">
           <div @click="showModal = true"
               class="fixed left-4 top-1/2 transform -translate-y-1/2 bg-red-600 p-2 rounded-full shadow-md cursor-pointer z-50">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
                   class="w-6 h-6">
                   <path stroke-linecap="round" stroke-linejoin="round"
                       d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0M18 14.25h1.5a2.25 2.25 0 010 4.5H18v-4.5z" />
               </svg>
           </div>
         </div>
    </div>

    <!-- Modal Tambah Anggota -->
     <transition name="fade">
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
                  <div class="flex flex-col items-center mb-4">
                    <!-- Foto Profil -->
                    <div class="w-24 h-24 flex items-center justify-center rounded-full bg-gray-100 border border-gray-300 mb-2 overflow-hidden">
                      <img
                        v-if="form.fotoProfilPreview"
                        :src="form.fotoProfilPreview"
                        alt="Foto Profil"
                        class="object-cover w-full h-full"
                      />
                      <svg
                        v-else
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0l-4 4m4-4v12"
                        />
                      </svg>
                    </div>
                  
                    <label class="flex items-center justify-center bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-2 rounded cursor-pointer">
                      <span class="text-sm font-medium">Upload Foto Profil</span>
                      <input type="file" @change="handleFileUpload('fotoProfil', $event)" class="hidden" />
                    </label>
                  </div>

                  <!-- Form Inputs -->
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <!-- Baris 1 -->
                      <input v-model="form.name" type="text" placeholder="Nama" class="border px-3 py-2 rounded w-full" />
                      <input v-model="form.bidang" type="text" placeholder="Bidang"
                          class="border px-3 py-2 rounded w-full" />
                      <input v-model="form.keahlian" type="text" placeholder="Keahlian"
                          class="border px-3 py-2 rounded w-full" />

                      <!-- Baris 2 -->
                      <input v-model="form.tanggalLahir" type="text" placeholder="Tempat Tanggal Lahir"
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
    </transition>

    <transition name="fade">
      <div v-if="showDeleteModal" class="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
        <div class="bg-white p-6 rounded-lg shadow-md w-96 text-center">
          <h2 class="text-lg font-semibold mb-4">Yakin ingin menghapus anggota ini?</h2>
          <div class="flex justify-center gap-4">
            <button @click="deleteAnggota" class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Hapus</button>
            <button @click="showDeleteModal = false" class="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">Batal</button>
          </div>
        </div>
      </div>
    </transition>


</template>

<style scoped>


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
