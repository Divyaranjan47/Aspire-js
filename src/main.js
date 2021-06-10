import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router'
import store from './Store';
import ApplyLoan from './components/ApplyLoan.vue';
import Admin from './components/Admin.vue';
import Payment from './components/Payment.vue';

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { 
    path: '/', 
    component: ApplyLoan
  },
  { 
    path: '/home', 
    component: ApplyLoan
  },
  { 
    path: '/admin', 
    component: Admin
  },
  { 
    path: '/payment', 
    component: Payment
  }
];
const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
