export default {
  plugins: [{ src: '~/plugins/mathlive.client.js' }],
  buildModules: [],
  modules: [],
  build: {
    modules: ['mathlive'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
    }
  }
}
