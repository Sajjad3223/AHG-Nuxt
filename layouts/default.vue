<template>
  <div>
    <!-- Header -->
    <the-header />

    <!-- Page Content -->
    <main>
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
</style>