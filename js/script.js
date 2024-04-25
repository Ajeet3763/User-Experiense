// -------------------OWl Carousel-------------------
$(".banner-slider").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    items: 1,
    dots: true,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        600: {
            items: 1,
            nav: false,
        },
        1000: {
            items: 1,
            dots: true,
            nav: false,
            loop: true,
        },
    },
});



$(document).ready(function () {
    $('.contentType').hide();
    $('.mainContentdiv:first .contentType').show();
    $('.divHead').click(function () {
        var content = $(this).next('.contentType');
        content.slideToggle();
        $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');
        $('.contentType').not(content).slideUp();
    });
});


  