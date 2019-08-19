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


var svgWidth = 500,
    svgHeight = 300,
    barPadding = 5,
    radius = Math.min(svgWidth, svgHeight) / 2;

var pieChart = void 0;

function drawPieChart(data) {

    var svg = d3.select('.pie_chart').attr("width", svgWidth).attr("height", svgHeight);

    if (pieChart) {
        svg.select('g').remove();
    }

    var g = svg.append('g').attr("transform", "translate(" + svgWidth / 2 + "," + svgHeight / 2 + ")");

    pieChart = true;

    var color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00", "#e34d01", "black", "#3e7eca", "#aa0092", "#b32e4f"]);

    var pie = d3.pie().sort(null).value(function (d) {
        return d.menus_appeared;
    });

    var path = d3.arc().outerRadius(radius - 10).innerRadius(0);

    var outerArc = d3.arc().innerRadius(radius * 0.9).outerRadius(radius * 0.9);

    var label = d3.arc().outerRadius(radius - 40).innerRadius(radius - 40);

    var arc = g.selectAll(".arc").data(pie(data)).enter().append("g").attr("class", "arc");

    arc.append("path").attr("d", path).attr("fill", function (d) {
        return color(d.data.name);
    });

    arc.append("text").attr("transform", function (d, i) {
        var pos = outerArc.centroid(d);
        pos[0] = radius * (midAngle(d) < Math.PI ? 1.1 : -1.1);

        var percent = (d.endAngle - d.startAngle) / (2 * Math.PI) * 100;
        if (percent < 3) {

            pos[1] += i * 15;
        }
        return "translate(" + pos + ")";
    }).text(function (d) {
        return d.data.name;
    }).attr("fill", function (d, i) {
        return color(i);
    }).attr("text-anchor", 'left').attr("dx", function (d) {
        var ac = midAngle(d) < Math.PI ? 0 : -50;
        return ac;
    }).attr("dy", 5);

    function midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }

    var polyline = g.selectAll("polyline").data(pie(data), function (d) {
        return d.data.name;
    }).enter().append("polyline").attr("points", function (d, i) {
        var pos = outerArc.centroid(d);
        pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
        var outer = outerArc.centroid(d);
        var percent = (d.endAngle - d.startAngle) / (2 * Math.PI) * 100;
        if (percent < 3) {
            outer[1];
            pos[1] += i * 15;
        }

        return [label.centroid(d), [outer[0], pos[1]], pos];
    }).style("fill", "none").attr("stroke", function (d, i) {
        return color(i);
    }).style("stroke-width", "1px");
    // .style('padding', 3);

}

function dish_testing1() {

    var dish_data1 = [];

    dish_data1 = dish_data.filter(function (datum) {

        return parseInt(datum.first_appeared, 10) < 1900;
    });

    drawPieChart(dish_data1.slice(0, 10));
    //console.log(dish_data.slice(0, 10))
}

function dish_testing2() {

    var dish_data2 = [];

    dish_data2 = dish_data.filter(function (datum) {

        return parseInt(datum.first_appeared, 10) > 1900 && parseInt(datum.first_appeared, 10) < 1950;
    });

    drawPieChart(dish_data2.slice(0, 6));
    //console.log(dish_data.slice(0, 10))
}

function dish_testing3() {

    var dish_data3 = [];

    dish_data3 = dish_data.filter(function (datum) {

        return parseInt(datum.first_appeared, 10) > 1950 && parseInt(datum.first_appeared, 10) < 2000;
    });

    drawPieChart(dish_data3.slice(0, 6));
    //console.log(dish_data.slice(0, 10))
}

