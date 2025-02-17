<template>
  <li class="relative">
    <button v-if="!link.url" v-click-outside="() => isOpenProductMenu = false" class="flex items-center gap-2 uppercase"
            @click.self="isOpenProductMenu = !isOpenProductMenu">
      {{ link.title }}
      <svg :class="isOpenProductMenu ? 'rotate-90' : '-rotate-90'" width="12" height="12" viewBox="0 0 6 9"
           fill="none" xmlns="http://www.w3.org/2000/svg" data-v-eeadef4d="">
        <path
            d="M4.97172 8.65283C5.15999 8.65283 5.32735 8.59007 5.45287 8.46456C5.72482 8.21352 5.72482 7.77421 5.45287 7.52317L2.58688 4.63627L5.45287 1.77028C5.72482 1.51924 5.72482 1.07993 5.45287 0.828896C5.20183 0.556941 4.76252 0.556941 4.51148 0.828896L1.16435 4.17603C0.89239 4.42707 0.89239 4.86638 1.16435 5.11742L4.51148 8.46456C4.637 8.59007 4.80436 8.65283 4.97172 8.65283Z"
            fill="#fff"></path>
      </svg>
      <Transition name="layout" mode="out-in">
        <ul v-if="isOpenProductMenu"
            class="absolute top-6 text-left z-10 min-w-[200px] bg-black/90 shadow-sm rounded p-3 gap-2 flex flex-col">
          <li v-for="subLink in link.links" :key="subLink.displayTitle">
            <NuxtLink class="flex gap-2 w-full justify-between items-center py-2"
                      :to="subLink.url">{{ subLink.displayTitle }}
              <svg class="rotate-180" width="12" height="12" viewBox="0 0 6 9" fill="none"
                   xmlns="http://www.w3.org/2000/svg" data-v-eeadef4d="">
                <path
                    d="M4.97172 8.65283C5.15999 8.65283 5.32735 8.59007 5.45287 8.46456C5.72482 8.21352 5.72482 7.77421 5.45287 7.52317L2.58688 4.63627L5.45287 1.77028C5.72482 1.51924 5.72482 1.07993 5.45287 0.828896C5.20183 0.556941 4.76252 0.556941 4.51148 0.828896L1.16435 4.17603C0.89239 4.42707 0.89239 4.86638 1.16435 5.11742L4.51148 8.46456C4.637 8.59007 4.80436 8.65283 4.97172 8.65283Z"
                    fill="#fff"></path>
              </svg>
            </NuxtLink>
          </li>
        </ul>
      </Transition>
    </button>
    <NuxtLink v-else :to="link.url" class="uppercase">
      {{link.title}}
    </NuxtLink>

  </li>
</template>

<script setup lang="ts">
import type {FooterItem} from "~/models/Entities/SiteSettings";

const props = defineProps<{
  link:FooterItem
}>()
const isOpenProductMenu = ref(false);
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