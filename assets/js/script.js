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
    function isInputNumber(event) {
        var char = String.fromCharCode(event.which);
        if(!(/[0-9]/.test(char))){
            event.preventDefault();
        }
    }
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
var currentTab = 0; // Current tab is set to be the first tab (0)
    showTab(currentTab); // Display the current tab

    function showTab(n) {
    // This function will display the specified tab of the form ...
        var x = document.getElementsByClassName("tab");
        x[n].style.display = "block";
        // ... and fix the Previous/Next buttons:
        if (n == 0) {
            document.getElementById("prevBtn").style.display = "none";
        } else {
            document.getElementById("prevBtn").style.display = "inline";
        }
        if (n == (x.length - 1)) {
            document.getElementById("nextBtn").innerHTML = "Submit";
        } else {
            document.getElementById("nextBtn").innerHTML = "Next";
        }
        // ... and run a function that displays the correct step indicator:
        fixStepIndicator(n)
    }

    function nextPrev(n) {
    // This function will figure out which tab to display
        var x = document.getElementsByClassName("tab");
        // Exit the function if any field in the current tab is invalid:
        if (n == 1 && !validateForm()) return false;
        // Hide the current tab:
        x[currentTab].style.display = "none";
        // Increase or decrease the current tab by 1:
        currentTab = currentTab + n;
        // if you have reached the end of the form... :
        if (currentTab >= x.length) {
            //...the form gets submitted:
            document.getElementById("regForm").submit();
            return false;
        }
    // Otherwise, display the correct tab:
        showTab(currentTab);
    }

    function validateForm() {
    // This function deals with validation of the form fields
        var x, y, i, valid = true;
        x = document.getElementsByClassName("tab");
        y = x[currentTab].getElementsByTagName("input");
        // A loop that checks every input field in the current tab:
        for (i = 0; i < y.length; i++) {
            // If a field is empty...
            if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false:
            valid = false;
            }
        }
        // If the valid status is true, mark the step as finished and valid:
        if (valid) {
            document.getElementsByClassName("step")[currentTab].className += " finish";
        }
    return valid; // return the valid status
    }

    function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
        var i, x = document.getElementsByClassName("step");
        for (i = 0; i < x.length; i++) {
            x[i].className = x[i].className.replace(" active", "");
        }
        //... and adds the "active" class to the current step:
        x[n].className += " active";
    }