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

var layerString = []
var checkbox = document.querySelectorAll('input[type=checkbox]');
var i = 0;

for (; i < checkbox.length; i++) {
  var check = checkbox[i];

  if (check.checked === true) {
      layerString.push(check.value)
  }
}



console.log(layerString, layerString.join(","))

var mywms = new L.NonTiledLayer.WMS("http://62.113.107.81:8081/geoserver/department/wms", { // адрес Geoserver
    layers: layerString.join(","), // имя слоя на Geoserver
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    no_cache_plz: Date.now(),
    attribution: "myattribution"
}).addTo(map);


let selectedStyle = {
    weight: 2,
    color: '#525252',
    fill: false,
};

var selectedPolygonId = -1;

map.on('click', function(e) {
    // The 'wmsLayer' variable contains the reference to the WMS layer already loaded on the map, from which it is possible to make the subsequent call to 'GetFeatureInfo'
    mywms.getFeatureInfo({
        latlng: e.latlng,
        done: function(featureCollection) {

            // Check for previous selected polygon layer and possibly remove it
        //    if (selectedPolygonId > -1)    {
        //        map.removeLayer(map._layers[selectedPolygonId]);
        //        selectedPolygonId = -1;
        //    }
              console.log(featureCollection);
//
//
        //    // Create the newly selected polygon layer using WFS
        //    if (featureCollection.features.length > 0) {
        //        let selectedPolygon = L.Geoserver.wfs("http://62.113.107.81:8081/geoserver/department/wms", {
        //            layers: "department:result",
        //            CQL_FILTER: `ID='${featureCollection.features[0].properties.NAME}'`,
        //            style: selectedStyle,
        //            fitLayer: false,
        //        });
//
        //        selectedPolygonId = L.stamp(selectedPolygon);
        //        selectedPolygon.addTo(map);
        //    }
//
        //    // Info popup
              let content = featureCollection.features[0].properties.NAME; // HTML content with geometry related attributes values already formatted
              L.popup({ maxWidth: 800})
                  .setLatLng(e.latlng)
                  .setContent(content)
                  .openOn(map);
        },
        fail: function(errorThrown) {
            console.log('getFeatureInfo failed: ', errorThrown);
        },
        always: function() {
            console.log('getFeatureInfo finished');
        }
    });
});