/*
you always need to make an async funtion to wait for the result of the fetch
*/

function fetchFromData(name) {
    return fetch("src/data/" + name + ".json")
        .then(response => response.json());
}

//for bars3
function orderData(xaxis, yaxis){
    for(i = 0; i < yaxis.length; i++){
        for(j = 0; j < yaxis.length; j++){
            if(yaxis[j] < yaxis[i]){
                tmp = yaxis[i]
                yaxis[i] = yaxis[j]
                yaxis[j] = tmp
                tmp = xaxis[i]
                xaxis[i] = xaxis[j]
                xaxis[j] = tmp
            }
        }
    }
}

//for bars3
function orderDataAfterX(xaxis, yaxis){
    for(i = 0; i < xaxis.length; i++){
        for(j = i; j < xaxis.length; j++){
            if(Number(xaxis[j]) < Number(xaxis[i])){
                tmp = xaxis[i]
                xaxis[i] = xaxis[j]
                xaxis[j] = tmp
                tmp = yaxis[i]
                yaxis[i] = yaxis[j]
                yaxis[j] = tmp
            }
        }
    }
}

//loads and parses the data for a bar chart
async function parseNameCounterDataForBars(name, xaxis, yaxis){
    var data = await fetchFromData(name)
    console.log(data)
    for(i = 0; i < data.length; i++){
        xaxis.push(data[i].name)
        yaxis.push(data[i].counter)
    }
}

function getImagepath(pokemonid){
    var path = "src/img/"
    var ending = ".png"
    console.log(pokemonid)

    if(pokemonid >= 100){
        return path + pokemonid + ending
    } else if(pokemonid >= 10){
        return path + "0" + pokemonid + ending
    } else {
        return path + "00" + pokemonid + ending
    }
}

function createMarker(map, pokemon){
    marker = new google.maps.Marker({
        position: {lat: pokemon.lat, lng: pokemon.long},
        map: map,
        icon: getMarker(pokemon.pokemonid)
    })
    return marker
}