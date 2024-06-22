<template>
  <div>
    <div class="relative w-full grid place-items-center h-[90vh]"
         style="background-image: url(/images/Support-Banner.png);background-size: cover">
      <div class="container mx-auto relative flex flex-col justify-center">
        <p class="text-[8vw] text-blackColor leading-[1]" style="text-shadow: 4px 4px 5px rgba(126,133,144,0.5)">
          You need <br>
          support?
        </p>
        <p class="text-[2.5vw] 2xl:text-[36px] mt-8">
          Easy access to your support services!
        </p>
        <p class="text-[20px] 2xl:text-[24px] mt-4">
          Explore our comprehensive resources, crafted <br>
          to cater to your needs.
        </p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 308 243.87" class="w-[200px] 2xl:w-[270px] absolute right-1/4 translate-y-5 translate-x-5">
        <path fill="white" d="M256.67,0h-51.33L0,243.87h64.17L205.33,77.01h51.33V0Z"/>
        <path fill="white" d="M123.07,192.53l43.76-51.34h38.5v-51.34h51.33v51.34h51.33v51.34h-51.33v51.34h-51.33v-51.34h-82.26Z"/>
      </svg>
    </div>
    <div class="bg-blackColor w-full text-white">
      <div class="container mx-auto py-[80px] flex flex-col items-stretch">
        <p class="text-[30px]">
          Our digital healthcare products inspire users. Experience motivation and empowerment on your wellness journey with us.
        </p>
        <p class="mt-4 text-[36px]">
          In which product category do you need support?
        </p>
        <div class="flex items-center gap-24 justify-center mt-20">
          <div class="flex flex-col space-y-5">
            <img src="~/assets/images/bloog-pressure-monitor.svg" alt="Blood Pressure Monitors" class="max-h-[160px]">
            <span>Blood Pressure Monitors</span>
          </div>
          <div class="flex flex-col space-y-5">
            <img src="~/assets/images/Blood-Glucose-Monitors.svg" alt="Blood Glucose Monitors" class="max-h-[160px]">
            <span>Blood Glucose Monitors</span>
          </div>
          <div class="flex flex-col space-y-5">
            <img src="~/assets/images/Digital-Body-Scales.svg" alt="Digital-Body-Scales" class="max-h-[160px]">
            <span>Digital Body Scales</span>
          </div>
          <div class="flex flex-col space-y-5">
            <img src="~/assets/images/Digital-Thermometers.svg" alt="Digital-Thermometers" class="max-h-[160px]">
            <span>Digital Thermometers</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-lightColor py-[100px] relative">
      <div class="container mx-auto flex flex-col items-center">
        <h2 class="text-[96px] font-medium" >
          Products Catalog
        </h2>
        <p class="text-[36px] mt-8">
          You can access our product catalogues by downloading them below.
        </p>
        <div class="flex items-center flex-wrap justify-between gap-10 mt-16 relative">
          <button class="absolute -left-6 2xl:-left-12 -translate-x-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 107" width="50px" class="text-blackColor">
              <polyline stroke="currentColor" stroke-linecap="round" fill="none" stroke-linejoin="round" stroke-width="7px" points="53.5 3.5 3.5 56.5 53.5 103.5"/>
            </svg>
          </button>
          <div class="flex-1 bg-white img-shadow rounded-[40px] p-8">
            <h4 class="text-[2vw] 2xl:text-[30px]">Blood Glucose Monitor</h4>
            <h5 class="text-[2vw] 2xl:text-[30px]">AHG-2022</h5>
            <img src="~/assets/images/ahg-2022.png" alt="ahg 2022" class="my-8 mx-auto">
            <AHGButton color="black" is-show-more class="ml-auto">
              Download
            </AHGButton>
          </div>
          <div class="flex-1 bg-white img-shadow rounded-[40px] p-8">
            <h4 class="text-[2vw] 2xl:text-[30px]">Blood Glucose Monitor</h4>
            <h5 class="text-[2vw] 2xl:text-[30px]">AHG-2285</h5>
            <img src="~/assets/images/ahg-2285.png" alt="ahg 2285" class="my-8 mx-auto">
            <AHGButton color="black" is-show-more class="ml-auto">
              Download
            </AHGButton>
          </div>
          <div class="flex-1 bg-white img-shadow rounded-[40px] p-8">
            <h4 class="text-[2vw] 2xl:text-[30px] text-nowrap">Blood Pressure Monitor</h4>
            <h5 class="text-[2vw] 2xl:text-[30px]">AHG-300</h5>
            <img src="~/assets/images/ahg-300.png" alt="ahg 300" class="my-8 mx-auto">
            <AHGButton color="black" is-show-more class="ml-auto">
              Download
            </AHGButton>
          </div>
          <button class="absolute -right-6 2xl:-right-12 translate-x-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 107" width="50px" class="text-blackColor rotate-180">
              <polyline stroke="currentColor" stroke-linecap="round" fill="none" stroke-linejoin="round" stroke-width="7px" points="53.5 3.5 3.5 56.5 53.5 103.5"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="w-full bg-blackColor min-h-[680px] flex items-center justify-center">
      <div class="flex items-center container mx-auto relative text-white">
        <div class="flex flex-col scale-90 origin-left">
          <h5 class="text-[4vw] 2xl:text-[64px]">
            AHG-2022 Diabetes Management App
          </h5>
          <span class="text-[2.2vw] 2xl:text-[36px] mt-5">
          Take control of your health with effective blood glucose management.
        </span>
          <h6 class="text-[3vw] 2xl:text-[50px] mt-12">
            SHARE YOUR HEALTH DATA WITH YOUR DOCTOR
          </h6>
          <p class="text-[24px] mt-5">
            Track and analyze your glucose levels to optimize diabetes <br>
            management. Our app empowers you to elevate your check-up <br>
            experience by easily sharing a comprehensive health journal with <br>
            your healthcare professionals
          </p>
        </div>
        <img src="~/assets/images/qrcode.png" alt="qrCode" class="absolute right-12 2xl:right-0">
      </div>
    </div>

    <!-- Download Manual -->
    <div class="w-full bg-white flex items-center justify-center">
      <div class="container flex py-[100px] flex-col items-center mx-auto">
        <h2 class="text-[96px] font-medium" >
          Instruction Manuals
        </h2>
        <p class="text-[36px] mt-8">
          You can access our product instruction manuals by downloading them below.
        </p>
        <ul class="mt-20 w-full flex flex-col space-y-5 relative">
          <li class="p-8 flex flex-col w-full rounded-[40px] bg-lightColor img-shadow">
            <h6 class="text-[50px]">Blood Glucose Monitor: AHG-2022</h6>
            <hr class="border-blackColor my-5">
            <div class="grid grid-cols-3 gap-4">
              <span class="text-[24px] self-center">Instruction Manual</span>
              <div class="col-span-2 grid grid-cols-3 2xl:grid-cols-4 gap-4">
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[EN] English</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[AE/AR] ARABIC</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[FR] FRANCE</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[PT]PORTUGUESE</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[ES/SP]SPANISH</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[KA] GEORGIAN</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[AZ] AZERI</button>
              </div>
            </div>
            <hr class="border-blackColor my-5">
          </li>
          <li class="p-8 flex flex-col w-full rounded-[40px] bg-lightColor img-shadow">
            <h6 class="text-[50px]">Blood Glucose Monitor: AHG-2022</h6>
            <hr class="border-blackColor my-5">
            <div class="grid grid-cols-3 gap-4">
              <span class="text-[24px] self-center">Instruction Manual</span>
              <div class="col-span-2 grid grid-cols-3 2xl:grid-cols-4 gap-4">
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[EN] English</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[AE/AR] ARABIC</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[FR] FRANCE</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[PT]PORTUGUESE</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[ES/SP]SPANISH</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[KA] GEORGIAN</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[AZ] AZERI</button>
              </div>
            </div>
            <hr class="border-blackColor my-5">
          </li>
          <li class="p-8 flex flex-col w-full rounded-[40px] bg-lightColor ">
            <h6 class="text-[50px]">Blood Glucose Monitor: AHG-2285</h6>
            <hr class="border-blackColor my-5">
            <div class="grid grid-cols-3 gap-4">
              <span class="text-[24px] self-center">Instruction Manual</span>
              <div class="col-span-2 grid grid-cols-3 2xl:grid-cols-4 gap-4">
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[EN] English</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[AE/AR] ARABIC</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[FR] FRANCE</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[PT]PORTUGUESE</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[ES/SP]SPANISH</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[KA] GEORGIAN</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[AZ] AZERI</button>
              </div>
            </div>
            <hr class="border-blackColor my-5">
          </li>
          <li class="p-8 flex flex-col w-full rounded-[40px] bg-lightColor img-shadow">
            <h6 class="text-[50px]">Blood Pressure Monitor: AHG-300</h6>
            <hr class="border-blackColor my-5">
            <div class="grid grid-cols-3 gap-4">
              <span class="text-[24px] self-center">Instruction Manual</span>
              <div class="col-span-2 grid grid-cols-3 2xl:grid-cols-4 gap-4">
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[EN] English</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[AE/AR] ARABIC</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[FR] FRANCE</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[PT]PORTUGUESE</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[ES/SP]SPANISH</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[KA] GEORGIAN</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[AZ] AZERI</button>
              </div>
            </div>
            <hr class="border-blackColor my-5">
          </li>
          <li class="p-8 flex flex-col w-full rounded-[40px] bg-lightColor img-shadow">
            <h6 class="text-[50px]">AHG- Blood Glucose Test Strip</h6>
            <hr class="border-blackColor my-5">
            <div class="grid grid-cols-3 gap-4">
              <span class="text-[24px] self-center">Instruction Manual</span>
              <div class="col-span-2 grid grid-cols-3 2xl:grid-cols-4 gap-4">
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[EN] English</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[AE/AR] ARABIC</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[FR] FRANCE</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[PT]PORTUGUESE</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[ES/SP]SPANISH</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[KA] GEORGIAN</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[AZ] AZERI</button>
              </div>
            </div>
            <hr class="border-blackColor my-5">
          </li>
          <li class="p-8 flex flex-col w-full rounded-[40px] bg-lightColor img-shadow">
            <h6 class="text-[50px]">AHG- Lancing Device and Lancet</h6>
            <hr class="border-blackColor my-5">
            <div class="grid grid-cols-3 gap-4">
              <span class="text-[24px] self-center">Instruction Manual</span>
              <div class="col-span-2 grid grid-cols-3 2xl:grid-cols-4 gap-4">
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[EN] English</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[AE/AR] ARABIC</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[FR] FRANCE</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[PT]PORTUGUESE</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[ES/SP]SPANISH</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[KA] GEORGIAN</button>
                <button class="bg-white w-full text-[20px] rounded-lg text-center py-4">[AZ] AZERI</button>
              </div>
            </div>
            <hr class="border-blackColor my-5">
          </li>
        </ul>
      </div>
    </div>


    <div class="w-full bg-lightColor min-h-[380px] flex items-center justify-center">
      <div class="container flex flex-col items-center mx-auto">
        <span class="text-[65px]">Didn't find what you need?</span>
        <span class="text-[28px]"> If you can't find what you're looking for, feel free to contact us for support.</span>
        <div class="flex items-center gap-4 mt-8">
          <button class="bg-blackColor text-white rounded-[8px] w-[220px] h-[55px]">
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </div>

    <AHGDistribution />

    <div class="w-full bg-lightColor min-h-[380px] flex items-center justify-center">
      <div class="container flex flex-col items-center mx-auto">
        <span class="text-[65px]">Request Repair & Warranty</span>
        <span class="text-[28px]">Please let us know if you had any issue with our devices.</span>
        <div class="flex items-center gap-4 mt-8">
          <button class="bg-blackColor text-white rounded-[8px] w-[220px] h-[55px]">
            <span>Contact Us</span>
          </button>
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