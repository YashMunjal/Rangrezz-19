

(function( $ ){


	jQuery(window).bind('scroll', function () {
		if ($(window).scrollTop() > 200) {
			$('nav').show();
			
			} else {
				$('nav').hide();
			}
		});

	/* ----------------------------------------------------------- */
	/*  2. EVENT TIME COUNTER
	/* ----------------------------------------------------------- */
	
    /* ----------------------------------------------------------- */
	/*  3. MENU SMOOTH SCROLLING
	/* ----------------------------------------------------------- */ 

	 //MENU SCROLLING WITH ACTIVE ITEM SELECTED

	// Cache selectors
	var lastId,
	topMenu = $(".rangrezz-menu"),
	topMenuHeight = topMenu.outerHeight()+13,
	// All list items
	menuItems = topMenu.find('a[href^=\\#]'),
	// Anchors corresponding to menu items
	scrollItems = menuItems.map(function(){
	  var item = $($(this).attr("href"));
	  if (item.length) { return item; }
	});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr("href"),
	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+22;
	  jQuery('html, body').stop().animate({ 
	      scrollTop: offsetTop
	  }, 1500);
	  e.preventDefault();
	});

	// Bind to scroll
	jQuery(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href=\\#"+id+"]").parent().addClass("active");
	   }           
	})


	
	/* ----------------------------------------------------------- */
	/*  4. VIDEO POPUP
	/* ----------------------------------------------------------- */

   $('.rangrezz-video-play-btn').on('click', function(event) {
	   
        event.preventDefault();
        
        $('.rangrezz-video-iframe-area').addClass('rangrezz-video-iframe-display');
       
    });
   
    // when click the close btn

    // disappear iframe window
    
    $('.rangrezz-video-close-btn').on('click', function(event) {
	    
	    event.preventDefault();
	    
		$('.rangrezz-video-iframe-area').removeClass('rangrezz-video-iframe-display');
		
    });

    // stop iframe if it is play while close the iframe window

    $('.rangrezz-video-close-btn').click(function(){

        $('.rangrezz-video-iframe').attr('src', $('.rangrezz-video-iframe').attr('src'));

    });

    // when click overlay area

     $('.rangrezz-video-iframe-area').on('click', function(event) {
	    
	    event.preventDefault();
	    
		$('.rangrezz-video-iframe-area').removeClass('rangrezz-video-iframe-display');
		
    });

	$('.rangrezz-video-iframe-area, .rangrezz-video-iframe').on('click', function(e){
	    e.stopPropagation();
	});
		$('.rangrezz-speakers-slider').slick({
		  slidesToShow: 4,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: true,
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: true,
		        slidesToShow: 1
		      }
		    }
		  ]
		});

		



	/* ----------------------------------------------------------- */
	/*  6. BOOTSTRAP ACCORDION 
	/* ----------------------------------------------------------- */ 

		/* Start for accordion #1*/
		$('#accordion .panel-collapse').on('shown.bs.collapse', function () {
		$(this).prev().find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
		});
		
		//The reverse of the above on hidden event:
		
		$('#accordion .panel-collapse').on('hidden.bs.collapse', function () {
		$(this).prev().find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
		});


	/* ----------------------------------------------------------- */
	/*  7. MOBILE MENU CLOSE 
	/* ----------------------------------------------------------- */ 






	
	
})( jQuery );




  
	