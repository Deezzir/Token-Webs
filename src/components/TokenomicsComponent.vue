<script setup lang="ts">
import { CopyIcon } from '@/components/icons'
import ArrowIcon from './icons/ArrowIcon.vue'
</script>

<script lang="ts">
export default {
  data() {
    return {
      isHovered: false,
      hasCopied: false,
      isNarrowScreen: false,
      cards: [
        {
          title: 'LAUNCH',
          description:
            'Fair launch at the pump fun. We would let the community speak if they like it or not…'
        },
        {
          title: 'RAYDIUM',
          description:
            'Vault team would handle all necessary updates, do not forget to follow survival guidelines'
        },
        {
          title: '$VAULTBOY',
          description:
            'Our goal is to reach a high MC following the “Fallout” “Iran” and “Crypto Dumps” memes'
        }
      ]
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
    class="flex min-h-screen items-center justify-center bg-[#0166B0] px-8 py-12 text-4xl md:px-36 md:text-5xl"
  >
    <div class="flex w-full flex-col items-center justify-center gap-[4rem]">
      <div class="flex grow flex-col items-center justify-center gap-10 md:flex-row">
        <div class="w-full md:w-[20vw]">
          <img src="@/assets/pippump.png" alt="Pip Pump" class="w-full" />
        </div>
        <h2 class="text-center font-bold uppercase">
          <span class="hidden md:block">- </span>HOW WOULD IT WORK<span class="hidden md:block">
            -</span
          >
        </h2>
        <div class="w-full md:w-[20vw]">
          <img src="@/assets/pipsol.png" alt="Pip Sol" class="w-full" />
        </div>
      </div>
      <div class="mt-12 flex flex-col gap-10 text-black md:flex-row">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="relative flex flex-col items-center justify-center gap-4 rounded-xl bg-white p-10 shadow-md shadow-black"
        >
          <span class="absolute top-0 -translate-y-1/2 rounded-xl bg-[#FDEA33] px-20 py-4"></span>
          <h3 class="mt-12 text-3xl font-bold uppercase">{{ card.title }}</h3>
          <p class="text-center text-2xl">
            {{ card.description }}
          </p>
          <ArrowIcon class="h-8 w-8 md:h-12 md:w-12" />
        </div>
      </div>
      <div>
        <div @mouseleave="isHovered = false" class="flex items-center justify-center">
          <p><b class="">&nbsp;CA:&nbsp;</b>{{ clampedText }}</p>
          <div class="relative px-4" @mouseleave="(isHovered = false), (hasCopied = false)">
            <button @click="copyText" @mouseover="isHovered = true">
              <CopyIcon />
            </button>
            <div
              v-if="isHovered"
              class="absolute min-w-max -translate-x-1/2 whitespace-nowrap rounded bg-gray-700 p-2 text-lg font-bold"
              style="bottom: -100%; left: 50%"
            >
              <p>{{ hasCopied ? 'Copied' : 'Copy to clipboard' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
