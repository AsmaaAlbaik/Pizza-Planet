import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import { store } from './store/stores.js'
import accounting from 'accounting-js'
import App from './App.vue'


Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
});

Vue.filter('currency', function (value) {
  return accounting.formatMoney(value)
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
