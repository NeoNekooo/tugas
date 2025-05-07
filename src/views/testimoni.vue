<script setup>
import sample1 from '../assets/img/sample1.jpg'
import sample2 from '../assets/img/sample2.jpg'

const testimonies = [
  {
    name: 'Gaming',
    title: 'femboy slayer',
    content: 'saya sangat rekomendasi produk ini',
    size: 'w-80',
    image: sample1,
  },
  {
    name: 'Gaming',
    title: 'negrowrow',
    content: 'saya suka sekali aplikasi ini dan sangat membantu rekomendasi banget deh',  
    size: 'w-72',
    image: sample1,
  },
  {
    name: 'Gaming',
    title: 'knee grow',
    content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus',
    size: 'w-96',
    image: sample1,
  },
  {
    name: 'Gaming',
    title: 'naigrow',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur distinctio, molestiae sapiente explicabo, cupiditate quae perspiciatis illo nobis possimus totam consequuntur numquam velit doloremque voluptatibus nemo? Beatae optio sequi amet?',
    size: 'w-96',
    image: sample2,
  },
  {
    name: 'Gaming',
    title: 'pleler',
    content: 'kepimpipompampogpimpungpagpampojpokpimpolpoipulpayblablaalbalalbalablablblablabalblala',
    size: 'w-80',
    image: sample2,
  },
  {
    name: 'Gaming',
    title: 'negroro',
    content: 'miftah negro',
    size: 'w-72',
    image: sample2,
  }
]
</script>

<template>
  <section class="px-4 py-20 max-w-7xl mx-auto">
    <h2 class="text-center text-3xl md:text-4xl font-bold mb-16">Testimoni</h2>

    <div class="flex flex-wrap gap-8 justify-center items-start">
      <div
        v-for="(card, index) in testimonies"
        :key="index"
        :class="[
          'bg-gray-100 rounded-2xl p-6 shadow-md flex flex-col',
          card.size
        ]"
      >
        <p class="text-gray-700 text-sm mb-6 leading-relaxed break-words">
          "{{ card.content }}"
        </p>
        <div class="flex items-center mt-auto">
          <img
            :src="card.image"
            alt="Avatar"
            class="w-10 h-10 rounded-full mr-3 object-cover"
          />
          <div>
            <p class="font-semibold text-base">{{ card.name }}</p>
            <p class="text-sm text-gray-500">{{ card.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
