<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from './components/FooterComponent.vue'
import Navbar from './components/NavbarComponent.vue'
</script>

<template>
  <Navbar />
  <main>
    <RouterView v-slot="{ Component }">
      <Transition
        enter-active-class="transition opacity 0.5s ease"
        leave-active-class="transition opacity 0.5s ease"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
        mode="out-in"
        appear
      >
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
  <Footer />
</template>
