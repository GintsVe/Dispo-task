<script setup>
import TopNavBar from "./components/TopNavBar.vue";
import BottomNavBar from "./components/BottomNavBar.vue";
import TripDetailsPage from "./pages/TripDetailsPage.vue";
</script>

<template>
  <div class="min-h-screen bg-dispo-background flex justify-center py-5">
    <div class="max-w-screen-xl w-full flex flex-col justify-between">
      <TopNavBar />
      <TripDetailsPage />
      <BottomNavBar />
    </div>
  </div>
</template>
