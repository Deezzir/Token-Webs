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
    class="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0166B0] px-12 py-16 text-4xl text-white sm:px-36 sm:text-5xl"
  >
    <div class="flex w-full flex-col items-center justify-center gap-2">
      <h2 class="uppercase">- CHART AND BUY LINKS COMING -</h2>
      <!-- <div id="dexscreener-embed" class="">
        <iframe
          src="https://dexscreener.com/solana/2xCGqSn86Y2Ziba7sR6Nd2G5HqaYtFfL5NhpvwsyKc9R?embed=1&theme=dark&trades=0"
        ></iframe>
      </div> -->
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
