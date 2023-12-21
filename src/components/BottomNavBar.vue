<script setup>
import DispoLogo from "./DispoLogo.vue";
import NavButton from "./NavButton.vue";
</script>

<template>
  <div class="flex justify-between items-center px-14">
    <div>
      <div class="flex gap-6 pt-2">
        <NavButton title="Log in" />
        <NavButton title="Sign up" />
        <NavButton title="Partners" />
        <NavButton title="About" />
        <NavButton title="FAQ" />
      </div>
    </div>
    <DispoLogo />
    <div>
      <div class="flex gap-6 pt-2">
        <NavButton title="Terms of services" />
        <NavButton title="Privacy Policy" />
        <NavButton title="Cookies" />
      </div>
    </div>
  </div>
</template>
