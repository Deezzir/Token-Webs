<script setup lang="ts">
import { CopyIcon } from '@/components/icons'
import { defineComponent } from 'vue'
</script>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      isHovered: false,
      hasCopied: false,
      isNarrowScreen: false,
      ca: '49LjUPSvyFei2FgsaHM9QQAVzCLakJUx5M21BnzRgXho'
    }
  },
  created() {
    this.checkScreenSize()
    window.addEventListener('resize', this.checkScreenSize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize)
  },
  computed: {
    clampedText(): string {
      if (!this.isNarrowScreen) {
        return this.ca
      }
      const start = this.ca.substring(0, 4)
      const end = this.ca.substring(this.ca.length - 4)
      return `${start}...${end}`
    }
  },
  methods: {
    copyText() {
      this.hasCopied = true
      navigator.clipboard.writeText(this.ca)
    },
    checkScreenSize() {
      this.isNarrowScreen = window.innerWidth < 768
    }
  }
})
</script>

<template>
  <div
    class="z-10 max-w-5xl w-full items-center justify-between text-2xl"
    @mouseleave="isHovered = false"
  >
    <div
      class="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit"
    >
      <p>
        <b class="text-[#14F195] drop-shadow-[0_3px_3px_rgba(153,69,255,0.7)]">&nbsp;CA:&nbsp;</b
        >{{ clampedText }}
      </p>
      <div class="relative px-2" @mouseleave="(isHovered = false), (hasCopied = false)">
        <button @click="copyText" @mouseover="isHovered = true">
          <CopyIcon />
        </button>
        <div
          v-if="isHovered"
          class="absolute p-2 bg-gray-700 text-white text-sm rounded min-w-max whitespace-nowrap -translate-x-1/2"
          style="bottom: -120%; left: 50%"
        >
          <p>{{ hasCopied ? 'Copied' : 'Copy to clipboard' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
