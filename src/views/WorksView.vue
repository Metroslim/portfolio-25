<script setup lang="ts">
import WorksData from '../assets/datas/works.json'
import WorkItem from '../components/WorkItem.vue'
</script>

<template>
  <section
    v-for="work in WorksData"
    v-bind:key="work.name"
    class="group h-full snap-always snap-center"
  >
    <WorkItem :work="work" />
  </section>
</template>
