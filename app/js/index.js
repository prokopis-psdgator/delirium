/* ==========================================================================
   Open/Close footer dropdowns for mobile
   ========================================================================== */
$(document).ready(function () {
	$(".footer-list h3").click(function () {
		$(this).toggleClass("open");
	});
});

/* ==========================================================================
   Change icon for burger menu from X to Burger and reverse
   ========================================================================== */
$(document).ready(function () {
	$(".burger-menu-btn").click(function () {
		$(".burger-menu-btn").toggleClass("open");
	});
});

$(document).ready(function () {

	/* ==========================================================================
	   Home Hero Owl Carousel
	   ========================================================================== */

	$('.home-hero').owlCarousel({

		items: 1,
		dots: true,
		autoplay: true,
		autoplayTimeout: 3000,
		loop: true
	})

	/* ==========================================================================
	   End Of Home Hero Owl Carousel
	   ========================================================================== */

	/* ==========================================================================
	   Explore Section Owl Carousel
	   ========================================================================== */

	var owl_explore = $('.explore-wrapper'),
		owlOptions = {
			responsive: {
				// breakpoint from 0 up
				0: {
					nav: true,
					items: 1,
					dots: false,
					margin: 10
				},
				// breakpoint from 480 up
				767: {
					items: 2,
					dots: true,
					margin: 20
				},
				// breakpoint from 768 up
				1170: {
					items: 2,
					dots: true
				}
			}
		};


	if ($(window).width() < 1170) {
		var owlActive = owl_explore.owlCarousel(owlOptions);
	} else {
		owl_explore.addClass('off');
	}

	$(window).resize(function () {
		if ($(window).width() < 1170) {
			if ($('.explore-wrapper').hasClass('off')) {
				var owlActive = owl_explore.owlCarousel(owlOptions);
				owl_explore.removeClass('off');
			}
		} else {
			if (!$('.explore-wrapper').hasClass('off')) {
				owl_explore.addClass('off').trigger('destroy.owl.carousel');
				owl_explore.find('.owl-stage-outer').children(':eq(0)').unwrap();
			}
		}
	});

	/* ==========================================================================
	   End Of Explore Section Owl Carousel
	   ========================================================================== */

	/* ==========================================================================
	   Dependent Section Owl Carousel
	   ========================================================================== */


	var o1 = $('.slider-left-wrapper'), o2 = $('.slider-right-wrapper');

	//Carousel settings
	o1.owlCarousel({
		responsive: {
			// breakpoint from 0 up
			0: {
				center: true,
				items: 1,
				margin: 0,
				dots: false
			},
			// breakpoint from 480 up
			767: {
				center: true,
				items: 1,
				margin: 0,
			}
		}
	});

	o2.owlCarousel({
		responsive: {
			// breakpoint from 0 up
			0: {
				center: true,
				items: 1,
				margin: 0,
				dots: true

			},
			// breakpoint from 480 up
			767: {
				center: true,
				items: 1,
				margin: 0,
				dots: false
			}
		}
	});

	o1.on('changed.owl.carousel', function (event) {
		o2.trigger('to.owl.carousel', event.item.index);
	})

	o2.on('changed.owl.carousel', function (event) {
		o1.trigger('to.owl.carousel', event.item.index);
	})
	/* ==========================================================================
	   End Of Dependent Section Owl Carousel
	   ========================================================================== */
	/* ==========================================================================
	   Fluid Carousel Section Owl Carousel
	   ========================================================================== */

	   $(document).ready(function () {
	$('.fluid-carousel-wrapper').owlCarousel({
		responsive: {
			// breakpoint from 0 up
			0: {
				items: 1,
				margin: 15,
				dots: true,
				autoWidth: true

			},
			578: {
				items: 2,
				margin: 15,
				dots: true

			},
			1000: {
				items: 2,
				margin: 15,
				dots: true
			},

			1850: {
				items: 3,
				margin: 15,
				dots: true
			},

			2450: {
				items: 4,
				margin: 15,
				dots: true
			},

			3000: {
				items: 5,
				margin: 15,
				dots: true
			}
		}

	})
	setTimeout(function () {
		if ($('.background-card').width() < 578) {

			$('.fluid-carousel-item').addClass('mobile');

		} else {
			$('.fluid-carousel-item').removeClass('mobile');
		}

	}, 800);

	$(window).resize(function () {
		setTimeout(function () {
			if ($('.background-card').width() < 578) {

				$('.fluid-carousel-item').addClass('mobile');

			} else {

				$('.fluid-carousel-item').removeClass('mobile');

			}
		}, 800);
	});
	});
	/* ==========================================================================
	   End Of Fluid Carousel Section Owl Carousel
	   ========================================================================== */

	/* ==========================================================================
	   Gift Section Owl Carousel
	   ========================================================================== */
	$(document).ready(function () {
	$('.gift-item-slider').owlCarousel({
		responsive: {
			// breakpoint from 0 up
			0: {
				items: 1,
				margin: 15,
				dots: true,
				autoWidth: true,
				autoplay: true,
				autoplayTimeout: 5000,
				loop: true
			},
			578: {
				items: 2,
				margin: 70,
				dots: true,
				autoplay: true,
				autoplayTimeout: 5000,
				loop: true

			},
			991: {
				items: 3,
				margin: 70,
				dots: true,
				nav: true,
				autoplay: true,
				autoplayTimeout: 5000,
				loop: true
			}
		}
	})
	});
	/* ==========================================================================
	   End Of Gift Section Owl Carousel
	   ========================================================================== */
	/* ==========================================================================
	   Blog Section Owl Carousel
	   ========================================================================== */

	$('.blog-carousel').owlCarousel({
		responsive: {
			// breakpoint from 0 up
			0: {
				items: 1,
				margin: 15,
				dots: true,
				autoWidth: true
			},
			578: {
				items: 1,
				dots: true,
				nav: false

			},
			1492: {
				items: 1,
				dots: false,
				nav: true
			}
		}

	})

	$('.blog-small-slider').owlCarousel({
		items: 1,
		dots: false,
		nav: true

	})

	if ($(window).width() > 1330) {
		$('.blog-small-slider').owlCarousel('destroy');

	} else {
		$('.blog-small-slider').owlCarousel({
			items: 1,
			dots: false,
			nav: true

		})
	}

	$(window).resize(function () {
		if ($(window).width() > 1330) {
			$('.blog-small-slider').owlCarousel('destroy');
		} else {
			$('.blog-small-slider').owlCarousel({
				items: 1,
				dots: false,
				nav: true

			})
		}
	});

	/* ==========================================================================
	   End Of Blog Section Owl Carousel
	   ========================================================================== */
	/* ==========================================================================
	   Boutique Section Owl Carousel
	   ========================================================================== */


	if ($(window).width() > 750) {

		$('.boutique-mobile-slider').owlCarousel('destroy');
		$('.boutique-image-slider').owlCarousel({
			items: 1,
			dots: false,
			nav: true

		})


	} else {

		$('.boutique-image-slider').owlCarousel('destroy');

		$('.boutique-mobile-slider').owlCarousel({
			items: 1,
			dots: false,
			nav: true

		})
	}

	$(window).resize(function () {


		if ($(window).width() > 750 && !($('.boutique-image-slider').hasClass('owl-loaded'))) {

			$('.boutique-mobile-slider').owlCarousel('destroy');

			$('.boutique-image-slider').owlCarousel({
				items: 1,
				dots: false,
				nav: true

			})

		} else if ($(window).width() <= 750 && $('.boutique-image-slider').hasClass('owl-loaded')) {

			$('.boutique-image-slider').owlCarousel('destroy');

			$('.boutique-mobile-slider').owlCarousel({
				items: 1,
				dots: false,
				nav: true

			})
		}

	});


});
/* ==========================================================================
End Of Boutique Section Owl Carousel
========================================================================== */



/* ==========================================================================
   Brand Section Owl Carousel
   ========================================================================== */


