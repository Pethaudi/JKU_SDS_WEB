var div = document.querySelector("#worldspawnsperhour")
var day, hour
var data
var markers

async function initMap(){
    data = await fetchFromData("AppearancesPerDayPerHourWithCoordinates")
    day = 0
    hour = 0

}

async function parseData(){
    markers = new Array()

    for(i = 0; i < data; i++){
        //get the day
        for(j = 0; j < data[i].hours.length; j++){
            //get the hour
        }
    }
}

function loadDataset(){

}