const map = L.map("map").setView([29.642, 79.7505], 16);

L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
}).addTo(map);

const marker = L.marker([29.642, 79.7505], { draggable: true }).addTo(map);
const popup = L.popup([29.642, 79.7505], { content: "hello" });
marker.bindPopup(popup);

marker.on("dragend", function () {
  const lat = marker.getLatLng().lat;
  const lng = marker.getLatLng().lng;

  marker.setLatLng([lat, lng]);
  map.panTo([lat, lng]);

  console.log(lat, lng);
});
