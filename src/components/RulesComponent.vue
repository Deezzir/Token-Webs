<script setup lang="ts"></script>
<script lang="ts">
export default {
  data() {
    return {
      cards: [
        {
          title: 'Some',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icon: '/pipnojeet.png'
        },
        {
          title: 'Some',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icon: '/pipeatdip.png'
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
    class="md:pн-[15rem] relative flex min-h-screen flex-col justify-between bg-[#0166B0] px-8 py-12 text-3xl md:px-36 md:text-5xl"
  >
    <div class="flex flex-col items-center justify-center">
      <div class="flex w-full flex-col items-center justify-center gap-5">
        <h2 class="uppercase">- MAIN RULES -</h2>
        <h3 class="text-center text-4xl uppercase">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
      </div>
      <div class="mt-12 grid grid-rows-1 gap-16 md:mt-24 md:grid-cols-2 2xl:grid-cols-4 2xl:gap-10">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="relative flex flex-col items-center justify-center gap-5 rounded-l-xl rounded-tr-xl bg-[#FDEA33] p-6 text-black"
          :class="index % 2 === 0 ? 'md:translate-y-1/4' : ''"
        >
          <img :src="card.icon" alt="Icon" class="max-h-48" />
          <h3 class="text-center text-3xl uppercase">{{ card.title }}</h3>
          <p class="text-center text-2xl">{{ card.description }}</p>
          <div
            class="index absolute bottom-[5px] right-0 z-20 translate-y-full rounded-b-xl bg-[#FDEA33] px-8 py-2"
          >
            <p class="text-2xl font-bold">{{ index + 1 }}</p>
          </div>
        </div>
      </div>
      <div class="mt-24 flex md:mt-48">
        <h3 class="text-center text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae itaque iure, ab
          nam ipsam, natus iste laudantium quaerat quidem molestias omnis nobis ex ea soluta sunt
          veniam repudiandae inventore.
        </h3>
      </div>
    </div>
  </div>
</template>
