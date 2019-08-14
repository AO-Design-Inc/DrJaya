console.log("Hello from JavaScript!");

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
    //location of clinics
    var clinic = {lat: 19.048887, lng: 72.914030};
    var map = new google.maps.Map(document.getElementById('map'), {zoom:16, center: clinic});
    var marker = new google.maps.Marker({position: clinic, map: map})
}

address2.addEventListener("click", change_to_clinic);
address1.addEventListener("click", initMap);