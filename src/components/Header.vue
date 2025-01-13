<template>
  <header class="bg-gray-800 text-white py-4">
    <div class="container mx-auto text-center">
      <p class="text-sm">
        Awesome Header
      </p>
    </div>
  </header>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: 'AppHeader'
  }
});
</script>
