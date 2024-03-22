<template>
  <div class="container p-4 mx-auto flex flex-col lg:flex-row justify-between">
    <div class="lg:w-1/2 md:pe-2 lg:pe-4">
      <h1 class="text-4xl font-bold mb-5 text-orange-500">
        {{ meal?.strMeal || drink?.strDrink }}
      </h1>
      <img
        :src="meal?.strMealThumb || drink?.strDrinkThumb"
        :alt="meal?.strMeal || drink?.strDrink"
        class="aspect-[7/5] object-cover"
      />
    </div>
    <div class="lg:w-1/2 md:pl-2 lg:pl-4">
      <div class="grid grid-cols-1 md:grid-cols-2 text-md py-2 gap-1">
        <div v-if="meal?.strCategory || drink?.strCategory" class="break-all">
          <strong class="font-bold">Category:</strong>
          {{ meal?.strCategory || drink?.strCategory }}
        </div>
        <div v-if="meal?.strArea || drink?.strArea" class="break-all">
          <strong class="font-bold">Area:</strong>
          {{ meal?.strArea || drink?.strArea }}
        </div>
        <div v-if="meal?.strTags || drink?.strTags" class="break-all">
          <strong class="font-bold">Tags:</strong>
          {{ meal?.strTags || drink?.strTags }}
        </div>
        <div v-if="drink?.strIBA" class="break-all">
          <strong class="font-bold">Genere:</strong>
          {{ drink?.strIBA }}
        </div>
        <div v-if="drink?.strAlcoholic" class="break-all">
          <strong class="font-bold">Type:</strong>
          {{ drink?.strAlcoholic }}
        </div>
        <div v-if="drink?.strGlass" class="break-all">
          <strong class="font-bold">Glass:</strong>
          {{ drink?.strGlass }}
        </div>
      </div>
      <div class="my-8 break-word text-lg">
        {{ meal?.strInstructions || drink?.strInstructions }}
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <h2 class="text-lg font-semibold mb-2">Ingredients</h2>
          <ul class="mb-2">
            <template v-for="(el, index) of new Array(20)">
              <li v-if="meal[`strIngredient${index + 1}`]">
                {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
              </li>
              <li v-if="drink[`strIngredient${index + 1}`]">
                {{ index + 1 }}. {{ drink[`strIngredient${index + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
        <div>
          <h2 class="text-lg font-semibold mb-2">Measures</h2>
          <ul class="mb-2">
            <template v-for="(el, index) of new Array(20)">
              <li v-if="meal[`strMeasure${index + 1}`]">
                {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
              </li>
              <li v-if="drink[`strMeasure${index + 1}`]">
                {{ index + 1 }}. {{ drink[`strMeasure${index + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
      </div>
      <div class="mt-8">
        <Button
          :href="meal.strYoutube || drink.strYoutube"
          text="View on Youtube"
        />
        <a
          :href="meal.strSource || 'https://www.thecocktaildb.com/api.php'"
          target="_blank"
          class="ml-3 px-3 py-2 rounded border-2 border-transparent transition-colors hover:text-primary-400 cursor-pointer"
        >
          View Original Source
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import fetchMealsClient from "../utils/fetchMealsClient.js";
import fetchDrinksClient from "../utils/fetchDrinksClient.js";
import Button from "../components/Button.vue";

const route = useRoute();
const meal = ref({});
const drink = ref({});

onMounted(() => {
  fetchMealsClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data?.meals[0] || {};
  });
  fetchDrinksClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    drink.value = data?.drinks[0] || {};
  });
});
</script>
