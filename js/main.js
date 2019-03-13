/* global , $ , console */

$(function(){
 $(".header").height ($(window).height());
   $(window).resize (function() { $(".header").height ($(window).height()); }); 
 	 
 
/* nice scroll  */
	
	$("body").niceScroll({
  cursorcolor:"#f7600e",
  cursorwidth:"10px"
});
	  /* nice scroll  */
	  
	$('.down i').click(function() {
	$('html , body').animate({scrollTop:$($('#portfoilo')).offset().top },1000)	});
	
	$('.header-content .btn-1').click(function() {
	$('html , body').animate({scrollTop:$($('.Team-work')).offset().top },1000)	});
	
	$('.header-content .btn-2').click(function() {
	$('html , body').animate({scrollTop:$($('#works')).offset().top },1000)	});
  

    		   

	 $(".work-btn").click(function () { 
        $(this).fadeOut();
        $(".fadeee").fadeIn(700);
    });
	   /* nice scroll  */
	/* owl carowsl  */
    $('.owl-carousel').owlCarousel({
    items:5,
	loop:true,
	autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
	margin:10,
    rtl:true,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});
	/* owl carowsl  */
	
	/* sccroll-top  */

		 $(".sccroll-top i").click (function() {
	      $("html , body").animate({ scrollTop: 0	},1000)	});  
		 
	    $(window).scroll( function () {	
		 if ($(window). scrollTop () >= 600){$(".sccroll-top i").fadeIn(400)}
		 else ($(".sccroll-top i").fadeOut(400) )
	
	                                });
		/* sccroll-top  */
});



