// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/*
Vue.filters('uppercase', function (text) {
  return text.toUpperCase()
})
Vue.filters('limit', function (text) {
  return text.substring(0, length)
})
*/

/* eslint-disable */
/* eslint-disable-next-line */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    available: false,
    nearby: true
  },
  computed: {
    compClasses: function(){
      return {
        available :this.available,
        nearby: this.nearby
      }
    }
  }
})
import Dropdown from 'hsy-vue-dropdown'

Vue.use(Dropdown)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue(
  {
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  }
)
