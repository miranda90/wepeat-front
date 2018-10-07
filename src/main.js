import Vue from 'vue';
import App from './App.vue';
import router from './router';

window.$ = require('jquery');
window.JQuery = require('jquery');
const feather = require('feather-icons');
const slick = require('slick-carousel');
const aos = require('aos');

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

$(document).ready(function(){
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
  menuMain.openMobile();
  menuMain.openExplore();
  searchCover.searchMobile();
  skLoading.skLoaded();
});



const menuMain = {
  openMobile: function() {
    var opened = false;
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
  openExplore: function(){
    var opened = false;
    $('#btn_explore').click(() => {
      if (opened == false) {
        $('.explore-menu').addClass('opened');
        opened = true;
      } else {
        $('.explore-menu').removeClass('opened');
        opened = false;
      }
    });
  }
};

const searchCover = {
  searchMobile: function() {
    $('#search_cover').focusin(function () {
      $('.search-cover_searchbox').addClass('active');
    });
    $('#search_cover').focusout(function () {
      $('.search-cover_searchbox').removeClass('active');
    });
  },
};



const skLoading = {
  skLoaded : function() {
    $('div[data-skeleton="is-skeleton"]').each(function(index) {
      var sk = $(this).find('.skeleton');
      setTimeout(function(){
        sk.fadeOut(300,function(){
          $(this).remove();
        });
      },200*index);
  });
  }
};



aos.init({
  duration: 700,
  easing: 'ease-in-out-back',
  anchorPlacement: 'bottom-bottom',
});
