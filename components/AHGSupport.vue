<template>
  <!-- Need Support -->
  <div :class="['w-full md:min-h-[380px] flex items-center justify-center py-8',color === 'black' ? 'bg-blackColor text-white': 'bg-white text-blackColor']">
    <div class="container flex flex-col items-center space-y-8 mx-auto">
      <span class="text-xl">You need support?</span>
      <span class="text-small">Dedication to clients, dedication to products.</span>
      <div class="flex justify-center items-center gap-4 mt-8">
        <BaseAHGButton :color="color == 'black' ? 'white' : 'black'" px="2.5rem">
          <span>Contact Us</span>
        </BaseAHGButton>
        <BaseAHGButton :color="color == 'black' ? 'white' : 'black'" px="2.5rem">
          <span>Manuals</span>
        </BaseAHGButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  withDefaults(defineProps<{
    color:'white'|'black'
  }>(),{
    color:"white"
  })
</script>