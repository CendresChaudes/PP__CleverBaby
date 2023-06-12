import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const sliderList = document.querySelector('.slider__list');
const sliderItems = document.querySelectorAll('.slider__item');

const duplicateSlides = () => sliderList.append(...Array.from(sliderItems).map((item) => item.cloneNode(true)));

const initSlider = () => {
  duplicateSlides();

  const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,

    navigation: {
      prevEl: '.slider__button--prev',
      nextEl: '.slider__button--next'
    },

    breakpoints: {
      320: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });
};

export { initSlider };
