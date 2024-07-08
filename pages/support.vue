<template>
  <div>
    <div class="relative w-full flex items-end py-5 md:p-0 md:items-center h-[60vh] lg:h-[90vh]"
         style="background-image: url(/images/Support-Banner.jpg);background-size: cover;background-position: 80% 50%">
      <div class="container mx-auto relative flex flex-col justify-center">
        <p class="text-2xl text-blackColor leading-[1] md:max-w-[50%]" style="text-shadow: 2px 2px 5px rgba(255,255,255,0.4)">
          You need
          support?
        </p>
        <p class="text-base mt-8">
          Easy access to your support services!
        </p>
        <p class="text-small mt-4 md:max-w-[50%]">
          Explore our comprehensive resources, crafted
          to cater to your needs.
        </p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 308 243.87" class="max-w-[150px] min-w-[150px] w-[20vw] lg:max-w-[270px] absolute right-1/3 md:right-1/4 top-1/2 -translate-y-[60%] translate-x-5">
        <path fill="white" d="M256.67,0h-51.33L0,243.87h64.17L205.33,77.01h51.33V0Z"/>
        <path fill="white" d="M123.07,192.53l43.76-51.34h38.5v-51.34h51.33v51.34h51.33v51.34h-51.33v51.34h-51.33v-51.34h-82.26Z"/>
      </svg>
    </div>
    <div class="bg-blackColor w-full text-white">
      <div class="container mx-auto py-[80px] flex flex-col items-stretch">
        <p class="text-sm">
          Our digital healthcare products inspire users. Experience motivation and empowerment on your wellness journey with us.
        </p>
        <p class="mt-4 text-base">
          In which product category do you need support?
        </p>
        <div class="flex items-center flex-wrap gap-12 lg:gap-24 justify-center mt-20">
          <div class="flex flex-col space-y-5">
            <img src="~/assets/images/bloog-pressure-monitor.svg" alt="Blood Pressure Monitors" class="max-h-[120px] lg:max-h-[160px]">
            <span class="text-small">Blood Pressure Monitors</span>
          </div>
          <div class="flex flex-col space-y-5">
            <img src="~/assets/images/Blood-Glucose-Monitors.svg" alt="Blood Glucose Monitors" class="max-h-[120px] lg:max-h-[160px]">
            <span class="text-small">Blood Glucose Monitors</span>
          </div>
          <div class="flex flex-col space-y-5">
            <img src="~/assets/images/Digital-Body-Scales.svg" alt="Digital-Body-Scales" class="max-h-[120px] lg:max-h-[160px]">
            <span class="text-small">Digital Body Scales</span>
          </div>
          <div class="flex flex-col space-y-5">
            <img src="~/assets/images/Digital-Thermometers.svg" alt="Digital-Thermometers" class="max-h-[120px] lg:max-h-[160px]">
            <span class="text-small">Digital Thermometers</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-lightColor py-[100px] relative">
      <div class="container mx-auto flex flex-col items-center">
        <h2 class="text-2xl font-medium" >
          Products Catalog
        </h2>
        <p class="text-base mt-8">
          You can access our product catalogues by downloading them below.
        </p>
        <div class="flex items-stretch flex-wrap justify-between gap-10 mt-16 relative">
          <button class="absolute hidden md:block -left-6 2xl:-left-12 -translate-x-full top-1/2 -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 107" width="50px" class="text-blackColor">
              <polyline stroke="currentColor" stroke-linecap="round" fill="none" stroke-linejoin="round" stroke-width="7px" points="53.5 3.5 3.5 56.5 53.5 103.5"/>
            </svg>
          </button>
          <div class="flex-1 bg-white img-shadow rounded-[40px] p-8">
            <h4 class="text-base">Blood Glucose Monitor</h4>
            <h5 class="text-base">AHG-2022</h5>
            <img src="~/assets/images/ahg-2022.png" alt="ahg 2022" class="my-8 h-[260px] mx-auto">
            <AHGButton color="black" is-show-more class="ml-auto mt-auto">
              Download
            </AHGButton>
          </div>
          <div class="flex-1 bg-white img-shadow rounded-[40px] p-8">
            <h4 class="text-base">Blood Glucose Monitor</h4>
            <h5 class="text-base">AHG-2285</h5>
            <img src="~/assets/images/ahg-2285.png" alt="ahg 2285" class="my-8 h-[260px] mx-auto">
            <AHGButton color="black" is-show-more class="ml-auto mt-auto">
              Download
            </AHGButton>
          </div>
          <div class="flex-1 bg-white flex flex-col img-shadow rounded-[40px] p-8">
            <h4 class="text-base text-nowrap">Blood Pressure Monitor</h4>
            <h5 class="text-base">AHG-300</h5>
            <img src="~/assets/images/ahg-300.png" alt="ahg 300" class="m-auto h-[220px] w-fit">
            <AHGButton color="black" is-show-more class="ml-auto">
              Download
            </AHGButton>
          </div>
          <button class="absolute hidden md:block -right-6 2xl:-right-12 translate-x-full top-1/2 -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 107" width="50px" class="text-blackColor rotate-180">
              <polyline stroke="currentColor" stroke-linecap="round" fill="none" stroke-linejoin="round" stroke-width="7px" points="53.5 3.5 3.5 56.5 53.5 103.5"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="w-full bg-blackColor min-h-[680px] flex items-center justify-center">
      <div class="flex flex-col-reverse gap-5 lg:flex-row items-center container mx-auto mt-12 lg:mt-0 relative text-white">
        <div class="flex flex-col scale-90 origin-left">
          <h5 class="text-xl">
            AHG-2022 Diabetes Management App
          </h5>
          <span class="text-base mt-5">
          Take control of your health with effective blood glucose management.
        </span>
          <h6 class="text-lg mt-12">
            SHARE YOUR HEALTH DATA WITH YOUR DOCTOR
          </h6>
          <p class="text-sm mt-5 lg:w-2/3 xl:w-auto">
            Track and analyze your glucose levels to optimize diabetes <br>
            management. Our app empowers you to elevate your check-up <br>
            experience by easily sharing a comprehensive health journal with <br>
            your healthcare professionals
          </p>
        </div>
        <img src="~/assets/images/qrcode.png" alt="qrCode" class="lg:absolute right-12 2xl:right-0">
      </div>
    </div>

    <!-- Download Manual -->
    <div class="w-full bg-white flex items-center justify-center">
      <div class="container flex py-[100px] flex-col items-center mx-auto">
        <h2 class="text-2xl font-medium" >
          Instruction Manuals
        </h2>
        <p class="text-base mt-8">
          You can access our product instruction manuals by downloading them below.
        </p>
        <ul class="mt-20 w-full flex flex-col space-y-5 relative">
          <li class="p-8 flex flex-col w-full rounded-[40px] bg-lightColor img-shadow">
            <h6 class="text-lg">Blood Glucose Monitor: AHG-2022</h6>
            <hr class="border-blackColor my-5">
            <div class="grid grid-cols-3 gap-4">
              <span class="col-span-full lg:col-span-1 text-sm self-center">Instruction Manual</span>
              <div class="col-span-full lg:col-span-2 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[EN] English</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[AE/AR] ARABIC</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[FR] FRANCE</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[PT]PORTUGUESE</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[ES/SP]SPANISH</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[KA] GEORGIAN</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[AZ] AZERI</button>
              </div>
            </div>
            <hr class="hidden lg:block border-blackColor my-5">
          </li>
          <li class="p-8 flex flex-col w-full rounded-[40px] bg-lightColor img-shadow">
            <h6 class="text-lg">Blood Glucose Monitor: AHG-2022</h6>
            <hr class="border-blackColor my-5">
            <div class="grid grid-cols-3 gap-4">
              <span class="col-span-full lg:col-span-1 text-sm self-center">Instruction Manual</span>
              <div class="col-span-full lg:col-span-2 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[EN] English</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[AE/AR] ARABIC</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[FR] FRANCE</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[PT]PORTUGUESE</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[ES/SP]SPANISH</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[KA] GEORGIAN</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[AZ] AZERI</button>
              </div>
            </div>
            <hr class="hidden lg:block border-blackColor my-5">
          </li>
          <li class="p-8 flex flex-col w-full rounded-[40px] bg-lightColor ">
            <h6 class="text-lg">Blood Glucose Monitor: AHG-2285</h6>
            <hr class="border-blackColor my-5">
            <div class="grid grid-cols-3 gap-4">
              <span class="col-span-full lg:col-span-1 text-sm self-center">Instruction Manual</span>
              <div class="col-span-full lg:col-span-2 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[EN] English</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[AE/AR] ARABIC</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[FR] FRANCE</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[PT]PORTUGUESE</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[ES/SP]SPANISH</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[KA] GEORGIAN</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[AZ] AZERI</button>
              </div>
            </div>
            <hr class="hidden lg:block border-blackColor my-5">
          </li>
          <li class="p-8 flex flex-col w-full rounded-[40px] bg-lightColor img-shadow">
            <h6 class="text-lg">Blood Pressure Monitor: AHG-300</h6>
            <hr class="border-blackColor my-5">
            <div class="grid grid-cols-3 gap-4">
              <span class="col-span-full lg:col-span-1 text-sm self-center">Instruction Manual</span>
              <div class="col-span-full lg:col-span-2 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[EN] English</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[AE/AR] ARABIC</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[FR] FRANCE</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[PT]PORTUGUESE</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[ES/SP]SPANISH</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[KA] GEORGIAN</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[AZ] AZERI</button>
              </div>
            </div>
            <hr class="hidden lg:block border-blackColor my-5">
          </li>
          <li class="p-8 flex flex-col w-full rounded-[40px] bg-lightColor img-shadow">
            <h6 class="text-lg">AHG- Blood Glucose Test Strip</h6>
            <hr class="border-blackColor my-5">
            <div class="grid grid-cols-3 gap-4">
              <span class="col-span-full lg:col-span-1 text-sm self-center">Instruction Manual</span>
              <div class="col-span-full lg:col-span-2 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[EN] English</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[AE/AR] ARABIC</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[FR] FRANCE</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[PT]PORTUGUESE</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[ES/SP]SPANISH</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[KA] GEORGIAN</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[AZ] AZERI</button>
              </div>
            </div>
            <hr class="hidden lg:block border-blackColor my-5">
          </li>
          <li class="p-8 flex flex-col w-full rounded-[40px] bg-lightColor img-shadow">
            <h6 class="text-lg">AHG- Lancing Device and Lancet</h6>
            <hr class="border-blackColor my-5">
            <div class="grid grid-cols-3 gap-4">
              <span class="col-span-full lg:col-span-1 text-sm self-center">Instruction Manual</span>
              <div class="col-span-full lg:col-span-2 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[EN] English</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[AE/AR] ARABIC</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[FR] FRANCE</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[PT]PORTUGUESE</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[ES/SP]SPANISH</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[KA] GEORGIAN</button>
                <button class="bg-white w-full text-xs rounded-lg text-center py-4">[AZ] AZERI</button>
              </div>
            </div>
            <hr class="hidden lg:block border-blackColor my-5">
          </li>
        </ul>
      </div>
    </div>


    <div class="w-full bg-lightColor min-h-[380px] flex items-center justify-center">
      <div class="container flex flex-col space-y-5 items-center mx-auto">
        <span class="text-xl">Didn't find what you need?</span>
        <span class="text-base"> If you can't find what you're looking for, feel free to contact us for support.</span>
        <div class="flex items-center gap-4 mt-8">
          <BaseAHGButton color="black">
            Contact Us
          </BaseAHGButton>
        </div>
      </div>
    </div>

    <AHGDistribution />

    <div class="w-full bg-lightColor min-h-[380px] flex items-center justify-center">
      <div class="container flex flex-col space-y-5 items-center mx-auto">
        <span class="text-xl text-center">Request Repair & Warranty</span>
        <span class="text-base">Please let us know if you had any issue with our devices.</span>
        <div class="flex items-center gap-4 mt-8">
          <BaseAHGButton color="black">
            Contact Us
          </BaseAHGButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import AHGButton from "~/components/base/AHGButton.vue";
</script>

<style scoped>
.img-shadow{
 filter:drop-shadow(2px 2px 5px rgba(0,0,0,0.5));
}
</style>