<script setup>
defineProps({
  title: String,
  subTitle: String,
  arrive: String,
  depart: String,
});
</script>

<template>
  <div class="flex items-center text-xs justify-between font-bold">
    <div class="flex items-center">
      <img class="h-4 mr-2" src="../assets/point.svg" alt="point" />
      <p>
        {{ title }}
        <span class="text-gray-400">{{ subTitle }}</span>
      </p>
    </div>
    <div class="flex gap-4">
      <div class="flex" v-if="arrive">
        <img class="h-4 mr-2" src="../assets/clock.svg" alt="point" />
        <p>Arrive: {{ arrive }}</p>
      </div>
      <div class="flex items-center" v-if="depart">
        <img class="h-4 mr-2" src="../assets/clock.svg" alt="point" />
        <p>Depart: {{ depart }}</p>
      </div>
    </div>
  </div>
</template>
