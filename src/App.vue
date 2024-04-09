<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue'
import Footer from './components/FooterComponent.vue'
import MainComponent from './components/MainComponent.vue'
import LoreComponent from './components/LoreComponent.vue'
import RoadmapComponent from './components/RoadmapComponent.vue'
import TokenomicsComponent from './components/TokenomicsComponent.vue'
import DescriptionComponent from './components/DescriptionComponent.vue'
</script>

<script lang="ts">
export default {
  data() {
    return {
      ribbits: [
        '/ribbit1.mp3',
        '/ribbit2.mp3',
        '/ribbit3.mp3',
        '/ribbit4.mp3',
        '/ribbit5.mp3',
        '/ribbit6.mp3'
      ]
    }
  },
  created() {
    window.addEventListener('click', this.playAudio)
  },
  unmounted() {
    window.removeEventListener('click', this.playAudio)
  },
  methods: {
    playAudio() {
      const audio = document.getElementById('audio') as HTMLAudioElement
      audio.currentTime = 0
      audio.src = this.ribbits[Math.floor(Math.random() * this.ribbits.length)]
      audio.play()
    }
  }
}
</script>

<template>
  <main class="relative flex flex-col">
    <NavbarComponent />
    <MainComponent />
    <DescriptionComponent />
    <LoreComponent />
    <RoadmapComponent />
    <TokenomicsComponent />
    <Footer class="flex-shrink-0" />
    <audio hidden id="audio"></audio>
  </main>
</template>
