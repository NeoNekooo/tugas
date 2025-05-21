<script setup>
import { ref, computed, watch } from 'vue'
import navbar from './../navbar.vue' // Pastikan path dan penulisan case benar

const data = ref([
//   { id: 1, tanggal: '2025-05-01', keterangan: 'Penjualan Produk A', nominal: 500000, jenis: 'Pemasukan' },
//   { id: 2, tanggal: '2025-05-02', keterangan: 'Pembelian ATK', nominal: 150000, jenis: 'Pengeluaran' },
//   { id: 3, tanggal: '2025-05-02', keterangan: 'Pembelian ATK', nominal: 150000, jenis: 'Pengeluaran' },
//   { id: 4, tanggal: '2025-05-02', keterangan: 'Pembelian ATK', nominal: 150000, jenis: 'Pengeluaran' },
//   { id: 5, tanggal: '2025-05-02', keterangan: 'Pembelian ATK', nominal: 150000, jenis: 'Pengeluaran' },
//   { id: 6, tanggal: '2025-05-02', keterangan: 'Pembelian ATK', nominal: 150000, jenis: 'Pengeluaran' },
//   { id: 7, tanggal: '2025-05-02', keterangan: 'Pembelian ATK', nominal: 150000, jenis: 'Pengeluaran' },
//   { id: 8, tanggal: '2025-05-02', keterangan: 'Pembelian ATK', nominal: 150000, jenis: 'Pengeluaran' },
//   { id: 9, tanggal: '2025-05-02', keterangan: 'Pembelian ATK', nominal: 150000, jenis: 'Pengeluaran' },
//   { id: 10, tanggal: '2025-05-02', keterangan: 'Pembelian ATK', nominal: 150000, jenis: 'Pengeluaran' },
//   { id: 11, tanggal: '2025-05-02', keterangan: 'Pembelian ATK', nominal: 150000, jenis: 'Pengeluaran' },
//   { id: 12, tanggal: '2025-05-02', keterangan: 'Pembelian ATK', nominal: 150000, jenis: 'Pengeluaran' },
//   { id: 13, tanggal: '2025-05-02', keterangan: 'Pembelian ATK', nominal: 150000, jenis: 'Pengeluaran' },
//   { id: 14, tanggal: '2025-05-02', keterangan: 'Pembelian ATK', nominal: 150000, jenis: 'Pengeluaran' },
  // ... (ubah semua nominal ke number tanpa format Rp)
])

const entriesPerPage = ref(10)
const currentPage = ref(1)
const search = ref('')

// Watcher untuk reset halaman saat pencarian
watch(search, () => {
  currentPage.value = 1
})

const filteredData = computed(() => {
  const searchTerm = search.value.toLowerCase()
  return data.value.filter(item => 
    item.tanggal.toLowerCase().includes(searchTerm) ||
    item.keterangan.toLowerCase().includes(searchTerm) ||
    item.jenis.toLowerCase().includes(searchTerm)
  )
})

const lastPage = computed(() => 
  Math.ceil(filteredData.value.length / entriesPerPage.value) || 1
)

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * entriesPerPage.value
  const end = start + entriesPerPage.value
  return filteredData.value.slice(start, end)
})

const startEntry = computed(() => 
  filteredData.value.length === 0 ? 0 : (currentPage.value - 1) * entriesPerPage.value + 1
)

const endEntry = computed(() =>
  Math.min(currentPage.value * entriesPerPage.value, filteredData.value.length)
)

// Format currency
const formatCurrency = (value) => {
  return 'Rp' + new Intl.NumberFormat('id-ID').format(value)
}

// Navigasi halaman
function goToPage(page) {
  if (page < 1 || page > lastPage.value) return
  currentPage.value = page
}

// Konfirmasi hapus
function confirmDelete(id) {
  if(window.confirm('Apakah Anda yakin ingin menghapus?')) {
    data.value = data.value.filter(item => item.id !== id)
    alert('Data berhasil dihapus!')
  }
}

// Modal control
const showModal = ref(false)

// Form data
const form = ref({
  tanggal: '',
  keterangan: '',
  nominal: null,
  jenis: ''
})

// Fungsi reset form
function resetForm() {
  form.value.tanggal = ''
  form.value.keterangan = ''
  form.value.nominal = 0
  form.value.jenis = 'Pemasukan'
}

function openTambahForm() {
  const today = new Date().toISOString().slice(0, 10)
  form.value.tanggal = today
  form.value.keterangan = ''
  form.value.nominal = 0
  form.value.jenis = 'Pemasukan'
  showModal.value = true
}


const showEditModal = ref(false)
const editForm = ref({
  id: null,
  tanggal: '',
  keterangan: '',
  nominal: null,
  jenis: ''
})

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


// Reset form edit (optional)
function resetEditForm() {
  editForm.value = { id: null, tanggal: '', keterangan: '', nominal: null, jenis: '' }
}

function openEditModal(item) {
  editForm.value = { ...item } // copy data item ke form
  showEditModal.value = true
}

function saveEdit() {
  if (!editForm.value.tanggal || !editForm.value.keterangan || !editForm.value.nominal || !editForm.value.jenis) {
    alert('Semua field harus diisi!')
    return
  }

  const index = data.value.findIndex(d => d.id === editForm.value.id)
  if (index !== -1) {
    data.value[index] = {
      id: editForm.value.id,
      tanggal: editForm.value.tanggal,
      keterangan: editForm.value.keterangan,
      nominal: Number(editForm.value.nominal),
      jenis: editForm.value.jenis
    }
  }

  alert('Data berhasil diperbarui!')
  showEditModal.value = false
  resetEditForm()
}

