<script setup lang="ts">
import { CopyIcon } from '@/components/icons'
</script>

<script lang="ts">
export default {
  data() {
    return {
      isHovered: false,
      hasCopied: false,
      isNarrowScreen: false
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
      if (!this.isNarrowScreen || this.CA.length < 7) {
        return this.CA
      }
      const start = this.CA.substring(0, 4)
      const end = this.CA.substring(this.CA.length - 4)
      return `${start}...${end}`
    },
    CA(): string {
      return this.$CA
    },
    buyLink(): string {
      return this.$buyLink
    }
  },
  methods: {
    copyText() {
      this.hasCopied = true
      navigator.clipboard.writeText(this.CA)
    },
    checkScreenSize() {
      this.isNarrowScreen = window.innerWidth < 40000
    }
  }
}
</script>

<template>
  <div class="min-h-screen">
    <div class="grid grid-cols-1 gap-5 h-full justify-start items-center text-2xl sm:text-3xl">
      <h1 :href="buyLink" class="text-white text-center w-full font-bold uppercase">
        Stop trading, start vibing
      </h1>
      <div @mouseleave="isHovered = false" class="flex justify-center items-center">
        <p><b class="">&nbsp;CA:&nbsp;</b>{{ clampedText }}</p>
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
  </div>
</template>
