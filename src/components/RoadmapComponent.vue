<template>
  <div
    class="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#384a28] px-12 py-16 text-4xl text-white sm:text-5xl xl:px-[15rem]"
  >
    <img
      src="@/assets/paws.png"
      alt="Lore"
      class="absolute -left-[6rem] -top-[6rem] w-[60%] sm:w-[30%]"
    />
    <img
      src="@/assets/paws.png"
      alt="Lore"
      class="absolute -bottom-[6rem] -right-[6rem] w-[60%] sm:w-[30%]"
    />
    <div class="flex h-full w-full flex-col items-center justify-between gap-10">
      <h1 class="font-bold uppercase">ROADMAP</h1>
      <div
        class="grid grid-cols-3 grid-rows-5 items-center justify-center gap-x-1 gap-y-3 text-2xl"
      >
        <p class="col-start-1 row-start-1 text-right">1. PUMP FUN LAUNCH</p>
        <p class="col-start-1 row-start-2 -translate-x-[6.2rem] text-right">2. FIGHT THE JEETS</p>
        <p class="col-start-1 row-start-3 -translate-x-[7.4rem] text-right">3. RADIUM LAUNCH</p>
        <p class="col-start-1 row-start-4 -translate-x-[5.6rem] text-right">
          4. DEX UPDATES (FIRST BOSS)
        </p>
        <p class="col-start-1 row-start-5 text-right">5. SHILL HARD (TEAM WORK)</p>
        <div class="col-span-1 col-start-2 row-span-5 row-start-1 flex items-center justify-center">
          <img src="@/assets/map.png" alt="Roadmap" class="w-[90%]" />
        </div>
        <p class="col-start-3 row-start-1 text-left">6. TWITTER RAID (TEAM WORK)</p>
        <p class="col-start-3 row-start-2 translate-x-[5rem] text-left">
          7. MAKE ANSEM TWEET (SECOND BOSS)
        </p>
        <p class="col-start-3 row-start-3 translate-x-[7.5rem] text-left">
          8. MAKE DARKFARMS (THIRD BOSS) TWEET
        </p>
        <p class="col-start-3 row-start-4 translate-x-[3.3rem] text-left">
          9. HIT 100 MIL MC (TEAM WORK)
        </p>
        <p class="col-start-3 row-start-5 text-left">10. GET THE LEGS</p>
      </div>
    </div>
  </div>
</template>
