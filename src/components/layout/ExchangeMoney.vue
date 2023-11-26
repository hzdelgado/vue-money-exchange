<script setup lang="ts">
import ExchangeTabBar from '../exchange/ExchangeTabBar.vue'
import MoneyExchangeInput from '../exchange/MoneyExchangeInput.vue'
import CurrencySwitch from '../exchange/CurrencySwitch.vue'
import InitTransactionButton from '../exchange/InitTransactionButton.vue'
import { ref, watch } from 'vue'
import { useRateStore } from '../../stores/rate'
import CurrencyNameEnum from '@/enums/CurrencyNameEnum'
import ExchangeModeEnum from '@/enums/ExchangeModeEnum'
import CurrencyCodeEnum from '@/enums/CurrencyCodeEnum'
import { storeToRefs } from 'pinia'

const firstInputLbl = ref(CurrencyNameEnum.DOLLAR.toString())
const secondInputLbl = ref(CurrencyNameEnum.SOL.toString())

const exchangeTabRef = ref()
const store = useRateStore()
const { salePrice, purchasePrice } = storeToRefs(store)
const exchangeMode = ref(ExchangeModeEnum.PURCHASE.toString())
const firstInputValue = ref('1000')
let secondInpuValue = ref('0.0')
const firstInputCurrency = ref({ currency: CurrencyCodeEnum.DOLLAR.toString() })
const secondInpuCurrency = ref({ currency: CurrencyCodeEnum.SOL.toString() })

watch(store, () => {
  secondInpuValue.value = (purchasePrice.value * 1000).toFixed(2);
})

function purchaseDollar(value: string) {
  return (parseFloat(value) * purchasePrice.value).toFixed(2)
}

function sellDollar(value: string) {
  return (parseFloat(value) / salePrice.value).toFixed(2)
}

const updateData = () => {
  firstInputLbl.value =
    exchangeMode.value == ExchangeModeEnum.SALE.toString()
      ? CurrencyNameEnum.SOL.toString()
      : CurrencyNameEnum.DOLLAR.toString()
  secondInputLbl.value =
    exchangeMode.value == ExchangeModeEnum.SALE.toString()
      ? CurrencyNameEnum.DOLLAR.toString()
      : CurrencyNameEnum.SOL.toString()
  firstInputCurrency.value =
    exchangeMode.value == ExchangeModeEnum.PURCHASE.toString()
      ? { currency: CurrencyCodeEnum.DOLLAR.toString() }
      : { currency: CurrencyCodeEnum.SOL.toString() }
  secondInpuCurrency.value =
    exchangeMode.value == ExchangeModeEnum.PURCHASE.toString()
      ? { currency: CurrencyCodeEnum.SOL.toString() }
      : { currency: CurrencyCodeEnum.DOLLAR.toString() }

  updateFirstChangeValue(firstInputValue.value)
}

const updateFirstChangeValue = (value: string) => {
  const purchase = purchaseDollar(value)
  const sale = sellDollar(value)
  secondInpuValue.value =
    exchangeMode.value == ExchangeModeEnum.PURCHASE.toString() ? purchase : sale
}

const updateSecondChangeValue = (value: string) => {
  const purchase = purchaseDollar(value)
  const sale = sellDollar(value)
  firstInputValue.value =
    exchangeMode.value == ExchangeModeEnum.PURCHASE.toString() ? sale : purchase
}

const handleSwitch = () => {
  const newIndex = exchangeMode.value == ExchangeModeEnum.PURCHASE.toString() ? 1 : 0
  exchangeMode.value =
    newIndex == 1 ? ExchangeModeEnum.SALE.toString() : ExchangeModeEnum.PURCHASE.toString()
  exchangeTabRef.value.updateHighlightedTab(newIndex)
  updateData()
}

const handleTabSelection = (index: number) => {
  const newMode =
    index == 0 ? ExchangeModeEnum.PURCHASE.toString() : ExchangeModeEnum.SALE.toString()
  exchangeMode.value = newMode
  updateData()
}
</script>

<template>
  <div class="flex flex-row w-full h-full sm:justify-center">
    <div class="flex flex-col w-full h-80 items-center bg-white sm:w-96 sm:rounded-lg">
      <ExchangeTabBar
        ref="exchangeTabRef"
        @selectedIndex="handleTabSelection"
        :buyPrice="purchasePrice.toString()"
        :sellPrice="salePrice.toString()"
      />
      <div class="relative w-full">
        <div class="flex flex-col items-center pt-10 gap-6">
          <MoneyExchangeInput
            :label="firstInputLbl"
            subtitle="Envías"
            v-model="firstInputValue"
            :options="firstInputCurrency"
            @change="(e: any) => updateFirstChangeValue(e.target.value)"
          />
          <MoneyExchangeInput
            :label="secondInputLbl"
            subtitle="Recibes"
            v-model="secondInpuValue"
            :options="secondInpuCurrency"
            @change="(e: any) => updateSecondChangeValue(e.target.value)"
          />
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
