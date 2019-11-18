// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import {VRInstance} from 'react-vr-web';
import WebVRPolyfill from 'webvr-polyfill';
const polyfill = new WebVRPolyfill();

function init(bundle, parent, options) {
  const vr = new VRInstance(bundle, 'react_360_tour', parent, {
    // Add custom options here
    ...options,
  });
  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here
  };
  // Begin the animation loop
  vr.start();
  navigator.getVRDisplays().then(displays => {
    // If we have a native VRDisplay, or if the polyfill
    // provided us with a CardboardVRDisplay, use it
    if (displays.length) {
      vrDisplay = displays[0];
      controls = new THREE.VRControls(camera);
      vrDisplay.requestAnimationFrame(animate);
    } else {
      // If we don't have a VRDisplay, we're probably on
      // a desktop environment, so set up desktop-oriented controls
      controls = new THREE.OrbitControls(camera);
      requestAnimationFrame(animate);
    }
  });
  return vr;
}

window.ReactVR = {init};
