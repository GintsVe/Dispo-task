<script setup>
defineProps({ rating: String });
</script>

<template>
  <p class="font-bold text-xs flex items-center gap-1">
    <span><img class="h-3" src="../assets/star.svg" alt="star" /></span
    >{{ rating }}
  </p>
</template>
