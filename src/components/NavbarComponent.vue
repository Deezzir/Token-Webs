<script setup lang="ts">
import { TwitterIcon, TelegramIcon, RaydiumIcon } from '@/components/icons'
import DexIcon from './icons/DexIcon.vue'
</script>

<script lang="ts">
export default {
  data() {
    return {
      currentTime: this.getCurrentTime(),
      timer: 0,
      currentNav: 0,
      nav: [
        {
          name: 'Description.txt - Notepad',
          icon: '/icons/notepad.png',
          action: 'toggleNote'
        },
        {
          name: 'Desert1.png - IrfanView',
          icon: '/icons/irfan.png',
          action: 'toggleIrfan1'
        },
        {
          name: 'MyMibibis - IrfanView',
          icon: '/icons/irfan.png',
          action: 'toggleIrfan2'
        },
        {
          name: 'untitled - Paint',
          icon: '/icons/paint.png',
          action: 'togglePaint'
        }
        // {
        //   name: 'Mibibi - Dexscreener',
        //   icon: '/icons/dex.png',
        //   action: 'toggleDex'
        // }
      ],
      clickedMenu: false
    }
  },
  emits: ['press'],
  methods: {
    getCurrentTime() {
      const now = new Date()
      let hours = now.getHours()
      const minutes = now.getMinutes()
      const ampm = hours >= 12 ? 'PM' : 'AM'

      hours = hours % 12
      hours = hours ? hours : 12
      const strHours = hours < 10 ? `0${hours}` : hours
      const strMinutes = minutes < 10 ? `0${minutes}` : minutes

      return `${strHours}:${strMinutes} ${ampm}`
    },
    updateCurrentTime() {
      this.currentTime = this.getCurrentTime()
    },
    toggleMenu() {
      this.clickedMenu = !this.clickedMenu
    },
    closeMenu() {
      this.clickedMenu = false
    },
    handlePress(index: number) {
      this.currentNav = index
      this.$emit('press')
    }
  },
  mounted() {
    this.timer = setInterval(this.updateCurrentTime, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<template>
  <nav
    class="fixed bottom-0 z-50 flex h-10 w-full select-none items-center justify-between overflow-x-auto border-[1px] border-t-[#fff] bg-[#c0c0c0] px-3 text-xs sm:text-base"
  >
    <div class="flex flex-row items-center justify-center gap-1">
      <div :class="clickedMenu ? 'shadow-clicked bg-checker-pattern' : 'window-shadow'">
        <button
          @click="toggleMenu"
          v-click-outside="closeMenu"
          class="cursor-pointer bg-[url('/icons/windows_logo.png')] bg-[length:25px] bg-[position:10px_50%] bg-no-repeat py-1 pl-10 pr-2 font-[500] text-black"
        >
          Menu
        </button>
      </div>
      <div
        class="mx-[1px] h-7 border-[1px] border-b-[#fff] border-l-[#808080] border-r-[#fff] border-t-[#808080]"
      ></div>
      <div
        v-for="(item, index) in nav"
        :class="currentNav === index ? 'shadow-clicked bg-checker-pattern' : 'window-shadow'"
      >
        <button
          :key="index"
          @click="handlePress(index)"
          :style="{ backgroundImage: `url(${item.icon})` }"
          class="cursor-pointer text-nowrap bg-[length:20px] bg-[position:10px_50%] bg-no-repeat py-1 pl-10 pr-2 font-[500] text-black"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
    <div
      class="ml-2 border-[1px] border-b-[#fff] border-l-[#808080] border-r-[#fff] border-t-[#808080] px-6 py-1 text-base text-black sm:ml-0"
    >
      <p class="text-nowrap">{{ currentTime }}</p>
    </div>
  </nav>
  <div v-show="clickedMenu" class="absolute bottom-[35px] left-0 z-[60] text-black">
    <div
      class="window-shadow flex h-[15rem] w-[15rem] flex-col items-center justify-center gap-1 border-[1px] border-gray-400 bg-[#c0c0c0] p-1"
    >
      <img src="@/assets/vision.gif" alt="vision gif" class="object-cover" />
    </div>
  </div>
</template>
