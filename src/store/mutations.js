export function setSearchedMeals(state, meals) {
  state.searchedMeals = meals || [];
}

export function setMealByLetter(state, meals) {
  state.mealsByLetter = meals || [];
}

export function setCategory(state, categories) {
  state.mealsCategory = categories || [];
}

export function setMealsByCategory(state, meals) {
  state.mealsByCategory = meals || [];
}
