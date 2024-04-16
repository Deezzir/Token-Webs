<script setup lang="ts">
import WindowButtons from '@/components/common/WindowButtonsComponent.vue'
import type { PropType } from 'vue'
</script>

<script lang="ts">
export default {
  props: {
    closeFunc: {
      type: Function as PropType<(payload: MouseEvent) => void>,
      default: () => (payload: MouseEvent) => {}
    },
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.setupAudio()
  },
  methods: {
    setupAudio() {
      const audio = document.getElementById('error') as HTMLAudioElement
      audio.src = '/sounds/error.mp3'
    }
  },
  watch: {
    isVisible() {
      if (this.isVisible) {
        const audio = document.getElementById('error') as HTMLAudioElement
        audio.currentTime = 0
        audio.play()
      }
    }
  }
}
</script>

<template>
  <div
    v-show="isVisible"
    class="fixed inset-0 z-50 flex items-center justify-center bg-transparent text-black"
  >
    <div class="window-shadow flex h-auto w-96 flex-col overflow-hidden bg-[#c0c0c0] p-[6px]">
      <div class="window-header flex select-none flex-row items-center justify-between">
        <p class="text-white">Windows</p>
        <WindowButtons :minimize="false" :maximize="false" :close-func="closeFunc" />
      </div>
      <div class="flex flex-col items-center justify-center gap-4 py-4 text-lg">
        <div class="flex flex-row items-center justify-center gap-2">
          <img src="@/assets/error.png" alt="error" class="h-8 w-8" />
          <p class="cairo text-lg">ا يمكن، حبيبي</p>
        </div>
        <button @click="$emit('popup-close')" class="window-shadow px-5 py-1 uppercase">OK</button>
      </div>
    </div>
    <audio hidden id="error"></audio>
  </div>
</template>
