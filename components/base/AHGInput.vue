<script setup lang="ts">
withDefaults(defineProps<{
  label:string,
  color:'white'|'black',
  name:string,
  modelValue:string,
  multiLine?:boolean
}>(),{
  color:"black",
  multiLine:false
})
</script>

<template>
  <div class="flex flex-col gap-4 text-xs">
    <label :for="name">{{ label }}</label>
    <input type="text" :name="name" :id="name" :class="['AhgInput',`AhgInput-${color}`]" :placeholder="`Enter Your ${label}`" v-if="!multiLine">
    <textarea :name="name" :id="name" :placeholder="`Enter Your ${label}`" rows="5" :class="['AhgInput',`AhgInput-${color}`]" v-else></textarea>
  </div>
</template>

<style scoped>
label,.AhgInput{
  @apply text-tiny;
}
.AhgInput{
  @apply p-4 rounded-md border w-full bg-transparent focus:ring-0 outline-none placeholder-opacity-100 placeholder-white;
}
.AhgInput-white{
  @apply border-blackColor text-blackColor;
}
.AhgInput-black{
  @apply border-white text-white;
}
</style>