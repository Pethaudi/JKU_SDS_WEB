initMap();

const maps_api_key = "AIzaSyAmVJrAL8e75c9FRVKuGEE2AqIzRmpRBA4";
var linz = {lat: 48.299821, lng: 14.290297};

async function initMap(){
    var data = await fetchFromData("Appearances")

    var markers = new Array()

    for(i = 0; i < data.length; i++){
        markers.push({lat: data[i].degreeOfLatitude, lng: data[i].degreeOfLongitude})
    }

    var map = new google.maps.Map(document.getElementById('worldmap'), {
        zoom: 4,
        center: linz
      })

    for(i = 0; i < markers.length; i++){
        new google.maps.Marker({
            position: markers[i],
            map: map
        })
    }
}

/*
you always need to make an async funtion to wait for the result of the fetch
*/
function fetchFromData(name){
    return fetch("data/" + name + ".json")
        .then(response => response.json())
}