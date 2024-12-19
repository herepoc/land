export default defineNuxtConfig({
  app: {
    // baseURL: '/land/', // Atualizando para o caminho correto
    head: {
      title: 'Illumia - Where empathy meets AI',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          hid: 'description', 
          name: 'description', 
          content: 'Especialistas em soluções de atendimento digital baseadas em Inteligência Artificial, oferecendo suporte multicanal para empresas.'
        },
        { 
          hid: 'og:title',
          property: 'og:title',
          content: 'Illumia - Where empathy meets AI'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Transforme seu atendimento com IA inteligente e humanizada'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/images/features/automation.png'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  css: [
    '~/assets/css/main.css',
    '~/assets/css/fonts.css'
  ],

  modules: [
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],

  colorMode: {
    classSuffix: '',
  },

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  compatibilityDate: '2024-12-18',
  ssr: false, // Desabilitando SSR para GitHub Pages
  router: {
    options: {
      strict: false
    }
  }
})