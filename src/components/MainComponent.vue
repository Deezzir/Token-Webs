<script setup lang="ts">
import { TwitterIcon, TelegramIcon } from '@/components/icons'
import TwitchEmbed from '@/components/TwitchEmbed.vue'
</script>

<template>
  <div class="flex flex-col relative place-items-center">
    <TwitchEmbed channel="bobdancing" />
    <p
      class="[word-spacing:-1px] sm:[word-spacing:0px] relative text-2xl sm:text-3xl text-center font-bold pt-10 pb-1 text-[#FFF3E0] drop-shadow-[0_3px_3px_rgba(153,69,255,0.7)]"
    >
      Let's make $BOBDANCE do DANCE DANCE DANCE DANCE DANCE
    </p>
    <p class="relative text-lg sm:text-2xl text-center pt-1">
      Help Bob on
      <a
        href="https://www.pump.fun/"
        class="text-[#E53935] font-bold hover:text-blue-700 transition duration-150 ease-in-out"
      >
        Pump.fun
      </a>
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
    <p class="relative text-white text-lg sm:text-2xl text-center pt-10 pb-1 three-d-effect">
      La cucaracha, la cucaracha<br />
      Ya no puede caminar<br />
      Porque no tiene, porque le falta<br />
      Una pata para andar<br />
      Una cucaracha grande<br />
      Se pasea en la cocina<br />
      Y la chancla de mi madre<br />
      Le ha quitado una patita<br />
      La cucaracha, la cucaracha<br />
      Ya no puede caminar<br />
      Porque no tiene, porque le falta<br />
      Una pata para andar<br />
      Esta coja cucaracha<br />
      Nunca se da por vencida<br />
      Y aunque le falte una pata<br />
      Baila siempre en la cocina<br />
      Tiene tanta mala pata<br />
      Esta pobre señorita<br />
      Que mi padre con su chancla<br />
      Le ha quitado otra patita<br />
      La cucaracha, la cucaracha<br />
      Ya no puede caminar<br />
      Porque no tiene, porque le falta<br />
      Las dos patitas de atrás<br />
      Enfadada y muy molesta<br />
      Llamó a todas sus amigas<br />
      "Ay, pronto haremos una fiesta<br />
      En medio de la cocina"<br />
      La cucaracha, la cucaracha<br />
      Ya no puede caminar<br />
      Porque no tiene, porque le falta<br />
      Las dos patitas de atrás<br />
      Las cucarachas, las cucarachas<br />
      Nunca paran de bailar<br />
      Aunque no tengan, aunque les falten<br />
      Las dos patitas de atrás<br />
      Se acabó la cucaracha.<br />
    </p>
  </div>
</template>

<style scoped>
.three-d-effect {
  text-shadow:
    1px 1px #000000,
    2px 2px #000000,
    3px 3px #000000;
  /* Adjust the color and offset to your preference */
}
</style>
