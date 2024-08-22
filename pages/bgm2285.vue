<template>
  <div>
    <div class="relative w-full grid place-items-center py-[150px] bg-blackColor text-white">
      <div class="flex flex-col container mx-auto">
        <div class="relative flex flex-col justify-center">
          <h1 class="text-[35px] md:text-[105px] font-bold leading-[1.1]">
            BLOOD GLUCOSE
            MONITOR
          </h1>
          <div class="flex font-bold items-center text-[45px] gap-2 mt-5">
            <AHGLogo width="7.5vw" color="white" />
            <p> -2285</p>
          </div>
          <div class="flex items-center my-10 gap-10 lg:w-[65%]">
            <div class="flex flex-col space-y-4 text-justify text-[18px] leading-tight">
              <p>
                Monitor your blood glucose effortlessly with the AHG-2285 – no coding needed, ensuring a quicker and
                easier testing process. With just 0.5ul of blood, you'll receive fast results in just 5 seconds, with a
                large LCD display. Record up to 1000 readings for a comprehensive half-year glucose history. The
                extended HCT range, from 20% to 70%, caters to a diverse demographic, making it suitable for the entire
                family.
              </p>
              <p class="w-[90%]">
                The AHG 8 Electrode Test Strip guarantees unparalleled accuracy by eliminating various interferences,
                providing stable and precise readings. The AHG-2285 is not just a device; it's a comprehensive solution
                a commitment to ensuring a healthier tomorrow for you and the ones you hold dear.
              </p>
            </div>
          </div>
          <div class="flex items-end justify-center gap-2 w-2/5 relative lg:absolute -right-12 -bottom-6  lg:m-0">
            <img src="~/assets/images/bgmPage/2285/main.png?v=2"
              class="max-h-[420px] lg:max-h-[420px] hidden md:block" />
          </div>
        </div>
        <AHGButton to="/distributor" color="white" width="200px" is-show-more>
          Join Us
        </AHGButton>
      </div>
    </div>

    <div class="bg-white w-full">
      <div class="container mx-auto py-[80px] flex flex-col items-stretch">
        <div class=" my-14">
          <div class="flex items-center gap-1">
            <AHGLogo color="black" />
            <span class="text-[45px] font-bold">-2285</span>
          </div>
          <p class="text-[36px] mb-3">Blood Glucose Monitor</p>
          <p class="text-[19.5px]">
            Revolutionize your approach to diabetes care with the AHG-2285 Blood Glucose Meter. This cutting-edge device
            effortlessly blends
            precision, convenience, and innovation, promising a health monitoring experience that transcends
            expectations.
          </p>
        </div>
        <div class="grid md:grid-cols-2 gap-3">
          <div
            class="flex items-center justify-between gap-12 w-full rounded-[20px] p-5 relative bg-lightColor drop-shadow-lg text-blackColor">
            <div class="flex flex-col space-y-1 flex-1">
              <p class="text-[24px] font-bold">Simple</p>
              <p class="text-[17.5px]">
                No coding, no connection required, making <br />
                the testing process quicker and easier
              </p>
            </div>
            <img src="~/assets/images/bgmPage/2285/img_1.png" class="w-[100px] h-[110px]" alt="">
          </div>
          <div
            class="flex items-center justify-between gap-5 w-full rounded-[20px] p-5 relative bg-lightColor drop-shadow-lg text-blackColor">
            <div class="flex flex-col space-y-1  flex-1">
              <p class="text-[24px] font-bold">Test strip ejector</p>
              <p class="text-[17.5px]">
                Strip ejector helps in maintaining hygiene and reducing
                contamination risks by avoid to touch used strips
              </p>
            </div>
            <img src="~/assets/images/bgmPage/2285/img_2.png" class="w-[100px] h-[110px]" alt="">
          </div>
          <div
            class="flex items-center justify-between gap-12 w-full rounded-[20px] p-5 relative bg-lightColor drop-shadow-lg text-blackColor">
            <div class="flex flex-col space-y-1 flex-1">
              <p class="text-[24px] font-bold">Wide HCT range</p>
              <p class="text-[17.5px]">
                20-70%, Suitable for everyone
              </p>
            </div>
            <img src="~/assets/images/bgmPage/2285/img_3.png" class="w-[110px] h-[110px]" alt="">
          </div>
          <div
            class="flex items-center justify-between gap-12 w-full rounded-[20px] p-5 relative bg-lightColor drop-shadow-lg text-blackColor">
            <div class="flex flex-col space-y-1  flex-1">
              <p class="text-[24px] font-bold">Large Memorie</p>
              <p class="text-[17.5px]">
                Large memorie for the comprehensive data
                tracking and analysis
              </p>
            </div>
            <img src="~/assets/images/bgmPage/2285/img_4.png" class="w-[110px] h-[110px]" alt="">
          </div>
        </div>

      </div>
    </div>
    <div class="bg-white pb-[50px] relative">
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
                <span class="text-[17px]">10 to 600 mg/dL </span>
              </div>
              <hr class="border-black opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Automatic Shutoff </span>
                <span class="text-[17px]">2 minutes after the last action </span>
              </div>
              <hr class="border-black opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Battery </span>
                <span class="text-[17px]">Two AAA LR03 1.5V batteries </span>
              </div>
              <hr class="border-black opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Operating Temperature</span>
                <span class="text-[17px]">41-113°F / 5-45°C</span>
              </div>
              <hr class="border-black opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Operating Relative humidity </span>
                <span class="text-[17px]">R.H. ≤ 10-90%</span>
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
                <span class="text-[17px]">About 0.5 μL</span>
              </div>
              <hr class="border-black opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Memory</span>
                <span class="text-[17px]">Up to 1000 records with date and time</span>
              </div>
              <hr class="border-black opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Test averaging</span>
                <span class="text-[17px]">
                  7, 14, and 30-day average
                </span>
              </div>
              <hr class="border-black opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Display Size</span>
                <span class="text-[17px]">37mm x 47mm</span>
              </div>
              <hr class="border-black opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Dimensions</span>
                <span class="text-[17px]">93.5mm x 60.5mm x 20mm</span>
              </div>
              <hr class="border-black opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[20px] md:text-[26px] font-bold">Weight</span>
                <span class="text-[17px]">86.2g(including battery)</span>
              </div>
            </div>
          </div>
        </div>
        <img src="~/assets/images/bgmPage/2285/img_5.png" alt="specifications"
          class="w-1/5 scale-110 max-w-[450px] img-shadow">
      </div>
    </div>

    <div class="bg-lightColor md:py-[80px] py-[50px] relative">
      <div class="container mx-auto flex flex-col justify-between">
        <div class="flex flex-col space-y-10 flex-1">
          <h6 class="text-[23.5px] ">
            The technological leadership of the AHG-2022 lies in its test strip – a carbon silver structure with
            8-electrode
            on a single layer for enhancing the accuracy and reliability of the blood glucose readings
          </h6>

          <div class="mt-8 ">
            <p class="text-[29px] font-bold">
              Detailed functions of those electrodes include:
            </p>
            <div class="block md:grid pl-3 md:grid-cols-2  lg:gap-x-36 xl:w-5/6">
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
                  <li class="text-[17px]" style="white-space: nowrap;">
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
            <div class="md:flex gap-6 max-w-[45%] mr-[3rem] hidden">
              <img src="~/assets/images/bgmPage/2022/img_8.png" alt="" class=" mr- self-center max-w-[400px]">
              <img src="~/assets/images/bgmPage/2285/img_6.png" alt=""
                class="w-[35%] self-center relative -right-5 -top-[180px]  img-shadow max-w-[400px]">
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-[50px] md:py-[100px] relative">
      <div class="container mx-auto flex flex-col justify-between">
        <h2 class=" text-[30px] md:text-[50px] font-bold">
          Innovative Comfort, Zero Pain Guarantee
        </h2>
        <span class="text-[18px] md:text-[23.8px] mt-2">
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

    <!-- <TheAHG2022 second-title="SHARE WITH YOUR DOCTOR" /> -->

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

  hr {
    border-color: rgba(0, 0, 0, 0.1);
  }
</style>