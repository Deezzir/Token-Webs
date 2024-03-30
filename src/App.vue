<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from './components/FooterComponent.vue'
import Navbar from './components/NavbarComponent.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar class="flex-shrink-0" />

    <main class="flex-grow">
      <RouterView v-slot="{ Component }">
        <Transition
          enter-active-class="transition-opacity duration-500 ease"
          leave-active-class="transition-opacity duration-500 ease"
          enter-from-class="opacity-0"
          leave-to-class="opacity-0"
          mode="out-in"
          appear
        >
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <Footer class="flex-shrink-0" />
  </div>
</template>
