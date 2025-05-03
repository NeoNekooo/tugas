<template>
    <div class="bg-white">
  
      <!-- Lokasi -->
      <section class="px-11 py-20 max-w-7xl mx-auto">
        <h2 class="text-center text-3xl font-bold mb-10">Lokasi</h2>
        <div class="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-lg">
          
          <!-- Informasi Alamat -->
          <div class="bg-black text-white flex-1 p-8 flex items-center justify-center text-center">
            <div>
              <h3 class="text-xl font-semibold mb-2">Indonesia</h3>
              <p class="leading-relaxed">
                44XJ+5X6, Sirnagalih, Kec. Cilaku, Kabupaten<br />
                Cianjur, Jawa Barat
              </p>
            </div>
          </div>
  
          <!-- Google Maps -->
          <iframe
            class="flex-1 w-full h-[250px] md:h-[300px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.320820579773!2d107.12982297499595!3d-6.852093593146257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68532e2d1892a3%3A0x7744c77f2914f10d!2sPT%20Booster%20Teknologi%20Indonesia!5e0!3m2!1sid!2sid!4v1746196398236!5m2!1sid!2sid"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-neutral-900 text-white pt-10 px-6">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/20">
  
          <!-- Logo -->
          <div>
            <img src="#" alt="Logo" class="h-6 mb-2" />
            <p class="text-sm text-gray-400">PT BOOSTER TEKNOLOGI INDONESIA</p>
          </div>
  
          <!-- Produk & Perusahaan -->
          <div class="flex justify-between text-sm">
            <div>
              <p class="font-semibold mb-2">Produk</p>
              <p>Socialchat</p>
              <p>Manypage</p>
            </div>
            <div>
              <p class="font-semibold mb-2">Perusahaan</p>
              <p>Tentang</p>
              <p>Testimoni</p>
              <p>Anggota</p>
              <p>Keuangan</p>
            </div>
          </div>
  
          <!-- Kontak -->
          <div class="text-sm text-right">
            <a href="mailto:admin@booster.id" class="hover:underline">admin@booster.id</a>
          </div>
        </div>
  
        <div class="text-sm text-gray-400 py-6">
          Copyright © 2024. All rights reserved.
        </div>
      </footer>
  
    </div>
  </template>
  