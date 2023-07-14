var map = L.map('map').setView([45.528, 45.528], 2);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map',
	maxZoom: 18,
	id: 'your.project.id',
}).addTo(map);

var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
 function forEachFeature(feature, layer) {
        console.log(feature.properties);
        var popupContent = "<p> <b>" + JSON.stringify(feature.properties) + "</p>";

        layer.bindPopup(popupContent);
}

var medMurmanskData = new L.GeoJSON.AJAX("/data/med_murmansk.geojson",{
    onEachFeature: forEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);

//Geoserver wms
var mywms = L.tileLayer.wms("http://62.113.107.81:8081/geoserver/department/wms", {
    layers: 'department:geopkg_result',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "myattribution"
}).addTo(map);