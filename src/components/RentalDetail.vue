<script setup>
defineProps({
  title: String,
  iconSrc: String | null,
});
</script>

<template>
  <div class="flex gap-2 items-center">
    <img class="h-5" :src="iconSrc" alt="icon" />
    <p class="text-dispo-light-gray text-[11px] font-semibold">{{ title }}</p>
  </div>
</template>
