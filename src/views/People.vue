<template>
  <main class="min-w-0 border-t border-gray-200">
    <div
      class="px-6 py-4 md:px-12 bg-gray-300 overflow-hidden"
    >
      <h2
        class="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium"
      >
        Jikan API
      </h2>
      <h3
        class="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed"
      >
        People Page
      </h3>
      {{ data }}
      <PeopleList />
    </div>
  </main>
</template>

<script setup>
import useApi from "../composables/useApi";
import { provide } from 'vue';
import PeopleList from "../components/PeopleList.vue";

const { data, error, fetchData } = useApi();

fetchData('people/1');

provide('apiData', data);
</script>
