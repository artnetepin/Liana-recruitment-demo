$(document).ready(function() {

    var nav = $('.main-nav');
    var navPos = nav.offset().top;

    $(window).scroll(function () {
      if ($(this).scrollTop() >= navPos) {
        nav.addClass("fixed-nav");
      } else {
        nav.removeClass("fixed-nav");
      }
    });


    // UP button settings
    $('body').prepend('<a href="#" class="back-to-top" title="Back to top"><i class="fa fa-angle-up" aria-hidden="true"></i></a>');

    var amountScrolled = 200;

    $(window).scroll(function(e) {
      e.preventDefault();
      if ( $(window).scrollTop() > amountScrolled ) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });

    $('.back-to-top').click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 700);
      return false;
    });

    // Text animation added
    $('.gen-info').addClass('load');

  // Slider definition and configuration
  var newsSwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 3,
    spaceBetween: 40,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    autoplay: 4000,
    loop: true,
    breakpoints: {
            960: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            425: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
  });
});
