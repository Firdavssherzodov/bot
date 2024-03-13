<template>
  <div class="border w-[40%] p-5 m-auto font-sans my-20 rounded-lg">
    <h1 class="text-center font-semibold text-lg">Post page</h1>
    <p class="">File</p>
    <fwb-file-input v-model="file" dropzone class="my-2" />
    <p>Description</p>

    <fwb-textarea
      v-model="message"
      :rows="6"
      placeholder="Write your message..."
      class="text-blue-700"
      label=""
    />

    <fwb-button
      size="xl"
      class="w-full my-5 border bg-blue-400-700 hover:bg-blue-100 hover:text-black py-4 border-lg"
      @click="SendMessage"
      >Send</fwb-button
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import { FwbFileInput } from "flowbite-vue";
import { FwbTextarea } from "flowbite-vue";
import { FwbButton } from "flowbite-vue";
import { useStore } from "@/stores/store.js";
import axios from "axios";
let store = useStore();
const message = ref(store.image);
const file = ref(null);

function SendMessage() {
  let data = {
    file: file.value,
    text: message.value,
  };
  axios.post("https://api", data);
  console.log('qanday');
}
</script>

<style scoped>
span {
  display: none !important;
}
</style>
