const COORDINATES = [59.939300, 30.323300];
const MAP_ZOOM = 17;
const SEARCH_CONTROL_PROVIDER = 'yandex#search';

const ICON_SIZE = [32, 39];
const ICON_OFFSET = [-16, -32];
const HINT_CONTENT = 'CleverBaby';
const ICON_LAYOUT = 'default#image';
const ICON_URL = '/images/content/contacts/map-pin.svg';

const mapContainer = document.querySelector('.contacts__map');

const createMap = () => {
  const map = new ymaps.Map('map', {
    center: COORDINATES,
    zoom: MAP_ZOOM,
  }, {
    searchControlProvider: SEARCH_CONTROL_PROVIDER
  });

  const placemark = new ymaps.Placemark(COORDINATES, {
    hintContent: HINT_CONTENT,
  }, {
    iconLayout: ICON_LAYOUT,
    iconImageHref: ICON_URL,
    iconImageSize: ICON_SIZE,
    iconImageOffset: ICON_OFFSET
  });

  map.geoObjects.add(placemark);
};

const initMap = () => {
  mapContainer.classList.remove('no-js');

  ymaps.ready(createMap);
};

export { initMap };
