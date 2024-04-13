<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue'
import Footer from './components/FooterComponent.vue'
import MainComponent from './components/MainComponent.vue'
import AdComponent from './components/AdComponent.vue'
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
    <AdComponent />
    <TokenomicsComponent />
    <ChartComponent />
    <Footer class="flex-shrink-0" />
  </main>
</template>
