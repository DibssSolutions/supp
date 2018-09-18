import slick from 'slick-carousel';
import { buildIcon } from '../utils';

const sliderRecipe= $('.js-slider-recipe');
sliderRecipe.slick({
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: `<button class="slider-recipe__prev" type="button">${buildIcon('left-arr')}</button>`,
  nextArrow: `<button class="slider-recipe__next" type="button">${buildIcon('right-arr')}</button>`
});
