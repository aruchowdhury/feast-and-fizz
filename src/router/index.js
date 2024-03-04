import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Layout from "../components/layout/Layout.vue";
import About from "../views/About.vue";
import SearchMeal from "../views/SearchMeal.vue";
import SearchDrink from "../views/SearchDrink.vue";
import FoodDetails from "../views/FoodDetails.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/about",
        name: "about",
        component: About,
      },
      {
        path: "/meal",
        name: "searchmeal",
        component: SearchMeal,
      },
      {
        path: "/drink",
        name: "searchdrink",
        component: SearchDrink,
      },
      {
        path: "/meal/:id",
        name: "fooddetails",
        component: FoodDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
