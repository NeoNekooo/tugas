<script setup>
</script>

<template>
    <section id="product" class="py-16 px-4 max-w-6xl mx-auto">
        <h2 class="text-center text-2xl md:text-3xl font-semibold mb-12">Produk Kami</h2>

        <!-- Produk 1-->
        <div class="flex flex-col md:flex-row items-center gap-10 mb-20">
            <div data-aos="fade-right" class="md:w-1/2 relative">
                <div class="absolute -top-4 -left-4 w-full h-full bg-[#C83F3F] rounded-2xl z-0"></div>
                <img src="../assets/img/produk1.png" alt="Manypage" class="relative z-10 rounded-2xl shadow-xl" />
            </div>
            <div class="md:w-1/2">
                <span class="bg-[#C83F3F] text-white px-3 py-1 text-sm rounded-full">Social Media Management</span>
                <h3 class="text-2xl font-bold mt-4 mb-2">Manypage.id</h3>
                <p class="text-gray-700 leading-relaxed">
                    Manypage adalah aplikasi sosial media manajemen pertama di Indonesia yang membantu pelaku bisnis
                    online
                    dalam mengelola akun, penjadwalan postingan dan riset konten untuk multi platform sosial media.
                </p>
                <p class="mt-4 text-gray-700 leading-relaxed">
                    Aplikasi kelola sosial media yang membantu Anda menghemat waktu dan tenaga, membuat konten yang
                    menarik dan relevan,
                    serta melacak hasil posting.
                </p>
            </div>
        </div>

        <!-- Produk 2 -->
        <div class="flex flex-col md:flex-row-reverse items-center gap-10">
            <div data-aos="fade-left" class="md:w-1/2 relative">
                <div class="absolute -top-4 -left-4 w-full h-full bg-green-600 rounded-2xl z-0"></div>
                <img src="../assets/img/produk2.png" alt="Socialchat" class="relative z-10 rounded-2xl shadow-xl" />
            </div>
            <div class="md:w-1/2">
                <span class="bg-green-600 text-white px-3 py-1 text-sm rounded-full">Multi Chat Management</span>
                <h3 class="text-2xl font-bold mt-4 mb-2">Socialchat.id</h3>
                <p class="text-gray-700 leading-relaxed">
                    Socialchat.id adalah platform komunikasi omnichannel campaign yang memungkinkan Anda mengelola,
                    memantau, dan merespons pesan dari berbagai saluran seperti WhatsApp, Messenger, Instagram, Telegram
                    dan Website Anda, semuanya dalam satu dashboard.
                </p>
                <p class="mt-4 text-gray-700 leading-relaxed">
                    Dengan integrasi AI, kami menawarkan solusi chatbot yang memaksimalkan efisiensi, mempercepat
                    respons,
                    dan meningkatkan keterlibatan pelanggan.
                </p>
            </div>
        </div>
    </section>
</template>
