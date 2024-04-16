<script setup lang="ts">
import { TwitterIcon, TelegramIcon, PumpIcon, DevIcon } from '@/components/icons'
</script>

<script lang="ts">
export default {
  computed: {
    twitter(): string {
      return this.$twitter
    },
    telegram(): string {
      return this.$telegram
    },
    buyLink(): string {
      return this.$buyLink
    },
    dex(): string {
      return this.$dex
    },
    telegramDev(): string {
      return this.$telegramDev
    }
  }
}
</script>

<template>
  <div
    class="grid h-[70%] grid-flow-row items-start justify-center gap-x-1 gap-y-3 text-sm sm:grid-cols-2 sm:grid-rows-4"
  >
    <a class="flex flex-col items-center gap-1" href="https://pump.fun/board"
      ><img src="@/assets/bin.png" alt="recycle bin" class="h-10 w-10" /><span
        class="min-w-24 bg-[#008080] text-center"
        >Recycle Bin</span
      ></a
    >
    <a class="flex flex-col items-center gap-1" :href="telegramDev"
      ><img src="@/assets/my-computer.png" alt="dev" class="h-10 w-10" /><span
        class="min-w-24 bg-[#008080] text-center"
        >Dev</span
      ></a
    >
    <a class="flex flex-col items-center gap-1" :href="buyLink"
      ><img src="@/assets/coin.png" alt="dev" class="h-10 w-10" /><span
        class="min-w-24 bg-[#008080] text-center"
        >Buy</span
      ></a
    >
    <a class="flex flex-col items-center gap-1" :href="telegram"
      ><img src="@/assets/tg.png" alt="telegram" class="h-10 w-10" /><span
        class="min-w-24 bg-[#008080] text-center"
        >Telegram</span
      ></a
    >
    <a class="flex flex-col items-center gap-1" :href="twitter"
      ><img src="@/assets/x.png" alt="twitter" class="h-10 w-10" /><span
        class="min-w-24 bg-[#008080] text-center"
        >X</span
      ></a
    >
    <!-- <a class="flex flex-col items-center gap-1" :href="dex"
      ><img src="/icons/dex.png" alt="logo" class="h-10 w-10" /><span
        class="min-w-24 bg-[#008080] text-center"
        >Dex</span
      ></a
    >
    <a class="flex flex-col items-center gap-1" :href="dex"
      ><img src="/icons/raydium.png" alt="logo" class="h-10 w-10" /><span
        class="min-w-24 bg-[#008080] text-center"
        >Raydium</span
      ></a
    >
    <a class="flex flex-col items-center gap-1" :href="dex"
      ><img src="/icons/jupiter.png" alt="logo" class="h-10 w-10" /><span
        class="min-w-24 bg-[#008080] text-center"
        >Jupiter</span
      ></a
    > -->
  </div>
</template>
