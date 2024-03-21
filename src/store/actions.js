import fetchMealsClient from "../utils/fetchMealsClient.js";
import fetchDrinksClient from "../utils/fetchDrinksClient.js";

//Meal
export async function searchMeals({ commit }, keyword) {
  fetchMealsClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
}

export async function searchMealsByLetter({ commit }, letter) {
  fetchMealsClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setMealByLetter", data.meals);
  });
}

export async function searchCategory({ commit }) {
  fetchMealsClient.get(`categories.php`).then(({ data }) => {
    commit("setCategory", data.categories);
  });
}

export async function searchMealsByCategory({ commit }, categoryName) {
  fetchMealsClient.get(`filter.php?c=${categoryName}`).then(({ data }) => {
    commit("setMealsByCategory", data.meals);
  });
}

//Drinks
export async function searchDrinks({ commit }, keyword) {
  fetchDrinksClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedDrinks", data.drinks);
  });
}

export async function searchDrinksByLetter({ commit }, letter) {
  fetchDrinksClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setDrinksByLetter", data.drinks);
  });
}

export async function searchDrinksCategory({ commit }) {
  fetchDrinksClient.get(`list.php?c=list`).then(({ data }) => {
    commit("setDrinksCategory", data.drinks);
  });
}

export async function searchDrinksByCategory({ commit }, categoryName) {
  fetchDrinksClient.get(`filter.php?c=${categoryName}`).then(({ data }) => {
    commit("setDrinksByCategory", data.drinks);
  });
}
