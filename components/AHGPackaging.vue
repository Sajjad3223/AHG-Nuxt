<template>
  <div :class="['packaging',`packaging-${color}`]">
    <div class="container mx-auto flex flex-col">
      <h2 class="text-2xl z-10 leading-[1.2]" style="text-shadow: 2px 2px 5px #92A1A8">
        Affordable <br>
        luxury <br>
        packaging
      </h2>
      <p class="text-base z-10 mt-4 max-w-[55%] md:max-w-[60%]">
        American Health Gate's exclusive packing, setting <br>
        a new standard a unique blend of luxury and quality.
      </p>
      <div class="absolute right-0 top-1/2 -translate-y-1/2" v-if="!isBpm">
        <img src="../assets/images/affordable-packaging.png" alt="Affordable Packaging" class="max-w-[55vw]">
        <span class="absolute text-base -top-10 md:top-0 right-5 md:right-1/4">
            Lifetime <br>
            International Warranty
          </span>
      </div>
      <img src="../assets/images/affordable-packaging2.png" alt="Affordable Packaging" class="max-w-[40vw] top-0 lg:top-16 absolute right-0" v-else>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  color?:'white'|'light',
  isBpm?:boolean,
}>(),{
  color:'light',
  isBpm:false
})
</script>

<style scoped>
.packaging{
  @apply py-[5vw] relative;
}
.packaging-light{
  @apply bg-lightColor;
}
.packaging-white{
  @apply bg-white;
}
</style>