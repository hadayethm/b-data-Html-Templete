(function($) {
    "use strict";

    jQuery(document).on('ready', function() {

        // Header Sticky
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 120) {

                $('.navbar-area-three').addClass("is-sticky-three");
                $('.navbar-area').addClass("is-sticky");
            } else {
                $('.navbar-area-three').removeClass("is-sticky-three");
                $('.navbar-area').removeClass("is-sticky");
            }
        });

        // Mean Menu
        jQuery('.mean-menu').meanmenu({
            meanScreenWidth: "991"
        });

    });

    // Logo Slider
    $('.logo-area').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 20,
        nav: false,
        responsive: {
            0: {
                items: 3,
            },
            768: {
                items: 4,
            },
            1200: {
                items: 5,
            }
        }
    });
    // Testimonial Slider
    $('.testimonials-slider-area').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 0,
        nav: true,
        navText: [

            "<i class='flaticon-left'></i>",
            "<i class='flaticon-right'></i>"

        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1200: {
                items: 2,
            }
        }
    });
    // Recent-work
    $('.recent-wrapper').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 0,
        nav: true,
        navText: [

            "<i class='flaticon-left'></i>",
            "<i class='flaticon-right'></i>"

        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    });


    // Product-Slider
    $('.shop-slider').owlCarousel({
        loop: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 0,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    });

    //Tabs Box
    if ($('.tabs-box').length) {
        $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));

            if ($(target).is(':visible')) {
                return false;
            } else {
                target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
                $(target).fadeIn(300);
                $(target).addClass('active-tab');
            }
        });
    }

    //Video Plugin


    var $iframe = $('iframe'),
        $videoLink = $('.video-link'),
        playerTemplate =
        '<div class="player"><div class="player__video"><div class="video-filler"></div><button class="video-close">&times;</button><iframe class="video-iframe" src="{{iframevideo}}" frameborder="0" allowfullscreen></iframe></div><div/>';

    $videoLink.on('click', function(e) {
        var localTemplate = '',
            videoWidth = parseInt($(this).data('width')),
            videoHeight = parseInt($(this).data('height')),
            videoAspect = (videoHeight / videoWidth) * 100,
            // elements
            $player = null,
            $video = null,
            $close = null,
            $iframe = null;

        e.preventDefault();

        localTemplate = playerTemplate.replace(
            '{{iframevideo}}',
            $(this).prop('href')
        );

        $player = $(localTemplate);

        $player.find('.video-filler').css('padding-top', videoAspect + '%');

        $close = $player.find('.video-close').on('click', function() {
            $(this)
                .off()
                .closest('.player')
                .hide()
                .remove();
        });

        $player.appendTo('body').addClass('js--show-video');
    });



    // Mesonary isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 1
        }
    })

    // filter items on button click
    $('.works-button').on('click', 'button', function() {
        $('.works-button button.active').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });


    // Go to Top
    $(function() {
        // Scroll Event
        $(window).on('scroll', function() {
            var scrolled = $(window).scrollTop();
            if (scrolled > 350) $('.go-top').addClass('active');
            if (scrolled < 350) $('.go-top').removeClass('active');
        });
        // Click Event
        $('.go-top').on('click', function() {
            $("html, body").animate({ scrollTop: "0" }, 500);
        });
    });

    // preloder
    $(window).on('load', function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
    });

}(jQuery));



jQuery(function($) {
    "use strict";

    function clients_review_slider() {
        $('.clients-review-slides').owlCarousel({
            loop: true,
            margin: 0,
            dots: true,
            nav: true,
            items: 1,
            mouseDrag: true,
            touchDrag: true,
            navText: ["<i class='fa fa-long-arrow-alt-left'></i>", "<i class='fa fa-long-arrow-alt-right'></i>"],
            autoplay: false,
            smartSpeed: 1000,
            autoplayTimeout: 5000,
        })
    };
    clients_review_slider();




}(jQuery));