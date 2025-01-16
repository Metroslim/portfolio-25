<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PortfolioHeader from './components/PortfolioHeader.vue'
</script>

<template>
  <main class="h-dvh snap-y snap-mandatory overflow-y-auto">
    <section class="h-full snap-always snap-center">
      <PortfolioHeader />

      <div class="wrapper">
        <nav>
          <RouterLink to="/">Works</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </section>
    <RouterView />
  </main>
</template>
