<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'

export default defineComponent({
  data() {
    return {
      images: ['degen-u.png', 'degen-m.png', 'degen-d.png'],
      currentIndex: 0
    }
  },
  computed: {
    currentImg() {
      return this.images[this.currentIndex]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const triggerPoint = 50
      const scrolled = window.scrollY
      const newIndex = Math.floor(scrolled / triggerPoint) % this.images.length
      if (newIndex !== this.currentIndex) {
        this.currentIndex = newIndex
      }
    }
  }
})
</script>

<template>
  <div class="fixed left-0 bottom-0 z-10">
    <img
      alt="degen"
      importance="high"
      fetchpriority="high"
      class="h-auto max-w-full w-1/2 sm:w-1/4"
      data-nimg="1"
      :src="currentImg"
    />
  </div>
</template>
