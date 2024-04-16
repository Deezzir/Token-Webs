<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue'
import AppsComponent from './components/AppsComponent.vue'
import DescriptionComponent from './components/DescriptionComponent.vue'
import PictureComponent from './components/PictureComponent.vue'
import PaintComponent from './components/PaintComponent.vue'
import ChartComponent from './components/ChartComponent.vue'
</script>

<script lang="ts">
export default {
  data() {
    return {
      booted: true,
      mibibis: [
        '/mibibis/mibibi1.png',
        '/mibibis/mibibi2.png',
        '/mibibis/mibibi3.png',
        '/mibibis/mibibi4.png',
        '/mibibis/mibibi5.png',
        '/mibibis/mibibi6.png',
        '/mibibis/mibibi7.png',
        '/mibibis/mibibi8.png',
        '/mibibis/mibibi9.png',
        '/mibibis/mibibi10.png',
        '/mibibis/mibibi11.png',
        '/mibibis/mibibi12.png',
        '/mibibis/mibibi13.png',
        '/mibibis/mibibi14.png',
        '/mibibis/mibibi15.png',
        '/mibibis/mibibi16.png',
        '/mibibis/mibibi17.png',
        '/mibibis/mibibi18.png',
        '/mibibis/mibibi19.png',
        '/mibibis/mibibi20.png',
        '/mibibis/mibibi21.png',
        '/mibibis/mibibi22.png',
        '/mibibis/mibibi23.png',
        '/mibibis/mibibi24.png'
      ],
      desert1: '/desert1.png',
      desert2: '/desert2.jpg'
    }
  },
  unmounted() {
    window.removeEventListener('click', this.playAudio)
  },
  methods: {
    playAudio() {
      const audio = document.getElementById('click') as HTMLAudioElement
      audio.currentTime = 0
      audio.src = '/sounds/click.mp3'
      audio.play()
    },
    boot() {
      this.booted = true
      const audio = document.getElementById('audio') as HTMLAudioElement
      audio.src = '/sounds/startup.mp3'
      audio.play()
      setTimeout(() => {
        window.addEventListener('click', this.playAudio)
        audio.src = '/sounds/computer-sounds.mp3'
        audio.loop = true
        audio.volume = 0.3
        audio.play()
      }, 6000)
    }
  }
}
</script>

<template>
  <main class="relative flex flex-col">
    <div v-show="!booted" class="flex min-h-screen w-full items-center justify-center bg-black">
      <button @click="boot">
        <img src="@/assets/power.png" alt="windows" class="h-36 w-36" />
      </button>
    </div>
    <transition name="fade">
      <div v-show="booted">
        <div class="relative min-h-screen w-full p-0 sm:p-6">
          <div class="flex-col">
            <div class="flex w-full flex-row justify-between">
              <AppsComponent />
              <PictureComponent
                title="MyMibibis"
                :image_paths="mibibis"
                class="absolute translate-x-[25%] translate-y-[10%] md:static"
              />
              <DescriptionComponent />
            </div>
          </div>
          <div class="flex w-full flex-row justify-between">
            <PaintComponent
              title="Desert2.png"
              :image_path="desert2"
              class="absolute w-auto -translate-y-[10%] sm:static md:w-1/3"
            />
            <!-- <ChartComponent class="translate-y-[15%]" /> -->
            <PictureComponent
              title="Desert1.png"
              :image_paths="[desert1]"
              class="md:-translate-x-[10%] md:translate-y-[10%]"
            />
          </div>
        </div>
        <NavbarComponent />
      </div>
    </transition>
    <audio hidden id="click"></audio>
    <audio hidden id="audio"></audio>
  </main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
