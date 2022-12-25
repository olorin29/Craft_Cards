import './polyfills';
import {initHitsSlider, initNewAdditionsSlider, initHowSectionSlider, initReviewsSlider} from "./components/initSliders";
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
  initHowSectionSlider();
  initReviewsSlider();
});