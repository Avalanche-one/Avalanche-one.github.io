$(function(){

    $('.slider__inner').slick({
        infinite: true,
        arrows: false,
        dots: true
    });

    $('.advantages__slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1125,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
      ]
    });

    $('.team__slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1125,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
      ]
    });

    $('.header__menu-btn').on('click', function(){
        $('.menu__wrapper').toggleClass('active');
      });
      
    $('.menu__wrapper-btn').on('click', function(){
        $('.menu__wrapper').toggleClass('active');
    });

    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();
});