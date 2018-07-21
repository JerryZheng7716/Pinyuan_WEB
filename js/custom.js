


$(document).ready(function() {
 
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
 
  sync1.owlCarousel({
	singleItem : true,
	slideSpeed : 1000,
	navigation: false,
    navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	pagination:false,
	afterAction : syncPosition,
	responsiveRefreshRate : 200,
	transitionStyle : "fade"
  });
  
  sync2.owlCarousel({
	items : 15,
	itemsDesktop      : [1199,10],
	itemsDesktopSmall     : [979,10],
	itemsTablet       : [768,8],
	itemsMobile       : [479,6],
	pagination:false,
	responsiveRefreshRate : 100,
	afterInit : function(el){
	  el.find(".owl-item").eq(0).addClass("synced");
	}
  });
  
 
  function syncPosition(el){
	var current = this.currentItem;
	$("#sync2")
	  .find(".owl-item")
	  .removeClass("synced")
	  .eq(current)
	  .addClass("synced")
	if($("#sync2").data("owlCarousel") !== undefined){
	  center(current)
	}
  }
 
  $("#sync2").on("click", ".owl-item", function(e){
	e.preventDefault();
	var number = $(this).data("owlItem");
	sync1.trigger("owl.goTo",number);
  });
 
  function center(number){
	var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
	var num = number;
	var found = false;
	for(var i in sync2visible){
	  if(num === sync2visible[i]){
		var found = true;
	  }
	}
 
	if(found===false){
	  if(num>sync2visible[sync2visible.length-1]){
		sync2.trigger("owl.goTo", num - sync2visible.length+2)
	  }else{
		if(num - 1 === -1){
		  num = 0;
		}
		sync2.trigger("owl.goTo", num);
	  }
	} else if(num === sync2visible[sync2visible.length-1]){
	  sync2.trigger("owl.goTo", sync2visible[1])
	} else if(num === sync2visible[0]){
	  sync2.trigger("owl.goTo", num-1)
	}
	
  }
    //Clients Logo
    $("#clients-logo").owlCarousel({
        items:6,
        itemsDesktop      : [1199,6],
        itemsDesktopSmall     : [979,5],
        itemsTablet       : [768,4],
        itemsMobile       : [479,2],
    });
	//Our Story
    $("#story-carousel").owlCarousel({
        items:1,
        itemsDesktop: [1199,1],
        itemsDesktopSmall     : [979,1],
        itemsTablet       : [768,1],
        itemsMobile       : [479,1],
        pagination : true,
        paginationNumbers: true,
    })
	//MoxItUp Activate
	$('#portfolio-container').mixItUp();
    
    //Scroll To Top
    $("a[href='#scrolltop']").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
    
    //jQuery Counter
    $('.counter').counterUp({
        delay: 10,
        time: 2500
    });
	//Sticky Menu
    $("#main-navbar").sticky({topSpacing:0});
    
    //Lightbox
    $('.venobox').venobox();
    
});
$(window).load(function() { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({'overflow':'visible'});
})
