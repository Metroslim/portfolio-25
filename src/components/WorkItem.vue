<script setup lang="ts">
import type { WorkData } from '@/models/WorkData'

defineProps<{
  work: WorkData
}>()
</script>

<template>
  <div
    class="item h-full w-full relative bg-gradient-to-r group-odd:from-purple-500 group-odd:to-pink-500 group-even:from-sky-500 group-even:to-indigo-500"
  >
    <img
      class="absolute h-[70%] aspect-[4/3] top-[55%] left-[55%] translate-x-[-50%] translate-y-[-50%] object-cover z-0"
      :src="work.backgroundImagePath"
      alt="Work Item Background"
      name="background"
    />
    <div class="absolute h-full w-full z-5">
      <h3 class="absolute left-[15%] top-[25%] text-7xl text-white font-bold">
        {{ work.name }}
      </h3>
      <div class="absolute left-[19%] top-[42%] w-[460px] text-black px-6 pt-4 pb-6 bg-white">
        <p class="text-lg">{{ work.description }}</p>
        <h4 class="mb-2 underline underline-offset-8 decoration-dotted mt-4">Responsabilities:</h4>
        <ul class="list-disc pl-8">
          <li v-for="responsability in work.responsabilities" v-bind:key="responsability" class="">
            {{ responsability }}
          </li>
        </ul>
      </div>
      <span class="absolute left-[17%] top-[35%] text-3xl text-black italic font-bold"
        >For {{ work.client }}</span
      >
      <ul
        class="absolute right-[15%] bottom-[15%] text-2xl text-white flex flex-row py-2 px-4 bg-black"
      >
        <li v-for="tag in work.tags" v-bind:key="tag" class="mr-4 last:mr-0">
          {{ tag }}
        </li>
      </ul>
    </div>
  </div>
</template>
