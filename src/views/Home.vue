<template>
  <div class="container p-4 mx-auto">
    <hero />
    <h2 class="text-4xl font-bold my-4 text-slate-300 text-start">
      Find you next meal
    </h2>
    <div class="grid grid-cols-3 md:grid-cols-8 gap-2 mb-4">
      <span
        v-for="category of categories"
        :key="category.idCategory"
        @click="handleClick(category.strCategory)"
        class="block bg-white rounded p-1 mb-2 shadow cursor-pointer"
      >
        <p class="text-center text-lg">{{ category.strCategory }}</p>
      </span>
    </div>
    <FoodGrid :meals="meals" />
  </div>
</template>

<script setup>
import Hero from "./../components/Hero.vue";
import { computed, onMounted, ref } from "vue";
import store from "../store";
import FoodGrid from "../components/FoodGrid.vue";
import fetchMealsClient from "../utils/fetchMealsClient.js";

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 6; i++) {
    fetchMealsClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>
