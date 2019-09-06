require("./lib/ads");
var track = require("./lib/tracking");
var paywall = require("./lib/paywall");
setTimeout(() => paywall(11086596), 5000);

require("component-responsive-frame/child");
require("./bc-preroll");
require("./bubble");
require("./facility-map");
require("./inspection-map");

// var promise = document.querySelector('video').play();

// if (promise !== undefined) {
//   promise.then(_ => {
//     // Autoplay started!
//   }).catch(error => {
//     // Autoplay was prevented.
//     // Show a "Play" button so that user can start playback.
//   });
// };

var mobileAll = document.getElementById("mobile-all");
var mobileFacility = document.getElementById("mobile-facility");
var mobileType = document.getElementById("mobile-type");
var mobileImage = document.getElementById("mobile-image-all");

mobileAll.onclick = function(elem) {
    mobileAll.classList.add("active");
    mobileFacility.classList.remove("active");
    mobileType.classList.remove("active");
    mobileImage.src = "assets/photos/bubble-chart-mobile-all.jpg";
}

mobileFacility.onclick = function(elem) {
    mobileFacility.classList.add("active");
    mobileAll.classList.remove("active");
    mobileType.classList.remove("active");
    mobileImage.src = "assets/photos/bubble-chart-mobile-facility.jpg";
}

mobileType.onclick = function(elem) {
    mobileType.classList.add("active");
    mobileFacility.classList.remove("active");
    mobileAll.classList.remove("active");
    mobileImage.src = "assets/photos/bubble-chart-mobile-type.jpg";
}
