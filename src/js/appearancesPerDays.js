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
        label: 'appearances per day',
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

function fetchFromData(name) {
    return fetch("src/data/" + name + ".json")
        .then(response => response.json());
}

//for bars3
function orderData(xaxis, yaxis){
    for(i = 0; i < yaxis.length; i++){
        for(j = 0; j < yaxis.length; j++){
            if(yaxis[j] < yaxis[i]){
                tmp = yaxis[i]
                yaxis[i] = yaxis[j]
                yaxis[j] = tmp
                tmp = xaxis[i]
                xaxis[i] = xaxis[j]
                xaxis[j] = tmp
            }
        }
    }
}

async function parseNameCounterDataForBars(name, xaxis, yaxis){
    var data = await fetchFromData(name)

    for(i = 0; i < data.length; i++){
        xaxis.push(data[i].name)
        yaxis.push(data[i].counter)
    }
}