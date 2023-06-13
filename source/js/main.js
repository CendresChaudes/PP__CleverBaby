import { testWebP } from './modules/utils';
import { initMobileMenu } from './modules/mobile-menu';
import { initSlider } from './modules/slider';
import { initMap } from './modules/map';

testWebP((support) => support ? document.body.classList.add('webp') : document.body.classList.add('no-webp'));

initMobileMenu();
initSlider();
initMap();
