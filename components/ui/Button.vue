<template>
  <button 
    :class="[
      'rounded-lg font-medium transition-all duration-300 ease-in-out',
      variantClasses,
      sizeClasses,
      { 'opacity-50 cursor-not-allowed': disabled }
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-lg'
    case 'secondary':
      return 'bg-gray-900 text-white hover:bg-opacity-90'
    case 'outline':
      return 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
    default:
      return ''
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-4 py-2 text-sm'
    case 'md':
      return 'px-6 py-3 text-base'
    case 'lg':
      return 'px-8 py-4 text-lg'
    default:
      return ''
  }
})
</script>