<template>
  <section id="contato" class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl title text-center mb-4 hero-title">Contáctenos</h2>
      <p class="text-xl description text-gray-600 text-center mb-16">Estamos listos para transformar su atención al cliente</p>
      
      <div class="grid md:grid-cols-2 gap-12">
        <div class="space-y-8">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#F4F4FF]">
              <img src="/images/icons/home-1.svg" alt="Dirección" class="w-6 h-6" />
            </div>
            <div>
              <h4 class="text-lg title mb-2">Dirección</h4>
              <p class="description text-gray-600">CAPITÁN JUSTO G. BERMÚDEZ 4547, MUNRO</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#F4F4FF]">
              <img src="/images/icons/phone-1.svg" alt="Teléfono" class="w-6 h-6" />
            </div>
            <div>
              <h4 class="text-lg title mb-2">Teléfono</h4>
              <p class="description text-gray-600">+55 (11) 1234-5678</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#F4F4FF]">
              <img src="/images/icons/email-1.svg" alt="Correo electrónico" class="w-6 h-6" />
            </div>
            <div>
              <h4 class="text-lg title mb-2">Correo electrónico</h4>
              <p class="description text-gray-600">contacto@illumia.ai</p>
            </div>
          </div>
        </div>
        
        <form class="space-y-6">
          <div>
            <label for="name" class="block text-sm title mb-1">Nombre</label>
            <input 
              type="text" 
              id="name" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-illumia-primary focus:border-illumia-primary description"
              placeholder="Su nombre completo"
            />
          </div>
          
          <div>
            <label for="email" class="block text-sm title mb-1">Correo electrónico</label>
            <input 
              type="email" 
              id="email" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-illumia-primary focus:border-illumia-primary description"
              placeholder="su@email.com"
            />
          </div>
          
          <div>
            <label for="message" class="block text-sm title mb-1">Mensaje</label>
            <textarea 
              id="message" 
              rows="4" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-illumia-primary focus:border-illumia-primary description"
              placeholder="¿Cómo podemos ayudar?"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            class="w-full bg-illumia-primary text-white px-6 py-3 rounded-lg button-text hover:bg-illumia-secondary transition-colors"
          >
            ENVIAR MENSAJE
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Removed all CSS styles */
</style>