const navigation = document.querySelector('.header__nav');
const navigationWrapper = document.querySelector('.header__nav-wrapper');
const navigationToggle = document.querySelector('.header__nav-toggle');
const navigationPhone = document.querySelector('.header__nav-phone');

const onNavigationToggleClick = () => {
  navigation.classList.toggle('is-open');

  if (Array.from(navigation.classList).includes('is-open')) {
    navigationWrapper.append(navigationPhone);
    return;
  }

  navigation.append(navigationPhone);
};

const onDocumentClick = (evt) => {
  if (!evt.target.closest('.header__nav-link') && !evt.target.closest('.header__nav-toggle')) {
    navigation.classList.remove('is-open');
  }
};

const initMobileMenu = () => {
  navigationToggle.addEventListener('click', onNavigationToggleClick);
  document.addEventListener('click', onDocumentClick);
};

export { initMobileMenu };
