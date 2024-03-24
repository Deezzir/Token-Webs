<script setup lang="ts">
import { TwitterIcon, TelegramIcon } from '@/components/icons'
</script>

<template>
  <div class="flex flex-col relative place-items-center">
    <img
      alt="jewno"
      fetchpriority="high"
      width="300"
      height="300"
      decoding="async"
      data-nimg="1"
      class="relative rounded-lg"
      style="color: transparent"
      src="../assets/jewno.png"
    />
    <p
      class="[word-spacing:-1px] sm:[word-spacing:0px] relative text-2xl sm:text-4xl text-center font-bold pt-10 pb-1 text-[#14F195] drop-shadow-[0_3px_3px_rgba(153,69,255,0.7)]"
    >
      $JEWNOS - Jewnosaurs Coin
    </p>
    <p class="relative text-xl sm:text-2xl text-center pb-5">
      Can't wait to buy $JEWNOS on #Solana and for it to go to the mooon
    </p>
    <p class="relative text-xl sm:text-2xl text-center pb-5">
      Lets gooo! 🚀🚀🚀
      <a
        href="https://www.pump.fun/7Tt8Uoqq1NWHHEhYoe74ijKJowyAusgTptEnLUbnwkD6"
        class="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out"
      >
        Pump.fun
      </a>
    </p>
    <div class="flex flex-row justify-center items-center pt-10">
      <a
        href="https://x.com/JEWNOSAURS"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-[#14F195] hover:bg-[#f7be47] text-[#181818] font-bold text-4xl p-2 rounded mx-4"
      >
        <TwitterIcon />
      </a>
      <a
        href="https://t.me/jewnosaurs"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-[#14F195] hover:bg-[#f7be47] text-[#181818] font-bold text-4xl p-2 rounded mx-4"
      >
        <TelegramIcon />
      </a>
    </div>
  </div>
</template>
