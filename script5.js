const map = L.map("map", {
  center: [28.2096, 83.9856],
  zoom: 8,
});

map.zoomControl.setPosition("topright");

const osmLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const districts = L.geoJSON(nepalDistrictData, {
  onEachFeature: (feature, layer) => {
    const area = (turf.area(feature) / 1000000).toFixed(2);
    layer.bindPopup(`Area - ${area} sq KMs`);

    const center = turf.center(feature);

    const bbox = turf.bbox(feature);
    const bboxPolygon = turf.bboxPolygon(bbox);

    L.geoJSON(bboxPolygon).addTo(map);
  },
}).addTo(map);

const hqs = L.geoJSON(nepalHqData).addTo(map);

const baseLayer = {
  OSM: osmLayer,
};

const otherLayers = {
  "Districts Boundaries": districts,
  Headquarters: hqs,
};

L.control.layers(baseLayer, otherLayers, { collapsed: false }).addTo(map);
