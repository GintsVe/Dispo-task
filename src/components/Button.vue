<script setup>
defineProps({
  title: String,
  background: String | null,
  fontBold: Boolean | null,
  iconSrc: String | null,
});
</script>

<template>
  <button
    :class="[
      'py-1 px-6 rounded-full text-sm flex items-center gap-1 whitespace-nowrap ',
      background
        ? background + ' text-white hover:bg-indigo-900'
        : 'bg-transparent text-black border-2 hover:bg-slate-200',
      fontBold && 'font-bold',
    ]"
  >
    <p>{{ title }}</p>
    <img class="h-4" v-if="!!iconSrc" :src="iconSrc" />
  </button>
</template>
