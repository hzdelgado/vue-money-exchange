<script setup lang="ts">
import { ref, toRef } from 'vue'
import PurpleButton from './PurpleButton.vue'
const selectedFirst = ref(true)
const selectedSecond = ref(false)
const emit = defineEmits(['selectedIndex'])

const props = defineProps({
  buyPrice: String,
  sellPrice: String,
})

const updateHighlightedTab = (index: number) => {
  selectedFirst.value = index == 0 ? true : false
  selectedSecond.value = index == 1 ? true : false
}

function onClick(index: number) {
  updateHighlightedTab(index)
  emit('selectedIndex', index)
}

const buyPrice = toRef(props, 'buyPrice')
const sellPrice = toRef(props, 'sellPrice')

defineExpose({
  updateHighlightedTab
})
</script>

<template>
  <div
    class="w-full h-16 grid grid-rows-1 grid-flow-col border-b-[.06rem] justify-evenly border-soft-grey"
  >
    <div class="place-self-end">
      <PurpleButton
        @click="() => onClick(0)"
        :selectedBtn="selectedFirst"
        label="Dólar compra"
        :changeValue="buyPrice"
      />
    </div>
    <div class="place-self-end">
      <PurpleButton
        @click="() => onClick(1)"
        :selectedBtn="selectedSecond"
        label="Dólar venta"
        :changeValue="sellPrice"
      />
    </div>
  </div>
</template>
