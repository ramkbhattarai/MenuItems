d3.select('.header')
.text('MenuItems Visualization')
.style('color', "red");

d3.select('.title1')
.text('Menu Items')
.style('color', 'blue');

d3.select('.title2')
    .text('Menu Item Lists')
    .style('color', 'white');


let dataset1 = [80, 100, 56, 120, 180, 30, 140, 120, 160, 200, 300, 500];
let dataset2 = [70, 120, 156, 20, 180, 130, 240, 120, 60, 220, 40, 50];
let dataset3 = [90, 110, 256, 20, 180, 230, 340, 120, 100, 20, 30, 90];
let dataset4 = [60, 160, 356, 210, 180, 430, 40, 120, 170, 210, 90, 200];


let svgWidth = 500, svgHeight = 300, barPadding = 5, radius = Math.min(svgWidth, svgHeight) / 2 ;
let barWidth = (svgWidth / dataset1.length);
let barChart;

var data1 = [
    { "menus": "typical", "percentage": 30.11 },
    { "menus": "special", "percentage": 26.69 },
    { "menus": "regular", "percentage": 13.06 },
    {"menus": "newari", "percentage": 20.00}
];

var data2 = [
    { "menus": "typical", "percentage": 20.11 },
    { "menus": "special", "percentage": 16.69 },
    { "menus": "regular", "percentage": 43.06 },
    { "menus": "newari", "percentage": 20.00 }
];

var data3 = [
    { "menus": "typical", "percentage": 40.11 },
    { "menus": "special", "percentage": 16.69 },
    { "menus": "regular", "percentage": 23.06 },
    { "menus": "newari", "percentage": 10.00 }
];
var data4 = [
    { "menus": "typical", "percentage": 30.11 },
    { "menus": "special", "percentage": 16.69 },
    { "menus": "regular", "percentage": 23.06 },
    { "menus": "newari", "percentage": 20.00 }
];

function drawPieChart(data){

    var svg = d3.select('.pie_chart')
        .attr("width", svgWidth)
        .attr("height", svgHeight);
    
    //Creating group element to hold pie chart    
    var g = svg.append("g")
        .attr("transform", "translate(" + radius + "," + radius + ")");
    
    var color = d3.scaleOrdinal(d3.schemeCategory10);
    
    var pie = d3.pie().value(function (d) {
        return d.percentage;
    });
    
    var path = d3.arc()
        .outerRadius(radius)
        .innerRadius(0);
    
    var arc = g.selectAll("arc")
        .data(pie(data))
        .enter()
        .append("g");
    
    arc.append("path")
        .attr("d", path)
        .attr("fill", function (d) { return color(d.data.percentage); });
    
    var label = d3.arc()
        .outerRadius(radius)
        .innerRadius(0);
    
    arc.append("text")
        .attr("transform", function (d) {
            return "translate(" + label.centroid(d) + ")";
        })
        .attr("text-anchor", "middle")
        .text(function (d) { return d.data.menus + ":" + d.data.percentage + "%"; });
}

function drawChart(dataset) {
    let svg = d3.select('.bar-chart')
        .attr("width", svgWidth)
        .attr("height", svgHeight);
   
    if (barChart !== undefined) {barChart.remove()}
    barChart = svg.selectAll("rect")
        
        .data(dataset) 
        .enter()
        .append("rect")
        .attr("y", function (d) {
            return svgHeight - d
        })
        .attr("height", function (d) {
            return d;
        })
        .attr("width", barWidth - barPadding)
        .attr("transform", function (d, i) {
            let translate = [barWidth * i, 0];
            return "translate(" + translate + ")";
        })
        .attr('fill','black')
        
      ;
    // debugger
}


    document.addEventListener("DOMContentLoaded", () => {
          drawChart(dataset1);
          drawPieChart(data1)
       
        const typical = document.getElementById("typical");
        typical.onclick = () => {
            drawChart(dataset1)
            drawPieChart(data1)
        }
        const regular = document.getElementById("regular");
        regular.onclick = () => {
           
            drawChart(dataset2)
            drawPieChart(data2)
        }
        const special = document.getElementById("special");
        special.onclick = () => {
            drawChart(dataset3)
            drawPieChart(data3)
        }
        const newari = document.getElementById("newari");
        newari.onclick = () => {
            drawChart(dataset4)
            drawPieChart(data4)
        }
    })

// document.addEventListener("DOMContentLoaded", () => {
//     drawChart(dataset1);
//     const typical = document.getElementById("typical");
//     typical.onclick = () => {
//         drawChart(dataset1)
//     }
    
//     const regular = document.getElementById("regular");
//     regular.onclick = () => {
//         drawChart(dataset2)
//     }
//     const special = document.getElementById("special");
//     special.onclick = () => {
//         drawChart(dataset3)
//     }
//     const newari = document.getElementById("newari");
//     newari.onclick = () => {
//         drawChart(dataset4)
//     }
// })