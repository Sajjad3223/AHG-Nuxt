<template>
  <!-- Need Support -->
  <div
    :class="['w-full md:min-h-[380px] flex items-center justify-center pt-8 pb-8 md:pb-0', color === 'black' ? 'bg-blackColor text-white' : 'bg-white text-blackColor']">
    <div class="container flex flex-col items-center mx-auto">
      <span class="titr font-bold leading-8" style="letter-spacing: -.5px;">You need support?</span>
      <span class="sub mb-5 mt-2 md:mt-7 text-center">Dedication to clients, dedication to products.</span>
      <div class="flex justify-center items-center gap-4 my-2 !mb-0">
        <BaseAHGButton to="/contact-us" :color="color == 'black' ? 'white' : 'black'" px="2.5rem"
          class="md:!w-[200px] flex-grow text-center">
          Contact us
        </BaseAHGButton>
        <BaseAHGButton to="/support" :color="color == 'black' ? 'white' : 'black'" px="2.5rem" v-if="manualButton"
          class="md:!w-[200px] flex-grow text-center">
          Manuals
        </BaseAHGButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  color: 'white' | 'black',
  manualButton?: boolean
}>(), {
  color: "white",
  manualButton: false
})
</script>

<style scoped>
span.titr {
  @apply text-[25px] sm:text-[36px] md:text-[48px] lg:text-[54px] xl:text-[65px];
}

span.sub {
  @apply text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px];
}
</style>