<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { defineComponent } from 'vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { BarsIcon, XMarkIcon } from '@/components/icons'
</script>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      navigations: [
        { id: 1, name: 'Home', href: '/', current: false },
        { id: 2, name: 'Shop', href: '/shop', current: false }
      ],
      lastScrollPosition: 0,
      isNavbarVisible: true
    }
  },
  computed: {
    buyLink(): string {
      return this.$buyLink
    }
  },
  watch: {
    $route() {
      this.navigations.forEach((nav) => {
        nav.current = nav.href === this.$route.path
      })
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop

      if (currentScrollPosition < this.lastScrollPosition) {
        this.isNavbarVisible = true
      } else if (currentScrollPosition > 50 && currentScrollPosition > this.lastScrollPosition) {
        this.isNavbarVisible = false
      }

      this.lastScrollPosition = currentScrollPosition
    }
  }
})
</script>

<template>
  <Menu
    as="nav"
    class="bg-transparent px-16 fixed top-0 left-0 w-full z-10 transition-transform duration-300"
    v-slot="{ open }"
    :class="{ '-translate-y-full': !isNavbarVisible }"
  >
    <div class="flex h-24 items-center justify-between">
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <RouterLink class="brand mr-3 inline-flex md:w-auto" :to="navigations[0].href">
          <img
            alt="DEGENX logo"
            class="m-auto inline w-52 align-sub translate-x-5 -translate-y-1"
            src="../assets/logo.png"
          />
        </RouterLink>
        <div class="absolute inset-y-0 right-4 flex items-center sm:hidden">
          <MenuButton
            class="relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none"
          >
            <BarsIcon v-if="!open" class="h-6 w-6 text-white" />
            <XMarkIcon v-else class="h-6 w-6 text-white" />
          </MenuButton>
        </div>
        <div class="hidden sm:ml-8 text-3xl text-white font-bold sm:flex">
          <a :href="buyLink" class="px-6 py-2">Buy</a>
          <RouterLink :key="navigations[1].id" :to="navigations[1].href" class="px-6 py-2"
            >{{ navigations[1].name }}
          </RouterLink>
        </div>
      </div>
    </div>

    <MenuItems
      class="sm:hidden flex flex-col space-y-1 py-5 px-5 items-center justify-center font-bold text-white text-2xl"
    >
      <MenuItem
        as="div"
        v-slot="{ close }"
        class="inline-flex h-[40px] w-full items-center justify-center text-center focus:outline-none"
      >
        <a :href="buyLink" @click="close" class="p-3">Buy</a>
      </MenuItem>
      <MenuItem
        as="div"
        v-slot="{ close }"
        :key="navigations[1].id"
        class="inline-flex h-[40px] w-full items-center justify-center text-center focus:outline-none"
      >
        <RouterLink :to="navigations[1].href" @click="close" class="p-3">{{
          navigations[1].name
        }}</RouterLink>
      </MenuItem>
    </MenuItems>
  </Menu>
</template>
