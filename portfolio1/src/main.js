// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import intersect from './directives/intersect'

const app = createApp(App)        // 🔄 Create the app first
app.directive('intersect', intersect) // ✅ Now register directives
app.mount('#app')                 // 🚀 Mount it last