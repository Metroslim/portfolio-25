<script setup lang="ts">
import { RouterView } from 'vue-router'
import PortfolioHeader from './components/PortfolioHeader.vue'
</script>

<template>
  <main class="h-dvh snap-y snap-mandatory overflow-y-auto">
    <section class="h-full snap-always snap-center">
      <PortfolioHeader />
    </section>
    <RouterView />
  </main>
</template>
