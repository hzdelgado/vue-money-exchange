<script setup lang="ts">
import ExchangeTabBar from '../exchange/ExchangeTabBar.vue'
import NumberInput from '../exchange/NumberInput.vue'
import CurrencySwitch from '../exchange/CurrencySwitch.vue'
import InitTransactionButton from '../exchange/InitTransactionButton.vue'
import { ref } from 'vue'

const firstInputLbl = ref('Dólares')
const secondInputLbl = ref('Soles')
const exchangeTabRef = ref();
const selectedIndex = ref(0);

const switchLblValue = () => {
  firstInputLbl.value = firstInputLbl.value == 'Dólares' ? 'Soles' : 'Dólares'
  secondInputLbl.value = secondInputLbl.value == 'Soles' ? 'Dólares' : 'Soles'  
}


const handleSwitch = () => {
  switchLblValue();
  const newIndex = selectedIndex.value == 0? 1: 0;
  selectedIndex.value = newIndex;
  exchangeTabRef.value.switchSelectedTab(newIndex);
}

const handleSelectedIndex = (index: number) => {
  selectedIndex.value = index;
  switchLblValue();
}
</script>

<template>
  <div class="flex flex-row w-full h-full sm:justify-center">
    <div class="flex flex-col w-full h-80 items-center bg-white sm:w-96 sm:rounded-lg">
      <ExchangeTabBar ref="exchangeTabRef" @selectedIndex="handleSelectedIndex"/>
      <div class="relative w-full">
        <div class="flex flex-col items-center pt-10 gap-6">
          <NumberInput :label="firstInputLbl" subtitle="Envías" />
          <NumberInput :label="secondInputLbl" subtitle="Recibes" />
        </div>
        <div
          class="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-105"
        >
          <CurrencySwitch @switch="handleSwitch" />
        </div>
      </div>
      <div class="h-5"></div>
      <InitTransactionButton />
    </div>
  </div>
</template>
