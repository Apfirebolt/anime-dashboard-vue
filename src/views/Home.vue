<template>
  <div class="h-full flex flex-col">
    <!-- Top nav-->
    <header class="flex-shrink-0 relative h-16 bg-white flex items-center">
      <!-- Logo area -->
      <div class="absolute inset-y-0 left-0 lg:static lg:flex-shrink-0">
        <a
          href="#"
          class="flex items-center justify-center h-16 w-16 bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 lg:w-20"
        >
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
            alt="Workflow"
          />
        </a>
      </div>

      <!-- Menu button area -->
      <div
        class="absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 lg:hidden"
      >
        <!-- Mobile menu button -->
        <button
          type="button"
          class="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
          @click="open = true"
        >
          <span class="sr-only">Open main menu</span>
          <MenuIcon class="block h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <!-- Desktop nav area -->
      <div
        class="hidden lg:min-w-0 lg:flex-1 lg:flex lg:items-center lg:justify-between"
      >
        <div class="min-w-0 flex-1">
          <div
            class="max-w-2xl ml-4 relative text-gray-400 focus-within:text-gray-500"
          >
            <label for="desktop-search" class="sr-only">Search anime</label>
            <input
              id="desktop-search"
              type="search"
              placeholder="Search anime"
              v-model="searchText"
              class="px-2 py-3 block w-full border-transparent pl-12 placeholder-gray-500 sm:text-sm"
            />
            <div
              class="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4"
            >
              <SearchIcon
                @click="searchAnimeUtil"
                class="h-5 w-5 cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div class="ml-10 pr-4 flex-shrink-0 flex items-center space-x-10">
          <nav aria-label="Global" class="flex space-x-10">
            <template v-for="item in navigation" :key="item.name">
              <Menu
                as="div"
                v-if="item.children.length"
                class="relative text-left"
              >
                <MenuButton
                  class="flex items-center text-sm font-medium text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
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
                          {{ child.name }}
                        </a>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
              <a
                v-else
                :href="item.href"
                class="text-sm font-medium text-gray-900"
                >{{ item.name }}</a
              >
            </template>
          </nav>
          <div class="flex items-center space-x-8">
            <Menu as="div" class="relative inline-block text-left">
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="origin-top-right absolute z-30 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700',
                        ]"
                      >
                        Your Profile
                      </a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700',
                        ]"
                      >
                        Sign Out
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide this `div` based on menu open/closed state -->
      <TransitionRoot as="template" :show="open">
        <Dialog
          as="div"
          class="fixed inset-0 z-40 lg:hidden"
          @close="open = false"
        >
          <TransitionChild
            as="template"
            enter="transition-opacity ease-linear duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay
              class="hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-600 sm:bg-opacity-75"
            />
          </TransitionChild>

          <TransitionChild
            as="template"
            enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300"
            enter-from="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
            enter-to="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
            leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300"
            leave-from="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
            leave-to="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
          >
            <nav
              class="fixed z-40 inset-0 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg"
              aria-label="Global"
            >
              <div class="h-16 flex items-center justify-between px-4 sm:px-6">
                <a href="#">
                  <img
                    class="block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=cyan&shade=400"
                    alt="Workflow"
                  />
                </a>
                <button
                  type="button"
                  class="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
                  @click="open = false"
                >
                  <span class="sr-only">Close main menu</span>
                  <XIcon class="block h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div class="mt-2 max-w-8xl mx-auto px-4 sm:px-6">
                <div class="relative text-gray-400 focus-within:text-gray-500">
                  <label for="mobile-search" class="sr-only"
                    >Search Anime</label
                  >
                  <input
                    id="mobile-search"
                    v-model="searchText"
                    type="search"
                    placeholder="Search all Anime"
                    class="px-2 py-3 block w-full border-gray-300 rounded-md pl-10 placeholder-gray-500 focus:border-blue-600 focus:ring-blue-600"
                  />
                  <div
                    class="absolute inset-y-0 left-0 flex items-center justify-center pl-3"
                  >
                    <SearchIcon class="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div class="max-w-8xl mx-auto py-3 px-2 sm:px-4">
                <template v-for="item in navigation" :key="item.name">
                  <a
                    :href="item.href"
                    class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                    >{{ item.name }}</a
                  >
                  <a
                    v-for="child in item.children"
                    :key="child.name"
                    :href="child.href"
                    class="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100"
                    >{{ child.name }}</a
                  >
                </template>
              </div>
              <div class="border-t border-gray-200 pt-4 pb-3">
                <div class="mt-3 max-w-8xl mx-auto px-2 space-y-1 sm:px-4">
                  <a
                    v-for="item in userNavigation"
                    :key="item.name"
                    :href="item.href"
                    class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                    >{{ item.name }}</a
                  >
                </div>
              </div>
            </nav>
          </TransitionChild>
        </Dialog>
      </TransitionRoot>
    </header>

    <!-- Bottom section -->
    <div class="min-h-0 flex-1 flex overflow-hidden">
      <!-- Main area -->
      <main class="min-w-0 flex-1 border-t border-gray-200 xl:flex">
        <section
          aria-labelledby="message-heading"
          class="min-w-0 flex-1 h-full flex flex-col overflow-hidden xl:order-last"
        >
          <div v-if="!isLoadingAnimeList" class="min-h-0 flex-1 overflow-y-auto">
            <!-- Thread section-->
            <ul role="list" class="py-4 space-y-2 sm:px-6 sm:space-y-4 lg:px-8">
              <li
                v-for="item in animeList.data"
                :key="item.id"
                class="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6"
              >
                <div class="sm:flex sm:justify-between sm:items-baseline">
                  <h3 class="text-base font-medium">
                    <span class="text-gray-900">{{ item.title }}</span>
                  </h3>
                </div>
                <div class="mt-4 space-y-6 text-sm text-gray-800">
                  <p>
                    {{ item.synopsis }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div v-else class="flex justify-center items-center my-3">
            <Loader />
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useAnime } from "../store/anime";
import Loader from "../components/Loader.vue";
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  ArchiveIcon as ArchiveIconSolid,
  ChevronDownIcon,
  SearchIcon,
} from "@heroicons/vue/solid";
import {
  ArchiveIcon as ArchiveIconOutline,
  BanIcon,
  FlagIcon,
  InboxIcon,
  MenuIcon,
  PencilAltIcon,
  UserCircleIcon,
  XIcon,
} from "@heroicons/vue/outline";

const open = ref(false);
const anime = useAnime();
const searchText = ref("");
let timeoutId;

const debouncedSearch = (value) => {
  if (timeoutId) clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    if (value.length > 3) {
      searchAnimeUtil();
    }
  }, 1000); // Adjust delay as needed (in milliseconds)
};

watch(searchText, debouncedSearch);

const searchAnimeUtil = () => {
  anime.searchAnimeAction(searchText.value);
};

const animeList = computed(() => anime.getAnimeList);
const isLoadingAnimeList = computed(() => anime.isLoading);

const navigation = [
  {
    name: "Inboxes",
    href: "#",
    children: [
      { name: "Technical Support", href: "#" },
      { name: "Sales", href: "#" },
      { name: "General", href: "#" },
    ],
  },
];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];

onMounted(() => {
  // Cleanup function to clear timeout on component unmount
  return () => clearTimeout(timeoutId);
});
</script>
