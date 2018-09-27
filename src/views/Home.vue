<template>
  <div class="search-cover">
    <div class="search-cover_content">
      <h1 class="search-cover_title">
        ¿Estás buscando un planificador?
      </h1>
      <h5 class="search-cover_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus ex nec
        libero iaculis vulputate</h5>
    </div>
    <div class="search-cover_searchbox">
      <form action="" method="get">
        <div class="search-cover_searchbox_block">
          <input type="text" class="search-cover_searchbox_input" placeholder="Buscar por planificador, receta, tags...">
          <button class="search-cover_searchbox_btn" type="submit">
            <svg width="25" height="25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <use xlink:href="feather-sprite.svg#search" />
            </svg>
          </button>
        </div>
      </form>
    </div>
    <img src="../assets/meal2-png.png" alt="" class="search-cover_img search-cover_img--left">
    <img src="../assets/meal-png.png" alt="" class="search-cover_img search-cover_img--right">
  </div>
</template>

<style>
.nav--main {
  background: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;
}
</style>
