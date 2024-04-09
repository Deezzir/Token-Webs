<script setup lang="ts"></script>

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
    class="min-h-screen bg-[#e2c100] px-12 pt-36 sm:px-[18rem] sm:pt-48 pb-12 sm:pb-0 relative text-3xl sm:text-5xl"
  >
    <div class="flex sm:flex-row flex-col justify-center items-center gap-6">
      <div class="w-full flex items-center justify-center">
        <button
          class="bg-[#68964b] font-bold py-4 sm:py-6 px-24 sm:px-36 rounded-3xl shadow-lg shadow-[#384a28]"
        >
          <a :href="buyLink" target="_blank" rel="noopener noreferrer">BUY</a>
        </button>
      </div>
      <div class="w-full">
        <h1 class="font-bold text-black uppercase text-center">
          Its not a pepe frog but its not a dog - its frodo
        </h1>
      </div>
    </div>
    <div class="flex sm:flex-row flex-col justify-center items-center gap-10 mt-12">
      <div class="w-full">
        <img src="@/assets/frodo.png" alt="Frodo" class="w-[90%]" />
      </div>
      <div class="w-full">
        <div class="flex flex-col justify-center items-center gap-10">
          <img src="@/assets/family.png" alt="Family" class="w-[90%]" />
          <p class="text-black font-bold text-center">WELCOME TO FRODO UNIVERSE</p>
        </div>
      </div>
    </div>
  </div>
</template>
