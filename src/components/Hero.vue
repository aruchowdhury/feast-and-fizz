<template>
  <div class="">
    <div class="relative overflow-hidden">
      <div class="mt-32 lg:m-0 mx-auto lg:py-32">
        <div class="relative z-10 text-center">
          <h1
            class="text-4xl text-start tracking-tight leading-10 font-extrabold text-slate-300 sm:text-5xl sm:leading-none md:text-6xl lg:text-7xl"
          >
            Try it and Make it
            <span class="text-primary-600 font-extrabold"> !</span>
            <br />
            <span class="text-primary-600"> Cooking and cocktail idea. </span>
          </h1>
          <p
            class="mt-4 max-w-md lg:text-2xl text-slate-400 sm:text-lg text-start md:mt-5 md:max-w-3xl"
          >
            Elevate your culinary experience with our exclusive food and drink
            menu services. Indulge in exquisite flavors and extraordinary
            moments.
          </p>
          <ul class="mt-12 flex justify-start gap-4 align-middle">
            <li
              class="shadow flex items-center justify-center px-8 py-3 text-base font-semibold rounded-md text-primary-400 bg-white hover:text-white hover:bg-primary-400 transition duration-150 ease-in-out"
            >
              <router-link :to="{ name: 'searchdrink' }"
                >Find Drinks</router-link
              >
            </li>
            <li
              class="shadow flex items-center justify-center px-8 py-3 text-base font-semibold rounded-md text-white border-2 border-primary-300 bg-primary-300 hover:border-2 hover:text-primary-400 hover:border-primary-400 hover:bg-transparent transition duration-150 ease-in-out"
            >
              <router-link :to="{ name: 'searchmeal' }">Find Meals</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="absolute lg:inset-y-0 lg:left-0 top-0 lg:w-1/2">
        <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-10"
          src="../assets/hero_2.png"
          alt="Delicious Food"
        />
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-80"
          src="../assets/hero_1.png"
          alt="Delicious Food"
        />
      </div>
    </div>
  </div>
</template>
<script setup></script>
