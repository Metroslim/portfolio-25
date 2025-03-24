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
      class="absolute p-[15px] md:p-[30px] h-full w-full object-cover z-0"
      :src="work.backgroundImagePath"
      alt="Work Item Background"
      name="background"
    />
    <div class="p-[30px] md:p-[60px] h-full w-full relative z-5 flex flex-col">
      <h3 class="text-4xl md:text-5xl text-white font-bold">
        {{ work.name }}
      </h3>
      <p class="mt-[15px] md:mt-[30px] text-3xl md:text-4xl text-black italic font-bold">
        For {{ work.client }}
      </p>
      <div class="mt-[30px] md:mt-[60px] p-3 md:p-5 lg:max-w-xl text-black bg-white">
        <p class="text-xs md:text-sm font-semibold">{{ work.description }}</p>
        <p class="mt-2 md:mt-6 text-xs md:text-sm underline underline-offset-4 decoration-dotted">
          Responsabilities:
        </p>
        <ul class="mt-2 ml-3 md:mt-4 text-xs md:text-sm list-disc">
          <li v-for="responsability in work.responsabilities" v-bind:key="responsability">
            {{ responsability }}
          </li>
        </ul>
      </div>
      <ul
        class="text-md md:text-lg text-white mt-auto justify-around flex flex-wrap py-2 px-6 bg-black"
      >
        <li v-for="tag in work.tags" v-bind:key="tag" class="mr-4 last:mr-0">
          {{ tag }}
        </li>
      </ul>
    </div>
  </div>
</template>