$('.brand-slider').owlCarousel({

	responsive: {
		// breakpoint from 0 up
		0: {
			items: 4,
			margin: 25,
			dots: true,
			nav: false,
			autoWidth: true,
			autoplay: true,
			autoplayTimeout: 5000,
			loop: true,
			slideBy: 7
		},
		900: {
			items: 5,
			margin: 40,
			dots: true,
			nav: false,
			autoWidth: true,
			autoplay: true,
			autoplayTimeout: 5000,
			loop: true,
			slideBy: 7

		},
		1024: {
			items: 6,
			margin: 50,
			dots: true,
			nav: false,
			autoWidth: true,
			autoplay: true,
			autoplayTimeout: 5000,
			loop: true,
			slideBy: 7

		},
		1510: {
			items: 7,
			margin: 65,
			dots: true,
			nav: true,
			autoWidth: true,
			autoplay: true,
			autoplayTimeout: 5000,
			loop: true,
			slideBy: 7
		}
	}
})

/* ==========================================================================
   Brand Section Owl Carousel
   ========================================================================== */

/* ==========================================================================
   Email Validation
   ========================================================================== */

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function validate() {
	const $result = $("#result");
	const email = $("#email").val();
	$result.text("");

	if (validateEmail(email)) {
		$('.email-form-wrapper').addClass('valid');
		$('.email-form-wrapper').removeClass('invalid');
	} else {
		$('.email-form-wrapper').addClass('invalid');
		$('.email-form-wrapper').removeClass('valid');

	}
	return false;
}
$('#email').on('input', function (e) {
	validate(e.target.value);
});

$("#email-validate").on("click", validate);

/* ==========================================================================
   End Of Email Validation
   ========================================================================== */

/* ==========================================================================
   Hide top bar when user clicks on the X button
   ========================================================================== */
// $( document ).ready(function() {
//     $( ".btn-close" ).click(function() {
//         $( ".top-bar" ).hide();
//     });
// });

/* ==========================================================================
   Initialize Main Menu for mobile
   ========================================================================== */
document.addEventListener(
	"DOMContentLoaded", () => {
		var menu = new Mmenu("#burger-menu", {
			"extensions": [
				"fullscreen",
				"border-none",
				"position-front",
			],

			"navbars": [
				{
					"position": "top",
					"content": [
						'<div class="top-bar"> <div class="container"> <p> <strong>GIFT</strong> DELIRIUM DIFFUSER <span class="minimum-order">FOR PURCHASES OVER 150€</span><strong class="delivery-notice with-pad-left" >+ EU FREE DELIVERY</strong > </p><a href="#" class="btn-close"></a> </div></div><header> <div class="search-results-container"> <div class="search-results"> <ul class="outter-list"> <li class="mobile-visible"> <h3>Brands</h3> <ul class="inner-list"> <li><a href="#">Kilian Paris</a></li></ul> </li><li class="mobile-visible"> <h3>Products</h3> <ul class="inner-list"> <li><a href="#">Rolling in love<span>Narcotic Floral Perfume</span></a></li><li><a href="#">Rolling in love<span>Narcotic Floral Perfume</span></a></li><li><a href="#">Rolling in love<span>Narcotic Floral Perfume</span></a></li><li><a href="#">Rolling in love<span>Narcotic Floral Perfume</span></a></li><li><a href="#">Rolling in love<span>Narcotic Floral Perfume</span></a></li><li><a href="#">Rolling in love<span>Narcotic Floral Perfume</span></a></li></ul> </li></ul> <div class="search-button-wrapper"> <a class="text-btn" href="#">Show all</a> </div></div></div> <div class="container"> <div class="header-left"> <a href="#burger-menu" class="burger-menu-btn"></a> <div class="input-wrapper"> <input type="text" name="search" placeholder="Search"/> <img src="images/header/search.svg" alt="search"/> </div></div><div class="header-center"> <div class="logo"> <a href="#"> <img src="images/header/header-logo.svg" alt="logo" class="img-fluid"/></a> </div></div><div class="header-right"> <div class="header-links g-rose"><a href="#"></a></div><div class="header-links account"><a href="#"></a></div><div class="header-links wishlist"> <a href="#"><span class="wishlist-count">2</span></a> </div><div class="header-links shopping-cart"> <a href="#cart-menu"><span class="cart-items-count">1</span></a> </div></div><nav id="desktop-menu"> <ul class="nav-menu" > <li class="menu-item menu-item-has-children"> <a href="#">BRANDS</a> <div class="sub-menu-dropdown"> <div class="container"> <ul class="menu-level-1"> <li class="menu-column-li"> <ul class="menu-level-2 caps"> <li class="menu-list-header all"> <a href="#">A - Z</a> </li><li class="menu-list-header"> <a href="#">TOP BRANDS</a> </li><li class="menu-list-item"><a href="#">LA MER</a></li><li class="menu-list-item"> <a href="#">BOBBI BROWN</a> </li><li class="menu-list-item"><a href="#">JO MALONE</a></li><li class="menu-list-item"><a href="#">LONDON</a></li><li class="menu-list-item"> <a href="#">ESTEE LAUDER </a> </li><li class="menu-list-item"><a href="#">TOM FORD</a></li></ul> </li><li class="menu-column-li image"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#" ><img src="images/header/menu/three-col.jpg"/></a> </li></ul> </li><li class="menu-column-li image"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#" ><img src="images/header/menu/three-col.jpg"/></a> </li></ul> </li><li class="menu-column-li image"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#" ><img src="images/header/menu/three-col.jpg"/></a> </li></ul> </li></ul> </div></div></li><li class="menu-item menu-item-has-children"> <a href="#">FRAGRANCES</a> </li><li class="menu-item menu-item-has-children"> <a href="#">FACE CARE</a> </li><li class="menu-item menu-item-has-children"> <a href="#">MAKE UP</a> <div class="sub-menu-dropdown"> <div class="container"> <ul class="menu-level-1"> <li class="menu-column-li"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#">FACE</a> </li><li class="menu-list-item"> <a href="#">Foundation</a> </li><li class="menu-list-item"><a href="#">Powders</a></li><li class="menu-list-item"> <a href="#">Concealer</a> </li><li class="menu-list-item"> <a href="#">Blush & Bronzers </a> </li><li class="menu-list-item"> <a href="#">Contouring & Highlighting </a> </li><li class="menu-list-item"> <a href="#">Primers</a> </li><li class="menu-list-item shop-all"> <a href="#">shop all</a> </li><li class="menu-list-header"> <a href="#">Travel Sizes & Minis</a> </li></ul> </li><li class="menu-column-li"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#">Eyes</a> </li><li class="menu-list-item"> <a href="#">Eyeshadows</a> </li><li class="menu-list-item"><a href="#">Eyeliners</a></li><li class="menu-list-item"> <a href="#">Mascara</a> </li><li class="menu-list-item"><a href="#">Brows </a></li><li class="menu-list-item"><a href="#">Lashes </a></li><li class="menu-list-item"> <a href="#">Eye Palettes</a> </li><li class="menu-list-item shop-all"> <a href="#">shop all</a> </li></ul> </li><li class="menu-column-li"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#">Lips</a> </li><li class="menu-list-item"> <a href="#">Lipstick </a> </li><li class="menu-list-item"><a href="#">Lipgloss</a></li><li class="menu-list-item"> <a href="#">Lip Liner </a> </li><li class="menu-list-item"><a href="#">Lip Spa </a></li><li class="menu-list-item"> <a href="#">Lip Palettes </a> </li><li class="menu-list-item shop-all"> <a href="#">shop all</a> </li><li class="menu-list-header"> <a href="#">Brushes & Accessories</a> </li><li class="menu-list-item"> <a href="#">Brushes </a> </li><li class="menu-list-item"> <a href="#">Accessories</a> </li><li class="menu-list-item shop-all"> <a href="#">shop all</a> </li></ul> </li><li class="menu-column-li image"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#" ><img src="images/header/menu/three-col.jpg"/></a> </li></ul> </li></ul> </div></div></li><li class="menu-item menu-item-has-children"> <a href="#">HAIR</a> <div class="sub-menu-dropdown"> <div class="container"> <ul class="menu-level-1"> <li class="menu-column-li"> <ul class="menu-level-2"> <li class="menu-list-header"><a href="#">HAIR</a></li><li class="menu-list-item"><a href="#">Shampoo</a></li><li class="menu-list-item"> <a href="#">Conditioner</a> </li><li class="menu-list-item"><a href="#">Masks</a></li><li class="menu-list-item"><a href="#">Treatment</a></li><li class="menu-list-item"><a href="#">Hair Mists</a></li><li class="menu-list-item"><a href="#">Styling</a></li><li class="menu-list-item shop-all"> <a href="#">shop all</a> </li></ul> </li><li class="menu-column-li image"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#" ><img src="images/header/menu/one-col1.jpg"/></a> </li></ul> </li><li class="menu-column-li image"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#" ><img src="images/header/menu/one-col2.jpg"/></a> </li></ul> </li><li class="menu-column-li image"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#" ><img src="images/header/menu/one-col3.jpg"/></a> </li></ul> </li></ul> </div></div></li><li class="menu-item menu-item-has-children"> <a href="#">BATH & BODY</a> </li><li class="menu-item menu-item-has-children"><a href="#">MEN</a></li><li class="menu-item menu-item-has-children"><a href="#">HOME</a></li><li class="menu-item menu-item-has-children"> <a href="#">NEW IN</a> </li><li class="menu-item menu-item-has-children"> <a href="#">OFFERS</a> </li><li class="menu-item menu-item-has-children"> <a href="#">EXCLUSIVES</a> </li></ul> </nav> </div></header>'
					]
				}
			]
		});

		var api = menu.API;
		$(".burger-menu-btn").click(function () {
			// $(".burger-menu-btn.open").toggleClass("open");
			api.close();
			api.closeAllPanels();
		});

		/* ==========================================================================
		Close menu when you click on cart button
		========================================================================== */
		$(".header-links.shopping-cart a").on('click',function () {
			$(".burger-menu-btn").removeClass("open");
			api.close();
			api.closeAllPanels();
		});
		
	}
);

