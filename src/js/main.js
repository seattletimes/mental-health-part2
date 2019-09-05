require("./lib/ads");
var track = require("./lib/tracking");
// pageId is a unique identifier for the current project
// do not call this function multiple times

// var walled = false;
 
// var paywall = function paywall(pageID) {
//   if (walled) return;
//   walled = true;
 
//   window.SEATIMESCO = window.SEATIMESCO || {};
//   window.SEATIMESCO.paywall = {
//     contentMetered: true,
//     pageExcluded: false,
//     configsPath: "https://www.seattletimes.com/wp-json/paywall/settings"
//   };
//   window.SEATIMESCO.contentInfo = {
//     domain: "projects.seattletimes.com",
//     post_id: pageID,
//     sections_all: "projects"
//   };
//   var paywallScript = document.createElement("script");
//   paywallScript.async = true;
//   paywallScript.defer = true;
//   paywallScript.src = "https://www.seattletimes.com/wp-content/plugins/st-user-messaging/dist/st-user-messaging-paywall-bundle.js";
//   document.head.appendChild(paywallScript);
// };
 
// var _$paywall_10 = paywall;

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