let gamburger = document.querySelector("nav");
let buttonHeader = document.querySelector(".button_nav");
buttonHeader.addEventListener('click', function () {
    gamburger.classList.toggle("nav_open")
  });

let buttonHeaderClosed =  document.querySelector(".button_closed");
buttonHeaderClosed.addEventListener("click", function(){
  gamburger.classList.remove("nav_open")
})


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

let bodyDocument = document.querySelector("body")
let bacgroundClosedBox = document.querySelector(".conteiner_closed_box");
let textBlockClosed = document.querySelector(".closed_hotel_box")
let buttonClosedBox = document.querySelector(".button_closed_box");
let loadingBoxSear = document.querySelector(".search_hotel_box")
let loadingBoxSearhHotel = document.querySelector(".search_hotel");

buttonClosedBox.addEventListener("click", function(){
  textBlockClosed.classList.remove("open_text_block")
  bacgroundClosedBox.classList.remove("open_text_block")
  bodyDocument.classList.remove("blur")
})

loadingBoxSearhHotel.addEventListener("click", function(){
  bodyDocument.classList.add("blur")
  bacgroundClosedBox.classList.add("open_text_block")
  loadingBoxSear.classList.toggle("loading_box_open")
  textBlockClosed.classList.remove("open_text_block")
  setTimeout(() => {
    loadingBoxSear.classList.remove("loading_box_open")
  }, 4000);
  setTimeout(() => {
    textBlockClosed.classList.add("open_text_block")
  }, 4100);
})