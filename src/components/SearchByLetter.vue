<template>
  <div class="py-8 pb-0">
    <h1 class="font-bold mb-4 text-slate-500">Meals by Letter</h1>
  </div>
  <div class="flex flex-wrap justify-center gap-3 mb-6">
    <span
      v-for="letter of letters"
      :key="letter"
      class="w-4 h-4 text-xl font-bold flex items-center justify-center text-primary-500 hover:text-slate-400 hover:scale-150 transition-all cursor-pointer"
    >
      {{ letter }}
    </span>
  </div>
</template>

<script setup>
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
</script>
