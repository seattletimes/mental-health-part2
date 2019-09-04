require("./lib/ads");
var track = require("./lib/tracking");
// var paywall = require("./lib/paywall");
// setTimeout(() => paywall(11086587), 5000);


require("component-responsive-frame/child");
require("./bc-preroll");
require("./bubble");
require("./facility-map");

// var promise = document.querySelector('video').play();

// if (promise !== undefined) {
//   promise.then(_ => {
//     // Autoplay started!
//   }).catch(error => {
//     // Autoplay was prevented.
//     // Show a "Play" button so that user can start playback.
//   });
// };