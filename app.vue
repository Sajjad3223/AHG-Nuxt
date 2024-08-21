<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">

const utilStore = useUtilStore();
await utilStore.initData();
</script>
<style></style>