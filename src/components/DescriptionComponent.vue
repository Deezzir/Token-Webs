<script setup lang="ts">
import WindowButtons from '@/components/common/WindowButtonsComponent.vue'
</script>

<script lang="ts">
export default {
  data() {
    return {
      isNarrowScreen: false
    }
  },
  created() {
    this.checkScreenSize()
    window.addEventListener('resize', this.checkScreenSize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize)
  },
  computed: {
    clampedText(): string {
      if (!this.isNarrowScreen || this.CA.length < 7) {
        return this.CA
      }
      const start = this.CA.substring(0, 4)
      const end = this.CA.substring(this.CA.length - 4)
      return `${start}...${end}`
    },
    CA(): string {
      return this.$CA
    }
  },
  methods: {
    copyText() {
      navigator.clipboard.writeText(this.CA)
    },
    checkScreenSize() {
      this.isNarrowScreen = window.innerWidth < 40000
    }
  }
}
</script>

<template>
  <div class="flex w-full flex-col sm:w-1/3">
    <div class="window-shadow flex h-auto w-full flex-col overflow-hidden bg-[#c0c0c0] p-[6px]">
      <div class="window-header flex select-none flex-row items-center justify-between">
        <div class="flex flex-row gap-1">
          <img src="/icons/notepad.png" alt="logo" class="h-6 w-6" />
          <span class="">Description.txt - Notepad</span>
        </div>
        <WindowButtons />
      </div>
      <div class="flex select-none flex-row gap-[6px] p-1 text-center text-xs text-black">
        <div><span class="underline">F</span>ile</div>
        <div><span class="underline">E</span>dit</div>
        <div><span class="underline">S</span>earch</div>
        <div><span class="underline">H</span>elp</div>
      </div>
      <div class="text-md h-full border-[1px] border-gray-400 bg-white p-[6px] text-black">
        <p class="cairo text-sm">
          يتناول البحث الكلمات المأثورة في اللغة العربية وأنواعها والدخيلة اليها من اللغة الروسية.
          تعتبر اللغة الروسية من أغنى اللغات وأكثرها تعبيراً في العالم بسبب وفرة الوسائل التعبيرية.
          يستخدم الشخص في خطابه مجموعات راسخة من الكلمات ذات المعنى المجازي .توجد في اللغتين العربية
          والروسية العديد من الكلمات المأثورة. وتعد الكلمات المأثورة حكمة الشعوب على مر العصور
          وتستخدم في الحياة اليومية لأنها إحدى وسائل الخطاب الأدبي التصويري. ساهم التواصل الثقافي
          والاقتصادي والتجاري على مر الازمنة على الاحتكاك بين الشعوب وعلى انتشار الوحدات اللغوية
          (الروسية) في جميع أنحاء العالم ، بما في ذلك في الدول العربية ، مثل "بطل زماننا" , ليس كل
          ما يمع ذهباً, العين –مراة الروح .. الخ الكلمات المفتاحية: علم المصطلحات ، قول مأثور, اللغة
          الروسية, الكلمات المأثورة في اللغتين العربية والروسية .
        </p>
        <p @click="copyText">
          <b><br />CA:&nbsp;</b>{{ clampedText }}
        </p>
        <p class="animate-blink text-2xl">|</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-blink {
  animation: blink 1s steps(1, end) infinite;
}

@keyframes blink {
  0%,
  49.9% {
    opacity: 0;
  }
  50%,
  100% {
    opacity: 1;
  }
}
</style>
