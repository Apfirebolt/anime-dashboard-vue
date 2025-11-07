<template>
  <div class="ml-10 pr-4 flex-shrink-0 flex items-center space-x-10">
    <nav aria-label="Global" class="flex space-x-10">
      <template v-for="item in navigation" :key="item.name">
        <Menu as="div" v-if="item.children.length" class="relative text-left">
          <MenuButton
            class="flex items-center gap-1 px-4 py-2.5 text-sm font-semibold text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <span>{{ $t("pages") }}</span>
            <ChevronDownIcon
              class="h-4 w-4 text-gray-400"
              aria-hidden="true"
            />
          </MenuButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="transform opacity-0 scale-95 -translate-y-2"
            enter-to-class="transform opacity-100 scale-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="transform opacity-100 scale-100 translate-y-0"
            leave-to-class="transform opacity-0 scale-95 -translate-y-2"
          >
            <MenuItems
              class="origin-top-right absolute z-30 right-0 mt-3 w-48 rounded-xl shadow-xl bg-white ring-1 ring-gray-200 focus:outline-none overflow-hidden"
            >
              <div class="py-2">
                <MenuItem
                  v-for="child in item.children"
                  @click="navigateTo(child.routeName)"
                  :key="child.name"
                  v-slot="{ active }"
                >
                  <a
                    :href="child.href"
                    :class="[
                      active ? 'bg-red-50 text-red-600' : 'text-gray-700',
                      'block px-4 py-2.5 text-sm font-medium transition-colors duration-150 cursor-pointer',
                    ]"
                  >
                    {{ $t(child.routeText) }}
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
        <a v-else class="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-200 cursor-pointer">{{ item.name }}</a>
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
