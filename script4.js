const map = L.map("map", {
  center: [29.5892, 79.6467],
  zoom: 10,
});

map.zoomControl.setPosition("topright");

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([29.5892, 79.6467])
  .addTo(map)
  .bindPopup("hello")
  .openPopup();

L.control.scale({ position: "topright" }).addTo(map);

// full screen view
const mapId = document.getElementById("map");
function fullscreenView() {
  mapId.requestFullscreen();
}
