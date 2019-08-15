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
    
    var color = d3.scaleOrdinal(d3.schemePaired);
    
    var pie = d3.pie()
        .sort(null).value(function (d) {
        return d.menus_appeared;
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
        .attr("fill", function (d) { return color(d.data.menus_appeared); });
    
    var label = d3.arc()
        .outerRadius(radius)
        .innerRadius(0);
    
    arc.append("text")
        .attr("transform", function (d) {
            return "translate(" + label.centroid(d) + ")";
        })
        .attr("text-anchor", "middle")
        .text(function (d) { return d.data.name; });
}

 function dish_testing1() {

    let dish_data = []
    d3.csv("https://github.com/ramkbhattarai/MenuItems/blob/master/dist/dishes_data.csv").then((data) => {
        dish_data = data.filter(datum => {
    
            return (parseInt(datum.first_appeared, 10) < 1900);
    
        })
        dish_data.slice(0, 10).forEach(d => {
            d.menus_appeared = +d.menus_appeared;
        })
        drawPieChart(dish_data.slice(0, 10))
        //console.log(dish_data.slice(0, 10))
    })
}

function dish_testing2() {

    let dish_data = []
    d3.csv("https://github.com/ramkbhattarai/MenuItems/blob/master/dist/dishes_data.csv").then((data) => {
        dish_data = data.filter(datum => {

            return (parseInt(datum.first_appeared, 10) > 1900 && parseInt(datum.first_appeared, 10) < 1950);

        })
        dish_data.slice(0, 10).forEach(d => {
            d.menus_appeared = +d.menus_appeared;
        })
        drawPieChart(dish_data.slice(0, 6))
        //console.log(dish_data.slice(0, 10))
    })
}

function dish_testing3() {

    let dish_data = []
    d3.csv("https://github.com/ramkbhattarai/MenuItems/blob/master/dist/dishes_data.csv").then((data) => {
        dish_data = data.filter(datum => {

            return (parseInt(datum.first_appeared, 10) > 1950 && parseInt(datum.first_appeared, 10) < 2000);

        })
        dish_data.slice(0, 10).forEach(d => {
            d.menus_appeared = +d.menus_appeared;
        })
        drawPieChart(dish_data.slice(0, 6))
        //console.log(dish_data.slice(0, 10))
    })
}

function dish_testing4() {

    let dish_data = []
    d3.csv("https://github.com/ramkbhattarai/MenuItems/blob/master/dist/dishes_data.csv").then((data) => {
        dish_data = data.filter(datum => {

            return (parseInt(datum.first_appeared, 10) > 2000);

        })
        dish_data.slice(0, 10).forEach(d => {
            d.menus_appeared = +d.menus_appeared;
        })
        drawPieChart(dish_data.slice(0, 6))
        //console.log(dish_data.slice(0, 10))
    })
}


    document.addEventListener("DOMContentLoaded", () => {
          testing1();
          dish_testing1();
        //drawPieChart(data1)
        
        const typical = document.getElementById("typical");
        typical.onclick = () => {
            testing1();
            dish_testing1();
           // drawPieChart(data1)
        }
        const regular = document.getElementById("regular");
        regular.onclick = () => {
           
            testing2();
            dish_testing2();
           // drawPieChart(data2);
        }
        const special = document.getElementById("special");
        special.onclick = () => {
            testing3();
            dish_testing3();
           // drawPieChart(data3)
        }
        const newari = document.getElementById("newari");
        newari.onclick = () => {
            testing4();
            dish_testing4();
           // drawPieChart(data4)
        }
    })

    
let chart;

const render = data => {
    
    // d3.select(".bar-chart").remove();

    const width = 300;
    const height = 500;
    const margin = {top: 10, right: 10, bottom: 10, left: 150};
    //const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    // 
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.dish_count)])
        .range([0, width]);

        const xAxis = d3.axisBottom(xScale);
    const yScale = d3.scaleBand()
        .domain(data.map(d => d.location))
        .range([0, innerHeight])
        .padding(0.1);
        //console.log(yScale.domain())
     const yAxis = d3.axisLeft(yScale);
    
    let svg = d3.select(".bar-chart");
    
    

    if (chart){
        svg.select('g').remove();
    }

    const g = svg.append("g")
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

    g.append('g').call(yAxis);
    g.append("g").call(xAxis)
        .attr('transform', `translate(0, ${innerHeight})`);

    chart = true;
     g.selectAll("rect").data(data)
        .enter()
        .append("rect")
            .attr("y", d => yScale(d.location))
            .attr("width", d => xScale(d.dish_count))
            .attr("height", yScale.bandwidth());
        

}
   function testing1(){

       let menu_data = []
         d3.csv("https://github.com/ramkbhattarai/MenuItems/blob/master/dist/menu_data.csv").then((data)  =>{
             menu_data =  data.filter(datum => {
                  
                return (parseInt(datum.date, 10) < 1900 && datum.place === "NEW YORK");
       
            })
            menu_data.slice(0, 10).forEach(d => {
                d.dish_count = +d.dish_count;
            })

             render(menu_data.slice(0, 10))
            // console.log(menu_data.slice(0,10)[0].dish_count)
       })
   }

