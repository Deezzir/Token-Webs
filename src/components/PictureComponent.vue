<script setup lang="ts">
import WindowButtons from '@/components/common/WindowButtonsComponent.vue'
</script>

<script lang="ts">
export default {
  data() {
    return {
      currentImageIndex: 0,
      autoSwitchEnabled: true,
      switchTimer: undefined as number | undefined
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    image_paths: {
      type: Array<string>,
      required: true
    }
  },
  created() {
    setInterval(() => {
      if (this.autoSwitchEnabled) this.nextImage()
    }, 2000)
  },
  methods: {
    userNextImage() {
      this.pauseAutoSwitch()
      this.nextImage()
    },
    userPrevImage() {
      this.pauseAutoSwitch()
      this.prevImage()
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.image_paths.length
    },
    prevImage() {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.image_paths.length) % this.image_paths.length
    },
    pauseAutoSwitch() {
      this.autoSwitchEnabled = false
      clearTimeout(this.switchTimer)
      this.switchTimer = setTimeout(() => {
        this.autoSwitchEnabled = true
      }, 5000)
    }
  }
}
</script>

<template>
  <div class="flex w-auto select-none flex-col">
    <div class="window-shadow flex h-auto w-full flex-col overflow-hidden bg-[#c0c0c0] p-[6px]">
      <div class="window-header flex select-none flex-row items-center justify-between">
        <div class="flex flex-row gap-1">
          <img src="/icons/irfan.png" alt="logo" class="h-6 w-6" />
          <span class="">{{ title }} - IrfanView</span>
        </div>
        <WindowButtons />
      </div>
      <div class="flex select-none flex-row gap-[6px] p-1 text-center text-xs text-black">
        <div><span class="underline">F</span>ile</div>
        <div><span class="underline">E</span>dit</div>
        <div><span class="underline">I</span>mage</div>
        <div><span class="underline">O</span>ptions</div>
        <div><span class="underline">V</span>iew</div>
        <div><span class="underline">H</span>elp</div>
      </div>
      <div
        v-if="image_paths.length > 1"
        class="flex shrink flex-row items-start justify-start gap-2 px-1 py-[5px]"
      >
        <button class="text-black" @click="userPrevImage">
          <img src="@/assets/back.png" alt="back" class="h-5 w-5" />
        </button>
        <button class="text-black" @click="userNextImage">
          <img src="@/assets/forward.png" alt="forward" class="h-5 w-5" />
        </button>
      </div>
      <div class="h-full border-[1px] border-gray-400 bg-white p-[6px]">
        <img
          :src="image_paths[currentImageIndex]"
          alt="image"
          class="h-72 w-full object-scale-down"
        />
      </div>
    </div>
  </div>
</template>
