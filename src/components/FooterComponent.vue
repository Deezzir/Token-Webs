<script setup lang="ts">
import { TwitterIcon, TelegramIcon } from '@/components/icons'
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
    }
  }
})
</script>

<template>
  <footer class="bg-black text-center py-6">
    <!-- Center items vertically -->
    <p class="flex flex-row items-center justify-center gap-2">
      <span class="text-xl">DEGENX &copy; 2024</span>
      <span class="inline-flex">
        <a
          :href="twitter"
          rel="noopener noreferrer"
          class="hover:bg-gray-800 text-white font-bold p-2 rounded mx-2"
        >
          <TwitterIcon />
        </a>
        <a
          :href="telegram"
          rel="noopener noreferrer"
          class="hover:bg-gray-800 text-white font-bold p-2 rounded mx-2"
        >
          <TelegramIcon />
        </a>
      </span>
    </p>
  </footer>
</template>
