// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import '@fortawesome/fontawesome-free/css/all.css'

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  iconfont : 'fa',
  theme: {
    primary: '#9CEAEF',
    secondary: '#68D8D6',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})


require('dotenv').config();
console.log(require('dotenv').config())


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
