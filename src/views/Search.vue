<template>
  <div class="search-wrapper">
    <div class="search-filters">
      <div class="search-filters_search"><input type="text" placeholder="Buscar por planificador, receta, tags..." class="search-filters_input"></div>
      <div class="search-filters_inner">
        <div class="search-filters_left">
          <ul class="search-filters_filters">
            <li class="search-filters_filter">
              <a href="" class="search-filters_btn">
                Por categoría
                <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                    <use xlink:href="feather-sprite.svg#chevron-down" />
                </svg>
              </a>
            </li>
            <li class="search-filters_filter">
              <a href="" class="search-filters_btn">
                Por equipamiento
                <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                    <use xlink:href="feather-sprite.svg#chevron-down" />
                </svg>
              </a>
            </li>
            <li class="search-filters_filter">
              <a href="" class="search-filters_btn">
                Por colecciones
                <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                    <use xlink:href="feather-sprite.svg#chevron-down" />
                </svg>
              </a>
            </li>
            <li class="search-filters_filter">
              <a href="" class="search-filters_btn">
                Por alérgenos
                <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                    <use xlink:href="feather-sprite.svg#chevron-down" />
                </svg>
              </a>
            </li>
          </ul>
          <a href="#" class="search-filters_btn search-filters_filter-mobile">Ver todos los filtros</a>
        </div>
        <div class="search-filters_right">
          <ul class="search-filters_filters">
            <li class="search-filters_filter">
              <a href="" class="search-filters_btn">
                Ordenar por...
                <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                    <use xlink:href="feather-sprite.svg#chevron-down" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="search-results">
      <div class="search-results_info">
        <h3 class="search-results_title title-md">Se han encontrado 10 resultados</h3>
      </div>
      <div class="search-results_inner">
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
            <a href="" class="badge badge-card badge--recipe">Receta</a>
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
  </div>
</template>
