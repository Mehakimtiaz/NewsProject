<template>
  <div class="pagination">
    <button @click="$emit('prev')" :disabled="!hasPrev">
      Prev
    </button>

    <button @click="$emit('next')" :disabled="!hasNext">
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  hasPrev: Boolean,
  hasNext: Boolean
})
</script>