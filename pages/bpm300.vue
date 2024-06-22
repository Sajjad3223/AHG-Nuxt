<template>
  <div>
    <div class="relative w-full grid place-items-center h-[90vh]"
         style="background-image: url(/images/bpm300-banner.jpg);background-size: cover">
      <div class="container mx-auto relative flex flex-col justify-center">
        <div class="bg-blackColor rounded-[25px] p-12 w-2/3 text-white">
          <div class="flex items-center gap-2">
            <AHGLogo width="100px" color="white" />
            <strong class="text-[52px]">-</strong>
            <span class="text-[48px]">300</span>
          </div>
          <span class="text-[50px]">Upper Arm Blood Pressure Monitor</span>
          <div class="flex items-center my-10 gap-10">
            <div class="flex flex-col flex-1 space-y-5 text-justify text-[20px]">
              <p>
                A cutting-edge device employing the oscillometric method for swift and highly accurate blood pressure measurement. With support for two users and an additional Guest Mode, each can maintain their own measurement records, storing up to 199 memories individually.
              </p>
              <p>
                Featuring a large 67 x 68 mm display with oversized digits, our blood pressure monitor ensures easy readability of displayed values. Stay informed about your health with clarity and precision using AHG 300.
              </p>
            </div>
            <img src="~/assets/images/Blood-Pressure.png" alt="Blood Pressure" class="w-1/4 h-full">
          </div>
          <AHGButton color="white" width="200px" is-show-more>
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
        <div class="grid grid-cols-3 gap-5 mt-8">
          <div class="flex items-center justify-center w-full rounded-xl bg-white text-blackColor py-5 gap-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 74.94" width="70px">
              <polyline stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" points="9.38 61.63 22.77 61.63 28.85 45.5 35.51 73.94 39 60.46 60.62 60.41"/>
              <path stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" stroke-miterlimit="10" d="M48.58,16.16l-.89.85-12.57,12.13s-.02-.02-.02-.02l-12.61-12.07-1.03-.99c-3.5-3.34-3.61-8.88-.28-12.37,3.34-3.49,8.87-3.61,12.37-.27l1.54,1.47,1.36-1.32c3.47-3.36,9.01-3.26,12.36.22,3.36,3.47,3.25,9.01-.22,12.36Z"/>
              <g>
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="10.57" y1="37.53" x2="16.75" y2="37.53"/>
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="21.06" y1="37.53" x2="27.24" y2="37.53"/>
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="31.85" y1="37.53" x2="38.03" y2="37.53"/>
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="42.78" y1="37.53" x2="48.96" y2="37.53"/>
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="53.18" y1="37.53" x2="59.36" y2="37.53"/>
                <g>
                  <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" y1="37.53" x2="6.18" y2="37.53"/>
                  <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="63.82" y1="37.53" x2="70" y2="37.53"/>
                </g>
              </g>
            </svg>
            <span class="text-[20px]">Diastolic blood pressure</span>
          </div>
          <div class="flex items-center justify-center w-full rounded-xl bg-white text-blackColor py-5 gap-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 73.74" width="70px">
              <path  fill="currentColor" stroke-width="0" d="M48.58,60.75l-.89.85-12.57,12.13s-.02-.02-.02-.02l-12.61-12.07-1.03-.99c-3.5-3.34-3.61-8.88-.28-12.37,3.34-3.49,8.87-3.61,12.37-.27l1.54,1.47,1.36-1.32c3.47-3.36,9.01-3.26,12.36.22,3.36,3.47,3.25,9.01-.22,12.36Z"/>
              <polyline stroke-linecap="round" fill="none" stroke="currentColor" stroke-width="2px" points="9.38 17.13 22.77 17.13 28.85 1 35.51 29.44 39 15.96 60.62 15.91"/>
              <g>
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" y1="37.47" x2="6.18" y2="37.47"/>
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="10.57" y1="37.47" x2="16.75" y2="37.47"/>
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="21.06" y1="37.47" x2="27.24" y2="37.47"/>
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="31.85" y1="37.47" x2="38.03" y2="37.47"/>
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="42.78" y1="37.47" x2="48.96" y2="37.47"/>
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="53.18" y1="37.47" x2="59.36" y2="37.47"/>
                <line stroke-linejoin="round" fill="none" stroke="currentColor" stroke-width="2px" x1="63.82" y1="37.47" x2="70" y2="37.47"/>
              </g>
            </svg>
            <span class="text-[20px]">Systolic blood pressure</span>
          </div>
          <div class="flex items-center justify-center w-full rounded-xl bg-white text-blackColor py-5 gap-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.5 28.15" width="32px">
              <path fill="currentColor" stroke-width="0" d="M29.83,15.16l-.89.85-12.57,12.13s-.02-.02-.02-.02L3.73,16.06l-1.03-.99C-.79,11.72-.91,6.19,2.43,2.7c3.34-3.49,8.87-3.61,12.37-.27l1.54,1.47,1.36-1.32c3.47-3.36,9.01-3.26,12.36.22,3.36,3.47,3.25,9.01-.22,12.36Z"/>
            </svg>
            <span class="text-[20px]">Heart rate</span>
          </div>
        </div>

        <div class="flex flex-col space-y-5 my-14">
          <div class="flex items-center gap-1">
            <AHGLogo/><span class="text-4xl">-300</span>
          </div>
          <span class="text-[36px]">Smart ARM Blood Pressure Monitor</span>
          <span class="text-[24px]">
            Experience advanced features and user-centric design with the AHG-300 Smart Blood Pressure Monitor.
          </span>
        </div>

        <div class="grid grid-cols-2 gap-5">
          <div class="flex items-center justify-between w-full rounded-[20px] p-5 relative bg-white text-blackColor">
            <div class="flex flex-col space-y-4 max-w-[50%]">
              <span class="text-[24px]">3.7-inch HD Screen</span>
              <ul class="list-disc flex flex-col space-y-2 ml-5">
                <li>
                  LED screen for clear readings
                </li>
                <li>
                  Large font, ideal for senior citizens
                </li>
              </ul>
            </div>
            <img src="~/assets/images/bpmPage/Asset%2015.png" alt="" class="img-shadow">
          </div>
          <div class="flex items-center justify-between w-full rounded-[20px] p-5 relative bg-white text-blackColor">
            <div class="flex flex-col space-y-4 max-w-[50%]">
              <span class="text-[24px]">"Cuff Wearing" Detection</span>
              <ul class="list-disc flex flex-col space-y-2 ml-5">
                <li>
                  Automatically checks cuff fit to
                  avoid inaccuracies.
                </li>
              </ul>
            </div>
            <img src="~/assets/images/bpmPage/Asset%2014.png" alt="" class="img-shadow">
          </div>
          <div class="flex items-center justify-between w-full rounded-[20px] p-5 relative bg-white text-blackColor">
            <div class="flex flex-col space-y-4 max-w-[50%]">
              <span class="text-[24px]">One-button Operation</span>
              <ul class="list-disc flex flex-col space-y-2 ml-5">
                <li>
                  Press the button for automatic measurement
                </li>
                <li>
                  Convenient and user-friendly
                </li>
              </ul>
            </div>
            <img src="~/assets/images/bpmPage/Asset%2013.png" alt="" class="img-shadow">
          </div>
          <div class="flex items-center justify-between w-full rounded-[20px] p-5 relative bg-white text-blackColor">
            <div class="flex flex-col space-y-4 max-w-[50%]">
              <span class="text-[24px]">"Keep Still" Indicator</span>
              <ul class="list-disc flex flex-col space-y-2 ml-5">
                <li>
                  Flashing reminder to remain still
                  during measurement.
                </li>
              </ul>
            </div>
            <img src="~/assets/images/bpmPage/Asset%2012.png" alt="" class="img-shadow">
          </div>
          <div class="flex items-center justify-between w-full rounded-[20px] p-5 relative bg-white text-blackColor">
            <div class="flex flex-col space-y-4 max-w-[50%]">
              <span class="text-[24px]">2 User Mode + guest Mode </span>
              <ul class="list-disc flex flex-col space-y-2 ml-5">
                <li>
                  2 users with 199 memories each
                </li>
                <li>
                  Guest Mode available
                </li>
              </ul>
            </div>
            <img src="~/assets/images/bpmPage/Asset%2011.png" alt="" class="img-shadow">
          </div>
          <div class="flex items-center justify-between w-full rounded-[20px] p-5 relative bg-white text-blackColor">
            <div class="flex flex-col space-y-4 max-w-[50%]">
              <span class="text-[24px]">"Irregular Heartbeat" Indicator</span>
              <ul class="list-disc flex flex-col space-y-2 ml-5">
                <li>
                  Flashing alert for irregular
                  heartbeat.
                </li>
              </ul>
            </div>
            <img src="~/assets/images/bpmPage/Asset%2010.png" alt="" class="img-shadow">
          </div>
          <div class="flex items-center justify-between w-full rounded-[20px] p-5 relative bg-white text-blackColor">
            <div class="flex flex-col space-y-4 max-w-[50%]">
              <span class="text-[24px]">Hypertension Indicator</span>
              <ul class="list-disc flex flex-col space-y-2 ml-5">
                <li>
                  Red for high blood pressure
                </li>
                <li>
                  Yellow for mild high blood pressure or hypotension
                </li>
                <li>
                  Green for normal
                </li>
              </ul>
            </div>
            <img src="~/assets/images/bpmPage/Asset%209.png" alt="" class="img-shadow">
          </div>
          <div class="flex items-center justify-between w-full rounded-[20px] p-5 relative bg-white text-blackColor">
            <div class="flex flex-col space-y-4 max-w-[50%]">
              <span class="text-[24px]">Date & Time Display</span>
              <ul class="list-disc flex flex-col space-y-2 ml-5">
                <li>
                  Real-time display of date and time
                  for added convenience.
                </li>
              </ul>
            </div>
            <img src="~/assets/images/bpmPage/date%20&%20time.png" alt="" class="img-shadow">
          </div>
          <div class="flex items-center justify-between w-full rounded-[20px] p-5 relative bg-white text-blackColor">
            <div class="flex flex-col space-y-4 max-w-[50%]">
              <span class="text-[24px]">Dual Power Supply</span>
              <ul class="list-disc flex flex-col space-y-2 ml-5">
                <li>
                  Both Type-C charging and dry battery options
                  available for convenience and portability.
                </li>
              </ul>
            </div>
            <img src="~/assets/images/bpmPage/Asset%207.png" alt="" class="img-shadow">
          </div>
          <div class="flex items-center justify-between w-full rounded-[20px] p-5 relative bg-white text-blackColor">
            <div class="flex flex-col space-y-4 max-w-[50%]">
              <span class="text-[24px]">Average Value Display</span>
              <ul class="list-disc flex flex-col space-y-2 ml-5">
                <li>
                  Provides the average value of the latest
                  2 or 3 data for increased reliability.
                </li>
              </ul>
            </div>
            <img src="~/assets/images/bpmPage/avarage%20value.png" alt="" class="img-shadow">
          </div>
          <div class="flex items-center justify-between w-full rounded-[20px] p-5 relative bg-white text-blackColor">
            <div class="flex flex-col space-y-4 max-w-[50%]">
              <span class="text-[24px]">Dual Power Supply </span>
              <ul class="list-disc flex flex-col space-y-2 ml-5">
                <li>
                  Type-C charging cable and battery are both
                  available. for convenience and portability.
                </li>
              </ul>
            </div>
            <img src="~/assets/images/bpmPage/Asset%205.png" alt="" class="img-shadow">
          </div>
          <div class="flex items-center justify-between w-full rounded-[20px] p-5 relative bg-white text-blackColor">
            <div class="flex flex-col space-y-4 max-w-[50%]">
              <span class="text-[24px]">Unit Selection</span>
              <ul class="list-disc flex flex-col space-y-2 ml-5">
                <li>
                  Choose between mmHg and kPa units
                  based on personal preference.
                </li>
              </ul>
            </div>
            <img src="~/assets/images/bpmPage/unit%20selection.png" alt="" class="img-shadow">
          </div>
          <div class="flex items-center justify-between w-full rounded-[20px] p-5 relative bg-white text-blackColor">
            <div class="flex flex-col space-y-4 max-w-[50%]">
              <span class="text-[24px]">Adjustable Cuff</span>
              <ul class="list-disc flex flex-col space-y-2 ml-5">
                <li>
                  Fits most adult upper arms with various
                  sizes from 22cm to 42cm.
                </li>
              </ul>
            </div>
            <img src="~/assets/images/bpmPage/Asset%203.png" alt="" class="img-shadow">
          </div>
          <div class="flex items-center justify-between w-full rounded-[20px] p-5 relative bg-white text-blackColor">
            <div class="flex flex-col space-y-4 max-w-[50%]">
              <span class="text-[24px]">Master Core Algorithm</span>
              <ul class="list-disc flex flex-col space-y-2 ml-5">
                <li>
                  Utilizes the latest chip and advanced
                  AI for enhanced measurement accuracy.
                </li>
              </ul>
            </div>
            <img src="~/assets/images/bpmPage/Asset%202.png" alt="" class="img-shadow">
          </div>
        </div>

        <div class="w-full flex flex-col space-y-8 mt-16 relative">
          <h4 class="text-[50px]">Easy-to-Read Results with AHG Blood Pressure Monitor</h4>
          <div class="flex">
            <p class="text-justify flex-1">
              AHG Blood Pressure Monitor are engineered to deliver precise and reliable measurements, displayed clearly on our advanced screen. With a focus on accuracy, our monitor present detailed results that are easy to read and interpret, helping you keep a close watch on your health. The intuitive design ensures that anyone can use our monitor with ease, making AHG a trusted choice for comprehensive blood pressure management.
            </p>
            <img src="~/assets/images/bpmPage/bpmDevice.png" alt="device" class="w-1/3 max-w-[450px]">
          </div>
        </div>

      </div>
    </div>
    <div class="bg-lightColor py-[100px] relative">
      <div class="container mx-auto flex items-center gap-20 justify-between">
        <div class="flex flex-col space-y-10 flex-1">
          <h6 class="text-[36px] font-medium" >
            Meter Specifications
          </h6>
          <div class="grid grid-cols-2 gap-10 w-full">
            <div class="flex flex-col flex-wrap gap-5">
              <div class="flex flex-col gap-2">
                <span class="text-[24px]">Measuring Method </span>
                <span class="text-[20px]">Oscillometric</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[24px]">Display Mode </span>
                <span class="text-[20px]">LED</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[24px]">Screen Size </span>
                <span class="text-[20px]">67 mm x 68 mm (3.7-inch) </span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[24px]">Dimension </span>
                <span class="text-[20px]">130mm(L) × 100mm(W) × 49mm(H)  </span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[24px]">Weight </span>
                <span class="text-[20px]">About 221g (without batteries) </span>
              </div>
            </div>
            <div class="flex flex-col flex-wrap gap-5">
              <div class="flex flex-col gap-2">
                <span class="text-[24px]">Measuring Range </span>
                <span class="text-[20px]">Blood pressure value: SYS: 57~255 mmHg (7.6~33.4 kPa)</span>
                <span class="text-[20px]">DIA: 25~195 mmHg (3.33~26 kPa)</span>
                <span class="text-[20px]">Pulse rate: 40-199 bpm</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[24px]">Accuracy </span>
                <span class="text-[20px]">Blood pressure: ±3 mmH (±0.4 kPa) </span>
                <span class="text-[20px]">Pulse rate: ±5%</span>
              </div>
              <hr class="border-blackColor opacity-70">
              <div class="flex flex-col gap-2">
                <span class="text-[24px]">Power Source  </span>
                <span class="text-[20px]">4*AAA batteries or d.c. 5V power supply line </span>
              </div>
            </div>
          </div>
        </div>
        <img src="~/assets/images/bpmPage/specification.png" alt="specifications" class="w-1/3 max-w-[450px] img-shadow">
      </div>
    </div>

    <div class="bg-white py-[120px] relative">
      <div class="container mx-auto flex items-center">
        <div class="flex flex-col">
          <h2 class="text-[110px]" style="text-shadow: 2px 2px 5px #92A1A8">
            Affordable <br>
            luxury <br>
            packaging
          </h2>
          <p class="text-[30px] mt-4">
            American Health Gate's exclusive packing, setting <br>
            a new standard a unique blend of luxury and quality.
          </p>
        </div>
        <div>
          <img src="~/assets/images/affordable-packaging2.png" alt="Affordable Packaging" class="float-right">
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
.img-shadow{
 filter:drop-shadow(2px 2px 5px rgba(0,0,0,0.5));
}
</style>