<template>
  <div class="ml-10 pr-4 flex-shrink-0 flex items-center space-x-10">
    <nav aria-label="Global" class="flex space-x-10">
      <template v-for="item in navigation" :key="item.name">
        <Menu as="div" v-if="item.children.length" class="relative text-left">
          <MenuButton
            class="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800"
          >
            <span>{{ item.name }}</span>
            <ChevronDownIcon
              class="ml-1 h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
          </MenuButton>

          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="origin-top-right absolute z-30 right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="py-1">
                <MenuItem
                  v-for="child in item.children"
                  @click="navigateTo(child.routeName)"
                  :key="child.name"
                  v-slot="{ active }"
                >
                  <a
                    :href="child.href"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                  >
                    {{ $t(child.routeText) }}
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
        <a v-else class="text-sm font-medium text-gray-900">{{ item.name }}</a>
      </template>
    </nav>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import {
  ArchiveIcon as ArchiveIconSolid,
  ChevronDownIcon,
} from "@heroicons/vue/solid";

defineProps({
  navigateTo: {
    type: Function,
    required: true,
  },
  navigation: {
    type: Array,
    required: true,
  },
});
</script>
