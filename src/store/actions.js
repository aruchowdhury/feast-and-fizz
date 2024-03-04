import fetchMealsClient from "../utils/fetchMealsClient.js";

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
