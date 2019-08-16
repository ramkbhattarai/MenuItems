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
    var margin = { top: 10, right: 20, bottom: 10, left: 150 };
    // const innerWidth = width - margin.left - margin.right;
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

    g.append('g').call(yAxis).select('.domain', '.tick line').remove();
    g.append("g").call(xAxis).attr('transform', 'translate(0, ' + innerHeight + ')').append('text').attr('y', 50).attr('x', width / 2).attr('fill', 'black').attr('font-size', 20).text('Number of Dishes');

    chart = true;
    g.selectAll("rect").data(data).enter().append("rect").attr("y", function (d) {
        return yScale(d.location);
    }).attr("width", function (d) {
        return xScale(d.dish_count);
    }).attr("height", yScale.bandwidth());
    g.append('text').text("Number of Dishes severed in New York Hotels");
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

// testings

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiXSwibmFtZXMiOlsiZDMiLCJzZWxlY3QiLCJ0ZXh0Iiwic3R5bGUiLCJkYXRhc2V0MSIsImRhdGFzZXQyIiwiZGF0YXNldDMiLCJkYXRhc2V0NCIsInN2Z1dpZHRoIiwic3ZnSGVpZ2h0IiwiYmFyUGFkZGluZyIsInJhZGl1cyIsIk1hdGgiLCJtaW4iLCJiYXJXaWR0aCIsImxlbmd0aCIsImJhckNoYXJ0IiwiZGF0YTEiLCJkYXRhMiIsImRhdGEzIiwiZGF0YTQiLCJkcmF3UGllQ2hhcnQiLCJkYXRhIiwic3ZnIiwiYXR0ciIsImciLCJhcHBlbmQiLCJjb2xvciIsInNjYWxlT3JkaW5hbCIsInNjaGVtZVBhaXJlZCIsInBpZSIsInNvcnQiLCJ2YWx1ZSIsImQiLCJtZW51c19hcHBlYXJlZCIsInBhdGgiLCJhcmMiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJsYWJlbCIsImNlbnRyb2lkIiwibmFtZSIsImRpc2hfdGVzdGluZzEiLCJkaXNoX2RhdGEiLCJjc3YiLCJ0aGVuIiwiZmlsdGVyIiwicGFyc2VJbnQiLCJkYXR1bSIsImZpcnN0X2FwcGVhcmVkIiwic2xpY2UiLCJmb3JFYWNoIiwiZGlzaF90ZXN0aW5nMiIsImRpc2hfdGVzdGluZzMiLCJkaXNoX3Rlc3Rpbmc0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidGVzdGluZzEiLCJ0eXBpY2FsIiwiZ2V0RWxlbWVudEJ5SWQiLCJvbmNsaWNrIiwicmVndWxhciIsInRlc3RpbmcyIiwic3BlY2lhbCIsInRlc3RpbmczIiwibmV3YXJpIiwidGVzdGluZzQiLCJjaGFydCIsInJlbmRlciIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiaW5uZXJIZWlnaHQiLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsImRvbWFpbiIsIm1heCIsImRpc2hfY291bnQiLCJyYW5nZSIsInhBeGlzIiwiYXhpc0JvdHRvbSIsInlTY2FsZSIsInNjYWxlQmFuZCIsIm1hcCIsImxvY2F0aW9uIiwicGFkZGluZyIsInlBeGlzIiwiYXhpc0xlZnQiLCJyZW1vdmUiLCJjYWxsIiwiYmFuZHdpZHRoIiwibWVudV9kYXRhIiwiZGF0ZSIsInBsYWNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkFBLEdBQUdDLE1BQUgsQ0FBVSxTQUFWLEVBQ0NDLElBREQsQ0FDTSx5QkFETixFQUVDQyxLQUZELENBRU8sT0FGUCxFQUVnQixLQUZoQjs7QUFJQUgsR0FBR0MsTUFBSCxDQUFVLFNBQVYsRUFDQ0MsSUFERCxDQUNNLFlBRE4sRUFFQ0MsS0FGRCxDQUVPLE9BRlAsRUFFZ0IsTUFGaEI7O0FBSUFILEdBQUdDLE1BQUgsQ0FBVSxTQUFWLEVBQ0tDLElBREwsQ0FDVSxpQkFE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U2dCLFFBQVQsR0FBb0I7O0FBRWhCLFFBQUk2QixZQUFZLEVBQWhCO0FBQ0FqRyxPQUFHOEMsR0FBSCxDQUFPLHVCQUFQLEVBQWdDQyxJQUFoQyxDQUFxQyxVQUFDekIsSUFBRCxFQUFVO0FBQzNDMkUsb0JBQVkzRSxLQUFLMEIsTUFBTCxDQUFZLGlCQUFTOztBQUU3QixtQkFBUUMsU0FBU0MsTUFBTWdELElBQWYsRUFBcUIsRUFBckIsSUFBMkIsSUFBbkMsQ0FGNkIsQ0FFYTtBQUU3QyxTQUpXLENBQVo7QUFLQUQsa0JBQVU3QyxLQUFWLENBQWdCLENBQWhCLEVBQW1CLEVBQW5CLEVBQXVCQyxPQUF2QixDQUErQixhQUFLO0FBQ2hDcEIsY0FBRWtELFVBQUYsR0FBZSxDQUFDbEQsRUFBRWtELFVBQWxCO0FBQ0gsU0FGRDtBQUdBYixlQUFPMkIsVUFBVTdDLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUIsRUFBbkIsQ0FBUDtBQUNBO0FBQ0gsS0FYRDtBQVlIOztBQUlELFciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9pbmRleC5qc1wiKTtcbiIsImQzLnNlbGVjdCgnLmhlYWRlcicpXG4udGV4dCgnTWVudUl0ZW1zIFZpc3VhbGl6YXRpb24nKVxuLnN0eWxlKCdjb2xvcicsIFwicmVkXCIpO1xuXG5kMy5zZWxlY3QoJy50aXRsZTEnKVxuLnRleHQoJ01lbnUgSXRlbXMnKVxuLnN0eWxlKCdjb2xvcicsICdibHVlJyk7XG5cbmQzLnNlbGVjdCgnLnRpdGxlMicpXG4gICAgLnRleHQoJ01lbnUgSXRlbSBMaXN0cycpXG4gICAgLnN0eWxlKCdjb2xvcicsICd3aGl0ZScpO1xuXG5cbmxldCBkYXRhc2V0MSA9IFs4MCwgMTAwLCA1NiwgMTIwLCAxODAsIDMwLCAxNDAsIDEyMCwgMTYwLCAyMDAsIDMwMCwgNTAwXTtcbmxldCBkYXRhc2V0MiA9IFs3MCwgMTIwLCAxNTYsIDIwLCAxODAsIDEzMCwgMjQwLCAxMjAsIDYwLCAyMjAsIDQwLCA1MF07XG5sZXQgZGF0YXNldDMgPSBbOTAsIDExMCwgMjU2LCAyMCwgMTgwLCAyMzAsIDM0MCwgMTIwLCAxMDAsIDIwLCAzMCwgOTBdO1xubGV0IGRhdGFzZXQ0ID0gWzYwLCAxNjAsIDM1NiwgMjEwLCAxODAsIDQzMCwgNDAsIDEyMCwgMTcwLCAyMTAsIDkwLCAyMDBdO1xuXG5cbmxldCBzdmdXaWR0aCA9IDUwMCwgc3ZnSGVpZ2h0ID0gMzAwLCBiYXJQYWRkaW5nID0gNSwgcmFkaXVzID0gTWF0aC5taW4oc3ZnV2lkdGgsIHN2Z0hlaWdodCkgLyAyIDtcbmxldCBiYXJXaWR0aCA9IChzdmdXaWR0aCAvIGRhdGFzZXQxLmxlbmd0aCk7XG5sZXQgYmFyQ2hhcnQ7XG5cbnZhciBkYXRhMSA9IFtcbiAgICB7IFwibWVudXNcIjogXCJ0eXBpY2FsXCIsIFwicGVyY2VudGFnZVwiOiAzMC4xMSB9LFxuICAgIHsgXCJtZW51c1wiOiBcInNwZWNpYWxcIiwgXCJwZXJjZW50YWdlXCI6IDI2LjY5IH0sXG4gICAgeyBcIm1lbnVzXCI6IFwicmVndWxhclwiLCBcInBlcmNlbnRhZ2VcIjogMTMuMDYgfSxcbiAgICB7XCJtZW51c1wiOiBcIm5ld2FyaVwiLCBcInBlcmNlbnRhZ2VcIjogMjAuMDB9XG5dO1xuXG52YXIgZGF0YTIgPSBbXG4gICAgeyBcIm1lbnVzXCI6IFwidHlwaWNhbFwiLCBcInBlcmNlbnRhZ2VcIjogMjAuMTEgfSxcbiAgICB7IFwibWVudXNcIjogXCJzcGVjaWFsXCIsIFwicGVyY2VudGFnZVwiOiAxNi42OSB9LFxuICAgIHsgXCJtZW51c1wiOiBcInJlZ3VsYXJcIiwgXCJwZXJjZW50YWdlXCI6IDQzLjA2IH0sXG4gICAgeyBcIm1lbnVzXCI6IFwibmV3YXJpXCIsIFwicGVyY2VudGFnZVwiOiAyMC4wMCB9XG5dO1xuXG52YXIgZGF0YTMgPSBbXG4gICAgeyBcIm1lbnVzXCI6IFwidHlwaWNhbFwiLCBcInBlcmNlbnRhZ2VcIjogNDAuMTEgfSxcbiAgICB7IFwibWVudXNcIjogXCJzcGVjaWFsXCIsIFwicGVyY2VudGFnZVwiOiAxNi42OSB9LFxuICAgIHsgXCJtZW51c1wiOiBcInJlZ3VsYXJcIiwgXCJwZXJjZW50YWdlXCI6IDIzLjA2IH0sXG4gICAgeyBcIm1lbnVzXCI6IFwibmV3YXJpXCIsIFwicGVyY2VudGFnZVwiOiAxMC4wMCB9XG5dO1xudmFyIGRhdGE0ID0gW1xuICAgIHsgXCJtZW51c1wiOiBcInR5cGljYWxcIiwgXCJwZXJjZW50YWdlXCI6IDMwLjExIH0sXG4gICAgeyBcIm1lbnVzXCI6IFwic3BlY2lhbFwiLCBcInBlcmNlbnRhZ2VcIjogMTYuNjkgfSxcbiAgICB7IFwibWVudXNcIjogXCJyZWd1bGFyXCIsIFwicGVyY2VudGFnZVwiOiAyMy4wNiB9LFxuICAgIHsgXCJtZW51c1wiOiBcIm5ld2FyaVwiLCBcInBlcmNlbnRhZ2VcIjogMjAuMDAgfVxuXTtcblxuZnVuY3Rpb24gZHJhd1BpZUNoYXJ0KGRhdGEpe1xuICAgIFxuICAgIHZhciBzdmcgPSBkMy5zZWxlY3QoJy5waWVfY2hhcnQnKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHN2Z1dpZHRoKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBzdmdIZWlnaHQpO1xuICAgIFxuICAgIC8vQ3JlYXRpbmcgZ3JvdXAgZWxlbWVudCB0byBob2xkIHBpZSBjaGFydCAgICBcbiAgICB2YXIgZyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgcmFkaXVzICsgXCIsXCIgKyByYWRpdXMgKyBcIilcIik7XG4gICAgXG4gICAgdmFyIGNvbG9yID0gZDMuc2NhbGVPcmRpbmFsKGQzLnNjaGVtZVBhaXJlZCk7XG4gICAgXG4gICAgdmFyIHBpZSA9IGQzLnBpZSgpXG4gICAgICAgIC5zb3J0KG51bGwpLnZhbHVlKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLm1lbnVzX2FwcGVhcmVkO1xuICAgIH0pO1xuICAgIFxuICAgIHZhciBwYXRoID0gZDMuYXJjKClcbiAgICAgICAgLm91dGVyUmFkaXVzKHJhZGl1cylcbiAgICAgICAgLmlubmVyUmFkaXVzKDApO1xuICAgIFxuICAgIHZhciBhcmMgPSBnLnNlbGVjdEFsbChcImFyY1wiKVxuICAgICAgICAuZGF0YShwaWUoZGF0YSkpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpO1xuICAgIFxuICAgIGFyYy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgIC5hdHRyKFwiZFwiLCBwYXRoKVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGNvbG9yKGQuZGF0YS5tZW51c19hcHBlYXJlZCk7IH0pO1xuICAgIFxuICAgIHZhciBsYWJlbCA9IGQzLmFyYygpXG4gICAgICAgIC5vdXRlclJhZGl1cyhyYWRpdXMpXG4gICAgICAgIC5pbm5lclJhZGl1cygwKTtcbiAgICBcbiAgICBhcmMuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgbGFiZWwuY2VudHJvaWQoZCkgKyBcIilcIjtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5kYXRhLm5hbWU7IH0pO1xufVxuXG4gZnVuY3Rpb24gZGlzaF90ZXN0aW5nMSgpIHtcblxuICAgIGxldCBkaXNoX2RhdGEgPSBbXVxuICAgIGQzLmNzdihcIi4uL2Rpc3QvZGlzaGVzX2RhdGEuY3N2XCIpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZGlzaF9kYXRhID0gZGF0YS5maWx0ZXIoZGF0dW0gPT4ge1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIChwYXJzZUludChkYXR1bS5maXJzdF9hcHBlYXJlZCwgMTApIDwgMTkwMCk7XG4gICAgXG4gICAgICAgIH0pXG4gICAgICAgIGRpc2hfZGF0YS5zbGljZSgwLCAxMCkuZm9yRWFjaChkID0+IHtcbiAgICAgICAgICAgIGQubWVudXNfYXBwZWFyZWQgPSArZC5tZW51c19hcHBlYXJlZDtcbiAgICAgICAgfSlcbiAgICAgICAgZHJhd1BpZUNoYXJ0KGRpc2hfZGF0YS5zbGljZSgwLCAxMCkpXG4gICAgICAgIC8vY29uc29sZS5sb2coZGlzaF9kYXRhLnNsaWNlKDAsIDEwKSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkaXNoX3Rlc3RpbmcyKCkge1xuXG4gICAgbGV0IGRpc2hfZGF0YSA9IFtdXG4gICAgZDMuY3N2KFwiLi4vZGlzdC9kaXNoZXNfZGF0YS5jc3ZcIikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkaXNoX2RhdGEgPSBkYXRhLmZpbHRlcihkYXR1bSA9PiB7XG5cbiAgICAgICAgICAgIHJldHVybiAocGFyc2VJbnQoZGF0dW0uZmlyc3RfYXBwZWFyZWQsIDEwKSA+IDE5MDAgJiYgcGFyc2VJbnQoZGF0dW0uZmlyc3RfYXBwZWFyZWQsIDEwKSA8IDE5NTApO1xuXG4gICAgICAgIH0pXG4gICAgICAgIGRpc2hfZGF0YS5zbGljZSgwLCAxMCkuZm9yRWFjaChkID0+IHtcbiAgICAgICAgICAgIGQubWVudXNfYXBwZWFyZWQgPSArZC5tZW51c19hcHBlYXJlZDtcbiAgICAgICAgfSlcbiAgICAgICAgZHJhd1BpZUNoYXJ0KGRpc2hfZGF0YS5zbGljZSgwLCA2KSlcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkaXNoX2RhdGEuc2xpY2UoMCwgMTApKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRpc2hfdGVzdGluZzMoKSB7XG5cbiAgICBsZXQgZGlzaF9kYXRhID0gW11cbiAgICBkMy5jc3YoXCIuLi9kaXN0L2Rpc2hlc19kYXRhLmNzdlwiKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRpc2hfZGF0YSA9IGRhdGEuZmlsdGVyKGRhdHVtID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIChwYXJzZUludChkYXR1bS5maXJzdF9hcHBlYXJlZCwgMTApID4gMTk1MCAmJiBwYXJzZUludChkYXR1bS5maXJzdF9hcHBlYXJlZCwgMTApIDwgMjAwMCk7XG5cbiAgICAgICAgfSlcbiAgICAgICAgZGlzaF9kYXRhLnNsaWNlKDAsIDEwKS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgZC5tZW51c19hcHBlYXJlZCA9ICtkLm1lbnVzX2FwcGVhcmVkO1xuICAgICAgICB9KVxuICAgICAgICBkcmF3UGllQ2hhcnQoZGlzaF9kYXRhLnNsaWNlKDAsIDYpKVxuICAgICAgICAvL2NvbnNvbGUubG9nKGRpc2hfZGF0YS5zbGljZSgwLCAxMCkpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZGlzaF90ZXN0aW5nNCgpIHtcblxuICAgIGxldCBkaXNoX2RhdGEgPSBbXVxuICAgIGQzLmNzdihcIi4uL2Rpc3QvZGlzaGVzX2RhdGEuY3N2XCIpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZGlzaF9kYXRhID0gZGF0YS5maWx0ZXIoZGF0dW0gPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gKHBhcnNlSW50KGRhdHVtLmZpcnN0X2FwcGVhcmVkLCAxMCkgPiAyMDAwKTtcblxuICAgICAgICB9KVxuICAgICAgICBkaXNoX2RhdGEuc2xpY2UoMCwgMTApLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICBkLm1lbnVzX2FwcGVhcmVkID0gK2QubWVudXNfYXBwZWFyZWQ7XG4gICAgICAgIH0pXG4gICAgICAgIGRyYXdQaWVDaGFydChkaXNoX2RhdGEuc2xpY2UoMCwgNikpXG4gICAgICAgIC8vY29uc29sZS5sb2coZGlzaF9kYXRhLnNsaWNlKDAsIDEwKSlcbiAgICB9KVxufVxuXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgICAgdGVzdGluZzEoKTtcbiAgICAgICAgICBkaXNoX3Rlc3RpbmcxKCk7XG4gICAgICAgIC8vZHJhd1BpZUNoYXJ0KGRhdGExKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgdHlwaWNhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHlwaWNhbFwiKTtcbiAgICAgICAgdHlwaWNhbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGVzdGluZzEoKTtcbiAgICAgICAgICAgIGRpc2hfdGVzdGluZzEoKTtcbiAgICAgICAgICAgLy8gZHJhd1BpZUNoYXJ0KGRhdGExKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlZ3VsYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZ3VsYXJcIik7XG4gICAgICAgIHJlZ3VsYXIub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgXG4gICAgICAgICAgICB0ZXN0aW5nMigpO1xuICAgICAgICAgICAgZGlzaF90ZXN0aW5nMigpO1xuICAgICAgICAgICAvLyBkcmF3UGllQ2hhcnQoZGF0YTIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNwZWNpYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwZWNpYWxcIik7XG4gICAgICAgIHNwZWNpYWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRlc3RpbmczKCk7XG4gICAgICAgICAgICBkaXNoX3Rlc3RpbmczKCk7XG4gICAgICAgICAgIC8vIGRyYXdQaWVDaGFydChkYXRhMylcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdhcmkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld2FyaVwiKTtcbiAgICAgICAgbmV3YXJpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0ZXN0aW5nNCgpO1xuICAgICAgICAgICAgZGlzaF90ZXN0aW5nNCgpO1xuICAgICAgICAgICAvLyBkcmF3UGllQ2hhcnQoZGF0YTQpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgXG5sZXQgY2hhcnQ7XG5cbmNvbnN0IHJlbmRlciA9IGRhdGEgPT4ge1xuICAgIFxuICAgIC8vIGQzLnNlbGVjdChcIi5iYXItY2hhcnRcIikucmVtb3ZlKCk7XG5cbiAgICBjb25zdCB3aWR0aCA9IDMwMDtcbiAgICBjb25zdCBoZWlnaHQgPSA1MDA7XG4gICAgY29uc3QgbWFyZ2luID0ge3RvcDogMTAsIHJpZ2h0OiAyMCwgYm90dG9tOiAxMCwgbGVmdDogMTUwfTtcbiAgIC8vIGNvbnN0IGlubmVyV2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGNvbnN0IGlubmVySGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG4gICAgLy8gXG4gICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAuZG9tYWluKFswLCBkMy5tYXgoZGF0YSwgZCA9PiBkLmRpc2hfY291bnQpXSlcbiAgICAgICAgLnJhbmdlKFswLCB3aWR0aF0pO1xuXG4gICAgICAgIGNvbnN0IHhBeGlzID0gZDMuYXhpc0JvdHRvbSh4U2NhbGUpO1xuICAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlQmFuZCgpXG4gICAgICAgIC5kb21haW4oZGF0YS5tYXAoZCA9PiBkLmxvY2F0aW9uKSlcbiAgICAgICAgLnJhbmdlKFswLCBpbm5lckhlaWdodF0pXG4gICAgICAgIC5wYWRkaW5nKDAuMSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coeVNjYWxlLmRvbWFpbigpKVxuICAgICBjb25zdCB5QXhpcyA9IGQzLmF4aXNMZWZ0KHlTY2FsZSk7XG4gICAgXG4gICAgbGV0IHN2ZyA9IGQzLnNlbGVjdChcIi5iYXItY2hhcnRcIik7XG4gICAgXG4gICAgXG5cbiAgICBpZiAoY2hhcnQpe1xuICAgICAgICBzdmcuc2VsZWN0KCdnJykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sICR7bWFyZ2luLnRvcH0pYCk7XG5cbiAgICBnLmFwcGVuZCgnZycpLmNhbGwoeUF4aXMpXG4gICAgLnNlbGVjdCgnLmRvbWFpbicsJy50aWNrIGxpbmUnKVxuICAgIC5yZW1vdmUoKTtcbiAgICBnLmFwcGVuZChcImdcIikuY2FsbCh4QXhpcylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwgJHtpbm5lckhlaWdodH0pYClcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd5JywgNTApXG4gICAgICAgIC5hdHRyKCd4Jywgd2lkdGgvIDIpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsIDIwKVxuICAgICAgICAudGV4dCgnTnVtYmVyIG9mIERpc2hlcycpO1xuICAgICAgICBcblxuICAgIGNoYXJ0ID0gdHJ1ZTtcbiAgICAgZy5zZWxlY3RBbGwoXCJyZWN0XCIpLmRhdGEoZGF0YSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBkID0+IHlTY2FsZShkLmxvY2F0aW9uKSlcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgZCA9PiB4U2NhbGUoZC5kaXNoX2NvdW50KSlcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHlTY2FsZS5iYW5kd2lkdGgoKSk7XG4gICAgIGcuYXBwZW5kKCd0ZXh0JylcbiAgICAgLnRleHQoXCJOdW1iZXIgb2YgRGlzaGVzIHNldmVyZWQgaW4gTmV3IFlvcmsgSG90ZWxzXCIpOyAgIFxuXG59XG4gICBmdW5jdGlvbiB0ZXN0aW5nMSgpe1xuXG4gICAgICAgbGV0IG1lbnVfZGF0YSA9IFtdXG4gICAgICAgICBkMy5jc3YoXCIuLi9kaXN0L21lbnVfZGF0YS5jc3ZcIikudGhlbigoZGF0YSkgID0+e1xuICAgICAgICAgICAgIG1lbnVfZGF0YSA9ICBkYXRhLmZpbHRlcihkYXR1bSA9PiB7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gKHBhcnNlSW50KGRhdHVtLmRhdGUsIDEwKSA8IDE5MDAgJiYgZGF0dW0ucGxhY2UgPT09IFwiTkVXIFlPUktcIik7XG4gICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbWVudV9kYXRhLnNsaWNlKDAsIDEwKS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgICAgIGQuZGlzaF9jb3VudCA9ICtkLmRpc2hfY291bnQ7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgcmVuZGVyKG1lbnVfZGF0YS5zbGljZSgwLCAxMCkpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtZW51X2RhdGEuc2xpY2UoMCwxMClbMF0uZGlzaF9jb3VudClcbiAgICAgICB9KVxuICAgfVxuXG5mdW5jdGlvbiB0ZXN0aW5nMigpIHtcblxuICAgIGxldCBtZW51X2RhdGEgPSBbXVxuICAgIGQzLmNzdihcIi4uL2Rpc3QvbWVudV9kYXRhLmNzdlwiKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIG1lbnVfZGF0YSA9IGRhdGEuZmlsdGVyKGRhdHVtID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIChwYXJzZUludChkYXR1bS5kYXRlLCAxMCkgPiAxOTAwICYmIHBhcnNlSW50KGRhdHVtLmRhdGUsIDEwKSA8IDE5NTAgICYmIGRhdHVtLnBsYWNlID09PSBcIk5FVyBZT1JLXCIpO1xuXG4gICAgICAgIH0pXG4gICAgICAgIG1lbnVfZGF0YS5zbGljZSgwLCAxMCkuZm9yRWFjaChkID0+IHtcbiAgICAgICAgICAgIGQuZGlzaF9jb3VudCA9ICtkLmRpc2hfY291bnQ7XG4gICAgICAgIH0pXG4gICAgICAgIHJlbmRlcihtZW51X2RhdGEuc2xpY2UoMCwgMTApKVxuICAgICAgICAvL2NvbnNvbGUubG9nKG1lbnVfZGF0YS5zbGljZSgwLDEwKSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiB0ZXN0aW5nMygpIHtcblxuICAgIGxldCBtZW51X2RhdGEgPSBbXVxuICAgIGQzLmNzdihcIi4uL2Rpc3QvbWVudV9kYXRhLmNzdlwiKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIG1lbnVfZGF0YSA9IGRhdGEuZmlsdGVyKGRhdHVtID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIChwYXJzZUludChkYXR1bS5kYXRlLCAxMCkgPiAxOTUwICYmIHBhcnNlSW50KGRhdHVtLmRhdGUsIDEwKSA8IDE5ODAgKTsgLy8gbm90IGluIG5ldyB5b3JrXG5cbiAgICAgICAgfSlcbiAgICAgICAgbWVudV9kYXRhLnNsaWNlKDAsIDEwKS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgZC5kaXNoX2NvdW50ID0gK2QuZGlzaF9jb3VudDtcbiAgICAgICAgfSlcbiAgICAgICAgcmVuZGVyKG1lbnVfZGF0YS5zbGljZSgwLCAxMCkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1lbnVfZGF0YS5zbGljZSgwLDEwKSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiB0ZXN0aW5nNCgpIHtcblxuICAgIGxldCBtZW51X2RhdGEgPSBbXVxuICAgIGQzLmNzdihcIi4uL2Rpc3QvbWVudV9kYXRhLmNzdlwiKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIG1lbnVfZGF0YSA9IGRhdGEuZmlsdGVyKGRhdHVtID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIChwYXJzZUludChkYXR1bS5kYXRlLCAxMCkgPiAyMDAwICk7Ly8gbm90IGluIG5ldyB5b3JrXG5cbiAgICAgICAgfSlcbiAgICAgICAgbWVudV9kYXRhLnNsaWNlKDAsIDEwKS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgZC5kaXNoX2NvdW50ID0gK2QuZGlzaF9jb3VudDtcbiAgICAgICAgfSlcbiAgICAgICAgcmVuZGVyKG1lbnVfZGF0YS5zbGljZSgwLCAxMCkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1lbnVfZGF0YS5zbGljZSgwLDEwKSlcbiAgICB9KVxufVxuXG5cblxuLy8gdGVzdGluZ3NcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==