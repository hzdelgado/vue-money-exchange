<script setup lang="ts">
import ExchangeMoney from '@/components/layout/ExchangeMoney.vue'
import TheWelcome from '@/components/layout/TheWelcome.vue'
</script>

<template>
  <div
    class="w-screen h-screen flex flex-col m-auto font-rubik sm:items-center sm:flex-row xl:max-w-screen-5xl"
  >
    <header class="flex-none sm:flex-1">
      <TheWelcome />
    </header>
    <main class="flex-1">
      <ExchangeMoney />
    </main>
  </div>
</template>
