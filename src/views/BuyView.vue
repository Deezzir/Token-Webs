<script setup lang="ts">
import { defineComponent } from 'vue'
</script>

<script lang="ts">
export default defineComponent({
  computed: {
    buyLink(): string {
      return this.$buyLink
    }
  }
})
</script>

<template>
  <main class="mx-auto mt-4 px-[6vw] pb-10 sm:px-[10vw] lg:pb-12">
    <div class="flex flex-col items-center mt-10">
      <p class="relative text-3xl sm:text-6xl text-center pt-1">
        Help CAT WAF HAT on
        <a
          :href="buyLink"
          class="text-[#385D6B] font-bold hover:text-blue-700 transition duration-150 ease-in-out"
        >
          Pump.fun
        </a>
      </p>
      <p class="text-2xl">Completely owned by the community</p>
      <p class="relative text-3xl sm:text-6xl text-center pt-24">Other exchanges coming soon...</p>
      <video autoplay loop class="mt-10 w-[400px]" controls src="@/assets/eating.mp4"></video>
    </div>
  </main>
</template>
