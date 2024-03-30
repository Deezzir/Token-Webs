<script setup lang="ts">
import Memes from '@/components/MemeComponent.vue'
import Tokenomics from '@/components/TokenomicsComponent.vue'
import Header from '@/components/HeaderComponent.vue'
</script>

<template>
  <main class="mx-auto flex flex-col gap-10 min-h-screen mt-2 pb-10 lg:pb-12">
    <Header />
    <Memes />
    <Tokenomics />
  </main>
</template>
