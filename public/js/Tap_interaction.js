'use strict';


$(document).ready(function(){
 //    $(".img-responsive").click(function(){
 //        $(".img-responsive p").html("Location Marked");
	// initializePage();
 //    });
	$(".img-responsive").on('click', function() {
    	var itemEl = $(this);
        	itemEl.data('Tap', $(this).html());
        	itemEl.html('Location Saved');

        setTimeout(function() { 
            itemEl.html(itemEl.data('Tap')) }, 600);
	}); 

	// $("#voice").on('click', function() {
 //   		$("#voice").attr('src',"../../images/on.png");
 //   		return false;
 //   	});
    $("#infoToggler").click(function() {
   		$(this).find('img').toggle();
	});
    $("#infoToggler1").click(function() {
   		$(this).find('img').toggle();
	});
	$("#infoToggler2").click(function() {
   		$(this).find('img').toggle();
	});
});


