<template>
  <div>
    <div class="relative w-full grid place-items-center py-[150px] bg-blackColor text-white">
      <div class="flex flex-col container mx-auto">
        <div class="relative flex flex-col justify-center">
          <h1 class="text-3xl leading-[1]">
            BLOOD GLUCOSE <br>
            MONITOR
          </h1>
          <div class="flex items-center gap-2 mt-5">
            <AHGLogo width="10vw" color="white"/>
            <strong class="text-xl">-</strong>
            <span class="text-lg">2022</span>
          </div>
          <div class="flex items-center my-10 gap-10 lg:w-3/5">
            <div class="flex flex-col space-y-4 text-justify text-small leading-tight">
              <p>
                Our advanced meter features Bluetooth integration, allowing you to effortlessly sync readings to a free
                smartphone app for convenient tracking on a popular health app. The extended HCT range, from 20%-70%,
                accommodates a diverse demographic, making it suitable every member of your family, including the little
                ones and expecting moms.
              </p>
              <p>
                The AHG 8 Electrode Test Strip ensures unparalleled accuracy, eliminating various interferences for stable
                and precise readings. More than just a meter, the AHG-2022 is a comprehensive solution that combines
                innovation, accuracy, and family-friendly design, promising a healthier tomorrow for you and your loved
                ones.
              </p>
            </div>
          </div>
          <div class="flex items-end justify-center gap-2 w-2/5 relative lg:absolute -right-12 bottom-0 mt-10 lg:m-0">
            <img src="~/assets/images/bgmPage/2022/img.png" class="img-shadow max-h-[100px] lg:max-h-[170px]"/>
            <img src="~/assets/images/bgmPage/2022/img_1.png" class=" img-shadow max-h-[200px] lg:max-h-[270px]"/>
            <img src="~/assets/images/bgmPage/2022/img_7.png" class=" img-shadow max-h-[200px] lg:max-h-[320px]"/>
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
            <span class="text-xl">- 2022</span>
          </div>
          <span class="text-[36px]">Smart Bluetooth Blood Glucose Monitor</span>
          <span class="text-[24px]">
            Experience the next level of diabetes care with the AHG-2022 Blood Glucose Meter, a cutting-edge device meticulously designed for seamless self-monitoring.
          </span>
        </div>

        <div class="grid lg:grid-cols-2 gap-5">
          <div
              class="flex items-center justify-between w-full rounded-[20px] p-5 relative bg-lightColor drop-shadow-lg text-blackColor">
            <div class="flex flex-col space-y-4 max-w-[50%]">
              <span class="text-[24px] ">Auto coding</span>
              <span class="text-[20px]">Easy and accurate</span>
            </div>
            <img src="~/assets/images/bgmPage/2022/img_2.png" alt="" class="img-shadow max-w-[50%] max-h-[70%]">
          </div>
          <div
              class="flex items-center justify-between w-full rounded-[20px] p-5 relative bg-lightColor drop-shadow-lg text-blackColor">
            <div class="flex flex-col space-y-4 max-w-[50%]">
              <span class="text-[24px] ">Auto-sync via bluetooth</span>
              <span class="text-[20px]">No Pairing Required</span>
            </div>
            <img src="~/assets/images/bgmPage/2022/img_3.png" alt="" class="img-shadow max-w-[50%] max-h-[70%]">
          </div>
          <div
              class="flex items-center justify-between w-full rounded-[20px] p-5 relative bg-lightColor drop-shadow-lg text-blackColor">
            <div class="flex flex-col space-y-4 w-[60%]">
              <span class="text-[24px] ">Wide HCT range</span>
              <span class="text-[20px]">20-70%</span>
            </div>
            <img src="~/assets/images/bgmPage/2022/img_4.png" alt="" class="img-shadow mx-auto max-w-[50%] max-h-[70%]">
          </div>
          <div
              class="flex items-center justify-between w-full rounded-[20px] p-5 relative bg-lightColor drop-shadow-lg text-blackColor">
            <div class="flex flex-col space-y-4 max-w-[50%]">
              <span class="text-[24px] ">"Rechargeable battery</span>
              <span class="text-[20px]">
                Rechargeable lithium battery, more portable
                USB charger cable included.
              </span>
            </div>
            <img src="~/assets/images/bgmPage/2022/img_5.png" alt="" class="img-shadow absolute top-0 right-12 h-[90%] max-w-[50%] max-h-[70%]">
          </div>
        </div>

      </div>
    </div>
    <div class="bg-white py-[100px] relative">
      <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-20 justify-between">
        <div class="flex flex-col space-y-10 flex-1">
          <h6 class="text-lg font-medium">
            Meter Specifications
          </h6>
          <div class="grid grid-cols-2 gap-4 lg:gap-10 w-full">
            <div class="flex flex-col flex-wrap gap-5">
              <div class="flex flex-col gap-2">
                <span class="text-base">Sample </span>
                <span class="text-xs">Fresh capillary whole blood</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Enzyme </span>
                <span class="text-xs">GOD/Glucose Oxidase</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Test Time </span>
                <span class="text-xs">5 seconds </span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Measurement Range </span>
                <span class="text-xs">20 to 600 mg/dL  </span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Automatic Shutoff </span>
                <span class="text-xs">2 minutes after the last action </span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Operating Relative humidity </span>
                <span class="text-xs">10-90% (non-condensing)</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Operating Temperature </span>
                <span class="text-xs">41-113°F / 5-45°C</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Data Port </span>
                <span class="text-xs">Micro USB</span>
              </div>
            </div>
            <div class="flex flex-col flex-wrap gap-5">
              <div class="flex flex-col gap-2">
                <span class="text-base">Test Measured </span>
                <span class="text-xs">Glucose in fingertip capillary whole blood</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Sample Volume</span>
                <span class="text-xs">0.8 μL</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Memory</span>
                <span class="text-xs">Up to 500 records with date and time</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Battery Type</span>
                <span class="text-xs">
                  Rechargeable, non-serviceable,250mAh,
                  3.7 Volt DC nominal, Lithium polymer
                  battery (5V input charge voltage)
                </span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Display Size</span>
                <span class="text-xs">32mm x 32mm</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Dimensions</span>
                <span class="text-xs">83mm x 52mm x 18.7mm</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-base">Weight</span>
                <span class="text-xs">Approximately 53g</span>
              </div>
            </div>
          </div>
        </div>
        <img src="~/assets/images/bgmPage/2022/img_6.png" alt="specifications" class="w-1/3 max-w-[450px] img-shadow">
      </div>
    </div>

    <div class="bg-lightColor py-[100px] relative">
      <div class="container mx-auto flex flex-col justify-between">
        <div class="flex flex-col space-y-10 flex-1">
          <h6 class="text-[30px]">
            The technological leadership of the AHG-2022 lies in its test strip – a carbon silver structure with
            8-electrode on a single layer for enhancing the accuracy and reliability of the blood glucose readings.
          </h6>

          <div class="mt-10 flex flex-col space-y-8">
            <span class="text-[36px]">
              Detailed functions of those electrodes include:
            </span>
            <div class="grid md:grid-cols-2 gap-8 lg:gap-x-20 xl:w-5/6">
              <div class="flex flex-col border-b border-blackColor space-y-4 py-5">
                <span class="text-[24px]">
                  Code Calibration (Auto-Coding):
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-[20px]">
                    Detects and eliminates coding errors.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-blackColor space-y-4 py-5">
                <span class="text-[24px]">
                  Check Sample Sufficiency:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-[20px]">
                    Ensures correct blood amount for accurate readings.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-blackColor space-y-4 py-5">
                <span class="text-[24px]">
                  Eliminate Hematocrit Interference:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-[20px]">
                    Corrects interference within ±10%.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-blackColor space-y-4 py-5">
                <span class="text-[24px]">
                  Recognize Control Solution:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-[20px]">
                    Identifies blood samples for precise testing.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-blackColor space-y-4 py-5">
                <span class="text-[24px]">
                  Eliminate Temperature Interference:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-[20px]">
                    Compensates within ±5% for temperature effects.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-blackColor space-y-4 py-5">
                <span class="text-[24px]">
                  Check Test Strip Damage:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-[20px]">
                    Prompts use of a new strip if damage is detected.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-blackColor md:border-none space-y-4 py-5">
                <span class="text-[24px]">
                  Check Humidity Exposure:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-[20px]">
                    Prevents erratic results due to humidity.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-blackColor md:border-none space-y-4 py-5">
                <span class="text-[24px]">
                  Check Test Strip Compatibility:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-[20px]">
                    Checks strip-meter compatibility for accurate results.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flex flex-col-reverse lg:flex-row gap-5">
            <div class="mt-10 flex-1 flex flex-col space-y-8">
              <span class="text-lg">
                Test Strips Specifications
              </span>
              <ul class="list-disc ml-5">
                <li class="text-xs">
                  Carbon silver structure electrode design
                </li>
                <li class="text-xs">
                  8 electrodes technology
                </li>
                <li class="text-xs">
                  Enzyme: GOD/Glucose Oxidase
                </li>
                <li class="text-xs">
                  Highly accurate & precise results
                </li>
                <li class="text-xs">
                  Eliminates temperature interference
                </li>
                <li class="text-xs">
                  For self-testing and in-vitro diagnostic use only
                </li>
                <li class="text-xs">
                  Storage Temperature: 2°C to 30°C / 36°F to 86°F
                </li>
                <li class="text-xs">
                  Humidity: 10-90%
                </li>
                <li class="text-xs">
                  Open shelf life: 6 months
                </li>
              </ul>
            </div>
            <div class="flex gap-6 max-w-[50%]">
              <img src="~/assets/images/bgmPage/2022/img_8.png" alt="" class="w-1/2 self-center max-w-[400px]">
              <img src="~/assets/images/bgmPage/2022/img_9.png" alt="" class="w-1/2 self-center img-shadow max-w-[400px]">
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-[100px] relative">
      <div class="container mx-auto flex flex-col justify-between">
        <h2 class="text-[64px]">
          Innovative Comfort, Zero Pain Guarantee
        </h2>
        <span class="text-[30px] mt-8">
          Experience utmost comfort with our lancing device, integrating advanced minimally invasive technology.
        </span>

        <div class="flex items-center gap-4">
          <div class="flex-1 mt-16 grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div class="lg:col-span-3 border border-blackColor rounded-[20px] flex flex-col justify-center p-6">
              <div class="flex flex-col">
                <span class="text-[24px]">
                  Forward Spring Technology:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-xs">
                    Minimizes pain and vibration during use.
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_10.png" alt="" class="mx-auto self-center">
              <div class="flex flex-col self-end">
                <span class="text-[24px]">
                  Independent Lancet Holder
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-xs">
                    Ensures precise, painless lancet insertion.
                  </li>
                </ul>
              </div>
            </div>
            <div class="border border-blackColor rounded-[20px] flex flex-col p-6">
              <div class="flex flex-col">
                <span class="text-sm">
                  Ready for use or not:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-xs">
                    warning lancet stored or not
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_11.png" alt="" class="mx-auto self-center">
            </div>
            <div class="lg:col-span-2 border border-blackColor rounded-[20px] flex items-center gap-5 p-6">
              <div class="flex flex-col flex-1">
                <span class="text-sm">
                  Elastic Rail System:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-xs">
                    Promotes smoother,
                    less painful lancet penetration.
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_12.png" alt="" class="mx-auto self-center max-w-[30%] max-h-[200px]">
            </div>
            <div class="lg:col-span-2 border border-blackColor rounded-[20px] flex items-center gap-5 p-6">
              <div class="flex flex-col flex-1">
                <span class="text-sm">
                  11 Depth Settings:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-xs">
                    Customizable settings for user
                    comfort and needs.
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_13.png" alt="" class="mx-auto self-center max-w-[30%] max-h-[200px]">
            </div>
            <div class="lg:col-span-full border border-blackColor rounded-[20px] flex flex-col items-start lg:flex-row lg:items-center p-6">
              <div class="flex flex-col lg:w-1/2">
                <span class="text-sm">
                  2-in-1 Button & Lancet Ejector:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-xs">
                    Streamlined design for easy cleaning, with a safety feature
                    preventing lancet ejection without proper cap twisting.
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_14.png" alt="" class="mx-auto self-center">
          </div>
          </div>
          <div class="w-[150px] hidden lg:flex items-center justify-center">
            <img src="~/assets/images/bgmPage/2022/img_7.png" alt="" class="w-[100px]">
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

    <AHGSupport color="black" />

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