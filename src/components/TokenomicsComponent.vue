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
  <div
    class="flex min-h-screen items-center justify-center bg-[#e2c100] px-12 py-16 text-4xl sm:text-5xl xl:px-[15rem]"
  >
    <div class="flex h-full flex-col items-center justify-start gap-7">
      <h1 :href="buyLink" class="w-full text-center font-bold uppercase">Tokenomics</h1>
      <div @mouseleave="isHovered = false" class="flex items-center justify-center">
        <p><b class="">&nbsp;CA:&nbsp;</b>{{ clampedText }}</p>
        <div class="relative px-4" @mouseleave="(isHovered = false), (hasCopied = false)">
          <button @click="copyText" @mouseover="isHovered = true">
            <CopyIcon />
          </button>
          <div
            v-if="isHovered"
            class="absolute min-w-max -translate-x-1/2 whitespace-nowrap rounded bg-[#384a28] p-2 text-lg font-bold"
            style="bottom: -100%; left: 50%"
          >
            <p>{{ hasCopied ? 'Copied' : 'Copy to clipboard' }}</p>
          </div>
        </div>
      </div>
      <div class="mt-8 flex w-full flex-col items-center justify-center gap-16 xl:flex-row">
        <div class="w-[80%] sm:w-[20vw]">
          <img src="@/assets/leaves.png" alt="Leaves" class="w-full" />
        </div>
        <div class="flex flex-col items-center justify-center gap-10">
          <img
            src="@/assets/goup.gif"
            alt="Tokenomics"
            class="w-full rounded-xl border-4 border-black"
          />
          <h2 class="w-full text-center font-bold uppercase">ONLY UP...</h2>
        </div>
        <div class="w-[60%] sm:w-[20vw]">
          <img src="@/assets/food-bag.png" alt="Food Bag" class="w-[90%]" />
        </div>
      </div>
    </div>
  </div>
</template>
