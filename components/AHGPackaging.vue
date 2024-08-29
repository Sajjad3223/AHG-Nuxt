<template>
  <div :class="['packaging', `packaging-${color}`]">
    <div class="container mx-auto flex items-center gap-5">
      <div class="flex flex-col w-full lg:w-[60%]  space-y-12">
        <h2 class="titr font-semibold z-10 leading-[1.2] whitespace-pre-wrap">
          {{ title }}
        </h2>
        <p class="text-mob md:text-[30px] z-10 !mt-5 w-full md:leading-8 whitespace-pre-wrap">
          {{ description }}
        </p>
      </div>
      <div class="absolute  block right-0 top-1/2 -translate-y-1/2" v-if="!isBpm">
        <img :src="image" :alt="title" class="max-w-[50vw]">
        <span class="absolute hidden -top-1 md:top-[8%] right-4 md:right-[12vw] leading-4 md:leading-8">
          <b>{{ shortDescription.split('\r\n')[0] ?? shortDescription }}</b> <br>
          {{ shortDescription.split('\r\n')[1] ?? '' }}
        </span>
      </div>
      <div class="absolute  block  right-[5%] top-1/2 -translate-y-1/2" v-else>
        <img :src="image" loading="lazy" :alt="title" class="w-[500px] max-w-[50vw]">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  color?: 'white' | 'light',
  isBpm?: boolean,
  title?: string,
  description?: string,
  shortDescription?: string,
  image?: string
}>(), {
  color: 'light',
  isBpm: false,
  title: 'Luxury\r\npackaging',
  description: "American Health Gate's exclusive packing, setting\r\na new standard a unique blend of luxury and quality.",
  shortDescription: 'Lifetime\r\nInternational Warranty',
  image: '/images/affordable-packaging2.png?v=2'
})
</script>

<style scoped lang="scss">
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

@media screen and (max-width:768px) {
  .absolute {
    position: unset !important;
    transform: unset !important;
  }
  .container.flex{
    flex-direction: column-reverse;
  }
}
</style>