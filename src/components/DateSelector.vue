<script setup>
import Button from "./Button.vue";
</script>

<template>
  <div class="flex items-center gap-3">
    <button
      class="w-9 h-6 bg-gray-200 rounded-full flex justify-center items-center"
    >
      <img class="h-3" src="../assets/arrow-left.svg" alt="left" />
    </button>
    <div class="flex gap-3 overflow-x-auto no-scrollbar relative">
      <Button title="6 November" background="bg-blue-500" />
      <Button title="7 November" />
      <Button title="8 November" />
      <Button title="9 November" />
      <Button title="10 November" />
      <Button title="11 November" />
    </div>
    <button
      class="w-9 h-6 bg-gray-200 rounded-full flex justify-center items-center"
    >
      <img class="h-3" src="../assets/arrow-right.svg" alt="left" />
    </button>
  </div>
</template>
