<template>
  <section id="projects" class="py-16 sm:py-20 bg-gradient-to-b from-blue-900 to-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        v-intersect
        class="text-3xl sm:text-4xl font-bold text-white text-center opacity-0 translate-y-4 transition duration-700 ease-out"
      >
        Projects
      </h2>
      <p
        v-intersect
        class="mt-4 text-gray-300 text-center text-lg opacity-0 translate-y-4 delay-200 transition duration-700 ease-out"
      >
       Some of my recent projects showcasing my skills in fullstack development.
      </p>

      <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        <!-- 🛒 ShopStream -->
        <div
          v-intersect
          class="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-orange-500/50 hover:scale-[1.02] transition opacity-0 translate-y-6 delay-400"
        >
          <img src="/images/shopstream.png" alt="ShopStream Screenshot" class="w-full rounded mb-4 border border-orange-300" />
          <h3 class="text-xl font-semibold text-brand">ShopStream</h3>
          <p class="mt-2 text-gray-300 text-sm">
            A headless e-commerce storefront built with Nuxt 3 and Tailwind. Uses Stripe, CMS integration, and modular cart logic. Features dynamic routing and clean transitions.
          </p>
          <p class="mt-2 text-sm text-brand-light">
            Tech Stack: Nuxt 3, Vue, Tailwind CSS, Stripe API, GitHub
          </p>
          <a href="https://shopstream-blond.vercel.app/" target="_blank" class="inline-block mt-4 text-orange-300 underline hover:text-orange-400 hover:scale-105 transition">Live Demo</a>
          <a href="https://github.com/chep-collab/shopstream" target="_blank" class="ml-4 text-orange-300 underline hover:text-orange-400 hover:scale-105 transition">View Repo</a>
        </div>

        <!-- 🤝 Cofacility -->
        <div
          v-intersect
          class="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-orange-500/50 hover:scale-[1.02] transition opacity-0 translate-y-6 delay-600"
        >
          <img src="/images/cofacility.png" alt="Cofacility Screenshot" class="w-full rounded mb-4 border border-orange-300" />
          <h3 class="text-xl font-semibold text-brand">Cofacility</h3>
          <p class="mt-2 text-gray-300 text-sm">
            A fullstack collaboration suite designed for modern remote teams. Features include dynamic project boards, real-time chat, role-based access control, and seamless user experience across devices.
          </p>
          <p class="mt-2 text-sm text-brand-light">
            Tech Stack: Nuxt 3, Vue, Tailwind CSS, Firebase Auth, Vuex, Vercel
          </p>
          <a href="https://cofacility.vercel.app" target="_blank" class="inline-block mt-4 text-orange-300 underline hover:text-orange-400 hover:scale-105 transition">Live Demo</a>
          <a href="https://github.com/chep-collab/cofacility" target="_blank" class="ml-4 text-orange-300 underline hover:text-orange-400 hover:scale-105 transition">View Repo</a>
        </div>

        <!-- 🧠 Clipboard API -->
        <div
          v-intersect
          class="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-orange-500/50 hover:scale-[1.02] transition opacity-0 translate-y-6 delay-800"
        >
          <img src="/images/clipboard.png" alt="Clipboard API Screenshot" class="w-full rounded mb-4 border border-orange-300 object-cover h-48" />
          <h3 class="text-xl font-semibold text-brand-dark">Clipboard Health Backend</h3>
          <p class="mt-2 text-gray-300 text-sm">
           A high-performance backend system for a healthcare staffing platform, built with production-grade precision. Features optimized SQL queries using Prisma, secure JWT authentication, and a modular, scalable NestJS architecture.
          </p>
          <ul class="mt-2 text-sm text-brand-light list-disc list-inside space-y-1">
            <li>Raw SQL endpoint for workplace metrics 🔍</li>
            <li>Modular NestJS services + DTOs 🧱</li>
            <li>Prisma modeling: nurses, shifts, workplaces 🧮</li>
            <li>Firebase Auth + JWT protection 🔐</li>
            <li>Utility scripts for cron/reporting 🛠️</li>
          </ul>
          <a href="https://clipboard-api.vercel.app" target="_blank" class="inline-block mt-4 text-orange-300 underline hover:text-orange-400 hover:scale-105 transition">Demo</a>
          <a href="https://github.com/chep-collab/clipboard-most-active" target="_blank" class="ml-4 text-orange-300 underline hover:text-orange-400 hover:scale-105 transition">View Repo</a>
        </div>

        <!-- ⚙️ Razor Pages Algorithm Suite -->
        <div
          v-intersect
          class="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-orange-500/50 hover:scale-[1.02] transition opacity-0 translate-y-6 delay-[1000ms]"
        >
          <img src="/images/razor.png" alt="Razor Pages Screenshot" class="w-full rounded mb-4 border border-orange-300 object-cover h-48" />
          <h3 class="text-xl font-semibold text-orange-500">Razor Pages Algorithm Suite</h3>
          <p class="mt-2 text-gray-300 text-sm">
            A polished .NET Razor Pages app hosting real-world algorithmic solutions. Structured for recruiter readability and powered by C# backend logic with responsive Tailwind-themed pages.
          </p>
          <ul class="mt-2 text-sm text-orange-400 list-disc list-inside space-y-1">
            <li>Clean Razor architecture with C# logic ⚙️</li>
            <li>Responsive UI using Tailwind CSS 🎨</li>
            <li>Secure routing and linkable problem sets 🔗</li>
          </ul>
          <a href="https://razor-algorithms.vercel.app" target="_blank" class="inline-block mt-4 text-orange-300 underline hover:text-orange-400 hover:scale-105 transition">Live Demo</a>
          <a href="https://github.com/chep-collab/DSAshowcase-dotnet" target="_blank" class="ml-4 text-orange-300 underline hover:text-orange-400 hover:scale-105 transition">View Repo</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script logic needed
</script>

<style>
@media (prefers-reduced-motion: reduce) {
  .opacity-0,
  .translate-y-4,
  .translate-y-6 {
    transition: none !important;
  }
}
</style>
