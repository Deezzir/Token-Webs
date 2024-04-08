<script setup lang="ts">
import Party from '../components/PartyComponent.vue'
import Rainfall from '../components/RainfallComponent.vue'
</script>

<template>
  <div
    class="flex flex-grow h-full min-h-screen justify-center items-center px-5 sm:py-0 overflow-hidden relative"
  >
    <Rainfall />
    <div
      class="w-[40rem] h-[10rem] sm:h-[12rem] bg-[#525252] rounded-xl border-2 border-white z-10 relative"
    >
      <Party />
    </div>
  </div>
</template>
