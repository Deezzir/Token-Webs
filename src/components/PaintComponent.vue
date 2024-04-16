<script setup lang="ts">
import WindowButtons from './common/WindowButtonsComponent.vue'
</script>

<script lang="ts">
export default {
  data() {
    return {}
  },
  props: {
    title: {
      type: String,
      required: true
    },
    image_path: {
      type: String,
      required: true
    }
  },
  created() {},
  unmounted() {},
  methods: {}
}
</script>

<template>
  <div class="flex w-[30%] select-none flex-col">
    <div class="window-shadow flex h-[25rem] w-full flex-col overflow-hidden bg-[#c0c0c0] p-[6px]">
      <div class="window-header flex select-none flex-row items-center justify-between">
        <div class="flex flex-row gap-1">
          <img src="/icons/paint.png" alt="logo" class="h-6 w-6" />
          <span class="">{{ title }} - Paint</span>
        </div>
        <WindowButtons />
      </div>
      <div class="flex select-none flex-row gap-[6px] p-1 text-center text-xs text-black">
        <div><span class="underline">F</span>ile</div>
        <div><span class="underline">E</span>dit</div>
        <div><span class="underline">V</span>iew</div>
        <div><span class="underline">I</span>mage</div>
        <div><span class="underline">C</span>olors</div>
        <div><span class="underline">H</span>elp</div>
        <div><span class="underline">E</span>xtras</div>
      </div>
      <div class="flex grow flex-row">
        <div class="flex min-w-20 flex-col px-1">
          <div class="grid h-full grid-cols-2 items-center justify-center gap-0">
            <div
              v-for="n in 16"
              class="flex h-full w-full items-center justify-center"
              :class="n === 7 ? 'shadow-clicked bg-checker-pattern' : 'window-shadow'"
            >
              <div
                class="h-4 w-4"
                :style="{
                  backgroundImage: `url('/icons/tools.svg')`,
                  backgroundPosition: `calc(-16px*(${n - 1}* 2 + 1)) -16px`
                }"
              ></div>
            </div>
          </div>
          <div class="h-16 w-full pb-1 pt-2"><div class="shadow-clicked h-full"></div></div>
          <div
            class="h-[1px] w-full border-[1px] border-b-[#fff] border-l-[#808080] border-r-[#fff] border-t-[#808080]"
          ></div>
        </div>
        <div class="h-full w-full border-[1px] border-gray-400 bg-white p-[6px]">
          <img :src="image_path" alt="image" class="h-64 w-full object-scale-down" />
        </div>
      </div>
      <div class="flex basis-auto select-none flex-col">
        <div class="ml-2 flex h-12 items-center">
          <div class="flex h-10 flex-row gap-2">
            <div class="shadow-palette h-9 w-10 grow">
              <div class="bg-checker-pattern shadow-top-left relative h-full border-gray-400">
                <div
                  class="shadow-palette absolute left-4 top-[14px] h-[18px] w-[18px] bg-white"
                ></div>
                <div
                  class="shadow-palette absolute left-1 top-[4px] h-[18px] w-[18px] bg-black"
                ></div>
              </div>
            </div>
            <div class="flex w-64 flex-row flex-wrap gap-x-[2px]">
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-black"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(128,128,128)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(128,0,0)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(128,128,0)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(0,128,0)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(0,128,128)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(0,0,128)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(128,0,128)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(128,128,64)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(0,64,64)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(0,128,255)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(0,64,128)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(64,0,255)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(128,64,0)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(255,255,255)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(192,192,192)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(255,0,0)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(255,255,0)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(0,255,0)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(0,255,255)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(0,0,255)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(255,0,255)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(255,255,128)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(0,255,128)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(128,255,255)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(128,128,255)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(255,0,128)]"></div>
              </div>
              <div class="shadow-palette h-4 w-4">
                <div class="shadow-top-left h-full w-full bg-[rgb(255,128,64)]"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mx-[1px] h-[1px] w-full border-[1px] border-b-[#fff] border-l-[#808080] border-r-[#fff] border-t-[#808080]"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shadow-palette {
  box-shadow:
    inset 1px 1px #c0c0c0,
    1px 1px #808080;
}

.shadow-top-left {
  box-shadow:
    inset 1px 1px black,
    1px 1px white;
}
</style>
