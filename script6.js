const map = L.map("map", {
  center: [28.2096, 83.9856],
  zoom: 8,
});

const osmLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const btn = document.getElementById("zoom-to");
const btn2 = document.getElementById("fly-to");

btn.addEventListener("click", () => {
  map.setView([28.2096, 83.9856]);
});

btn2.addEventListener("click", () => {
  map.flyTo([28.2096, 83.9856], 10, {
    animate: true,
    duration: 2, // in seconds
  });
});
