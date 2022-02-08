import Vue from 'vue'
import App from './App.vue'
import Nmui from './../packages'

Vue.use(Nmui)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
