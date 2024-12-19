<template>
  <footer class="bg-gray-900 text-white py-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex justify-center md:justify-start">
          <img src="/images/lumia-logo-footer.png" alt="Illumia Logo" class="h-12" />
        </div>
        <div class="flex flex-col items-center md:items-end space-y-4">
          <div class="flex flex-wrap justify-center md:justify-end gap-4">
            <a href="#" class="w-12 h-12 flex items-center justify-center rounded-full bg-[#F4F4FF] hover:bg-illumia-primary/10 transition-colors">
              <img src="/images/icons/linkedin.svg" alt="LinkedIn" class="w-6 h-6" />
            </a>
            <a href="#" class="w-12 h-12 flex items-center justify-center rounded-full bg-[#F4F4FF] hover:bg-illumia-primary/10 transition-colors">
              <img src="/images/icons/instagram.svg" alt="Instagram" class="w-6 h-6" />
            </a>
            <a href="#" class="w-12 h-12 flex items-center justify-center rounded-full bg-[#F4F4FF] hover:bg-illumia-primary/10 transition-colors">
              <img src="/images/icons/twitter.svg" alt="Twitter" class="w-6 h-6" />
            </a>
            <a href="#" class="w-12 h-12 flex items-center justify-center rounded-full bg-[#F4F4FF] hover:bg-illumia-primary/10 transition-colors">
              <img src="/images/icons/tiktok.svg" alt="TikTok" class="w-6 h-6" />
            </a>
            <a href="#" class="w-12 h-12 flex items-center justify-center rounded-full bg-[#F4F4FF] hover:bg-illumia-primary/10 transition-colors">
              <img src="/images/icons/youtube.svg" alt="YouTube" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-800 text-center">
        <p class="description text-gray-400">&copy; {{ new Date().getFullYear() }} Illumia. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Removed all CSS styles as they were replaced with Tailwind classes */
</style>