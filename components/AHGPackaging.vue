<template>
  <div :class="['packaging', `packaging-${color}`]">
    <div class="container mx-auto flex items-center gap-5">
      <div class="flex flex-col w-full lg:w-[60%]  space-y-12">
        <h2 class="titr font-semibold z-10 leading-[1.2]" style="text-shadow: 2px 2px 5px #92A1A8">
          Luxury <br>
          packaging
        </h2>
        <p class="text-[20px] md:text-[30px] z-10 !mt-5 w-full leading-8">
          American Health Gate's exclusive packing, setting<br class="hidden md:block" />
          a new standard a unique blend of luxury and quality.
        </p>
      </div>
      <div class="absolute hidden md:block right-0 top-1/2 -translate-y-1/2" v-if="!isBpm">
        <img src="../assets/images/affordable-packaging.png" alt="Affordable Packaging" class="max-w-[50vw]">
        <span class="absolute -top-1 md:top-[8%] right-4 md:right-[12vw] leading-4 md:leading-8">
          <b>Lifetime</b> <br>
          International Warranty
        </span>
      </div>
      <div class="absolute hidden md:block  right-0 top-1/2 -translate-y-1/2" v-else>
        <img src="../assets/images/affordable-packaging2.png" alt="Affordable Packaging" class="w-[85%] max-w-[50vw]">
      </div>
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
  @apply py-[8vw] relative;
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