<script setup>
defineProps({
  title: String,
  active: Boolean,
});
</script>

<template>
  <button
    type="button"
    class="flex font-bold items-center text-sm hover:text-sky-600"
    :class="active ? `text-sky-600` : `text-dispo-dark-blue`"
  >
    {{ title }}
  </button>
</template>
