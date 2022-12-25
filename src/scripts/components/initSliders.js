import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function initHitsSlider() {
  return new Swiper('.hits__slider', {
    slidesPerView: 2,
    spaceBetween: 19,
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
}

function initNewAdditionsSlider() {
  return new Swiper('.new-additions__slider', {
    slidesPerView: 2,
    spaceBetween: 19,
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
}

function initHowSectionSlider() {
  return new Swiper('.how__slider', {
    slidesPerView: 2,
    spaceBetween: 19,
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
}

function initReviewsSlider() {
  return new Swiper('.reviews__slider', {
    slidesPerView: 1,
    spaceBetween: 19,
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
}

export {initHitsSlider, initNewAdditionsSlider, initHowSectionSlider, initReviewsSlider};
