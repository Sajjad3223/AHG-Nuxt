<template>
  <div>
    <div class="relative w-full grid place-items-center md:h-[90vh] bpm-banner">
      <div class="container mx-auto relative flex flex-col justify-center pt-[100vh] pb-12 md:p-0">
        <div class="bg-blackColor rounded-[25px] p-8 md:py-12 md:px-16 md:w-[65%] text-white">
          <div class="flex items-center gap-2 text-[30px] md:text-[45px] font-bold">
            <AHGLogo width="8vw" color="white" />
            <strong>-</strong>
            <span>300</span>
          </div>
          <span class="text-[30px] md:text-[47px]">Upper Arm Blood Pressure Monitor</span>
          <div class="flex flex-col-reverse lg:flex-row  my-8 gap-8">
            <div class="flex flex-col flex-1 space-y-2 md:space-y-5 text-justify text-[19px]">
              <p class="leading-tight">
                A cutting-edge device employing the oscillometric method for swift and highly accurate blood pressure
                measurement. With support for two users and an additional Guest Mode, each can maintain their own
                measurement records, storing up to 199 memories individually.
              </p>
              <p class="leading-tight">
                Featuring a large 67 x 68 mm display with oversized digits, our blood pressure monitor ensures easy
                readability of displayed values. Stay informed about your health with clarity and precision using AHG
                300.
              </p>
            </div>
            <img src="~/assets/images/Blood-Pressure.png" alt="Blood Pressure" class="w-1/2 md:w-[28%] md:h-full">
          </div>
          <AHGButton to="/distributor" color="white" class="text-black font-medium" px="3rem" is-show-more>
            Join Us
          </AHGButton>
        </div>
      </div>
    </div>

    <div class="bg-blackColor w-full text-white">
      <div class="container mx-auto py-[80px] flex flex-col items-stretch">
        <h3 class="text-[50px] mx-auto">
          Measurements
        </h3>
        <div class="grid grid-cols-1 font-medium  md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          <div class="flex items-center justify-center w-full rounded-xl bg-white text-blackColor !py-1 gap-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 74.94" width="60px">
              <polyline stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="currentColor"
                stroke-width="2px" points="9.38 61.63 22.77 61.63 28.85 45.5 35.51 73.94 39 60.46 60.62 60.41" />
              <path stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" stroke-miterlimit="10"
                d="M48.58,16.16l-.89.85-12.57,12.13s-.02-.02-.02-.02l-12.61-12.07-1.03-.99c-3.5-3.34-3.61-8.88-.28-12.37,3.34-3.49,8.87-3.61,12.37-.27l1.54,1.47,1.36-1.32c3.47-3.36,9.01-3.26,12.36.22,3.36,3.47,3.25,9.01-.22,12.36Z" />
              <g>
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="10.57" y1="37.53"
                  x2="16.75" y2="37.53" />
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="21.06" y1="37.53"
                  x2="27.24" y2="37.53" />
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="31.85" y1="37.53"
                  x2="38.03" y2="37.53" />
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="42.78" y1="37.53"
                  x2="48.96" y2="37.53" />
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="53.18" y1="37.53"
                  x2="59.36" y2="37.53" />
                <g>
                  <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" y1="37.53"
                    x2="6.18" y2="37.53" />
                  <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="63.82"
                    y1="37.53" x2="70" y2="37.53" />
                </g>
              </g>
            </svg>
            <span class="text-[16px]">Diastolic blood pressure</span>
          </div>
          <div class="flex items-center justify-center w-full rounded-xl bg-white text-blackColor py-2 gap-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 73.74" width="60px">
              <path fill="currentColor" stroke-width="0"
                d="M48.58,60.75l-.89.85-12.57,12.13s-.02-.02-.02-.02l-12.61-12.07-1.03-.99c-3.5-3.34-3.61-8.88-.28-12.37,3.34-3.49,8.87-3.61,12.37-.27l1.54,1.47,1.36-1.32c3.47-3.36,9.01-3.26,12.36.22,3.36,3.47,3.25,9.01-.22,12.36Z" />
              <polyline stroke-linecap="round" fill="none" stroke="currentColor" stroke-width="2px"
                points="9.38 17.13 22.77 17.13 28.85 1 35.51 29.44 39 15.96 60.62 15.91" />
              <g>
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" y1="37.47" x2="6.18"
                  y2="37.47" />
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="10.57" y1="37.47"
                  x2="16.75" y2="37.47" />
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="21.06" y1="37.47"
                  x2="27.24" y2="37.47" />
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="31.85" y1="37.47"
                  x2="38.03" y2="37.47" />
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="42.78" y1="37.47"
                  x2="48.96" y2="37.47" />
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="53.18" y1="37.47"
                  x2="59.36" y2="37.47" />
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="63.82" y1="37.47"
                  x2="70" y2="37.47" />
              </g>
            </svg>
            <span class="text-[16px]">Systolic blood pressure</span>
          </div>
          <div class="flex items-center justify-center w-full rounded-xl bg-white text-blackColor py-2 gap-12">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.5 28.15" width="32px">
              <path fill="currentColor" stroke-width="0"
                d="M29.83,15.16l-.89.85-12.57,12.13s-.02-.02-.02-.02L3.73,16.06l-1.03-.99C-.79,11.72-.91,6.19,2.43,2.7c3.34-3.49,8.87-3.61,12.37-.27l1.54,1.47,1.36-1.32c3.47-3.36,9.01-3.26,12.36.22,3.36,3.47,3.25,9.01-.22,12.36Z" />
            </svg>
            <span class="text-[16px]">Heart rate</span>
          </div>
        </div>

        <div class=" my-14">
          <div class="flex items-center font-bold gap-1">
            <AHGLogo width="90px" />
            <span class="text-[35px]">-300</span>
          </div>
          <p class="text-[30px]">Smart ARM Blood Pressure Monitor</p>
          <p class="text-[20px] mt-3">
            Experience advanced features and user-centric design with the AHG-300 Smart Blood Pressure Monitor.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-5">
          <div v-for="item in items"
            class="flex overflow-hidden flex-col-reverse md:flex-row gap-5 items-center justify-between w-full rounded-[20px] p-5 relative bg-white text-blackColor">
            <div class="flex flex-col w-full">
              <span class="text-[22px] font-bold">{{ item.title }}</span>
              <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-2 md:gap-0 w-full">
                <ul class="text-[17px] details mt-1 font-medium text-black  ">
                  <li style="white-space: pre;" v-for="detail in item.details">
                      {{ detail }}
                  </li>
                </ul>
              </div>
            </div>
            <img :src="item.image" :style="{ scale: item.title != 'Date & Time Display' ? 1.2 : 1 }" :alt="item.title"
              class="img-shadow p-image mr-2 absolute right-5 h-[70%] mb-1" :class="[{ 'bottom-[5px]': item.title == 'One-button Operation' },
              { ' !right-0': item.title == 'One-button Operation' || item.title == '2 User Mode + guest Mode' }
                , { 'bottom-[5px] ': item.title == 'Dual Power Supply' && item.image.endsWith('Asset7.png') },
              { '!mr-0': item.title == 'Date & Time Display' }
              ]">
          </div>

        </div>

        <div class="w-full flex flex-col space-y-8 mt-16 relative">
          <h4 class="text-[35px] md:text-[42px]">Easy-to-Read Results with AHG Blood Pressure Monitor</h4>
          <div class="flex flex-col-reverse md:flex-row gap-5">
            <p class="text-justify text-[16px] leading-tight">
              AHG Blood Pressure Monitor are engineered to deliver precise and reliable measurements, displayed clearly
              on our advanced screen. With a focus on accuracy, our monitor present detailed results that are easy to
              read and interpret, helping you keep a close watch on your health. The intuitive design ensures that
              anyone can use our monitor with ease, making AHG a trusted choice for comprehensive blood pressure
              management.
            </p>
            <img src="/images/bpmPage/AHG-300-05.png" alt="device" style="scale: 1.2;"
              class="w-[29%] max-w-[450px] mx-auto hidden md:block">
          </div>
        </div>

      </div>
    </div>
    <div class="bg-white py-[100px] relative">
      <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-20 justify-between">
        <div class="flex flex-col space-y-10 flex-1 w-full">
          <h6 class="text-base font-bold">
            Meter Specifications
          </h6>
          <div class="grid sm:grid-cols-2 gap-4 md:gap-16 w-full">
            <div class="flex flex-col flex-wrap gap-2 w-[98%]">
              <div>
                <p class="text-[21px] font-bold">Measuring Method </p>
                <p>Oscillometric</p>
              </div>
              <hr class="border-black ">
              <div>
                <p class="text-[21px] font-bold">Display Mode </p>
                <p>LED</p>
              </div>
              <hr class="border-black ">
              <div>
                <p class="text-[21px] font-bold">Screen Size </p>
                <p>67 mm x 68 mm (3.7-inch) </p>
              </div>
              <hr class="border-black ">
              <div>
                <p class="text-[21px] font-bold">Dimension </p>
                <p>130mm(L) × 100mm(W) × 49mm(H) </p>
              </div>
              <hr class="border-black ">
              <div>
                <p class="text-[21px] font-bold">Weight </p>
                <p>About 221g (without batteries) </p>
              </div>
            </div>
            <div class="flex flex-col flex-wrap gap-3">
              <div>
                <p class="text-[21px] font-bold">Measuring Range </p>
                <p class="pre" style="white-space: pre;">Blood pressure value: SYS: 57~255 mmHg (7.6~33.4 kPa)</p>
                <p>DIA: 25~195 mmHg (3.33~26 kPa)</p>
                <p>Pulse rate: 40-199 bpm</p>
              </div>
              <hr class="border-black ">
              <div>
                <p class="text-[21px] font-bold">Accuracy </p>
                <p>Blood pressure: ±3 mmH (±0.4 kPa) </p>
                <p class="mt-2">Pulse rate: ±5%</p>
              </div>
              <hr class="border-black ">
              <div>
                <p class="text-[21px] font-bold">Power Source </p>
                <p>4*AAA batteries or d.c. 5V power supply line </p>
              </div>
            </div>
          </div>
        </div>
        <img src="/assets/images/ahg-300.png" alt="specifications" class="w-[50%] md:w-[25%] max-w-[450px] img-shadow">
      </div>
    </div>

    <AHGPackaging is-bpm />
    <AHGSupport color="black" manual-button />

  </div>
