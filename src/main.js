import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'assets/css/reset.css'
// 事件总线的注册
Vue.prototype.$bus=new Vue();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
