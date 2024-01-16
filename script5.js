const map = L.map("map", {
  center: [28.2096, 83.9856],
  zoom: 8,
});

map.zoomControl.setPosition("topright");

const osmLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// const districts = L.geoJSON(nepalDistrictData, {
//   onEachFeature: (feature, layer) => {
//     // get area of each district
//     const area = (turf.area(feature) / 1000000).toFixed(2);
//     layer.bindPopup(`Area - ${area} sq KMs`);

//     // get center of each district
//     const center = turf.center(feature);

//     // get bbox of each district and add it to map
//     const bbox = turf.bbox(feature);
//     const bboxPolygon = turf.bboxPolygon(bbox);
//     L.geoJSON(bboxPolygon).addTo(map);
//   },
// }).addTo(map);

// const hqs = L.geoJSON(nepalHqData).addTo(map);

// const baseLayer = {
//   OSM: osmLayer,
// };

// const otherLayers = {
//   "Districts Boundaries": districts,
//   Headquarters: hqs,
// };

// L.control.layers(baseLayer, otherLayers, { collapsed: false }).addTo(map);

// turf js - creating geometry
const point = turf.point([83.9856, 28.2096]); // [lng, lat]
L.geoJSON(point).addTo(map);

const linestring1 = turf.lineString(
  [
    [-24, 63],
    [-23, 60],
    [-25, 65],
    [-20, 69],
  ],
  { name: "line 1" }
);
// const lineGeoJson = L.geoJSON(linestring1).addTo(map);
// map.fitBounds(lineGeoJson.getBounds());

// random polygons with turf js
const polygons = turf.randomPolygon(5, { bbox: [80, 20, 90, 30] });
const pGeoJson = L.geoJSON(polygons).addTo(map);
map.fitBounds(pGeoJson.getBounds());
