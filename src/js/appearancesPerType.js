import worker from 'worker';

appearancesPerType()

async function appearancesPerType() {
    var data = await fetchFromData("AppearancesPerType")

    var xaxis = new Array()
    for (i = 0; i < data.length; i++) {
        xaxis.push(data[i].name)
    }

    var yaxis = new Array()
    for (i = 0; i < data.length; i++) {
        yaxis.push(data[i].counter)
    }

    var canvas = document.querySelector("#appearancesPerType")

    var densityData = {
        label: 'appearances per types',
        data: yaxis
    };

    var barChart = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: xaxis,
            datasets: [densityData]
        }
    });
}