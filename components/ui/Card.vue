<template>
  <div 
    class="bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl p-6"
    :class="{ 'hover:-translate-y-1': hover }"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  hover: {
    type: Boolean,
    default: true,
  },
})
</script>