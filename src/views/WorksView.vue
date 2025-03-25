<script setup lang="ts">
import WorksData from '../assets/datas/works.json'
import WorkItem from '../components/WorkItem.vue'
</script>

<template>
  <div class="absolute bottom-6 md:bottom-12 w-full">
    <h2 class="text-4xl md:text-5xl text-center font-bold">Works</h2>
    <object
      data="./ui/down-chevron.svg"
      type="image/svg+xml"
      class="h-8 w-10 md:h-10 md:w-12 mx-auto object-contain mt-2"
    />
  </div>
  <section
    v-for="work in WorksData"
    v-bind:key="work.name"
    class="group h-dvh snap-always snap-start"
  >
    <WorkItem :work="work" />
  </section>
</template>
