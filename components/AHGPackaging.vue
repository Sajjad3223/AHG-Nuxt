<template>
  <div :class="['packaging', `packaging-${color}`]">
    <div class="container mx-auto flex items-center gap-5">
      <div class="flex flex-col lg:w-[50%] w-[55%] space-y-12">
        <h2 class="titr z-10 leading-[1.2]" style="text-shadow: 2px 2px 5px #92A1A8">
          Affordable <br />
          luxury <br>
          packaging
        </h2>
        <p class="sub z-10 mt-4 w-full ">
          American Health Gate's exclusive packing, setting<br />
          a new standard a unique blend of luxury and quality.
        </p>
      </div>
      <div class="absolute right-0 top-1/2 -translate-y-1/2" v-if="!isBpm">
        <img src="../assets/images/affordable-packaging.png" alt="Affordable Packaging" class="max-w-[55vw]">
        <span class="absolute -top-10 md:top-0 right-5 md:right-1/4">
          Lifetime <br>
          International Warranty
        </span>
      </div>
      <img src="../assets/images/affordable-packaging2.png" alt="Affordable Packaging" class="max-w-[40vw] max-h-[80%] "
        v-else>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  color?: 'white' | 'light',
  isBpm?: boolean,
}>(), {
  color: 'light',
  isBpm: false
})
</script>

<style scoped>
.packaging {
  @apply py-[5vw] relative;
}

.packaging-light {
  @apply bg-lightColor;
}

.packaging-white {
  @apply bg-white;
}

h2.titr {
  @apply text-[8vw] sm:text-[52px] md:text-[58px] lg:text-[80px] xl:text-[100px] 2xl:text-[115px];
}

p.sub {
  @apply text-[10px] sm:text-[18px] md:text-[16px] xl:text-[25px];
}

span {
  @apply text-[12px] sm:text-[18px] md:text-[20px] lg:text-[28px];
}
</style>