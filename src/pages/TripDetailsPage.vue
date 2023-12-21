<script setup>
import Button from "../components/Button.vue";
import CarrierInfo from "../components/CarrierInfo.vue";
import DateSelector from "../components/DateSelector.vue";
import Flag from "../components/Flag.vue";
import Rating from "../components/Rating.vue";
import RentalDetail from "../components/RentalDetail.vue";
import TripProgress from "../components/TripProgress.vue";
import Destination from "../components/Destination.vue";
</script>

<template>
  <div class="pt-24 mt-20 pb-16 px-32 bg-white rounded-3xl relative">
    <div class="shadow-md bg-white rounded-lg p-10 relative z-10 flex gap-10">
      <div class="flex-shrink-0">
        <div class="flex gap-6">
          <div class="flex flex-col gap-1">
            <div>
              <p class="text-xxs text-sky-500 font-bold leading-3">Active</p>
              <p class="font-bold">Chauffeur</p>
            </div>
            <img
              class="h-24 w-24 my-1 rounded-lg"
              src="../assets/photo-placeholder.png"
            />
            <p class="font-bold text-xs">Adam Lopoto</p>
            <Rating rating="4.8" />
          </div>
          <div class="border-r-2" />
          <div class="flex flex-col gap-3">
            <div class="flex gap-1 pb-2">
              <Flag flag="finland" />
              <Flag flag="france" />
              <Flag flag="germany" />
            </div>
            <CarrierInfo title="Name of carrier" value="Bambam SIA" />
            <CarrierInfo title="National reg. nb." value='"Miranda"' />

            <div
              class="rounded-lg w-10 h-10 bg-blue-500 flex justify-center items-center"
            >
              <img class="h-4" src="../assets/phone.svg" alt="Phone" />
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-1 py-5">
          <TripProgress title="Waiting chauffeur" date="14.06.2022 at 12:32" />
          <TripProgress title="Chauffeur assigned" date="14.06.2022 at 12:32" />
          <TripProgress title="Started" date="14.06.2022 at 12:32" />
          <TripProgress title="Trip in progress" />
          <TripProgress title="Finished" />
        </div>
      </div>
      <div class="flex-grow overflow-hidden">
        <div class="flex flex-col gap-6">
          <div class="flex justify-center gap-3">
            <Button title="Trip details" background="bg-indigo-950" />
            <Button title="Return trip details" fontBold="true" />
          </div>
          <div class="border-t-2" />
          <DateSelector />
        </div>
        <div class="py-7">
          <Destination
            title="Riga international airpot"
            sub-title="P133, Mārupe, LV1011"
            depart="16:45"
          />
          <div class="border-l-2 h-5 ml-[7px] border-l-black" />
          <Destination
            title="Lithuania airport"
            sub-title="Road name, LT223, Lithuania"
            arrive="17:20"
            depart="19:45"
          />
          <div class="border-l-2 h-5 ml-[7px] border-l-black" />
          <Destination
            title="Lithuania airport"
            sub-title="Road name, LT223, Lithuania"
            arrive="20:20"
            depart="21:45"
          />
        </div>
        <img class="h-60 w-full rounded-2xl" src="../assets/map.png" />
      </div>
    </div>
    <div
      class="pt-10 pb-16 w-11/12 bg-indigo-950 rounded-3xl absolute left-2/4 transform -translate-x-1/2 -top-14 flex flex-col justify-center items-center overflow-hidden"
    >
      <h1 class="text-dispo-light-gray text-2xl font-bold">
        Your daily rental details
      </h1>
      <div class="flex items-center gap-5 pb-2 pt-3">
        <RentalDetail
          title="Request #779"
          iconSrc="/src/assets/check-badge.svg"
        />
        <RentalDetail
          title="Trip starts: 18 feb - 11:00"
          iconSrc="/src/assets/calendar.svg"
        />
        <RentalDetail title="45 people" iconSrc="/src/assets/people.svg" />
        <Button
          class="border px-3"
          title="Paid 12$"
          background="bg"
          iconSrc="/src/assets/check.svg"
        />
        <button
          type="button"
          class="text-dispo-light-gray underline text-[11px] font-semibold"
        >
          view invoice
        </button>
      </div>
      <div class="flex gap-2 items-center">
        <img class="h-4" src="../assets/copy.svg" alt="copy" />
        <p class="text-gray-400 text-xxs leading-3">
          Copy your unique trip link
        </p>
      </div>
      <div
        class="absolute h-72 w-72 border-[1.75px] rounded-full -right-36 -bottom-32 border-white"
      >
        <div
          class="absolute h-8 w-8 left-[26px] top-[26px] border-[1.75px] rounded-full border-white"
        />
      </div>
    </div>
  </div>
</template>
