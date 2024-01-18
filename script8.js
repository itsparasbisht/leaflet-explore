const map1 = L.map("map1", {
  center: [28.2096, 83.9856],
  zoom: 8,
});

const map2 = L.map("map2", {
  center: [28.2096, 83.9856],
  zoom: 8,
});

const osmLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map1);

const googleSat = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
).addTo(map2);

map1.sync(map2);
map2.sync(map1);
