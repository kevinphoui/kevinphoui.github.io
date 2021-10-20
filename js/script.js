// JavaScript File

// Contact Me Map
function initMap() {
    // The location of East Bethel
    const eastBethel = { lat: 45.3194, lng: -93.2024 };
    // The map, centered at East Bethel
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      center: eastBethel,
    });
    // The marker, positioned at East Bethel
    const marker = new google.maps.Marker({
      position: eastBethel,
      map: map,
    });
  }