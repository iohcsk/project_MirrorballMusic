'use strict';

$(function(){
    $('.slick1').slick({
        slide: 'div',
        infinite : true,
        slidesToShow : 1,
        slidesToScroll : 1,
        speed : 1000,
        arrows : true,
        dots : true,
        autoplay : true,
        autoplaySpeed : 5000,
        pauseOnHover : true,
        vertical : false,
        dotsClass : "slick-dots",
        draggable : true,
    });
});


$(function(){
    $(".sidemenu_btn").on("click", function(){
        $(".sidemenu_gnb").animate({width: "toggle"}, 300);
    });
});


$('.slick2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    variableWidth : true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });