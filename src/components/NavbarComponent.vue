<script setup lang="ts">
import { TwitterIcon, TelegramIcon, PumpIcon } from '@/components/icons'
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
    }
  }
}
</script>

<template>
  <nav class="absolute left-1/2 top-0 z-10 w-full -translate-x-1/2 transform bg-[#e2c100]">
    <div
      class="m-auto flex items-center justify-between rounded-bl-3xl rounded-br-3xl bg-[#68964b] px-8 py-4 shadow-md sm:px-48"
    >
      <div>
        <h1 class="flex flex-row items-center text-3xl font-bold uppercase sm:text-5xl">
          <span class="mr-2 inline-flex items-center justify-center">
            <img src="@/assets/icon.png" alt="Frodo" class="inline-block w-16 sm:w-24" />
          </span>
          Frodo
        </h1>
      </div>
      <div>
        <span class="inline-flex">
          <a :href="twitter" rel="noopener noreferrer" class="mx-1 rounded p-1 font-bold sm:p-2">
            <TwitterIcon class="h-6 w-6 sm:h-12 sm:w-12" />
          </a>
          <a :href="telegram" rel="noopener noreferrer" class="mx-1 rounded p-1 font-bold sm:p-2">
            <TelegramIcon class="h-6 w-6 sm:h-12 sm:w-12" />
          </a>
          <a :href="buyLink" rel="noopener noreferrer" class="mx-1 rounded p-1 font-bold sm:p-2">
            <PumpIcon class="h68 w-6 sm:h-12 sm:w-12" />
          </a>
        </span>
      </div>
    </div>
  </nav>
</template>
