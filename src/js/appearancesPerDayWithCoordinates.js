var data
var div = document.querySelector("#mapperday")
var choosenday = document.querySelector("#choosenday")
var cnt = 0
var map
const linz = {lat: 48.299821, lng: 14.290297};

function initMap(){
    appearancesPerDayWithCoordinates()
}

async function appearancesPerDayWithCoordinates(){
    data = await fetchFromData("AppearancesPerDayWithCoordinates")
    reverseData()
    loadDataset()
}


function later(){
    if(cnt + 1 == data.length)
        cnt = 0
    else cnt++
    loadDataset()
}

function earlier(){
    if(cnt == 0)
        cnt = data.length
    else cnt--
    loadDataset()
}

function reverseData(){
    for(i = 0; i < data.length / 2; i++){
        var tmp = data[i]
        data[i] = data[data.length - i - 1]
        data[data.length -i -1] = tmp
    }
}

function loadDataset(){
    notVisible()
    map = new google.maps.Map(div, {
        zoom: 4,
        center: linz
    })

    for(i = 0; i < data[cnt].appearances.length; i++){
        new google.maps.Marker({
            position: {lat: data[cnt].appearances[i].lat, lng: data[cnt].appearances[i].long},
            map: map
        })
    }

    choosenday.textContent = "day: " + data[cnt].day
    visible()
}

function visible(){
    document.querySelector("#perdaycoordinates").style.visibility = 'visible'
}

function notVisible(){
    document.querySelector("#perdaycoordinates").style.visibility = 'hidden'
}