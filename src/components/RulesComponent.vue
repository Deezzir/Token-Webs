<script setup lang="ts"></script>
<script lang="ts">
export default {
  data() {
    return {
      cards: [
        {
          title: 'Some',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icon: '/pipeatdip.png'
        },
        {
          title: 'Some',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icon: '/pipnojeet.png'
        },
        {
          title: 'Some',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icon: '/shillhard.png'
        },
        {
          title: 'Some',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icon: '/degen.png'
        }
      ]
    }
  }
}
</script>

<template>
  <div
    class="relative flex min-h-screen flex-col justify-between bg-[#0166B0] px-12 pb-0 pt-32 text-3xl sm:px-48 sm:pt-36 sm:text-5xl 2xl:pt-52"
  >
    <div class="flex flex-col items-center justify-center">
      <div class="flex w-full flex-col items-center justify-center gap-5">
        <h2 class="uppercase">- MAIN RULES -</h2>
        <h3 class="text-center text-4xl uppercase">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
      </div>
      <div class="mt-24 grid grid-cols-4 gap-10">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="flex flex-col items-center justify-center gap-5 rounded-2xl bg-[#FDEA33] p-6 text-black"
          :class="index % 2 === 0 ? 'translate-y-1/4' : ''"
        >
          <img :src="card.icon" alt="Icon" class="max-h-48" />
          <h3 class="text-center text-3xl uppercase">{{ card.title }}</h3>
          <p class="text-center text-2xl">{{ card.description }}</p>
        </div>
      </div>
      <div class="mt-48 flex">
        <h3 class="text-center text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae itaque iure, ab
          nam ipsam, natus iste laudantium quaerat quidem molestias omnis nobis ex ea soluta sunt
          veniam repudiandae inventore.
        </h3>
      </div>
    </div>
  </div>
</template>
