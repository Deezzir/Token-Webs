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
    class="flex min-h-screen flex-col justify-between bg-[#e2c100] px-12 pb-0 pt-32 text-3xl sm:px-[20rem] sm:pt-36 sm:text-5xl 2xl:pt-52 2xl:text-5xl"
  >
    <div class="flex flex-col items-center justify-center gap-24 sm:gap-12 xl:flex-row">
      <div class="flex w-full items-center justify-center">
        <button
          class="sm:px-21 w-full rounded-3xl bg-[#68964b] px-20 py-4 font-bold shadow-lg shadow-[#384a28] sm:py-6 xl:w-[75%]"
        >
          <a :href="buyLink" target="_blank" rel="noopener noreferrer">BUY</a>
        </button>
      </div>
      <div class="w-full">
        <h1 class="text-center font-bold uppercase text-black">
          Its not a pepe frog but its not a dog - its frodo
        </h1>
      </div>
    </div>
    <div class="mt-12 flex h-full flex-col-reverse items-center justify-center gap-10 xl:flex-row">
      <div class="w-full">
        <img src="@/assets/frodo.png" alt="Frodo" class="w-[90%] 2xl:w-[65%]" />
      </div>
      <div class="w-full">
        <div class="mb-12 flex flex-col items-center justify-center gap-10">
          <img src="@/assets/family.png" alt="Family" class="w-[90%] 2xl:w-[65%]" />
          <p class="text-center font-bold text-black">WELCOME TO FRODO UNIVERSE</p>
        </div>
      </div>
    </div>
  </div>
</template>
