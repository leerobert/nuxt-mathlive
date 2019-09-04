
export default {
  mode: 'universal',
  plugins: [
    { src: '~/plugins/mathlive.js', ssr: false }
  ],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  modules: [],
  build: {
    modules: ['mathlive'],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
