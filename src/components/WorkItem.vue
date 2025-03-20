<script setup lang="ts">
import type { WorkData } from '@/models/WorkData'

defineProps<{
  work: WorkData
}>()
</script>

<template>
  <div
    class="item relative h-full w-full bg-gradient-to-r group-odd:from-purple-500 group-odd:to-pink-500 group-even:from-sky-500 group-even:to-indigo-500"
  >
    <img
      class="absolute p-[15px] h-full w-full lg:p-0 lg:h-[70%] lg:w-[initial] lg:aspect-[4/3] lg:top-[55%] lg:left-[55%] lg:translate-x-[-50%] lg:translate-y-[-50%] object-cover z-0"
      :src="work.backgroundImagePath"
      alt="Work Item Background"
      name="background"
    />
    <div class="absolute h-full w-full z-5">
      <h3
        class="ml-[30px] mt-[30px] md:absolute md:left-[10%] md:top-[15%] lg:left-[10%] lg:top-[23%] xl:left-[15%] xl:top-[25%] text-4xl md:text-6xl xl:text-7xl text-white font-bold"
      >
        {{ work.name }}
      </h3>
      <span
        class="block ml-[30px] mt-[15px] md:absolute md:left-[10%] md:top-[27%] lg:left-[10%] lg:top-[32%] xl:left-[17%] xl:top-[35%] text-3xl text-black italic font-bold"
      >
        For {{ work.client }}
      </span>
      <div
        class="ml-[30px] mt-[30px] mr-[30px] md:absolute md:right-[10%] md:top-[40%] lg:left-[15%] lg:top-[40%] xl:left-[19%] xl:top-[42%] md:w-[460px] text-black px-6 pt-4 pb-6 bg-white"
      >
        <p class="text-xs md:text-lg">{{ work.description }}</p>
        <p
          class="text-xs md:text-lg mb-2 underline underline-offset-8 decoration-dotted mt-2 md:mt-4"
        >
          Responsabilities:
        </p>
        <ul class="list-disc pl-3 md:pl-8 text-xs md:text-lg">
          <li v-for="responsability in work.responsabilities" v-bind:key="responsability">
            {{ responsability }}
          </li>
        </ul>
      </div>
      <ul
        class="absolute justify-around flex-wrap lg:flex-nowrap left-[30px] right-[30px] bottom-[30px] md:left-[10%] md:right-[10%] md:bottom-[8%] lg:left-[initial] lg:right-[10%] lg:bottom-[8%] xl:right-[15%] xl:bottom-[12%] text-[14px] md:text-2xl text-white flex flex-row py-2 px-6 bg-black"
      >
        <li v-for="tag in work.tags" v-bind:key="tag" class="mr-4 last:mr-0">
          {{ tag }}
        </li>
      </ul>
    </div>
  </div>
</template>
