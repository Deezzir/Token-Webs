<script setup lang="ts"></script>

<script>
export default {
  data() {
    return {
      buttonTop: 0,
      buttonLeft: 0
    }
  },
  methods: {
    moveButton() {
      const button = document.getElementById('no-button')
      button?.classList.add('absolute')
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      const buttonWidth = 300
      const buttonHeight = 300

      this.buttonTop = Math.random() * (viewportHeight - buttonHeight)
      this.buttonLeft = Math.random() * (viewportWidth - buttonWidth)
    }
  }
}
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="grid grid-rows-1 sm:grid-cols-2 flex-grow justify-center items-center">
      <div class="">
        <img src="@/assets/gendalf.png" alt="Gendalf" class="rounded-xl h-full" />
      </div>
      <div class="grid grid-cols-1 justify-items-center items-center pb-5 sm:pr-5 sm:pb-0">
        <h1 class="text-2xl sm:text-3xl text-white">Gandalf is passing you a joint...</h1>
        <h2 class="text-2xl sm:text-3xl text-white">Do you accept?</h2>
        <div class="flex space-x-10 text-2xl">
          <div class="flex space-x-4">
            <a
              href="/party"
              class="bg-black border-2 border-white text-white font-bold py-2 px-6 rounded mt-4 min-w-[10rem] hover:bg-white hover:text-black text-center"
            >
              Yes
            </a>
            <button
              id="no-button"
              @mouseover="moveButton"
              :style="{ top: buttonTop + 'px', left: buttonLeft + 'px' }"
              class="bg-black border-2 border-white text-white font-bold py-2 px-6 rounded mt-4 min-w-[10rem] transition-transform duration-300 ease-in-out"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
