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
          title: 'SOMEWHERE IN THE IRAN',
          icon: '/usa_ad.png'
        }
      ]
    }
  },
  methods: {},
  computed: {
    buyLink(): string {
      return this.$buyLink
    }
  }
}
</script>

<template>
  <div
    class="flex min-h-screen items-center justify-center bg-[#0166B0] py-12 text-4xl md:text-5xl"
  >
    <div class="flex grow flex-col items-center justify-center gap-10">
      <div
        class="flex w-full grow flex-col items-center justify-between bg-[#FCE1AA] px-8 py-6 text-black md:flex-row xl:px-36"
      >
        <div class="flex flex-col items-center justify-center gap-3 md:items-start">
          <h3 class="text-4xl font-bold">purchase low</h3>
          <h2 class="font-bold uppercase">BEFORE IRAN</h2>
          <p class="text-3xl">launch rockets</p>
          <a
            :href="buyLink"
            class="rounded-xl bg-[#0166B0] px-7 py-4 text-center text-2xl uppercase text-white hover:bg-white hover:text-black"
            >Buy Now</a
          >
        </div>
        <div>
          <img src="@/assets/jeets.png" alt="Jeets" class="mt-12 max-h-96 md:mt-0" />
        </div>
      </div>
      <div class="w-full px-12 py-6 xl:px-36">
        <div class="grid grid-flow-row gap-6 md:grid-cols-2 md:grid-rows-1 2xl:grid-cols-3">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="flex flex-col items-center justify-center gap-3"
            :class="
              card.title === ''
                ? ' row-start-1 md:col-start-2 md:-translate-y-[35%] 2xl:col-start-3'
                : ''
            "
          >
            <img :src="card.icon" alt="Ad" class="max-h-[25rem] rounded-xl" />
            <h3 class="text-2xl">{{ card.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
