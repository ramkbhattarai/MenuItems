/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


d3.select('.header').text('MenuItems Visualization').style('color', "red");

d3.select('.title1').text('Menu Items').style('color', 'blue');

d3.select('.title2').text('Menu Item Lists').style('color', 'white');

var dataset1 = [80, 100, 56, 120, 180, 30, 140, 120, 160, 200, 300, 500];
var dataset2 = [70, 120, 156, 20, 180, 130, 240, 120, 60, 220, 40, 50];
var dataset3 = [90, 110, 256, 20, 180, 230, 340, 120, 100, 20, 30, 90];
var dataset4 = [60, 160, 356, 210, 180, 430, 40, 120, 170, 210, 90, 200];

var svgWidth = 500,
    svgHeight = 300,
    barPadding = 5,
    radius = Math.min(svgWidth, svgHeight) / 2;
var barWidth = svgWidth / dataset1.length;
var barChart = void 0;

var data1 = [{ "menus": "typical", "percentage": 30.11 }, { "menus": "special", "percentage": 26.69 }, { "menus": "regular", "percentage": 13.06 }, { "menus": "newari", "percentage": 20.00 }];

var data2 = [{ "menus": "typical", "percentage": 20.11 }, { "menus": "special", "percentage": 16.69 }, { "menus": "regular", "percentage": 43.06 }, { "menus": "newari", "percentage": 20.00 }];

var data3 = [{ "menus": "typical", "percentage": 40.11 }, { "menus": "special", "percentage": 16.69 }, { "menus": "regular", "percentage": 23.06 }, { "menus": "newari", "percentage": 10.00 }];
var data4 = [{ "menus": "typical", "percentage": 30.11 }, { "menus": "special", "percentage": 16.69 }, { "menus": "regular", "percentage": 23.06 }, { "menus": "newari", "percentage": 20.00 }];

function drawPieChart(data) {

    var svg = d3.select('.pie_chart').attr("width", svgWidth).attr("height", svgHeight);

    //Creating group element to hold pie chart    
    var g = svg.append("g").attr("transform", "translate(" + radius + "," + radius + ")");

    var color = d3.scaleOrdinal(d3.schemePaired);

    var pie = d3.pie().sort(null).value(function (d) {
        return d.menus_appeared;
    });

    var path = d3.arc().outerRadius(radius).innerRadius(0);

    var arc = g.selectAll("arc").data(pie(data)).enter().append("g");

    arc.append("path").attr("d", path).attr("fill", function (d) {
        return color(d.data.menus_appeared);
    });

    var label = d3.arc().outerRadius(radius).innerRadius(0);

    arc.append("text").attr("transform", function (d) {
        return "translate(" + label.centroid(d) + ")";
    }).attr("text-anchor", "middle").text(function (d) {
        return d.data.name;
    });
}

function dish_testing1() {

    var dish_data = [];
    d3.csv("../dist/dishes_data.csv").then(function (data) {
        dish_data = data.filter(function (datum) {

            return parseInt(datum.first_appeared, 10) < 1900;
        });
        dish_data.slice(0, 10).forEach(function (d) {
            d.menus_appeared = +d.menus_appeared;
        });
        drawPieChart(dish_data.slice(0, 10));
        //console.log(dish_data.slice(0, 10))
    });
}

function dish_testing2() {

    var dish_data = [];
    d3.csv("../dist/dishes_data.csv").then(function (data) {
        dish_data = data.filter(function (datum) {

            return parseInt(datum.first_appeared, 10) > 1900 && parseInt(datum.first_appeared, 10) < 1950;
        });
        dish_data.slice(0, 10).forEach(function (d) {
            d.menus_appeared = +d.menus_appeared;
        });
        drawPieChart(dish_data.slice(0, 6));
        //console.log(dish_data.slice(0, 10))
    });
}

function dish_testing3() {

    var dish_data = [];
    d3.csv("../dist/dishes_data.csv").then(function (data) {
        dish_data = data.filter(function (datum) {

            return parseInt(datum.first_appeared, 10) > 1950 && parseInt(datum.first_appeared, 10) < 2000;
        });
        dish_data.slice(0, 10).forEach(function (d) {
            d.menus_appeared = +d.menus_appeared;
        });
        drawPieChart(dish_data.slice(0, 6));
        //console.log(dish_data.slice(0, 10))
    });
}

function dish_testing4() {

    var dish_data = [];
    d3.csv("../dist/dishes_data.csv").then(function (data) {
        dish_data = data.filter(function (datum) {

            return parseInt(datum.first_appeared, 10) > 2000;
        });
        dish_data.slice(0, 10).forEach(function (d) {
            d.menus_appeared = +d.menus_appeared;
        });
        drawPieChart(dish_data.slice(0, 6));
        //console.log(dish_data.slice(0, 10))
    });
}

document.addEventListener("DOMContentLoaded", function () {
    testing1();
    dish_testing1();
    //drawPieChart(data1)

    var typical = document.getElementById("typical");
    typical.onclick = function () {
        testing1();
        dish_testing1();
        // drawPieChart(data1)
    };
    var regular = document.getElementById("regular");
    regular.onclick = function () {

        testing2();
        dish_testing2();
        // drawPieChart(data2);
    };
    var special = document.getElementById("special");
    special.onclick = function () {
        testing3();
        dish_testing3();
        // drawPieChart(data3)
    };
    var newari = document.getElementById("newari");
    newari.onclick = function () {
        testing4();
        dish_testing4();
        // drawPieChart(data4)
    };
});

