var mylocation = document.getElementById("my-location");
var mapLocation = document.getElementById("map-location");

var long;
var lat;

mylocation.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((loc) => {
    long = loc.coords.longitude;
    lat = loc.coords.latitude;
    alert(`Longitude: ${long}\nLatitude: ${lat}`);
  });
});

mapLocation.addEventListener("click", () => {
  open(`http://maps.google.com/maps?q=${lat}+${long}`, "_blank");
});
