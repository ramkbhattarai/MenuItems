
let svgWidth = 500, svgHeight = 300, barPadding = 5, radius = Math.min(svgWidth, svgHeight) / 2 ;

let pieChart;

function drawPieChart(data){
   
    var svg = d3.select('.pie_chart')
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    if (pieChart) {svg.select('g').remove() }
       
         var g = svg.append('g')
            .attr("transform", "translate(" + svgWidth / 2 + "," + svgHeight/2 + ")");

     pieChart = true;
        
    var color = d3.scaleOrdinal(["#98abc5",
        "#8a89a6",
        "#7b6888",
        "#6b486b",
        "#a05d56",
        "#d0743c",
        "#ff8c00",
        "#e34d01",
        "black",
        "#3e7eca",
        "#aa0092",
        "#b32e4f"]);

    var pie = d3.pie()
        .sort(null)
        .value(function (d) { return d.menus_appeared; });

  
    var path = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    var outerArc = d3.arc()
        .innerRadius(radius * 0.9)
        .outerRadius(radius * 0.9);


    var label = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    var arc = g.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc");


    
    arc.append("path")
        .attr("d", path)
        .attr("fill", function (d) { return color(d.data.name); });


    arc.append("text")

        .attr("transform", function (d, i) {
            var pos = outerArc.centroid(d);
            pos[0] = radius * (midAngle(d) < Math.PI ? 1.1 : -1.1);


            var percent = (d.endAngle - d.startAngle) / (2 * Math.PI) * 100
            if (percent < 3) {
                
                pos[1] += i * 15
            }
            return "translate(" + pos + ")";
        })
        .text(function (d) { return d.data.name; })
        .attr("fill", function (d, i) { return color(i); })
        .attr("text-anchor", 'left')
        .attr("dx", function (d) {
            var ac = midAngle(d) < Math.PI ? 0 : -50
            return ac
        })
        .attr("dy", 5)


    function midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }

    var polyline = g.selectAll("polyline")
        .data(pie(data), function (d) {
            return d.data.name;
        })
        .enter()
        .append("polyline")
        .attr("points", function (d, i) {
            var pos = outerArc.centroid(d);
            pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
            var outer = outerArc.centroid(d)
            var percent = (d.endAngle - d.startAngle) / (2 * Math.PI) * 100
            if (percent < 3) {
                outer[1]
                pos[1] += i * 15
            }
            
            return [label.centroid(d), [outer[0], pos[1]], pos];
        })
        .style("fill", "none")
        
        .attr("stroke", function (d, i) { return color(i); })
        .style("stroke-width", "1px");

    

}

 function dish_testing1() {

    let dish_data1 = []
    
     dish_data1 = dish_data.filter(datum => {
    
            return (parseInt(datum.first_appeared, 10) < 1900);
    
        })
       
        drawPieChart(dish_data1.slice(0, 10))
        //console.log(dish_data.slice(0, 10))
    
}

function dish_testing2() {

    let dish_data2 = []
   
    dish_data2 = dish_data.filter(datum => {

            return (parseInt(datum.first_appeared, 10) > 1900 && parseInt(datum.first_appeared, 10) < 1950);

        })
       
        drawPieChart(dish_data2.slice(0, 6))
        //console.log(dish_data.slice(0, 10))
   
}

function dish_testing3() {

    let dish_data3 = []
    
    dish_data3 = dish_data.filter(datum => {

            return (parseInt(datum.first_appeared, 10) > 1950 && parseInt(datum.first_appeared, 10) < 2000);

        })
        
        drawPieChart(dish_data3.slice(0, 6))
        //console.log(dish_data.slice(0, 10))
    
}

function dish_testing4() {

    let dish_data4 = []
   
        dish_data4 = dish_data.filter(datum => {

            return (parseInt(datum.first_appeared, 10) > 2000);

        })
        
        drawPieChart(dish_data4.slice(0, 6))
        //console.log(dish_data.slice(0, 10))
   
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
    const margin = {top: 20, right: 20, bottom: 10, left: 150};
   // const innerWidth = width - margin.left - margin.right;
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

    g.append('g').call(yAxis)
    .select('.domain','.tick line')
    .remove();
    g.append("g").call(xAxis)
        .attr('transform', `translate(0, ${innerHeight})`)
        .append('text')
        .attr('y', 50)
        .attr('x', width/ 2)
        .attr('fill', 'black')
        .attr('font-size', 20)
        .text('Number of Dishes');
        

    chart = true;
     g.selectAll("rect").data(data)
        .enter()
        .append("rect")
            .attr("y", d => yScale(d.location))
            .attr("width", d => xScale(d.dish_count))
            .attr("height", yScale.bandwidth());
     g.append('text')
     .text("Number of Dishes severed in New York Hotels");   

}
   function testing1(){

       let menu_data1 = []
         
       menu_data1 = menu_data.filter(datum => {
                  
                return (parseInt(datum.date, 10) < 1900 && datum.place === "NEW YORK");
       
            })
           

             render(menu_data1.slice(0, 10))
            // console.log(menu_data.slice(0,10)[0].dish_count)
      
   }

function testing2() {

    let menu_data2 = []
   
    menu_data2 = menu_data.filter(datum => {

            return (parseInt(datum.date, 10) > 1900 && parseInt(datum.date, 10) < 1950  && datum.place === "NEW YORK");

        })
       
        render(menu_data2.slice(0, 10))
        //console.log(menu_data.slice(0,10))
   
}

function testing3() {

    let menu_data3 = []
    
        menu_data3 = menu_data.filter(datum => {

            return (parseInt(datum.date, 10) > 1950 && parseInt(datum.date, 10) < 1980 ); // not in new york

        })
       
        render(menu_data3.slice(0, 10))
        // console.log(menu_data.slice(0,10))
   
}

function testing4() {

    let menu_data4 = []
    
    menu_data4 = menu_data.filter(datum => {

            return (parseInt(datum.date, 10) > 2000 );// not in new york

        })
        
        render(menu_data4.slice(0, 10))
        // console.log(menu_data.slice(0,10))
   
}



// testings

