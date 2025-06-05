<!-- src/components/Projects.vue -->
<template>
    <section id="projects" class="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-blue-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-4xl font-bold text-white text-center animate-fade">My Projects</h2>
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="project in projects" :key="project.title" class="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-orange-500/50 transition transform hover:-translate-y-1 animate-slide-in-up" :class="{ 'delay-200': project.title === 'Local Care Connect', 'delay-400': project.title === 'EcoSwapHub' }">
            <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover rounded" />
            <h3 class="mt-4 text-xl font-semibold text-white">{{ project.title }}</h3>
            <p class="mt-2 text-gray-300">{{ project.summary }}</p>
            <button @click="$emit('select-project', project)" class="mt-4 w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 hover:shadow-orange-500/50 transition hover:scale-105 font-semibold">
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const projects = ref([
    {
      title: 'Facilityhub',
      summary: 'A facility management platform for gyms, coworkspaces, and sports complexes.',
      description: 'Built a responsive landing page with Vue.js, Tailwind CSS, and Vite, featuring animated services and user authentication.',
      tech: 'Vue.js, Tailwind CSS, Vite, Vercel',
      image: '/images/facilityhub.png',
      demo: 'https://vue-app-client-chek.vercel.app/',
      github: 'https://github.com/chep-collab/VUE-APP',
    },
    {
      title: 'Local Care Connect',
      summary: 'A healthcare scheduling platform connecting patients with providers.',
      description: 'Developed a full-stack app with React, Node.js, and MySQL for appointment booking and provider management.',
      tech: 'React, Node.js, MySQL, Express',
      image: '/images/localcare.png',
      demo: 'https://local-care-connect-5hzc.vercel.app/',
      github: 'https://github.com/chep-collab/local-care-connect',
    },
    {
      title: 'EcoSwapHub',
      summary: 'A sustainable goods exchange platform.',
      description: 'Created a Vue.js app with TypeScript and Firebase for users to swap eco-friendly products.',
      tech: 'Vue.js, TypeScript, Firebase',
      image: '/images/ecoswaphub.png',
      demo: 'https://ecoswaphub-hc31.vercel.app/',
      github: 'https://github.com/chep-collab/ecoswaphub',
    },
  ])
  </script>