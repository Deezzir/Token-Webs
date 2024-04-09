<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue'
import Footer from './components/FooterComponent.vue'
import MainComponent from './components/MainComponent.vue'
import HistoryComponent from './components/HistoryComponent.vue'
import RoadmapComponent from './components/RoadmapComponent.vue'
import TokenomicsComponent from './components/TokenomicsComponent.vue'
</script>

<script lang="ts">
export default {
  created() {
    window.addEventListener('click', this.playAudio)
  },
  unmounted() {
    window.removeEventListener('click', this.playAudio)
  },
  methods: {
    playAudio() {
      const audio = document.getElementById('audio') as HTMLAudioElement
      audio.play()
    }
  }
}
</script>

<template>
  <main class="flex flex-col relative">
    <NavbarComponent />
    <MainComponent />
    <HistoryComponent />
    <RoadmapComponent />
    <TokenomicsComponent />
    <Footer class="flex-shrink-0" />
    <audio hidden id="audio" src="/ribbit.mp3"></audio>
  </main>
</template>
