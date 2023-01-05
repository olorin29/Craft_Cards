import './polyfills';
import {
  initHitsSlider,
  initNewAdditionsSlider,
  initHowSectionSlider,
  initReviewsSlider,
  initActionsTodaySectionSlider,
  initActionsWeekSectionSlider,
  productSlider
} from "./components/initSliders";
import breakpointChecker from './utils/breakpointChecker';
import sliderDestroy from './utils/sliderDestroy';
import sliderInit from './utils/sliderInit';

const breakpointsList = {
  mobile: '(min-width: 0px) and (max-width: 767px)',
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 1280px)',
};

let howSliderInstance = initHowSectionSlider();
let actionsTodaySliderInstance = initActionsTodaySectionSlider();
let actionsWeekSliderInstance = initActionsWeekSectionSlider();

function initToggleMobMenu() {
  const header = document.querySelector('.header');
  const btn = header?.querySelector('.header__btn-menu');

  if (!btn) return;

  btn.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll');
    header.classList.toggle('active');
    btn.classList.toggle('active');
  })
}

function initAccordion() {
  const accordions = document.querySelectorAll('.accordion');

  accordions?.forEach(acc => {
    const btn = acc.querySelector('.accordion__btn');
    const content = acc.querySelector('.accordion__content');

    btn.addEventListener('click', () => {
      btn.parentNode.classList.toggle('active');

      window.getComputedStyle(content).maxHeight === '0px'
        ? content.style.maxHeight = `${content.scrollHeight}px`
        : content.style.maxHeight = null
      });
    });
}

document.addEventListener('DOMContentLoaded', () => {
  initToggleMobMenu();
  initHitsSlider();
  initNewAdditionsSlider();
  initReviewsSlider();
  productSlider();
  initAccordion();
  breakpointChecker(
    breakpointsList.desktop,
    () => sliderDestroy(howSliderInstance, true, true),
    () => sliderInit(howSliderInstance)
  );
  breakpointChecker(
    breakpointsList.desktop,
    () => sliderDestroy(actionsTodaySliderInstance, true, true),
    () => sliderInit(actionsTodaySliderInstance)
  );
  breakpointChecker(
    breakpointsList.desktop,
    () => sliderDestroy(actionsWeekSliderInstance, true, true),
    () => sliderInit(actionsWeekSliderInstance)
  );
});