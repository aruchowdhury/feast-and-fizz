<template>
  <div class="py-8 pb-0">
    <h1 class="font-bold mb-4 text-slate-500 text-center">Drinks by Letter</h1>
  </div>
  <div class="flex flex-wrap justify-center gap-3 mb-12">
    <span
      @click="handleLetterClick(letter)"
      v-for="letter of letters"
      :key="letter"
      :class="{ 'text-slate-400 scale-150': selectedLetter === letter }"
      class="w-4 h-4 text-xl font-bold flex items-center justify-center text-primary-500 hover:text-slate-400 hover:scale-150 transition-all cursor-pointer"
    >
      {{ letter }}
    </span>
  </div>
  <FoodGrid :meals="meals" />
</template>

<script setup>
import store from "../../store";
import { ref, computed, onMounted } from "vue";
import FoodGrid from "../FoodGrid.vue";

const selectedLetter = ref(null);
const meals = computed(() => store.state.drinksByLetter);

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

onMounted(() => {
  store.dispatch("searchDrinksByLetter", "A");
});
function handleLetterClick(letter) {
  selectedLetter.value = letter;
  store.dispatch("searchDrinksByLetter", letter);
}
</script>
