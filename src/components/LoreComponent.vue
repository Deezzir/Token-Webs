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
      ],
      touchStartX: 0,
      touchEndX: 0
    }
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length
    },
    handleTouchStart(event: TouchEvent) {
      this.touchStartX = event.changedTouches[0].screenX
    },
    handleTouchEnd(event: TouchEvent) {
      this.touchEndX = event.changedTouches[0].screenX
      this.detectSwipe()
    },
    detectSwipe() {
      const threshold = 50 // Minimum distance of swipe to trigger slide change, adjust as needed
      const swipeRight = this.touchEndX > this.touchStartX + threshold
      const swipeLeft = this.touchEndX < this.touchStartX - threshold

      if (swipeRight) {
        this.prevSlide()
      } else if (swipeLeft) {
        this.nextSlide()
      }
    }
  }
}
</script>

<template>
  <div
    class="flex min-h-screen items-center justify-center bg-[#e2c100] px-12 py-16 text-4xl sm:text-5xl xl:px-[15rem]"
  >
    <div class="flex flex-col items-center justify-center gap-6">
      <h1 class="w-full text-center font-bold uppercase text-black">FRODO LORE</h1>
      <div
        id="default-carousel"
        class="flex w-full flex-col items-center justify-between gap-10 xl:flex-row"
      >
        <div class="flex h-[12vh] w-[30vw] items-center justify-center xl:h-[40vh] xl:w-[12vw]">
          <img src="@/assets/food.png" alt="Food" class="w-full" />
        </div>
        <button
          type="button"
          @click="prevSlide"
          class="hidden cursor-pointer px-2 focus:outline-none xl:flex"
        >
          <span
            class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-black text-white outline-none hover:bg-[#384a28]"
          >
            <PrevIcon />
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <div class="flex w-[35vh] flex-col items-center justify-center 2xl:w-[45vh]">
          <div
            class="m-2 flex overflow-hidden rounded-xl"
            @touchstart="handleTouchStart"
            @touchend="handleTouchEnd"
          >
            <div class="w-full flex-shrink-0" v-for="(slide, index) in slides" :key="index">
              <div
                class="bg-transparent p-3 text-center transition-transform duration-300 ease-in-out"
                :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
              >
                <img class="m-auto" :src="slide.image" alt="Card" />
              </div>
            </div>
          </div>
          <div>
            <button
              v-for="(_, index) in slides"
              type="button"
              @click="currentSlide = index"
              class="mx-3 h-4 w-4 rounded-full px-1 sm:mx-4 sm:h-6 sm:w-6 sm:px-3"
              :class="[index !== currentSlide ? 'bg-black' : 'bg-[#384a28]']"
              :aria-current="index === currentSlide"
              :aria-label="`Slide ${index + 1}`"
            ></button>
          </div>
        </div>
        <button
          @click="nextSlide"
          type="button"
          class="hidden h-full cursor-pointer px-2 focus:outline-none xl:flex"
        >
          <span
            class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-black text-white outline-none hover:bg-[#384a28]"
          >
            <NextIcon />
            <span class="sr-only">Next</span>
          </span>
        </button>
        <div class="flex h-[12vh] w-[30vw] items-center justify-center xl:h-[40vh] xl:w-[12vw]">
          <img src="@/assets/bone.png" alt="Bone" class="w-1/2 rotate-90 xl:h-full xl:rotate-0" />
        </div>
      </div>
    </div>
  </div>
</template>
