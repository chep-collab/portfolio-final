<template>
  <button @click="toggleDark" class="fixed bottom-4 right-4 bg-gray-800 text-white px-3 py-2 rounded shadow hover:bg-gray-700">
    {{ isDark ? '🌞' : '🌙' }}
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const isDark = ref(false)

function toggleDark() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})
</script>