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
  <footer class="bg-[#477586f2] text-center py-6 text-white">
    <p class="flex flex-row items-center justify-center gap-2">
      <span class="text-xl">$WAF &copy; 2024</span>
      <span class="inline-flex">
        <a :href="twitter" rel="noopener noreferrer" class="text-white font-bold p-2 rounded mx-2">
          <TwitterIcon class="w-6 h-6" />
        </a>
        <a :href="telegram" rel="noopener noreferrer" class="text-white font-bold p-2 rounded mx-2">
          <TelegramIcon class="w-6 h-6" />
        </a>
      </span>
    </p>
  </footer>
</template>
