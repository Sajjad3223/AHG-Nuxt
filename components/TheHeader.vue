<template>
  <nav class="bg-blackColor w-full flex items-center justify-center">
    <div class="flex items-center container mx-auto py-6">
      <!--  LOGO   -->
      <AHGLogo width="100px" color="white" />
      <ul class="ml-auto uppercase flex items-center gap-[5vw] text-white">
        <li>
          <NuxtLink>
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink>
            PRODUCTS
          </NuxtLink>
        </li>
        <li>
          <NuxtLink>
            SUPPORT
          </NuxtLink>
        </li>
        <li>
          <NuxtLink>
            SERVICE
          </NuxtLink>
        </li>
        <li>
          <NuxtLink>
            ABOUT US
          </NuxtLink>
        </li>
        <li>
          <NuxtLink>
            GET IN TOUCH
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">

import AHGLogo from "~/components/AHGLogo.vue";
</script>

