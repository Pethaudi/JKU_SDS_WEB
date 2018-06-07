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