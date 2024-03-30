<script setup lang="ts">
import { defineComponent } from 'vue'
</script>

<script lang="ts">
export default defineComponent({
  props: {
    isOpen: Boolean
  }
})
</script>

<template>
  <svg
    :class="{ 'transform rotate-180': isOpen }"
    xmlns="http://www.w3.org/2000/svg"
    class="h-4 w-4 transition-transform"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
  </svg>
</template>
