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
    <div class="m-auto flex items-center justify-start gap-10 px-12 py-6 sm:px-36">
      <div>
        <h1 class="flex flex-row items-center text-3xl font-bold uppercase text-white sm:text-5xl">
          <span class="mr-2 inline-flex items-center justify-center">
            <img
              src="@/assets/vaultleak.png"
              alt="Vault Boy"
              class="mr-4 inline-block w-6 sm:w-12"
            />
          </span>
          Vault Boy
        </h1>
      </div>
      <div>
        <div class="flex flex-row items-center justify-center">
          <a :href="twitter" rel="noopener noreferrer" class="mx-1 rounded p-1 sm:p-2">
            <TwitterIcon class="h-6 w-6 text-white sm:h-12 sm:w-12" />
          </a>
          <a :href="telegram" rel="noopener noreferrer" class="mx-1 rounded p-1 sm:p-2">
            <TelegramIcon class="h-6 w-6 text-white sm:h-12 sm:w-12" />
          </a>
          <!-- <a :href="raydium" rel="noopener noreferrer" class="mx-1 rounded p-1 sm:p-2">
            <RaydiumIcon class="h-6 w-6 text-white sm:h-12 sm:w-12" />
          </a>
          <a :href="dexLink" rel="noopener noreferrer" class="mx-1 rounded p-1 sm:p-2">
            <DexIcon class="h-6 w-6 text-white sm:h-12 sm:w-12" />
          </a> -->
        </div>
      </div>
    </div>
  </nav>
</template>
