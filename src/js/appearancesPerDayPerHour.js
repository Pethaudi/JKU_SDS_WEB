
var choosenDaySpan = document.querySelector("#choosendayPerDayPerHour")
var currentDay = 0
var appearancesPerDayPerHourData
var isInitialized = false
var canvas = document.querySelector("#appearancesPerDayPerHour")

loadData()

async function init(){
    appearancesPerDayPerHourData = await fetchFromData("AppearancesPerDayPerHour")
}

async function loadData(){
    if(!isInitialized){
        await init()
        isInitialized = true
        currentDay = 0
    }
    choosenDaySpan.textContent = "day: " + appearancesPerDayPerHourData[currentDay].day

    var xaxis = new Array()
    var yaxis = new Array()

    for(i = 0; i < appearancesPerDayPerHourData[currentDay].hours.length; i++) {
        elem = appearancesPerDayPerHourData[currentDay].hours[i]
        xaxis.push(elem.name)
        yaxis.push(elem.counter)
    }
    orderDataAfterX(xaxis, yaxis)
    appearancesPerHourPreDefined(canvas, xaxis, yaxis)
}


function earlierPerDayPerHour(){
    currentDay += 1
    if(currentDay == appearancesPerDayPerHourData.length){
        currentDay = 0
    }
    loadData()
}

function laterPerDayPerHour(){
    currentDay -= 1
    if(currentDay < 0){
        currentDay = appearancesPerDayPerHourData.length - 1
    }
    loadData()
}