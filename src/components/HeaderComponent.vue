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
      ca: 'Coming'
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
      if (this.ca.length <= 6) {
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
  <div class="flex flex-col place-items-center px-12">
    <p
      class="[word-spacing:2px] sm:[word-spacing:4px] text-2xl sm:text-4xl text-center font-bold pt-10 pb-1"
    >
      WHAT IS <span class="btn-wrapper-text-white">$WAF</span> ?
    </p>
    <p class="text-xl sm:text-2xl text-center py-5 w-[35%]">
      <s class="decoration-4">CAT</s> $WAF
      <s class="decoration-4"
        >HAT ISNT LITERATTY A CAT WITH A WAFFLE HAT ITS NOT A DOG WIF HAT ITS NOT A BASIC CAT WIF
        HAT ITS NOT A SHARK CAT OR BATMAN CAT ITS EVEN NOT A DOG AT ALL. ITS OUR FRESH STAR ITS
        SYMBOL OF A NEW ERA IN FINANCE AND TECHNOLOGY.</s
      >
    </p>
    <img
      alt="waf"
      fetchpriority="high"
      width="400"
      height="400"
      decoding="async"
      data-nimg="1"
      class="rounded-lg"
      style="color: transparent"
      src="../assets/waf.jpg"
    />
    <div class="flex flex-row items-center justify-center mt-3 text-4xl">
      <p><b>&nbsp;Contract Adress:&nbsp;</b>{{ clampedText }}</p>
      <div class="relative px-2" @mouseleave="(isHovered = false), (hasCopied = false)">
        <button class="text-black" @click="copyText" @mouseover="isHovered = true">
          <CopyIcon />
        </button>
        <div
          v-if="isHovered"
          class="absolute p-2 mt-2 bg-gray-700 text-white text-sm rounded min-w-max whitespace-nowrap -translate-x-1/2"
          style="bottom: -120%; left: 50%"
        >
          <p>{{ hasCopied ? 'Copied' : 'Copy to clipboard' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-wrapper-text-white {
  display: inline-block;
  position: relative;
  padding: 0px 30px;
  border: 2px solid #000;
  border-radius: 50px;
  color: #057d84;
  transform: rotate(358deg);
  -webkit-transform: rotate(358deg);
  box-shadow: 5px 3px 0px 0px #057d84;
  -webkit-box-shadow: 5px 3px 0px 0px #057d84;
}
</style>
