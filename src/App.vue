<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PortfolioHeader from './components/PortfolioHeader.vue'
</script>

<template>
  <main class="h-dvh snap-y snap-mandatory overflow-y-auto">
    <section class="h-full snap-always snap-center" :class="{ 'h-[45%]': $route.name === 'about' }">
      <PortfolioHeader />

      <div class="wrapper">
        <nav>
          <RouterLink to="/" :class="{ hidden: $route.name === 'works' }">Works</RouterLink>
          <RouterLink to="/about" :class="{ hidden: $route.name === 'about' }">About</RouterLink>
        </nav>
      </div>
    </section>
    <RouterView />
  </main>
</template>
