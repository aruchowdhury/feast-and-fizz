<template>
  <div class="mt-2 container mx-auto p-4">
    <div class="relative">
      <div class="relative mx-auto sm:px-6 lg:px-8 rounded-xl">
        <h1 class="font-semibold text-center pt-4 pb-8">
          Explore Our Key Features
        </h1>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <button
            v-for="tab in tabs"
            :key="tab.name"
            @click="setActiveTab(tab.name)"
            :class="{
              'bg-primary-600  text-white scale-110 transition duration-200 ease-in-out':
                activeTab === tab.name,
              'bg-primary-300  text-slate-500 hover:bg-primary-500 ':
                activeTab !== tab.name,
            }"
            class="shadow-lg px-4 py-2 text-center mb-2 text-ld lg:text-xl rounded capitalize"
          >
            {{ tab.name }}
          </button>
        </div>
      </div>
    </div>

    <div class="py-4 mx-4">
      <div
        v-for="tab in tabs"
        :key="tab.name"
        :class="{ hidden: tab.name !== activeTab }"
      >
        <div v-if="tab.name === 'search meal'">
          <SearchByName />
        </div>
        <div v-if="tab.name === 'search by letter'">
          <SearchByLetter />
        </div>
        <div v-if="tab.name === 'search by ingredient'">
          <SearchByIngredient />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SearchByName from "../components/SearchByName.vue";
import SearchByIngredient from "../components/SearchByIngredient.vue";
import SearchByLetter from "../components/SearchByLetter.vue";

const activeTab = ref("search meal");
const tabs = [
  { name: "search by letter" },
  { name: "search meal" },
  { name: "search by ingredient" },
];

const setActiveTab = (tabName) => {
  activeTab.value = tabName;
};
</script>

<style scoped></style>
