<template>
    <div class="min-h-screen flex flex-col items-center justify-center relative px-4">
      <!-- Background -->
      <div class="absolute inset-0 overflow-hidden -z-10">
        <img src="../assets/img/wlee.png" alt="background"
          class="w-full h-full object-cover object-top md:object-center md:rotate-0 rotate-90 transition-all duration-500">
      </div>
  
      <!-- Header Text -->
      <div class="absolute top-10 w-full flex justify-center z-10">
        <div class="flex items-center gap-3">
          <!-- Logo -->
          <img src="../assets/img/logo.png" alt="Logo" class="w-10 h-auto" />
  
          <!-- Teks Vertikal -->
          <ul class="text-[#C53534] whitespace-nowrap list-none text-sm font-bold">
            <li>PT BOOSTER</li>
            <li>TEKNOLOGI INDONESIA</li>
          </ul>
        </div>
      </div>
  
      <!-- Form Login -->
      <div class="bg-white p-10 rounded-md max-w-md w-full text-center shadow-black shadow-xl z-10">
        <h1 class="text-3xl font-semibold mb-6 text-gray-800">Welcome!</h1>
        <form action="" method="post" class="space-y-4 text-left">
          <!-- Username -->
          <div class="flex items-center bg-gray-100 rounded-md px-3 py-2">
            <span class="text-gray-500 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5.121 17.804A9.953 9.953 0 0112 15c2.21 0 4.243.715 5.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <input type="text" name="username" placeholder="Username"
              class="bg-transparent outline-none w-full" required>
          </div>
  
          <!-- Password -->
          <div class="flex items-center bg-gray-100 rounded-md px-3 py-2">
            <span class="text-gray-500 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 11c0-1.105.895-2 2-2s2 .895 2 2v1h-4v-1zM6 9v1h2v-.5a4 4 0 118 0V10h2V9a6 6 0 10-12 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 15h16v4H4v-4z" />
              </svg>
            </span>
            <input type="password" name="password" placeholder="Password"
              class="bg-transparent outline-none w-full" required>
          </div>
  
          <!-- Login Button -->
          <div class="pt-2">
            <button type="submit"
              class="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  