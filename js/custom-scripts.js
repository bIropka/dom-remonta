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

                $('header[role="banner"]').addClass('fixed');

                if ($(window).scrollTop() > 500) {

                    $('header[role="banner"]').css('top', '0px');
                    $('.top-arrow').fadeIn();

                } else {

                    $('header[role="banner"]').css('top', '-300px');
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