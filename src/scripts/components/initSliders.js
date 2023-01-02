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
  const el = document.querySelector('.how__slider');

  return el ? new Swiper(el, {
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
  }) : null;
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

function initActionsTodaySectionSlider() {
  const el = document.querySelector('.actions__slider-today');

  return el ? new Swiper(el, {
    slidesPerView: 1,
    spaceBetween: 19,
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  }) : null;
}

function initActionsWeekSectionSlider() {
  const el = document.querySelector('.actions__slider-week');

  return el ? new Swiper(el, {
    slidesPerView: 1,
    spaceBetween: 19,
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  }) : null;
}

export {
  initHitsSlider,
  initNewAdditionsSlider,
  initHowSectionSlider,
  initReviewsSlider,
  initActionsTodaySectionSlider,
  initActionsWeekSectionSlider
};
