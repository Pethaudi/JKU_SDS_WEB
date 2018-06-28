appearancesPerTerrain()

async function appearancesPerTerrain(){
    var canvas = document.querySelector("#appearancesperterrain")

    var xaxis = new Array()
    var yaxis = new Array()

    await parseNameCounterDataForBars("AppearancesPerTerrain", xaxis, yaxis)
    orderData(xaxis, yaxis)

    var densityData = {
        label: 'appearances per terrain',
        data: yaxis,
        backgroundColor: 'rgba(1,1,1,0.5)'
    };

    var barChart = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: xaxis,
            datasets: [densityData]
        }
    });
}