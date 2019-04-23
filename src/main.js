import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './http' //vue项目中找同级文件要加上./

Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
