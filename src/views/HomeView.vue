<script setup lang="ts">
import Footer from '../components/FooterComponent.vue'
import Main from '../components/MainComponent.vue'
import Header from '../components/HeaderComponent.vue'
</script>

<template>
  <main class="flex min-h-screen flex-col items-center justify-between p-12 pt-36 2xl:pt-12">
    <Header />
    <Main />
    <Footer />
  </main>
</template>
