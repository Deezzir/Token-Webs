<script setup lang="ts">
import Footer from '../components/FooterComponent.vue'
import Main from '../components/MainComponent.vue'
import Header from '../components/HeaderComponent.vue'
</script>

<template>
  <main class="flex min-h-screen flex-col justify-between items-center py-8 px-14 pt-28 2xl:pt-28">
    <Header />
    <Main />
    <Footer />
  </main>
</template>
