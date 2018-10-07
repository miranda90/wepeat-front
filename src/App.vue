<template>
  <div id="app">
    <nav class="nav nav--main">
      <div class="nav-inner">
        <a href="" class="logo">
          <img src="./assets/wepeat_logotipo-blanco.svg" alt="" class="logo-desktop" data-aos="zoom-in">
          <img src="./assets/wepeat-logo-mobile.svg" alt="" class="logo-mobile" data-aos="zoom-in">
        </a>
        <ul class="nav_left-menu">
          <li class="nav_menu_item">
            <a href="#" class="nav_menu_link" id="btn_explore">
              Explorar
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <use xlink:href="feather-sprite.svg#chevron-down" />
              </svg>
            </a>
          </li>
          <li class="nav_menu_item">
            <a href="" class="nav_menu_link">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <use xlink:href="feather-sprite.svg#search" />
              </svg>
            </a>
          </li>
        </ul>
        <ul class="nav_right-menu">
          <li class="nav_menu_item"><a href="" class="nav_menu_link">¿Qué es Wepeat?</a></li>
          <li class="nav_menu_item"><a href="" class="nav_menu_link">¿Cómo funciona?</a></li>
          <li class="nav_menu_item"><a href="" class="nav_menu_link">Dudas frecuentes</a></li>
          <li class="nav_menu_item"><a href="" class="nav_menu_link">Blog</a></li>
        </ul>
        <ul class="nav_loginregister-menu">
          <li><a href="" class="btn btn--brand">Login</a></li>
          <span class="separator_menu">|</span>
          <li><a href="" class="btn btn--brand-ligthen">Registro</a></li>
        </ul>
        <button id="nav_mobilebtn" class="nav-mobilebtn" onclick="">
          <svg width="25" height="25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" class="">
              <use xlink:href="feather-sprite.svg#menu" />
          </svg>
        </button>
      </div>
      <div class="explore-menu">
        <div class="explore-menu_inner">
          <h3 class="explore-menu_title title-lg">Menú explorar</h3>
          <div class="explore-menu_results slider-onmobile">
            <div class="card">
              <div class="card-img">
                <img src="./assets/meal.jpg" class="img-responsive" alt="">
              </div>
              <div class="card-content">
                <a href="" class="badge badge-card badge--plan">Planificador</a>
                <h3 class="card-title"><a href="#">Rollitos de jamón y queso</a></h3>
                <a href="" class="card-category">Category card</a>
                <p class="card-excerpt">Lorem ipsum dolor sit amet, consect adipisci elit. condimentum suscipic.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-img">
                <img src="./assets/meal.jpg" class="img-responsive" alt="">
              </div>
              <div class="card-content">
                <a href="" class="badge badge-card badge--plan">Planificador</a>
                <h3 class="card-title"><a href="#">Rollitos de jamón y queso</a></h3>
                <a href="" class="card-category">Category card</a>
                <p class="card-excerpt">Lorem ipsum dolor sit amet, consect adipisci elit. condimentum suscipic.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-img">
                <img src="./assets/meal.jpg" class="img-responsive" alt="">
              </div>
              <div class="card-content">
                <a href="" class="badge badge-card badge--plan">Planificador</a>
                <h3 class="card-title"><a href="#">Rollitos de jamón y queso</a></h3>
                <a href="" class="card-category">Category card</a>
                <p class="card-excerpt">Lorem ipsum dolor sit amet, consect adipisci elit. condimentum suscipic.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-img">
                <img src="./assets/meal.jpg" class="img-responsive" alt="">
              </div>
              <div class="card-content">
                <a href="" class="badge badge-card badge--plan">Planificador</a>
                <h3 class="card-title"><a href="#">Rollitos de jamón y queso</a></h3>
                <a href="" class="card-category">Category card</a>
                <p class="card-excerpt">Lorem ipsum dolor sit amet, consect adipisci elit. condimentum suscipic.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "styles/main.scss";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
