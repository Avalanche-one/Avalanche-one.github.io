$(function(){
    $('.testimonials__slider').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
    });
    $('.button_testimonials').on('click', function() {
        $('.overlay, .form_testimonial').fadeIn();
    });
    $('.form__close').on('click', function() {
        $('.overlay, .form_testimonial').fadeOut();
    });
    $('.burger').on('click', function() {
        $('.list').toggleClass("active");
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1200) {
            $('.up').fadeIn();
        } else {
            $('.up').fadeOut();
        }
    });
    $(window).on("scroll", function() {
        $('.menu').toggleClass("active", $(this).scrollTop() > $(window).height());
    });
});
