<template>
  <section class="px-4 py-20 max-w-7xl mx-auto">
    <h2 class="text-center text-3xl md:text-4xl font-bold mb-16">Testimoni</h2>

    <div class="flex flex-wrap gap-8 justify-center">
      <div v-for="(card, index) in testimonies" :key="index" :class="[
        'bg-gray-100 rounded-2xl p-6 shadow-md flex flex-col justify-between',
        card.size
      ]">
        <p class="text-gray-700 text-sm mb-6 leading-relaxed">
          "{{ card.content }}"
        </p>
        <div class="flex items-center mt-auto">
          <div class="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
          <div>
            <p class="font-semibold text-base">{{ card.name }}</p>
            <p class="text-sm text-gray-500">{{ card.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonies = [
  {
    name: 'Gayming',
    title: 'femboy slayer',
    content: 'miftah negro',
    size: 'w-96 h-60'
  },
  {
    name: 'Gayming',
    title: 'knee grow',
    content: 'miftah negro',
    size: 'w-80 h-56'
  },
  {
    name: 'Gayming',
    title: 'negrowrow',
    content: 'miftah negro',
    size: 'w-72 h-52'
  },
  {
    name: 'Gayming',
    title: 'naigrow',
    content: 'miftah negro',
    size: 'w-96 h-64'
  },
  {
    name: 'Gayming',
    title: 'pleler',
    content: 'miftah negro.',
    size: 'w-80 h-56'
  },
  {
    name: 'Gayming',
    title: 'negroro',
    content: 'miftah negro',
    size: 'w-72 h-52'
  }
]
</script>