const map = L.map("map", {
  center: [28.2096, 83.9856],
  zoom: 8,
});

map.zoomControl.setPosition("topright");

const osmLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const districts = L.geoJSON(nepalDistrictData).addTo(map);
const hqs = L.geoJSON(nepalHqData).addTo(map);

baseLayer = {
  OSM: osmLayer,
};

otherLayers = {
  "Districts Boundaries": districts,
  Headquarters: hqs,
};

L.control.layers(baseLayer, otherLayers, { collapsed: false }).addTo(map);
