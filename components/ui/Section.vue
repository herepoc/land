<template>
  <section :class="['py-16 md:py-24', dark ? 'bg-gray-900 text-white' : 'bg-white']">
    <div class="container mx-auto px-4">
      <slot />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  dark: {
    type: Boolean,
    default: false,
  },
})
</script>