/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function init_highslide() {
	hs.graphicsDir = 'highslide/graphics/';
	hs.align = 'center';
	hs.transitions = ['expand', 'crossfade'];
	hs.outlineType = 'glossy-dark';
	hs.wrapperClassName = 'dark';
	hs.fadeInOut = true;
	hs.debug = true;
	hs.allowMultipleInstances = false;
	//hs.dimmingOpacity = 0.75;

	// Add the controlbar
	if (hs.addSlideshow) hs.addSlideshow({
		//slideshowGroup: 'group1',
		interval: 5000,
		repeat: false,
		useControls: true,
		fixedControls: 'fit',
		overlayOptions: {
			opacity: .6,
			position: 'bottom center',
			hideOnMouseOut: true
		}
	});
	
	/*$('.rig .rig-cell').click(function(e) {
		var imageurl = $(this).find('.rig-img').attr('src');
		if(imageurl) {
			hs.expand(null, {
				src: imageurl
			});
		}
	});*/
	
}


$(document).ready(function() {
	init_highslide();
});