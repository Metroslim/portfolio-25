<script setup lang="ts">
import { RouterView } from 'vue-router'
import PortfolioHeader from './components/PortfolioHeader.vue'
import RightArrowSVG from './components/svg/RightArrowSVG.vue'
</script>

<template>
  <main class="h-dvh snap-y snap-mandatory overflow-y-auto">
    <section class="h-full snap-always snap-center">
      <PortfolioHeader />

      <div class="absolute left-[50%] bottom-[30%] lg:left-[55%] lg:bottom-[35%]">
        <nav>
          <a
            class="flex flex-row text-2xl font-semibold p-4 pr-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white"
            href="./pdf/Resume - Arnaud Masson - 2025.pdf"
            target="_blank"
          >
            <RightArrowSVG class="h-10 w-8 fill-white" />
            <span class="flex-initial">Download resume</span>
          </a>
        </nav>
      </div>
    </section>
    <RouterView />
  </main>
</template>
