import slick from 'slick-carousel';

const sliderhero = $('.js-slider-hero');

sliderhero.slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 4000
});