var chart = void 0;

var render = function render(data) {

    // d3.select(".bar-chart").remove();

    var width = 300;
    var height = 500;
    var margin = { top: 10, right: 10, bottom: 10, left: 150 };
    //const innerWidth = width - margin.left - margin.right;
    var innerHeight = height - margin.top - margin.bottom;
    // 
    var xScale = d3.scaleLinear().domain([0, d3.max(data, function (d) {
        return d.dish_count;
    })]).range([0, width]);

    var xAxis = d3.axisBottom(xScale);
    var yScale = d3.scaleBand().domain(data.map(function (d) {
        return d.location;
    })).range([0, innerHeight]).padding(0.1);
    //console.log(yScale.domain())
    var yAxis = d3.axisLeft(yScale);

    var svg = d3.select(".bar-chart");

    if (chart) {
        svg.select('g').remove();
    }

    var g = svg.append("g").attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

    g.append('g').call(yAxis);
    g.append("g").call(xAxis).attr('transform', 'translate(0, ' + innerHeight + ')');

    chart = true;
    g.selectAll("rect").data(data).enter().append("rect").attr("y", function (d) {
        return yScale(d.location);
    }).attr("width", function (d) {
        return xScale(d.dish_count);
    }).attr("height", yScale.bandwidth());
};
function testing1() {

    var menu_data = [];
    d3.csv("../dist/menu_data.csv").then(function (data) {
        menu_data = data.filter(function (datum) {

            return parseInt(datum.date, 10) < 1900 && datum.place === "NEW YORK";
        });
        menu_data.slice(0, 10).forEach(function (d) {
            d.dish_count = +d.dish_count;
        });

        render(menu_data.slice(0, 10));
        // console.log(menu_data.slice(0,10)[0].dish_count)
    });
}

function testing2() {

    var menu_data = [];
    d3.csv("../dist/menu_data.csv").then(function (data) {
        menu_data = data.filter(function (datum) {

            return parseInt(datum.date, 10) > 1900 && parseInt(datum.date, 10) < 1950 && datum.place === "NEW YORK";
        });
        menu_data.slice(0, 10).forEach(function (d) {
            d.dish_count = +d.dish_count;
        });
        render(menu_data.slice(0, 10));
        //console.log(menu_data.slice(0,10))
    });
}

function testing3() {

    var menu_data = [];
    d3.csv("../dist/menu_data.csv").then(function (data) {
        menu_data = data.filter(function (datum) {

            return parseInt(datum.date, 10) > 1950 && parseInt(datum.date, 10) < 1980; // not in new york
        });
        menu_data.slice(0, 10).forEach(function (d) {
            d.dish_count = +d.dish_count;
        });
        render(menu_data.slice(0, 10));
        // console.log(menu_data.slice(0,10))
    });
}

function testing4() {

    var menu_data = [];
    d3.csv("../dist/menu_data.csv").then(function (data) {
        menu_data = data.filter(function (datum) {

            return parseInt(datum.date, 10) > 2000; // not in new york
        });
        menu_data.slice(0, 10).forEach(function (d) {
            d.dish_count = +d.dish_count;
        });
        render(menu_data.slice(0, 10));
        // console.log(menu_data.slice(0,10))
    });
}

