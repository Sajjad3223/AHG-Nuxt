<template>
  <div>
    <div class="relative w-full grid place-items-center">
      <img src="~/assets/images/HomeBanner.jpg" alt="home banner" class="w-full max-h-screen object-cover"/>
      <div class="absolute container mx-auto">
        <p class="text-[128px] text-white" style="text-shadow: 4px 4px 5px rgba(126,133,144,0.5)">
          Seizing <br>
          the future <br>
          of <span class="text-blackColor">Healthcare</span>
        </p>
        <p class="text-[36px] mt-4">
          Crafting beloved technology at AHG, where better <br>
          health seamlessly integrates into daily living.
        </p>
      </div>
    </div>
    <div class="bg-blackColor w-full text-white">
      <div class="container mx-auto py-[180px] flex flex-col items-stretch">
        <p class="text-[30px]">
          American Health Gate is at the forefront of healthcare technology, offering advanced devices <br>
          such as Digital Blood Glucose Monitors, Digital Blood Pressure Monitor, <br>
          Digital Thermometer and Digital Body Scale.
        </p>
        <p class="mt-4 text-[30px]">Redefining healthcare innovation for improved outcomes and a modern patient experience. </p>
        <h2 class="my-8 text-[64px]">
          Our Healthcare Products Range
        </h2>
        <div class="border border-white rounded-[30px] min-h-[400px] flex items-center justify-between relative px-14">
          <div class="flex flex-col space-y-12">
            <h4 class="text-[50px]">
              BLOOD PRESSURE MONITORS
            </h4>
            <p>
              Our advanced technology ensures precise readings, providing <br>
              you with the confidence and information <br>
              you need to stay healthy.
            </p>
            <button class="bg-white rounded-[8px] flex items-center gap-4 w-max px-4 py-2 mt-8 text-blackColor">
              <span>Discover all BP monitors</span>
              <svg id="Isolation_Mode" data-name="Isolation Mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.88 21.73" class="w-2">
                <polyline stroke-miterlimit="10" fill="none" stroke="#1a1b1d" stroke-width="1" points=".35 .36 11.16 10.97 .35 21.37"/>
              </svg>
            </button>
          </div>
          <img src="~/assets/images/Blood-Pressure.png" class="max-h-[270px] img-shadow mx-auto" alt="Blood Pressure"/>
        </div>
        <div class="border border-white rounded-[30px] min-h-[400px] flex items-center justify-between relative px-14 mt-7">
          <div class="flex flex-col space-y-12">
            <h4 class="text-[50px]">
              BLOOD GLUCOSE MONITORS
            </h4>
            <p>
              Empower yourself with easy and accurate blood sugar <br>
              checks using a meter personalized <br>
              to enhance your lifestyle.
            </p>
            <button class="bg-white rounded-[8px] flex items-center gap-4 w-max px-4 py-2 mt-8 text-blackColor">
              <span>Discover all BG monitors</span>
              <svg id="Isolation_Mode" data-name="Isolation Mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.88 21.73" class="w-2">
                <polyline stroke-miterlimit="10" fill="none" stroke="#1a1b1d" stroke-width="1" points=".35 .36 11.16 10.97 .35 21.37"/>
              </svg>
            </button>
          </div>
          <div class="flex relative items-center gap-5">
            <img src="~/assets/images/Blood-Glucose2.png" class="max-w-[270px] img-shadow object-contain bottom-0 mx-auto" alt="Blood Pressure"/>
            <img src="~/assets/images/Blood-Glucose4.png" class="max-h-[270px] img-shadow mx-auto" alt="Blood Pressure"/>
            <img src="~/assets/images/Blood-Glucose3.png" class="max-w-[140px] img-shadow mx-auto absolute bottom-1/2 translate-y-full left-1/4" alt="Blood Pressure"/>
          </div>
        </div>
        <h3 class="text-[50px] text-center my-[70px]">
          Experience AHG's devices – they're not just tools; <br>
          they're seamlessly integrated into your lifestyle.
        </h3>
        <div class="grid grid-cols-2 gap-7">
          <div class="border border-white rounded-[30px] min-h-[520px] flex items-start justify-between relative px-8 py-16">
            <div class="flex flex-col space-y-12">
              <h4 class="text-[50px]">
                DIGITAL BODY SCALES
              </h4>
              <p>
                The scale does not only measure weight, but gives you <br>
                the full body composition so that you know <br>
                more about your health.
              </p>
              <button class="bg-white rounded-[8px] flex items-center gap-4 w-max px-4 py-2 mt-8 text-blackColor">
                <span>Discover all Body Scales</span>
                <svg id="Isolation_Mode" data-name="Isolation Mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.88 21.73" class="w-2">
                  <polyline stroke-miterlimit="10" fill="none" stroke="#1a1b1d" stroke-width="1" points=".35 .36 11.16 10.97 .35 21.37"/>
                </svg>
              </button>
            </div>
            <img src="~/assets/images/Body-Scale2.png" class="absolute max-w-[270px] object-contain img-shadow bottom-12 right-12" alt="Body Scale"/>
          </div>
          <div class="border border-white rounded-[30px] min-h-[520px] flex items-start justify-between relative px-8 py-16">
            <div class="flex flex-col space-y-12">
              <h4 class="text-[50px]">
                DIGITAL THERMOMETERS
              </h4>
              <p>
                Effortlessly track the body temperature of your loved ones <br>
                while seamlessly measuring room temperature and <br>
                surface temperatures.
              </p>
              <button class="bg-white rounded-[8px] flex items-center gap-4 w-max px-4 py-2 mt-8 text-blackColor">
                <span>Discover all Thermometers</span>
                <svg id="Isolation_Mode" data-name="Isolation Mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.88 21.73" class="w-2">
                  <polyline stroke-miterlimit="10" fill="none" stroke="#1a1b1d" stroke-width="1" points=".35 .36 11.16 10.97 .35 21.37"/>
                </svg>
              </button>
            </div>
            <img src="~/assets/images/Thermometer.png" class="absolute max-w-[270px] object-contain img-shadow bottom-0 right-1/4 translate-x-12 -rotate-45" alt="Body Scale"/>
          </div>
        </div>
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
    <div class="w-full bg-white min-h-[380px] flex items-center justify-center">
      <div class="container flex flex-col items-center mx-auto">
        <span class="text-[65px]">You need support?</span>
        <span class="text-[28px]">Dedication to clients, dedication to products.</span>
        <div class="flex items-center gap-4 mt-8">
          <button class="bg-blackColor text-white rounded-[8px] w-[220px] h-[55px]">
            <span>Contact Us</span>
          </button>
          <button class="bg-blackColor text-white rounded-[8px] w-[220px] h-[55px]">
            <span>Manuals</span>
          </button>
        </div>
      </div>
    </div>
    <!-- Distribution Network -->
    <div class="w-full bg-blackColor min-h-[680px] flex items-center justify-center">
      <div class="container mx-auto flex flex-col">
        <p class="text-[114px] text-white">
          Join our <br>
          distribution network
        </p>
        <span class="text-[36px] font-light text-white">Partner with us to be a force for positive change in the world.</span>
        <NuxtLink to="/distributor" class="bg-white rounded-[8px] flex items-center gap-4 w-max px-4 py-2 mt-8">
          <span>Explore All</span>
          <svg id="Isolation_Mode" data-name="Isolation Mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.88 21.73" class="w-2">
            <polyline stroke-miterlimit="10" fill="none" stroke="#1a1b1d" stroke-width="1" points=".35 .36 11.16 10.97 .35 21.37"/>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.img-shadow{
 filter:drop-shadow(2px 2px 5px rgba(0,0,0,0.5));
}
</style>