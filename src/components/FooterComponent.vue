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
    telegramDev(): string {
      return this.$telegramDev
    }
  }
}
</script>

<template>
  <footer
    class="bg-[#FDEA33] py-2 text-center text-black backdrop-blur transition-colors duration-500"
  >
    <p class="flex flex-row items-center justify-center gap-2">
      <span class="text-sm font-bold sm:text-xl">$VAULTBOY &copy; 2024</span>
      <span class="inline-flex">
        <a :href="twitter" rel="noopener noreferrer" class="mx-1 rounded p-2 font-bold">
          <TwitterIcon class="h-6 w-6" />
        </a>
        <a :href="telegram" rel="noopener noreferrer" class="mx-1 rounded p-2 font-bold">
          <TelegramIcon class="h-6 w-6" />
        </a>
        <a :href="telegramDev" rel="noopener noreferrer" class="mx-1 rounded p-2 font-bold">
          <DevIcon class="h-6 w-6" />
        </a>
      </span>
    </p>
    <p class="px-2 text-sm">
      $VAULTBOY is a memecoin with no intrinsic value, and is not a investment and simply a
      community/culture token similar to $VAULTBOY. No Promises, No Utility, Purely For
      Entertainment Purposes
    </p>
  </footer>
</template>
