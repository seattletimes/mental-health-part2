//load our custom elements
require("component-leaflet-map");
require("component-responsive-frame");


//get access to Leaflet and the map
var element = document.getElementById("facility-map");
var L = element.leaflet;
var map = element.map;

var ich = require("icanhaz");
var templateFile = require("./_popup.html");
ich.addTemplate("popup", templateFile);

// var onEachFeature = function(feature, layer) {
// 	layer.bindPopup(ich.popup(feature.properties))
// };
var $ = require("jquery");
var data = require("./hospital.geo.json");
var currentItem = null;

var allLayers = [];

var onEachFeature = function(feature, layer) {
  allLayers.push(layer);

  feature.layer = layer;
  layer.on('click', function(e) {
    allLayers.forEach(function(l) {
      l.setStyle({ weight: 1, fillOpacity: 0.7 });  
    })
    layer.setStyle({ weight: 2.5, fillOpacity: 1 });

    currentItem = feature;
    var container = $(".pop-container");
    container.html(ich.popup(feature.properties));

    $(".close").click(function() {
      container.html("");
    });
  });
};

map.scrollWheelZoom.disable();

function geojsonMarkerOptions(feature) {

  return {
    radius: 7,
    // fillColor: getColor(feature.properties.type),
    fillColor: "#f15a29",
    color: "#000000",
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.7,
  }
};

var geojson = L.geoJson(data, {
    pointToLayer: function (feature, latlng) {
        var marker = L.circleMarker([latlng.lat, latlng.lng]);
      return marker;
    },
    style: geojsonMarkerOptions,
    onEachFeature: onEachFeature
}).addTo(map);

map.scrollWheelZoom.disable();

