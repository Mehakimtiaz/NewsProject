<template>
  <NuxtLayout>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white border-b sticky top-0 z-10 shadow-sm">
      <div class="header-container">
        <h1 class="logo">News</h1>

        <button 
          v-if="route.path !== '/'" 
          @click="router.push('/')"
          class="page-btn"
        >
          Back to Home
        </button>
      </div>
    </header>

     <div class="container">
      <NuxtPage />
    </div>
  </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
</script>

<style scoped>
.header-container, .content-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 24px;
}

.header-container {
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.25rem;
  font-weight: 800;
  color: #111827;
  letter-spacing: -0.025em;
}

.page-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #4b5563;
  background-color: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.page-btn:hover {
  background-color: #f9fafb;
  border-color: #d1d5db;
  color: #111827;
}

.content-container {
  margin-top: 40px;
}
</style>