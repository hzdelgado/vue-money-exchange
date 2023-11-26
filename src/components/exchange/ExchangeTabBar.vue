<script setup lang="ts">
import { ref } from 'vue'
import PurpleButton from './PurpleButton.vue'
const selectedFirst = ref(true)
const selectedSecond = ref(false)
const emit = defineEmits(['selectedIndex'])

const switchSelectedTab = (index: number) => {
  selectedFirst.value = index == 0 ? true : false
  selectedSecond.value = index == 1 ? true : false
}

function onClick(index: number) {
  switchSelectedTab(index)
  emit('selectedIndex', index)
}

defineExpose({
  switchSelectedTab
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
        changeValue="3.9239"
      />
    </div>
    <div class="place-self-end">
      <PurpleButton
        @click="() => onClick(1)"
        :selectedBtn="selectedSecond"
        label="Dólar venta"
        changeValue="3.222"
      />
    </div>
  </div>
</template>
