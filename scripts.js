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
		
		//Set break points
        var startPoint = jQuery(this).attr('data-start-point');
        var endPoint = jQuery(this).attr('data-end-point');
		
		//Use default breakpoints if none set
        if (typeof startPoint == 'undefined') {
            startPoint = 768;
        }
        if (typeof endPoint == 'undefined') {
            endPoint = 5001;
        }
		
		//If the window width is within the break points, loop through res-height objects
        if (jQuery(window).width() > startPoint && jQuery(window).width() < endPoint) {
		
		divHeight = jQuery(this).outerHeight(true);
		imgHeight = jQuery(this).children('img').height();
	
			if (divHeight>imgHeight) {
				
				//The div has become taller than the image, so add the class
				jQuery(this).children('img').addClass('switch-vert-max');
				
			}

		}
		
    });
}





