showAppearancePerContinent()

/*
you always need to make an async funtion to wait for the result of the fetch
*/
function fetchFromData(name){
    return fetch("data/" + name + ".json")
        .then(response => response.json())
}

async function showAppearancePerContinent(){
    let data;
    data = await fetchFromData("AppearancesPerContinent");

    //writing the data into an array
    var arr = new Array();
    for(i = 0; i < data.length; i++){
        tmp = data[i].counter

        if(tmp < 1000){
            arr.push(1)
        } else {
            arr.push((tmp / 1000) * 2)
        }
    }

    d3.select(".appearancesPerContinent") //selecting the div
        .selectAll("div")   //it should take all div (but there are none)
        .data(arr)  //select datasource
            .enter()    //this says something like: "if there are none then create"
            .append("div")  //create divs
            .style("width", function(d) { return d + "px" }) //styling the div
            .attr("class", "appearancesPerContinentBar")
            .text(function(d) { return d }) //setting the text
}

