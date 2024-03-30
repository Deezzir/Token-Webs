<script setup lang="ts">
import { defineComponent } from 'vue'
</script>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      items: [
        { text: 'MINT\u00A0\u00A0REVOKED', speed: '10s' },
        { text: 'WHOLE\u00A0\u00A0LOTTA\u00A0\u00A0SUPPLY', speed: '15s' },
        { text: 'TAX\u00A0\u00A00%', speed: '8s' },
        { text: 'DEV BUY BURNT\u00A0\u00A0100% ', speed: '12s' },
        { text: 'LIQUIDITY\u00A0\u00A0LOCKED', speed: '10s' }
      ]
    }
  },
  methods: {
    getRepeatingText(text: string) {
      const repeatTimes = 100
      const space = '\u00A0'.repeat(7)
      return Array(repeatTimes).fill(text).join(space)
    }
  }
})
</script>

<template>
  <div class="flex flex-col place-items-center py-6">
    <div class="overflow-hidden relative w-full text-3xl sm:text-5xl">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="whitespace-nowrap moving-text tracking-wide my-4 sm:my-8"
        :style="{ animationDuration: item.speed }"
      >
        {{ getRepeatingText(item.text) }}
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.moving-text {
  animation: move linear infinite;
}
</style>
