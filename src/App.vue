<template>
  <div class="min-h-screen font-sans bg-portfolio">
    <!-- Navbar -->
    <nav class="bg-gray-800 shadow-lg fixed w-full z-10 animate-fade-in-down">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex items-center">
            <h1 class="text-xl sm:text-2xl font-bold text-orange-500">Mercy</h1>
          </div>
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-6">
            <a href="#home" class="text-gray-300 hover:text-orange-500 transition text-sm sm:text-base hover:scale-105">Home</a>
            <a href="#about" class="text-gray-300 hover:text-orange-500 transition text-sm sm:text-base hover:scale-105">About</a>
            <a href="#projects" class="text-gray-300 hover:text-orange-500 transition text-sm sm:text-base hover:scale-105">Projects</a>
            <a href="#services" class="text-gray-300 hover:text-orange-500 transition text-sm sm:text-base hover:scale-105">Services</a>
            <a href="#contact" class="text-gray-300 hover:text-orange-500 transition text-sm sm:text-base hover:scale-105">Contact</a>
          </div>
          <!-- Mobile Menu Button -->
          <div class="md:hidden flex items-center">
            <button @click="isMenuOpen = !isMenuOpen" class="text-gray-300 hover:text-orange-500 focus:outline-none hover:scale-105">
              <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
              <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div v-if="isMenuOpen" class="md:hidden bg-gray-800 px-4 pb-4 space-y-2 animate-slide-in-down">
          <a href="#home" class="block text-gray-300 hover:text-orange-500 transition text-base hover:scale-105">Home</a>
          <a href="#about" class="block text-gray-300 hover:text-orange-500 transition text-base hover:scale-105">About</a>
          <a href="#projects" class="block text-gray-300 hover:text-orange-500 transition text-base hover:scale-105">Projects</a>
          <a href="#services" class="block text-gray-300 hover:text-orange-500 transition text-base hover:scale-105">Services</a>
          <a href="#contact" class="block text-gray-300 hover:text-orange-500 transition text-base hover:scale-105">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-16">
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects @select-project="selectedProject = $event" /></section>
      <section id="services"><Services /></section>
      <section id="contact"><Contact /></section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 py-6 sm:py-8 animate-fade-in-up">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-300">
        <p class="text-sm sm:text-base">© 2025 Mercy Chepngeno. All rights reserved.</p>
        <div class="mt-3 sm:mt-4 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
          <a href="mailto:mercychepngeno582@gmail.com" class="hover:text-orange-500 transition text-sm sm:text-base hover:scale-105">Email</a>
          <a href="https://linkedin.com/in/mercy-chepngeno-48b72920a" target="_blank" class="hover:text-orange-500 transition text-sm sm:text-base hover:scale-105">LinkedIn</a>
          <a href="https://github.com/chep-collab" target="_blank" class="hover:text-orange-500 transition text-sm sm:text-base hover:scale-105">GitHub</a>
        </div>
      </div>
    </footer>

    <!-- Project Modal -->
    <div v-if="selectedProject" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
      <div class="bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4 animate-scale-in" @click.stop>
        <h3 class="text-xl font-bold text-white">{{ selectedProject.title }}</h3>
        <img :src="selectedProject.image" :alt="selectedProject.title" class="w-full h-48 object-cover mt-4 rounded" />
        <p class="mt-4 text-gray-300">{{ selectedProject.description }}</p>
        <p class="mt-2 text-gray-300"><strong>Tech Stack:</strong> {{ selectedProject.tech }}</p>
        <div class="mt-4 flex gap-4">
          <a :href="selectedProject.demo" target="_blank" class="text-orange-500 hover:underline hover:scale-105 transition">Live Demo</a>
          <a :href="selectedProject.github" target="_blank" class="text-orange-500 hover:underline hover:scale-105 transition">GitHub</a>
        </div>
        <button @click="selectedProject = null" class="mt-4 w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 hover:shadow-orange-500/50 transition hover:scale-105">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'

const isMenuOpen = ref(false)
const selectedProject = ref(null)
</script>

<style>
html {
  scroll-behavior: smooth;
}

/* 🌄 Apply background image from public folder */
.bg-portfolio {
  background-image: url('/hero-bg.jpeg');
  background-position: right center;
  background-repeat: no-repeat;
  background-size: 300px;
  background-attachment: fixed;
}
</style>

