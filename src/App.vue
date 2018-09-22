<template>
  <div id="app">
    <nav class="nav nav--main">
      <a href="" class="logo"><img src="./assets/wepeat-logo-mobile.svg" alt=""></a>
      <ul class="nav_left-menu">
        <li class="nav_menu_item"><a href="" class="nav_menu_link">Explorar</a></li>
        <li class="nav_menu_item"><a href="" class="nav_menu_link">Buscar</a></li>
      </ul>
      <ul class="nav_right-menu">
        <li class="nav_menu_item"><a href="" class="nav_menu_link">¿Qué es Wepeat?</a></li>
        <li class="nav_menu_item"><a href="" class="nav_menu_link">¿Cómo funciona?</a></li>
        <li class="nav_menu_item"><a href="" class="nav_menu_link">Dudas frecuentes</a></li>
        <li class="nav_menu_item"><a href="" class="nav_menu_link">Blog</a></li>
      </ul>
      <ul class="nav_loginregister-menu">
        <li><a href="" class="btn btn-ghost btn-ghost--white">Conéctate</a></li>
        <li><a href="" class="btn btn--white">Regístrate</a></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'styles/main.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
