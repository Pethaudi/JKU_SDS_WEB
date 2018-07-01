var div = document.querySelector("#worldspawnsperhour")
var day, hour, oldday, oldhour = -1
var data
var markers
var map

/*
Json Structure:
[
    {
        "day": "08.08.2016",
        "hours": [
            {
                "hour": "0",
                "appearances": [
                    {
                        "long": -113.509422,
                        "lat": 53.636106,
                        "pokemonid": 16
                    },
*/
function initMap(){
    init()
}

async function init(){
    map = new google.maps.Map(div, {
        zoom: 2
    })
    day = 5
    hour = 7
    data = await fetchFromData("AppearancesPerDayPerHourWithCoordinates")
    loadDataset()
}

async function parseData(){
    day = new Array()

    for(i = 0; i < data.length; i++){

        currday = data[i]
        hour = new Array()

        for(j = 0; j < data[i].hours.length; j++){

            currhour = data[i].hours[j]
            appearances = new Array()

            for(h = 0; h < data[i].hours[j].appearances.length; h++){

                currapp = data[i].hours[j].appearances[h]
                createdmarker = await createMarker(map, currapp)
                appearances.push(createMarker)
            }

            apptoadd = {
                "hour": data[i].hours[j].hour,
                "appearances": appearances
            }

            hour.push(apptoadd)
        }

        hourtoadd = {
            "day": data[i].day,
            "hours": hour
        }

        day.push(hourtoadd)
    }
    
    console.log("done with parsing the data")
    console.log(day)
    return day
}

function loadDataset(){
    appearances = data[day].hours[hour].appearances
    for(i = 0; i < appearances.length; i++){
        createMarker(map, appearances[i])
    }

}