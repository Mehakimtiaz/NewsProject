<template>
  <NuxtLayout>
    <header class="py-6 border-b mb-8 flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold text-primary">
        NuxtNews
      </NuxtLink>

      <!-- Removed UColorModeButton -->
    </header>
      
    <NuxtPage />

    <footer class="mt-20 py-10 border-t text-center text-gray-500 text-sm">
      &copy; 2026 News Project - Built with Nuxt 3
    </footer>
  </NuxtLayout>
</template>