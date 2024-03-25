<script setup lang="ts">
import { TwitterIcon, TelegramIcon } from '@/components/icons'
import TwitchEmbed from '@/components/TwitchEmbed.vue'
</script>

<template>
  <div class="flex flex-col relative place-items-center">
    <TwitchEmbed channel="bobdancing" />
    <p
      class="[word-spacing:-1px] sm:[word-spacing:0px] relative text-xl sm:text-3xl text-center font-bold pt-10 pb-1 text-[#FFF3E0] drop-shadow-[0_3px_3px_rgba(153,69,255,0.7)]"
    >
      Can't wait to buy $BOBDANCE on #Solana and for it to go to the mooon
    </p>
    <p class="relative text-lg sm:text-2xl text-center pt-1">
      Lets gooo! Live on
      <a
        href="https://www.pump.fun/"
        class="text-[#E53935] hover:text-blue-700 transition duration-150 ease-in-out"
      >
        Pump.fun
      </a>
      🚀🚀🚀
    </p>
    <div class="flex flex-row justify-center items-center pt-10">
      <a
        href="https://twitter.com/bobdancingcock"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-[#E53935] hover:bg-[#f7be47] text-white font-bold text-4xl p-2 rounded mx-4"
      >
        <TwitterIcon />
      </a>
      <a
        href="https://t.me/bobdancingroach"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-[#E53935] hover:bg-[#f7be47] text-white font-bold text-4xl p-2 rounded mx-4"
      >
        <TelegramIcon />
      </a>
    </div>
    <p class="relative text-lg sm:text-xl text-center pt-10 pb-1">
      La cucaracha, la cucaracha Ya no puede caminar Porque no tiene, porque le falta Una pata para
      andar Una cucaracha grande Se pasea en la cocina Y la chancla de mi madre Le ha quitado una
      patita La cucaracha, la cucaracha Ya no puede caminar Porque no tiene, porque le falta Una
      pata para andar Esta coja cucaracha Nunca se da por vencida Y aunque le falte una pata Baila
      siempre en la cocina Tiene tanta mala pata Esta pobre señorita Que mi padre con su chancla Le
      ha quitado otra patita La cucaracha, la cucaracha Ya no puede caminar Porque no tiene, porque
      le falta Las dos patitas de atrás Enfadada y muy molesta Llamó a todas sus amigas "Ay, pronto
      haremos una fiesta En medio de la cocina" La cucaracha, la cucaracha Ya no puede caminar
      Porque no tiene, porque le falta Las dos patitas de atrás Las cucarachas, las cucarachas Nunca
      paran de bailar Aunque no tengan, aunque les falten Las dos patitas de atrás Se acabó.
    </p>
  </div>
</template>