function dish_testing4() {

    var dish_data4 = [];

    dish_data4 = dish_data.filter(function (datum) {

        return parseInt(datum.first_appeared, 10) > 2000;
    });

    drawPieChart(dish_data4.slice(0, 6));
    //console.log(dish_data.slice(0, 10))
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
    var margin = { top: 20, right: 20, bottom: 10, left: 150 };
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

    var g = svg.append("g").attr('transform', "translate(" + margin.left + ", " + margin.top + ")");

    g.append('g').call(yAxis).select('.domain', '.tick line').remove();
    g.append("g").call(xAxis).attr('transform', "translate(0, " + innerHeight + ")").append('text').attr('y', 50).attr('x', width / 2).attr('fill', 'black').attr('font-size', 20).text('Number of Dishes');

    chart = true;
    g.selectAll("rect").data(data).enter().append("rect").attr("y", function (d) {
        return yScale(d.location);
    }).attr("width", function (d) {
        return xScale(d.dish_count);
    }).attr("height", yScale.bandwidth());
    g.append('text').text("Number of Dishes severed in New York Hotels");
};
function testing1() {

    var menu_data1 = [];

    menu_data1 = menu_data.filter(function (datum) {

        return parseInt(datum.date, 10) < 1900 && datum.place === "NEW YORK";
    });

    render(menu_data1.slice(0, 10));
    // console.log(menu_data.slice(0,10)[0].dish_count)
}

function testing2() {

    var menu_data2 = [];

    menu_data2 = menu_data.filter(function (datum) {

        return parseInt(datum.date, 10) > 1900 && parseInt(datum.date, 10) < 1950 && datum.place === "NEW YORK";
    });

    render(menu_data2.slice(0, 10));
    //console.log(menu_data.slice(0,10))
}

function testing3() {

    var menu_data3 = [];

    menu_data3 = menu_data.filter(function (datum) {

        return parseInt(datum.date, 10) > 1950 && parseInt(datum.date, 10) < 1980; // not in new york
    });

    render(menu_data3.slice(0, 10));
    // console.log(menu_data.slice(0,10))
}

function testing4() {

    var menu_data4 = [];

    menu_data4 = menu_data.filter(function (datum) {

        return parseInt(datum.date, 10) > 2000; // not in new york
    });

    render(menu_data4.slice(0, 10));
    // console.log(menu_data.slice(0,10))
}