function testing2() {

    let menu_data = []
    d3.csv("https://github.com/ramkbhattarai/MenuItems/blob/master/dist/menu_data.csv").then((data) => {
        menu_data = data.filter(datum => {

            return (parseInt(datum.date, 10) > 1900 && parseInt(datum.date, 10) < 1950  && datum.place === "NEW YORK");

        })
        menu_data.slice(0, 10).forEach(d => {
            d.dish_count = +d.dish_count;
        })
        render(menu_data.slice(0, 10))
        //console.log(menu_data.slice(0,10))
    })
}

function testing3() {

    let menu_data = []
    d3.csv("https://github.com/ramkbhattarai/MenuItems/blob/master/dist/menu_data.csv").then((data) => {
        menu_data = data.filter(datum => {

            return (parseInt(datum.date, 10) > 1950 && parseInt(datum.date, 10) < 1980 ); // not in new york

        })
        menu_data.slice(0, 10).forEach(d => {
            d.dish_count = +d.dish_count;
        })
        render(menu_data.slice(0, 10))
        // console.log(menu_data.slice(0,10))
    })
}

function testing4() {

    let menu_data = []
    d3.csv("https://github.com/ramkbhattarai/MenuItems/blob/master/dist/dishes_data.csv").then((data) => {
        menu_data = data.filter(datum => {

            return (parseInt(datum.date, 10) > 2000 );// not in new york

        })
        menu_data.slice(0, 10).forEach(d => {
            d.dish_count = +d.dish_count;
        })
        render(menu_data.slice(0, 10))
        // console.log(menu_data.slice(0,10))
    })
}

// let dish_data = []
// d3.csv("https://github.com/ramkbhattarai/MenuItems/blob/master/dist/dishes_data.csv").then((data) => {
//     dish_data = data.filter(datum => {
        
//         return parseInt(datum.highest_price, 10) > 20

//     })

//     drawPieChart(dish_data.slice(0, 6))
//     console.log(dish_data.slice(0,2))
// })

// function pie_chart_testing1(data){
//     var width = 450;
//      var   height = 450;
//      var margin = 40;

//      var radius = Math.min(width, height)/2 - margin;

//      var svg = d3.select('.pie_chart')
//                 .append('svg')
//                 .attr('width', width)
//                 .attr('height', height)
//                 .append('g')
//                 .attr('transform', 'translate (' + width / 2 + "," + height / 2 + ")");

//     var color = d3.scaleOrdinal(d3.schemeCategory10);

//     var pie = d3.pie()
//                 .sort(null)
//                 .value(function(d){return d.menus_appeared;})
            
//     var data_ready = pie(d3.entries(data));

//     var arc = d3.arc()
//     .innerRadius(radius * 0.5)
//     .outerRadius(radius * 0.8)

//     var outerArc = d3.arc()
//         .innerRadius(radius * 0.9)
//         .outerRadius(radius * 0.9)

//     svg.selectAll("allSlices")
//     .data(data_ready)
//     .enter()
//     .append('path')
//         .attr('d', arc)
//         .attr('fill', function (d) { return (color(d.data.key)) })
//         .attr("stroke", "white")
//         .style("stroke-width", "2px")
//         .style("opacity", 0.7)

//         svg
//         .selectAll('allPolylines')
//         .data(data_ready)
//         .enter()
//         .append('polyline')
//         .attr("stroke", "black")
//         .style("fill", "none")
//         .attr("stroke-width", 1)
//         .attr('points', function (d) {
//             var posA = arc.centroid(d) 
//             var posB = outerArc.centroid(d) 
//             var posC = outerArc.centroid(d); 
//             var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 
//             posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); 
//             return [posA, posB, posC]
//         })

//         svg
//         .selectAll('allLabels')
//         .data(data_ready)
//         .enter()
//         .append('text')
//         .text(function (d) {return d.data.key })
//         .attr('transform', function (d) {
//             var pos = outerArc.centroid(d);
//             var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
//             pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
//             return 'translate(' + pos + ')';
//         })
//         .style('text-anchor', function (d) {
//             var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
//             return (midangle < Math.PI ? 'start' : 'end')
//         })
// }