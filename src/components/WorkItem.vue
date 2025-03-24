<script setup lang="ts">
import type { WorkData } from '@/models/WorkData'

defineProps<{
  work: WorkData
}>()
</script>

<template>
  <div
    class="item relative h-full w-full bg-gradient-to-r group-odd:from-purple-500 group-odd:to-pink-500 group-even:from-sky-500 group-even:to-indigo-500 overflow-hidden"
  >
    <img
      class="absolute p-[15px] h-full w-full lg:p-0 lg:h-[70%] lg:w-[initial] lg:aspect-[4/3] lg:top-[55%] lg:left-[55%] lg:translate-x-[-50%] lg:translate-y-[-50%] object-cover z-0"
      :src="work.backgroundImagePath"
      alt="Work Item Background"
      name="background"
    />
    <div class="p-[30px] h-full w-full relative z-5 flex flex-col">
      <h3 class="text-4xl text-white font-bold">
        {{ work.name }}
      </h3>
      <p class="mt-[15px] text-3xl text-black italic font-bold">For {{ work.client }}</p>
      <div class="mt-[30px] text-black bg-white p-3">
        <p class="text-xs font-semibold">{{ work.description }}</p>
        <p class="mt-2 text-xs underline underline-offset-4 decoration-dotted">Responsabilities:</p>
        <ul class="text-xs list-disc mt-2 ml-3">
          <li v-for="responsability in work.responsabilities" v-bind:key="responsability">
            {{ responsability }}
          </li>
        </ul>
      </div>
      <ul class="text-md text-white mt-auto justify-around flex flex-wrap py-2 px-6 bg-black">
        <li v-for="tag in work.tags" v-bind:key="tag" class="mr-4 last:mr-0">
          {{ tag }}
        </li>
      </ul>
    </div>
  </div>
</template>
