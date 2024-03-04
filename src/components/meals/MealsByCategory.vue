<template>
  <div class="p-8 pb-0">
    <h1 class="font-bold mb-4 text-primary-500 text-center">
      Meals by Category
    </h1>
  </div>
  <div class="grid grid-cols-3 md:grid-cols-8 gap-2 mb-12">
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
</template>
<script setup>
import store from "../../store";
import { ref, computed, onMounted } from "vue";
import FoodGrid from "../FoodGrid.vue";

const categories = computed(() => store.state.mealsCategory);
const meals = computed(() => store.state.mealsByCategory);
const selectedName = ref(null);

onMounted(() => {
  store.dispatch("searchCategory");
});
const handleClick = (categoryName) => {
  selectedName.value = categoryName;
  store.dispatch("searchMealsByCategory", categoryName);
};
</script>
