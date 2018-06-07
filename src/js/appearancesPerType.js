appearancesPerType()
appearancesPerTypeTop10()


async function appearancesPerType() {
    var data = await fetchFromData("AppearancesPerType")

    xaxis = new Array()
    for (i = 0; i < data.length; i++) {
        xaxis.push(data[i].name)
    }

    yaxis = new Array()
    for (i = 0; i < data.length; i++) {
        yaxis.push(data[i].counter)
    }

    orderData(xaxis, yaxis)

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

async function appearancesPerTypeTop10(){
    var data = await fetchFromData("AppearancesPerType")
    var newxaxis = new Array()
    var newyaxis = new Array()

    for(i = 0; i < 10; i++){
        newxaxis.push(xaxis[i])
        newyaxis.push(yaxis[i])
    }

    var canvas = document.querySelector("#appearancesPerTypeTOP10")

    var densityData = {
        label: "appearances per type",
        data: newyaxis
    }

    var barChart = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: newxaxis,
            datasets: [densityData]
        }
    });
}

function fetchFromData(name) {
    return fetch("src/data/" + name + ".json")
        .then(response => response.json());
}

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