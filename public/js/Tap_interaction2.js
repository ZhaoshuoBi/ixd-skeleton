'use strict';


// $(document).ready(function(){
//  //    $(".img-responsive").click(function(){
//  //        $(".img-responsive p").html("Location Marked");
// 	// initializePage();
//  //    });
// $(".img-responsive").on('click', function() {
//     var itemEl = $(this);
//         itemEl.data('Tap', $(this).html());
//         itemEl.html('Location Saved');

//         setTimeout(function() { 
//             itemEl.html(itemEl.data('Tap')) }, 600);
//   }); 

// });


$(document).ready(function(){
$("#bg").on('click', function() {
   $("#bg").attr('src',"images/marked_g.png");
   			setTimeout(function() { 
            $("#bg").attr('src',"images/mark.png") }, 600);
   return false;

 });
});

