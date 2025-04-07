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
    <div class="absolute top-0 left-0 w-full h-full bg-white opacity-20"></div>
    <div class="w-full max-w-6xl mx-auto h-full relative">
      <img
        class="brightness-[0.8] lg:brightness-[1] absolute p-[0.75rem] md:p-[2rem] lg:pt-[8rem] lg:pb-[6rem] lg:pl-[8rem] h-full w-full object-cover z-0"
        :src="work.backgroundImagePath"
        alt="Work Item Background"
        name="background"
      />
      <div class="p-[1.5rem] md:p-[4rem] h-full w-full relative z-5 flex flex-col">
        <h3
          class="text-3xl md:text-5xl lg:text-6xl smh:text-5xl lg:mt-[2rem] lg:ml-[-2rem] text-white font-bold"
        >
          {{ work.name }}
        </h3>
        <p
          class="mt-[1rem] md:mt-[2rem] mdh:mt-[1rem] text-xl md:text-3xl lg:text-4xl smh:text-3xl text-white italic font-bold"
        >
          For {{ work.client }}
        </p>
        <div
          class="mt-[2rem] md:mt-[3rem] mdh:mt-[2rem] p-3 md:p-5 text-xs md:text-sm smh:text-sm lg:text-base lg:max-w-xl text-black relative"
        >
          <div class="absolute top-0 bottom-0 left-0 right-0 bg-white/75 z-0"></div>
          <div class="relative z-1">
            <p class="font-semibold">{{ work.description }}</p>
            <p class="mt-2 md:mt-6 underline underline-offset-4 decoration-dotted">
              Responsabilities:
            </p>
            <ul class="mt-2 ml-3 md:mt-4 list-disc">
              <li v-for="responsability in work.responsabilities" v-bind:key="responsability">
                {{ responsability }}
              </li>
            </ul>
          </div>
        </div>
        <ul
          class="border-2 lg:border-4 border-white text-md md:text-base lg:text-lg smh:text-base lg:max-w-2xl lg:self-end lg:mb-4 text-white mt-auto justify-around flex flex-wrap py-2 px-6 bg-black"
        >
          <li v-for="tag in work.tags" v-bind:key="tag" class="mr-2 last:mr-0 md:mr-3">
            {{ tag }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
