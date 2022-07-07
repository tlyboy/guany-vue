import '@/assets/styles/base.css'
import axios from 'axios'
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://api.github.com'

Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
