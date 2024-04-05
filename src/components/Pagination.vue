<template>
  <nav
    aria-label="Page navigation example"
    class="flex justify-center items-between bg-primary-200"
  >
    <ul class="list-style-none container flex my-3 px-2 py-1">
      <li v-if="currentPage !== 1" @click="onPageChange(currentPage - 1)">
        <span
          class="relative block bg-gray-100 mx-1 cursor-pointer rounded px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-primary-700 hover:text-white text-gray-700"
          > Previous Page
        </span>
      </li>
      <li @click="onPageChange(page + 1)" v-for="(index, page) in totalPages">
        <span
          :class="{
            'bg-primary-700 text-white': currentPage === page + 1,
            'bg-gray-100 text-gray-700': currentPage !== page + 1,
          }"
          class="relative block mx-1 cursor-pointer rounded px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-primary-700 hover:text-white"
          >{{ page + 1 }}
        </span>
      </li>
      <li v-if="nextPage" @click="onPageChange(currentPage + 1)">
        <span
          class="relative block bg-gray-100 mx-1 cursor-pointer rounded px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-primary-700 hover:text-white text-gray-700"
          > Next Page
        </span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/outline";
const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  nextPage: {
    type: Boolean,
    required: true,
  },
  onPageChange: {
    type: Function,
    required: true,
  },
});
</script>
