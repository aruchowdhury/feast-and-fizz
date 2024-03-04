<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
    <Food v-for="meal of meals" :key="meal.idCategory" :meal="meal" />
  </div>
  <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
    There are no meals
  </div>
</template>

<script setup>
import Food from "./Food.vue";

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  },
});
</script>
