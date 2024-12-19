<template>
  <div class="mb-4">
    <label :for="id" class="block text-sm font-medium text-gray-700 mb-1">
      {{ label }}
    </label>
    
    <template v-if="type === 'textarea'">
      <textarea
        :id="id"
        v-model="modelValue"
        v-bind="$attrs"
        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        :rows="rows"
      />
    </template>
    
    <template v-else>
      <input
        :id="id"
        :type="type"
        v-model="modelValue"
        v-bind="$attrs"
        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </template>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  rows: {
    type: Number,
    default: 3
  }
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
/* Removed the custom CSS class */
</style>