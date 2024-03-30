<script setup lang="ts">
import { defineComponent } from 'vue'
</script>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      images: [
        '/memes/meme0.jpg',
        '/memes/meme1.jpg',
        '/memes/meme2.jpg',
        '/memes/meme3.png',
        '/memes/meme4.jpg',
        '/memes/meme5.png',
        '/memes/meme6.jpg',
        '/memes/meme7.png',
        '/memes/meme8.jpg',
        '/memes/meme9.png',
        '/memes/meme10.png',
        '/memes/meme11.png',
        '/memes/meme12.png',
        '/memes/meme13.png',
        '/memes/meme14.png',
        '/memes/meme15.png',
        '/memes/meme16.png',
        '/memes/meme17.png',
        '/memes/meme18.png',
        '/memes/meme19.png',
        '/memes/meme20.png',
        '/memes/meme21.png',
        '/memes/meme22.png',
        '/memes/meme23.png',
        '/memes/meme24.png',
        '/memes/meme25.png',
        '/memes/meme26.png',
        '/memes/meme27.png',
        '/memes/meme28.png',
        '/memes/meme29.png',
        '/memes/meme30.png',
        '/memes/meme31.png',
        '/memes/meme32.png',
        '/memes/meme33.png',
        '/memes/meme34.png',
        '/memes/meme35.png',
        '/memes/meme36.png'
      ],

      crumbs: [
        '/memes/crumbs.png',
        '/memes/crumbs1.png',
        '/memes/crumbs2.png',
        '/memes/crumbs3.png'
      ],
      current: 0,
      currentCrumb: 0,
      hover: false,
      click: false,
      timerId: null as number | null
    }
  },
  methods: {
    showRandomImage() {
      this.current = (this.current + 1) % this.images.length
    },
    handleImageClick() {
      this.showRandomImage()
      this.currentCrumb = (this.currentCrumb + 1) % this.crumbs.length
      this.click = true
      if (this.timerId) {
        clearTimeout(this.timerId)
      }

      this.timerId = setTimeout(() => {
        this.click = false
        this.timerId = null
      }, 500)
    }
  }
})
</script>

<template>
  <div class="flex flex-col place-items-center bg-[#7AA8b8] px-12 py-6">
    <div class="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-x-14 mt-3">
      <div
        class="slider-container flex w-[18rem] sm:w-[40rem] h-[18rem] sm:h-[40rem] items-center justify-center overflow-hidden max-h-[22rem] sm:max-h-[40rem]"
      >
        <transition-group name="slide" tag="div" class="flex items-center justify-center">
          <img
            :key="current"
            :src="images[current]"
            alt="Displayed Image"
            class="max-w-full max-h-full rounded-xl transition-transform duration-500"
          />
        </transition-group>
      </div>
      <div class="flex flex-col items-center justify-center">
        <button
          @click="handleImageClick"
          class="relative group sm:w-48 sm:h-48 h-32 w-32"
          @mouseenter="hover = true"
          @mouseleave="hover = false"
        >
          <img src="@/assets/waffle.png" alt="waffle" class="w-full h-full object-cover" />
          <img
            src="@/assets/paw.png"
            alt="Paw"
            class="absolute inset-[1rem] sm:w-40 sm:h-40 h-24 w-24 object-cover opacity-0 group-hover:opacity-100 transition-opacity"
          />
          <transition name="fade">
            <img
              v-show="click"
              :src="crumbs[currentCrumb]"
              alt="Crumbs"
              class="absolute -inset-y-[1rem] sm:w-[16rem] sm:h-[16rem] w-[10rem] h-[10rem] object-cover"
            />
          </transition>
        </button>
        <p class="text-2xl z-20">Paw for a Meme</p>
      </div>
    </div>
  </div>
</template>

<style>
/* Container adjustments for overflow during animation */
.slider-container {
  position: relative;
}

/* Transition group adjustments */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}
.slide-enter, .slide-leave-to /* starting and end position for enter/leave transitions */ {
  transform: translateX(-100%);
}
</style>
