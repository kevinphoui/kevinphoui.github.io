// JavaScript File

// To Top Button
//Get the button
var mybutton = document.getElementById("topButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Old Contact Me Map script
function initMap() {
  // The location of East Bethel
  const ramsey = { lat: 0,  lng: 0 };
  // The map, centered at East Bethel
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: ramsey,
  });
  // The marker, positioned at East Bethel
  const marker = new google.maps.Marker({
    position: ramsey,
    map: map,
  });
}

  
