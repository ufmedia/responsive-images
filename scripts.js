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
    jQuery('.res-height-container').each(function() {
		
		//Reset all res-height objects
        jQuery(this).find('.res-height').height('auto');
		
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
            var highestBox = 0;
            jQuery(this).find('.res-height').each(function() {
                if (jQuery(this).outerHeight(true) > highestBox) {
					
					//We keep adjusting this var until we have the heighest res-height object
                    highestBox = jQuery(this).outerHeight(true);
                }
            })

			//Set the res-height object to the highestBox height
			//If a res-height object has the res-height-master class we leave it alone.
			jQuery(this).find('.res-height:not(.res-height-master)').outerHeight(highestBox);
			
			//res-height-child objects don't have their height taken into account above but will be set to the heighestBox height
			//usefully when you need to shrink and object (specifically been used with iframes).
			jQuery(this).find('.res-height-child').height(highestBox);
        }
    });
}





