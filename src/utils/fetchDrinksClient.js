import axios from "axios";

const fetchDrinksClient = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
});

export default fetchDrinksClient;
