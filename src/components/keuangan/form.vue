<script setup>
import { ref, computed, watch } from 'vue'
import Navbar from './../Navbar.vue' // Pastikan path benar

// Data utama
const data = ref([
  { id: 1, tanggal: '2025-05-01', keterangan: 'Penjualan Produk A', nominal: 500000, jenis: 'Pemasukan' },
  { id: 2, tanggal: '2025-05-02', keterangan: 'Pembelian ATK', nominal: 150000, jenis: 'Pengeluaran' },
  // ... data dummy awal lainnya
])

const entriesPerPage = ref(10)
const currentPage = ref(1)
const search = ref('')

watch(search, () => { currentPage.value = 1 })

const filteredData = computed(() => {
  const term = search.value.toLowerCase()
  return data.value.filter(item =>
    item.tanggal.toLowerCase().includes(term) ||
    item.keterangan.toLowerCase().includes(term) ||
    item.jenis.toLowerCase().includes(term)
  )
})

const lastPage = computed(() =>
  Math.ceil(filteredData.value.length / entriesPerPage.value) || 1
)

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * entriesPerPage.value
  return filteredData.value.slice(start, start + entriesPerPage.value)
})

const startEntry = computed(() =>
  filteredData.value.length === 0 ? 0 : (currentPage.value - 1) * entriesPerPage.value + 1
)

const endEntry = computed(() =>
  Math.min(currentPage.value * entriesPerPage.value, filteredData.value.length)
)

const formatCurrency = (v) => 'Rp' + new Intl.NumberFormat('id-ID').format(v)

function goToPage(page) {
  if (page < 1 || page > lastPage.value) return
  currentPage.value = page
}

function confirmDelete(id) {
  if(window.confirm('Apakah Anda yakin ingin menghapus?')) {
    data.value = data.value.filter(item => item.id !== id)
  }
}

// Modal control
const showModal = ref(false)

// Form data dan reset
const form = ref({
  tanggal: '',
  keterangan: '',
  nominal: null,
  jenis: ''
})

function resetForm() {
  form.value = { tanggal: '', keterangan: '', nominal: null, jenis: '' }
}

function tambahData() {
  if (!form.value.tanggal || !form.value.keterangan || !form.value.nominal || !form.value.jenis) {
    alert('Semua field harus diisi!')
    return
  }

  const newId = data.value.length ? Math.max(...data.value.map(d => d.id)) + 1 : 1

  data.value.push({
    id: newId,
    tanggal: form.value.tanggal,
    keterangan: form.value.keterangan,
    nominal: Number(form.value.nominal),
    jenis: form.value.jenis
  })

  alert('Data berhasil ditambahkan!')

  resetForm()
  showModal.value = false
}
</script>

