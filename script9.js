const map = L.map("map", {
  center: [28.252707666241346, 83.97833571758883],
  zoom: 18,
});

const osmLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const markers = L.markerClusterGroup();

const markerOptions = {
  radiud: 8,
  fillColor: "violet",
  color: "black",
  weight: 2,
  opacity: 1,
  fillOpacity: 0.8,
};

L.geoJson(data, {
  pointToLayer: (feature, latLng) => {
    return markers.addLayer(L.circleMarker(latLng, markerOptions));
  },
}).addTo(map);
