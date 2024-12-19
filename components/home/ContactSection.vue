<template>
  <section id="contato" class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl title text-center mb-4">Contato</h2>
      <p class="text-xl description text-gray-600 text-center mb-16">Estamos prontos para transformar seu atendimento ao cliente</p>
      
      <div class="grid md:grid-cols-2 gap-12">
        <div class="space-y-8">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#F4F4FF]">
              <img src="/images/icons/home-1.svg" alt="Endereço" class="w-6 h-6" />
            </div>
            <div>
              <h4 class="text-lg title mb-2">Endereço</h4>
              <p class="description text-gray-600">CAPITÃO JUSTO G. BERMÚDEZ 4547, MUNRO</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#F4F4FF]">
              <img src="/images/icons/phone-1.svg" alt="Telefone" class="w-6 h-6" />
            </div>
            <div>
              <h4 class="text-lg title mb-2">Telefone</h4>
              <p class="description text-gray-600">+55 (11) 1234-5678</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#F4F4FF]">
              <img src="/images/icons/email-1.svg" alt="Email" class="w-6 h-6" />
            </div>
            <div>
              <h4 class="text-lg title mb-2">Email</h4>
              <p class="description text-gray-600">contato@illumia.ai</p>
            </div>
          </div>
        </div>
        
        <form class="space-y-6">
          <div>
            <label for="name" class="block text-sm title mb-1">Nome</label>
            <input 
              type="text" 
              id="name" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-illumia-primary focus:border-illumia-primary description"
              placeholder="Seu nome completo"
            />
          </div>
          
          <div>
            <label for="email" class="block text-sm title mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-illumia-primary focus:border-illumia-primary description"
              placeholder="seu@email.com"
            />
          </div>
          
          <div>
            <label for="message" class="block text-sm title mb-1">Mensagem</label>
            <textarea 
              id="message" 
              rows="4" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-illumia-primary focus:border-illumia-primary description"
              placeholder="Como podemos ajudar?"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            class="w-full bg-illumia-primary text-white px-6 py-3 rounded-lg button-text hover:bg-illumia-secondary transition-colors"
          >
            ENVIAR MENSAGEM
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Removed all CSS styles */
</style>