// let dish_data = []
// d3.csv("../dist/dishes_data.csv").then((data) => {
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiXSwibmFtZXMiOlsiZDMiLCJzZWxlY3QiLCJ0ZXh0Iiwic3R5bGUiLCJkYXRhc2V0MSIsImRhdGFzZXQyIiwiZGF0YXNldDMiLCJkYXRhc2V0NCIsInN2Z1dpZHRoIiwic3ZnSGVpZ2h0IiwiYmFyUGFkZGluZyIsInJhZGl1cyIsIk1hdGgiLCJtaW4iLCJiYXJXaWR0aCIsImxlbmd0aCIsImJhckNoYXJ0IiwiZGF0YTEiLCJkYXRhMiIsImRhdGEzIiwiZGF0YTQiLCJkcmF3UGllQ2hhcnQiLCJkYXRhIiwic3ZnIiwiYXR0ciIsImciLCJhcHBlbmQiLCJjb2xvciIsInNjYWxlT3JkaW5hbCIsInNjaGVtZVBhaXJlZCIsInBpZSIsInNvcnQiLCJ2YWx1ZSIsImQiLCJtZW51c19hcHBlYXJlZCIsInBhdGgiLCJhcmMiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJsYWJlbCIsImNlbnRyb2lkIiwibmFtZSIsImRpc2hfdGVzdGluZzEiLCJkaXNoX2RhdGEiLCJjc3YiLCJ0aGVuIiwiZmlsdGVyIiwicGFyc2VJbnQiLCJkYXR1bSIsImZpcnN0X2FwcGVhcmVkIiwic2xpY2UiLCJmb3JFYWNoIiwiZGlzaF90ZXN0aW5nMiIsImRpc2hfdGVzdGluZzMiLCJkaXNoX3Rlc3Rpbmc0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidGVzdGluZzEiLCJ0eXBpY2FsIiwiZ2V0RWxlbWVudEJ5SWQiLCJvbmNsaWNrIiwicmVndWxhciIsInRlc3RpbmcyIiwic3BlY2lhbCIsInRlc3RpbmczIiwibmV3YXJpIiwidGVzdGluZzQiLCJjaGFydCIsInJlbmRlciIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiaW5uZXJIZWlnaHQiLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsImRvbWFpbiIsIm1heCIsImRpc2hfY291bnQiLCJyYW5nZSIsInhBeGlzIiwiYXhpc0JvdHRvbSIsInlTY2FsZSIsInNjYWxlQmFuZCIsIm1hcCIsImxvY2F0aW9uIiwicGFkZGluZyIsInlBeGlzIiwiYXhpc0xlZnQiLCJyZW1vdmUiLCJjYWxsIiwiYmFuZHdpZHRoIiwibWVudV9kYXRhIiwiZGF0ZSIsInBsYWNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkFBLEdBQUdDLE1BQUgsQ0FBVSxTQUFWLEVBQ0NDLElBREQsQ0FDTSx5QkFETixFQUVDQyxLQUZELENBRU8sT0FGUCxFQUVnQixLQUZoQjs7QUFJQUgsR0FBR0MsTUFBSCxDQUFVLFNBQVYsRUFDQ0MsSUFERCxDQUNNLFlBRE4sRUFFQ0MsS0FGRCxDQUVPLE9BRlAsRUFFZ0IsTUFGaEI7O0FBSUFILEdBQUdDLE1BQUgsQ0FBVSxTQUFWLEVBQ0tDLElBREwsQ0FDVSxpQkFE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QXZCLENBQStCLGFBQUs7QUFDaENwQixjQUFFa0QsVUFBRixHQUFlLENBQUNsRCxFQUFFa0QsVUFBbEI7QUFDSCxTQUZEO0FBR0FiLGVBQU8yQixVQUFVN0MsS0FBVixDQUFnQixDQUFoQixFQUFtQixFQUFuQixDQUFQO0FBQ0E7QUFDSCxLQVhEO0FBWUg7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL2luZGV4LmpzXCIpO1xuIiwiZDMuc2VsZWN0KCcuaGVhZGVyJylcbi50ZXh0KCdNZW51SXRlbXMgVmlzdWFsaXphdGlvbicpXG4uc3R5bGUoJ2NvbG9yJywgXCJyZWRcIik7XG5cbmQzLnNlbGVjdCgnLnRpdGxlMScpXG4udGV4dCgnTWVudSBJdGVtcycpXG4uc3R5bGUoJ2NvbG9yJywgJ2JsdWUnKTtcblxuZDMuc2VsZWN0KCcudGl0bGUyJylcbiAgICAudGV4dCgnTWVudSBJdGVtIExpc3RzJylcbiAgICAuc3R5bGUoJ2NvbG9yJywgJ3doaXRlJyk7XG5cblxubGV0IGRhdGFzZXQxID0gWzgwLCAxMDAsIDU2LCAxMjAsIDE4MCwgMzAsIDE0MCwgMTIwLCAxNjAsIDIwMCwgMzAwLCA1MDBdO1xubGV0IGRhdGFzZXQyID0gWzcwLCAxMjAsIDE1NiwgMjAsIDE4MCwgMTMwLCAyNDAsIDEyMCwgNjAsIDIyMCwgNDAsIDUwXTtcbmxldCBkYXRhc2V0MyA9IFs5MCwgMTEwLCAyNTYsIDIwLCAxODAsIDIzMCwgMzQwLCAxMjAsIDEwMCwgMjAsIDMwLCA5MF07XG5sZXQgZGF0YXNldDQgPSBbNjAsIDE2MCwgMzU2LCAyMTAsIDE4MCwgNDMwLCA0MCwgMTIwLCAxNzAsIDIxMCwgOTAsIDIwMF07XG5cblxubGV0IHN2Z1dpZHRoID0gNTAwLCBzdmdIZWlnaHQgPSAzMDAsIGJhclBhZGRpbmcgPSA1LCByYWRpdXMgPSBNYXRoLm1pbihzdmdXaWR0aCwgc3ZnSGVpZ2h0KSAvIDIgO1xubGV0IGJhcldpZHRoID0gKHN2Z1dpZHRoIC8gZGF0YXNldDEubGVuZ3RoKTtcbmxldCBiYXJDaGFydDtcblxudmFyIGRhdGExID0gW1xuICAgIHsgXCJtZW51c1wiOiBcInR5cGljYWxcIiwgXCJwZXJjZW50YWdlXCI6IDMwLjExIH0sXG4gICAgeyBcIm1lbnVzXCI6IFwic3BlY2lhbFwiLCBcInBlcmNlbnRhZ2VcIjogMjYuNjkgfSxcbiAgICB7IFwibWVudXNcIjogXCJyZWd1bGFyXCIsIFwicGVyY2VudGFnZVwiOiAxMy4wNiB9LFxuICAgIHtcIm1lbnVzXCI6IFwibmV3YXJpXCIsIFwicGVyY2VudGFnZVwiOiAyMC4wMH1cbl07XG5cbnZhciBkYXRhMiA9IFtcbiAgICB7IFwibWVudXNcIjogXCJ0eXBpY2FsXCIsIFwicGVyY2VudGFnZVwiOiAyMC4xMSB9LFxuICAgIHsgXCJtZW51c1wiOiBcInNwZWNpYWxcIiwgXCJwZXJjZW50YWdlXCI6IDE2LjY5IH0sXG4gICAgeyBcIm1lbnVzXCI6IFwicmVndWxhclwiLCBcInBlcmNlbnRhZ2VcIjogNDMuMDYgfSxcbiAgICB7IFwibWVudXNcIjogXCJuZXdhcmlcIiwgXCJwZXJjZW50YWdlXCI6IDIwLjAwIH1cbl07XG5cbnZhciBkYXRhMyA9IFtcbiAgICB7IFwibWVudXNcIjogXCJ0eXBpY2FsXCIsIFwicGVyY2VudGFnZVwiOiA0MC4xMSB9LFxuICAgIHsgXCJtZW51c1wiOiBcInNwZWNpYWxcIiwgXCJwZXJjZW50YWdlXCI6IDE2LjY5IH0sXG4gICAgeyBcIm1lbnVzXCI6IFwicmVndWxhclwiLCBcInBlcmNlbnRhZ2VcIjogMjMuMDYgfSxcbiAgICB7IFwibWVudXNcIjogXCJuZXdhcmlcIiwgXCJwZXJjZW50YWdlXCI6IDEwLjAwIH1cbl07XG52YXIgZGF0YTQgPSBbXG4gICAgeyBcIm1lbnVzXCI6IFwidHlwaWNhbFwiLCBcInBlcmNlbnRhZ2VcIjogMzAuMTEgfSxcbiAgICB7IFwibWVudXNcIjogXCJzcGVjaWFsXCIsIFwicGVyY2VudGFnZVwiOiAxNi42OSB9LFxuICAgIHsgXCJtZW51c1wiOiBcInJlZ3VsYXJcIiwgXCJwZXJjZW50YWdlXCI6IDIzLjA2IH0sXG4gICAgeyBcIm1lbnVzXCI6IFwibmV3YXJpXCIsIFwicGVyY2VudGFnZVwiOiAyMC4wMCB9XG5dO1xuXG5mdW5jdGlvbiBkcmF3UGllQ2hhcnQoZGF0YSl7XG4gICAgXG4gICAgdmFyIHN2ZyA9IGQzLnNlbGVjdCgnLnBpZV9jaGFydCcpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgc3ZnV2lkdGgpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHN2Z0hlaWdodCk7XG4gICAgXG4gICAgLy9DcmVhdGluZyBncm91cCBlbGVtZW50IHRvIGhvbGQgcGllIGNoYXJ0ICAgIFxuICAgIHZhciBnID0gc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyByYWRpdXMgKyBcIixcIiArIHJhZGl1cyArIFwiKVwiKTtcbiAgICBcbiAgICB2YXIgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lUGFpcmVkKTtcbiAgICBcbiAgICB2YXIgcGllID0gZDMucGllKClcbiAgICAgICAgLnNvcnQobnVsbCkudmFsdWUoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQubWVudXNfYXBwZWFyZWQ7XG4gICAgfSk7XG4gICAgXG4gICAgdmFyIHBhdGggPSBkMy5hcmMoKVxuICAgICAgICAub3V0ZXJSYWRpdXMocmFkaXVzKVxuICAgICAgICAuaW5uZXJSYWRpdXMoMCk7XG4gICAgXG4gICAgdmFyIGFyYyA9IGcuc2VsZWN0QWxsKFwiYXJjXCIpXG4gICAgICAgIC5kYXRhKHBpZShkYXRhKSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcImdcIik7XG4gICAgXG4gICAgYXJjLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgLmF0dHIoXCJkXCIsIHBhdGgpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gY29sb3IoZC5kYXRhLm1lbnVzX2FwcGVhcmVkKTsgfSk7XG4gICAgXG4gICAgdmFyIGxhYmVsID0gZDMuYXJjKClcbiAgICAgICAgLm91dGVyUmFkaXVzKHJhZGl1cylcbiAgICAgICAgLmlubmVyUmFkaXVzKDApO1xuICAgIFxuICAgIGFyYy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBsYWJlbC5jZW50cm9pZChkKSArIFwiKVwiO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmRhdGEubmFtZTsgfSk7XG59XG5cbiBmdW5jdGlvbiBkaXNoX3Rlc3RpbmcxKCkge1xuXG4gICAgbGV0IGRpc2hfZGF0YSA9IFtdXG4gICAgZDMuY3N2KFwiLi4vZGlzdC9kaXNoZXNfZGF0YS5jc3ZcIikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkaXNoX2RhdGEgPSBkYXRhLmZpbHRlcihkYXR1bSA9PiB7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gKHBhcnNlSW50KGRhdHVtLmZpcnN0X2FwcGVhcmVkLCAxMCkgPCAxOTAwKTtcbiAgICBcbiAgICAgICAgfSlcbiAgICAgICAgZGlzaF9kYXRhLnNsaWNlKDAsIDEwKS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgZC5tZW51c19hcHBlYXJlZCA9ICtkLm1lbnVzX2FwcGVhcmVkO1xuICAgICAgICB9KVxuICAgICAgICBkcmF3UGllQ2hhcnQoZGlzaF9kYXRhLnNsaWNlKDAsIDEwKSlcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkaXNoX2RhdGEuc2xpY2UoMCwgMTApKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRpc2hfdGVzdGluZzIoKSB7XG5cbiAgICBsZXQgZGlzaF9kYXRhID0gW11cbiAgICBkMy5jc3YoXCIuLi9kaXN0L2Rpc2hlc19kYXRhLmNzdlwiKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRpc2hfZGF0YSA9IGRhdGEuZmlsdGVyKGRhdHVtID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIChwYXJzZUludChkYXR1bS5maXJzdF9hcHBlYXJlZCwgMTApID4gMTkwMCAmJiBwYXJzZUludChkYXR1bS5maXJzdF9hcHBlYXJlZCwgMTApIDwgMTk1MCk7XG5cbiAgICAgICAgfSlcbiAgICAgICAgZGlzaF9kYXRhLnNsaWNlKDAsIDEwKS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgZC5tZW51c19hcHBlYXJlZCA9ICtkLm1lbnVzX2FwcGVhcmVkO1xuICAgICAgICB9KVxuICAgICAgICBkcmF3UGllQ2hhcnQoZGlzaF9kYXRhLnNsaWNlKDAsIDYpKVxuICAgICAgICAvL2NvbnNvbGUubG9nKGRpc2hfZGF0YS5zbGljZSgwLCAxMCkpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZGlzaF90ZXN0aW5nMygpIHtcblxuICAgIGxldCBkaXNoX2RhdGEgPSBbXVxuICAgIGQzLmNzdihcIi4uL2Rpc3QvZGlzaGVzX2RhdGEuY3N2XCIpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZGlzaF9kYXRhID0gZGF0YS5maWx0ZXIoZGF0dW0gPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gKHBhcnNlSW50KGRhdHVtLmZpcnN0X2FwcGVhcmVkLCAxMCkgPiAxOTUwICYmIHBhcnNlSW50KGRhdHVtLmZpcnN0X2FwcGVhcmVkLCAxMCkgPCAyMDAwKTtcblxuICAgICAgICB9KVxuICAgICAgICBkaXNoX2RhdGEuc2xpY2UoMCwgMTApLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICBkLm1lbnVzX2FwcGVhcmVkID0gK2QubWVudXNfYXBwZWFyZWQ7XG4gICAgICAgIH0pXG4gICAgICAgIGRyYXdQaWVDaGFydChkaXNoX2RhdGEuc2xpY2UoMCwgNikpXG4gICAgICAgIC8vY29uc29sZS5sb2coZGlzaF9kYXRhLnNsaWNlKDAsIDEwKSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkaXNoX3Rlc3Rpbmc0KCkge1xuXG4gICAgbGV0IGRpc2hfZGF0YSA9IFtdXG4gICAgZDMuY3N2KFwiLi4vZGlzdC9kaXNoZXNfZGF0YS5jc3ZcIikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkaXNoX2RhdGEgPSBkYXRhLmZpbHRlcihkYXR1bSA9PiB7XG5cbiAgICAgICAgICAgIHJldHVybiAocGFyc2VJbnQoZGF0dW0uZmlyc3RfYXBwZWFyZWQsIDEwKSA+IDIwMDApO1xuXG4gICAgICAgIH0pXG4gICAgICAgIGRpc2hfZGF0YS5zbGljZSgwLCAxMCkuZm9yRWFjaChkID0+IHtcbiAgICAgICAgICAgIGQubWVudXNfYXBwZWFyZWQgPSArZC5tZW51c19hcHBlYXJlZDtcbiAgICAgICAgfSlcbiAgICAgICAgZHJhd1BpZUNoYXJ0KGRpc2hfZGF0YS5zbGljZSgwLCA2KSlcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkaXNoX2RhdGEuc2xpY2UoMCwgMTApKVxuICAgIH0pXG59XG5cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgICB0ZXN0aW5nMSgpO1xuICAgICAgICAgIGRpc2hfdGVzdGluZzEoKTtcbiAgICAgICAgLy9kcmF3UGllQ2hhcnQoZGF0YTEpXG4gICAgICAgIFxuICAgICAgICBjb25zdCB0eXBpY2FsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eXBpY2FsXCIpO1xuICAgICAgICB0eXBpY2FsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0ZXN0aW5nMSgpO1xuICAgICAgICAgICAgZGlzaF90ZXN0aW5nMSgpO1xuICAgICAgICAgICAvLyBkcmF3UGllQ2hhcnQoZGF0YTEpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVndWxhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVndWxhclwiKTtcbiAgICAgICAgcmVndWxhci5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICBcbiAgICAgICAgICAgIHRlc3RpbmcyKCk7XG4gICAgICAgICAgICBkaXNoX3Rlc3RpbmcyKCk7XG4gICAgICAgICAgIC8vIGRyYXdQaWVDaGFydChkYXRhMik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3BlY2lhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BlY2lhbFwiKTtcbiAgICAgICAgc3BlY2lhbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGVzdGluZzMoKTtcbiAgICAgICAgICAgIGRpc2hfdGVzdGluZzMoKTtcbiAgICAgICAgICAgLy8gZHJhd1BpZUNoYXJ0KGRhdGEzKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld2FyaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3YXJpXCIpO1xuICAgICAgICBuZXdhcmkub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRlc3Rpbmc0KCk7XG4gICAgICAgICAgICBkaXNoX3Rlc3Rpbmc0KCk7XG4gICAgICAgICAgIC8vIGRyYXdQaWVDaGFydChkYXRhNClcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBcbmxldCBjaGFydDtcblxuY29uc3QgcmVuZGVyID0gZGF0YSA9PiB7XG4gICAgXG4gICAgLy8gZDMuc2VsZWN0KFwiLmJhci1jaGFydFwiKS5yZW1vdmUoKTtcblxuICAgIGNvbnN0IHdpZHRoID0gMzAwO1xuICAgIGNvbnN0IGhlaWdodCA9IDUwMDtcbiAgICBjb25zdCBtYXJnaW4gPSB7dG9wOiAxMCwgcmlnaHQ6IDEwLCBib3R0b206IDEwLCBsZWZ0OiAxNTB9O1xuICAgIC8vY29uc3QgaW5uZXJXaWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgY29uc3QgaW5uZXJIZWlnaHQgPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcbiAgICAvLyBcbiAgICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5kb21haW4oWzAsIGQzLm1heChkYXRhLCBkID0+IGQuZGlzaF9jb3VudCldKVxuICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSk7XG5cbiAgICAgICAgY29uc3QgeEF4aXMgPSBkMy5heGlzQm90dG9tKHhTY2FsZSk7XG4gICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVCYW5kKClcbiAgICAgICAgLmRvbWFpbihkYXRhLm1hcChkID0+IGQubG9jYXRpb24pKVxuICAgICAgICAucmFuZ2UoWzAsIGlubmVySGVpZ2h0XSlcbiAgICAgICAgLnBhZGRpbmcoMC4xKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh5U2NhbGUuZG9tYWluKCkpXG4gICAgIGNvbnN0IHlBeGlzID0gZDMuYXhpc0xlZnQoeVNjYWxlKTtcbiAgICBcbiAgICBsZXQgc3ZnID0gZDMuc2VsZWN0KFwiLmJhci1jaGFydFwiKTtcbiAgICBcbiAgICBcblxuICAgIGlmIChjaGFydCl7XG4gICAgICAgIHN2Zy5zZWxlY3QoJ2cnKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBnID0gc3ZnLmFwcGVuZChcImdcIilcbiAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHttYXJnaW4udG9wfSlgKTtcblxuICAgIGcuYXBwZW5kKCdnJykuY2FsbCh5QXhpcyk7XG4gICAgZy5hcHBlbmQoXCJnXCIpLmNhbGwoeEF4aXMpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsICR7aW5uZXJIZWlnaHR9KWApO1xuXG4gICAgY2hhcnQgPSB0cnVlO1xuICAgICBnLnNlbGVjdEFsbChcInJlY3RcIikuZGF0YShkYXRhKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGQgPT4geVNjYWxlKGQubG9jYXRpb24pKVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBkID0+IHhTY2FsZShkLmRpc2hfY291bnQpKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgeVNjYWxlLmJhbmR3aWR0aCgpKTtcbiAgICAgICAgXG5cbn1cbiAgIGZ1bmN0aW9uIHRlc3RpbmcxKCl7XG5cbiAgICAgICBsZXQgbWVudV9kYXRhID0gW11cbiAgICAgICAgIGQzLmNzdihcIi4uL2Rpc3QvbWVudV9kYXRhLmNzdlwiKS50aGVuKChkYXRhKSAgPT57XG4gICAgICAgICAgICAgbWVudV9kYXRhID0gIGRhdGEuZmlsdGVyKGRhdHVtID0+IHtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VJbnQoZGF0dW0uZGF0ZSwgMTApIDwgMTkwMCAmJiBkYXR1bS5wbGFjZSA9PT0gXCJORVcgWU9SS1wiKTtcbiAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBtZW51X2RhdGEuc2xpY2UoMCwgMTApLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICAgICAgZC5kaXNoX2NvdW50ID0gK2QuZGlzaF9jb3VudDtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICByZW5kZXIobWVudV9kYXRhLnNsaWNlKDAsIDEwKSlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1lbnVfZGF0YS5zbGljZSgwLDEwKVswXS5kaXNoX2NvdW50KVxuICAgICAgIH0pXG4gICB9XG5cbmZ1bmN0aW9uIHRlc3RpbmcyKCkge1xuXG4gICAgbGV0IG1lbnVfZGF0YSA9IFtdXG4gICAgZDMuY3N2KFwiLi4vZGlzdC9tZW51X2RhdGEuY3N2XCIpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgbWVudV9kYXRhID0gZGF0YS5maWx0ZXIoZGF0dW0gPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gKHBhcnNlSW50KGRhdHVtLmRhdGUsIDEwKSA+IDE5MDAgJiYgcGFyc2VJbnQoZGF0dW0uZGF0ZSwgMTApIDwgMTk1MCAgJiYgZGF0dW0ucGxhY2UgPT09IFwiTkVXIFlPUktcIik7XG5cbiAgICAgICAgfSlcbiAgICAgICAgbWVudV9kYXRhLnNsaWNlKDAsIDEwKS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgZC5kaXNoX2NvdW50ID0gK2QuZGlzaF9jb3VudDtcbiAgICAgICAgfSlcbiAgICAgICAgcmVuZGVyKG1lbnVfZGF0YS5zbGljZSgwLCAxMCkpXG4gICAgICAgIC8vY29uc29sZS5sb2cobWVudV9kYXRhLnNsaWNlKDAsMTApKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHRlc3RpbmczKCkge1xuXG4gICAgbGV0IG1lbnVfZGF0YSA9IFtdXG4gICAgZDMuY3N2KFwiLi4vZGlzdC9tZW51X2RhdGEuY3N2XCIpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgbWVudV9kYXRhID0gZGF0YS5maWx0ZXIoZGF0dW0gPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gKHBhcnNlSW50KGRhdHVtLmRhdGUsIDEwKSA+IDE5NTAgJiYgcGFyc2VJbnQoZGF0dW0uZGF0ZSwgMTApIDwgMTk4MCApOyAvLyBub3QgaW4gbmV3IHlvcmtcblxuICAgICAgICB9KVxuICAgICAgICBtZW51X2RhdGEuc2xpY2UoMCwgMTApLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICBkLmRpc2hfY291bnQgPSArZC5kaXNoX2NvdW50O1xuICAgICAgICB9KVxuICAgICAgICByZW5kZXIobWVudV9kYXRhLnNsaWNlKDAsIDEwKSlcbiAgICAgICAgLy8gY29uc29sZS5sb2cobWVudV9kYXRhLnNsaWNlKDAsMTApKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHRlc3Rpbmc0KCkge1xuXG4gICAgbGV0IG1lbnVfZGF0YSA9IFtdXG4gICAgZDMuY3N2KFwiLi4vZGlzdC9tZW51X2RhdGEuY3N2XCIpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgbWVudV9kYXRhID0gZGF0YS5maWx0ZXIoZGF0dW0gPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gKHBhcnNlSW50KGRhdHVtLmRhdGUsIDEwKSA+IDIwMDAgKTsvLyBub3QgaW4gbmV3IHlvcmtcblxuICAgICAgICB9KVxuICAgICAgICBtZW51X2RhdGEuc2xpY2UoMCwgMTApLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICBkLmRpc2hfY291bnQgPSArZC5kaXNoX2NvdW50O1xuICAgICAgICB9KVxuICAgICAgICByZW5kZXIobWVudV9kYXRhLnNsaWNlKDAsIDEwKSlcbiAgICAgICAgLy8gY29uc29sZS5sb2cobWVudV9kYXRhLnNsaWNlKDAsMTApKVxuICAgIH0pXG59XG5cbi8vIGxldCBkaXNoX2RhdGEgPSBbXVxuLy8gZDMuY3N2KFwiLi4vZGlzdC9kaXNoZXNfZGF0YS5jc3ZcIikudGhlbigoZGF0YSkgPT4ge1xuLy8gICAgIGRpc2hfZGF0YSA9IGRhdGEuZmlsdGVyKGRhdHVtID0+IHtcbiAgICAgICAgXG4vLyAgICAgICAgIHJldHVybiBwYXJzZUludChkYXR1bS5oaWdoZXN0X3ByaWNlLCAxMCkgPiAyMFxuXG4vLyAgICAgfSlcblxuLy8gICAgIGRyYXdQaWVDaGFydChkaXNoX2RhdGEuc2xpY2UoMCwgNikpXG4vLyAgICAgY29uc29sZS5sb2coZGlzaF9kYXRhLnNsaWNlKDAsMikpXG4vLyB9KVxuXG4vLyBmdW5jdGlvbiBwaWVfY2hhcnRfdGVzdGluZzEoZGF0YSl7XG4vLyAgICAgdmFyIHdpZHRoID0gNDUwO1xuLy8gICAgICB2YXIgICBoZWlnaHQgPSA0NTA7XG4vLyAgICAgIHZhciBtYXJnaW4gPSA0MDtcblxuLy8gICAgICB2YXIgcmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkvMiAtIG1hcmdpbjtcblxuLy8gICAgICB2YXIgc3ZnID0gZDMuc2VsZWN0KCcucGllX2NoYXJ0Jylcbi8vICAgICAgICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxuLy8gICAgICAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuLy8gICAgICAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4vLyAgICAgICAgICAgICAgICAgLmFwcGVuZCgnZycpXG4vLyAgICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUgKCcgKyB3aWR0aCAvIDIgKyBcIixcIiArIGhlaWdodCAvIDIgKyBcIilcIik7XG5cbi8vICAgICB2YXIgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XG5cbi8vICAgICB2YXIgcGllID0gZDMucGllKClcbi8vICAgICAgICAgICAgICAgICAuc29ydChudWxsKVxuLy8gICAgICAgICAgICAgICAgIC52YWx1ZShmdW5jdGlvbihkKXtyZXR1cm4gZC5tZW51c19hcHBlYXJlZDt9KVxuICAgICAgICAgICAgXG4vLyAgICAgdmFyIGRhdGFfcmVhZHkgPSBwaWUoZDMuZW50cmllcyhkYXRhKSk7XG5cbi8vICAgICB2YXIgYXJjID0gZDMuYXJjKClcbi8vICAgICAuaW5uZXJSYWRpdXMocmFkaXVzICogMC41KVxuLy8gICAgIC5vdXRlclJhZGl1cyhyYWRpdXMgKiAwLjgpXG5cbi8vICAgICB2YXIgb3V0ZXJBcmMgPSBkMy5hcmMoKVxuLy8gICAgICAgICAuaW5uZXJSYWRpdXMocmFkaXVzICogMC45KVxuLy8gICAgICAgICAub3V0ZXJSYWRpdXMocmFkaXVzICogMC45KVxuXG4vLyAgICAgc3ZnLnNlbGVjdEFsbChcImFsbFNsaWNlc1wiKVxuLy8gICAgIC5kYXRhKGRhdGFfcmVhZHkpXG4vLyAgICAgLmVudGVyKClcbi8vICAgICAuYXBwZW5kKCdwYXRoJylcbi8vICAgICAgICAgLmF0dHIoJ2QnLCBhcmMpXG4vLyAgICAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIChjb2xvcihkLmRhdGEua2V5KSkgfSlcbi8vICAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCJ3aGl0ZVwiKVxuLy8gICAgICAgICAuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgXCIycHhcIilcbi8vICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwLjcpXG5cbi8vICAgICAgICAgc3ZnXG4vLyAgICAgICAgIC5zZWxlY3RBbGwoJ2FsbFBvbHlsaW5lcycpXG4vLyAgICAgICAgIC5kYXRhKGRhdGFfcmVhZHkpXG4vLyAgICAgICAgIC5lbnRlcigpXG4vLyAgICAgICAgIC5hcHBlbmQoJ3BvbHlsaW5lJylcbi8vICAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCJibGFja1wiKVxuLy8gICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwibm9uZVwiKVxuLy8gICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAxKVxuLy8gICAgICAgICAuYXR0cigncG9pbnRzJywgZnVuY3Rpb24gKGQpIHtcbi8vICAgICAgICAgICAgIHZhciBwb3NBID0gYXJjLmNlbnRyb2lkKGQpIFxuLy8gICAgICAgICAgICAgdmFyIHBvc0IgPSBvdXRlckFyYy5jZW50cm9pZChkKSBcbi8vICAgICAgICAgICAgIHZhciBwb3NDID0gb3V0ZXJBcmMuY2VudHJvaWQoZCk7IFxuLy8gICAgICAgICAgICAgdmFyIG1pZGFuZ2xlID0gZC5zdGFydEFuZ2xlICsgKGQuZW5kQW5nbGUgLSBkLnN0YXJ0QW5nbGUpIC8gMiBcbi8vICAgICAgICAgICAgIHBvc0NbMF0gPSByYWRpdXMgKiAwLjk1ICogKG1pZGFuZ2xlIDwgTWF0aC5QSSA/IDEgOiAtMSk7IFxuLy8gICAgICAgICAgICAgcmV0dXJuIFtwb3NBLCBwb3NCLCBwb3NDXVxuLy8gICAgICAgICB9KVxuXG4vLyAgICAgICAgIHN2Z1xuLy8gICAgICAgICAuc2VsZWN0QWxsKCdhbGxMYWJlbHMnKVxuLy8gICAgICAgICAuZGF0YShkYXRhX3JlYWR5KVxuLy8gICAgICAgICAuZW50ZXIoKVxuLy8gICAgICAgICAuYXBwZW5kKCd0ZXh0Jylcbi8vICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtyZXR1cm4gZC5kYXRhLmtleSB9KVxuLy8gICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQpIHtcbi8vICAgICAgICAgICAgIHZhciBwb3MgPSBvdXRlckFyYy5jZW50cm9pZChkKTtcbi8vICAgICAgICAgICAgIHZhciBtaWRhbmdsZSA9IGQuc3RhcnRBbmdsZSArIChkLmVuZEFuZ2xlIC0gZC5zdGFydEFuZ2xlKSAvIDJcbi8vICAgICAgICAgICAgIHBvc1swXSA9IHJhZGl1cyAqIDAuOTkgKiAobWlkYW5nbGUgPCBNYXRoLlBJID8gMSA6IC0xKTtcbi8vICAgICAgICAgICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyBwb3MgKyAnKSc7XG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCBmdW5jdGlvbiAoZCkge1xuLy8gICAgICAgICAgICAgdmFyIG1pZGFuZ2xlID0gZC5zdGFydEFuZ2xlICsgKGQuZW5kQW5nbGUgLSBkLnN0YXJ0QW5nbGUpIC8gMlxuLy8gICAgICAgICAgICAgcmV0dXJuIChtaWRhbmdsZSA8IE1hdGguUEkgPyAnc3RhcnQnIDogJ2VuZCcpXG4vLyAgICAgICAgIH0pXG4vLyB9Il0sInNvdXJjZVJvb3QiOiIifQ==