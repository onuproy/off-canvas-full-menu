jQuery(document).ready(function(){ 

	// Mobile menu 
	jQuery('#toggle').click(function () {
		jQuery(this).toggleClass('active');
		jQuery('#overlay').toggleClass('open');
	});


});