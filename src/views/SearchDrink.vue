<template>
  <div class="mt-2 container mx-auto p-4">
    <div class="relative">
      <div class="relative mx-auto sm:px-6 lg:px-8 rounded-xl">
        <div class="grid grid-cols-3 gap-4 md:gap-12 px-4 md:px-24">
          <button
            v-for="tab in tabs"
            :key="tab.name"
            @click="setActiveTab(tab.name)"
            :class="{
              'bg-primary-600 font-bold text-white scale-110 transition duration-200 ease-in-out':
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
          <DrinksByName />
        </div>
        <div v-if="tab.name === 'by letter'">
          <DrinksByLetter />
        </div>
        <div v-if="tab.name === 'by category'">
          <DrinksByCategory />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import DrinksByName from "../components/drinks/DrinksByName.vue";
import DrinksByCategory from "../components/drinks/DrinksByCategory.vue";
import DrinksByLetter from "../components/drinks/DrinksByLetter.vue";
import store from "../store";

const activeTab = ref("search meal");
const tabs = [
  { name: "by letter" },
  { name: "search meal" },
  { name: "by category" },
];

const setActiveTab = (tabName) => {
  activeTab.value = tabName;
};
</script>
