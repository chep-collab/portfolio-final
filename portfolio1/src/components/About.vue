<template>
  <section id="about" class="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-blue-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 v-intersect class="text-3xl sm:text-4xl font-bold text-white text-center opacity-0 translate-y-4">
        About Me
      </h2>
      <p v-intersect class="mt-6 text-lg text-gray-300 max-w-3xl mx-auto text-center opacity-0 translate-y-4 delay-200 transition duration-700 ease-out">
        I'm <strong>Mercy Chepngeno</strong> a fullstack developer with a frontend focus and a passion for polished, well-documented projects...
        <br><br>
        I thrive in collaborative, growth-oriented environments, and I'm currently open to frontend or fullstack developer roles where I can contribute to impactful, accessible web experiences.
      </p>

      <!-- Experience -->
      <div class="mt-12">
        <h3 v-intersect class="text-2xl font-semibold text-orange-500 text-center opacity-0 translate-y-4 delay-400 transition">
          Experience
        </h3>
        <div class="mt-6 space-y-6">
          <div v-intersect class="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-orange-500/50 transition opacity-0 -translate-x-4">
            <h4 class="text-xl font-semibold text-white">Software Developer Volunteer, Facilty hub </h4>
            <p class="text-gray-300">2025 – Present</p>
            <ul class="mt-2 text-gray-300 list-disc list-inside">
              <li>Developed web applications using Vue.js and Node.js.</li>
              <li>Integrated REST APIs and optimized MySQL queries.</li>
              <li>Deployed scalable systems on Vercel.</li>
            </ul>
          </div>
          <div v-intersect class="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-orange-500/50 transition opacity-0 translate-x-4 delay-200">
            <h4 class="text-xl font-semibold text-white">Junior Developer, Moran Publishers</h4>
            <p class="text-gray-300">2022 – 2024</p>
            <ul class="mt-2 text-gray-300 list-disc list-inside">
              <li>Built web features with React and TypeScript.</li>
              <li>Maintained CMS using Python Django.</li>
              <li>Improved UI/UX with Tailwind CSS.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div class="mt-12">
        <h3 v-intersect class="text-2xl font-semibold text-orange-500 text-center opacity-0 translate-y-4 delay-600 transition">
          Education
        </h3>
        <div v-intersect class="mt-6 bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-orange-500/50 transition opacity-0 translate-y-4 delay-800">
          <h4 class="text-xl font-semibold text-white">Bachelor of Science in Computer Science</h4>
          <p class="text-gray-300">The Catholic University of Eastern Africa, 2018 – 2024</p>
          <p class="mt-2 text-gray-300">Focused on software engineering, problem solving, and fullstack web development.</p>
        </div>
      </div>

       <h3 v-intersect class="text-2xl font-semibold text-orange-500 text-center opacity-0 translate-y-4 delay-600 transition">
          Skills
        </h3>
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="skill in skills"
          :key="skill.name"
          v-intersect
          class="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-orange-500/50 hover:scale-105 transition text-center opacity-0 translate-y-4 delay-[1000ms]"
        >
          <span class="text-2xl text-orange-500">{{ skill.icon }}</span>
          <p class="mt-2 text-lg font-semibold text-white">{{ skill.name }}</p>
        </div>
      </div>

      <!-- Call to Action -->
      <div v-intersect class="mt-12 text-center opacity-0 translate-y-4 delay-[1200ms] transition">
        <p class="text-lg text-gray-200">
          🚀 <strong>Actively seeking software engineer roles.</strong><br>
          Connect with me on
          <a href="https://github.com/chep-collab" class="text-orange-400 underline">GitHub</a> or
          <a href="https://www.linkedin.com/in/mercy-chepngeno-48b72920a/" class="text-orange-400 underline">LinkedIn</a>.
        </p>
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
  { name: 'Python Django', icon: '🚀' },
  { name: '.NET', icon: '🚀' },

  { name: 'Agile', icon: '📈' },
  { name: 'Problem Solving', icon: '🧩' }

])
</script>