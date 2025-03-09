<script setup lang="ts">
import WorksData from '../assets/datas/works.json'
import WorkItem from '../components/WorkItem.vue'

for (const work of WorksData) {
  console.log('URL Before: ', work.backgroundImagePath)
  work.backgroundImagePath = new URL(work.backgroundImagePath, import.meta.url).href
  console.log('URL After: ', work.backgroundImagePath)
}
</script>

<template>
  <div class="fixed bottom-[5%] w-full mb-8 pointer-events-none">
    <h2 class="text-6xl text-center font-bold mb-4">Works</h2>
    <object
      data="/ui/down-chevron.svg"
      type="image/svg+xml"
      class="h-14 w-28 mx-auto object-contain"
    />
  </div>
  <section
    v-for="work in WorksData"
    v-bind:key="work.name"
    class="group h-full snap-always snap-center"
  >
    <WorkItem :work="work" />
  </section>
</template>
