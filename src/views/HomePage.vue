<script setup lang="ts">
import type ExchangeBoxVue from '@/components/ExchangeBox.vue'
</script>

<template>
  <div class="bg-indigo-500 w-screen h-screen">
    <header>
      <TheWelcome />
    </header>

    <main>
      <ExchangeBoxVue />
    </main>
  </div>
</template>
