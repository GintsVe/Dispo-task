<script setup>
defineProps({ title: String, value: String });
</script>

<template>
  <div>
    <p class="text-dispo-gray text-xxs font-semibold">
      {{ title }}
    </p>
    <h1 class="text-xs font-bold">{{ value }}</h1>
  </div>
</template>
