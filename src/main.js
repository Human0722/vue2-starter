import Vue from 'vue'
import App from './App.vue'

// 配置 vue-router
import router from './router'
// 配置 vuex
import store from './store'
// 配置 axios
import http from "@/plugins/http";
Vue.use(http)
// 配置全局 css
import '@/assets/style/index.css'
// 配置 tailwindcss
import 'tailwindcss/dist/tailwind.css'
// 配置 elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
