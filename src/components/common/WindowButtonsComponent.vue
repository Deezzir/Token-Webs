<script setup lang="ts">
import type { PropType } from 'vue'
</script>

<script lang="ts">
export default {
  props: {
    minimize: {
      type: Boolean,
      default: true
    },
    maximize: {
      type: Boolean,
      default: true
    },
    close: {
      type: Boolean,
      default: true
    },
    closeFunc: {
      type: Function as PropType<(payload: MouseEvent) => void>,
      default: () => (payload: MouseEvent) => {}
    },
    minimizeFunc: {
      type: Function as PropType<(payload: MouseEvent) => void>,
      default: () => (payload: MouseEvent) => {}
    },
    maximizeFunc: {
      type: Function as PropType<(payload: MouseEvent) => void>,
      default: () => (payload: MouseEvent) => {}
    }
  }
}
</script>

<template>
  <div class="flex flex-row items-center justify-center gap-1">
    <button
      @click="minimizeFunc"
      v-show="minimize"
      class="window-shadow h-5 w-5 bg-[#c0c0c0] bg-[url('/icons/minimize.svg')] bg-[length:12px_2px] bg-[position:50%_80%] bg-no-repeat"
    ></button>
    <button
      @click="maximizeFunc"
      v-show="maximize"
      class="window-shadow h-5 w-5 bg-[#c0c0c0] bg-[url('/icons/maximize.svg')] bg-[length:12px_12px] bg-[position:50%] bg-no-repeat"
    ></button>
    <button
      @click="closeFunc"
      v-show="close"
      class="window-shadow h-5 w-5 bg-[#c0c0c0] bg-[url('/icons/close.svg')] bg-[length:12px_12px] bg-[position:50%] bg-no-repeat"
    ></button>
  </div>
</template>
