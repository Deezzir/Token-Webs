<script setup lang="ts">
import { TwitterIcon, TelegramIcon, PumpIcon } from '@/components/icons'
import { defineComponent } from 'vue'
</script>

<script lang="ts">
export default defineComponent({
  computed: {
    twitter(): string {
      return this.$twitter
    },
    telegram(): string {
      return this.$telegram
    },
    buyLink(): string {
      return this.$buyLink
    }
  }
})
</script>

<template>
  <footer class="bg-black text-center py-2 text-white backdrop-blur transition-colors duration-500">
    <p class="flex flex-row items-center justify-center gap-2">
      <span class="text-sm sm:text-xl">$GANDALF PARTY &copy; 2024</span>
      <span class="inline-flex">
        <a :href="twitter" rel="noopener noreferrer" class="text-white font-bold p-2 rounded mx-1">
          <TwitterIcon class="w-6 h-6" />
        </a>
        <a :href="telegram" rel="noopener noreferrer" class="text-white font-bold p-2 rounded mx-1">
          <TelegramIcon class="w-6 h-6" />
        </a>
        <a :href="buyLink" rel="noopener noreferrer" class="text-white font-bold p-2 rounded mx-1">
          <PumpIcon class="w-6 h-6" />
        </a>
      </span>
    </p>
  </footer>
</template>
