<template>
  <div class="overflow-hidden whitespace-nowrap bg-black py-5">
    <div class="animate-marquee inline-block">
      <span v-for="n in 20" :key="n" class="text-white text-xl mx-8">
        PT. Booster Teknologi Indonesia
      </span>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 30s linear infinite;
}
</style>