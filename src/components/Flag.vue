<script setup>
defineProps({
  flag: String,
});
</script>

<template>
  <img
    class="h-3 rounded-sm"
    :src="'/src/assets/' + flag + '-flag.png'"
    :alt="flag"
  />
</template>
