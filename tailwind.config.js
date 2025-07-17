/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#f97316', // orange-500
          light: '#fb923c',   // orange-400
          dark: '#ea580c',    // orange-600
        },
      },
    },
  },
  plugins: [],
}

