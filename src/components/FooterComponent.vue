<script setup lang="ts">
import { TwitterIcon, TelegramIcon, PumpIcon, DevIcon } from '@/components/icons'
</script>

<script lang="ts">
export default {
  computed: {
    twitter(): string {
      return this.$twitter
    },
    telegram(): string {
      return this.$telegram
    },
    buyLink(): string {
      return this.$buyLink
    },
    telegramDev(): string {
      return this.$telegramDev
    }
  }
}
</script>

<template>
  <footer
    class="bg-[#384a28] py-2 text-center text-white backdrop-blur transition-colors duration-500"
  >
    <p class="flex flex-row items-center justify-center gap-2">
      <span class="text-sm sm:text-xl">$FRODO &copy; 2024</span>
      <span class="inline-flex">
        <a :href="twitter" rel="noopener noreferrer" class="mx-1 rounded p-2 font-bold text-white">
          <TwitterIcon class="h-6 w-6" />
        </a>
        <a :href="telegram" rel="noopener noreferrer" class="mx-1 rounded p-2 font-bold text-white">
          <TelegramIcon class="h-6 w-6" />
        </a>
        <a :href="buyLink" rel="noopener noreferrer" class="mx-1 rounded p-2 font-bold text-white">
          <PumpIcon class="h-6 w-6" />
        </a>
        <a
          :href="telegramDev"
          rel="noopener noreferrer"
          class="mx-1 rounded p-2 font-bold text-white"
        >
          <DevIcon class="h-6 w-6" />
        </a>
      </span>
    </p>
  </footer>
</template>
