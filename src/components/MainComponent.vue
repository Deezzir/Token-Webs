<script setup lang="ts">
import { TwitterIcon, TelegramIcon } from '@/components/icons'
import DocsIcon from './icons/DocsIcon.vue'
</script>

<template>
  <div class="flex flex-col relative place-items-center px-6 sm:px-20 sm:pt-10">
    <img
      alt="jewno"
      fetchpriority="high"
      width="600"
      height="600"
      decoding="async"
      data-nimg="1"
      class="relative rounded-lg"
      style="color: transparent"
      src="../assets/pump2.jpg"
    />
    <p
      class="[word-spacing:-1px] sm:[word-spacing:0px] relative text-2xl sm:text-4xl text-center font-bold pt-10 pb-1 text-[#14F195] drop-shadow-[0_3px_3px_rgba(153,69,255,0.7)]"
    >
      $PUMPCLUB
    </p>
    <p class="relative text-xl sm:text-2xl text-center pb-5">
      $PUMPCLUB is a cryptocurrency launched on the Solana blockchain through the website pump.fun.
      The project aims to create a long-term hold investment opportunity for its community members.
      The team behind PumpClub plans to launch a new coin every 3-4 days, with profits flowing back
      into the native $PUMPCLUB token. This strategy has the potential to drive continuous community
      growth and engagement.
    </p>
    <p class="relative text-xl sm:text-2xl text-center pb-2">
      Support on
      <a
        href="https://meme.sigma.zalupa.ca"
        class="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out"
      >
        Pump.fun
      </a>
      🚀🚀🚀
    </p>
    <div class="flex flex-row justify-center items-center pt-10">
      <a
        href="https://x.com/pumpfunclub"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-[#14F195] hover:bg-[#f7be47] text-[#181818] font-bold text-4xl p-2 rounded mx-4"
      >
        <TwitterIcon />
      </a>
      <a
        href="https://t.me/PumpFunClub"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-[#14F195] hover:bg-[#f7be47] text-[#181818] font-bold text-4xl p-2 rounded mx-4"
      >
        <TelegramIcon />
      </a>
      <a
        href="https://cdn.discordapp.com/attachments/1219010663117226151/1222663102085202013/PumpClubWhitePaper_.pdf?ex=661708bf&is=660493bf&hm=16d544e5229fdb29ea6909a064ed94cec7be61988d539acf3975669a019aa6e0&"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-[#14F195] hover:bg-[#f7be47] text-[#181818] font-bold text-4xl p-2 rounded mx-4"
      >
        <DocsIcon />
      </a>
    </div>
  </div>
</template>
