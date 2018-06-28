import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
// import VueLazyload from 'vue-lazyload'
import '@/common/stylus/index.styl'
import axios from 'axios'
import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
fastclick.attach(document.body)
/*Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})*/

Vue.use(ElementUI)
sync(store, router)
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
