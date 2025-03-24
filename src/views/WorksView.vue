<script setup lang="ts">
import WorksData from '../assets/datas/works.json'
import WorkItem from '../components/WorkItem.vue'

/*
for (const work of WorksData) {
  console.log('URL Before: ', work.backgroundImagePath)
  work.backgroundImagePath = new URL(work.backgroundImagePath, import.meta.url).href
  console.log('URL After: ', work.backgroundImagePath)
}
  */
</script>

<template>
  <div class="absolute bottom-8 w-full">
    <h2 class="text-4xl text-center font-bold">Works</h2>
    <object
      data="./ui/down-chevron.svg"
      type="image/svg+xml"
      class="h-8 w-10 mx-auto object-contain mt-2"
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
