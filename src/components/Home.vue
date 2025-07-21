<template>
  <section
    id="home"
    class="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-gray-900 to-blue-900"
  >
    <!-- 👋 Text Content -->
    <div class="text-white z-10 w-full md:w-1/2 text-center md:text-left">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold animate-fade-in-down leading-tight text-orange-500">
        Hi, I'm <span>{{ typedName }}</span><span class="animate-blink ml-1">|</span>
      </h1>

      <p class="mt-4 text-base sm:text-lg lg:text-xl text-gray-300 animate-fade-in-up delay-200">
        A fullstack developer specializing in Vue/Nuxt, Razor Pages, and scalable deployments 
        bringing frontend flair, backend logic, and polished experiences to life.
      </p>

      <div
        class="mt-8 flex flex-col sm:flex-row flex-wrap justify-center md:justify-start items-center gap-4 animate-scale-in delay-400"
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

    <!-- 📸 Hero Image (Right Side) -->
    <div class="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center animate-fade-in-up delay-200">
      <img
        src="/hero-bg.jpeg"
        alt="Hero"
        class="w-full max-w-sm rounded-lg shadow-lg object-cover"
      />
    </div>
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
