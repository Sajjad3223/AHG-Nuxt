<script setup lang="ts">
const props = withDefaults(defineProps<{
  color:'white'|'black',
  isShowMore?:boolean
}>(),{
  color:'white',
  isShowMore:false
})

const emits = defineEmits(['click']);

</script>

<template>
  <button :class="['btn',`btn-${color}`]" @click="emits('click')">
    <span>Learn More</span>
    <svg id="Isolation_Mode" data-name="Isolation Mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.88 21.73" class="w-2" v-if="isShowMore">
      <polyline stroke-miterlimit="10" fill="none" stroke="currentColor" stroke-width="1" points=".35 .36 11.16 10.97 .35 21.37"/>
    </svg>
  </button>
</template>

<style scoped lang="scss">
.btn{
  @apply text-lg rounded-[8px] flex items-center gap-4 w-max px-4 py-2 ;
  .&-black{
    @apply bg-blackColor text-white;
  }
  .&-white{
    @apply bg-white text-blackColor;
  }
}
</style>