
<template>
  <div class="flex flex-col">
    <div class="w-full bg-blackColor flex items-center justify-center h-[80vh] text-white">
      <div class="flex items-center container mx-auto relative">
        <div class="flex flex-col">
          <h1 class="text-[7vw] leading-[1]" style="text-shadow: 7px 7px 5px rgba(0,0,0,0.5)">
            Contact Us
          </h1>
          <p class="text-[36px] my-10 leading-tight w-1/2">
            We value your interest in our products and stand ready to support you. <br>
            Let us assist you in finding the perfect solution that meets your needs and preferences.
          </p>
        </div>
        <img src="~/assets/images/world2.png" alt="world"
        class="absolute -right-20 img-shadow"/>
      </div>
    </div>

    <div class="w-full text-[64px] h-[100px] bg-lightColor text-blackColor flex items-center justify-center">
      Get in touch
    </div>
    <div class="bg-blackColor py-[100px] flex justify-center items-center" >
      <div class="flex flex-col container mx-auto text-white">
        <form class="grid grid-cols-2 gap-x-16 gap-y-10">
          <BaseAHGInput name="Name" v-model="Name" label="Name" />
          <BaseAHGInput name="CellPhone" v-model="CellPhone" label="Cell Phone" />
          <BaseAHGInput name="Company" v-model="Company" label="Company" />
          <BaseAHGInput name="WorkPhone" v-model="WorkPhone" label="Work Phone" />
          <BaseAHGInput name="Email" v-model="Email" label="Email" />
          <BaseAHGInput name="Country" v-model="Country" label="Country" />
          <BaseAHGInput name="WorkAddress" v-model="WorkAddress" label="Work Address" />
          <BaseAHGInput name="City" v-model="City" label="City" />
          <BaseAHGInput name="Message" v-model="Message" label="Message" class="col-span-full" multi-line/>
          <BaseAHGButton color="white" width="200px" class="col-span-full mx-auto">
            Submit
          </BaseAHGButton>
        </form>
      </div>
    </div>

    <div class="w-full text-[64px] h-[100px] bg-lightColor text-blackColor flex items-center justify-center">
      Where to find us
    </div>

    <div class="bg-blackColor py-[100px] flex justify-center items-center" >
      <div class="flex flex-col container mx-auto text-white space-y-12 text-[30px]">
        <p>
          American Health Gate LLC <br>
          2815 Elliott Avenue, Seattle, Washington 98121 USA
        </p>
        <p>
          Email: info@americanhealthgate.com <br>
          Tel: +1 (888) 881-3479
        </p>
      </div>
    </div>




  </div>
</template>

<script setup lang="ts">

const Name = ref();
const CellPhone = ref();
const Company = ref();
const WorkPhone = ref();
const Email = ref();
const Country = ref();
const WorkAddress = ref();
const City = ref();
const Message = ref();
</script>

<style scoped>
.img-shadow{
  filter:drop-shadow(2px 2px 5px rgba(0,0,0,0.5));
}
</style>