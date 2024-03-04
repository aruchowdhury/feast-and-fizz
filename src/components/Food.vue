<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
    <router-link :to="{ name: 'fooddetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full object-cover aspect-[7/4]"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal?.strMeal }}</h3>
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
