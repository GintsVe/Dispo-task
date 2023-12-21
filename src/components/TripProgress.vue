<script setup>
defineProps({
  title: String,
  date: String,
});
</script>

<template>
  <div class="flex items-center text-xs">
    <img
      :class="['h-4  mr-2  rounded-full', !date ? 'bg-gray-300' : 'bg-sky-600']"
      src="../assets/check.svg"
      alt="check"
    />
    <p :class="['font-semibold ', !!!date && 'text-gray-400']">
      {{ title }}
    </p>
    <p class="px-1" v-if="!!date">-</p>
    <p :class="['font-semibold  text-gray-300']" v-if="!!date">
      {{ date }}
    </p>
  </div>
</template>
