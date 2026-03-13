<template>
  <div class="pagination-container flex items-center justify-center gap-8 mt-12 py-6">
    <button 
      @click="$emit('prev')" 
      :disabled="!hasPrev"
      class="pagination-btn"
    >
      Prev
    </button>

    <button 
      @click="$emit('next')" 
      :disabled="!hasNext"
      class="pagination-btn"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  hasPrev: Boolean,
  hasNext: Boolean
})
defineEmits(['prev', 'next'])
</script>

<style scoped>
.pagination-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
  float: right;
  margin-bottom: 20px;
}
.pagination-btn {
  /* Layout */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  padding: 8px 16px;
  
  /* Typography */
  font-size: 16px;
  font-weight: 500;
  color: #111827;
  
  /* Styling */
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 4px; /* Matches the slightly sharp corners in your image */
  cursor: pointer;
  transition: all 0.2s ease;
}

.pagination-btn:hover:not(:disabled) {
  background-color: #f9fafb;
  border-color: #9ca3af;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.pagination-btn:active:not(:disabled) {
  background-color: #f3f4f6;
  transform: translateY(1px);
}

.pagination-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  background-color: #f3f4f6;
  border-color: #e5e7eb;
}
</style>