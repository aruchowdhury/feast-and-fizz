<template>
  <a
    :href="href"
    target="_blank"
    :class="{ btnColor: !btnColor }"
    class="px-2 py-1 rounded border-1 text-sm bg-primary-600 text-white scale-110 transition duration-200 ease-in-out cursor-pointer"
  >
    <slot>{{ text }}</slot>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
  text: String,
  btnColor: String,
});
</script>
