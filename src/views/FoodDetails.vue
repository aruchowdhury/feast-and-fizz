<template>
  <div class="container p-4 mx-auto flex flex-col lg:flex-row justify-between">
    <div class="lg:w-1/2 md:pe-2 lg:pe-4">
      <h1 class="text-4xl font-bold mb-5 text-orange-500">
        {{ meal.strMeal }}
      </h1>
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="aspect-[7/5] object-cover"
      />
    </div>
    <div class="lg:w-1/2 md:pl-2 lg:pl-4">
      <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
        <div>
          <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
        </div>
        <div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
        <div><strong class="font-bold">Tags:</strong> {{ meal.strTags }}</div>
      </div>
      <div class="my-3">
        {{ meal.strInstructions }}
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul>
            <template v-for="(el, ind) of new Array(20)">
              <li v-if="meal[`strIngredient${ind + 1}`]">
                {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-2">Measures</h2>
          <ul>
            <template v-for="(el, ind) of new Array(20)">
              <li v-if="meal[`strMeasure${ind + 1}`]">
                {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
        <div class="mt-4">
          <Button :href="meal.strYoutube" text="View on Youtube" />
          <a
            :href="meal.strSource"
            target="_blank"
            class="ml-3 px-3 py-2 rounded border-2 border-transparent transition-colors hover:text-primary-400"
          >
            View Original Source
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import fetchMealsClient from "../utils/fetchMealsClient.js";
import Button from "../components/Button.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  fetchMealsClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
