<!-- src/components/Contact.vue -->
<template>
    <section id="contact" class="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-blue-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-4xl font-bold text-white text-center animate-fade-in">Let's Connect</h2>
        <p class="mt-6 text-lg text-gray-300 max-w-3xl mx-auto text-center animate-fade-in-up delay-200">
          I'm excited to collaborate on innovative projects. Reach out via email or LinkedIn!
        </p>
        <div class="mt-8 flex flex-col items-center gap-4 animate-scale-in delay-400">
          <p class="text-orange-500 font-semibold">Email: <a href="mailto:mercychepngeno582@gmail.com" class="hover:underline">mercychepngeno582@gmail.com</a></p>
          <p class="text-orange-500 font-semibold">LinkedIn: <a href="https://linkedin.com/in/mercy-chepngeno-48b72920a" target="_blank" class="hover:underline">Mercy Chepngeno</a></p>
        </div>
        <form @submit.prevent="submitForm" class="mt-12 max-w-lg mx-auto animate-slide-in-up delay-600">
          <div class="grid gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300">Name</label>
              <input type="text" id="name" v-model="form.name" class="mt-1 w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-orange-500 focus:border-orange-500 focus:shadow-orange-500/50 transition" required />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
              <input type="email" id="email" v-model="form.email" class="mt-1 w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-orange-500 focus:border-orange-500 focus:shadow-orange-500/50 transition" required />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-300">Message</label>
              <textarea id="message" v-model="form.message" rows="4" class="mt-1 w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-orange-500 focus:border-orange-500 focus:shadow-orange-500/50 transition" required></textarea>
            </div>
            <button type="submit" class="w-full bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 hover:shadow-orange-500/50 transition hover:scale-105 font-semibold">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const form = ref({ name: '', email: '', message: '' })
  
  function submitForm() {
    console.log('Form submitted:', form.value)
    alert('Message sent! (Logged to console)')
    form.value = { name: '', email: '', message: '' }
  }
  </script>