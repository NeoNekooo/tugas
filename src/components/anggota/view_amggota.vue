<script setup>
import navbar from '../navbar.vue';
import anggota from './anggota.vue'
import portofolio from './portofolio.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const anggotaData = ref(null)
const isLoading = ref(true)
const route = useRoute()

onMounted(async () => {
  try {
    const res = await axios.get(`https://backend-profile-production.up.railway.app/anggota/${route.params.id}`)
    anggotaData.value = res.data
  } catch (err) {
    console.error('Gagal ambil data anggota:', err)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
    <navbar/>
  <div v-if="isLoading" class="loading-container">
    <div class="loader"></div>
  </div>

  <div v-else>
    <anggota :anggota="anggotaData" />
    <portofolio :anggota="anggotaData" />
  </div>
</template>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loader {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>