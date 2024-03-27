<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from '@/components/FooterComponent.vue'
import Navbar from '@/components/NavbarComponent.vue'
</script>

<template>
  <main>
    <Navbar />
    <RouterView />
    <Footer />
  </main>
</template>
