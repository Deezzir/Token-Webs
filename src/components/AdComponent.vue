<script setup lang="ts">
import { NextIcon } from './icons'
import PrevIcon from './icons/PrevIcon.vue'
</script>

<script lang="ts">
export default {
  data() {
    return {
      cards: [
        {
          title: 'NYC',
          icon: '/nyc_ad.png'
        },
        {
          title: 'GOOGLE',
          icon: '/google_ad.png'
        },
        {
          title: '',
          icon: '/board.png'
        },
        {
          title: 'TORONTO',
          icon: '/toronto_ad.jpg'
        },
        {
          title: 'LA',
          icon: '/la_ad.png'
        },
        {
          title: 'SOMEWHERE IN THE USA',
          icon: '/usa_ad.png'
        }
      ]
    }
  },
  methods: {}
}
</script>

<template>
  <div
    class="flex min-h-screen items-center justify-center bg-[#0166B0] py-16 text-4xl sm:text-5xl"
  >
    <div class="flex grow flex-col items-center justify-center gap-10">
      <div
        class="flex w-full grow flex-row items-center justify-between bg-[#FCE1AA] px-12 py-6 text-black xl:px-[15rem]"
      >
        <div class="flex flex-col items-start justify-start gap-3">
          <h3 class="text-4xl font-bold">purchase low</h3>
          <h2 class="font-bold uppercase">BEFORE IRAN</h2>
          <p class="text-3xl">launch rockets</p>
          <a class="rounded-xl bg-[#0166B0] px-7 py-4 text-center text-2xl uppercase text-white"
            >Buy Now</a
          >
        </div>
        <div>
          <img src="@/assets/jeets.png" alt="Jeets" class="max-h-96" />
        </div>
      </div>
      <div class="w-full px-12 py-6 xl:px-[15rem]">
        <div class="grid grid-cols-3 grid-rows-1 gap-6">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="flex flex-col items-center justify-center gap-3"
            :class="card.title === '' ? '-translate-y-[35%]' : ''"
          >
            <img :src="card.icon" alt="Ad" class="max-h-[25rem] rounded-xl" />
            <h3 class="text-2xl">{{ card.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