// testings

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiXSwibmFtZXMiOlsic3ZnV2lkdGgiLCJzdmdIZWlnaHQiLCJiYXJQYWRkaW5nIiwicmFkaXVzIiwiTWF0aCIsIm1pbiIsInBpZUNoYXJ0IiwiZHJhd1BpZUNoYXJ0IiwiZGF0YSIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXR0ciIsInJlbW92ZSIsImciLCJhcHBlbmQiLCJjb2xvciIsInNjYWxlT3JkaW5hbCIsInBpZSIsInNvcnQiLCJ2YWx1ZSIsImQiLCJtZW51c19hcHBlYXJlZCIsInBhdGgiLCJhcmMiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwib3V0ZXJBcmMiLCJsYWJlbCIsInNlbGVjdEFsbCIsImVudGVyIiwibmFtZSIsImkiLCJwb3MiLCJjZW50cm9pZCIsIm1pZEFuZ2xlIiwiUEkiLCJwZXJjZW50IiwiZW5kQW5nbGUiLCJzdGFydEFuZ2xlIiwidGV4dCIsImFjIiwicG9seWxpbmUiLCJvdXRlciIsInN0eWxlIiwiZGlzaF90ZXN0aW5nMSIsImRpc2hfZGF0YTEiLCJkaXNoX2RhdGEiLCJmaWx0ZXIiLCJwYXJzZUludCIsImRhdHVtIiwiZmlyc3RfYXBwZWFyZWQiLCJzbGljZSIsImRpc2hfdGVzdGluZzIiLCJkaXNoX2RhdGEyIiwiZGlzaF90ZXN0aW5nMyIsImRpc2hfZGF0YTMiLCJkaXNoX3Rlc3Rpbmc0IiwiZGlzaF9kYXRhNCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlc3RpbmcxIiwidHlwaWNhbCIsImdldEVsZW1lbnRCeUlkIiwib25jbGljayIsInJlZ3VsYXIiLCJ0ZXN0aW5nMiIsInNwZWNpYWwiLCJ0ZXN0aW5nMyIsIm5ld2FyaSIsInRlc3Rpbmc0IiwiY2hhcnQiLCJyZW5kZXIiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImlubmVySGVpZ2h0IiwieFNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJtYXgiLCJkaXNoX2NvdW50IiwicmFuZ2UiLCJ4QXhpcyIsImF4aXNCb3R0b20iLCJ5U2NhbGUiLCJzY2FsZUJhbmQiLCJtYXAiLCJsb2NhdGlvbiIsInBhZGRpbmciLCJ5QXhpcyIsImF4aXNMZWZ0IiwiY2FsbCIsImJhbmR3aWR0aCIsIm1lbnVfZGF0YTEiLCJtZW51X2RhdGEiLCJkYXRlIiwicGxhY2UiLCJtZW51X2RhdGEyIiwibWVudV9kYXRhMyIsIm1lbnVfZGF0YTQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQSxJQUFJQSxXQUFXLEdBQWY7QUFBQSxJQUFvQkMsWUFBWSxHQUFoQztBQUFBLElBQXFDQyxhQUFhLENBQWxEO0FBQUEsSUFBcURDLFNBQVNDLEtBQUtDLEdBQUwsQ0FBU0wsUUFBVCxFQUFtQkMsU0FBbkIsSUFBZ0MsQ0FBOUY7O0FBRUEsSUFBSUssaUJB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RCxJQUFmLEVBQXFCLEVBQXJCLElBQTJCLElBQW5DLENBRitCLENBRVc7QUFFN0MsS0FKUSxDQUFiOztBQU1JNUIsV0FBT2dDLFdBQVdwRCxLQUFYLENBQWlCLENBQWpCLEVBQW9CLEVBQXBCLENBQVA7QUFDQTtBQUVQOztBQUlELFciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9pbmRleC5qc1wiKTtcbiIsIlxubGV0IHN2Z1dpZHRoID0gNTAwLCBzdmdIZWlnaHQgPSAzMDAsIGJhclBhZGRpbmcgPSA1LCByYWRpdXMgPSBNYXRoLm1pbihzdmdXaWR0aCwgc3ZnSGVpZ2h0KSAvIDIgO1xuXG5sZXQgcGllQ2hhcnQ7XG5cbmZ1bmN0aW9uIGRyYXdQaWVDaGFydChkYXRhKXtcbiAgIFxuICAgIHZhciBzdmcgPSBkMy5zZWxlY3QoJy5waWVfY2hhcnQnKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHN2Z1dpZHRoKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBzdmdIZWlnaHQpO1xuXG4gICAgaWYgKHBpZUNoYXJ0KSB7c3ZnLnNlbGVjdCgnZycpLnJlbW92ZSgpIH1cbiAgICAgICBcbiAgICAgICAgIHZhciBnID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHN2Z1dpZHRoIC8gMiArIFwiLFwiICsgc3ZnSGVpZ2h0LzIgKyBcIilcIik7XG5cbiAgICAgcGllQ2hhcnQgPSB0cnVlO1xuICAgICAgICBcbiAgICB2YXIgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoW1wiIzk4YWJjNVwiLFxuICAgICAgICBcIiM4YTg5YTZcIixcbiAgICAgICAgXCIjN2I2ODg4XCIsXG4gICAgICAgIFwiIzZiNDg2YlwiLFxuICAgICAgICBcIiNhMDVkNTZcIixcbiAgICAgICAgXCIjZDA3NDNjXCIsXG4gICAgICAgIFwiI2ZmOGMwMFwiLFxuICAgICAgICBcIiNlMzRkMDFcIixcbiAgICAgICAgXCJibGFja1wiLFxuICAgICAgICBcIiMzZTdlY2FcIixcbiAgICAgICAgXCIjYWEwMDkyXCIsXG4gICAgICAgIFwiI2IzMmU0ZlwiXSk7XG5cbiAgICB2YXIgcGllID0gZDMucGllKClcbiAgICAgICAgLnNvcnQobnVsbClcbiAgICAgICAgLnZhbHVlKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm1lbnVzX2FwcGVhcmVkOyB9KTtcblxuICBcbiAgICB2YXIgcGF0aCA9IGQzLmFyYygpXG4gICAgICAgIC5vdXRlclJhZGl1cyhyYWRpdXMgLSAxMClcbiAgICAgICAgLmlubmVyUmFkaXVzKDApO1xuXG4gICAgdmFyIG91dGVyQXJjID0gZDMuYXJjKClcbiAgICAgICAgLmlubmVyUmFkaXVzKHJhZGl1cyAqIDAuOSlcbiAgICAgICAgLm91dGVyUmFkaXVzKHJhZGl1cyAqIDAuOSk7XG5cblxuICAgIHZhciBsYWJlbCA9IGQzLmFyYygpXG4gICAgICAgIC5vdXRlclJhZGl1cyhyYWRpdXMgLSA0MClcbiAgICAgICAgLmlubmVyUmFkaXVzKHJhZGl1cyAtIDQwKTtcblxuICAgIHZhciBhcmMgPSBnLnNlbGVjdEFsbChcIi5hcmNcIilcbiAgICAgICAgLmRhdGEocGllKGRhdGEpKVxuICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJhcmNcIik7XG5cblxuICAgIFxuICAgIGFyYy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgIC5hdHRyKFwiZFwiLCBwYXRoKVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGNvbG9yKGQuZGF0YS5uYW1lKTsgfSk7XG5cblxuICAgIGFyYy5hcHBlbmQoXCJ0ZXh0XCIpXG5cbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgIHZhciBwb3MgPSBvdXRlckFyYy5jZW50cm9pZChkKTtcbiAgICAgICAgICAgIHBvc1swXSA9IHJhZGl1cyAqIChtaWRBbmdsZShkKSA8IE1hdGguUEkgPyAxLjEgOiAtMS4xKTtcblxuXG4gICAgICAgICAgICB2YXIgcGVyY2VudCA9IChkLmVuZEFuZ2xlIC0gZC5zdGFydEFuZ2xlKSAvICgyICogTWF0aC5QSSkgKiAxMDBcbiAgICAgICAgICAgIGlmIChwZXJjZW50IDwgMykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHBvc1sxXSArPSBpICogMTVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIHBvcyArIFwiKVwiO1xuICAgICAgICB9KVxuICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5kYXRhLm5hbWU7IH0pXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbiAoZCwgaSkgeyByZXR1cm4gY29sb3IoaSk7IH0pXG4gICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgJ2xlZnQnKVxuICAgICAgICAuYXR0cihcImR4XCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICB2YXIgYWMgPSBtaWRBbmdsZShkKSA8IE1hdGguUEkgPyAwIDogLTUwXG4gICAgICAgICAgICByZXR1cm4gYWNcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJkeVwiLCA1KVxuXG5cbiAgICBmdW5jdGlvbiBtaWRBbmdsZShkKSB7XG4gICAgICAgIHJldHVybiBkLnN0YXJ0QW5nbGUgKyAoZC5lbmRBbmdsZSAtIGQuc3RhcnRBbmdsZSkgLyAyO1xuICAgIH1cblxuICAgIHZhciBwb2x5bGluZSA9IGcuc2VsZWN0QWxsKFwicG9seWxpbmVcIilcbiAgICAgICAgLmRhdGEocGllKGRhdGEpLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQuZGF0YS5uYW1lO1xuICAgICAgICB9KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwicG9seWxpbmVcIilcbiAgICAgICAgLmF0dHIoXCJwb2ludHNcIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgIHZhciBwb3MgPSBvdXRlckFyYy5jZW50cm9pZChkKTtcbiAgICAgICAgICAgIHBvc1swXSA9IHJhZGl1cyAqIDAuOTUgKiAobWlkQW5nbGUoZCkgPCBNYXRoLlBJID8gMSA6IC0xKTtcbiAgICAgICAgICAgIHZhciBvdXRlciA9IG91dGVyQXJjLmNlbnRyb2lkKGQpXG4gICAgICAgICAgICB2YXIgcGVyY2VudCA9IChkLmVuZEFuZ2xlIC0gZC5zdGFydEFuZ2xlKSAvICgyICogTWF0aC5QSSkgKiAxMDBcbiAgICAgICAgICAgIGlmIChwZXJjZW50IDwgMykge1xuICAgICAgICAgICAgICAgIG91dGVyWzFdXG4gICAgICAgICAgICAgICAgcG9zWzFdICs9IGkgKiAxNVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gW2xhYmVsLmNlbnRyb2lkKGQpLCBbb3V0ZXJbMF0sIHBvc1sxXV0sIHBvc107XG4gICAgICAgIH0pXG4gICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAgIFxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBmdW5jdGlvbiAoZCwgaSkgeyByZXR1cm4gY29sb3IoaSk7IH0pXG4gICAgICAgIC5zdHlsZShcInN0cm9rZS13aWR0aFwiLCBcIjFweFwiKTtcbiAgICAgICAvLyAuc3R5bGUoJ3BhZGRpbmcnLCAzKTtcblxuICAgIFxuXG59XG5cbiBmdW5jdGlvbiBkaXNoX3Rlc3RpbmcxKCkge1xuXG4gICAgbGV0IGRpc2hfZGF0YTEgPSBbXVxuICAgIFxuICAgICBkaXNoX2RhdGExID0gZGlzaF9kYXRhLmZpbHRlcihkYXR1bSA9PiB7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gKHBhcnNlSW50KGRhdHVtLmZpcnN0X2FwcGVhcmVkLCAxMCkgPCAxOTAwKTtcbiAgICBcbiAgICAgICAgfSlcbiAgICAgICBcbiAgICAgICAgZHJhd1BpZUNoYXJ0KGRpc2hfZGF0YTEuc2xpY2UoMCwgMTApKVxuICAgICAgICAvL2NvbnNvbGUubG9nKGRpc2hfZGF0YS5zbGljZSgwLCAxMCkpXG4gICAgXG59XG5cbmZ1bmN0aW9uIGRpc2hfdGVzdGluZzIoKSB7XG5cbiAgICBsZXQgZGlzaF9kYXRhMiA9IFtdXG4gICBcbiAgICBkaXNoX2RhdGEyID0gZGlzaF9kYXRhLmZpbHRlcihkYXR1bSA9PiB7XG5cbiAgICAgICAgICAgIHJldHVybiAocGFyc2VJbnQoZGF0dW0uZmlyc3RfYXBwZWFyZWQsIDEwKSA+IDE5MDAgJiYgcGFyc2VJbnQoZGF0dW0uZmlyc3RfYXBwZWFyZWQsIDEwKSA8IDE5NTApO1xuXG4gICAgICAgIH0pXG4gICAgICAgXG4gICAgICAgIGRyYXdQaWVDaGFydChkaXNoX2RhdGEyLnNsaWNlKDAsIDYpKVxuICAgICAgICAvL2NvbnNvbGUubG9nKGRpc2hfZGF0YS5zbGljZSgwLCAxMCkpXG4gICBcbn1cblxuZnVuY3Rpb24gZGlzaF90ZXN0aW5nMygpIHtcblxuICAgIGxldCBkaXNoX2RhdGEzID0gW11cbiAgICBcbiAgICBkaXNoX2RhdGEzID0gZGlzaF9kYXRhLmZpbHRlcihkYXR1bSA9PiB7XG5cbiAgICAgICAgICAgIHJldHVybiAocGFyc2VJbnQoZGF0dW0uZmlyc3RfYXBwZWFyZWQsIDEwKSA+IDE5NTAgJiYgcGFyc2VJbnQoZGF0dW0uZmlyc3RfYXBwZWFyZWQsIDEwKSA8IDIwMDApO1xuXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBkcmF3UGllQ2hhcnQoZGlzaF9kYXRhMy5zbGljZSgwLCA2KSlcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkaXNoX2RhdGEuc2xpY2UoMCwgMTApKVxuICAgIFxufVxuXG5mdW5jdGlvbiBkaXNoX3Rlc3Rpbmc0KCkge1xuXG4gICAgbGV0IGRpc2hfZGF0YTQgPSBbXVxuICAgXG4gICAgICAgIGRpc2hfZGF0YTQgPSBkaXNoX2RhdGEuZmlsdGVyKGRhdHVtID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIChwYXJzZUludChkYXR1bS5maXJzdF9hcHBlYXJlZCwgMTApID4gMjAwMCk7XG5cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIGRyYXdQaWVDaGFydChkaXNoX2RhdGE0LnNsaWNlKDAsIDYpKVxuICAgICAgICAvL2NvbnNvbGUubG9nKGRpc2hfZGF0YS5zbGljZSgwLCAxMCkpXG4gICBcbn1cblxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICAgIHRlc3RpbmcxKCk7XG4gICAgICAgICAgZGlzaF90ZXN0aW5nMSgpO1xuICAgICAgICAvL2RyYXdQaWVDaGFydChkYXRhMSlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHR5cGljYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR5cGljYWxcIik7XG4gICAgICAgIHR5cGljYWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRlc3RpbmcxKCk7XG4gICAgICAgICAgICBkaXNoX3Rlc3RpbmcxKCk7XG4gICAgICAgICAgIC8vIGRyYXdQaWVDaGFydChkYXRhMSlcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWd1bGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWd1bGFyXCIpO1xuICAgICAgICByZWd1bGFyLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgdGVzdGluZzIoKTtcbiAgICAgICAgICAgIGRpc2hfdGVzdGluZzIoKTtcbiAgICAgICAgICAgLy8gZHJhd1BpZUNoYXJ0KGRhdGEyKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzcGVjaWFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGVjaWFsXCIpO1xuICAgICAgICBzcGVjaWFsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0ZXN0aW5nMygpO1xuICAgICAgICAgICAgZGlzaF90ZXN0aW5nMygpO1xuICAgICAgICAgICAvLyBkcmF3UGllQ2hhcnQoZGF0YTMpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3YXJpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdhcmlcIik7XG4gICAgICAgIG5ld2FyaS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGVzdGluZzQoKTtcbiAgICAgICAgICAgIGRpc2hfdGVzdGluZzQoKTtcbiAgICAgICAgICAgLy8gZHJhd1BpZUNoYXJ0KGRhdGE0KVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIFxubGV0IGNoYXJ0O1xuXG5jb25zdCByZW5kZXIgPSBkYXRhID0+IHtcbiAgICBcbiAgICAvLyBkMy5zZWxlY3QoXCIuYmFyLWNoYXJ0XCIpLnJlbW92ZSgpO1xuXG4gICAgY29uc3Qgd2lkdGggPSAzMDA7XG4gICAgY29uc3QgaGVpZ2h0ID0gNTAwO1xuICAgIGNvbnN0IG1hcmdpbiA9IHt0b3A6IDIwLCByaWdodDogMjAsIGJvdHRvbTogMTAsIGxlZnQ6IDE1MH07XG4gICAvLyBjb25zdCBpbm5lcldpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgICBjb25zdCBpbm5lckhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuICAgIC8vIFxuICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgLmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIGQgPT4gZC5kaXNoX2NvdW50KV0pXG4gICAgICAgIC5yYW5nZShbMCwgd2lkdGhdKTtcblxuICAgICAgICBjb25zdCB4QXhpcyA9IGQzLmF4aXNCb3R0b20oeFNjYWxlKTtcbiAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUJhbmQoKVxuICAgICAgICAuZG9tYWluKGRhdGEubWFwKGQgPT4gZC5sb2NhdGlvbikpXG4gICAgICAgIC5yYW5nZShbMCwgaW5uZXJIZWlnaHRdKVxuICAgICAgICAucGFkZGluZygwLjEpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHlTY2FsZS5kb21haW4oKSlcbiAgICAgY29uc3QgeUF4aXMgPSBkMy5heGlzTGVmdCh5U2NhbGUpO1xuICAgIFxuICAgIGxldCBzdmcgPSBkMy5zZWxlY3QoXCIuYmFyLWNoYXJ0XCIpO1xuICAgIFxuICAgIFxuXG4gICAgaWYgKGNoYXJ0KXtcbiAgICAgICAgc3ZnLnNlbGVjdCgnZycpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGcgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCAke21hcmdpbi50b3B9KWApO1xuXG4gICAgZy5hcHBlbmQoJ2cnKS5jYWxsKHlBeGlzKVxuICAgIC5zZWxlY3QoJy5kb21haW4nLCcudGljayBsaW5lJylcbiAgICAucmVtb3ZlKCk7XG4gICAgZy5hcHBlbmQoXCJnXCIpLmNhbGwoeEF4aXMpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsICR7aW5uZXJIZWlnaHR9KWApXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneScsIDUwKVxuICAgICAgICAuYXR0cigneCcsIHdpZHRoLyAyKVxuICAgICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAgIC5hdHRyKCdmb250LXNpemUnLCAyMClcbiAgICAgICAgLnRleHQoJ051bWJlciBvZiBEaXNoZXMnKTtcbiAgICAgICAgXG5cbiAgICBjaGFydCA9IHRydWU7XG4gICAgIGcuc2VsZWN0QWxsKFwicmVjdFwiKS5kYXRhKGRhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgZCA9PiB5U2NhbGUoZC5sb2NhdGlvbikpXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIGQgPT4geFNjYWxlKGQuZGlzaF9jb3VudCkpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCB5U2NhbGUuYmFuZHdpZHRoKCkpO1xuICAgICBnLmFwcGVuZCgndGV4dCcpXG4gICAgIC50ZXh0KFwiTnVtYmVyIG9mIERpc2hlcyBzZXZlcmVkIGluIE5ldyBZb3JrIEhvdGVsc1wiKTsgICBcblxufVxuICAgZnVuY3Rpb24gdGVzdGluZzEoKXtcblxuICAgICAgIGxldCBtZW51X2RhdGExID0gW11cbiAgICAgICAgIFxuICAgICAgIG1lbnVfZGF0YTEgPSBtZW51X2RhdGEuZmlsdGVyKGRhdHVtID0+IHtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VJbnQoZGF0dW0uZGF0ZSwgMTApIDwgMTkwMCAmJiBkYXR1bS5wbGFjZSA9PT0gXCJORVcgWU9SS1wiKTtcbiAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgIFxuXG4gICAgICAgICAgICAgcmVuZGVyKG1lbnVfZGF0YTEuc2xpY2UoMCwgMTApKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobWVudV9kYXRhLnNsaWNlKDAsMTApWzBdLmRpc2hfY291bnQpXG4gICAgICBcbiAgIH1cblxuZnVuY3Rpb24gdGVzdGluZzIoKSB7XG5cbiAgICBsZXQgbWVudV9kYXRhMiA9IFtdXG4gICBcbiAgICBtZW51X2RhdGEyID0gbWVudV9kYXRhLmZpbHRlcihkYXR1bSA9PiB7XG5cbiAgICAgICAgICAgIHJldHVybiAocGFyc2VJbnQoZGF0dW0uZGF0ZSwgMTApID4gMTkwMCAmJiBwYXJzZUludChkYXR1bS5kYXRlLCAxMCkgPCAxOTUwICAmJiBkYXR1bS5wbGFjZSA9PT0gXCJORVcgWU9SS1wiKTtcblxuICAgICAgICB9KVxuICAgICAgIFxuICAgICAgICByZW5kZXIobWVudV9kYXRhMi5zbGljZSgwLCAxMCkpXG4gICAgICAgIC8vY29uc29sZS5sb2cobWVudV9kYXRhLnNsaWNlKDAsMTApKVxuICAgXG59XG5cbmZ1bmN0aW9uIHRlc3RpbmczKCkge1xuXG4gICAgbGV0IG1lbnVfZGF0YTMgPSBbXVxuICAgIFxuICAgICAgICBtZW51X2RhdGEzID0gbWVudV9kYXRhLmZpbHRlcihkYXR1bSA9PiB7XG5cbiAgICAgICAgICAgIHJldHVybiAocGFyc2VJbnQoZGF0dW0uZGF0ZSwgMTApID4gMTk1MCAmJiBwYXJzZUludChkYXR1bS5kYXRlLCAxMCkgPCAxOTgwICk7IC8vIG5vdCBpbiBuZXcgeW9ya1xuXG4gICAgICAgIH0pXG4gICAgICAgXG4gICAgICAgIHJlbmRlcihtZW51X2RhdGEzLnNsaWNlKDAsIDEwKSlcbiAgICAgICAgLy8gY29uc29sZS5sb2cobWVudV9kYXRhLnNsaWNlKDAsMTApKVxuICAgXG59XG5cbmZ1bmN0aW9uIHRlc3Rpbmc0KCkge1xuXG4gICAgbGV0IG1lbnVfZGF0YTQgPSBbXVxuICAgIFxuICAgIG1lbnVfZGF0YTQgPSBtZW51X2RhdGEuZmlsdGVyKGRhdHVtID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIChwYXJzZUludChkYXR1bS5kYXRlLCAxMCkgPiAyMDAwICk7Ly8gbm90IGluIG5ldyB5b3JrXG5cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHJlbmRlcihtZW51X2RhdGE0LnNsaWNlKDAsIDEwKSlcbiAgICAgICAgLy8gY29uc29sZS5sb2cobWVudV9kYXRhLnNsaWNlKDAsMTApKVxuICAgXG59XG5cblxuXG4vLyB0ZXN0aW5nc1xuXG4iXSwic291cmNlUm9vdCI6IiJ9