showAppearancePerContinentBar()
verticalBar()

/*
you always need to make an async funtion to wait for the result of the fetch
*/
function fetchFromData(name){
    return fetch("data/" + name + ".json")
        .then(response => response.json())
}

async function showAppearancePerContinentBar(){
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

async function verticalBar(){
    var data = await fetchFromData("AppearancesPerContinentPercentage")
    var svgwidth = 500, barpadding = 5
    var barwidth = svgwidth / data.length
    var toppadding = 15
    var maxheight = 300
    var svgheight = getHighestPixelSizeVerticalBar(data, maxheight)

    var svgelem = d3.select(".verticalBar")
        .attr("width", svgwidth)

    var barchart = svgelem.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("y", function(d) {
            return svgheight - calcFraction(maxheight, 100, d.percentage) - toppadding
        })
        .attr("height", function(d) {
            fraction = calcFraction(maxheight, 100, d.percentage)
            if(fraction > svgheight)
                svgheight = fraction
            return fraction
        })
        .attr("width", barwidth - barpadding)
        .attr("transform", function(d, i) {
            var translate = [barwidth * i, 0]
            return "translate(" + translate + ")"
        })
        .attr("style", "fill:rgb(0,0,255)")
}

function calcFraction(maxpx, maxval, elemval){
    return (elemval / maxval) * maxpx
}

function getHighestPixelSizeVerticalBar(data, maxpx){
    var current = 0
    for(i = 0; i < data.length; i++){
        var fraction = calcFraction(maxpx, 100, data[i].percentage)
        if(fraction > current)
            current = fraction
    }

    return current
}