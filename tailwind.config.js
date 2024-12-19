module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        illumia: {
          primary: '#A642F4', // Violeta Principal
          secondary: '#603FE3', // Roxo Escuro
          accent: '#4B5EFC', // Azul Vibrante
          dark: '#1C1C1E', // Preto Moderno
          white: '#FFFFFF', // Branco
        },
      },
      gradientColorStops: theme => ({
        'primary-gradient': ['#A642F4', '#603FE3'], // Gradiente
      }),
    },
  },
  plugins: [],
}