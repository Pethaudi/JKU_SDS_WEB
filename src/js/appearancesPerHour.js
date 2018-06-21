appearancesPerHour()

async function appearancesPerHour(){
    var canvas = document.querySelector("#appearancesPerHour")

    var xaxis = new Array()
    var yaxis = new Array()

    await parseNameCounterDataForBars("AppearancesPerHour", xaxis, yaxis)

    var densityData = {
        label: "appearances per hour",
        data: yaxis
    }

    var barChart = new Chart(canvas, {
        type: "bar",
        data: {
            labels: xaxis,
            datasets: [densityData]
        }
    })
}