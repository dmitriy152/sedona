const map = L.map('map')
  .setView({
    lat:  34.86211451743089,
    lng: -111.81224823812957,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  iconSize: [34, 34],
  iconAnchor: [17, 34],
});

const marker = L.marker(
  {
    lat:  34.86211451743089,
    lng: -111.81224823812957,
  },
  {
    draggable: false,
    icon: mainPinIcon
    
  },
);

marker.addTo(map).bindPopup("Город, расположенный в северной части долины Верде штата Аризона. 34°51′36″ с. ш. 111°47′21″ з. д.",
 {
  keepInView: true,
});