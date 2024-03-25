<script setup lang="ts">
import { defineComponent } from 'vue'
</script>

<script lang="ts">
export default defineComponent({
  props: {
    channel: {
      type: String,
      required: true
    }
    // Add other Twitch Embed parameters as props as needed
  },
  mounted() {
    this.createTwitchEmbed()
  },
  methods: {
    createTwitchEmbed() {
      new Twitch.Embed('twitch-embed', {
        channel: this.channel,
        // Set other options here
        width: '100%',
        height: '500',
        theme: 'dark',
        layout: 'video',
        muted: false,
        allowfullscreen: false
        // You can add more embed options as needed
      })
    }
  }
})
</script>

<template>
  <div class="w-full" id="twitch-embed"></div>
</template>
