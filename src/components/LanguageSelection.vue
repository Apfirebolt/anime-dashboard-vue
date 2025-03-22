<template>
  <div class="ml-10 pr-4 flex-shrink-0 flex items-center space-x-10">
    <nav aria-label="Global" class="flex space-x-10">
      <template v-for="option in languageOption" :key="option.name">
        <Menu as="div" class="relative text-left">
          <MenuButton
            class="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800"
          >
            <span>{{ $t(option.name) }}</span>
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
                  v-for="language in option.children"
                  @click="changeLanguage(language.code)"
                  :key="language.name"
                  v-slot="{ active }"
                >
                  <p class="block px-4 py-2 text-sm text-gray-700">
                    {{ language.name }}
                  </p>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </template>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import {
  ArchiveIcon as ArchiveIconSolid,
  ChevronDownIcon,
} from "@heroicons/vue/solid";

const { t: $t, locale } = useI18n();
const languageOption = ref([
  {
    name: "choose_language",
    children: [
      { name: "English", code: "en" },
      { name: "German", code: "de" },
      { name: "Hindi", code: "hi" },
    ],
  },
]);

const changeLanguage = (code) => {
  locale.value = code;
};
</script>
