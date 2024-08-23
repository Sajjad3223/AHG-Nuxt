<template>
  <nav class="bg-blackColor w-full overflow-visible flex items-center justify-center">
    <div class="flex items-center container  py-6">
      <!--  LOGO   -->
      <AHGLogo width="10vw" color="white" />
      <ul
        class="hidden ml-auto uppercase md:flex items-center gap-5 text-xs lg:text-[16px] xl:gap-[6vw] 2xl:gap-16 text-white">
        <li>
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
                <!-- AHG-2022
                  
                AHG-2285 -->
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
        </li>
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
          <ul
            class="mx-auto w-full flex-1 uppercase flex flex-col items-center divide-y divide-white/50 gap-4 text-xl text-white">
            <li class="w-full text-center flex">
              <NuxtLink to="/" class="w-full py-4 rounded-xl">
                Home
              </NuxtLink>
            </li>
            <li class="w-full text-center flex">
              <NuxtLink @click="showNavigationBar = false" to="/landing" class="w-full py-4 rounded-xl">
                PRODUCTS
              </NuxtLink>
            </li>
            <li class="w-full text-center flex">
              <NuxtLink @click="showNavigationBar = false" to="/support" class="w-full py-4 rounded-xl">
                SUPPORT
              </NuxtLink>
            </li>
            <li class="w-full text-center flex">
              <NuxtLink @click="showNavigationBar = false" to="/distributor" class="w-full py-4 rounded-xl">
                Distribution
              </NuxtLink>
            </li>
            <li class="w-full text-center flex">
              <NuxtLink @click="showNavigationBar = false" to="/about-us" class="w-full py-4 rounded-xl">
                ABOUT US
              </NuxtLink>
            </li>
            <li class="w-full text-center flex">
              <NuxtLink @click="showNavigationBar = false" to="/contact-us" class="w-full py-4 rounded-xl">
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

const showNavigationBar = ref(false);
const isOpenProductMenu = ref(false);

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
watch(isOpenProductMenu,(val)=>{
  if(val==false){
    isOpenBgmMenu.value=false;
    isOpenBpmMenu.value=false;
  }
})
</script>

<style lang="scss" scoped>
nav {
  a {
    &.router-link-exact-active {
      color: rgb(0, 145, 255);
    }
  }
}

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
