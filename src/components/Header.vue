<template>
  <fwb-navbar solid class="bg-">
    <template #logo>
      <fwb-navbar-logo
        alt="Flowbite logo"
        image-url="https://zengo.com/wp-content/uploads/yobit_200x200@x2.png"
        link="#"
      >
        Yobir-Yobit
      </fwb-navbar-logo>
    </template>
    <ul class="flex justify-between xl:-[25%] lg:w-[30%]">
      <router-link to="/">
      <li>Home</li>
    </router-link>
      <router-link to="/history">
        <li>History</li>
      </router-link>
      <li>Result</li>
      <li>Authorization</li>
    </ul>
  </fwb-navbar>
</template>

<script setup>
import {
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from "flowbite-vue";
</script>
<style scoped>
:deep fwb-navbar {
  color: gray !important;
}
li:hover {
  color: #1d4ed8;
  cursor: pointer;
}
</style>
