import Vue from 'vue'
import App from './APP.vue'
import router from './router'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
