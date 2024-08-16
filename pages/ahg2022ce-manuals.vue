<template>
  <div class="flex">
    <div v-if=showSideBar class="bg fixed bg-black/50 top-0 z-10 left-0 w-full h-full" @click="showSideBar = false"></div>
    <div class="p-3 sidebar z-30 bg-white h-full "
    :class="{'shadow-lg':isMobile}"
    :style="{'display':isMobile && showSideBar==false?'none':'block'}">
      <div class="flex gap-2 items-center">
        <svg v-if="isMobile" @click="showSideBar = !showSideBar" width="37" height="36" viewBox="0 0 37 36" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M7.7085 26.9857H29.2918M7.7085 9.01428H29.2918M7.7085 18H29.2918" stroke="black" stroke-width="1.5"
            stroke-linecap="round"></path>
        </svg>
        <h2 class="font-bold">Table of content</h2>
      </div>
      <ul class="ml-3 mt-4">
        <li class="cursor-pointer mb-2" @click="page = 4">1. Understanding Your Testing Tools</li>
        <li class="cursor-pointer  mb-2" @click="page = 8">2. Setting Up Your System</li>
        <li class="cursor-pointer  mb-2" @click="page = 12">3. Taking a Test </li>
        <li class="cursor-pointer  mb-2" @click="page = 23">4. Maintenance and Troubleshooting</li>
        <li class="cursor-pointer  mb-2" @click="page = 29">5. Technical Information</li>
      </ul>
    </div>
    <div @click="showSideBar = !showSideBar" class="fixed top-4 left-4 z-[1001]" v-if="isMobile && showSideBar == false">
      <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.7085 26.9857H29.2918M7.7085 9.01428H29.2918M7.7085 18H29.2918" stroke="black" stroke-width="1.5"
          stroke-linecap="round"></path>
      </svg>
    </div>
    <div class="flex-grow">
      <PDF :showPageTooltip="false" src="/files/qr-code/AHG-2022-CE-Instruction-Manual.pdf" :page="page" :pdf-width="isMobile ? '100%' : '768'"
        :row-gap="isMobile ? 4 : 8" @on-page-change="handlePageChange" />

      <div class="tool-bar z-[2] bg-white  !w-[80px]">
        <input  class="w-full" type="number" v-model="page" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PDF from "pdf-vue3";
definePageMeta({
  layout: 'empty'
});


const showSideBar = ref(false);
const isMobile = ref(false);
const page = ref(1);

const handlePageChange = (newPage: number) => {
  console.log(`new page: ${newPage}`);
  page.value = newPage;
};

const resize = () => {
  isMobile.value = window.innerWidth < 768;
};

watchEffect(() => {
  resize();
  window.addEventListener("resize", resize);
  return () => {
    window.removeEventListener("resize", resize);
  };
});
watch(page, () => {
  showSideBar.value = false;
})
</script>

<style scoped>
@media (min-width: 768px) {
  ::v-deep(.pdf-vue3-backToTopBtn) {
    right: 32px !important;
  }

}

@media screen and (max-width:768px) {
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 80%;
  }
}

.tool-bar {
  position: fixed;
  left: 16px;
  bottom: 16px;
  box-shadow: 0px 0px 2px #777;
  border-radius: 4px;
  line-height: 1em;
  padding: 8px;
}

.tool-bar>p {
  margin: 0 0 8px;
}
</style>