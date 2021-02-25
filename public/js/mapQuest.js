function initMap() {
  L.mapquest.key= 'mJ9o8HJ9ev64aQyKRKK59kRZK4VnY6sS';
  var map =  L.mapquest.map('map', {
    center: [32.88,-117.236],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });
	// add your code here
  L.marker([32.88,-117.236]).addTo(map);
}
