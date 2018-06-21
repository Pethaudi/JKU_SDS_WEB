appearancesPerHour()

async function appearancesPerHour(){
    var canvas = document.querySelector("#appearancesPerHour")

    var xaxis = new Array()
    var yaxis = new Array()

    await parseNameCounterDataForBars("AppearancesPerHour", xaxis, yaxis)
    orderDataAfterX(xaxis, yaxis)

    var densityData = {
        label: "appearances per hour",
        data: yaxis,
        backgroundColor: 'rgba(1,1,1,0.5)'
    }

    var barChart = new Chart(canvas, {
        type: "bar",
        data: {
            labels: xaxis,
            datasets: [densityData]
        }
    })
}

function appearancesPerHourPreDefined(canvas, xaxis, yaxis){
    var densityData = {
        label: "appearances per hour",
        data: yaxis,
        backgroundColor: 'rgba(1,1,1,0.5)'
    }

    var barChart = new Chart(canvas, {
        type: "bar",
        data: {
            labels: xaxis,
            datasets: [densityData]
        }
    })
}