<template>
  <div id="app">
    <nav class="nav nav--main">
      <div class="nav-inner">
        <a href="" class="logo">
          <img src="./assets/wepeat_logotipo-blanco.svg" alt="" class="logo-desktop">
          <img src="./assets/wepeat-logo-mobile.svg" alt="" class="logo-mobile">
        </a>
        <ul class="nav_left-menu">
          <li class="nav_menu_item">
            <a href="" class="nav_menu_link">
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
          <li><a href="" class="btn btn--alternative-yellow">Registro</a></li>
        </ul>
        <svg width="25" height="25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="nav-mobilebtn">
            <use xlink:href="feather-sprite.svg#menu" />
        </svg>
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
