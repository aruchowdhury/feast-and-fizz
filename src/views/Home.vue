<template>
  <div class="container p-4 mx-auto">
    <hero />
    <h2 class="text-4xl font-bold my-8 text-primary-400 text-start">
      Terending Drinks
    </h2>
    <FoodGrid :meals="drinks" />
    <h2 class="text-4xl font-bold my-10 text-primary-400 text-start">
      Terending Meals
    </h2>
    <FoodGrid :meals="meals" />
  </div>
</template>

<script setup>
import Hero from "./../components/Hero.vue";
import { onMounted, ref } from "vue";
import FoodGrid from "../components/FoodGrid.vue";
import fetchMealsClient from "../utils/fetchMealsClient.js";
import fetchDrinksClient from "../utils/fetchDrinksClient";

const meals = ref([]);
const drinks = ref([]);

onMounted(async () => {
  for (let i = 0; i < 6; i++) {
    fetchMealsClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
    fetchDrinksClient
      .get(`random.php`)
      .then(({ data }) => drinks.value.push(data.drinks[0]));
  }
});
</script>
