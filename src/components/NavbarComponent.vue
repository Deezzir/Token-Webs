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
  <nav class="bg-[#e2c100] absolute top-0 left-1/2 transform -translate-x-1/2 z-10 w-full">
    <div
      class="m-auto flex justify-between items-center py-6 px-8 sm:px-24 bg-[#68964b] shadow-md rounded-br-3xl rounded-bl-3xl w-full md:w-[65%]"
    >
      <div>
        <h1 class="flex flex-row items-center text-3xl sm:text-5xl font-bold uppercase">
          <span class="inline-flex justify-center items-center mr-2">
            <img src="@/assets/icon.png" alt="Frodo" class="w-16 sm:w-24 inline-block" />
          </span>
          Frodo
        </h1>
      </div>
      <div>
        <span class="inline-flex">
          <a :href="twitter" rel="noopener noreferrer" class="font-bold p-2 rounded mx-1">
            <TwitterIcon class="w-8 h-8 sm:w-12 sm:h-12" />
          </a>
          <a :href="telegram" rel="noopener noreferrer" class="font-bold p-2 rounded mx-1">
            <TelegramIcon class="w-8 h-8 sm:w-12 sm:h-12" />
          </a>
          <a :href="buyLink" rel="noopener noreferrer" class="font-bold p-2 rounded mx-1">
            <PumpIcon class="w-8 h-8 sm:w-12 sm:h-12" />
          </a>
        </span>
      </div>
    </div>
  </nav>
</template>
