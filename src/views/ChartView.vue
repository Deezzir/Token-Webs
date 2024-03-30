<template>
  <main class="mx-auto mt-4 px-[6vw] pb-10 sm:px-[10vw] lg:pb-12">
    <div class="flex flex-col items-center mt-10">
      <div id="dexscreener-embed">
        <iframe
          src="https://dexscreener.com/solana/NTH4L6xZfa9X2Pk1hnMhW1RiYQFQmL5tCEWaeG3ht8V?embed=1&theme=dark"
        ></iframe>
      </div>
    </div>
  </main>
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