<template>
  <Navbar />

  <div class="absolute w-full h-full overflow-hidden">
    <img src="../../assets/img/wlee.png" alt="background"
      class="w-full h-full object-cover object-top md:object-center md:rotate-0 rotate-90 transition-all duration-500" />
  </div>

  <div class="min-h-screen bg-gradient-to-b from-red-100 via-white to-white">
    <nav class="flex justify-center py-4">
      <div class="bg-red-600 px-6 py-2 rounded-full shadow text-white space-x-6 text-sm font-semibold">
        <!-- Navbar Menu ... -->
      </div>
    </nav>

    <div class="max-w-6xl mx-auto px-4">
      <div class="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
        <div class="bg-red-600 text-white px-4 py-2 font-semibold">Keuangan</div>

        <div class="p-4 space-y-4">
          <!-- Tombol Aksi -->
          <div class="flex flex-wrap gap-2">
            <button
              @click="showModal = true"
              class="bg-gray-200 text-sm px-4 py-2 rounded shadow hover:bg-gray-300 transition"
            >
              Tambah
            </button>
            <button class="bg-gray-200 text-sm px-4 py-2 rounded shadow hover:bg-gray-300 transition">Export</button>
            <button class="bg-gray-200 text-sm px-4 py-2 rounded shadow hover:bg-gray-300 transition">Cetak</button>
          </div>

          <!-- Kontrol & Pencarian -->
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="flex items-center gap-2 text-sm">
              <label for="entries">Show</label>
              <select
                id="entries"
                v-model.number="entriesPerPage"
                class="border border-gray-300 rounded px-2 py-1"
                @change="currentPage = 1"
              >
                <option :value="10">10</option>
                <option :value="25">25</option>
                <option :value="50">50</option>
              </select>
              <span>entries per page</span>
            </div>

            <div class="text-sm">
              <label>Search:</label>
              <input
                type="text"
                v-model="search"
                class="border border-gray-300 rounded px-2 py-1 ml-1 w-full md:w-64"
                placeholder="Cari..."
              />
            </div>
          </div>

          <!-- Tabel -->
          <div class="overflow-x-auto">
            <table class="min-w-full text-sm border border-gray-300">
              <thead class="bg-gray-100 text-left">
                <tr>
                  <th scope="col" class="border px-3 py-2">No</th>
                  <th scope="col" class="border px-3 py-2">Tanggal</th>
                  <th scope="col" class="border px-3 py-2">Keterangan</th>
                  <th scope="col" class="border px-3 py-2">Nominal</th>
                  <th scope="col" class="border px-3 py-2">Jenis</th>
                  <th scope="col" class="border px-3 py-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in paginatedData" :key="item.id" class="hover:bg-gray-50 transition">
                  <td class="border px-3 py-2">{{ startEntry + index }}</td>
                  <td class="border px-3 py-2">{{ item.tanggal }}</td>
                  <td class="border px-3 py-2">{{ item.keterangan }}</td>
                  <td class="border px-3 py-2">{{ formatCurrency(item.nominal) }}</td>
                  <td class="border px-3 py-2">
                    <span
                      :class="{
                        'text-green-600': item.jenis === 'Pemasukan',
                        'text-red-600': item.jenis === 'Pengeluaran'
                      }"
                    >
                      {{ item.jenis }}
                    </span>
                  </td>
                  <td class="border px-3 py-2 space-x-2">
                    <button class="text-blue-600 hover:underline">Edit</button>
                    <button class="text-red-600 hover:underline" @click="confirmDelete(item.id)">Hapus</button>
                  </td>
                </tr>
                <tr v-if="paginatedData.length === 0">
                  <td colspan="6" class="text-center text-gray-500 py-4">Data tidak ditemukan</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div
            class="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 mt-4 gap-4"
          >
            <span>
              Showing {{ startEntry }} to {{ endEntry }} of {{ filteredData.length }} entries
            </span>

            <div class="flex items-center gap-1 flex-wrap justify-center">
              <button
                @click="goToPage(1)"
                :disabled="currentPage === 1"
                class="px-2 py-1 bg-gray-200 rounded text-xs disabled:opacity-50 hover:bg-gray-300 transition"
              >
                &laquo;
              </button>
              <button
                @click="goToPage(currentPage - 1)"
                :disabled="currentPage === 1"
                class="px-2 py-1 bg-gray-200 rounded text-xs disabled:opacity-50 hover:bg-gray-300 transition"
              >
                &lsaquo;
              </button>

              <template v-for="page in lastPage" :key="page">
                <button
                  @click="goToPage(page)"
                  :class="[
                    'px-2 py-1 rounded text-xs transition',
                    page === currentPage
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-gray-200 hover:bg-gray-300'
                  ]"
                >
                  {{ page }}
                </button>
              </template>

              <button
                @click="goToPage(currentPage + 1)"
                :disabled="currentPage === lastPage"
                class="px-2 py-1 bg-gray-200 rounded text-xs disabled:opacity-50 hover:bg-gray-300 transition"
              >
                &rsaquo;
              </button>
              <button
                @click="goToPage(lastPage)"
                :disabled="currentPage === lastPage"
                class="px-2 py-1 bg-gray-200 rounded text-xs disabled:opacity-50 hover:bg-gray-300 transition"
              >
                &raquo;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Background -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
    >
      <!-- Modal Content -->
      <div class="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        <h2 class="text-lg font-semibold mb-4">Tambah Data Keuangan</h2>
        
        <form @submit.prevent="tambahData" class="space-y-4 text-sm">
          <div>
            <label class="block mb-1 font-medium">Tanggal</label>
            <input type="date" v-model="form.tanggal" class="w-full border rounded px-2 py-1" required />
          </div>

          <div>
            <label class="block mb-1 font-medium">Keterangan</label>
            <input type="text" v-model="form.keterangan" class="w-full border rounded px-2 py-1" required />
          </div>

          <div>
            <label class="block mb-1 font-medium">Nominal</label>
            <input type="number" v-model.number="form.nominal" class="w-full border rounded px-2 py-1" required />
          </div>

          <div>
            <label class="block mb-1 font-medium">Jenis</label>
            <select v-model="form.jenis" class="w-full border rounded px-2 py-1" required>
              <option value="">-- Pilih Jenis --</option>
              <option value="Pemasukan">Pemasukan</option>
              <option value="Pengeluaran">Pengeluaran</option>
            </select>
          </div>

          <div class="flex justify-end gap-2">
            <button type="button" @click="showModal = false" class="px-4 py-2 rounded border hover:bg-gray-100">Batal</button>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
