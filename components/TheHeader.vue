<template>
  <nav
    class="bg-blackColor z-50 border-b border-b-gray-800 sticky top-0 w-full overflow-visible flex items-center justify-center">
    <div class="flex items-center container  py-6">
      <!--  LOGO   -->
      <nuxt-link to="/">
        <AHGLogo width="10vw" color="white" />
      </nuxt-link>
      <ul
        class="hidden ml-auto uppercase md:flex items-center gap-5 text-xs lg:text-[16px] xl:gap-[6vw] 2xl:gap-16 text-white">
        <TheHeaderLink v-for="link in utilStore.headerLinks" :key="link.title" :link="link" />
        <!--        <li v-for="link in utilStore.headerLinks" :key="link.title" class="relative">
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
                &lt;!&ndash;                <li>
                                  <button @click="isOpenBgmMenu = true" class="flex gap-2 w-full justify-between items-center"
                                    to="/bgm2022">Blood Glucose Monitor
                                    <svg class="rotate-180" width="12" height="12" viewBox="0 0 6 9" fill="none"
                                      xmlns="http://www.w3.org/2000/svg" data-v-eeadef4d="">
                                      <path
                                        d="M4.97172 8.65283C5.15999 8.65283 5.32735 8.59007 5.45287 8.46456C5.72482 8.21352 5.72482 7.77421 5.45287 7.52317L2.58688 4.63627L5.45287 1.77028C5.72482 1.51924 5.72482 1.07993 5.45287 0.828896C5.20183 0.556941 4.76252 0.556941 4.51148 0.828896L1.16435 4.17603C0.89239 4.42707 0.89239 4.86638 1.16435 5.11742L4.51148 8.46456C4.637 8.59007 4.80436 8.65283 4.97172 8.65283Z"
                                        fill="#fff"></path>
                                    </svg>
                                  </button>
                                </li>&ndash;&gt;

                &lt;!&ndash;                <li class="mt-6">
                                  <button @click="isOpenBpmMenu = !isOpenBpmMenu" class="flex gap-2 w-full justify-between items-center"
                                    to="/bpm300">Blood Pressure Monitor
                                    <svg class="rotate-180" width="12" height="12" viewBox="0 0 6 9" fill="none"
                                      xmlns="http://www.w3.org/2000/svg" data-v-eeadef4d="">
                                      <path
                                        d="M4.97172 8.65283C5.15999 8.65283 5.32735 8.59007 5.45287 8.46456C5.72482 8.21352 5.72482 7.77421 5.45287 7.52317L2.58688 4.63627L5.45287 1.77028C5.72482 1.51924 5.72482 1.07993 5.45287 0.828896C5.20183 0.556941 4.76252 0.556941 4.51148 0.828896L1.16435 4.17603C0.89239 4.42707 0.89239 4.86638 1.16435 5.11742L4.51148 8.46456C4.637 8.59007 4.80436 8.65283 4.97172 8.65283Z"
                                        fill="#fff"></path>
                                    </svg>
                                  </button>
                                  <Transition name="page" mode="out-in">
                                    <div v-if="isOpenBgmMenu"
                                      class="bg-black  min-w-[150px] flex flex-col gap-2 absolute -right-[155px] rounded  top-0 p-3">
                                      <NuxtLink @click="isOpenProductMenu = false" to="/bgm2022">AHG-2022</NuxtLink>
                                      <NuxtLink @click="isOpenProductMenu = false" to="/bgm2285">AHG-2285</NuxtLink>
                                    </div>
                                  </Transition>
                                  <Transition name="page" mode="out-in">
                                    <div v-if="isOpenBpmMenu"
                                      class="bg-black min-w-[150px] absolute -right-[155px] rounded bottom-0 p-3">
                                      <NuxtLink @click="isOpenProductMenu = false" to="/bpm300" class="mt-2">AHG-300</NuxtLink>
                                    </div>
                                  </Transition>
                                </li>&ndash;&gt;
              </ul>
            </Transition>
          </button>
          <NuxtLink v-else :to="link.url" class="uppercase">
            {{link.title}}
          </NuxtLink>

        </li>-->
