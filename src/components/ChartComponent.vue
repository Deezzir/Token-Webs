<template>
  <div
    class="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#384a28] px-12 py-16 text-4xl text-white sm:text-5xl xl:px-[15rem]"
  >
    <div class="flex flex-col items-center justify-center gap-16">
      <img src="@/assets/bag.png" alt="Bag" class="w-[80%] sm:w-[60%]" />
      <div id="dexscreener-embed">
        <iframe
          src="https://dexscreener.com/solana/2xCGqSn86Y2Ziba7sR6Nd2G5HqaYtFfL5NhpvwsyKc9R?embed=1&theme=dark"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
#dexscreener-embed {
  position: relative;
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
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 0;
}
</style>
