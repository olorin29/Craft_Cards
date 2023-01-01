import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function initHitsSlider() {
  return new Swiper('.hits__slider', {
    slidesPerView: 2,
    spaceBetween: 19,
    modules: [Pagination, Navigation],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next.hits',
      prevEl: '.swiper-button-prev.hits',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  })
}

function initNewAdditionsSlider() {
  return new Swiper('.new-additions__slider', {
    slidesPerView: 2,
    spaceBetween: 19,
    modules: [Pagination, Navigation],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next.new-additions',
      prevEl: '.swiper-button-prev.new-additions',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  })
}

function initHowSectionSlider() {
  return new Swiper('.how__slider', {
    slidesPerView: 2,
    spaceBetween: 19,
    modules: [Pagination, Navigation],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next.reviews',
      prevEl: '.swiper-button-prev.reviews',
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  })
}

function initReviewsSlider() {
  return new Swiper('.reviews__slider', {
    slidesPerView: 1,
    spaceBetween: 19,
    modules: [Pagination, Navigation],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next.reviews',
      prevEl: '.swiper-button-prev.reviews',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  })
}

export {
  initHitsSlider,
  initNewAdditionsSlider,
  initHowSectionSlider,
  initReviewsSlider,
};
