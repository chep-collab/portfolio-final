<template>
  <section id="services" class="py-16 sm:py-20 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        v-intersect
        class="text-3xl sm:text-4xl font-bold text-gray-900 text-center opacity-0 translate-y-4 transition duration-700 ease-out"
      >
        My Services
      </h2>

      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          v-intersect
          class="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-orange-500/50 hover:scale-[1.03] transition transform opacity-0 translate-y-6 delay-[300ms]"
          :style="`transition-delay: ${200 + i * 200}ms`"
        >
          <span class="text-3xl">{{ service.icon }}</span>
          <h3 class="mt-3 text-xl font-semibold text-gray-900">{{ service.title }}</h3>
          <p class="mt-2 text-gray-600 text-sm">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  {
    title: 'Frontend Development',
    description: 'Building responsive, modern web apps with Vue.js, React, and Tailwind CSS.',
    icon: '🎨',
  },
  {
    title: 'Backend Development',
    description: 'Creating robust APIs with Node.js, Express, and MySQL.',
    icon: '🛠️',
  },
  {
    title: 'Full-Stack Solutions',
    description: 'Delivering end-to-end applications with TypeScript and cloud deployment.',
    icon: '🚀',
  },
])
</script>