/* ==========================================================================
   Initialize Cart Menu for mobile
   ========================================================================== */
document.addEventListener(
	"DOMContentLoaded", () => {
		var menu = new Mmenu("#cart-menu", {
			"extensions": {
				"all": [
					"pagedim-black",
					"border-none",
					"position-front",
					"position-right"
				],
				"(max-width: 575px)": [
					"fullscreen"
				]
			},

			"navbars": [
				{
					"position": "top",
					"content": [
						'<div class="top-bar"> <div class="container"> <p> <strong>GIFT</strong> DELIRIUM DIFFUSER <span class="minimum-order">FOR PURCHASES OVER 150€</span><strong class="delivery-notice with-pad-left" >+ EU FREE DELIVERY</strong > </p><a href="#" class="btn-close"></a> </div></div><header>  <div class="search-results-container"> <div class="search-results"> <ul class="outter-list"> <li class="mobile-visible"> <h3>Brands</h3> <ul class="inner-list"> <li><a href="#">Kilian Paris</a></li></ul> </li><li class="mobile-visible"> <h3>Products</h3> <ul class="inner-list"> <li><a href="#">Rolling in love<span>Narcotic Floral Perfume</span></a></li><li><a href="#">Rolling in love<span>Narcotic Floral Perfume</span></a></li><li><a href="#">Rolling in love<span>Narcotic Floral Perfume</span></a></li><li><a href="#">Rolling in love<span>Narcotic Floral Perfume</span></a></li><li><a href="#">Rolling in love<span>Narcotic Floral Perfume</span></a></li><li><a href="#">Rolling in love<span>Narcotic Floral Perfume</span></a></li></ul> </li></ul> <div class="search-button-wrapper"> <a class="text-btn" href="#">Show all</a> </div></div></div><div class="container"> <div class="header-left"> <a href="#burger-menu" class="burger-menu-btn"></a> <div class="input-wrapper"> <input type="text" name="search" placeholder="Search"/> <img src="images/header/search.svg" alt="search"/> </div></div><div class="header-center"> <div class="logo"> <a href="#"> <img src="images/header/header-logo.svg" alt="logo" class="img-fluid"/></a> </div></div><div class="header-right"> <div class="header-links g-rose"><a href="#"></a></div><div class="header-links account"><a href="#"></a></div><div class="header-links wishlist"> <a href="#"><span class="wishlist-count">2</span></a> </div><div class="header-links shopping-cart"> <a href="#"><span class="cart-items-count">1</span></a> </div></div><nav id="desktop-menu"> <ul class="nav-menu" > <li class="menu-item menu-item-has-children"> <a href="#">BRANDS</a> <div class="sub-menu-dropdown"> <div class="container"> <ul class="menu-level-1"> <li class="menu-column-li"> <ul class="menu-level-2 caps"> <li class="menu-list-header all"> <a href="#">A - Z</a> </li><li class="menu-list-header"> <a href="#">TOP BRANDS</a> </li><li class="menu-list-item"><a href="#">LA MER</a></li><li class="menu-list-item"> <a href="#">BOBBI BROWN</a> </li><li class="menu-list-item"><a href="#">JO MALONE</a></li><li class="menu-list-item"><a href="#">LONDON</a></li><li class="menu-list-item"> <a href="#">ESTEE LAUDER </a> </li><li class="menu-list-item"><a href="#">TOM FORD</a></li></ul> </li><li class="menu-column-li image"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#" ><img src="images/header/menu/three-col.jpg"/></a> </li></ul> </li><li class="menu-column-li image"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#" ><img src="images/header/menu/three-col.jpg"/></a> </li></ul> </li><li class="menu-column-li image"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#" ><img src="images/header/menu/three-col.jpg"/></a> </li></ul> </li></ul> </div></div></li><li class="menu-item menu-item-has-children"> <a href="#">FRAGRANCES</a> </li><li class="menu-item menu-item-has-children"> <a href="#">FACE CARE</a> </li><li class="menu-item menu-item-has-children"> <a href="#">MAKE UP</a> <div class="sub-menu-dropdown"> <div class="container"> <ul class="menu-level-1"> <li class="menu-column-li"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#">FACE</a> </li><li class="menu-list-item"> <a href="#">Foundation</a> </li><li class="menu-list-item"><a href="#">Powders</a></li><li class="menu-list-item"> <a href="#">Concealer</a> </li><li class="menu-list-item"> <a href="#">Blush & Bronzers </a> </li><li class="menu-list-item"> <a href="#">Contouring & Highlighting </a> </li><li class="menu-list-item"> <a href="#">Primers</a> </li><li class="menu-list-item shop-all"> <a href="#">shop all</a> </li><li class="menu-list-header"> <a href="#">Travel Sizes & Minis</a> </li></ul> </li><li class="menu-column-li"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#">Eyes</a> </li><li class="menu-list-item"> <a href="#">Eyeshadows</a> </li><li class="menu-list-item"><a href="#">Eyeliners</a></li><li class="menu-list-item"> <a href="#">Mascara</a> </li><li class="menu-list-item"><a href="#">Brows </a></li><li class="menu-list-item"><a href="#">Lashes </a></li><li class="menu-list-item"> <a href="#">Eye Palettes</a> </li><li class="menu-list-item shop-all"> <a href="#">shop all</a> </li></ul> </li><li class="menu-column-li"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#">Lips</a> </li><li class="menu-list-item"> <a href="#">Lipstick </a> </li><li class="menu-list-item"><a href="#">Lipgloss</a></li><li class="menu-list-item"> <a href="#">Lip Liner </a> </li><li class="menu-list-item"><a href="#">Lip Spa </a></li><li class="menu-list-item"> <a href="#">Lip Palettes </a> </li><li class="menu-list-item shop-all"> <a href="#">shop all</a> </li><li class="menu-list-header"> <a href="#">Brushes & Accessories</a> </li><li class="menu-list-item"> <a href="#">Brushes </a> </li><li class="menu-list-item"> <a href="#">Accessories</a> </li><li class="menu-list-item shop-all"> <a href="#">shop all</a> </li></ul> </li><li class="menu-column-li image"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#" ><img src="images/header/menu/three-col.jpg"/></a> </li></ul> </li></ul> </div></div></li><li class="menu-item menu-item-has-children"> <a href="#">HAIR</a> <div class="sub-menu-dropdown"> <div class="container"> <ul class="menu-level-1"> <li class="menu-column-li"> <ul class="menu-level-2"> <li class="menu-list-header"><a href="#">HAIR</a></li><li class="menu-list-item"><a href="#">Shampoo</a></li><li class="menu-list-item"> <a href="#">Conditioner</a> </li><li class="menu-list-item"><a href="#">Masks</a></li><li class="menu-list-item"><a href="#">Treatment</a></li><li class="menu-list-item"><a href="#">Hair Mists</a></li><li class="menu-list-item"><a href="#">Styling</a></li><li class="menu-list-item shop-all"> <a href="#">shop all</a> </li></ul> </li><li class="menu-column-li image"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#" ><img src="images/header/menu/one-col1.jpg"/></a> </li></ul> </li><li class="menu-column-li image"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#" ><img src="images/header/menu/one-col2.jpg"/></a> </li></ul> </li><li class="menu-column-li image"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#" ><img src="images/header/menu/one-col3.jpg"/></a> </li></ul> </li></ul> </div></div></li><li class="menu-item menu-item-has-children"> <a href="#">BATH & BODY</a> </li><li class="menu-item menu-item-has-children"><a href="#">MEN</a></li><li class="menu-item menu-item-has-children"><a href="#">HOME</a></li><li class="menu-item menu-item-has-children"> <a href="#">NEW IN</a> </li><li class="menu-item menu-item-has-children"> <a href="#">OFFERS</a> </li><li class="menu-item menu-item-has-children"> <a href="#">EXCLUSIVES</a> </li></ul> </nav> </div></header>'
						// '<div class="cart-header"><span class="cart-header_left">My Cart</span><span class="cart-header_right">3 Products</span></div>'
					],
				},
				{
					"position": "top",
					"content": [
						'close',
						// '<div class="top-bar"> <div class="container"> <p> <strong>GIFT</strong> DELIRIUM DIFFUSER <span class="minimum-order">FOR PURCHASES OVER 150€</span><strong class="delivery-notice with-pad-left" >+ EU FREE DELIVERY</strong > </p><a href="#" class="btn-close"></a> </div></div><header> <div class="container"> <div class="header-left"> <a href="#burger-menu" class="burger-menu-btn open"></a> <div class="input-wrapper"> <input type="text" name="search" placeholder="Search"/> <img src="images/header/search.svg" alt="search"/> </div></div><div class="header-center"> <div class="logo"> <a href="#"> <img src="images/header/header-logo.svg" alt="logo" class="img-fluid"/></a> </div></div><div class="header-right"> <div class="header-links g-rose"><a href="#"></a></div><div class="header-links account"><a href="#"></a></div><div class="header-links wishlist"> <a href="#"><span class="wishlist-count">2</span></a> </div><div class="header-links shopping-cart"> <a href="#"><span class="cart-items-count">1</span></a> </div></div><nav id="desktop-menu"> <ul class="nav-menu" > <li class="menu-item menu-item-has-children"> <a href="#">BRANDS</a> <div class="sub-menu-dropdown"> <div class="container"> <ul class="menu-level-1"> <li class="menu-column-li"> <ul class="menu-level-2 caps"> <li class="menu-list-header all"> <a href="#">A - Z</a> </li><li class="menu-list-header"> <a href="#">TOP BRANDS</a> </li><li class="menu-list-item"><a href="#">LA MER</a></li><li class="menu-list-item"> <a href="#">BOBBI BROWN</a> </li><li class="menu-list-item"><a href="#">JO MALONE</a></li><li class="menu-list-item"><a href="#">LONDON</a></li><li class="menu-list-item"> <a href="#">ESTEE LAUDER </a> </li><li class="menu-list-item"><a href="#">TOM FORD</a></li></ul> </li><li class="menu-column-li image"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#" ><img src="images/header/menu/three-col.jpg"/></a> </li></ul> </li><li class="menu-column-li image"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#" ><img src="images/header/menu/three-col.jpg"/></a> </li></ul> </li><li class="menu-column-li image"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#" ><img src="images/header/menu/three-col.jpg"/></a> </li></ul> </li></ul> </div></div></li><li class="menu-item menu-item-has-children"> <a href="#">FRAGRANCES</a> </li><li class="menu-item menu-item-has-children"> <a href="#">FACE CARE</a> </li><li class="menu-item menu-item-has-children"> <a href="#">MAKE UP</a> <div class="sub-menu-dropdown"> <div class="container"> <ul class="menu-level-1"> <li class="menu-column-li"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#">FACE</a> </li><li class="menu-list-item"> <a href="#">Foundation</a> </li><li class="menu-list-item"><a href="#">Powders</a></li><li class="menu-list-item"> <a href="#">Concealer</a> </li><li class="menu-list-item"> <a href="#">Blush & Bronzers </a> </li><li class="menu-list-item"> <a href="#">Contouring & Highlighting </a> </li><li class="menu-list-item"> <a href="#">Primers</a> </li><li class="menu-list-item shop-all"> <a href="#">shop all</a> </li><li class="menu-list-header"> <a href="#">Travel Sizes & Minis</a> </li></ul> </li><li class="menu-column-li"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#">Eyes</a> </li><li class="menu-list-item"> <a href="#">Eyeshadows</a> </li><li class="menu-list-item"><a href="#">Eyeliners</a></li><li class="menu-list-item"> <a href="#">Mascara</a> </li><li class="menu-list-item"><a href="#">Brows </a></li><li class="menu-list-item"><a href="#">Lashes </a></li><li class="menu-list-item"> <a href="#">Eye Palettes</a> </li><li class="menu-list-item shop-all"> <a href="#">shop all</a> </li></ul> </li><li class="menu-column-li"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#">Lips</a> </li><li class="menu-list-item"> <a href="#">Lipstick </a> </li><li class="menu-list-item"><a href="#">Lipgloss</a></li><li class="menu-list-item"> <a href="#">Lip Liner </a> </li><li class="menu-list-item"><a href="#">Lip Spa </a></li><li class="menu-list-item"> <a href="#">Lip Palettes </a> </li><li class="menu-list-item shop-all"> <a href="#">shop all</a> </li><li class="menu-list-header"> <a href="#">Brushes & Accessories</a> </li><li class="menu-list-item"> <a href="#">Brushes </a> </li><li class="menu-list-item"> <a href="#">Accessories</a> </li><li class="menu-list-item shop-all"> <a href="#">shop all</a> </li></ul> </li><li class="menu-column-li image"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#" ><img src="images/header/menu/three-col.jpg"/></a> </li></ul> </li></ul> </div></div></li><li class="menu-item menu-item-has-children"> <a href="#">HAIR</a> <div class="sub-menu-dropdown"> <div class="container"> <ul class="menu-level-1"> <li class="menu-column-li"> <ul class="menu-level-2"> <li class="menu-list-header"><a href="#">HAIR</a></li><li class="menu-list-item"><a href="#">Shampoo</a></li><li class="menu-list-item"> <a href="#">Conditioner</a> </li><li class="menu-list-item"><a href="#">Masks</a></li><li class="menu-list-item"><a href="#">Treatment</a></li><li class="menu-list-item"><a href="#">Hair Mists</a></li><li class="menu-list-item"><a href="#">Styling</a></li><li class="menu-list-item shop-all"> <a href="#">shop all</a> </li></ul> </li><li class="menu-column-li image"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#" ><img src="images/header/menu/one-col1.jpg"/></a> </li></ul> </li><li class="menu-column-li image"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#" ><img src="images/header/menu/one-col2.jpg"/></a> </li></ul> </li><li class="menu-column-li image"> <ul class="menu-level-2"> <li class="menu-list-header"> <a href="#" ><img src="images/header/menu/one-col3.jpg"/></a> </li></ul> </li></ul> </div></div></li><li class="menu-item menu-item-has-children"> <a href="#">BATH & BODY</a> </li><li class="menu-item menu-item-has-children"><a href="#">MEN</a></li><li class="menu-item menu-item-has-children"><a href="#">HOME</a></li><li class="menu-item menu-item-has-children"> <a href="#">NEW IN</a> </li><li class="menu-item menu-item-has-children"> <a href="#">OFFERS</a> </li><li class="menu-item menu-item-has-children"> <a href="#">EXCLUSIVES</a> </li></ul> </nav> </div></header>'
						'<div class="cart-header"><span class="cart-header_left">My Cart</span><span class="cart-header_right">3 Products</span></div>'
					],
				},
				{
					"position": "bottom",
					"content": [
						'<div class="cart-cost"><span class="cart-cost__text">Subtotal</span><span class="cart-cost__number">236,00€</span></div>',
						'<div class="cart-cost"><span class="cart-cost__text">Delivery</span><span class="cart-cost__number">20,00€</span></div>',
						'<div class="cart-cost total"><span class="cart-cost__text">Total</span><span class="cart-cost__number">256,00€</span></div>'

					],
				},
				{
					"position": "bottom",
					"content": [
						'<div class="cart-buttons"><div class="cart-buttons__back"><a href="#" class="text-btn">My Cart</a><a href="#" class="text-btn">Continue Shopping</a></div><a href="#" class="btn-dark">Checkout</a></div>'
					],
				}
			]
		});

		

		var api = menu.API;
		$(".close-cart-btn").click(function () {
			api.close();
		});
	}
);


