<template>
  <div>
    <div class="relative w-full grid place-items-center py-[150px] bg-blackColor text-white">
      <div class="container mx-auto relative flex flex-col justify-center">

        <h1 class="text-[114px] leading-[1]">
          BLOOD GLUCOSE <br>
          MONITOR
        </h1>
        <div class="flex items-center gap-2 mt-5">
          <AHGLogo width="100px" color="white"/>
          <strong class="text-[52px]">-</strong>
          <span class="text-[48px]">2022</span>
        </div>
        <div class="flex items-center my-10 gap-10 w-3/5">
          <div class="flex flex-col space-y-4 text-justify text-[20px] leading-tight">
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
        <AHGButton color="white" width="200px" is-show-more>
          Join Us
        </AHGButton>
        <div class="flex items-end gap-5 absolute right-0 bottom-0">
          <img src="~/assets/images/bgmPage/2022/img.png" class="img-shadow h-[220px]"/>
          <img src="~/assets/images/bgmPage/2022/img_1.png" class="img-shadow h-[350px]"/>
          <img src="~/assets/images/bgmPage/2022/img_7.png" class="img-shadow h-[450px]"/>
        </div>
      </div>
    </div>

    <div class="bg-white w-full">
      <div class="container mx-auto py-[80px] flex flex-col items-stretch">
        <div class="flex flex-col space-y-5 my-14">
          <div class="flex items-center gap-1">
            <AHGLogo/>
            <span class="text-4xl">-2022</span>
          </div>
          <span class="text-[36px]">Smart Bluetooth Blood Glucose Monitor</span>
          <span class="text-[24px]">
            Experience the next level of diabetes care with the AHG-2022 Blood Glucose Meter, a cutting-edge device meticulously designed for seamless self-monitoring.
          </span>
        </div>

        <div class="grid grid-cols-2 gap-5">
          <div
              class="flex items-center justify-between w-full rounded-[20px] p-5 relative bg-lightColor drop-shadow-lg text-blackColor">
            <div class="flex flex-col space-y-4 max-w-[50%]">
              <span class="text-[24px]">Auto coding</span>
              <span class="text-[20px]">Easy and accurate</span>
            </div>
            <img src="~/assets/images/bgmPage/2022/img_2.png" alt="" class="img-shadow">
          </div>
          <div
              class="flex items-center justify-between w-full rounded-[20px] p-5 relative bg-lightColor drop-shadow-lg text-blackColor">
            <div class="flex flex-col space-y-4 max-w-[50%]">
              <span class="text-[24px]">Auto-sync via bluetooth</span>
              <span class="text-[20px]">No Pairing Required</span>
            </div>
            <img src="~/assets/images/bgmPage/2022/img_3.png" alt="" class="img-shadow">
          </div>
          <div
              class="flex items-center justify-between w-full rounded-[20px] p-5 relative bg-lightColor drop-shadow-lg text-blackColor">
            <div class="flex flex-col space-y-4 w-[60%]">
              <span class="text-[24px]">Wide HCT range</span>
              <span class="text-[20px]">20-70%</span>
            </div>
            <img src="~/assets/images/bgmPage/2022/img_4.png" alt="" class="img-shadow mx-auto">
          </div>
          <div
              class="flex items-center justify-between w-full rounded-[20px] p-5 relative bg-lightColor drop-shadow-lg text-blackColor">
            <div class="flex flex-col space-y-4 max-w-[50%]">
              <span class="text-[24px]">"Rechargeable battery</span>
              <span class="text-[20px]">
                Rechargeable lithium battery, more portable
                USB charger cable included.
              </span>
            </div>
            <img src="~/assets/images/bgmPage/2022/img_5.png" alt="" class="img-shadow absolute top-0 right-12 h-[90%]">
          </div>
        </div>

      </div>
    </div>
    <div class="bg-white py-[100px] relative">
      <div class="container mx-auto flex items-center gap-20 justify-between">
        <div class="flex flex-col space-y-10 flex-1">
          <h6 class="text-[36px] font-medium">
            Meter Specifications
          </h6>
          <div class="grid grid-cols-2 gap-10 w-full">
            <div class="flex flex-col flex-wrap gap-5">
              <div class="flex flex-col gap-2">
                <span class="text-[24px]">Sample </span>
                <span class="text-[20px]">Fresh capillary whole blood</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[24px]">Enzyme </span>
                <span class="text-[20px]">GOD/Glucose Oxidase</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[24px]">Test Time </span>
                <span class="text-[20px]">5 seconds </span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[24px]">Measurement Range </span>
                <span class="text-[20px]">20 to 600 mg/dL  </span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[24px]">Automatic Shutoff </span>
                <span class="text-[20px]">2 minutes after the last action </span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[24px]">Operating Relative humidity </span>
                <span class="text-[20px]">10-90% (non-condensing)</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[24px]">Operating Temperature </span>
                <span class="text-[20px]">41-113°F / 5-45°C</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[24px]">Data Port </span>
                <span class="text-[20px]">Micro USB</span>
              </div>
            </div>
            <div class="flex flex-col flex-wrap gap-5">
              <div class="flex flex-col gap-2">
                <span class="text-[24px]">Test Measured </span>
                <span class="text-[20px]">Glucose in fingertip capillary whole blood</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[24px]">Sample Volume</span>
                <span class="text-[20px]">0.8 μL</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[24px]">Memory</span>
                <span class="text-[20px]">Up to 500 records with date and time</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[24px]">Battery Type</span>
                <span class="text-[20px]">
                  Rechargeable, non-serviceable,250mAh,
                  3.7 Volt DC nominal, Lithium polymer
                  battery (5V input charge voltage)
                </span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[24px]">Display Size</span>
                <span class="text-[20px]">32mm x 32mm</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[24px]">Dimensions</span>
                <span class="text-[20px]">83mm x 52mm x 18.7mm</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[24px]">Weight</span>
                <span class="text-[20px]">Approximately 53g</span>
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
            <div class="grid grid-cols-2 gap-x-20 w-5/6">
              <div class="flex flex-col border-b border-blackColor py-5">
                <span class="text-[24px]">
                  Code Calibration (Auto-Coding):
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-[20px]">
                    Detects and eliminates coding errors.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-blackColor py-5">
                <span class="text-[24px]">
                  Check Sample Sufficiency:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-[20px]">
                    Ensures correct blood amount for accurate readings.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-blackColor py-5">
                <span class="text-[24px]">
                  Eliminate Hematocrit Interference:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-[20px]">
                    Corrects interference within ±10%.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-blackColor py-5">
                <span class="text-[24px]">
                  Recognize Control Solution:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-[20px]">
                    Identifies blood samples for precise testing.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-blackColor py-5">
                <span class="text-[24px]">
                  Eliminate Temperature Interference:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-[20px]">
                    Compensates within ±5% for temperature effects.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-blackColor py-5">
                <span class="text-[24px]">
                  Check Test Strip Damage:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-[20px]">
                    Prompts use of a new strip if damage is detected.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col py-5">
                <span class="text-[24px]">
                  Check Humidity Exposure:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-[20px]">
                    Prevents erratic results due to humidity.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col py-5">
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

          <div class="flex gap-5">
            <div class="mt-10 flex-1 flex flex-col space-y-8">
              <span class="text-[36px]">
                Test Strips Specifications
              </span>
              <ul class="list-disc ml-5">
                <li class="text-[20px]">
                  Carbon silver structure electrode design
                </li>
                <li class="text-[20px]">
                  8 electrodes technology
                </li>
                <li class="text-[20px]">
                  Enzyme: GOD/Glucose Oxidase
                </li>
                <li class="text-[20px]">
                  Highly accurate & precise results
                </li>
                <li class="text-[20px]">
                  Eliminates temperature interference
                </li>
                <li class="text-[20px]">
                  For self-testing and in-vitro diagnostic use only
                </li>
                <li class="text-[20px]">
                  Storage Temperature: 2°C to 30°C / 36°F to 86°F
                </li>
                <li class="text-[20px]">
                  Humidity: 10-90%
                </li>
                <li class="text-[20px]">
                  Open shelf life: 6 months
                </li>
              </ul>
            </div>
            <img src="~/assets/images/bgmPage/2022/img_8.png" alt="" class="self-center max-w-[400px]">
            <img src="~/assets/images/bgmPage/2022/img_9.png" alt="" class="self-center img-shadow max-w-[400px]">

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
          <div class="flex-1 mt-16 grid grid-cols-4 gap-4">
            <div class="col-span-3 border border-blackColor rounded-[20px] flex flex-col justify-center p-6">
              <div class="flex flex-col">
                <span class="text-[24px]">
                  Forward Spring Technology:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-[20px]">
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
                  <li class="text-[20px]">
                    Ensures precise, painless lancet insertion.
                  </li>
                </ul>
              </div>
            </div>
            <div class="border border-blackColor rounded-[20px] flex flex-col p-6">
              <div class="flex flex-col">
                <span class="text-[24px]">
                  Ready for use or not:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-[20px]">
                    warning lancet stored or not
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_11.png" alt="" class="mx-auto self-center">
            </div>
            <div class="col-span-2 border border-blackColor rounded-[20px] flex items-center gap-5 p-6">
              <div class="flex flex-col flex-1">
                <span class="text-[24px]">
                  Elastic Rail System:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-[20px]">
                    Promotes smoother,
                    less painful lancet penetration.
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_12.png" alt="" class="mx-auto self-center max-w-[30%] max-h-[200px]">
            </div>
            <div class="col-span-2 border border-blackColor rounded-[20px] flex items-center gap-5 p-6">
              <div class="flex flex-col flex-1">
                <span class="text-[24px]">
                  11 Depth Settings:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-[20px]">
                    Customizable settings for user
                    comfort and needs.
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_13.png" alt="" class="mx-auto self-center max-w-[30%] max-h-[200px]">
            </div>
            <div class="col-span-full border border-blackColor rounded-[20px] flex items-center p-6">
              <div class="flex flex-col w-1/2">
                <span class="text-[24px]">
                  2-in-1 Button & Lancet Ejector:
                </span>
                <ul class="list-disc ml-5">
                  <li class="text-[20px]">
                    Streamlined design for easy cleaning, with a safety feature
                    preventing lancet ejection without proper cap twisting.
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_14.png" alt="" class="mx-auto self-center">
          </div>
          </div>
          <div class="w-[150px] flex items-center justify-center">
            <img src="~/assets/images/bgmPage/2022/img_7.png" alt="" class="w-[100px]">
          </div>
        </div>
      </div>
    </div>

    <div class="w-full bg-blackColor min-h-[680px] flex items-center justify-center">
      <div class="flex items-center container mx-auto relative text-white">
        <div class="flex flex-col scale-90 origin-left">
          <h5 class="text-[64px]">
            AHG-2022 Diabetes Management App
          </h5>
          <span class="text-[36px] mt-5">
          Take control of your health with effective blood glucose management.
        </span>
          <h6 class="text-[50px] mt-12">
            SHARE WITH YOUR DOCTOR
          </h6>
          <p class="text-[24px] mt-5">
            Track and analyze your glucose levels to optimize diabetes <br>
            management. Our app empowers you to elevate your check-up <br>
            experience by easily sharing a comprehensive health journal with <br>
            your healthcare professionals
          </p>
        </div>
        <img src="~/assets/images/qrcode.png" alt="qrCode" class="absolute right-0">
      </div>
    </div>

    <div class="bg-[#E1E9ED] py-[160px] relative">
      <div class="container mx-auto flex flex-col">
        <h2 class="text-[129px]" style="text-shadow: 2px 2px 5px #92A1A8">
          Affordable <br>
          luxury <br>
          packaging
        </h2>
        <p class="text-[36px] mt-4">
          American Health Gate's exclusive packing, setting <br>
          a new standard a unique blend of luxury and quality.
        </p>
        <div class="absolute right-0 top-1/2 -translate-y-1/2">
          <img src="~/assets/images/affordable-packaging.png" alt="Affordable Packaging">
          <span class="absolute text-[36px] top-0 right-1/4">
            Lifetime <br>
            International Warranty
          </span>
        </div>
      </div>
    </div>

    <!-- Need Support -->
    <div class="w-full bg-blackColor text-white min-h-[380px] flex items-center justify-center">
      <div class="container flex flex-col items-center mx-auto">
        <span class="text-[65px]">You need support?</span>
        <span class="text-[28px]">Dedication to clients, dedication to products.</span>
        <div class="flex items-center gap-4 mt-8">
          <button class="bg-white text-blackColor rounded-[8px] w-[220px] h-[55px]">
            <span>Contact Us</span>
          </button>
          <button class="bg-white text-blackColor rounded-[8px] w-[220px] h-[55px]">
            <span>Manuals</span>
          </button>
        </div>
      </div>
    </div>

  </div>

</template>

<script setup lang="ts">

import AHGButton from "~/components/base/AHGButton.vue";
import AHGLogo from "~/components/AHGLogo.vue";
</script>

<style scoped>
.img-shadow {
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
}
</style>