<script setup lang="ts">
import { defineComponent } from 'vue'
</script>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      images: ['/memes/meme1.png', '/memes/meme2.png', '/memes/meme3.png'],
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
      <transition-group
        name="slide"
        tag="div"
        class="flex w-[18rem] sm:w-[30rem] h-[18rem] sm:h-[30rem] items-center justify-center overflow-hidden max-h-[18rem] sm:max-h-[30rem]"
      >
        <img
          :key="current"
          :src="images[current]"
          alt="Meme"
          class="max-w-full max-h-full rounded-xl"
        />
      </transition-group>
      <div class="flex flex-col items-center justify-center">
        <button
          @click="handleImageClick"
          class="relative group w-48 h-48"
          @mouseenter="hover = true"
          @mouseleave="hover = false"
        >
          <img src="@/assets/waffle.png" alt="waffle" class="w-full h-full object-cover" />
          <img
            src="@/assets/paw.png"
            alt="Paw"
            class="absolute inset-[1rem] w-40 h-40 object-cover opacity-0 group-hover:opacity-100 transition-opacity"
          />
          <transition name="fade">
            <img
              v-show="click"
              :src="crumbs[currentCrumb]"
              alt="Crumbs"
              class="absolute -inset-y-[1rem] w-[16rem] h-[16rem] object-cover"
            />
          </transition>
        </button>
        <p class="text-2xl">Paw for a Meme</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  position: relative;
  overflow: hidden;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  will-change: transform;
}
.slide-enter-from,
.slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
.slide-leave-from {
  transform: translate3d(0%, 0, 0);
}
.slide-enter-to,
.slide-leave-from {
  transform: translate3d(0%, 0, 0);
}
.slide-leave-to {
  transform: translate3d(-100%, 0, 0);
}
.image-slide {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate3d(0, 0, 0);
  will-change: transform, opacity;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
  will-change: opacity;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
