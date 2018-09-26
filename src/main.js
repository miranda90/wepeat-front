import Vue from 'vue';
import App from './App.vue';
import router from './router';

const feather = require('feather-icons');

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');