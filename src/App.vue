<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue'
import Footer from './components/FooterComponent.vue'
import MainComponent from './components/MainComponent.vue'
import HistoryComponent from './components/HistoryComponent.vue'
import RoadmapComponent from './components/RoadmapComponent.vue'
import TokenomicsComponent from './components/TokenomicsComponent.vue'
</script>

<template>
  <main class="flex flex-col relative">
    <NavbarComponent />
    <MainComponent />
    <HistoryComponent />
    <RoadmapComponent />
    <TokenomicsComponent />
    <Footer class="flex-shrink-0" />
  </main>
</template>
