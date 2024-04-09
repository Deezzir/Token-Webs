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
    <div class="flex flex-col gap-6">
      <h1 class="text-black text-center w-full font-bold uppercase">$FRODO LORE</h1>
      <div id="default-carousel" class="relative w-full" data-carousel="static">
        <div class="relative flex overflow-hidden rounded-xl w-[50%] m-auto">
          <div class="w-full flex-shrink-0" v-for="(slide, index) in slides" :key="index">
            <div
              class="bg-transparent p-5 text-center transition-transform duration-300 ease-in-out"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <img class="m-auto w-[65%]" :src="slide.image" alt="" />
            </div>
          </div>
          <button
            type="button"
            @click="prevSlide"
            class="absolute top-0 start-[10rem] z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span
              class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
            >
              <PrevIcon />
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            @click="nextSlide"
            type="button"
            class="absolute top-0 end-[10rem] z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span
              class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
            >
              <NextIcon />
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
        <!-- <div
            class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
          >
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div> -->
        <!-- Slider controls -->
      </div>
    </div>
  </div>
</template>
