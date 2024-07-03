
<template>
  <div class="flex flex-col">
    <div class="w-full bg-blackColor flex items-center justify-center min-h-[90vh] text-white">
      <div class="flex flex-col lg:flex-row gap-5 items-center container mx-auto">
        <div class="flex flex-col  lg:w-1/2 xl:w-3/5">
          <h1 class="text-2xl leading-[1]" style="text-shadow: 7px 7px 5px rgba(0,0,0,0.5)">
            Contact Us
          </h1>
          <p class="text-base my-10 leading-tight">
            We value your interest in our products and stand ready to support you. <br>
            Let us assist you in finding the perfect solution that meets your needs and preferences.
          </p>
        </div>
        <img src="~/assets/images/world2.png" alt="world"
        class="img-shadow lg:absolute -translate-y-16 right-0 max-w-[95vw] sm:max-w-[80vw] md:max-w-[60vw] xl:max-w-[50vw] 2xl:max-w-[45vw] origin-right"/>
      </div>
    </div>

    <div class="w-full text-xl h-[100px] bg-lightColor text-blackColor flex items-center justify-center">
      Get in touch
    </div>
    <div class="bg-blackColor py-[100px] flex justify-center items-center" >
      <div class="flex flex-col container mx-auto text-white">
        <form class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
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

    <div class="w-full text-xl h-[100px] bg-lightColor text-blackColor flex items-center justify-center">
      Where to find us
    </div>

    <div class="bg-blackColor py-[100px] flex justify-center items-center" >
      <div class="flex flex-col container mx-auto text-white space-y-12 text-base">
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