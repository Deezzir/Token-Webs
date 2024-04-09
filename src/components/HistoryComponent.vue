<script setup lang="ts">
import { NextIcon } from './icons'
import PrevIcon from './icons/PrevIcon.vue'
</script>

<script lang="ts">
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          image: '/card5.png'
        },
        {
          image: '/card4.png'
        },
        {
          image: '/card3.png'
        },
        {
          image: '/card2.png'
        },
        {
          image: '/card1.png'
        }
      ]
    }
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length
    }
  }
}
</script>

<template>
  <div
    class="min-h-screen flex bg-[#384a28] px-12 py-24 sm:px-[18rem] sm:py-36 relative text-3xl sm:text-5xl justify-center items-center"
  >
    <div class="flex flex-col gap-6 items-center justify-center">
      <h1 class="text-black text-center w-full font-bold uppercase">$FRODO LORE</h1>
      <div id="default-carousel" class="w-full flex flex-row items-center justify-center">
        <button
          type="button"
          @click="prevSlide"
          class="flex items-center px-2 cursor-pointer focus:outline-none justify-self-end"
        >
          <span
            class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-black hover:bg-[#e2c100] group-focus:ring-4 outline-none"
          >
            <PrevIcon />
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <div class="flex overflow-hidden rounded-xl w-[50%] m-auto">
          <div class="w-full flex-shrink-0" v-for="(slide, index) in slides" :key="index">
            <div
              class="bg-transparent p-5 text-center transition-transform duration-300 ease-in-out"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <img class="m-auto w-[65%]" :src="slide.image" alt="Card" />
            </div>
          </div>
        </div>
        <button
          @click="nextSlide"
          type="button"
          class="flex items-center justify-start h-full px-2 cursor-pointer focus:outline-none"
        >
          <span
            class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-black hover:bg-[#e2c100] group-focus:ring-4 outline-none"
          >
            <NextIcon />
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div class="">
        <button
          v-for="(_, index) in slides"
          type="button"
          class="w-8 h-8 px-4 mx-5 rounded-full bg-[#e2c100]"
          :class="{ 'bg-black': index !== currentSlide }"
          :aria-current="index === currentSlide"
          :aria-label="`Slide ${index + 1}`"
        ></button>
      </div>
    </div>
  </div>
</template>
