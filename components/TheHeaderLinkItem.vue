<template>
  <li class="relative">
    <NuxtLink v-if="subLink.subLinks.length <= 0" class="flex gap-2 w-full justify-between items-center py-2"
              :to="subLink.url == '#' ? null : subLink.url">{{ subLink.displayTitle }}
      <svg class="rotate-180" width="12" height="12" viewBox="0 0 6 9" fill="none"
           xmlns="http://www.w3.org/2000/svg" data-v-eeadef4d="">
        <path
            d="M4.97172 8.65283C5.15999 8.65283 5.32735 8.59007 5.45287 8.46456C5.72482 8.21352 5.72482 7.77421 5.45287 7.52317L2.58688 4.63627L5.45287 1.77028C5.72482 1.51924 5.72482 1.07993 5.45287 0.828896C5.20183 0.556941 4.76252 0.556941 4.51148 0.828896L1.16435 4.17603C0.89239 4.42707 0.89239 4.86638 1.16435 5.11742L4.51148 8.46456C4.637 8.59007 4.80436 8.65283 4.97172 8.65283Z"
            fill="#fff"></path>
      </svg>
    </NuxtLink>
    <button v-else @click="isOpenSubMenu = !isOpenSubMenu" class="text-left flex gap-2 w-full justify-between items-center py-2">
      {{ subLink.displayTitle }}
      <svg class="rotate-180" width="12" height="12" viewBox="0 0 6 9" fill="none"
           xmlns="http://www.w3.org/2000/svg" data-v-eeadef4d="">
        <path
            d="M4.97172 8.65283C5.15999 8.65283 5.32735 8.59007 5.45287 8.46456C5.72482 8.21352 5.72482 7.77421 5.45287 7.52317L2.58688 4.63627L5.45287 1.77028C5.72482 1.51924 5.72482 1.07993 5.45287 0.828896C5.20183 0.556941 4.76252 0.556941 4.51148 0.828896L1.16435 4.17603C0.89239 4.42707 0.89239 4.86638 1.16435 5.11742L4.51148 8.46456C4.637 8.59007 4.80436 8.65283 4.97172 8.65283Z"
            fill="#fff"></path>
      </svg>
    </button>
    <Transition name="page" mode="out-in">
      <div v-if="isOpenSubMenu" v-click-outside="() => isOpenSubMenu = false"
           class="bg-black  min-w-[150px] flex flex-col gap-2 absolute -right-[170px] rounded top-0 p-3">
        <NuxtLink v-for="subLinkItem in subLink.subLinks" @click="isOpenProductMenu = false" :to="subLinkItem.url">{{subLinkItem.displayTitle}}</NuxtLink>
      </div>
    </Transition>
  </li>
</template>

<script setup lang="ts">
import type {FooterItem} from "~/models/Entities/SiteSettings";

const props = defineProps<{
  subLink:FooterItem
}>()
const isOpenProductMenu = ref(false);
const isOpenSubMenu = ref(false);
</script>

<style>
nav {
  a {
    &.router-link-exact-active {
      color: rgb(0, 145, 255);
    }
  }
}
</style>