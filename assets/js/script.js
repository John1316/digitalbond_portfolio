$(window).on("load", function () {

    "use strict";

    /* ===================================
            Loading Timeout
     ====================================== */

    setTimeout(function(){
        $('.loader').fadeOut();

        $('.cd-transition-layer').addClass('closing').delay(1000).queue(function(){
            $(this).removeClass("visible closing opening").dequeue();
        });

    }, 1000);

});


jQuery(function ($) {


    "use strict";

    /* ===================================
        Side Menu
    ====================================== */
    $(window).on('load', function() {
        $("#loader").delay(1000).fadeOut(500);
    })
   $("#sidemenu_toggle").on("click", function () {
        $(".site-nav").toggleClass("active");
    }),$(".site-nav li a").on("click", function () {
        $(".site-nav").removeClass("active");
    });


    /* ===================================
         Counter
    ====================================== */


    $('.count').each(function () {
        $(this).appear(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });

    $(".progress-bar").each(function () {
        $(this).appear(function () {
            $(this).animate({width: $(this).attr("aria-valuenow") + "%"}, 3000)
        });
    });


    /* ===================================
      Owl Carousel
     ====================================== */

    //Testimonial Slider

    $("#owl-pricing").owlCarousel({
        items: 1,
        margin:10,
        loop: true,
        dots: false,
        nav: true,
        autoplay:true,
        autoplayTimeout:9000,
        navContainer: "#client-nav",
        responsive: {
            991: {
                items: 3,
            },
            600: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    });
    $("#owl-features").owlCarousel({
        items: 1,
        margin:10,
        loop: true,
        dots: true,
        nav: true,
        autoplay:true,
        // mouseDrag : true ,
        navContainer: "#features_nav",
        // autoplay:true
    });

    $('.partners-slider').owlCarousel({
        items: 5,
        autoplay: 1500,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        slideBy: 1,
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        responsive: {
            1200: {
                items: 5,
            },
            768: {
                items: 3,
            },
            480: {
                items: 2,
            },
            320: {
                items: 1,
            },
        }
    });

    /*============================================*
           Cube Portfolio
   * ============================================*/

    function portfolio(){

        $('#js-grid-mosaic-flat').cubeportfolio({
            layoutMode: 'mosaic',
            sortByDimension: true,
            mediaQueries: [ {
                width: 800,
                cols: 3,
            }, {
                width: 767,
                cols: 2,
            }, {
                width: 480,
                cols: 1,
            }],
            gapHorizontal: 15,
            gapVertical: 15,
            gridAdjustment: 'responsive',
            caption: 'zoom',

            // lightbox
            // lightboxDelegate: '.cbp-lightbox',
            // lightboxGallery: true,
            // lightboxTitleSrc: 'data-title',
        });
    }

    $(document).ready(function() {

        setTimeout(function(){
            portfolio();
        }, 1000);

    });

});
$(function(){
	var ImageUrl =  $('.accordion .card-header button:first-child').attr('src');
	$('.image-accordion img').attr('src',ImageUrl);
	$('.accordion .image-accordion img').attr('src',ImageUrl);
	
	$('.accordion .card-header button').click(function(){
		ImageUrl = $(this).attr('src');
		$('.image-accordion img').attr('src',ImageUrl);    
		$('.image-accordion img').attr('src',ImageUrl);    
	});  
});