<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import * as THREE from 'three'

import Stats from 'three/addons/libs/stats.module.js'

import { MarchingCubes } from 'three/addons/objects/MarchingCubes.js'
import { ToonShaderHatching } from 'three/addons/shaders/ToonShader.js'
import { onMounted } from 'vue'

let container: HTMLElement | null, stats: Stats

let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer

let light: THREE.Light

const effectController: any = {
  scale: 50,
  speed: 0.15,
  numBlobs: 30,
  resolution: 32,
  isolation: 50,
}

let effect: MarchingCubes
let resolution: number

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
  effect = new MarchingCubes(effectController.resolution, material, false, false, 100000)
  effect.position.set(0, 0, 0)
  effect.scale.set(effectController.scale, effectController.scale, effectController.scale)

  scene.add(effect)

  // RENDERER

  renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setAnimationLoop(animate)

  container?.appendChild(renderer.domElement)

  // STATS
  //stats = new Stats()
  //container?.appendChild(stats.dom)

  // EVENTS
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

//

function animate() {
  render()
  //stats.update()
}

function render() {
  const delta = clock.getDelta()

  time += delta * effectController.speed * 0.5

  // marching cubes

  if (effectController.resolution !== resolution) {
    resolution = effectController.resolution
    effect.init(Math.floor(resolution))
  }

  if (effectController.isolation !== effect.isolation) {
    effect.isolation = effectController.isolation
  }

  updateCubes(effect, time, effectController.numBlobs)

  // render

  renderer.render(scene, camera)
}
</script>

<template>
  <div class="fixed left-[20%] top-[20%] pointer-events-none">
    <h1 class="text-9xl font-bold">Arnaud Masson</h1>
    <h2 class="text-7xl font-bold text-purple-500">Senior Unity Developer</h2>
    <h3 class="text-4xl font-semibold mt-8">MR, VR, AR, Interactive Experiences</h3>
  </div>
  <div class="fixed top-0 left-0 w-full h-full z-[-1] bg-white opacity-70"></div>
  <div id="marchinecube-container" class="fixed top-0 left-0 w-full h-full z-[-5]"></div>
</template>
