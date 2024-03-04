<template>
  <navbar />
  <loader v-if="!loaded" />
  <router-view v-if="loaded" />
  <footbar />
</template>

<script setup>
import Navbar from "./Navbar.vue";
import Footbar from "./Footbar.vue";
import Loader from "../Loader.vue";
import { ref } from "vue";

const loaded = ref(false);

setTimeout(() => {
  loaded.value = true;
}, 500);
</script>
