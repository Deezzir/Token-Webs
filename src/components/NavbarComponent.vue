<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { BarsIcon, XMarkIcon, ArrowIcon, TelegramIcon, TwitterIcon } from '@/components/icons'
</script>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      navigations: [
        {
          id: 1,
          name: 'CAT WAF HAT',
          href: '/',
          current: true
        },
        {
          id: 2,
          name: 'BUY WAF US',
          href: '/buy',
          current: false
        },
        {
          id: 3,
          name: 'CHART WAF US',
          href: '/chart',
          current: false
        }
      ],
      isOpen: false
    }
  },
  computed: {
    twitter(): string {
      return this.$twitter
    },
    telegram(): string {
      return this.$telegram
    }
  },
  watch: {
    $route: {
      handler() {
        this.navigations.forEach((nav) => {
          nav.current = nav.href === this.$route.path
        })
      },
      deep: true
    }
  },
  methods: {
    overflow(open: boolean) {
      if (open) {
        document.documentElement.classList.add('overflow-hidden')
      } else {
        document.documentElement.classList.remove('overflow-hidden')
      }
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    handleClickOutside(event: MouseEvent) {
      const dropdown = this.$refs.dropdown as HTMLElement
      if (this.isOpen && !dropdown.contains(event.target as Node)) {
        this.isOpen = false
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  }
})
</script>

<template>
  <Menu
    as="nav"
    v-slot="{ open }"
    class="sticky top-0 z-40 flex h-[80px] border-0 bg-[#477586e8] backdrop-blur transition-colors duration-500"
  >
    <div class="m-auto flex w-full items-center justify-around px-[6vw] py-3 sm:px-[10vw]">
      <div class="flex items-center">
        <MenuButton class="rounded-md p-2 text-white sm:hidden">
          <BarsIcon v-if="!open" class="block h-10 w-10" />
          <XMarkIcon v-else class="block h-10 w-10" />
        </MenuButton>

        <div class="hidden sm:block">
          <ul
            class="flex flex-row justify-center items-center space-x-10 text-xl leading-6 text-white"
          >
            <li v-for="nav in navigations" :key="nav.id">
              <RouterLink
                class="rounded-md px-[1.5vw] py-[15px]"
                :class="[
                  nav.current
                    ? 'bg-slate-600 text-white'
                    : 'hover:bg-slate-800/80  hover:opacity-90'
                ]"
                :to="nav.href"
              >
                {{ nav.name }}
              </RouterLink>
            </li>
            <li class="relative" ref="dropdown" @click.stop="toggleDropdown">
              <button
                class="flex items-center text-white rounded-md px-[1.5vw] py-[15px]"
                :class="isOpen ? 'bg-slate-600' : 'hover:bg-slate-800/80'"
              >
                <span>VIBE WAF US</span>
                <span class="ml-2"><ArrowIcon :is-open="isOpen" /></span>
              </button>
              <ul
                v-if="isOpen"
                class="absolute left-0 w-40 mt-2 p-2 bg-slate-600 rounded-md shadow-lg"
              >
                <li>
                  <a
                    :href="telegram"
                    target="_blank"
                    class="inline-flex flex-row items-center rounded-md w-full px-4 py-2 text-white hover:bg-slate-800/80"
                    ><TelegramIcon class="w-4 h-4" /> <span class="ml-2">Telegram</span></a
                  >
                </li>
                <li>
                  <a
                    :href="twitter"
                    target="_blank"
                    class="inline-flex flew-row items-center rounded-md w-full px-4 py-2 text-white hover:bg-slate-800/80"
                  >
                    <TwitterIcon class="w-4 h-4" /> <span class="ml-2">Twitter[X]</span></a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute top-[80px] flex w-full flex-col items-center space-y-5 bg-[#477586f7] px-[10vw] py-[2vh] text-2xl text-white sm:hidden backdrop-blur transition-colors duration-500"
      >
        <MenuItem
          v-slot="{ close }"
          as="div"
          v-for="nav in navigations"
          :key="nav.id"
          class="inline-flex h-[45px] w-full items-center justify-center text-center focus:outline-none"
        >
          <RouterLink
            class="rounded-md grow px-[0.8vw] py-[1.2vh]"
            @click="close(), overflow(false)"
            :class="[
              nav.current ? 'bg-slate-900 text-white' : 'hover:bg-slate-700/80  hover:opacity-70'
            ]"
            :to="nav.href"
          >
            {{ nav.name }}
          </RouterLink>
        </MenuItem>
        <div class="mt-[2vh] flex border-t border-slate-500/50 pt-[1vh]">
          <div class="inline-flex grow items-center justify-center space-x-10">
            <a
              :href="telegram"
              target="_blank"
              class="inline-flex flex-row items-center rounded-md w-full px-4 py-2 text-white hover:bg-slate-800/80"
              ><TelegramIcon class="w-8 h-8"
            /></a>
            <a
              :href="twitter"
              target="_blank"
              class="inline-flex flew-row items-center rounded-md w-full px-4 py-2 text-white hover:bg-slate-800/80"
            >
              <TwitterIcon class="w-8 h-8"
            /></a>
          </div>
        </div>
      </MenuItems>
    </Transition>
  </Menu>
</template>
