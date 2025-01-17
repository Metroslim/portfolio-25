<script setup lang="ts">
import WorksData from '../assets/datas/works.json'
import WorkItem from '../components/WorkItem.vue'
</script>

<template>
  <div class="absolute bottom-[5%] w-full">
    <h2 class="text-9xl text-center mb-8 font-bold">Works</h2>
    <object
      data="./ui/down-chevron.svg"
      type="image/svg+xml"
      class="h-16 w-32 mx-auto object-contain"
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
