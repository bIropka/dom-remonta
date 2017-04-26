$(window).ready(function() {

    /*******************************************************************************************************************
     *********** init
     ******************************************************************************************************************/

    setTimeout(function () {
        $('.wrapper').animate({opacity: 1}, 500);
    }, 500);

    function checkHeader() {

        if ($(window).width() > 1230) {

            if ($(window).scrollTop() > 300) {

                $('header[role="banner"]').addClass('fixed');

                if ($(window).scrollTop() > 500) {

                    $('header[role="banner"]').css('top', '0px');
                    $('.top-arrow').fadeIn();

                } else {

                    $('header[role="banner"]').css('top', '0');
                    $('.top-arrow').fadeOut();

                }

            } else {

                $('header[role="banner"]').removeClass('fixed');

            }

        } else {

            $('header[role="banner"]').addClass('fixed').css('top', '0px');

        }

    }

    checkHeader();

    $(window).scroll(function () {

        checkHeader();

    });

    if ($(window).width() < 1231) {
        $('.header-contacts .hours').appendTo('.mobile-nav');
        $('nav').appendTo('.mobile-nav');
        $('.header-contacts .callback').appendTo('.mobile-nav');
    } else {
        $('nav').insertBefore('.header-contacts');
        $('.mobile-nav .hours').insertAfter('.header-contacts a');
        $('.mobile-nav .callback').insertAfter('.hours');
    }

    if ($(window).width() < 641) {
        $('.calculator-header').insertAfter('.hours');
    } else {
        $('.calculator-header').insertAfter('.logo-header-small');
    }

    $(window).resize(function () {

        checkHeader();

        if ($(window).width() < 1231) {
            $('.header-contacts .hours').appendTo('.mobile-nav');
            $('nav').appendTo('.mobile-nav');
            $('.header-contacts .callback').appendTo('.mobile-nav');
        } else {
            $('nav').insertBefore('.header-contacts');
            $('.mobile-nav .hours').insertAfter('.header-contacts a');
            $('.mobile-nav .callback').insertAfter('.hours');
        }

        if ($(window).width() < 641) {
            $('.calculator-header').insertAfter('.hours');
        } else {
            $('.calculator-header').insertAfter('.logo-header-small');
        }

    });

    /*******************************************************************************************************************
     *********** clicks
     ******************************************************************************************************************/

    $('.burger').click(function () {
        $('.mobile-nav').addClass('active');
    });

    $('.mobile-nav .fa-close').click(function () {
        $('.mobile-nav').removeClass('active');
    });

    $('.top-arrow').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 600);
    });

    $('.button-order').click(function() {

        $('.window-order').fadeIn();

    });

    $('.button-callback').click(function() {

        $('.window-callback').fadeIn();

    });

    $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.window-inner')).length) $('.window').fadeOut();
        if ($target.hasClass('fa-close')) $('.window').fadeOut();
    });

    $('.top-arrow').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 600);
    });


    /*******************************************************************************************************************
     *********** sliders
     ******************************************************************************************************************/

    $('.slider').slick({
        appendArrows: '.slider-control',
        prevArrow: '.slider-prev',
        nextArrow: '.slider-next',
        dots: true
    });

    $('.slider-calculator').slick({
        appendArrows: '.slider-calc-control',
        prevArrow: '.slider-calc-prev',
        nextArrow: '.slider-calc-next',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1231,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slider-reviews').slick({
        appendArrows: '.slider-reviews-control',
        prevArrow: '.slider-reviews-prev',
        nextArrow: '.slider-reviews-next',
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});