console.log("Hello from JavaScript!");

let map_elem = document.getElementById('map');
let address2 = document.getElementById('address2');
let address1 = document.getElementById('address1');

function initMap() {
    // The location of apollo
    var apollo = {lat: 19.020603, lng: 73.029070};
    // The map, centered at apollo
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 16, center: apollo});
    // The marker, positioned at apollo
    var marker = new google.maps.Marker({position: apollo, map: map});
  }
  
function change_to_clinic(){
    //location of clinic
    var clinic = {lat: 124.02, lng: 22};
    var map = new google.maps.Map(map_elem, {zoom:16, center: clinic});
    var marker = new google.maps.Marker({position: clinic, map: map})
}

address2.addEventListener("click", change_to_clinic);
address1.addEventListener("click", initMap);