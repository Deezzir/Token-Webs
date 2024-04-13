<script setup lang="ts">
import { TwitterIcon, TelegramIcon, RaydiumIcon } from '@/components/icons'
import DexIcon from './icons/DexIcon.vue'
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
    raydium(): string {
      return this.$raydium
    },
    dexLink(): string {
      return this.$dex
    }
  }
}
</script>

<template>
  <nav class="absolute left-1/2 top-0 z-10 w-full -translate-x-1/2 transform bg-transparent">
    <div
      class="m-auto flex items-center justify-center gap-5 px-8 py-6 md:justify-start md:gap-10 md:px-36"
    >
      <div>
        <h1
          class="flex flex-row items-center text-2xl font-bold uppercase text-black sm:text-4xl md:text-white xl:text-5xl"
        >
          <span class="inline-flex items-center justify-center md:mr-2">
            <img
              src="@/assets/vaultleak.png"
              alt="Vault Boy"
              class="mr-4 inline-block w-8 md:w-12"
            />
          </span>
          Vault Boy
        </h1>
      </div>
      <div>
        <div class="flex flex-row items-center justify-center">
          <a :href="twitter" rel="noopener noreferrer" class="mx-1 rounded p-1 md:p-2">
            <TwitterIcon class="h-8 w-8 text-black md:h-10 md:w-12 md:text-white xl:h-12 xl:w-12" />
          </a>
          <a :href="telegram" rel="noopener noreferrer" class="mx-1 rounded p-1 md:p-2">
            <TelegramIcon
              class="h-8 w-8 text-black md:h-10 md:w-12 md:text-white xl:h-12 xl:w-12"
            />
          </a>
          <!-- <a :href="raydium" rel="noopener noreferrer" class="mx-1 rounded p-1 md:p-2">
            <RaydiumIcon class="h-8 w-8 text-black md:h-10 md:w-12 xl:h-12 xl:w-12 md:text-white" />
          </a>
          <a :href="dexLink" rel="noopener noreferrer" class="mx-1 rounded p-1 md:p-2">
            <DexIcon class="h-8 w-8 text-black md:h-10 md:w-12 xl:h-12 xl:w-12 md:text-white" />
          </a> -->
        </div>
      </div>
    </div>
  </nav>
</template>
