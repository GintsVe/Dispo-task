<script setup>
import NavSettingButton from "./NavSettingButton.vue";
import DispoLogo from "./DispoLogo.vue";
import NavButton from "./NavButton.vue";
import Button from "./Button.vue";
</script>

<template>
  <div class="flex justify-between items-center px-14">
    <div class="flex">
      <div class="flex items-center">
        <DispoLogo />
        <div class="flex pl-4 pt-2 gap-2">
          <NavSettingButton title="EUR" iconSrc="/src/assets/dollar-icon.svg" />
          <NavSettingButton title="English" iconSrc="/src/assets/world.svg" />
        </div>
      </div>
    </div>
    <div>
      <div class="flex gap-6 pt-2">
        <NavButton title="Transport" :active="true" />
        <NavButton title="Tours" />
        <NavButton title="Partners" />
        <NavButton title="About B2B" />
        <NavButton title="Contact" />
        <Button
          title="Book today"
          background="bg-dispo-dark-blue"
          :fontBold="true"
        />
        <NavButton title="Log in / Sign up" />
      </div>
    </div>
  </div>
</template>
