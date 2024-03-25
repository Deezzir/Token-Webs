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
    class="z-10 max-w-5xl w-full items-center justify-between text-xl"
    @mouseleave="isHovered = false"
  >
    <div
      class="fixed left-0 top-0 flex w-full justify-center border-b bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl border-[#FFEB3B] bg-[#FF7043] dark:from-inherit"
    >
      <p
        class="[word-spacing:-1px] sm:[word-spacing:0px] relative text-xl sm:text-3xl text-center font-bold text-[#FFF3E0] drop-shadow-[0_3px_3px_rgba(153,69,255,0.7)]"
      >
        $BOBDANCE - Bob Dancing Cockroach
      </p>
    </div>
  </div>
</template>
