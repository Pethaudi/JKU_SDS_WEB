var xaxis = new Array()
var yaxis = new Array()
//showBars()
//showWeatherspawns()
showTerrainSpawns()

async function showBars(){
    await parseNameCounterDataForBars("MostChummilyPokemon", xaxis, yaxis)
    orderData(xaxis, yaxis)
    for(i = 0; i < 141; i++){
        xaxis.pop()
        yaxis.pop()
    }
    appearancesPerHourPreDefined(document.querySelector("#chummily"), xaxis, yaxis)
}

async function showWeatherspawns(){
    await parseNameCounterDataForBars("SpawnsPerWeather", xaxis, yaxis)
    orderData(xaxis, yaxis)
    for(i = 0; i < 20; i++){
        xaxis.pop()
        yaxis.pop()
    }
    console.log(document.querySelector("#weather"))
    appearancesPerHourPreDefined(document.querySelector("#weather"), xaxis, yaxis)
}

async function showTerrainSpawns(){
    await parseNameCounterDataForBars("AppearancesPerTerrain", xaxis, yaxis)
    orderData(xaxis, yaxis)
    for(i = 0; i < 10; i++){
        xaxis.pop()
        yaxis.pop()
    }
    console.log(document.querySelector("#terrain"))
    appearancesPerHourPreDefined(document.querySelector("#terrain"), xaxis, yaxis)
}