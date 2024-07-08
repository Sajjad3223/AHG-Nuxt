<template>
  <!-- Need Support -->
  <div :class="['w-full md:min-h-[380px] flex items-center justify-center py-8',color === 'black' ? 'bg-blackColor text-white': 'bg-white text-blackColor']">
    <div class="container flex flex-col items-center mx-auto">
      <span class="titr">You need support?</span>
      <span class="sub my-2" >Dedication to clients, dedication to products.</span>
      <div class="flex justify-center items-center gap-4 my-2">
        <BaseAHGButton :color="color == 'black' ? 'white' : 'black'" px="2.5rem">
          <span >Contact Us</span>
        </BaseAHGButton>
        <BaseAHGButton :color="color == 'black' ? 'white' : 'black'" px="2.5rem" v-if="manualButton">
          <span >Manuals</span>
        </BaseAHGButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  withDefaults(defineProps<{
    color:'white'|'black',
    manualButton?:boolean
  }>(),{
    color:"white",
    manualButton:false
  })
</script>

<style scoped>
span.titr{
  @apply text-[20px] sm:text-[36px] md:text-[48px] lg:text-[54px] xl:text-[65px];
}
span.sub{
  @apply text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px];
}
</style>