</template>

<script setup lang="ts">

import AHGButton from "~/components/base/AHGButton.vue";
import AHGLogo from "~/components/AHGLogo.vue";
import AHGPackaging from "~/components/AHGPackaging.vue";

const items = [
  {
    title: '3.7-inch HD Screen',
    details: [
      'LED screen for clear readings',
      'Large font, ideal for senior citizens'
    ],
    image: '/images/bpmPage/Asset%2015.png'
  },
  {
    title: '"Cuff Wearing" Detection',
    details: [
      `Automatically checks cuff fit to
avoid inaccuracies.`
    ],
    image: '/images/bpmPage/Asset14.png'
  },
  {
    title: 'One-button Operation',
    details: [
      'Press the button for automatic measurement',
      'Convenient and user-friendly'
    ],
    image: '/images/bpmPage/Asset13.png'
  },
  {
    title: '"Keep Still" Indicator',
    details: [
      `Flashing reminder to remain still
during measurement.`
    ],
    image: '/images/bpmPage/Asset12.png'
  },
  {
    title: '2 User Mode + guest Mode',
    details: [
      '2 users with 199 memories each',
      'Guest Mode available'
    ],
    image: '/images/bpmPage/Asset11.png'
  },
  {
    title: '"Irregular Heartbeat" Indicatior',
    details: [
      'Flashing alert for irregular heartbeat.'
    ],
    image: '/images/bpmPage/Asset10.png'
  },
  {
    title: 'Hypertension Indicator',
    details: [
      'Red for high blood pressure',
      'Yellow for mild high blood pressure or hypotension',
      'Green for normal'
    ],
    image: '/images/bpmPage/Asset9.png'
  },
  {
    title: 'Date & Time Display',
    details: [
      `Real-time display of date and time
for added convenience.`
    ],
    image: '/images/bpmPage/date-time.png'
  },
  {
    title: 'Dual Power Supply',
    details: [
      `Both Type-C charging and dry battery options
available for convenience and portability.`
    ],
    image: '/images/bpmPage/Asset7.png'
  },
  {
    title: 'Average Value Display',
    details: [
      `Provides the average value of the latest
2 or 3 data for increased reliability.`
    ],
    image: '/images/bpmPage/avarage-value.png'
  },
  {
    title: 'Dual Power Supply',
    details: [
      `Type-C charging cable and battery are both
available. for convenience and portability.`
    ],
    image: '/images/bpmPage/Asset5.png'
  },
  {
    title: 'Unit Selection',
    details: [
      `Choose between mmHg and kPa units
based on personal preference.`
    ],
    image: '/images/bpmPage/unit-selection.png'
  },
  {
    title: 'Adjustable Cuff',
    details: [
      `Fits most adult upper arms with various
sizes from 22cm to 42cm.`
    ],
    image: '/images/bpmPage/Asset-3.png'
  },
  {
    title: 'Master Core Algorithm',
    details: [
      `Utilizes the latest chip and advanced
AI for enhanced measurement accuracy.`
    ],
    image: '/images/bpmPage/Asset-2.png'
  },
]
</script>

<style scoped lang="scss">
.img-shadow {
  /* filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5)); */
}

.bpm-banner {
  background-image: url(/images/bpm300-banner.jpg);
  background-repeat: no-repeat;
  background-position: 100% 0;
  background-size: cover;
}

.details li {
  position: relative;
}

.details li::after {
  width: 6px;
  height: 6px;
  position: absolute;
  left: 0;
  top: 9px;
  content: " ";
  background: black;
  border-radius: 50%;
}
@media screen and (max-width:768px) {
  .p-image{
    display: block;
    position: static ;
    scale: 1 !important;
  }
  .pre{
    white-space: wrap !important;
  }
}
@media only screen and (max-width:768px) {
  .bpm-banner {
    background-size: 250vw;
  }

  .bpm-banner>div:first-child {
    padding-top: clamp(0px, 100vh, 450px);
  }
}
  hr {
    border-color: rgba(0, 0, 0, 0.1);
  }
</style>