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
    class="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#384a28] px-12 py-12 text-4xl text-white sm:text-5xl xl:px-[15rem]"
  >
    <div class="flex w-full flex-col items-center justify-center gap-2">
      <div class="relative flex w-full flex-col items-center justify-center">
        <a :href="buyLink" class="w-[80%] text-center sm:w-[30%]">
          <img src="@/assets/bag.png" alt="Bag" class="w-full" />
          <h1
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-4xl font-bold uppercase sm:text-5xl"
          >
            Buy
          </h1>
        </a>
      </div>
      <div id="dexscreener-embed" class="">
        <iframe
          src="https://dexscreener.com/solana/2xCGqSn86Y2Ziba7sR6Nd2G5HqaYtFfL5NhpvwsyKc9R?embed=1&theme=dark&trades=0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
#dexscreener-embed {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 125%;
}
@media (min-width: 1400px) {
  #dexscreener-embed {
    padding-bottom: 65%;
  }
}
#dexscreener-embed iframe {
  position: absolute;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #e2c100;
  border-radius: 1rem;
}
</style>
