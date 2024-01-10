const map = L.map("map", {
  center: [29.5892, 79.6467],
  zoom: 10,
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

let marker = L.marker([29.5892, 79.6467]).addTo(map);

map.on("click", (e) => {
  const lat = e.latlng.lat;
  const lng = e.latlng.lng;

  L.Routing.control({
    waypoints: [L.latLng(29.5892, 79.6467), L.latLng(lat, lng)],
  })
    .on("routesfound", (e) => {
      e.routes[0].coordinates.forEach((coord, i) => {
        setTimeout(() => {
          marker.setLatLng([coord.lat, coord.lng]);
        }, 400 * i);
      });
    })
    .addTo(map);
});
