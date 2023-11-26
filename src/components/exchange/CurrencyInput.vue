<template>
  <input ref="inputRef" class="w-22 text-purple-light text-right outline-none" type="text"/>
</template>

<script lang="ts">
import { watch } from 'vue'
import { useCurrencyInput, type CurrencyInputOptions } from 'vue-currency-input'

export default {
  name: 'CurrencyInput',
  props: {
    modelValue: String,
    options: Object
  },
  setup(props) {
    const { inputRef, setOptions, setValue } = useCurrencyInput(props.options as CurrencyInputOptions)

    watch(
      () => props.modelValue,
      (value) => {
        setValue(Number(value))
      }
    )

    watch(
      () => props.options,
      (options) => {
        setOptions(options as CurrencyInputOptions)
      }
    )

    return { inputRef }
  }
}
</script>
