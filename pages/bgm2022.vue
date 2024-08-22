<template>
  <div>
    <div class="relative w-full grid place-items-center py-12 lg:py-[150px] bg-blackColor text-white">
      <div class="flex flex-col container mx-auto">
        <div class="relative flex flex-col justify-center">
          <h1 class="text-[35px] md:text-[105px] font-bold leading-[1.1]">
            BLOOD GLUCOSE
            MONITOR
          </h1>
          <div class="flex font-bold items-center text-[45px] gap-2 lg:mt-5 mt-2">
            <AHGLogo width="7rem" color="white" />
            <p> -2022</p>
          </div>
          <div class="flex items-center my-10 gap-10 lg:w-[65%]">
            <div class="flex flex-col space-y-4 text-justify text-[18px] leading-tight">
              <p>
                Our advanced meter features Bluetooth integration, allowing you to effortlessly sync readings to a free
                smartphone app for convenient tracking on a popular health app. The extended HCT range, from 20%-70%,
                accommodates a diverse demographic, making it suitable every member of your family, including the little
                ones and expecting moms.
              </p>
              <p class="w-[90%]">
                The AHG 8 Electrode Test Strip ensures unparalleled accuracy, eliminating various
                interferences for stable and precise readings. More than just a meter, the AHG-2022
                is a comprehensive solution that combines innovation, accuracy, and family-friendly
                design, promising a healthier tomorrow for you and your loved ones.

              </p>
            </div>
          </div>
          <div class="flex items-end justify-center gap-2 w-2/5 relative lg:absolute -right-12 -bottom-6  lg:m-0">
            <img src="~/assets/images/bgmPage/2022/main.png?v=2"
              class="max-h-[420px] lg:max-h-[420px] hidden md:block" />
          </div>
        </div>
        <AHGButton to="/distributor" color="white" class="font-medium" width="200px" is-show-more>
          Join Us
        </AHGButton>
      </div>
    </div>

    <div class="bg-white w-full">
      <div class="container mx-auto  flex flex-col items-stretch">
        <div class=" my-14">
          <div class="flex items-center gap-1">
            <AHGLogo color="black" />
            <span class="text-[45px] font-bold">-2022</span>
          </div>
          <p class="text-[36px] mb-3">Smart Bluetooth Blood Glucose Monitor</p>
          <p class="text-[19.5px]">
            Experience the next level of diabetes care with the AHG-2022 Blood Glucose Meter, a cutting-edge device
            meticulously designed for seamless self-monitoring.
          </p>
        </div>

        <div class="grid image-products lg:grid-cols-2 gap-5 pb-5">
          <div class="flex h-[180px] items-center justify-between w-full rounded-[20px] px-5 relative
             bg-lightColor drop-shadow-lg text-blackColor">
            <div class="  max-w-[50%]">
              <p class="text-[24px] font-bold">Auto coding</p>
              <p class="text-[18px] ">Easy and accurate</p>
            </div>
            <img src="~/assets/images/bgmPage/2022/img_2.png" alt="Auto coding" class="img-shadow !h-[60%]">
          </div>
          <div
            class="flex  h-[180px] items-center justify-between w-full rounded-[20px] px-5 relative bg-lightColor drop-shadow-lg text-blackColor">
            <div class="max-w-[50%]">
              <p class="text-[24px] font-bold">Auto-sync via bluetooth</p>
              <p class="text-[18px] ">No Pairing Required</p>
            </div>
            <img src="~/assets/images/bgmPage/2022/img_3.png" alt="Auto-sync via bluetooth"
              class="img-shadow lg:w-[40%] !h-[75%]">
          </div>
          <div
            class="flex  h-[180px] items-center justify-between w-full rounded-[20px] px-5 relative bg-lightColor drop-shadow-lg text-blackColor">
            <div class=" w-[60%]">
              <p class="text-[24px] font-bold ">Wide HCT range</p>
              <p class="text-[18px] ">20-70%</p>
            </div>
            <img src="~/assets/images/bgmPage/2022/AHG-2022 Red-02.png" alt="" class="img-shadow">
          </div>
          <div
            class="flex !pt-0 h-[180px] items-center justify-between w-full rounded-[20px] px-5 relative bg-lightColor drop-shadow-lg text-blackColor">
            <div class=" max-w-[70%]">
              <p class="text-[24px] font-bold">Rechargeable battery</p>
              <p class="text-[18px]">
                Rechargeable lithium battery, more portable
                USB charger cable included.
              </p>
            </div>
            <img src="~/assets/images/bgmPage/2022/img_5.png" alt="Rechargeable battery"
              class="img-shadow  top-0 right-10 h-[90%] max-w-[50%]">
          </div>
        </div>

      </div>
    </div>
    <div class="bg-white py-[50px] md:py-[100px] relative">
      <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-20 justify-between">
        <div class="flex flex-col space-y-10 flex-1">
          <h6 class="text-lg font-bold">
            Meter Specifications
          </h6>
          <div class="grid grid-cols-2 gap-4 lg:gap-10 w-full">
            <div class="flex flex-col flex-wrap gap-3">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Sample </span>
                <span class="text-[17px]">Fresh capillary whole blood</span>
              </div>
              <hr class="border-black opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Enzyme </span>
                <span class="text-[17px]">GOD/Glucose Oxidase</span>
              </div>
              <hr class="border-black opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Test Time </span>
                <span class="text-[17px]">5 seconds </span>
              </div>
              <hr class="border-black opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Measurement Range </span>
                <span class="text-[17px]">20 to 600 mg/dL </span>
              </div>
              <hr class="border-black opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Automatic Shutoff </span>
                <span class="text-[17px]">2 minutes after the last action </span>
              </div>
              <hr class="border-black opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Operating Relative humidity </span>
                <span class="text-[17px]">10-90% (non-condensing)</span>
              </div>
              <hr class="border-black opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Operating Temperature </span>
                <span class="text-[17px]">41-113°F / 5-45°C</span>
              </div>
              <hr class="border-black opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Data Port </span>
                <span class="text-[17px]">Micro USB</span>
              </div>
            </div>
            <div class="flex flex-col flex-wrap gap-3">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Test Measured </span>
                <span class="text-[17px]">Glucose in fingertip capillary whole blood</span>
              </div>
              <hr class="border-black opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Sample Volume</span>
                <span class="text-[17px]">0.8 μL</span>
              </div>
              <hr class="border-black opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Memory</span>
                <span class="text-[17px]">Up to 500 records with date and time</span>
              </div>
              <hr class="border-black opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Battery Type</span>
                <span class="text-[17px]">
                  Rechargeable, non-serviceable,250mAh,
                  3.7 Volt DC nominal, Lithium polymer
                  battery (5V input charge voltage)
                </span>
              </div>
              <hr class="border-black opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Display Size</span>
                <span class="text-[17px]">32mm x 32mm</span>
              </div>
              <hr class="border-black opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Dimensions</span>
                <span class="text-[17px]">83mm x 52mm x 18.7mm</span>
              </div>
              <hr class="border-black opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Weight</span>
                <span class="text-[17px]">Approximately 53g</span>
              </div>
            </div>
          </div>
        </div>
        <img src="~/assets/images/bgmPage/2022/img_6.png" alt="specifications"
          class="w-1/5 scale-110 max-w-[450px] img-shadow">
      </div>
    </div>

    <div class="bg-lightColor md:py-[80px] py-[50px] relative">
      <div class="container mx-auto flex flex-col justify-between">
        <div class="flex flex-col space-y-10 flex-1">
          <h6 class="text-[23.5px] ">
            The technological leadership of the AHG-2022 lies in its test strip – a carbon silver structure with
            8-electrode
            on a single layer for enhancing the accuracy and reliability of the blood glucose readings.
          </h6>

          <div class="mt-8 ">
            <p class="text-[29px] font-bold">
              Detailed functions of those electrodes include:
            </p>
            <div class="grid pl-3 md:grid-cols-2  lg:gap-x-36 xl:w-5/6">
              <div class="flex flex-col border-b border-black  py-5">
                <p class="text-[20px] font-bold">
                  Code Calibration (Auto-Coding):
                </p>
                <ul class="list-disc ml-5 !mt-2">
                  <li class="text-[17px]">
                    Detects and eliminates coding errors.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-black  py-5">
                <p class="text-[20px] font-bold">
                  Check Sample Sufficiency:
                </p>
                <ul class="list-disc ml-5 !mt-2">
                  <li class="text-[17px]">
                    Ensures correct blood amount for accurate readings.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-black  py-5">
                <p class="text-[20px] font-bold">
                  Eliminate Hematocrit Interference:
                </p>
                <ul class="list-disc ml-5 !mt-2">
                  <li class="text-[17px]">
                    Corrects interference within ±10%.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-black  py-5">
                <p class="text-[20px] font-bold">
                  Recognize Control Solution:
                </p>
                <ul class="list-disc ml-5 !mt-2">
                  <li class="text-[17px]">
                    Identifies blood samples for precise testing.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-black  py-5">
                <p class="text-[20px] font-bold">
                  Eliminate Temperature Interference:
                </p>
                <ul class="list-disc ml-5 !mt-2">
                  <li class="text-[17px]">
                    Compensates within ±5% for temperature effects.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-black  py-5">
                <p class="text-[20px] font-bold">
                  Check Test Strip Damage:
                </p>
                <ul class="list-disc ml-5 !mt-2">
                  <li class="text-[17px]">
                    Prompts use of a new strip if damage is detected.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-black md:border-none space-y-4 py-5">
                <p class="text-[20px] font-bold">
                  Check Humidity Exposure:
                </p>
                <ul class="list-disc ml-5 !mt-2">
                  <li class="text-[17px]">
                    Prevents erratic results due to humidity.
                  </li>
                </ul>
              </div>
              <div class="flex flex-col border-b border-black md:border-none space-y-4 py-5">
                <p class="text-[20px] font-bold">
                  Check Test Strip Compatibility:
                </p>
                <ul class="list-disc ml-5 !mt-2">
                  <li class="text-[17px]">
                    Checks strip-meter compatibility for accurate results.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flex flex-col-reverse lg:flex-row gap-5">
            <div class="min-w-fit flex-1 flex flex-col space-y-8">
              <span class="text-[35px] font-bold">
                Test Strips Specifications
              </span>
              <ul class="list-disc ml-5 !mt-5 font-medium">
                <li class="text-[17px]">
                  Carbon silver structure electrode design
                </li>
                <li class="text-[17px]">
                  8 electrodes technology
                </li>
                <li class="text-[17px]">
                  Enzyme: GOD/Glucose Oxidase
                </li>
                <li class="text-[17px]">
                  Highly accurate & precise results
                </li>
                <li class="text-[17px]">
                  Eliminates temperature interference
                </li>
                <li class="text-[17px]">
                  For self-testing and in-vitro diagnostic use only
                </li>
                <li class="text-[17px]">
                  Storage Temperature: 2°C to 30°C / 36°F to 86°F
                </li>
                <li class="text-[17px]">
                  Humidity: 10-90%
                </li>
                <li class="text-[17px]">
                  Open shelf life: 6 months
                </li>
              </ul>
            </div>
            <div class="flex gap-6 max-w-[50%] mr-[3rem]">
              <img src="~/assets/images/bgmPage/2022/img_8.png" alt="" class=" mr- self-center max-w-[400px]">
              <img src="~/assets/images/bgmPage/2022/img_9.png" alt=""
                class="w-1/2 self-center img-shadow max-w-[400px]">
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-[100px] relative">
      <div class="container mx-auto flex flex-col justify-between">
        <h2 class="text-[50px] font-bold">
          Innovative Comfort, Zero Pain Guarantee
        </h2>
        <span class="text-[23.8px] mt-2">
          Experience utmost comfort with our lancing device, integrating advanced minimally invasive technology.
        </span>

        <div class="flex items-center gap-4">
          <div class="flex-1 mt-16 grid grid-cols-1 lg:grid-cols-6 gap-1">
            <div class="lg:col-span-4 border border-black rounded-[20px] flex 
            flex-col justify-center p-6">
              <div class="flex flex-col">
                <p class="text-[20px] font-bold">
                  Forward Spring Technology:
                </p>
                <ul class="list-disc ml-5">
                  <li class="text-[17px]">
                    Minimizes pain and vibration during use.
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_10.png" alt="" class="mx-auto w-[65%] h-[135px] self-center">
              <div class="flex flex-col self-end">
                <p class="text-[20px] font-bold">
                  Independent Lancet Holder
                </p>
                <ul class="list-disc ml-5">
                  <li class="text-[17px]">
                    Ensures precise, painless lancet insertion.
                  </li>
                </ul>
              </div>
            </div>
            <div class="border lg:col-span-2 border-black rounded-[20px] flex flex-col p-6">
              <div class="flex flex-col">
                <p class="text-[20px] font-bold">
                  Ready for use or not:
                </p>
                <ul class="list-disc ml-5">
                  <li class="text-[17px]">
                    warning lancet stored or not
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_11.png" alt="" class="mx-auto mt-2 self-center">
            </div>
            <div class="lg:col-span-3 border border-black rounded-[20px] flex items-center gap-5 p-6">
              <div class="flex flex-col flex-1">
                <p class="text-[20px] font-bold">
                  Elastic Rail System:
                </p>
                <ul class="customLi">
                  <li class="text-[17px]">
                       Promotes smoother,<br />
                    less painful lancet penetration.
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_12.png" alt=""
                class="mx-auto self-center max-w-[37%] max-h-[200px]">
            </div>
            <div class="lg:col-span-3 border border-black rounded-[20px] flex items-center gap-5 p-6">
              <div class="flex flex-col flex-1">
                <p class="text-[20px] font-bold">
                  11 Depth Settings:
                </p>
                <ul class="customLi">
                  <li class="text-[17px]">
                       Customizable settings for user
                    comfort and needs.
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_13.png" alt=" 11 Depth Settings:"
                class="mx-auto self-center max-w-[35%] max-h-[200px]">
            </div>
            <div
              class="lg:col-span-full border border-black rounded-[20px] flex flex-col items-start lg:flex-row lg:items-center p-6">
              <div class="flex flex-col lg:w-[70%]">
                <p class="text-[20px] font-bold">
                  2-in-1 Button & Lancet Ejector:
                </p>
                <ul class="customLi">
                  <li class="text-[18px]">
                       Streamlined design for easy cleaning, with a safety feature
                    preventing lancet ejection without proper cap twisting.
                  </li>
                </ul>
              </div>
              <img src="~/assets/images/bgmPage/2022/img_14.png" alt="" class="mr-6 w-[44%]  self-center">
            </div>
          </div>
          <div class="w-[150px] hidden lg:flex items-center justify-center">
            <img src="~/assets/images/bgmPage/2022/img_7.png" alt="" class="w-[100px]">
          </div>
        </div>
      </div>
    </div>
    <TheAHG2022 second-title="SHARE WITH YOUR DOCTOR" />

    <AHGPackaging />

    <AHGSupport manual-button color="black" />

  </div>

</template>

<script setup lang="ts">

import AHGButton from "~/components/base/AHGButton.vue";
import AHGLogo from "~/components/AHGLogo.vue";
import AHGPackaging from "~/components/AHGPackaging.vue";
</script>

<style scoped lang="scss">
.img-shadow {
  /* filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5)); */
}


@media screen and (max-width:768px) {
  .image-products {
    .flex {
      height: fit-content !important;
      @apply py-4 gap-4;

      div {
        max-width: 100% !important;
        width: 100%;
      }
    }

    img {
      display: none;
    }
  }
}

.image-products img {
  position: absolute;
  height: 85%;
  transform: translate(0, 0);
  @apply right-10 max-w-[50%]
}

hr {
  border-color: rgba(0, 0, 0, 0.1);
}
</style>