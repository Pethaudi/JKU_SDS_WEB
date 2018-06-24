var div1 = document.querySelector("#apdphwc1")
var div2 = document.querySelector("#apdphwc2")
var div3 = document.querySelector("#apdphwc3")

var spanday = document.querySelector("#apdphwcchoosenday")
var spanhour = document.querySelector("#apdphwcchoosenhour")

var map1, map2, map3
var data

var currentday
var currenthour

async function initMap(){
    data = await fetchFromData("AppearancesPerDayPerHourWithCoordinates")
    currentday = 0
    currenthour = 0

    loadDataSet()
}

function apdphwcearlierday(){
    if(currentday < data.length - 1){
        currentday++
    } else {
        currentday = 0
    }

    loadDataSet()
}

function apdphwclaterday(){
    if(currentday > 0){
        currentday--
    } else {
        currentday = data.length - 1
    }

    loadDataSet()
}

function apdphwcearlierhour(){
    if(currenthour - 2 >= 0){
        currenthour -= 2
    } else {
        currenthour = 23 - currenthour + 2
    }

    loadDataSet()
}

function apdphwclaterhour(){
    if(currenthour + 2 <= 23){
        currenthour += 2
    } else {
        currenthour = currenthour + 2 - 23 
    }

    loadDataSet()
}

function loadDataSet(){

    console.log(currenthour)
    console.log(data[currentday].hours)

    spanday.textContent = data[currentday].day
    spanhour.textContent = data[currentday].hours[currenthour].hour

    loadMap1()
    loadMap2()
    loadMap3()
}

function loadMap1(){
    map1 = new google.maps.Map(div1, {
        zoom: 1,
        center: linz
    })

    for(i = 0; i < data[currentday].hours[currenthour].appearances.length; i++){
        createMarker(map1, data[currentday].hours[currenthour].appearances[i])
    }
}

function loadMap2(){
    map2 = new google.maps.Map(div2, {
        zoom: 1,
        center: linz
    })

    for(i = 0; i < data[currentday].hours[currenthour + 1].appearances.length; i++){
        createMarker(map2, data[currentday].hours[currenthour + 1].appearances[i])
    }
}

function loadMap3(){
    map3 = new google.maps.Map(div3, {
        zoom: 1,
        center: linz
    })

    for(i = 0; i < data[currentday].hours[currenthour + 2].appearances.length; i++){
        createMarker(map3, data[currentday].hours[currenthour + 2].appearances[i])
    }
}