<script setup lang="ts">
const props = withDefaults(defineProps<{
  color:'white'|'black',
  isShowMore?:boolean,
  width?:string,
  px?:string,
  py?:string
}>(),{
  color:'white',
  isShowMore:false,
  width:'max-content',
  px:'16px',
  py:'8px'
})

const emits = defineEmits(['click']);

</script>

<template>
  <button :class="['btn',`btn-${color}`]" @click="emits('click')" :style="{width:props.width,padding:`${py} ${px}`}">
    <slot></slot>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.88 21.73" class="w-2" v-if="isShowMore">
      <polyline stroke-miterlimit="10" fill="none" stroke="currentColor" stroke-width="1" points=".35 .36 11.16 10.97 .35 21.37"/>
    </svg>
  </button>
</template>

<style scoped>
.btn{
  @apply text-sm md:text-lg rounded-[8px] flex items-center gap-4 justify-center px-4 py-2 ;
}
.btn-black{
  @apply bg-blackColor text-white;
}
.btn-white{
  @apply bg-white text-blackColor;
}
</style>