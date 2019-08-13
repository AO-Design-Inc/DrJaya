console.log("Hello from JavaScript!");

function initMap() {
    // The location of Uluru
    var apollo = {lat: 19.020603, lng: 73.029070};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 16, center: apollo});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: apollo, map: map});
  }
  
