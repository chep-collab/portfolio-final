<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 lg:px-8"
    :style="{ backgroundImage: `url(/images/hero-bg.jpg)` }"
  >
    <div class="text-center text-white z-10 w-full max-w-3xl mx-auto">
      <!-- 🎯 Typing Effect -->
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold animate-fade-in-down leading-tight text-orange-500">
        Hi, I'm <span>{{ typedName }}</span><span class="animate-blink ml-1">|</span>
      </h1>

      <!-- 🔧 Subtitle -->
      <p class="mt-4 text-base sm:text-lg lg:text-xl text-gray-300 animate-fade-in-up delay-200">
        A fullstack developer specializing in Vue/Nuxt, Razor Pages, and scalable deployments —
        bringing frontend flair, backend logic, and polished experiences to life.
      </p>

      <!-- 🔗 CTA Buttons -->
      <div
        class="mt-8 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 animate-scale-in delay-400"
      >
        <a
          href="/assets/resume.pdf"
          download
          class="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 shadow hover:scale-105 font-semibold transition text-sm sm:text-base"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          class="bg-transparent border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-md hover:bg-orange-500 hover:text-white shadow hover:scale-105 font-semibold transition text-sm sm:text-base"
        >
          Hire Me
        </a>
        <a
          href="https://github.com/chep-collab"
          target="_blank"
          class="text-orange-300 underline px-6 py-3 font-semibold text-sm sm:text-base"
        >
          GitHub
        </a>
      </div>
    </div>

    <!-- 🌌 Background overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-blue-900/80"></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const fullName = 'Mercy Chepngeno'
const typedName = ref('')
let index = 0

function typeLoop() {
  typedName.value = ''
  index = 0
  const interval = setInterval(() => {
    typedName.value += fullName[index]
    index++
    if (index === fullName.length) {
      clearInterval(interval)
      setTimeout(typeLoop, 1400)
    }
  }, 150)
}

onMounted(typeLoop)
</script>