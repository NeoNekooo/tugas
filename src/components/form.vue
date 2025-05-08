<template>
    <div class="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="bg-red-600 text-white p-3 font-semibold">
        Form Tambah Anggota
      </div>
      <div class="p-6">
        <div class="flex justify-center mb-4">
          <div class="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 border border-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0l-4 4m4-4v12"/>
            </svg>
          </div>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input v-model="form.nama" type="text" placeholder="Nama" class="bg-gray-100 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input v-model="form.bidang" type="text" placeholder="Bidang" class="bg-gray-100 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input v-model="form.keahlian" type="text" placeholder="Keahlian" class="bg-gray-100 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
  
          <input v-model="form.ttl" type="text" placeholder="Tempat Tanggal Lahir" class="bg-gray-100 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input v-model="form.pendidikan" type="text" placeholder="Riwayat Pendidikan" class="bg-gray-100 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input v-model="form.hoby" type="text" placeholder="Hoby" class="bg-gray-100 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
  
          <input v-model="form.judul1" type="text" placeholder="Judul portofolio 1" class="bg-gray-100 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input v-model="form.deskripsi1" type="text" placeholder="Deskripsi portofolio 1" class="bg-gray-100 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <label class="w-full flex items-center justify-center bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-2 rounded cursor-pointer">
            <span class="text-sm font-medium">Upload Gambar 1</span>
            <input type="file" @change="handleFileUpload(1, $event)" class="hidden" />
          </label>
  
          <input v-model="form.judul2" type="text" placeholder="Judul portofolio 2" class="bg-gray-100 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input v-model="form.deskripsi2" type="text" placeholder="Deskripsi portofolio 2" class="bg-gray-100 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <label class="w-full flex items-center justify-center bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-2 rounded cursor-pointer">
            <span class="text-sm font-medium">Upload Gambar 2</span>
            <input type="file" @change="handleFileUpload(2, $event)" class="hidden" />
          </label>
  
          <input v-model="form.youtube" type="text" placeholder="Link Youtube" class="bg-gray-100 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input v-model="form.instagram" type="text" placeholder="Link Instagram" class="bg-gray-100 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input v-model="form.linkx" type="text" placeholder="Link X" class="bg-gray-100 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input v-model="form.linkedin" type="text" placeholder="Link Linkedin" class="bg-gray-100 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
  
        <div class="flex justify-end mt-6">
          <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Simpan
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
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
          youtube: '',
          instagram: '',
          linkx: '',
          linkedin: '',
        }
      };
    },
    methods: {
      handleFileUpload(index, event) {
        const file = event.target.files[0];
        if (index === 1) {
          this.form.gambar1 = file;
        } else {
          this.form.gambar2 = file;
        }
      }
    }
  }
  </script>
  