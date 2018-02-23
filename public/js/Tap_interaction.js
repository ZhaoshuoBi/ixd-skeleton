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

});


