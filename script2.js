const map = L.map("map", {
  center: [27.1766701, 78.0080745],
  zoom: 10,
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    setInterval(() => {
      plotPosition(position);
    }, 1000);
  });
} else {
  console.log("geolocation IS NOT available");
}

let marker, circle;

function plotPosition(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const accuracy = position.coords.accuracy;

  if (marker) {
    map.removeLayer(marker);
  }
  if (circle) {
    map.removeLayer(circle);
  }

  marker = L.marker([lat, lng]).addTo(map);
  circle = L.circle([lat, lng], { radius: accuracy }).addTo(map);

  const featureGroup = L.featureGroup([marker, circle]).addTo(map);

  map.fitBounds(featureGroup.getBounds());
}
