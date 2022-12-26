import './polyfills';
import {initHitsSlider, initNewAdditionsSlider, initHowSectionSlider, initReviewsSlider} from "./components/initSliders";
import breakpointChecker from './utils/breakpointChecker';
import sliderDestroy from './utils/sliderDestroy';
import sliderInit from './utils/sliderInit';

const breakpointsList = {
  mobile: '(min-width: 0px) and (max-width: 767px)',
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 1280px)',
};
let howSliderInstance = initHowSectionSlider();

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

document.addEventListener('DOMContentLoaded', () => {
  initToggleMobMenu();
  initHitsSlider();
  initNewAdditionsSlider();
  initReviewsSlider();
  breakpointChecker(
    breakpointsList.desktop,
    () => sliderDestroy(howSliderInstance, true, true),
    () => sliderInit(howSliderInstance)
  );
});