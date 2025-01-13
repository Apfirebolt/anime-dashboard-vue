<template>
    <div class="bg-primary-800 text-white py-4">
      <div class="container mx-auto text-center">
        <p class="text-sm">Inside the people list component</p>
      </div>
      <NestedPeople />
      {{ apiData }}
    </div>
  </template>
  
  <script setup>
import { inject } from 'vue';

const apiData = inject('apiData');
import NestedPeople from './NestedPeople.vue';
</script>
  