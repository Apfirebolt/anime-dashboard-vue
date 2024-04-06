<template>
  <main class="min-w-0 border-t border-gray-200">
    <div class="px-6 py-4 md:px-12 bg-gray-300 overflow-hidden">
      <h2 class="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
        Jikan API
      </h2>
      <h3 v-if="dataLoaded"
        class="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
        Characters Page
      </h3>
      <p v-else>
        Data loading ..
      </p>
    </div>
  </main>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import httpClient from "../plugins/interceptor";

const apiData = ref([])
const dataLoaded = ref(false);
const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    const data = {
      name: 'John'
    }
    res(data)
  }, 4000)
})

const fetchData = async () => {
  let response = await httpClient.get('anime?q=naruto&sfw')
  let response2 = await p1;
  if (response && response2) {
    dataLoaded.value = true;
    apiData.value = response.data.data;
  }
}

fetchData();

</script>