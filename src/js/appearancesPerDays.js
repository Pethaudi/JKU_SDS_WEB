/*
you always need to make an async funtion to wait for the result of the fetch
*/

appearancesPerDays()

async function appearancesPerDays(){
    var canvas = document.querySelector("#appearancesPerDays")

    var xaxis = new Array()
    var yaxis = new Array()

    await parseNameCounterDataForBars("AppearancesPerDays", xaxis, yaxis)
    //orderData(xaxis, yaxis)

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