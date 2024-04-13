<script setup lang="ts">
import { PlayIcon } from './icons'
</script>

<script lang="ts">
export default {
  computed: {
    buyLink(): string {
      return this.$buyLink
    }
  }
}
</script>

<template>
  <div
    class="relative flex min-h-screen flex-col justify-between bg-[#0166B0] px-12 py-16 text-3xl sm:px-36 sm:text-5xl"
  >
    <div class="flex grow items-center">
      <div class="z-10 flex w-1/2 flex-col items-start justify-center gap-4">
        <h3 class="">Lorem ipsum dolor sit amet</h3>
        <h1 class="text-6xl font-bold uppercase">Lorem ipsum dolor sit amet</h1>
        <div class="flex flex-row items-center justify-start gap-6">
          <a class="rounded-xl bg-white px-7 py-4 text-center text-3xl uppercase text-orange-500"
            >BUY</a
          >
        </div>
      </div>
      <div>
        <img src="@/assets/bg.png" alt="Background" class="absolute right-0 top-0 z-0 h-[100vh]" />
        <img
          src="@/assets/vaultbasic.png"
          alt="Vault Basic"
          class="absolute right-0 top-0 z-0 h-[85vh] -translate-x-1/2 translate-y-[5%]"
        />
      </div>
    </div>
  </div>
</template>
