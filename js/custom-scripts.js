$(window).ready(function() {

    /*******************************************************************************************************************
     *********** init
     ******************************************************************************************************************/

    setTimeout(function() {
        $('.wrapper').animate({opacity: 1}, 500);
    }, 500);

    function checkHeader() {

        if ($(window).width() > 1230) {

            if ($(window).scrollTop() > 300) {

                $('header[role="banner"]').addClass('reduced');

                if ($(window).scrollTop() > 500) {

                    $('.top-arrow').fadeIn();

                } else {

                    $('.top-arrow').fadeOut();

                }

            } else {

                $('header[role="banner"]').removeClass('reduced');

            }

        } else {

            $('header[role="banner"]').addClass('reduced').css('top', '0px');

        }

    }

    checkHeader();

    $(window).scroll(function() {

        checkHeader();

    });

    if($(window).width() < 768) {
        $('nav').appendTo('.mobile-nav');
        $('.header-contacts .hours').appendTo('.mobile-nav');
        $('.header-contacts .callback').appendTo('.mobile-nav');
    } else {
        $('nav').insertBefore('.header-contacts');
        $('.mobile-nav .callback').prependTo('.header-contacts');
        $('.mobile-nav .hours').prependTo('.header-contacts');
    }

    $(window).resize(function() {

        checkHeader();

        if($(window).width() < 768) {
            $('nav').appendTo('.mobile-nav');
            $('.header-contacts .hours').appendTo('.mobile-nav');
            $('.header-contacts .callback').appendTo('.mobile-nav');
        } else {
            $('nav').insertBefore('.header-contacts');
            $('.mobile-nav .callback').prependTo('.header-contacts');
            $('.mobile-nav .hours').prependTo('.header-contacts');
        }

    });

});

/*******************************************************************************************************************
 *********** clicks
 ******************************************************************************************************************/

$('.burger').click(function() {
    $('.mobile-nav').addClass('active');
});

$('.mobile-nav .fa-close').click(function() {
    $('.mobile-nav').removeClass('active');
});

$('.top-arrow').click(function () {
    $('body, html').animate({
        scrollTop: 0
    }, 600);
});

$('.faq-item .question').click(function() {
    $(this).parent().siblings('.faq-item').find('.question').removeClass('active');
    $(this).parent().siblings('.faq-item').find('.answer').fadeOut(0);
    $(this).toggleClass('active');
    $(this).siblings('.answer').fadeToggle();
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