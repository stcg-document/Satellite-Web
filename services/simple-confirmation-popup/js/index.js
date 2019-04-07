jQuery(document).ready(function($){
	//open popup
	$('.cd-popup-trigger_7').on('click', function(event){
		event.preventDefault();
		$('.cd-popup_7').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup_7').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup_7') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup_7').removeClass('is-visible');
	    }
    });
});