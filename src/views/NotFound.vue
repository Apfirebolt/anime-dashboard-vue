<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl font-bold mb-4">404 Not Found</h1>
    <p class="text-lg">The page you are looking for does not exist.</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
onMounted(() => {
    console.log('404 Not Found page mounted');
});
</script>

<style scoped>
/* Add your custom styles here */
</style>
