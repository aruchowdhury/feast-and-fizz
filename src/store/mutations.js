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

export function setSearchedDrinks(state, drinks) {
  state.searchedDrinks = drinks || [];
}

export function setDrinksByLetter(state, drinks) {
  state.drinksByLetter = drinks || [];
}

export function setDrinksCategory(state, drinkCategories) {
  state.drinksCategory = drinkCategories || [];
}

export function setDrinksByCategory(state, drinks) {
  state.drinksByCategory = drinks || [];
}