<!--        <li>
          <NuxtLink to="/">
            Home
          </NuxtLink>
        </li>
        <li class="relative">
          <button v-click-outside="() => isOpenProductMenu = false" class="flex items-center gap-2"
            @click.self="isOpenProductMenu = !isOpenProductMenu">
            PRODUCTS
            <svg :class="isOpenProductMenu ? 'rotate-90' : '-rotate-90'" width="12" height="12" viewBox="0 0 6 9"
              fill="none" xmlns="http://www.w3.org/2000/svg" data-v-eeadef4d="">
              <path
                d="M4.97172 8.65283C5.15999 8.65283 5.32735 8.59007 5.45287 8.46456C5.72482 8.21352 5.72482 7.77421 5.45287 7.52317L2.58688 4.63627L5.45287 1.77028C5.72482 1.51924 5.72482 1.07993 5.45287 0.828896C5.20183 0.556941 4.76252 0.556941 4.51148 0.828896L1.16435 4.17603C0.89239 4.42707 0.89239 4.86638 1.16435 5.11742L4.51148 8.46456C4.637 8.59007 4.80436 8.65283 4.97172 8.65283Z"
                fill="#fff"></path>
            </svg>
            <Transition name="layout" mode="out-in">
              <ul v-if="isOpenProductMenu"
                class="absolute top-6 text-left z-10 min-w-[225px] bg-black/90 shadow-sm rounded p-3">
                <li >
                  <NuxtLink  class="flex gap-2 w-full justify-between items-center"
                    to="/bgm2022">Blood Glucose Monitor
                    <svg class="rotate-180" width="12" height="12" viewBox="0 0 6 9" fill="none"
                      xmlns="http://www.w3.org/2000/svg" data-v-eeadef4d="">
                      <path
                        d="M4.97172 8.65283C5.15999 8.65283 5.32735 8.59007 5.45287 8.46456C5.72482 8.21352 5.72482 7.77421 5.45287 7.52317L2.58688 4.63627L5.45287 1.77028C5.72482 1.51924 5.72482 1.07993 5.45287 0.828896C5.20183 0.556941 4.76252 0.556941 4.51148 0.828896L1.16435 4.17603C0.89239 4.42707 0.89239 4.86638 1.16435 5.11742L4.51148 8.46456C4.637 8.59007 4.80436 8.65283 4.97172 8.65283Z"
                        fill="#fff"></path>
                    </svg>
                  </NuxtLink>
                </li>
                <li>
                  <button @click="isOpenBgmMenu = true" class="flex gap-2 w-full justify-between items-center"
                    to="/bgm2022">Blood Glucose Monitor
                    <svg class="rotate-180" width="12" height="12" viewBox="0 0 6 9" fill="none"
                      xmlns="http://www.w3.org/2000/svg" data-v-eeadef4d="">
                      <path
                        d="M4.97172 8.65283C5.15999 8.65283 5.32735 8.59007 5.45287 8.46456C5.72482 8.21352 5.72482 7.77421 5.45287 7.52317L2.58688 4.63627L5.45287 1.77028C5.72482 1.51924 5.72482 1.07993 5.45287 0.828896C5.20183 0.556941 4.76252 0.556941 4.51148 0.828896L1.16435 4.17603C0.89239 4.42707 0.89239 4.86638 1.16435 5.11742L4.51148 8.46456C4.637 8.59007 4.80436 8.65283 4.97172 8.65283Z"
                        fill="#fff"></path>
                    </svg>
                  </button>
                </li>

                <li class="mt-6">
                  <button @click="isOpenBpmMenu = !isOpenBpmMenu" class="flex gap-2 w-full justify-between items-center"
                    to="/bpm300">Blood Pressure Monitor
                    <svg class="rotate-180" width="12" height="12" viewBox="0 0 6 9" fill="none"
                      xmlns="http://www.w3.org/2000/svg" data-v-eeadef4d="">
                      <path
                        d="M4.97172 8.65283C5.15999 8.65283 5.32735 8.59007 5.45287 8.46456C5.72482 8.21352 5.72482 7.77421 5.45287 7.52317L2.58688 4.63627L5.45287 1.77028C5.72482 1.51924 5.72482 1.07993 5.45287 0.828896C5.20183 0.556941 4.76252 0.556941 4.51148 0.828896L1.16435 4.17603C0.89239 4.42707 0.89239 4.86638 1.16435 5.11742L4.51148 8.46456C4.637 8.59007 4.80436 8.65283 4.97172 8.65283Z"
                        fill="#fff"></path>
                    </svg>
                  </button>
                  <Transition name="page" mode="out-in">
                    <div v-if="isOpenBgmMenu"
                      class="bg-black  min-w-[150px] flex flex-col gap-2 absolute -right-[155px] rounded  top-0 p-3">
                      <NuxtLink @click="isOpenProductMenu = false" to="/bgm2022">AHG-2022</NuxtLink>
                      <NuxtLink @click="isOpenProductMenu = false" to="/bgm2285">AHG-2285</NuxtLink>
                    </div>
                  </Transition>
                  <Transition name="page" mode="out-in">
                    <div v-if="isOpenBpmMenu"
                      class="bg-black min-w-[150px] absolute -right-[155px] rounded bottom-0 p-3">
                      <NuxtLink @click="isOpenProductMenu = false" to="/bpm300" class="mt-2">AHG-300</NuxtLink>
                    </div>
                  </Transition>
                </li>
              </ul>
            </Transition>
          </button>

        </li>
        <li>
          <NuxtLink to="/support">
            SUPPORT
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/distributor">
            DISTRIBUTION
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about-us">
            ABOUT US
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact-us">
            GET IN TOUCH
          </NuxtLink>
        </li>-->
      </ul>
      <button class="w-8 flex md:hidden flex-col gap-2 ml-auto" @click="showNavigationBar = true">
        <span class="w-full h-px bg-white rounded-full"></span>
        <span class="w-full h-px bg-white rounded-full"></span>
        <span class="w-full h-px bg-white rounded-full"></span>
      </button>
      <Transition name="fade-slide">
        <div
          class="fixed w-full h-full pointer-events-auto inset-0 bg-blackColor px-8 py-12 flex flex-col z-30 space-y-12"
          v-if="showNavigationBar">
          <button class="w-8 grid place-items-center md:hidden ml-auto" @click="showNavigationBar = false">
            <span class="w-full h-px bg-white rounded-full rotate-45"></span>
            <span class="w-full h-px bg-white rounded-full -rotate-45"></span>
          </button>
          <AHGLogo color="white" class="self-center" />
          <ul class=" w-full flex-1 uppercase flex flex-col  divide-y divide-white/40 gap-4 text-lg text-white">
            <li class="w-full  flex">
              <NuxtLink to="/" class="w-full pt-4 rounded-xl">
                Home
              </NuxtLink>
            </li>
            <li class="w-full  ">
              <button v-click-outside="() => isOpenProductMenu = false"
                @click="isOpenMobileProductMenu = !isOpenMobileProductMenu"
                class="w-full flex  items-center pt-4 gap-4  rounded-xl">
                PRODUCTS
                <svg :class="isOpenMobileProductMenu ? 'rotate-90' : '-rotate-90'" width="15" height="15"
                  viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-eeadef4d="">
                  <path
                    d="M4.97172 8.65283C5.15999 8.65283 5.32735 8.59007 5.45287 8.46456C5.72482 8.21352 5.72482 7.77421 5.45287 7.52317L2.58688 4.63627L5.45287 1.77028C5.72482 1.51924 5.72482 1.07993 5.45287 0.828896C5.20183 0.556941 4.76252 0.556941 4.51148 0.828896L1.16435 4.17603C0.89239 4.42707 0.89239 4.86638 1.16435 5.11742L4.51148 8.46456C4.637 8.59007 4.80436 8.65283 4.97172 8.65283Z"
                    fill="#fff"></path>
                </svg>
              </button>
              <div class="flex mt-2 flex-col gap-2">
                <Transition name="layout" mode="out-in">
                  <ul v-if="isOpenMobileProductMenu" class="text-left w-full   rounded p-3">
                    <li>
                      <button @click="isOpenBgmMenu = !isOpenBgmMenu"
                        class="flex gap-2 w-full justify-between items-center" to="/bgm2022">Blood Glucose Monitor
                        <svg class="rotate-180" width="12" height="12" viewBox="0 0 6 9" fill="none"
                          xmlns="http://www.w3.org/2000/svg" data-v-eeadef4d="">
                          <path
                            d="M4.97172 8.65283C5.15999 8.65283 5.32735 8.59007 5.45287 8.46456C5.72482 8.21352 5.72482 7.77421 5.45287 7.52317L2.58688 4.63627L5.45287 1.77028C5.72482 1.51924 5.72482 1.07993 5.45287 0.828896C5.20183 0.556941 4.76252 0.556941 4.51148 0.828896L1.16435 4.17603C0.89239 4.42707 0.89239 4.86638 1.16435 5.11742L4.51148 8.46456C4.637 8.59007 4.80436 8.65283 4.97172 8.65283Z"
                            fill="#fff"></path>
                        </svg>
                      </button>
                      <div v-if="isOpenBgmMenu" class="w-full flex flex-col gap-2  rounded  p-3 pt-5">
                        <NuxtLink class="mb-2" @click="showNavigationBar = false" to="/bgm2022">AHG-2022</NuxtLink>
                        <NuxtLink @click="showNavigationBar = false" to="/bgm2285">AHG-2285</NuxtLink>
                      </div>
                    </li>

                    <li class="mt-6">
                      <button @click="isOpenBpmMenu = !isOpenBpmMenu"
                        class="flex gap-2 w-full justify-between items-center" to="/bpm300">Blood Pressure Monitor
                        <svg class="rotate-180" width="12" height="12" viewBox="0 0 6 9" fill="none"
                          xmlns="http://www.w3.org/2000/svg" data-v-eeadef4d="">
                          <path
                            d="M4.97172 8.65283C5.15999 8.65283 5.32735 8.59007 5.45287 8.46456C5.72482 8.21352 5.72482 7.77421 5.45287 7.52317L2.58688 4.63627L5.45287 1.77028C5.72482 1.51924 5.72482 1.07993 5.45287 0.828896C5.20183 0.556941 4.76252 0.556941 4.51148 0.828896L1.16435 4.17603C0.89239 4.42707 0.89239 4.86638 1.16435 5.11742L4.51148 8.46456C4.637 8.59007 4.80436 8.65283 4.97172 8.65283Z"
                            fill="#fff"></path>
                        </svg>
                      </button>
                      <div v-if="isOpenBpmMenu" class="rounded bottom-0 p-3 pt-5">
                        <NuxtLink @click="showNavigationBar = false" to="/bpm300" class="mt-2">AHG-300
                        </NuxtLink>
                      </div>
                    </li>
                  </ul>
                </Transition>
              </div>
            </li>
            <li class="w-full  flex">
              <NuxtLink @click="showNavigationBar = false" to="/support" class="w-full pt-4 rounded-xl">
                SUPPORT
              </NuxtLink>
            </li>
            <li class="w-full flex">
              <NuxtLink @click="showNavigationBar = false" to="/distributor" class="w-full pt-4 rounded-xl">
                Distribution
              </NuxtLink>
            </li>
            <li class="w-full  flex">
              <NuxtLink @click="showNavigationBar = false" to="/about-us" class="w-full pt-4 rounded-xl">
                ABOUT US
              </NuxtLink>
            </li>
            <li class="w-full  flex">
              <NuxtLink @click="showNavigationBar = false" to="/contact-us" class="w-full pt-4 rounded-xl">
                GET IN TOUCH
              </NuxtLink>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">

import TheHeaderLink from "~/components/TheHeaderLink.vue";

const utilStore = useUtilStore();

const showNavigationBar = ref(false);
const isOpenProductMenu = ref(false);
const isOpenMobileProductMenu = ref(false);
const isOpenBgmMenu = ref(false);
const isOpenBpmMenu = ref(false);
watch(isOpenBgmMenu, (val) => {
  if (val == true) {
    isOpenBpmMenu.value = false;

  }
})
watch(isOpenBpmMenu, (val) => {
  if (val == true) {
    isOpenBgmMenu.value = false;
  }
});
watch(isOpenProductMenu, (val) => {
  if (val == false) {
    isOpenBgmMenu.value = false;
    isOpenBpmMenu.value = false;
  }
})
watch(isOpenMobileProductMenu, (val) => {
  if (val == false) {
    isOpenBgmMenu.value = false;
    isOpenBpmMenu.value = false;
  }
})
</script>

<style lang="scss" scoped>

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
</style>
