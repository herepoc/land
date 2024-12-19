<template>
  <section id="contato" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4">Contáctenos</h2>
      <p class="text-xl text-gray-600 text-center mb-16">Estamos listos para transformar su atención al cliente</p>
      
      <div class="grid md:grid-cols-2 gap-12">
        <div class="space-y-8">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100">
              <i class="icon-location text-blue-600"></i>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-2">Dirección</h4>
              <p class="text-gray-600">CAPITÁN JUSTO G. BERMÚDEZ 4547, MUNRO</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100">
              <i class="icon-phone text-blue-600"></i>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-2">Teléfono</h4>
              <p class="text-gray-600">+55 (11) 1234-5678</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100">
              <i class="icon-email text-blue-600"></i>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-2">Correo electrónico</h4>
              <p class="text-gray-600">contacto@illumia.ai</p>
            </div>
          </div>
          
          <div class="flex space-x-4">
            <a href="#" class="text-gray-600 hover:text-blue-600 transition-colors">LinkedIn</a>
            <a href="#" class="text-gray-600 hover:text-blue-600 transition-colors">Instagram</a>
            <a href="#" class="text-gray-600 hover:text-blue-600 transition-colors">Twitter</a>
          </div>
        </div>
        
        <form class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label for="company" class="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
            <input 
              type="text" 
              id="company" 
              name="company" 
              required 
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            class="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition-all"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Removed all CSS styles */
</style>