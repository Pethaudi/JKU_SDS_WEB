showAppearancePerContinent()

function fetchFromData(name){
    return fetch("data/" + name + ".json")
        .then(response => response.json())
}

async function showAppearancePerContinent(){
    let data;
    data = await fetchFromData("AppearancesPerContinent");
    var arr = new Array();
    console.log(data)
    for(i = 0; i < data.length; i++){
        tmp = data[i].counter

        if(tmp < 1000){
            arr.push(1)
        } else {
            arr.push((tmp / 1000) * 2)
        }
    }

    d3.select(".appearancesPerContinent")
        .selectAll("div")
        .data(arr)
            .enter()
            .append("div")
            .style("width", function(d) { return d + "px" })
            .text(function(d) { return d })
}