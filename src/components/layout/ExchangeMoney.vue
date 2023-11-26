<script setup lang="ts">
import ExchangeTabBar from '../exchange/ExchangeTabBar.vue'
import NumberInput from '../exchange/NumberInput.vue'
import CurrencySwitch from '../exchange/CurrencySwitch.vue'
import InitTransactionButton from '../exchange/InitTransactionButton.vue'
</script>

<template>
  <div class="flex flex-row w-full h-full sm:justify-center">
    <div class="flex flex-col w-full h-80 items-center bg-white sm:w-96 sm:rounded-lg">
      <ExchangeTabBar />
      <div class="relative w-full">
        <div class="flex flex-col items-center pt-10 gap-6">
          <NumberInput label="Dólares" subtitle="Envías" />
          <NumberInput label="Soles" subtitle="Recibes" />
        </div>
        <div
          class="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-105"
        >
          <CurrencySwitch />
        </div>
      </div>
      <div class="h-5"></div>
      <InitTransactionButton />
    </div>
  </div>
</template>
