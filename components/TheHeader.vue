<template>
  <header class="fixed w-full top-0 z-50 bg-gray-900 shadow-md">
    <div class="container mx-auto flex justify-between items-center p-4">
      <NuxtLink to="/" class="h-10">
        <img src="/images/illumia-logo.png" alt="Illumia Logo" class="h-full" />
      </NuxtLink>
      
      <!-- Botão do Menu Hamburger (visível apenas em telas pequenas) -->
      <button 
        @click="isMenuOpen = !isMenuOpen" 
        class="lg:hidden text-white focus:outline-none"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            v-if="!isMenuOpen" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path 
            v-else 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Menu Desktop -->
      <nav class="hidden lg:flex gap-8">
        <NuxtLink to="/#sobre" class="text-white font-medium hover:text-blue-500 transition-colors">Sobre Nosotros</NuxtLink>
        <NuxtLink to="/#funcionalidades" class="text-white font-medium hover:text-blue-500 transition-colors">Funcionalidades</NuxtLink>
        <NuxtLink to="/#depoimentos" class="text-white font-medium hover:text-blue-500 transition-colors">Testimonios</NuxtLink>
        <NuxtLink to="/#contato" class="text-white font-medium hover:text-blue-500 transition-colors">Contacto</NuxtLink>
      </nav>
    </div>

    <!-- Menu Mobile -->
    <div 
      v-show="isMenuOpen" 
      class="lg:hidden"
    >
      <nav class="flex flex-col bg-gray-900 py-4">
        <NuxtLink 
          v-for="(link, index) in links" 
          :key="index"
          :to="link.to" 
          class="text-white font-medium hover:text-blue-500 transition-colors px-4 py-2"
          @click="isMenuOpen = false"
        >
          {{ link.text }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const links = [
  { to: '/#sobre', text: 'Sobre Nosotros' },
  { to: '/#funcionalidades', text: 'Funcionalidades' },
  { to: '/#depoimentos', text: 'Testimonios' },
  { to: '/#contato', text: 'Contacto' }
]
</script>

<style scoped>
/* Animações e transições podem ser adicionadas aqui se necessário */
</style>