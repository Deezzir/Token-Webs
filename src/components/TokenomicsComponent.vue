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
    class="flex min-h-screen items-center justify-center bg-[#0166B0] px-12 py-16 text-4xl sm:text-5xl xl:px-[15rem]"
  ></div>
</template>
