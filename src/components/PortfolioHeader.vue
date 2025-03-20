<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import * as THREE from 'three'
import RightArrowSVG from './../components/svg/RightArrowSVG.vue'

import { MarchingCubes } from 'three/addons/objects/MarchingCubes.js'
import { ToonShaderHatching } from 'three/addons/shaders/ToonShader.js'
import { onMounted } from 'vue'

let container: HTMLElement | null

let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer

let light: THREE.Light

const effectParams: any = {
  scale: 50,
  speed: 0.15,
  numBlobs: 30,
  resolution: 32,
  isolation: 50,
}

let effect: MarchingCubes

let time: number = 0
const clock = new THREE.Clock()

onMounted(() => {
  init()
})

function init() {
  container = document.getElementById('marchinecube-container')

  // CAMERA
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000)
  camera.position.set(0, 0, 60)

  // SCENE
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xffffff)

  // LIGHTS
  light = new THREE.DirectionalLight(0xffffff, 10)
  light.position.set(0.5, 0.5, 1)
  scene.add(light)

  // MATERIALS
  const material = createShaderMaterial(ToonShaderHatching, light)

  // MARCHING CUBES
  effect = new MarchingCubes(effectParams.resolution, material, false, false, 100000)
  effect.position.set(0, 0, 0)
  effect.scale.set(effectParams.scale, effectParams.scale, effectParams.scale)

  scene.add(effect)

  // RENDERER

  renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setAnimationLoop(animate)

  container?.appendChild(renderer.domElement)

  window.addEventListener('resize', onWindowResize)
}

//

function onWindowResize() {
  console.log('resize')
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
}

function createShaderMaterial(shader: any, light: THREE.Light) {
  const u = THREE.UniformsUtils.clone(shader.uniforms)

  const vs = shader.vertexShader
  const fs = shader.fragmentShader

  const material = new THREE.ShaderMaterial({ uniforms: u, vertexShader: vs, fragmentShader: fs })

  material.uniforms['uDirLightPos'].value = light.position

  return material
}

function updateCubes(object: MarchingCubes, time: number, numblobs: number) {
  object.reset()

  // fill the field with some metaballs
  const subtract = 12
  const strength = 1.2 / ((Math.sqrt(numblobs) - 1) / 4 + 1)

  for (let i = 0; i < numblobs; i++) {
    const ballx = Math.sin(i + 1.26 * time * (1.03 + 0.5 * Math.cos(0.21 * i))) * 0.27 + 0.5
    const bally = Math.abs(Math.cos(i + 1.12 * time * Math.cos(1.22 + 0.1424 * i))) * 0.77 // dip into the floor
    const ballz = Math.cos(i + 1.32 * time * 0.1 * Math.sin(0.92 + 0.53 * i)) * 0.27 + 0.5

    object.addBall(ballx, bally, ballz, strength, subtract)
  }

  object.update()
}

function animate() {
  render()
}

function render() {
  const delta = clock.getDelta()

  time += delta * effectParams.speed * 0.5

  updateCubes(effect, time, effectParams.numBlobs)
  renderer.render(scene, camera)
}
</script>

<template>
  <div
    class="fixed left-[20px] top-[120px] md:top-[25%] lg:left-[8%] xl:left-[16%] 2xl:left-[20%] lg:top-[15%] xl:top-[18%] 2xl:top-[20%] pointer-events-none"
  >
    <h1 class="text-6xl md:text-8xl lg:text-9xl font-bold">Arnaud Masson</h1>
    <h2 class="text-4xl md:text-6xl lg:text-7xl font-bold text-purple-500 mr-8">
      Senior Unity Developer
    </h2>
    <h3 class="text-2xl md:text-4xl font-semibold mt-8">MR, VR, AR, Interactive Experiences</h3>
  </div>
  <div class="fixed top-0 left-0 w-full h-full z-[-1] bg-white opacity-70"></div>
  <div id="marchinecube-container" class="fixed top-0 left-0 w-full h-full z-[-5]"></div>

  <div
    class="absolute right-0 bottom-[150px] md:right-auto md:left-[50%] md:bottom-[30%] lg:left-[55%] lg:bottom-[35%]"
  >
    <a
      class="flex flex-row items-center text-lg md:text-2xl font-semibold py-3 px-4 md:py-4 md:px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white"
      href="./pdf/Resume - Arnaud Masson - 2025.pdf"
      target="_blank"
    >
      <RightArrowSVG class="h-6 w-4 md:h-10 md:w-8 fill-white" />
      <span class="flex-initial">Download resume</span>
    </a>
  </div>
</template>
