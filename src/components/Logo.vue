<template>
  <div class="absolute inset-y-0 left-0 lg:static lg:flex-shrink-0">
    <router-link
      to="/"
      class="flex items-center justify-center h-16 w-16 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 lg:w-20"
    >
      <img class="h-16 w-auto" :src="Logo" alt="Workflow" />
    </router-link>
  </div>
</template>

<script setup>
import { inject } from "vue";
import Logo from "../assets/logo.png";

const message = inject("message");

if (message) {
  console.log(message); // Output: "Hello from parent!"
}
</script>
