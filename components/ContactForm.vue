<template>
  <form @submit.prevent="submitData" class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
    <BaseAHGInput required name="Name" v-model="Name" label="Name" />
    <BaseAHGInput required name="CellPhone" v-model="CellPhone" label="Cell Phone" />
    <BaseAHGInput name="Company" v-model="Company" label="Company" />
    <BaseAHGInput name="WorkPhone" v-model="WorkPhone" label="Work Phone" />
    <BaseAHGInput required name="Email" v-model="Email" label="Email" />
    <BaseAHGInput name="Country" v-model="Country" label="Country" />
    <BaseAHGInput name="WorkAddress" v-model="WorkAddress" label="Work Address" />
    <BaseAHGInput name="City" v-model="City" label="City" />
    <BaseAHGInput name="Message" v-model="Message" label="Message" class="col-span-full" multi-line />
    <BaseAHGButton type="submit" color="white" width="200px" class="col-span-full !py-4 !text-[20px] mx-auto">
      Submit
    </BaseAHGButton>
  </form>
</template>

<script lang="ts" setup>
import { useToast } from 'vue-toastification';
import type { MessageType } from '~/models/MessageType';
import { SendContactMessage } from '~/services/home.service';

const Name = ref('');
const CellPhone = ref('');
const Company = ref('');
const WorkPhone = ref('');
const Email = ref('');
const Country = ref('');
const WorkAddress = ref('');
const City = ref('');
const Message = ref('');

const toast = useToast();

const { contactType } = defineProps<{
  contactType: MessageType
}>()
onMounted(() => {
})
const submitData = async () => {
  var res = await SendContactMessage({
    email: Email.value,
    fullName: Name.value,
    messageBody: Message.value,
    callPhone: CellPhone.value,
    company: Company.value,
    type: contactType,
    city: City.value,
    country: Country.value,
    workAdress: WorkAddress.value,
    workPhone: WorkPhone.value
  });
  if (res.isSuccess) {
    Name.value = "";
    CellPhone.value = "";
    Company.value = "";
    WorkPhone.value = "";
    Email.value = "";
    Country.value = "";
    WorkAddress.value = "";
    City.value = "";
    Message.value = "";
    toast.success("Your message has been sent successfully!");
  }
}
</script>

<style></style>