function formatDate(isoDate) {
  const date = new Date(isoDate)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`  // Format: dd/mm/yyyy
}


function exportData() {
  const headers = ['ID', 'Tanggal', 'Keterangan', 'Nominal', 'Jenis']
  // Gunakan filteredData.value, dan format tanggal jadi YYYY-MM-DD
  const rows = filteredData.value.map(d => [
    d.id,
    formatDate(d.tanggal),  // potong jadi tanggal saja
    d.keterangan,
    d.nominal,
    d.jenis
  ])

  let csvContent = headers.join(',') + '\n' + rows.map(e => e.join(',')).join('\n')

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.setAttribute('download', 'data-keuangan.csv')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function printTable() {
  const printWindow = window.open('', '_blank')
  const tableRows = filteredData.value.map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${formatDate(item.tanggal)}</td>
      <td>${item.keterangan}</td>
      <td>${formatCurrency(item.nominal)}</td>
      <td>${item.jenis}</td>
    </tr>
  `).join('')

  const html = `
    <html>
      <head>
        <title>Print Data Keuangan</title>
        <style>
          body { font-family: sans-serif; padding: 20px; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { border: 1px solid #333; padding: 8px; text-align: left; font-size: 14px; }
          th { background-color: #eee; }
        </style>
      </head>
      <body>
        <h2>Data Keuangan</h2>
        <table>
          <thead>
            <tr>
              <th>No</th><th>Tanggal</th><th>Keterangan</th><th>Nominal</th><th>Jenis</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      </body>
    </html>
  `

  printWindow.document.write(html)
  printWindow.document.close()

  printWindow.onload = () => {
    printWindow.focus()
    printWindow.print()
    printWindow.close()
  }
}


</script>

<template>
  <navbar />

  <!-- Background -->
  <div class="absolute w-full h-full overflow-hidden pointer-events-none">
  <img src="../../assets/img/wlee.png" alt="background"
    class="w-full h-full object-cover object-top md:object-center md:rotate-0 rotate-90 transition-all duration-500">
    </div>


  <div class="min-h-screen bg-gradient-to-b from-red-100 via-white to-white">
    <!-- Navbar Menu -->
    <nav class="flex justify-center py-4">
      <div class="bg-red-600 px-6 py-2 rounded-full shadow text-white space-x-6 text-sm font-semibold">
        <!-- ... (menu tetap sama) -->
      </div>
    </nav>

    <!-- Card Utama -->
    <div class="max-w-6xl mx-auto px-4">
      <div class="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
        <div class="bg-red-600 text-white px-4 py-2 font-semibold">Keuangan</div>

        <div class="p-4 space-y-4">
          <!-- Tombol Aksi -->
          <div class="flex flex-wrap gap-2">
  <button @click="openTambahForm" class="bg-gray-200 text-sm px-4 py-2 rounded shadow hover:bg-gray-300 transition">Tambah</button>
  <button @click="exportData" class="bg-gray-200 text-sm px-4 py-2 rounded shadow hover:bg-gray-300 transition">Export</button>
  <button @click="printTable" class="bg-gray-200 text-sm px-4 py-2 rounded shadow hover:bg-gray-300 transition">Cetak</button>
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
                <tr 
                  v-for="(item, index) in paginatedData" 
                  :key="item.id" 
                  class="hover:bg-gray-50 transition"
                >
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
                    <button class="text-blue-600 hover:underline" @click="openEditModal(item)">Edit</button>
                    <button 
                      class="text-red-600 hover:underline"
                      @click="confirmDelete(item.id)"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr v-if="paginatedData.length === 0">
                  <td colspan="6" class="text-center text-gray-500 py-4">Data tidak ditemukan</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div class="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 mt-4 gap-4">
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
              
              <button 
  v-for="page in lastPage" 
  :key="page"
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
  </div>
  <!-- Modal Background -->
<div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
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
<!-- Modal Edit -->
<div v-if="showEditModal" class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
  <div class="bg-white rounded-lg shadow-lg w-96 p-6 relative">
    <h2 class="text-lg font-semibold mb-4">Edit Data Keuangan</h2>

    <form @submit.prevent="saveEdit" class="space-y-4 text-sm">
      <div>
        <label class="block mb-1 font-medium">Tanggal</label>
        <input type="date" v-model="editForm.tanggal" class="w-full border rounded px-2 py-1" required />
      </div>

      <div>
        <label class="block mb-1 font-medium">Keterangan</label>
        <input type="text" v-model="editForm.keterangan" class="w-full border rounded px-2 py-1" required />
      </div>

      <div>
        <label class="block mb-1 font-medium">Nominal</label>
        <input type="number" v-model.number="editForm.nominal" class="w-full border rounded px-2 py-1" required />
      </div>

      <div>
        <label class="block mb-1 font-medium">Jenis</label>
        <select v-model="editForm.jenis" class="w-full border rounded px-2 py-1" required>
          <option value="">-- Pilih Jenis --</option>
          <option value="Pemasukan">Pemasukan</option>
          <option value="Pengeluaran">Pengeluaran</option>
        </select>
      </div>

      <div class="flex justify-end gap-2">
        <button type="button" @click="showEditModal = false" class="px-4 py-2 rounded border hover:bg-gray-100">Batal</button>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Simpan</button>
      </div>
    </form>
  </div>
</div>
</template>

<style scoped>
.keuangan-page {
  position: relative;
  min-height: 100vh;
  background: #f9f9f9;
}

.background-dekoratif {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  background: radial-gradient(circle, rgba(255, 0, 0, 0.1) 10%, transparent 70%);
  z-index: -1;
}
</style>
