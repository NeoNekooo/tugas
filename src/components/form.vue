<template>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="bg-red-600 text-white p-3 font-semibold">
        Form Tambah Anggota
      </div>
      <div class="p-6">
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


  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input v-model="form.name" type="text" placeholder="Nama" class="bg-gray-100 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input v-model="form.bidang" type="text" placeholder="Bidang" class="bg-gray-100 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input v-model="form.keahlian" type="text" placeholder="Keahlian" class="bg-gray-100 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
  
          <input v-model="form.tanggalLahir" type="text" placeholder="Tempat Tanggal Lahir" class="bg-gray-100 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
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
  
          <div class="md:col-span-3">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <input v-model="form.youtube" type="text" placeholder="Link Youtube" class="bg-gray-100 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <input v-model="form.instagram" type="text" placeholder="Link Instagram" class="bg-gray-100 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <input v-model="form.linkx" type="text" placeholder="Link X" class="bg-gray-100 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <input v-model="form.linkedin" type="text" placeholder="Link Linkedin" class="bg-gray-100 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
          </div>
        </div>
  
        <div class="flex justify-end mt-6">
          <button @click="submitForm" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
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
          fotoProfil:null,
          fotoProfilPreview:null,
          youtube: '',
          instagram: '',
          linkx: '',
          linkedin: '',
        }
      };
    },
    methods: {
      handleFileUpload(field, event) {
        const file = event.target.files[0];
        if (!file) return;

        if (field === 'fotoProfil') {
          this.form.fotoProfil = file;
          this.form.fotoProfilPreview = URL.createObjectURL(file); // optional preview
        } else if (field === 1) {
          this.form.gambar1 = file;
        } else if (field === 2) {
          this.form.gambar2 = file;
        }
      },

      async submitForm() {
        try {
          // Gabung sosmed jadi array
          const sosmedArray = [
            this.form.youtube,
            this.form.instagram,
            this.form.linkx,
            this.form.linkedin,
          ];
        
          const formData = new FormData();
          formData.append('name', this.form.name);
          formData.append('bidang', this.form.bidang);
          formData.append('keahlian', this.form.keahlian);
          formData.append('tanggalLahir', this.form.tanggalLahir);
          formData.append('pendidikan', this.form.pendidikan);
          formData.append('hobi', this.form.hoby);
          formData.append('judul1', this.form.judul1);
          formData.append('deskripsi1', this.form.deskripsi1);
          formData.append('judul2', this.form.judul2);
          formData.append('deskripsi2', this.form.deskripsi2);
        
          // Masukkan gambar jika ada
          if (this.form.fotoProfil) formData.append('fotoProfil', this.form.fotoProfil);
          if (this.form.gambar1) formData.append('gambar1', this.form.gambar1);
          if (this.form.gambar2) formData.append('gambar2', this.form.gambar2);
        
          // Tambahkan sosmed ke FormData
          sosmedArray.forEach(link => {
            formData.append('sosmed', link);
          });
        
          const response = await fetch('https://backend-profile-production.up.railway.app/anggota', {
            method: 'POST',
            body: formData,
          });
        
          if (!response.ok) {
            throw new Error('Gagal menyimpan data');
          }
        
          alert('Data berhasil disimpan!');
        } catch (error) {
          console.error(error);
          alert('Terjadi kesalahan saat menyimpan data.');
        }
      }

    }

  }
  </script>
  