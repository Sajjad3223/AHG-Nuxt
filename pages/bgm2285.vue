<template>
  <div>
    <div class=" w-full grid place-items-center py-[150px] bg-blackColor text-white">
      <div class="flex flex-col container mx-auto">
        <div class="relative flex flex-col justify-center">
          <h1 class="text-3xl leading-[1]">
            BLOOD GLUCOSE <br>
            MONITOR
          </h1>
          <div class="flex items-center gap-2 mt-5">
            <AHGLogo width="10vw" color="white"/>
            <strong class="text-xl">-</strong>
            <span class="text-lg">2285</span>
          </div>
          <div class="flex items-center my-10 gap-10 lg:w-3/5">
            <div class="flex flex-col space-y-4 text-justify text-xs leading-tight">
              <p>
                Monitor your blood glucose effortlessly with the AHG-2285 – no coding needed, ensuring a quicker and easier testing process. With just 0.5ul of blood, you'll receive fast results in just 5 seconds, with a large LCD display. Record up to 1000 readings for a comprehensive half-year glucose history. The extended HCT range, from 20% to 70%, caters to a diverse demographic, making it suitable for the entire family.
              </p>
              <p>
                The AHG 8 Electrode Test Strip guarantees unparalleled accuracy by eliminating various interferences, providing stable and precise readings. The AHG-2285 is not just a device; it's a comprehensive solution a commitment to ensuring a healthier tomorrow for you and the ones you hold dear.
              </p>
            </div>
          </div>
          <div class="flex items-end justify-center gap-4 w-2/5 relative lg:absolute -right-12 bottom-0 mt-10 lg:m-0">
            <img src="~/assets/images/bgmPage/2022/img.png" class="img-shadow max-h-[100px] lg:max-h-[150px]"/>
            <img src="~/assets/images/bgmPage/2285/img.png" class="img-shadow max-h-[200px] lg:max-h-[300px]"/>
            <img src="~/assets/images/bgmPage/2022/img_7.png" class="img-shadow max-h-[200px] lg:max-h-[300px]"/>
          </div>
        </div>
        <AHGButton color="white" width="200px" is-show-more>
          Join Us
        </AHGButton>
      </div>
    </div>

    <div class="bg-white w-full">
      <div class="container mx-auto py-[80px] flex flex-col items-stretch">
        <div class="flex flex-col space-y-5 my-14">
          <div class="flex items-center gap-1">
            <AHGLogo color="black"/>
            <span class="text-xl">-2285</span>
          </div>
          <span class="text-[36px]">Blood Glucose Monitor</span>
          <span class="text-tiny">
            Revolutionize your approach to diabetes care with the AHG-2285 Blood Glucose Meter. This cutting-edge device effortlessly blends precision, convenience, and innovation, promising a health monitoring experience that transcends expectations.
          </span>
        </div>

        <div class="grid md:grid-cols-2 gap-5">
          <div
              class="flex items-center justify-between gap-12 w-full rounded-[20px] p-5 relative bg-lightColor drop-shadow-lg text-blackColor">
            <div class="flex flex-col space-y-4  flex-1">
              <span class="text-[24px]">Simple</span>
              <span class="text-tiny">
                No coding, no connection required, making
                the testing process quicker and easier
              </span>
            </div>
            <img src="~/assets/images/bgmPage/2285/img_1.png" alt="">
          </div>
          <div
              class="flex items-center justify-between gap-12 w-full rounded-[20px] p-5 relative bg-lightColor drop-shadow-lg text-blackColor">
            <div class="flex flex-col space-y-4  flex-1">
              <span class="text-[24px]">Test strip ejector</span>
              <span class="text-tiny">
                Strip ejector helps in maintaining hygiene and reducing
                contamination risks by avoid to touch used strips
              </span>
            </div>
            <img src="~/assets/images/bgmPage/2285/img_2.png" alt="">
          </div>
          <div
              class="flex items-center justify-between gap-12 w-full rounded-[20px] p-5 relative bg-lightColor drop-shadow-lg text-blackColor">
            <div class="flex flex-col space-y flex-1">
              <span class="text-[24px]">Wide HCT range</span>
              <span class="text-tiny">20-70%, Suitable for everyone</span>
            </div>
            <img src="~/assets/images/bgmPage/2285/img_3.png" alt="">
          </div>
          <div
              class="flex items-center justify-between gap-12 w-full rounded-[20px] p-5 relative bg-lightColor drop-shadow-lg text-blackColor">
            <div class="flex flex-col space-y-4  flex-1">
              <span class="text-[24px]">Large Memorie</span>
              <span class="text-tiny">
                Large memorie for the comprehensive data
                tracking and analysis
              </span>
            </div>
            <img src="~/assets/images/bgmPage/2285/img_4.png" alt="">
          </div>
        </div>

      </div>
    </div>
    <div class="bg-white pb-[50px] relative">
      <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-20 justify-between">
        <div class="flex flex-col space-y-10 flex-1">
          <h6 class="text-lg font-medium">
            Meter Specifications
          </h6>
          <div class="grid grid-cols-2 gap-5 lg:gap-10 w-full">
            <div class="flex flex-col flex-wrap gap-5">
              <div class="flex flex-col gap-2">
                <span class="text-base">Sample </span>
                <span class="text-tiny">Fresh capillary whole blood</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Enzyme </span>
                <span class="text-tiny">GOD/Glucose Oxidase</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Test Time </span>
                <span class="text-tiny">5 seconds </span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Measurement Range </span>
                <span class="text-tiny">10 to 600 mg/dL  </span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Automatic Shutoff </span>
                <span class="text-tiny">2 minutes after the last action </span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Battery </span>
                <span class="text-tiny">Two AAA LR03 1.5V batteries</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Operating Temperature </span>
                <span class="text-tiny">41-113°F / 5-45°C</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Operating Relative humidity </span>
                <span class="text-tiny">10-90% (non-condensing)</span>
              </div>
            </div>
            <div class="flex flex-col flex-wrap gap-5">
              <div class="flex flex-col gap-2">
                <span class="text-base">Test Measured </span>
                <span class="text-tiny">Glucose in fingertip capillary whole blood</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Sample Volume</span>
                <span class="text-tiny">About 0.5 μL</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Memory</span>
                <span class="text-tiny">Up to 1000 records with date and time</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Test averaging</span>
                <span class="text-tiny">
                  7, 14, and 30-day average
                </span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Display Size</span>
                <span class="text-tiny">37mm x 47mm</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Dimensions</span>
                <span class="text-tiny">93.5mm x 60.5mm x 20mm</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Weight</span>
                <span class="text-tiny">86.2g(including battery)</span>
              </div>
            </div>
          </div>
        </div>
        <img src="~/assets/images/bgmPage/2285/img_5.png" alt="specifications" class="w-1/3 max-w-[450px] img-shadow">
      </div>
    </div>

    <div class="bg-lightColor py-[100px] relative">
      <div class="container mx-auto flex flex-col justify-between">
        <div class="flex flex-col flex-1">
          <h6 class="text-tiny">
            The technological leadership of the AHG-2022 lies in its test strip – a carbon silver structure with
            8-electrode on a single layer for enhancing the accuracy and reliability of the blood glucose readings.
          </h6>

          <div class="mt-10 flex flex-col space-y-8">
            <span class="text-[36px]">
              Detailed functions of those electrodes include:
            </span>
            <div class="grid md:grid-cols-2 gap-4 lg:gap-x-20 xl:w-5/6">
              <div class="flex flex-col border-b border-blackColor pb-5 space-y-4">
                <span class="text-base">
                  Code Calibration (Auto-Coding):
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-xs">
                    Detects and eliminates coding errors.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-blackColor pb-5 space-y-4">
                <span class="text-base">
                  Check Sample Sufficiency:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-xs">
                    Ensures correct blood amount for accurate readings.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-blackColor pb-5 space-y-4">
                <span class="text-base">
                  Eliminate Hematocrit Interference:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-xs">
                    Corrects interference within ±10%.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-blackColor pb-5 space-y-4">
                <span class="text-base">
                  Recognize Control Solution:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-xs">
                    Identifies blood samples for precise testing.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-blackColor pb-5 space-y-4">
                <span class="text-base">
                  Eliminate Temperature Interference:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-xs">
                    Compensates within ±5% for temperature effects.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-blackColor pb-5 space-y-4">
                <span class="text-base">
                  Check Test Strip Damage:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-xs">
                    Prompts use of a new strip if damage is detected.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-blackColor md:border-none pb-5 space-y-4">
                <span class="text-base">
                  Check Humidity Exposure:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-xs">
                    Prevents erratic results due to humidity.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-blackColor md:border-none pb-5 space-y-4">
                <span class="text-base">
                  Check Test Strip Compatibility:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-xs">
                    Checks strip-meter compatibility for accurate results.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class=" flex flex-col-reverse lg:flex-row gap-5 mt-20">
            <div class="mt-10 flex-1 flex flex-col space-y-8">
              <span class="text-[36px]">
                Test Strips Specifications
              </span>
              <ul class="list-disc ml-5">
                <li class="text-xs">
                  Carbon silver structure electrode design
                </li>
                <li class="text-tiny">
                  8 electrodes technology
                </li>
                <li class="text-tiny">
                  Enzyme: GOD/Glucose Oxidase
                </li>
                <li class="text-tiny">
                  Highly accurate & precise results
                </li>
                <li class="text-tiny">
                  Eliminates temperature interference
                </li>
                <li class="text-tiny">
                  For self-testing and in-vitro diagnostic use only
                </li>
                <li class="text-tiny">
                  Storage Temperature: 2°C to 30°C / 36°F to 86°F
                </li>
                <li class="text-tiny">
                  Humidity: 10-90%
                </li>
                <li class="text-xs">
                  Open shelf life: 6 months
                </li>
              </ul>
            </div>
            <div class="flex items-center justify-center gap-5 flex-1">
              <img src="~/assets/images/bgmPage/2022/img_8.png" alt="" class="w-1/2 self-center max-w-[400px]">
              <img src="~/assets/images/bgmPage/2285/img_6.png" alt="" class="w-1/2 self-center img-shadow max-w-[150px] -translate-y-[10%]">
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-[100px] relative">
      <div class="container mx-auto flex flex-col justify-between">
        <h2 class="text-lg">
          Innovative Comfort, Zero Pain Guarantee
        </h2>
        <span class="text-sm mt-8">
          Experience utmost comfort with our lancing device, integrating advanced minimally invasive technology.
        </span>

        <div class="flex items-center gap-4">
          <div class="flex-1 mt-16 grid lg:grid-cols-4 gap-4">
            <div class="lg:col-span-3 border border-blackColor rounded-[20px] flex flex-col justify-center p-6">
              <div class="flex flex-col space-y-4">
                <span class="text-sm">
                  Forward Spring Technology:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-tiny">
                    Minimizes pain and vibration during use.
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_10.png" alt="" class="mx-auto self-center">
              <div class="flex flex-col space-y-4 self-end">
                <span class="text-sm">
                  Independent Lancet Holder
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-tiny">
                    Ensures precise, painless lancet insertion.
                  </li>
                </ul>
              </div>
            </div>
            <div class="border border-blackColor rounded-[20px] flex flex-col p-6">
              <div class="flex flex-col space-y-4">
                <span class="text-sm">
                  Ready for use or not:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-tiny">
                    warning lancet stored or not
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_11.png" alt="" class="mx-auto self-center">
            </div>
            <div class="lg:col-span-2 border border-blackColor rounded-[20px] flex items-center gap-5 p-6">
              <div class="flex flex-col space-y-4 flex-1">
                <span class="text-sm">
                  Elastic Rail System:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-tiny">
                    Promotes smoother,
                    less painful lancet penetration.
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_12.png" alt="" class="mx-auto self-center max-w-[30%] max-h-[200px]">
            </div>
            <div class="lg:col-span-2 border border-blackColor rounded-[20px] flex items-center gap-5 p-6">
              <div class="flex flex-col space-y-4 flex-1">
                <span class="text-sm">
                  11 Depth Settings:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-tiny">
                    Customizable settings for user
                    comfort and needs.
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_13.png" alt="" class="mx-auto self-center max-w-[30%] max-h-[200px]">
            </div>
            <div class="lg:col-span-full border border-blackColor rounded-[20px] flex flex-col lg:flex-row items-center p-6">
              <div class="flex flex-col space-y-4 lg:w-1/2">
                <span class="text-sm">
                  2-in-1 Button & Lancet Ejector:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-tiny">
                    Streamlined design for easy cleaning, with a safety feature
                    preventing lancet ejection without proper cap twisting.
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_14.png" alt="" class="mx-auto self-center">
          </div>
          </div>
          <div class="w-[150px] hidden lg:flex items-center justify-center">
            <img src="~/assets/images/bgmPage/2022/img_7.png" alt="" class="w-[100px] img-shadow">
          </div>
        </div>
      </div>
    </div>

    <div class="w-full bg-blackColor py-[100px] flex flex-col justify-center">
      <div class="container mx-auto relative">
        <h5 class="text-xl text-white">
          AHG-2022 Diabetes Management App
        </h5>
        <div class="flex flex-col-reverse gap-5 lg:flex-row items-center text-white">
          <div class="flex flex-col scale-90 lg:max-w-[75%] origin-left">
          <span class="text-[22px] xl:text-[36px] lg:mt-12">
            Take control of your health with effective blood glucose management.
          </span>
            <h6 class="text-[30px] xl:text-[50px] mt-12">
              SHARE YOUR HEALTH DATA WITH YOUR DOCTOR
            </h6>
            <p class="text-[15px] xl:text-[24px] text-justify mt-5">
              Track and analyze your glucose levels to optimize diabetes
              management. Our app empowers you to elevate your check-up
              experience by easily sharing a comprehensive health journal with
              your healthcare professionals
            </p>
          </div>
          <img src="~/assets/images/qrcode.png" alt="qrCode" class="lg:absolute lg:mt-0 mt-12 w-[25vw] max-w-[300px] right-12 2xl:right-0">
        </div>
      </div>
    </div>

    <AHGPackaging />

    <AHGSupport manual-button color="black" />

  </div>

</template>

<script setup lang="ts">

import AHGButton from "~/components/base/AHGButton.vue";
import AHGLogo from "~/components/AHGLogo.vue";
import AHGPackaging from "~/components/AHGPackaging.vue";
</script>

<style scoped>
.img-shadow {
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
}
</style>