<script setup lang="ts">
import Header from '../components/HeaderComponent.vue'
import Footer from '../components/FooterComponent.vue'
import Main from '../components/MainComponent.vue'
</script>

<template>
  <main class="relative flex min-h-screen flex-col items-center px-12 sm:px-48">
    <Header />
    <Main />
    <Footer />
  </main>
</template>
