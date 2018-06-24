var div = document.querySelector("#mapstester")
var centerpoint = {lat: -33.9, lng: 151.2}

function initMap(){
    var map = new google.maps.Map(document.querySelector("#mapstester"), { zoom: 10, center: centerpoint })

    var beachMarker = new google.maps.Marker({
        position: {lat: -33.890, lng: 151.274},
        map: map,
        icon: getImagepath(1)
    })
  }