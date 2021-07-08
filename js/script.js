// JavaScript File
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
}

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