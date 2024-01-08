// base layers
const googleStreets = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);

const googleSat = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);

const map = L.map("map", {
  center: [29.642, 79.7505],
  zoom: 10,
  layers: [googleStreets, googleSat],
});

// markers
const almora = L.marker([29.642, 79.7505]).bindPopup("This is Almora");
const dehradun = L.marker([30.3165, 78.0322]).bindPopup("This is Dehradun");

const cities = L.layerGroup([almora, dehradun]);

const areas = L.geoJSON(data, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.name);
  },
  style: {
    color: "yellow",
    fillColor: "green",
    weight: 3,
    fillOpacity: 0.7,
  },
}).addTo(map);

// image layer
var nexrad = L.tileLayer.wms(
  "http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi",
  {
    layers: "nexrad-n0r-900913",
    format: "image/png",
    transparent: true,
    attribution: "Weather data © 2012 IEM Nexrad",
  }
);

// layer control
const baseMaps = {
  "Google Street": googleStreets,
  "Google Satellite": googleSat,
};

const overlayMaps = {
  Cities: cities,
  "Green Zone": areas,
  Nexrad: nexrad,
};

const layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
