<script setup lang="ts">
import IconExchange from '../icons/IconExchange.vue'

const emitChange = defineEmits(['switch'])
</script>

<template>
  <button
    @click="() => emitChange('switch')"
    class="w-12 h-12 bg-purple-light flex flex-row justify-center items-center rounded-full hover:animate-spin"
  >
    <IconExchange />
  </button>
</template>
