import Vue from 'vue'
import App from './App.vue'

// 配置 vue-router
import router from './router'
// 配置 vuex
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
