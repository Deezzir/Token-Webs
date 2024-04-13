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
    class="relative flex min-h-screen flex-col justify-between bg-[#0166B0] px-8 py-12 text-3xl md:px-36 2xl:text-5xl"
  >
    <div class="flex grow items-center">
      <div
        class="z-10 flex w-full flex-col items-center justify-center gap-4 text-center text-black 2xl:w-1/2 2xl:items-start 2xl:text-start 2xl:text-white"
      >
        <h3 class="">$VAULTBOY</h3>
        <h1 class="text-6xl font-bold uppercase">BUILD TO SURVIVE CRYPTO DUMPS</h1>
        <div class="flex flex-row items-center justify-center gap-6 md:justify-start">
          <a
            :href="buyLink"
            class="rounded-xl bg-white px-12 py-4 text-center text-3xl uppercase text-orange-500 hover:bg-orange-500 hover:text-white"
            >BUY NOW</a
          >
        </div>
      </div>
      <div>
        <img
          src="@/assets/bg.png"
          alt="Background"
          class="absolute right-0 top-0 z-0 h-[90vh] 2xl:h-[100vh]"
        />
        <img
          src="@/assets/vaultbasic.png"
          alt="Vault WIF Sol"
          class="z-0 hidden h-[65vh] -translate-x-[15%] translate-y-[15%] md:absolute md:right-0 md:top-0 md:h-[65vh] md:-translate-x-[25%] md:translate-y-[5%] 2xl:block 2xl:h-[85vh] 2xl:-translate-x-1/2 2xl:translate-y-[5%]"
        />
      </div>
    </div>
  </div>
</template>
