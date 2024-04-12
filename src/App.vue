<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue'
import Footer from './components/FooterComponent.vue'
import MainComponent from './components/MainComponent.vue'
import LoreComponent from './components/LoreComponent.vue'
import RoadmapComponent from './components/RoadmapComponent.vue'
import TokenomicsComponent from './components/TokenomicsComponent.vue'
import RulesComponent from './components/RulesComponent.vue'
import ChartComponent from './components/ChartComponent.vue'
</script>

<script lang="ts">
export default {
  data() {
    return {}
  },
  created() {},
  unmounted() {},
  methods: {}
}
</script>

<template>
  <main class="relative flex flex-col">
    <NavbarComponent />
    <MainComponent />
    <RulesComponent />
    <LoreComponent />
    <RoadmapComponent />
    <TokenomicsComponent />
    <ChartComponent />
    <Footer class="flex-shrink-0" />
  </main>
</template>
