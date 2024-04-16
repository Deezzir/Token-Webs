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
  emits: ['press'],
  methods: {
    copyText() {
      navigator.clipboard.writeText(this.CA)
    },
    checkScreenSize() {
      this.isNarrowScreen = window.innerWidth < 768
    },
    handlePress() {
      this.$emit('press')
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
        <WindowButtons
          :minimize-func="handlePress"
          :maximize-func="handlePress"
          :close-func="handlePress"
        />
      </div>
      <div class="flex select-none flex-row gap-[6px] p-1 text-center text-xs text-black">
        <div><span class="underline">F</span>ile</div>
        <div><span class="underline">E</span>dit</div>
        <div><span class="underline">S</span>earch</div>
        <div><span class="underline">H</span>elp</div>
      </div>
      <div class="text-md h-full border-[1px] border-gray-400 bg-white p-[6px] text-black">
        <p class="cairo text-sm">
          وهذا أصعب ما يكون إنّ مقاضاة المرء نفسه لأصعب من مقاضاته غيره. فإذا أصدرت على نفسك حكماً
          عادلاً صادقاً كنت حكيماً حقّاً لَقَدْ خَلَقَ الْخَالِقْ أَجْمَلَ الْخَلِيقَتَانْ فِي
          الْعَالَمْ وَ هُمَا الأَرْض وَ أَ التفكير حوار الروح مع ذاتها ش اليوم وإنس الغد لَقَدْ
          طَلَبْتُ مِنَ الْخَالِقْ مَاءً فَوَهَبَنِي بَحْراً. وَ طَلَبْتُ مِنَ الْخَالَقْ عُشْباً
          فَوَهَبَنِي حَقْلاً. وَ طَلَبْتُ مِنَ الْخَالَقْ مَلَكاً فَوَهَبَنِي أَنْتَ جميل الداخل
          والخارج جميل القلب والقالب , جميلة القلب والقالب يس هناك بين البشر من هو جزيرة مكتفية
          بذاتها. كل إنسان جزء من أرض تمتد بلا فواصل، جزء من الكل… لا تبعث إذن أحداً ليخبرك بمن
          تنعيه الأجراس، فالأجراس تنعيك أنت القلب النابض لروما ليس رخام مجلس الشيوخ انها رمال
          الكولوسيوم عند الناسِ البُسطاءَ إرادات وآمال, وعند الناس الواثقين من نفسهم اهداف ومشروعات
          ان ثقة بالنفس هي عادة يمكنك ان يكتسبَ عاملا كانّه عندك الثقة التي تريد تمتُّع بها
          الآنالتجارب ليست لها نهاية والمرء منها في زيادة إذا كان لديك مشكله فإنها لن تحل إذا أنكرت
          وجودها
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
