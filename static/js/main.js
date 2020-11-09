$('.responsive-slide').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  autoplay: true,
  slidesToScroll: 3,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.team-slide').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  autoplay: true,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// HERO

jQuery(document).ready(function ($) {
  $('.home-slide').slick({
  dots: false,
      pauseOnHover: false,
      infinite: true,
      speed: 500,
      fade: !0,
      cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
      autoplay: true,
  autoplaySpeed: 5000,
      draggable: false,
  arrows: false,
  responsive: [
    {
  breakpoint: 1024,
  settings: {
  slidesToShow: 1,
  slidesToScroll: 1,
      infinite: true
            }
      },
      {
  breakpoint: 768,
  settings: {
      draggable: true,
            }
  },
  {
  breakpoint: 600,
  settings: {
      slidesToShow: 1,
      draggable: true,
  slidesToScroll: 1
          }
  },
  {
  breakpoint: 480,
  settings: {
      slidesToShow: 1,
      draggable: true,
  slidesToScroll: 1
            }
  }

          ]
                });
      });

// SINGLE LISTING SLIDER
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  adaptiveHeight: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});

// LIGHTBOX
$('.slider-for').slickLightbox();