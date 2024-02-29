<template>
  <header
    :class="showMenu ? 'bg-white' : 'bg-transparent'"
    class="py-4 mx-auto md:flex md:justify-between md:items-center"
  >
    <div class="flex items-center justify-between">
      <router-link to="/" class="w-64 hover:opacity-80">
        <img
          src="../assets/logo.png"
          alt="Logo"
          class="w-full h-full object-contain flex"
        />
      </router-link>
      <div @click="toggleNav" class="flex md:hidden">
        <button
          type="button"
          class="text-primary-500 hover:text-primary-600 hover:scale-105 duration-200"
        >
          <svg
            v-if="!showMenu"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <ul
      :class="showMenu ? 'flex' : 'hidden'"
      class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row items-center md:space-x-10 md:mt-0"
    >
      <li
        class="text-primary-500 text-lg hover:text-indigo-200 cursor-pointer hover:scale-105 duration-200"
      >
        <router-link :to="{ name: 'searchdrink' }">Search Drink</router-link>
      </li>
      <li
        class="text-primary-500 text-lg hover:text-indigo-200 cursor-pointer hover:scale-105 duration-200"
      >
        <router-link :to="{ name: 'searchmeal' }">Search Meal</router-link>
      </li>
      <li
        class="text-primary-500 text-lg hover:text-indigo-200 cursor-pointer hover:scale-105 duration-200"
      >
        <router-link :to="{ name: 'about' }">About</router-link>
      </li>
    </ul>
  </header>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>
