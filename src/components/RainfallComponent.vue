<script setup lang="ts"></script>

<script lang="ts">
export default {
  data() {
    return {
      intervalId: 0,
      images: [] as { url: string; duration: number; top: number; left: number }[]
    }
  },
  mounted() {
    this.populateImages()
    this.playSong()
  },
  methods: {
    populateImages() {
      for (let i = 0; i < 15; i++) {
        let imageNumber = Math.round(Math.random() * 42)
        while (this.images.find((image) => image.url === `/memes/meme${imageNumber}.png`)) {
          imageNumber = Math.round(Math.random() * 42)
        }
        this.images.push({
          url: `/memes/meme${imageNumber}.png`,
          duration: Math.random() * 6 + 5,
          top: -50,
          left: i * 8
        })
      }
    },
    playSong() {
      setTimeout(() => {
        const audio = new Audio('/loveit.mp3')
        audio.loop = true
        audio.play()
      }, 1000)
    }
  }
}
</script>

<template>
  <div class="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
    <div
      v-for="(image, index) in images"
      :key="index"
      :style="{
        backgroundImage: `url(${image.url})`,
        animationDuration: image.duration + 's',
        top: image.top + '%',
        left: image.left + '%'
      }"
      class="raindrop absolute w-[10rem] h-[10rem] sm:w-[22rem] sm:h-[22rem] bg-cover rounded-xl"
    ></div>
  </div>
</template>

<style scoped>
.raindrop {
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes fall {
  to {
    transform: translateY(150vh);
  }
}
</style>
