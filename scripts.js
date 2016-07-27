//On document load
jQuery(window).on("load", function($) {
	responsiveImages();
});

//Resize Events
jQuery(window).resize(function() {
	responsiveImages();
});

//Kick ass responsive height function
function responsiveImages() {
	
	//Find all res-height-containers
    jQuery('.res-image-container').each(function() {
		
		//Reset the classes
		jQuery(this).children('img').removeClass('switch-vert-max');

		divHeight = jQuery(this).outerHeight(true);
		imgHeight = jQuery(this).children('img').height();
	
			if (divHeight>imgHeight) {
				
				//The div has become taller than the image, so add the class
				jQuery(this).children('img').addClass('switch-vert-max');
				
			}
		
    });
}





