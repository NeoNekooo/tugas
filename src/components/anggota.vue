            <script>
            import { FaLinkedin, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
            import navbar from "./navbar.vue";

            export default {
              data() {
                return {
                  selectedMember: null,
                  members: [
                    {
                      id: 1,
                      name: 'Nama',
                      bidang: 'Bidang',
                      keahlian: 'Tentang saya',
                      tanggalLahir: 'Cianjur 27-12-2007',
                      pendidikan: 'Sarjana Komputer',
                      hobi: 'Gayming',
                      sosmed: [
                        { icon: FaYoutube, url: 'https://youtube.com' },
                        { icon: FaInstagram, url: 'https://instagram.com' },
                        { icon: FaTiktok, url: 'https://tiktok.com' },
                        { icon: FaLinkedin, url: 'https://linkedin.com' },
                      ],
                    },
                  ],
                };
              },
              methods: {
                openModal(member) {
                  this.selectedMember = member;
                },
              },
            };
</script>

<template>
  <div class="relative py-16 px-4 max-w-7xl mx-auto text-center">
    <Navbar></navbar>
    <h2 class="text-3xl font-bold mb-12">Anggota</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <div v-for="member in members" :key="member.id" class="cursor-pointer hover:scale-105 transition"
        @click="openModal(member)">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" class="w-20 h-20 mx-auto" />
        <p class="mt-2 font-semibold">{{ member.name }}</p>
        <p class="text-sm text-gray-600">{{ member.bidang }}</p>
      </div>
    </div>
    <!-- Modal -->
    <div v-if="selectedMember" class="fixed inset-0 backdrop-blur-sm bg-white/60 flex items-center justify-center z-50">
      <div class="bg-white p-8 rounded-2xl max-w-4xl w-full shadow-xl relative text-left">
        <button @click="selectedMember = null"
          class="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-xl">×</button>

        <div class="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <!-- Profile -->
          <div class="text-center">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" class="w-24 h-24 mx-auto mb-2" />
            <p class="font-semibold text-lg">{{ selectedMember.name }}</p>
            <p class="text-sm text-gray-600">{{ selectedMember.bidang }}</p>
          </div>

          <!-- Tentang Saya -->
          <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p class="text-sm text-red-500 font-semibold mb-1">Tentang saya</p>
              <p><strong>Keahlian:</strong> {{ selectedMember.keahlian }}</p>
              <p><strong>Lahir:</strong> {{ selectedMember.tanggalLahir }}</p>
            </div>
            <div>
              <p><strong>Riwayat Pendidikan:</strong></p>
              <p>{{ selectedMember.pendidikan }}</p>
            </div>
            <div>
              <p><strong>Hobi:</strong></p>
              <p>{{ selectedMember.hobi }}</p>
            </div>
            <div>
              <p><strong>Social Media:</strong></p>
              <div class="flex gap-2 mt-1">
                <a v-for="link in selectedMember.sosmed" :key="link.url" :href="link.url" target="_blank"
                  class="text-black hover:text-blue-600 text-xl">
                  <component :is="link.icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

