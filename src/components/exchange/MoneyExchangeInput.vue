<script setup lang="ts">
import { toRef } from 'vue'
import CurrencyInput from './CurrencyInput.vue';

const props = defineProps({
  label: String,
  subtitle: String,
  modelValue: Number,
  options: Object
})
const modelValue = toRef(props, 'modelValue')
const options = toRef(props, 'options')
</script>

<template>
  <div
    class="flex flex-row h-12 w-[85%] border-[.08rem] border-purple-light rounded-md justify-between sm:w-72"
  >
    <div class="w-24 h-full bg-alt-grey text-center pt-3 text-sm rounded-l-md text-purple-light">
      {{ props.label }}
    </div>
    <div class="grid grid-cols-1 h-full pr-2">
      <span class="text-purplish text-sm font-normal place-self-end"> {{ props.subtitle }}</span>
      <CurrencyInput :value="modelValue" :options="options" />
    </div>
  </div>
</template>
