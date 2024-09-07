<template>
  <div class="w-full bg-blackColor lg:min-h-[500px] flex items-center justify-center py-8 md:py-16">
    <div class="container md:w-[80%] min-[1920px]:w-[67.5%]  flex flex-col space-y-5 md:space-y-8">
      <p class="text-2xl font-semibold leading-[1.2] md:leading-[1] text-white whitespace-pre-wrap">
        {{ title }}
      </p>
      <span class="text-mob text-base md:!mb-4 font-light text-white whitespace-pre-wrap">{{ description
        }}</span>
      <BaseAHGButton :to="buttonLink" color="white" is-show-more class=" md:!text-[19px]">
        {{ buttonText }}
      </BaseAHGButton>
    </div>
  </div>
</template>
<script setup lang="ts">
withDefaults(defineProps<{
  title?: string,
  description?: string,
  buttonText?: string,
  buttonLink?: string
}>(), {
  color: "white",
  manualButton: false,
  title: 'Join our\r\ndistribution network',
  description: 'Partner with us to be a force for positive change in the world.',
  buttonLink: '/distributor',
  buttonText: 'Explore All'
})
</script>