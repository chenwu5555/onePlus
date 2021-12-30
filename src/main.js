import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './api/api.js'
import axios from 'axios'
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$http = api

// 请求拦截器
axios.interceptors.request.use(config =>{
  console.log(config,"查看config")
  let isToken = window.localStorage.getItem('token')
  console.log(isToken,"这是我的token哦");
  if(isToken){
    // config.headers['token'] = isToken
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
