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
				<div class="explore-menu_wrapper">
					<div class="explore-menu_inner">
						<div class="explore-menu_block-title">
							<h3 class="explore-menu_title title-lg" i8in="">Menú explorar</h3>
							<a href="#" id="explore-menu_close" class="explore-menu_close">
								<svg width="30" height="30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
								 stroke-linejoin="round">
									<use xlink:href="feather-sprite.svg#x" />
								</svg>
							</a>
						</div>
						<div class="explore-menu_results">
							<div class="explore-menu_section">
								<div class="explore-menu_section_title">
									<h3 class=" title-sm">Nuestros mejores planificadores</h3>
								</div>
								<div class="explore-menu_section-results slider-onmobile">
									<div class="card" data-skeleton="is-skeleton">
										<div class="skeleton skeleton-card">
											<div class="skeleton-card_img"></div>
											<div class="skeleton-card_title"></div>
											<div class="skeleton-card_category"></div>
											<div class="skeleton-card_excerpt"><span></span><span></span></div>
										</div>
										<div class="card-img">
											<img src="./assets/card.png" class="img-responsive" alt="">
										</div>
										<div class="card-content">
											<a href="" class="badge badge-card badge--plan">Planificador</a>
											<h3 class="card-title"><a href="#">Rutina fitness proteica</a></h3>
											<a href="" class="card-category">Category card</a>
										</div>
									</div>
									<div class="card" data-skeleton="is-skeleton">
										<div class="skeleton skeleton-card">
											<div class="skeleton-card_img"></div>
											<div class="skeleton-card_title"></div>
											<div class="skeleton-card_category"></div>
											<div class="skeleton-card_excerpt"><span></span><span></span></div>
										</div>
										<div class="card-img">
											<img src="./assets/card.png" class="img-responsive" alt="">
										</div>
										<div class="card-content">
											<a href="" class="badge badge-card badge--plan">Planificador</a>
											<h3 class="card-title"><a href="#">Rutina fitness proteica</a></h3>
											<a href="" class="card-category">Category card</a>
										</div>
									</div>
									<div class="card" data-skeleton="is-skeleton">
										<div class="skeleton skeleton-card">
											<div class="skeleton-card_img"></div>
											<div class="skeleton-card_title"></div>
											<div class="skeleton-card_category"></div>
											<div class="skeleton-card_excerpt"><span></span><span></span></div>
										</div>
										<div class="card-img">
											<img src="./assets/card.png" class="img-responsive" alt="">
										</div>
										<div class="card-content">
											<a href="" class="badge badge-card badge--plan">Planificador</a>
											<h3 class="card-title"><a href="#">Rutina fitness proteica</a></h3>
											<a href="" class="card-category">Category card</a>
										</div>
									</div>
									<div class="card" data-skeleton="is-skeleton">
										<div class="skeleton skeleton-card">
											<div class="skeleton-card_img"></div>
											<div class="skeleton-card_title"></div>
											<div class="skeleton-card_category"></div>
											<div class="skeleton-card_excerpt"><span></span><span></span></div>
										</div>
										<div class="card-img">
											<img src="./assets/card.png" class="img-responsive" alt="">
										</div>
										<div class="card-content">
											<a href="" class="badge badge-card badge--plan">Planificador</a>
											<h3 class="card-title"><a href="#">Rutina fitness proteica</a></h3>
											<a href="" class="card-category">Category card</a>
										</div>
									</div>
									<a class="card-all" href="#">
										<div class="card-all_inner">
											<svg width="30" height="30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
											stroke-linejoin="round">
												<use xlink:href="feather-sprite.svg#more-horizontal" />
											</svg>
											<span>Ver todos</span>
										</div>
									</a>
								</div>
							</div>
							<div class="explore-menu_section explore-menu_section-recipes">
								<div class="explore-menu_section_title">
									<h3 class="title-sm">Las mejores recetas y colecciones</h3>
								</div>
								<div class="explore-menu_section-results slider-onmobile">
									<div class="card" data-skeleton="is-skeleton">
										<div class="skeleton skeleton-card">
											<div class="skeleton-card_img"></div>
											<div class="skeleton-card_title"></div>
											<div class="skeleton-card_category"></div>
											<div class="skeleton-card_excerpt"><span></span><span></span></div>
										</div>
										<div class="card-img">
											<img src="./assets/meal.jpg" class="img-responsive" alt="">
										</div>
										<div class="card-content">
											<a href="" class="badge badge-card badge--recipe">Receta</a>
											<h3 class="card-title"><a href="#">Ensalada Mediterránea</a></h3>
											<a href="" class="card-category">Category card</a>
										</div>
									</div>
									<div class="card" data-skeleton="is-skeleton">
										<div class="skeleton skeleton-card">
											<div class="skeleton-card_img"></div>
											<div class="skeleton-card_title"></div>
											<div class="skeleton-card_category"></div>
											<div class="skeleton-card_excerpt"><span></span><span></span></div>
										</div>
										<div class="card-img">
											<div class="badge badge-card_info badge-card_info--collection">
												<span class="card-days">32</span>
												<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
												 stroke-linejoin="round">
													<use xlink:href="feather-sprite.svg#more-horizontal" />
												</svg>
											</div>
											<img src="./assets/ninos.png" class="img-responsive" alt="">
										</div>
										<div class="card-content">
											<a href="" class="badge badge-card badge--collection">Colección</a>
											<h3 class="card-title"><a href="#">Comida para niños</a></h3>
										</div>
									</div>
									<div class="card" data-skeleton="is-skeleton">
										<div class="skeleton skeleton-card">
											<div class="skeleton-card_img"></div>
											<div class="skeleton-card_title"></div>
											<div class="skeleton-card_category"></div>
											<div class="skeleton-card_excerpt"><span></span><span></span></div>
										</div>
										<div class="card-img">
											<div class="badge badge-card_info badge-card_info--collection">
												<span class="card-days">32</span>
												<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
												 stroke-linejoin="round">
													<use xlink:href="feather-sprite.svg#more-horizontal" />
												</svg>
											</div>
											<img src="./assets/ninos.png" class="img-responsive" alt="">
										</div>
										<div class="card-content">
											<a href="" class="badge badge-card badge--collection">Colección</a>
											<h3 class="card-title"><a href="#">Comida para niños</a></h3>
										</div>
									</div>
									<div class="card" data-skeleton="is-skeleton">
										<div class="skeleton skeleton-card">
											<div class="skeleton-card_img"></div>
											<div class="skeleton-card_title"></div>
											<div class="skeleton-card_category"></div>
											<div class="skeleton-card_excerpt"><span></span><span></span></div>
										</div>
										<div class="card-img">
											<div class="badge badge-card_info badge-card_info--collection">
												<span class="card-days">32</span>
												<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
												 stroke-linejoin="round">
													<use xlink:href="feather-sprite.svg#folder" />
												</svg>
											</div>
											<img src="./assets/ninos.png" class="img-responsive" alt="">
										</div>
										<div class="card-content">
											<a href="" class="badge badge-card badge--collection">Colección</a>
											<h3 class="card-title"><a href="#">Comida para niños</a></h3>
										</div>
									</div>
									<a class="card-all" href="#">
										<div class="card-all_inner">
											<svg width="30" height="30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
											stroke-linejoin="round">
												<use xlink:href="feather-sprite.svg#more-horizontal" />
											</svg>
											<span>Ver todos</span>
										</div>
									</a>
								</div>
							</div>
							<div class="explore-menu_section-list explore-menu_section_categories">
								<div class="explore-menu_section_title">
									<h3 class="title-sm">Busca por Categorías</h3>
								</div>
								<ul class="explore-menu_list">
									<li class="explore-menu_list_item"><a href="" class="explore-menu_list_link">Categoría</a></li>
								</ul>
							</div>
							<div class="explore-menu_section-list">
								<div class="explore-menu_section_title">
									<h3 class="title-sm">Busca por equipamiento</h3>
								</div>
								<ul class="explore-menu_list">
									<li class="explore-menu_list_item"><a href="" class="explore-menu_list_link">Equipamiento</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
		<router-view />
	</div>
</template>

<style lang="scss">
@import "styles/web.scss";

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