<script setup lang="ts">
import { TwitterIcon, TelegramIcon, PumpIcon, CopyIcon, DexIcon } from '@/components/icons'
import { defineComponent } from 'vue'
</script>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      isHovered: false,
      hasCopied: false,
      isNarrowScreen: false,
      ca: 'BJNzdhKyZEp8x2tp3kENCbKhKRiVwVcWLvXRZzJ5pump'
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
  <div class="flex flex-row justify-center items-center pt-5 pb-2">
    <a
      href="https://x.com/wvwvvvvvvvv"
      rel="noopener noreferrer"
      class="text-[#181818] font-bold p-3 sm:p-6 rounded px-4 sm:mx-6"
    >
      <TwitterIcon />
    </a>
    <a
      href="https://t.me/vwvwvwvvvvw"
      rel="noopener noreferrer"
      class="text-[#181818] font-bold p-3 sm:p-6 rounded px-4 sm:mx-6"
    >
      <TelegramIcon />
    </a>
    <a
      href="https://www.pump.fun/BJNzdhKyZEp8x2tp3kENCbKhKRiVwVcWLvXRZzJ5pump"
      rel="noopener noreferrer"
      class="text-[#181818] font-bold p-3 sm:p-6 rounded px-4 sm:mx-6"
    >
      <PumpIcon />
    </a>
    <a
      href="https://dexscreener.com/solana/coming"
      rel="noopener noreferrer"
      class="text-[#181818] font-bold p-3 sm:p-6 rounded px-4 sm:mx-6"
    >
      <DexIcon />
    </a>
  </div>
  <div class="flex w-full justify-center text-4xl sm:text-6xl pb-6">
    <p><b class="">&nbsp;CA:&nbsp;</b>{{ clampedText }}</p>
    <div class="relative px-6 py-2" @mouseleave="(isHovered = false), (hasCopied = false)">
      <button @click="copyText" @mouseover="isHovered = true">
        <CopyIcon />
      </button>
      <div
        v-if="isHovered"
        class="absolute p-2 bg-black text-white text-sm rounded min-w-max whitespace-nowrap -translate-x-1/2"
        style="bottom: -40%; left: 50%"
      >
        <p>{{ hasCopied ? 'Copied' : 'Copy to clipboard' }}</p>
      </div>
    </div>
  </div>
</template>
