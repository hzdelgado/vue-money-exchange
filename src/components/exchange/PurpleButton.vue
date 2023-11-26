<script setup lang="ts">
import { reactive, watch } from 'vue'

const props = defineProps({
  selectedBtn: Boolean,
  label: String,
  changeValue: String
})
const enabled = reactive({ color: props.selectedBtn ? 'text-alt-blue' : 'text-purplish' })

watch(props, (newProp) => {
  enabled.color = newProp.selectedBtn ? 'text-alt-blue' : 'text-purplish'
})
</script>

<template>
  <button :class="'grid grid-cols-1 gap-0 w-20 h-10 text-xs ' + enabled.color">
    <span class="font-normal">{{ label }}</span>
    <span class="font-medium">{{ changeValue }}</span>
    <span class="h-[.06rem] w-full bg-alt-blue" v-if="props.selectedBtn"></span>
  </button>
</template>
