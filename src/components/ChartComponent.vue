<script setup lang="ts">
import WindowButtons from '@/components/common/WindowButtonsComponent.vue'
</script>

<script lang="ts">
export default {
  emits: ['press'],
  methods: {
    handlePress() {
      this.$emit('press')
    }
  }
}
</script>

<template>
  <div class="flex w-[30%] flex-col">
    <div class="window-shadow flex h-auto w-full flex-col overflow-hidden bg-[#c0c0c0] p-[6px]">
      <div class="window-header flex select-none flex-row items-center justify-between">
        <div class="flex flex-row gap-1">
          <img src="/icons/dex.png" alt="logo" class="h-6 w-6" />
          <span class="">Mibibi - Dexscreener</span>
        </div>
        <WindowButtons
          :minimize-func="handlePress"
          :maximize-func="handlePress"
          :close-func="handlePress"
        />
      </div>
    </div>
    <div class="h-full w-full border-[1px] border-gray-400 bg-white p-[6px]">
      <div id="dexscreener-embed">
        <iframe
          src="https://dexscreener.com/solana/ERCD6qtvn4sWhmNBLyPXfoKghjFRM3gxAYKxNzcw9a5x?embed=1&theme=dark&trades=0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
#dexscreener-embed {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 125%;
}
@media (min-width: 1400px) {
  #dexscreener-embed {
    padding-bottom: 65%;
  }
}
#dexscreener-embed iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
