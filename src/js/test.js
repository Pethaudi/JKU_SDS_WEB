/*
you always need to make an async funtion to wait for the result of the fetch
*/

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

//for bars3
function orderDataAfterX(xaxis, yaxis){
    for(i = 0; i < xaxis.length; i++){
        for(j = 0; j < xaxis.length; j++){
            if(xaxis[j] < xaxis[i]){
                tmp = xaxis[i]
                xaxis[i] = xaxis[j]
                xaxis[j] = tmp
                tmp = yaxis[i]
                yaxis[i] = yaxis[j]
                yaxis[j] = tmp
            }
        }
    }
}

//loads and parses the data for a bar chart
async function parseNameCounterDataForBars(name, xaxis, yaxis){
    var data = await fetchFromData(name)

    for(i = 0; i < data.length; i++){
        xaxis.push(data[i].name)
        yaxis.push(data[i].counter)
    }
}