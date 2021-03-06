//load our custom elements
require("component-leaflet-map");
require("component-responsive-frame");

//get access to Leaflet and the map
var element = document.getElementById("inspection-map");
var L = element.leaflet;
var map = element.map;

//ICH code for popup template if needed----------
var ich = require("icanhaz");
var templateFile = require("./_popup-inspection.html");
ich.addTemplate("popupInspection", templateFile);

var data = require("./inspections.geo.json");
var mapElement = document.getElementById("inspection-map");

if (mapElement) {
    var L = mapElement.leaflet;
    var map = mapElement.map;
  
    map.scrollWheelZoom.disable();
  
    var focused = false;
  
    var color = "color";
  
		var onEachFeature = function(feature, layer) {
		  layer.bindPopup(ich.popupInspection(feature.properties))
		  layer.on({
		  	     mouseover: function(e) {
		        layer.setStyle({ weight: 2.5, fillOpacity: 1 });
		      },
		      mouseout: function(e) {
		        if (focused && focused == layer) { return }
		        layer.setStyle({ weight: 0.7, fillOpacity: 0.8
		         });
		      }
		    });
		};
  
    var getColor = function(d) {
      var value = d[color];
      if (typeof value == "string") {
        value = Number(value.replace(/,/, ""));
      }
      console.log(value)
      if (typeof value != "undefined") {
       return value >= 2? 'white' :
               '#e24a12' ;
      } else {
        return "gray"
      }
    };

    var getStroke = function(d) {
      var value = d[color];
      if (typeof value == "string") {
        value = Number(value.replace(/,/, ""));
      }
      console.log(value)
      if (typeof value != "undefined") {
       return value >= 2? '#c1c1c1' :
               'black' ;
      } else {
        return "bgray"
      }
    };
  
    var style = function(feature) {
      var s = {
        fillColor: getColor(feature.properties),
        weight: 0.7,
        opacity: 1,
        color: getStroke(feature.properties),
        fillOpacity: 0.8
      };
      return s;
    }
  
    var geojson = L.geoJson(data, {
      style: style,
      onEachFeature: onEachFeature
    }).addTo(map);
  
  }
  
   map.scrollWheelZoom.disable();

// Add city/neighborhood labels above tracts
var topLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
    opacity: 0.6,
    pane: "markerPane",
  }).addTo(map);