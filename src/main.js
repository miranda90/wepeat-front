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

if (window.matchMedia('(max-width: 767px)').matches) {
  $('.slider-onmobile').slick({
    slidesToShow: 1,
    infinite: true,
    dots: false,
    arrows: false,
    lazyLoad: 'progressive',
    centerMode: true,
  });
}

const menuMobile = {
  openMobile() {
    let opened = false;
    $('#nav_mobilebtn').click(() => {
      if (opened == false) {
        $('.nav_right-menu').addClass('opened');
        opened = true;
      } else {
        $('.nav_right-menu').removeClass('opened');
        opened = false;
      }
    });
  },
};

menuMobile.openMobile();

const searchCover = {
  searchMobile() {
    $('#search_cover').focusin(function () {
      $('.search-cover_searchbox').addClass('active');
    });
    $('#search_cover').focusout(function () {
      $('.search-cover_searchbox').removeClass('active');
    });
  },
};

searchCover.searchMobile();