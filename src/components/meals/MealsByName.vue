<template>
  <div class="py-8 pb-0">
    <h2 class="font-bold mb-4 text-slate-500 text-center">
      Search Meals by Name
    </h2>
  </div>
  <div class="pb-12">
    <input
      type="text"
      class="rounded border-2 bg-white border-primary-200 focus:ring-primary-500 focus:border-primary-500 w-full"
      placeholder="Type search word"
      v-model="keyword"
      @input="searchMeals"
    />
  </div>
  <div>
    <FoodGrid :meals="meals" />
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import store from "../../store";
import FoodGrid from "../FoodGrid.vue";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

onMounted(() => {
  store.dispatch("searchMeals", "Salmon");
});

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}
</script>