/* ==========================================================================
   Delete cart item
   ========================================================================== */
$(document).ready(function () {
	$(".remove-cart-item").click(function () {
		$(this).parent().parent().parent().remove();
	});
});

/* ==========================================================================
   Open/Close filter dropdowns in product grid
   ========================================================================== */
$(document).ready(function () {
	$(".filters h4").click(function () {
		$(this).toggleClass("open");
	});
});
$(document).ready(function () {
	$(".filters-mobile h4").click(function () {
		$(this).toggleClass("open");
	});
});

/* ==========================================================================
   Custom Select for sort-bar
   ========================================================================== */
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	ll = selElmnt.length;
	/*for each element, create a new DIV that will act as the selected item:*/
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	/*for each element, create a new DIV that will contain the option list:*/
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < ll; j++) {
		/*for each option in the original select element,
		create a new DIV that will act as an option item:*/
		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function (e) {
			/*when an item is clicked, update the original select box,
			and the selected item:*/
			var y, i, k, s, h, sl, yl;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			sl = s.length;
			h = this.parentNode.previousSibling;
			for (i = 0; i < sl; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					yl = y.length;
					for (k = 0; k < yl; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function (e) {
		/*when the select box is clicked, close any other select boxes,
		and open/close the current select box:*/
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}
function closeAllSelect(elmnt) {
	/*a function that will close all select boxes in the document,
	except the current select box:*/
	var x, y, i, xl, yl, arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	xl = x.length;
	yl = y.length;
	for (i = 0; i < yl; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i)
		} else {
			y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < xl; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

/* ==========================================================================
   Open/Close Category Selection and Filters for mobile
   ========================================================================== */
$(document).ready(function () {
	$(".mobile-bar .mobile-categories").click(function () {
		$(this).toggleClass("open");
		$(".mobile-bar .mobile-filters").removeClass("open");
		$(".mobile-bar .mobile-filters").next().removeClass("open");
		$(this).next().toggleClass("open");
	});
	$(".mobile-bar .mobile-filters").click(function () {
		$(this).toggleClass("open");
		$(".mobile-bar .mobile-categories").removeClass("open");
		$(".mobile-bar .mobile-categories").next().removeClass("open");
		$(this).next().toggleClass("open");
	});

	// On page load calc top for header, mobile-bar
	calcCssProperties();

	// Also do this on resize
	$(window).resize(function () {
		if (window.matchMedia("(max-width: 767px)").matches) {
			// Do sth
		}
		calcCssProperties();
	  });
	

	function calcCssProperties() {
		// console.log('Topbar height : ' + calcElHeight('.top-bar'));
		// console.log('Header height : ' + calcElHeight('header'));
		// console.log('Mobile bar height : ' + calcElHeight('.mobile-bar'));

		$('header').each(function() {
			$(this).css({
				top: calcElHeight('.top-bar') + 'px'
			});
		})

	}

	// Calc element height
	function calcElHeight( $selector ) {
		var elHeight = 0;

		$( $selector ).each(function() {
			var $el = $(this);
			if( $el.outerHeight(true) > 0 ) {
				elHeight = $el.outerHeight(true);
			}
		})

		return elHeight;
	}

	$('.mobile-bar').each(function() {
		var $mobileBar = $(this);
		var $mobileFilters = $mobileBar.find('.filters-mobile');

		var mixedHeight = calcElHeight('.top-bar') + calcElHeight('header');
		// top bar height + header height + mobile filters height
		var allHeight = mixedHeight + calcElHeight('.mobile-filters');

		$mobileFilters.css({
			height: 'calc(100vh - ' + allHeight + 'px',
		});

		$(window).scroll(function() {

			var currentScroll = $(window).scrollTop();
			// top bar height + header height
			var mixedHeight = calcElHeight('.top-bar') + calcElHeight('header');
			// px after which we should fix mobile filters
			var fixmeTop = $mobileBar.offset().top - (mixedHeight);

			if ( currentScroll > 0 && currentScroll >= fixmeTop ) {
				$mobileBar.addClass('is_fixed');
				$mobileBar.css({
					position: 'fixed',
					top: mixedHeight + 'px',
				});
			} else {
				$mobileBar.removeClass('is_fixed');
				$mobileBar.css({
					position: 'relative',
					top: 'auto'
				});
			}
		});
	});

	$(window).resize(function() {
		$('.mobile-bar').each(function() {
			var $mobileBar = $(this);
			var $mobileFilters = $mobileBar.find('.filters-mobile');
	
			var mixedHeight = calcElHeight('.top-bar') + calcElHeight('header');
			// top bar height + header height + mobile filters height
			var allHeight = mixedHeight + calcElHeight('.mobile-filters');
	
			$mobileFilters.css({
				height: 'calc(100vh - ' + allHeight + 'px',
			});
	
			$(window).scroll(function() {
	
				var currentScroll = $(window).scrollTop();
				// top bar height + header height
				var mixedHeight = calcElHeight('.top-bar') + calcElHeight('header');
				// px after which we should fix mobile filters
				var fixmeTop = $mobileBar.offset().top - (mixedHeight);
	
				if ( currentScroll > 0 && currentScroll >= fixmeTop ) {
					$mobileBar.addClass('is_fixed');
					$mobileBar.css({
						position: 'fixed',
						top: mixedHeight + 'px',
					});
				} else {
					$mobileBar.removeClass('is_fixed');
					$mobileBar.css({
						position: 'relative',
						top: 'auto'
					});
				}
			});
		});
	});
});
/*	var menuContainer = null;

$( ".nav-menu li.menu-item-has-children").mouseenter((function(e) {

	if (e.target.classList.contains('menu-item-has-children')) {
		menuContainer = e.target;
	}else{
		menuContainer = e.target.parentElement;
	}
	if (menuContainer.children.length > 1) {
		if (menuContainer.children[1].classList.contains('sub-menu-dropdown') && menuContainer.children[1] != undefined) {
			setTimeout(function(){
					console.log(menuContainer.children[1]);
				menuContainer.children[1].style.display = 'block';
			}, 600);
		}
	}

}));

$( ".nav-menu li.menu-item-has-children").mouseleave((function(e) {


	if (menuContainer.children.length > 1) {
		if (menuContainer.children[1].classList.contains('sub-menu-dropdown') && menuContainer.children[1] != undefined) {
			setTimeout(function(){
				console.log(menuContainer.children[1]);
				menuContainer.children[1].style.display = 'none';
			}, 600);
		}
	}


}));*/

// Sticky header remove elements

$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	if (scroll >= 1) {
		if ($(document).width() > 991) {
			$('.header-left').css("display", "none");
			$('.header-center').css("display", "none");
			$('.header-right').css("display", "none");
			$('header').css("padding", "15px 0 15px");
			$(".search-results").hide().removeClass("open"); //replace with closeSearchResults function
			$('header .container nav .nav-menu').css("margin-top", "0");
			$('.sub-menu-dropdown').css('margin-top', '44px');
		}
		$('header').addClass("shadow");
		document.body.style.overflowY = "visible";
		document.querySelector(".fake-body").style.overflowY = "visible";
	} else {
		if ($(document).width() > 991) {
			$('.header-left').css("display", "block");
			$('.header-center').css("display", "block");
			$('.header-right').css("display", "flex");
			$('header').css("padding", "25px 20px 10px");
			$('header .container nav .nav-menu').css("margin-top", "25px");
			$('.sub-menu-dropdown').css('margin-top', '116px');
		} 
		$('header').removeClass("shadow");
	}
});

//open search bar on mobile
$(document).ready(function () {
	$(".input-wrapper img").click(function () {
		$(".header-left .input-wrapper").toggleClass("open");
		$(".header-left .input-wrapper input").toggleClass("open");
		$(".search-results").hide().removeClass("open");
		document.body.style.overflowY = "visible";
		$(this).toggleClass("open");
		if ($(this).hasClass("open")) {
			$(this).attr('src','images/header/search-close.svg');
			document.body.style.overflowY = "visible";
			document.querySelector(".fake-body").style.overflowY = "visible";
		} else {
			$(this).attr('src','images/header/search.svg');
			document.body.style.overflowY = "hidden";
			document.querySelector(".fake-body").style.overflowY = "hidden";
		}
	});
});


//display search results
$(document).ready(function () {
	$(".input-wrapper input").on('input', function() {
		if( !$(this).val() ) {
			$(".search-results").hide().removeClass("open");
				if ($(document).width() < 991) {
				// document.body.style.overflowY = "visible";
				// document.querySelector(".fake-body").style.overflowY = "visible";
				}
		} else {
			$(".search-results").show().addClass("open");
				if ($(document).width() < 991) {
					// document.body.style.overflowY = "hidden";
					// document.querySelector(".fake-body").style.overflowY = "hidden";
				}
				styleSearchScrollbars();
		}


	});

});


//hide search results when user clicks anywhere but on the Search results or Search bar
$(document).ready(function () {

	$("body").click(function(e){ 
		if (!$(e.target).closest(".search-results, .input-wrapper.open input").length ) {
			$(".search-results").hide().removeClass("open");
			document.body.style.overflowY = "visible";
			document.querySelector(".fake-body").style.overflowY = "visible";
		}
    });

});


//check if search results are scrollable to add a line beneath the scrollbar (Doesn't work on Firefox)
function styleSearchScrollbars () {
	var searchResultsLists = document.querySelectorAll(".search-results .outter-list");

	for (let i=0; i<searchResultsLists.length; i++) {
		let scrollHeight = searchResultsLists[i].scrollHeight;
		let clientHeight = searchResultsLists[i].clientHeight;

		if(scrollHeight > clientHeight)
		{
			searchResultsLists[i].parentElement.classList.add("scrollable");
		}

	}
}


/* ==========================================================================
Free Samples Owl Carousel
========================================================================== */
$(document).ready(function () {
$('.free-sample-slider').owlCarousel({
	responsive: {
		// breakpoint from 0 up
		0: {
			items: 2,
			margin: 15,
			dots: true,
			// autoWidth: true,
			// autoplay: true,
			// autoplayTimeout: 5000,
			loop: true
		},
		578: {
			items: 2,
			margin: 70,
			dots: true,
			// autoplay: true,
			// autoplayTimeout: 5000,
			loop: true

		},
		991: {
			items: 3,
			margin: 70,
			dots: true,
			nav: true,
			// autoplay: true,
			// autoplayTimeout: 5000,
			loop: true
		}
	}
})
});
/* ==========================================================================
	Free Samples Owl Carousel
========================================================================== */

// select up to 2 free samples
$(document).ready(function () {

	var selected = 0;
	$(".btn-select").click(function (e) {
		e.preventDefault();

		if (selected < 2 && !$(this).hasClass("selected")) {
			$(this).addClass("selected");
			$(this).html("selected");
			selected++;
			let text = selected + ' / 2';
			$("#samples-selected").html(text);
		} else if ($(this).hasClass("selected")) {
			$(this).removeClass("selected");
			$(this).html("select");
			selected--;
			let text = selected + ' / 2';
			$("#samples-selected").html(text);
		}
	});
});


/* ==========================================================================
	Free Deliver Owl Carousel
========================================================================== */
$(document).ready(function () {
	$('.free-delivery-slider').owlCarousel({
		responsive: {
			// breakpoint from 0 up
			0: {
				items: 2,
				margin: 15,
				dots: true,
				// autoWidth: true,
				// autoplay: true,
				// autoplayTimeout: 5000,
				loop: true
			},
			578: {
				items: 2,
				margin: 70,
				dots: true,
				// autoplay: true,
				// autoplayTimeout: 5000,
				loop: true

			},
			991: {
				items: 3,
				margin: 70,
				dots: true,
				nav: true,
				// autoplay: true,
				// autoplayTimeout: 5000,
				loop: true
			}
		}
	})
});
/* ==========================================================================
	Free Delivery Owl Carousel
========================================================================== */


$(document).ready(function () {
	// jquery ui spinner for product page
    $('.jsSpinnerInput').each( function() {
        $input = $(this);

        $input.spinner( {
            min: 1,
            icons: {
                down: "ui-icon-minus",
                up: "ui-icon-plus"
            }
        } );
    } );

	// functionality for accordion for product page
	$('.jsAccordionToggler').each(function() {
		var $toggler = $(this);
		var $accordionItem = $toggler.closest('.accordion-item');
		var $accordionText = $accordionItem.find('.accordion-text');
		
		$toggler.on('click', function() {
			if( $accordionText.is(":hidden") ) {
				$accordionText.slideDown();
				$accordionItem.addClass('is_active');
			} else {
				$accordionText.slideUp();
				$accordionItem.removeClass('is_active');
			}
		});
	});

	// functionality for select color circles for product page
	$('.color-circles figure').each(function() {
		$(this).on('click', function() {
			var $color = $(this).attr('data-value');
			var $circle = $(this).parent();
			var $attributeWrapper = $(this).closest('.product-att');
			var $targetEl = $attributeWrapper.find('.custom-dropdown-value');

			if( $('.circle.is_active').length > 0 ) {
				$('.circle.is_active').removeClass('is_active');
			}

			$circle.addClass('is_active');
			$targetEl.text($color);
		});
	});

	// functionality for click on dropdown option for product page
	$('.custom-dropdown-options .option').each(function() {
		$(this).on('click', function() {
			var $value = $(this).attr('data-value');
			var $attributeWrapper = $(this).closest('.product-att');
			var $targetEl = $attributeWrapper.find('.custom-dropdown-value');
			var $dropdown = $attributeWrapper.find('.custom-dropdown-options');

			if( $(this).find('figure').length > 0 ) {
				var $colorHex = $(this).find('figure').css('backgroundColor');
			} else {
				var $colorHex = false;
			}

			$targetEl.find('span').text($value);

			if( $colorHex ) {
				$targetEl.find('figure').css({
					backgroundColor: $colorHex,
				});

				// console.log($colorHex);
			}

			$dropdown.removeClass('is_visible');

			// console.log($dropdown);

		});
	});

	// init products carousels - can be used everywhere
	$('.products-carousel').owlCarousel({
		dots:false,
		loop:true,
		margin:35,
		nav:true,
		responsive:{
			0:{
				items:2,
				dots: true,
				nav: false
			},
			768:{
				items:3
			},
			1200:{
				items:4
			}
		}
	})

	// init carousel for product featured image
	$('.single-featured-carousel').owlCarousel({
		dots:true,
		loop:true,
		nav:false,
		items: 1,
	})

	// init carousel for questions
	$('.questions-carousel').owlCarousel({
		dots:true,
		loop:false,
		nav:true,
		items: 1,
	})

	// functionality for reviews read more btn
	$('.review-item-more a').each(function() {
		$(this).on('click', function(e) {
			e.preventDefault();
			var $btnContainer = $(this).parent();
			var $text = $btnContainer.prev();
			// if( $text.is(":hidden") ) {
			// 	$text.slideDown();
			// } else {
			// 	$text.slideUp();
			// }
			$btnContainer.toggleClass('reverse');
			$text.toggleClass('is_open');

		});
	});

	// On custom radio click trigger owl next click
	$('.questions-carousel .custom-radio label').each(function() {
		$(this).on('click', function() {
			var $carousel = $(this).closest('.questions-carousel');

			$carousel.trigger('next.owl.carousel');
		});
	})
});


if( $( "#slider-range" ).length > 0 ) {
	// price range field
	$(document).ready(function () {
		$(function() {
			$( "#slider-range" ).slider({
			range: true,
			min: 130,
			max: 500,
			values: [ 130, 250 ],
			slide: function( event, ui ) {
				$( "#amount" ).val( ui.values[ 0 ] + "€"  +  "  -  " + ui.values[ 1 ] + "€" );
			}
			});
			$( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + "€" +
			"  -  " + $( "#slider-range" ).slider( "values", 1 ) + "€" );
		});

	});
}


if( $( "#slider-range-mobile" ).length > 0 ) {

	// price range field for mobile
	$(document).ready(function () {
		$(function() {
			$( "#slider-range-mobile" ).slider({
			range: true,
			min: 130,
			max: 500,
			values: [ 130, 250 ],
			slide: function( event, ui ) {
				$( "#amount-mobile" ).val( ui.values[ 0 ] + "€"  +  "  -  " + ui.values[ 1 ] + "€" );
			}
			});
			$( "#amount-mobile" ).val( $( "#slider-range-mobile" ).slider( "values", 0 ) + "€" +
			"  -  " + $( "#slider-range-mobile" ).slider( "values", 1 ) + "€" );
		});
		
	});

}

// gift wrapping selection
$(document).ready(function () {

	$("#gift-bag").on('click', function() {
		if($(this).prop("checked") == true){
			$("#gift-box").prop("checked", false);
			$(".gift-box-wish textarea").addClass("show");
			$(".word-count").show();
		}
		else {
			$(this).prop("checked", false);
			$(".gift-box-wish textarea").removeClass("show");
			$(".word-count").hide();
		}
	})

	

	$("#gift-box").on('click', function() {
		if($(this).prop("checked") == true){
			$("#gift-bag").prop("checked", false);
			$(".gift-box-wish textarea").addClass("show");
			$(".word-count").show();
		}
		else {
			$(this).prop("checked", false);
			$(".gift-box-wish textarea").removeClass("show");
			$(".word-count").hide();
		}
	})

	

	$("#gift-bag-mobile").on('click', function() {
		if($(this).prop("checked") == true){
			$("#gift-box-mobile").prop("checked", false);
			$(".gift-box-wish textarea").addClass("show");
			$(".word-count").show();
		}
		else {
			$(this).prop("checked", false);
			$(".gift-box-wish textarea").removeClass("show");
			$(".word-count").hide();
		}
	})

	

	$("#gift-box-mobile").on('click', function() {
		if($(this).prop("checked") == true){
			$("#gift-bag-mobile").prop("checked", false);
			$(".gift-box-wish textarea").addClass("show");
			$(".word-count").show();
		}
		else {
			$(this).prop("checked", false);
			$(".gift-box-wish textarea").removeClass("show");
			$(".word-count").hide();
		}
	})

});



//count chars inside gift-wrapping textarea 

$(document).ready(function () {


	$('.gift-box-wish textarea').keyup(function() {
		var characterCount = $(this).val().length,
			current_count = $('.current_count'),
			maximum_count = $('.maximum_count'),
			count = $('.word-count');
			current_count.text(characterCount);
	});

	
});

$(document).ready(function () {
// trigger label click on check click
	$('.custom-radio .check').each(function() {
		$(this).on('click', function() {
			$(this).next().trigger('click');
		});
	})

	// functionality for create-account-form, check/uncheck based on first checkbox
	$('.jsSubscriptionTypeInput').each(function() {
		var $input = $(this);

		$input.change( function() {
			// console.log($input);
			var $inputContainer = $input.parent();
			// console.log($inputContainer);
			var $inputsWrapper = $inputContainer.parent();
			// console.log($inputsWrapper);
			// check if it is the first input
			if( $inputContainer.is(':first-child') ) {
				console.log('do nothing');
			} else {
				// find first child and uncheck it
				console.log($inputsWrapper.first());

				
				if( $inputsWrapper.children().first().find('input').is(':checked')) {
					$inputsWrapper.children().first().find('input').prop('checked', false);
				}
				
			}

		})
	})

	// toggle nested radios
	$('.jsNestedToggler').each(function() {
		var $input = $(this);

		$input.change(function() {
			var $inputContainer = $input.parent();

			$inputContainer.next().toggleClass('is_active');
		});
	})

	// submit form on button click
	$('.jsSubmitBtn').each(function() {
		var $btn = $(this);
		var $form = $btn.closest('form');

		$btn.on('click', function(e) {
			e.preventDefault();
			$form.submit();
		});
	});

	// returns true if input is checked
	function validateCheckbox( $input ) {
		if( $input.is(':checked') ) {
			return true;
		} else {
			return false;
		}
	}

	$('.jsCreateAccountForm').each(function() {
		var $form = $(this);
		var $termsInput = $form.find('input#terms');
		var $errorMsg = $form.find('.jsErrorMsg');

		$form.submit( function(e) {

			if( validateCheckbox( $termsInput ) ) {
				$errorMsg.removeClass('is_visible');
				return true;
			} else {
				e.preventDefault();
				$errorMsg.addClass('is_visible');
			}
		});
	});

	$('.single-product-thumbnails a').each(function() {
		var $thumb = $(this);

		$thumb.on('click', function(e) {
			e.preventDefault();
			var $imgOrder = $thumb.attr('data-image');
			console.log($imgOrder);

			$('.single-product-featured-inner a.is_visible').removeClass('is_visible');

			var $imgToShow = $('.single-product-featured-inner a').filter( function() {
				return $(this).data('image') == $imgOrder;
			} );
			$imgToShow.addClass('is_visible');
		})
	});

	$('.single-product-featured .single-product-featured-inner a').each(function() {
		var $thumb = $(this);
		$thumb.zoom({
			url: $thumb.attr('href')
		});
	});

	// functionality for form stars
	$(document).on('click', '.jsRatingStarsInput img', function() {
		var $star = $(this);
		// var $form = $star.closest('form');
		var $ratingStars = $star.parent();
		var $inputWrapper = $star.closest('.form-input-wrapper');
		var $ratingInput = $inputWrapper.find('input');
		var ratingNum = $star.index() + 1;
		$ratingInput.val( ratingNum );

		var $output = '';

		for( var i = 0; i < ratingNum; i++ ) {
			$output += '<img src="images/rating-star.svg" alt="">';
		}
		
		for( var i = ratingNum; i < 5; i++) {
			$output += '<img src="images/rating-star-empty.svg" alt="">';
		}

		$ratingStars.html( $output );
	});

	// close/open rating
	$('.jsRatingFormToggler').each(function() {
		var $toggler = $(this);
		var $ratingFormContainer = $('.jsRatingFormContainer');

		$toggler.on('click', function(e) {
			e.preventDefault();
			if( $ratingFormContainer.is(":hidden") ) {
				$ratingFormContainer.show();
			} else {
				$ratingFormContainer.hide();
			}
		});
	});

	// email validation for all inputs with class .jsEmailValidate
	$('.jsEmailValidate').each(function() {
		var $input = $(this);
		var $inputWrapper = $input.closest('.form-input-wrapper');

		$input.on('input', function (e) {
			var $inputValue = e.target.value;
			console.log($inputValue);
			
			if( $inputValue != '') {
				$inputWrapper.addClass('has_input');

				if( !validateEmail( $inputValue) ) {
					$inputWrapper.removeClass('is_valid');
				} else {
					$inputWrapper.addClass('is_valid');
				}
			} else {
				$inputWrapper.removeClass('has_input');
			}
		});
	});

	$('.custom-dropdown-value').each(function() {
		var $this = $(this);

		$this.on('click tap', function() {
			var $dropdown = $this.next();

			$dropdown.toggleClass('is_visible');
		});
	})
});



// make adjacent checkboxes uncheckable at the same time
$(document).ready(function () {

	$("#same-address").on('click', function() {
		if($(this).prop("checked") == true){
			$("#new-address").prop("checked", false);
			$(".shipping-address-form-wrapper").hide(); //hide shipping address
		}
		else {
			$(this).prop("checked", false);
		}
	})

	$("#new-address").on('click', function() {
		if($(this).prop("checked") == true){
			$("#same-address").prop("checked", false);
			$(".shipping-address-form-wrapper").show(); //show shipping address
		}
		else {
			$(this).prop("checked", false);
			$(".shipping-address-form-wrapper").hide(); //hide shipping address
		}
	})

	$("#dhl").on('click', function() {
		if($(this).prop("checked") == true){
			$("#fedex").prop("checked", false);
		}
		else {
			$(this).prop("checked", false);
		}
	})

	$("#fedex").on('click', function() {
		if($(this).prop("checked") == true){
			$("#dhl").prop("checked", false);
		}
		else {
			$(this).prop("checked", false);
		}
	})

	$("#pod").on('click', function() {
		if($(this).prop("checked") == true){
			$("#credit-card").prop("checked", false);
		}
		else {
			$(this).prop("checked", false);
		}
	})

	$("#credit-card").on('click', function() {
		if($(this).prop("checked") == true){
			$("#pod").prop("checked", false);
		}
		else {
			$(this).prop("checked", false);
		}
	})

});


// change billing address form depending on document type checkbox
$(document).ready(function () {

	$("#doc-type").on('click', function() {
		if($(this).prop("checked") == true){
			$("#simple").hide()
			$("#invoice").show()
		}
		else {
			$("#invoice").hide()
			$("#simple").show()
		}
	})

});


// account purchase show products
$(document).ready(function () {
	$('.show-purchase').on('click', function(e) {

		if ($(e.target).hasClass('show-purchase')) {
			targetbutton = $(e.target);
		}else{
			targetbutton = $(e.target).closest('.show-purchase');
		}
		if (targetbutton.hasClass('disable')) {
			return;
		}
		targetbutton.toggleClass('active');


		parentBlock = e.target.closest('.data-block-history');
		itemBlock = $(parentBlock).find('.data-block-history-items');
		$(parentBlock).toggleClass('active');

		itemBlock.slideToggle();

		viewLess = $(targetbutton.closest('.data-block')).find('.view-less');
		viewMore = $(targetbutton.closest('.data-block')).find('.view-more');
		if (targetbutton.hasClass('view-more')) {
			viewMore.css('display', 'none');
			viewLess.css('display', 'block');
		}else{
			viewMore.css('display', 'block');
			viewLess.css('display', 'none');
		}

	});
});

$(document).ready(function () {
	$('.open-profile').on('click', function(e) {
		$(e.target).toggleClass('active');
		parentblock = $(e.target).closest('.hide--sm-up');
		profileMenu = parentblock.find('.account-sidebar-bottom');
		profileMenu.slideToggle();
	});
});

// Change Password Toggle

$(document).ready(function () {

	$("#change-password").on('click', function() {
		if($(this).prop("checked") == true){
			$(".change-password").removeClass('d-none');
		}
		else {
			$(".change-password").addClass('d-none');
		}
	})

});

// input must have 9-12 characters for all inputs with class .jsCheckCharacters
$('.jsCheckCharacters').each(function() {
	var $input = $(this);
	var $inputWrapper = $input.closest('.form-input-wrapper');

	$input.on('input', function (e) {
		var $inputValue = e.target.value;

		if( $inputValue != '') {
			$inputWrapper.addClass('has_input');
			console.log($inputValue.length);
			if( !($inputValue.length >8 && $inputValue.length <13)) {
				$inputWrapper.removeClass('is_valid');
			} else {
				$inputWrapper.addClass('is_valid');
			}
		} else {
			$inputWrapper.removeClass('has_input');
		}
	});
});


$(document).ready(function () {

	/* ==========================================================================
	   Brand Hero Owl Carousel
	   ========================================================================== */
	   $('.brand-hero-carousel').owlCarousel({

		items: 1,
		dots: false,
		nav: true,
		autoplay: true,
		autoplayTimeout: 3000,
		loop: true,

	})

});

$(document).ready(function () {

	/* ==========================================================================
	   Brand Hero Owl Carousel
	   ========================================================================== */
	$('.brand-carousel-wrapper').owlCarousel({

		responsive: {
			// breakpoint from 0 up
			0: {
				center: true,
				items: 1,
				margin: 0,
				dots: true,
				margin: 20,
				autoWidth: true,
				autoplay: true,
				autoplayTimeout: 3000,
				loop: true,
			},
			// breakpoint from 575 up
			575: {
				items: 3,
				dots: true,
				nav: true,
				margin: 15,
				autoplay: true,
				autoplayTimeout: 3000,
				loop: true,
			}
		}
	})
});


// open shipping-billing address form in my account
$(document).ready(function () { //edited

	$(".add-billing-address-btn").on('click', function(e) { //edited
		e.preventDefault(); //edited
		if($(".add-billing-address-btn").hasClass("open")) { //edited
			$(".add-billing-address-btn").removeClass("open"); //edited
			$(".billing-title").hide(); //edited
			$(".billing-form").hide(); //edited
			$(".add-billing-address-btn img").attr("src","images/icon-circle-plus-gold.svg"); //edited
			$(".add-billing-address-btn img.img-hover").attr("src","images/icon-circle-plus-black.svg"); //edited
		} else { //edited
			$(".add-shipping-address-btn").removeClass("open"); //edited
			$(".add-billing-address-btn").addClass("open"); //edited
			$(".shipping-title").hide(); //edited
			$(".shipping-form").hide(); //edited
			$(".billing-title").show(); //edited
			$(".billing-form").show(); //edited
			$(".add-shipping-address-btn img").attr("src","images/icon-circle-plus-gold.svg"); //edited
			$(".add-shipping-address-btn img.img-hover").attr("src","images/icon-circle-plus-black.svg"); //edited
			$(".add-billing-address-btn img").attr("src","images/my-account/minus.svg"); //edited
		} //edited
	}); //edited

	$(".add-shipping-address-btn").on('click', function(e) { //edited
		e.preventDefault(); //edited
		if($(".add-shipping-address-btn").hasClass("open")) { //edited
			$(".add-shipping-address-btn").removeClass("open"); //edited
			$(".shipping-title").hide(); //edited
			$(".shipping-form").hide(); //edited
			$(".add-shipping-address-btn img").attr("src","images/icon-circle-plus-gold.svg"); //edited
			$(".add-shipping-address-btn img.img-hover").attr("src","images/icon-circle-plus-black.svg"); //edited
		} else { //edited
			$(".add-billing-address-btn").removeClass("open"); //edited
			$(".add-shipping-address-btn").addClass("open"); //edited
			$(".billing-title").hide(); //edited
			$(".billing-form").hide(); //edited
			$(".shipping-title").show(); //edited
			$(".shipping-form").show(); //edited
			$(".add-billing-address-btn img").attr("src","images/icon-circle-plus-gold.svg"); //edited
			$(".add-billing-address-btn img.img-hover").attr("src","images/icon-circle-plus-black.svg"); //edited
			$(".add-shipping-address-btn img").attr("src","images/my-account/minus.svg"); //edited
		} //edited
	}); //edited
}); //edited


/* ==========================================================================
	Brand List  Masonry Layout
========================================================================== */

$(document).ready(function () {
	if ($('.masonry-layout-wrapper').length) {
		$('.masonry-layout-wrapper').masonry({
		  // options...
		  	itemSelector: '.brand-item',
	      	columnWidth: '.brand-item',
		   	gutter: 15,
	        percentPosition: true,
	        horizontalOrder: true,
		});
	}
});

/* ==========================================================================
	Brand List  Activate On Click
========================================================================== */

$(document).ready(function () {
	$('.brands-inline a').on('click',function (e) {
		e.preventDefault();
		$('.brands-inline a').removeClass('active');
		$(e.target).addClass('active');

		targetValue = e.target.getAttribute("href");
		
		$('html, body').animate({scrollTop:$(targetValue).position().top + 500});

		$('.brand-item').removeClass('active');
		$(targetValue).addClass('active');
	});
});

// functionality for comments read more btn
$(document).ready(function () {
	$('.comment-item-more a').each(function() {
		$(this).on('click', function(e) {
			e.preventDefault();
			var $btnContainer = $(this).parent();
			var $text = $btnContainer.prev();
			// if( $text.is(":hidden") ) {
			// 	$text.slideDown();
			// } else {
			// 	$text.slideUp();
			// }
			$btnContainer.toggleClass('reverse');
			$text.toggleClass('is_open');

		});
	});
});

// new comment
$(document).ready(function () {
	$('.btn-comment').click(function(e) {
		e.preventDefault();
		$('.jsNewComment').addClass("show");
		
		targetValue = e.target.getAttribute("href");
		
		$('html, body').animate({scrollTop:$(targetValue).position().top - 200});

	});

});