jQuery(document).ready(function () {

	// Mobile menu 
	jQuery('#toggle').click(function () {
		jQuery(this).toggleClass('active');
		jQuery('#overlay').toggleClass('open');
	});

	// Home owlCarousel
	jQuery('.our_work_slider_area').owlCarousel({
		loop: true,
		margin: 25,
		nav: true,
		autoplay: false,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,

			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});


});