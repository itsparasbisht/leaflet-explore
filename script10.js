const map = L.map("map", {
  center: [29.5892, 79.6467],
  zoom: 12,
});

const osmLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

let drawControl = new L.Control.Draw();
map.addControl(drawControl);

let drawnFeatures = new L.FeatureGroup();
map.addLayer(drawnFeatures);

map.on("draw:created", function (e) {
  let type = e.layerType;
  let layer = e.layer;
  drawnFeatures.addLayer(layer);
});
