<template>
  <div>
    <!-- Header -->
    <the-header />

    <!-- Page Content -->
    <main class="overflow-x-hidden">
      <slot></slot>
    </main>

    <the-footer />
  </div>
</template>

<script setup lang="ts">

</script>

<style>
*{
  font-family: "Inter Light",sans-serif;
}
.container{
  max-width: 1400px;
}
.text-small{
  font-size: clamp(12px,1.042vw,24px) !important;
  line-height: normal;
}
.text-sm{
  font-size: clamp(12px,1.563vw,28px) !important;
  line-height: normal;
}
.text-base{
  font-size: clamp(14px,1.875vw,36px) !important;
  line-height: normal;
}
.text-lg{
  font-size: clamp(16px,2.604vw,50px) !important;
  line-height: normal;
}
.text-xl{
  font-size: clamp(30px,3.333vw,64px) !important;
}
.text-2xl{
  font-size: clamp(35px,5.938vw,114px) !important;
}
.text-3xl{
  font-size: clamp(40px,6.667vw,128px) !important;
}
</style>