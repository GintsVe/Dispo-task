<script setup>
defineProps({
  title: String,
  iconSrc: String,
});
</script>

<template>
  <button
    type="button"
    class="flex font-bold items-center text-dispo-gray text-xs hover:text-sm"
  >
    <span class="p-1">{{ title }}</span>
    <img :src="iconSrc" class="h-5" alt="" />
  </button>
</template>
