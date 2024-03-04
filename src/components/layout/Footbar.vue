<template>
  <footer
    class="container mx-auto px-4 pt-12 pb-4 md:flex md:items-center md:justify-between"
  >
    <p class="text-primary-300 sm:text-center">
      &copy; {{ year }}
      <router-link :to="{ name: 'home' }" class="hover:underline"
        >Feast&Fizz™</router-link
      >. All Rights Reserved.
    </p>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-small sm:mt-0">
      <li>
        <router-link
          :to="{ name: 'about' }"
          class="hover:underline me-4 md:me-6 text-primary-300"
          >About</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'home' }"
          class="hover:underline me-4 md:me-6 text-primary-300"
          >Privacy Policy</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'home' }"
          class="hover:underline text-primary-300"
          >Contact</router-link
        >
      </li>
    </ul>
  </footer>
</template>

<script setup>
import { ref } from "vue";
const year = ref(new Date().getFullYear());
</script>
