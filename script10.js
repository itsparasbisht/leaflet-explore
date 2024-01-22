const map = L.map("map", {
  center: [29.5892, 79.6467],
  zoom: 12,
});

const osmLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

let drawnFeatures = new L.FeatureGroup();
map.addLayer(drawnFeatures);

let drawControl = new L.Control.Draw({
  edit: {
    featureGroup: drawnFeatures,
    remove: false,
  },
});
map.addControl(drawControl);

map.on("draw:created", function (e) {
  let layer = e.layer;
  console.log(layer.toGeoJSON());
  drawnFeatures.addLayer(layer);
});

map.on("draw:edited", function (e) {
  let layers = e.layers;
  layers.eachLayer(function (layer) {
    console.log(layer);
  });
});
