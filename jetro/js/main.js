$(function () {
    $(".slider-for").slick({
      nextArrow:
        '<button class="slick-arrow slick-next"><img src="images/next.png" alt="next arrow"></button>',
      prevArrow:
        '<button class="slick-arrow slick-prev"><img src="images/previous.png" alt="prev arrow"></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: ".slider-nav",
    });
    $(".slider-nav").slick({
      slidesToShow: 6,
      slidesToScroll: 6,
      asNavFor: ".slider-for",
      arrows: false,
      focusOnSelect: true,
      variableWidth: true,
    });

    $('.header__menu-btn').on('click', function(){
      $('.header__menu > ul').slideToggle();
    });



  });