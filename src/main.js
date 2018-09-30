import Vue from 'vue';
import App from './App.vue';
import router from './router';

window.$ = require('jquery');
window.JQuery = require('jquery');
const feather = require('feather-icons');
const slick = require('slick-carousel');

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

if (window.matchMedia("(max-width: 767px)").matches) {
  $('.slider-onmobile').slick({
    slidesToShow   : 1,
    infinite : true,
    dots     : false,
    arrows   : false,
    lazyLoad: 'progressive',
    centerMode: true,
  });
}
