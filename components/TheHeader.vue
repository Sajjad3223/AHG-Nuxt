<template>
  <nav class="bg-blackColor w-full flex items-center justify-center">
    <div class="flex items-center container mx-auto py-6">
      <!--  LOGO   -->
      <AHGLogo width="10vw" color="white" />
      <ul class="hidden ml-auto uppercase md:flex items-center gap-5 text-xs lg:text-[16px] xl:gap-[6vw] 2xl:gap-16 text-white">
        <li>
          <NuxtLink to="/">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/landing">
            PRODUCTS
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/support">
            SUPPORT
          </NuxtLink>
        </li>
        <li>
          <NuxtLink>
            SERVICE
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/aboutUs">
            ABOUT US
          </NuxtLink>
        </li>
        <li>
          <NuxtLink>
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
        <div class="fixed w-full h-full pointer-events-auto inset-0 bg-blackColor px-8 py-12 flex flex-col z-30 space-y-12" v-if="showNavigationBar">
          <button class="w-8 grid place-items-center md:hidden ml-auto" @click="showNavigationBar = false">
            <span class="w-full h-px bg-white rounded-full rotate-45"></span>
            <span class="w-full h-px bg-white rounded-full -rotate-45"></span>
          </button>
          <AHGLogo color="white" class="self-center"/>
          <ul class="mx-auto w-full flex-1 uppercase flex flex-col items-center divide-y divide-white/50 gap-4 text-xl text-white">
            <li class="w-full text-center flex">
              <NuxtLink class="w-full py-4 rounded-xl">
                Home
              </NuxtLink>
            </li>
            <li class="w-full text-center flex">
              <NuxtLink class="w-full py-4 rounded-xl">
                PRODUCTS
              </NuxtLink>
            </li>
            <li class="w-full text-center flex">
              <NuxtLink class="w-full py-4 rounded-xl">
                SUPPORT
              </NuxtLink>
            </li>
            <li class="w-full text-center flex">
              <NuxtLink class="w-full py-4 rounded-xl">
                SERVICE
              </NuxtLink>
            </li>
            <li class="w-full text-center flex">
              <NuxtLink class="w-full py-4 rounded-xl">
                ABOUT US
              </NuxtLink>
            </li>
            <li class="w-full text-center flex">
              <NuxtLink class="w-full py-4 rounded-xl">
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

</script>

<style>
.fade-slide-enter-active,
.fade-slide-leave-active{
  transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to{
  opacity: 0;
  transform:translateY(-100px);
}
</style>

