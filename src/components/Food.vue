<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
    <router-link
      :to="{ name: 'fooddetails', params: { id: meal.idMeal || meal.idDrink } }"
    >
      <img
        :src="meal.strMealThumb || meal.strDrinkThumb"
        :alt="meal.strMeal || meal.strDrink"
        class="rounded-t-xl w-full object-cover aspect-[7/4]"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal?.strMeal || meal?.strDrink }}</h3>
      <div class="flex items-center justify-between pt-6">
        <Button text="Find more" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
