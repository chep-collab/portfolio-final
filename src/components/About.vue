<!-- src/components/About.vue -->
<template>
    <section id="about" class="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-blue-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-4xl font-bold text-white text-center animate-fade-in">About Me</h2>
        <p class="mt-6 text-lg text-gray-300 max-w-3xl mx-auto text-center animate-fade-in-up delay-200">
          I'm Mercy, a passionate Software Engineer based in Kenya with over 2 years of experience in building web applications. I specialize in Vue.js, React, TypeScript, Node.js, Tailwind CSS, Python Django, and MySQL.
        </p>
        <div class="mt-12">
          <h3 class="text-2xl font-semibold text-orange-500 text-center animate-fade-in delay-400">Experience</h3>
          <div class="mt-6 space-y-6">
            <div class="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-orange-500/50 transition animate-slide-in-left">
              <h4 class="text-xl font-semibold text-white">Software Developer, Bunisha Limited</h4>
              <p class="text-gray-300">2023 – Present</p>
              <ul class="mt-2 text-gray-300 list-disc list-inside">
                <li>Developed web applications using Vue.js and Node.js.</li>
                <li>Integrated REST APIs and optimized MySQL queries.</li>
                <li>Deployed scalable systems on Vercel.</li>
              </ul>
            </div>
            <div class="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-orange-500/50 transition animate-slide-in-right delay-200">
              <h4 class="text-xl font-semibold text-white">Junior Developer, Moran Publishers</h4>
              <p class="text-gray-300">2022 – 2023</p>
              <ul class="mt-2 text-gray-300 list-disc list-inside">
                <li>Built web features with React and TypeScript.</li>
                <li>Maintained CMS using Python Django.</li>
                <li>Improved UI/UX with Tailwind CSS.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-12">
          <h3 class="text-2xl font-semibold text-orange-500 text-center animate-fade-in delay-600">Education</h3>
          <div class="mt-6 bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-orange-500/50 transition animate-slide-in-up delay-800">
            <h4 class="text-xl font-semibold text-white">Bachelor of Science in Computer Science</h4>
            <p class="text-gray-300">The Catholic University of Eastern Africa, 2019 – 2023</p>
            <p class="mt-2 text-gray-300">Focused on software engineering and web development.</p>
          </div>
        </div>
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in delay-1000">
          <div v-for="skill in skills" :key="skill.name" class="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-orange-500/50 hover:scale-105 transition text-center">
            <span class="text-2xl text-orange-500">{{ skill.icon }}</span>
            <p class="mt-2 text-lg font-semibold text-white">{{ skill.name }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const skills = ref([
    { name: 'Vue.js', icon: '🖌️' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📜' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'REST APIs', icon: '🌐' },
    { name: 'GraphQL', icon: '📊' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Git', icon: '🐙' },
    { name: 'Docker', icon: '🐳' },
    { name: 'CI/CD', icon: '🔄' },
    { name: 'Python Django', icon: '🚀' }
  ])
  </script>