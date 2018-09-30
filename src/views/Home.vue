<template>
  <div>
    <div class="search-cover">
      <div class="search-cover_content">
        <h1 class="search-cover_title">
          ¿Estás buscando un planificador?
        </h1>
        <h5 class="search-cover_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        <img src="../assets/line.svg" alt="" class="title-line">
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
    <section class="grid-section">
      <div class="grid grid-c--2">
        <div class="search-results_info">
          <h3 class="search-results_title title-md">Últimas recetas añadidas</h3>
          <a href="#" class="link link--brand link-seeall">Ver todas</a>
        </div>
        <div class="search-results_inner slider-onmobile">
          <div class="card">
            <div class="card-img">
              <img src="../assets/meal.jpg" class="img-responsive" alt="">
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
              <img src="../assets/meal.jpg" class="img-responsive" alt="">
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
              <div class="badge badge-card_info badge--plan">
                <span class="card-days">30</span>
                <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <use xlink:href="feather-sprite.svg#calendar" />
                </svg>
              </div>
              <img src="../assets/meal.jpg" class="img-responsive" alt="">
            </div>
            <div class="card-content">
              <a href="" class="badge badge-card badge--plan">Planificador</a>
              <h3 class="card-title"><a href="#">Rollitos de jamón y queso</a></h3>
              <a href="" class="card-category">Category card</a>
              <p class="card-excerpt">Lorem ipsum dolor sit amet, consect adipisci elit. condimentum suscipic.</p>
            </div>
          </div>
          <div class="card card--premium">
            <div class="card-img">
              <div class="card-ribbon">
                <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <use xlink:href="feather-sprite.svg#lock" />
                </svg>
              </div>
              <img src="../assets/meal.jpg" class="img-responsive" alt="">
            </div>
            <div class="card-content">
              <a href="" class="badge badge-card badge--premium">Planificador</a>
              <h3 class="card-title"><a href="#">Rollitos de jamón y queso</a></h3>
              <a href="" class="card-category">Category card</a>
              <p class="card-excerpt">Lorem ipsum dolor sit amet, consect adipisci elit. condimentum suscipic.</p>
            </div>
          </div>
        </div>
        <div class="banners-block">
          <div class="banner">
            <img src="../assets/banner.jpg" alt="" class="img-responsive">
            <div class="banner-content">
              <div class="banner-title">Banner title</div>
              <img src="../assets/line.svg" alt="" class="banner-line">
              <a href="" class="banner-link">Descúbrelo</a>
            </div>
          </div>
          <div class="banner">
            <img src="../assets/banner2.jpg" alt="" class="img-responsive">
            <div class="banner-content">
              <span class="badge badge-card badge--recipe">New collection</span>
              <div class="banner-title">Banner title</div>
              <img src="../assets/line.svg" alt="" class="banner-line">
              <a href="" class="banner-link">Descúbrelo</a>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-c--2">
        <div class="search-results_info">
          <h3 class="search-results_title title-md">Últimas recetas añadidas</h3>
          <a href="#" class="link link--brand link-seeall">Ver todas</a>
        </div>
        <div class="search-results_inner slider-onmobile">
          <div class="card">
            <div class="card-img">
              <img src="../assets/meal.jpg" class="img-responsive" alt="">
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
              <img src="../assets/meal.jpg" class="img-responsive" alt="">
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
              <div class="badge badge-card_info badge--plan">
                <span class="card-days">30</span>
                <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <use xlink:href="feather-sprite.svg#calendar" />
                </svg>
              </div>
              <img src="../assets/meal.jpg" class="img-responsive" alt="">
            </div>
            <div class="card-content">
              <a href="" class="badge badge-card badge--plan">Planificador</a>
              <h3 class="card-title"><a href="#">Rollitos de jamón y queso</a></h3>
              <a href="" class="card-category">Category card</a>
              <p class="card-excerpt">Lorem ipsum dolor sit amet, consect adipisci elit. condimentum suscipic.</p>
            </div>
          </div>
          <div class="card card--premium">
            <div class="card-img">
              <div class="card-ribbon">
                <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <use xlink:href="feather-sprite.svg#lock" />
                </svg>
              </div>
              <img src="../assets/meal.jpg" class="img-responsive" alt="">
            </div>
            <div class="card-content">
              <a href="" class="badge badge-card badge--premium">Planificador</a>
              <h3 class="card-title"><a href="#">Rollitos de jamón y queso</a></h3>
              <a href="" class="card-category">Category card</a>
              <p class="card-excerpt">Lorem ipsum dolor sit amet, consect adipisci elit. condimentum suscipic.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
