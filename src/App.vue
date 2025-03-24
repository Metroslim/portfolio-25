<script setup lang="ts">
import { RouterView } from 'vue-router'
import PortfolioHeader from './components/PortfolioHeader.vue'
</script>

<template>
  <main class="snap-y snap-mandatory overflow-y-auto relative h-dvh w-full">
    <PortfolioHeader />
    <RouterView />
  </main>
</template>
