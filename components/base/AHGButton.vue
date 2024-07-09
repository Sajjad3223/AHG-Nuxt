<script setup lang="ts">
const props = withDefaults(defineProps<{
  color: 'white' | 'black',
  isShowMore?: boolean,
  width?: string,
  textSize?: string,
  px?: string,
  py?: string,
  to?: string | null
}>(), {
  color: 'white',
  isShowMore: false,
  width: 'max-content',
  textSize: undefined,
  px: '16px',
  py: '10px',
  to: null
})

const emits = defineEmits(['click']);

</script>

<template>
  <button v-if="to == null" :class="['btn', `btn-${color}`]" @click="emits('click')"
    :style="{ width: props.width, fontSize: textSize, padding: `${py} ${px}` }">
    <slot></slot>
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20" viewBox="0 0 11.88 21.73" v-if="isShowMore">
      <polyline stroke-miterlimit="10" fill="none" stroke="currentColor" stroke-width="1.5"
        points=".35 .36 11.16 10.97 .35 21.37" />
    </svg>
  </button>
  <nuxt-link :to="to" v-else :class="['btn', `btn-${color}`]"
    :style="{ width: props.width, fontSize: textSize, padding: `${py} ${px}` }">
    <slot></slot>
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20" viewBox="0 0 11.88 21.73" v-if="isShowMore">
      <polyline stroke-miterlimit="10" fill="none" stroke="currentColor" stroke-width="1.5"
        points=".35 .36 11.16 10.97 .35 21.37" />
    </svg>
  </nuxt-link>
</template>

<style scoped>
.btn {
  @apply text-xs md:text-lg rounded-[8px] flex items-center gap-4 justify-center px-4 py-2 transition-all hover:opacity-75;
}

.btn-black {
  @apply bg-blackColor text-white;
}

.btn-white {
  @apply bg-white text-blackColor;
}
</style>