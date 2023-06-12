import { testWebP } from './modules/utils';
import { initMobileMenu } from './modules/mobile-menu';
import { initSlider } from './modules/slider';

testWebP((support) => {
  if (support) {
    document.body.classList.add('webp');
    return;
  }

  document.body.classList.add('no-webp');
});

initMobileMenu();
initSlider();
