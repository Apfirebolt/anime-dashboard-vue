<template>
  <nav
    aria-label="Page navigation example"
    class="flex justify-center items-between bg-primary-500"
  >
    <ul class="list-style-none container flex my-3 px-2 py-1">
      <li @click="onPageChange(page + 1)" v-for="(index, page) in totalPages">
        <span
          class="relative block bg-gray-100 mx-1 cursor-pointer rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-primary-700 hover:text-white text-white"
          >{{ page + 1 }}
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
