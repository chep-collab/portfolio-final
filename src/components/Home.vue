<!-- src/components/Home.vue -->
<template>
    <section id="home" class="relative h-screen flex items-center justify-center bg-cover bg-center" :style="{ backgroundImage: `url(/images/hero-bg.jpg)` }">
      <div class="text-center text-white px-4 sm:px-6 lg:px-8 z-10">
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white animate-fade-in-down">
          Hi, I'm Mercy
        </h1>
        <p class="mt-4 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto text-gray-300 animate-fade-in-up delay-200">
          A Software Engineer crafting scalable web solutions with Vue.js, React, and more.
        </p>
        <div class="mt-8 flex justify-center gap-4 animate-scale-in delay-400">
          <a href="/cv/cheps.pdf" download class="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 hover:shadow-orange-500/50 transition hover:scale-105 font-semibold">
            Download CV
          </a>
          <a href="#contact" class="bg-transparent border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-md hover:bg-orange-500 hover:text-white hover:shadow-orange-500/50 transition hover:scale-105 font-semibold">
            Hire Me
          </a>
        </div>
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-blue-900/80"></div>
    </section>
  </template>
  
  <script setup>
  // No script needed
  </script>