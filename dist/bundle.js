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

            pos[1] += i * 10;
        }
        return "translate(" + pos + ")";
    }).text(function (d) {
        return d.data.name.slice(0, 30);
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
            pos[1] += i * 10;
        }

        return [label.centroid(d), [outer[0], pos[1]], pos];
    }).style("fill", "none").attr("stroke", function (d, i) {
        return color(i);
    }).style("stroke-width", "1px");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiXSwibmFtZXMiOlsic3ZnV2lkdGgiLCJzdmdIZWlnaHQiLCJiYXJQYWRkaW5nIiwicmFkaXVzIiwiTWF0aCIsIm1pbiIsInBpZUNoYXJ0IiwiZHJhd1BpZUNoYXJ0IiwiZGF0YSIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXR0ciIsInJlbW92ZSIsImciLCJhcHBlbmQiLCJjb2xvciIsInNjYWxlT3JkaW5hbCIsInBpZSIsInNvcnQiLCJ2YWx1ZSIsImQiLCJtZW51c19hcHBlYXJlZCIsInBhdGgiLCJhcmMiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwib3V0ZXJBcmMiLCJsYWJlbCIsInNlbGVjdEFsbCIsImVudGVyIiwibmFtZSIsImkiLCJwb3MiLCJjZW50cm9pZCIsIm1pZEFuZ2xlIiwiUEkiLCJwZXJjZW50IiwiZW5kQW5nbGUiLCJzdGFydEFuZ2xlIiwidGV4dCIsInNsaWNlIiwiYWMiLCJwb2x5bGluZSIsIm91dGVyIiwic3R5bGUiLCJkaXNoX3Rlc3RpbmcxIiwiZGlzaF9kYXRhMSIsImRpc2hfZGF0YSIsImZpbHRlciIsInBhcnNlSW50IiwiZGF0dW0iLCJmaXJzdF9hcHBlYXJlZCIsImRpc2hfdGVzdGluZzIiLCJkaXNoX2RhdGEyIiwiZGlzaF90ZXN0aW5nMyIsImRpc2hfZGF0YTMiLCJkaXNoX3Rlc3Rpbmc0IiwiZGlzaF9kYXRhNCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlc3RpbmcxIiwidHlwaWNhbCIsImdldEVsZW1lbnRCeUlkIiwib25jbGljayIsInJlZ3VsYXIiLCJ0ZXN0aW5nMiIsInNwZWNpYWwiLCJ0ZXN0aW5nMyIsIm5ld2FyaSIsInRlc3Rpbmc0IiwiY2hhcnQiLCJyZW5kZXIiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImlubmVySGVpZ2h0IiwieFNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJtYXgiLCJkaXNoX2NvdW50IiwicmFuZ2UiLCJ4QXhpcyIsImF4aXNCb3R0b20iLCJ5U2NhbGUiLCJzY2FsZUJhbmQiLCJtYXAiLCJsb2NhdGlvbiIsInBhZGRpbmciLCJ5QXhpcyIsImF4aXNMZWZ0IiwiY2FsbCIsImJhbmR3aWR0aCIsIm1lbnVfZGF0YTEiLCJtZW51X2RhdGEiLCJkYXRlIiwicGxhY2UiLCJtZW51X2RhdGEyIiwibWVudV9kYXRhMyIsIm1lbnVfZGF0YTQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQSxJQUFJQSxXQUFXLEdBQWY7QUFBQSxJQUFvQkMsWUFBWSxHQUFoQztBQUFBLElBQXFDQyxhQUFhLENBQWxEO0FBQUEsSUFBcURDLFNBQVNDLEtBQUtDLEdBQUwsQ0FBU0wsUUFBVCxFQUFtQkMsU0FBbkIsSUFBZ0MsQ0FBOUY7O0FBRUEsSUFBSUssaUJBQUo7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQkMsSUFBdEIsRUFBMkI7O0FBRXZCLFFBQUlDLE1BQU1DLEdBQUdDLE1BQUgsQ0FBVSxZQUFWLEVBQ0xDLElBREssQ0FDQSxPQURBLEVBQ1NaLFFBRFQsRUFFTFksSUFGSyxDQUVBLFFBRkEsRUFFVVgsU0FGVixDQUFWOztBQUlBLFFBQUlLLFFBQUosRUFBYztBQUFDRyxZQUFJRSxNQUFKLENBQVcsR0FBWCxFQUFnQkUsTUFBaEI7QUFBMEI7O0FBRXBDLFFBQUlDLElBQUlMLElBQUlNLE1BQUosQ0FBVyxHQUFYLEVBQ0pILElBREksQ0FDQyxXQURELEVBQ2MsZUFBZVosV0FBVyxDQUExQixHQUE4QixHQUE5QixHQUFvQ0MsWUFBVSxDQUE5QyxHQUFrRCxHQURoRSxDQUFSOztBQUdKSyxlQUFXLElBQVg7O0FBRUQsUUFBSVUsUUFBUU4sR0FBR08sWUFBSCxDQUFnQixDQUFDLFNBQUQsRUFDeEIsU0FEd0IsRUFFeEIsU0FGd0IsRUFHeEIsU0FId0IsRUFJeEIsU0FKd0IsRUFLeEIsU0FMd0IsRUFNeEIsU0FOd0IsRUFPeEIsU0FQd0IsRUFReEIsT0FSd0IsRUFTeEIsU0FUd0IsRUFVeEIsU0FWd0IsRUFXeEIsU0FYd0IsQ0FBaEIsQ0FBWjs7QUFhQSxRQUFJQyxNQUFNUixHQUFHUSxHQUFILEdBQ0xDLElBREssQ0FDQSxJQURBLEVBRUxDLEtBRkssQ0FFQyxVQUFVQyxDQUFWLEVBQWE7QUFBRSxlQUFPQSxFQUFFQyxjQUFUO0FBQTBCLEtBRjFDLENBQVY7O0FBS0EsUUFBSUMsT0FBT2IsR0FBR2MsR0FBSCxHQUNOQyxXQURNLENBQ010QixTQUFTLEVBRGYsRUFFTnVCLFdBRk0sQ0FFTSxDQUZOLENBQVg7O0FBSUEsUUFBSUMsV0FBV2pCLEdBQUdjLEdBQUgsR0FDVkUsV0FEVSxDQUNFdkIsU0FBUyxHQURYLEVBRVZzQixXQUZVLENBRUV0QixTQUFTLEdBRlgsQ0FBZjs7QUFLQSxRQUFJeUIsUUFBUWxCLEdBQUdjLEdBQUgsR0FDUEMsV0FETyxDQUNLdEIsU0FBUyxFQURkLEVBRVB1QixXQUZPLENBRUt2QixTQUFTLEVBRmQsQ0FBWjs7QUFJQSxRQUFJcUIsTUFBTVYsRUFBRWUsU0FBRixDQUFZLE1BQVosRUFDTHJCLElBREssQ0FDQVUsSUFBSVYsSUFBSixDQURBLEVBRUxzQixLQUZLLEdBRUdmLE1BRkgsQ0FFVSxHQUZWLEVBR0xILElBSEssQ0FHQSxPQUhBLEVBR1MsS0FIVCxDQUFWOztBQU9BWSxRQUFJVCxNQUFKLENBQVcsTUFBWCxFQUNLSCxJQURMLENBQ1UsR0FEVixFQUNlVyxJQURmLEVBRUtYLElBRkwsQ0FFVSxNQUZWLEVBRWtCLFVBQVVTLENBQVYsRUFBYTtBQUFFLGVBQU9MLE1BQU1LLEVBQUViLElBQUYsQ0FBT3VCLElBQWIsQ0FBUDtBQUE0QixLQUY3RDs7QUFLQVAsUUFBSVQsTUFBSixDQUFXLE1BQVgsRUFFS0gsSUFGTCxDQUVVLFdBRlYsRUFFdUIsVUFBVVMsQ0FBVixFQUFhVyxDQUFiLEVBQWdCO0FBQy9CLFlBQUlDLE1BQU1OLFNBQVNPLFFBQVQsQ0FBa0JiLENBQWxCLENBQVY7QUFDQVksWUFBSSxDQUFKLElBQVM5QixVQUFVZ0MsU0FBU2QsQ0FBVCxJQUFjakIsS0FBS2dDLEVBQW5CLEdBQXdCLEdBQXhCLEdBQThCLENBQUMsR0FBekMsQ0FBVDs7QUFHQSxZQUFJQyxVQUFVLENBQUNoQixFQUFFaUIsUUFBRixHQUFhakIsRUFBRWtCLFVBQWhCLEtBQStCLElBQUluQyxLQUFLZ0MsRUFBeEMsSUFBOEMsR0FBNUQ7QUFDQSxZQUFJQyxVQUFVLENBQWQsRUFBaUI7O0FBRWJKLGdCQUFJLENBQUosS0FBVUQsSUFBSSxFQUFkO0FBQ0g7QUFDRCxlQUFPLGVBQWVDLEdBQWYsR0FBcUIsR0FBNUI7QUFDSCxLQWJMLEVBY0tPLElBZEwsQ0FjVSxVQUFVbkIsQ0FBVixFQUFhO0FBQUUsZUFBT0EsRUFBRWIsSUFBRixDQUFPdUIsSUFBUCxDQUFZVSxLQUFaLENBQWtCLENBQWxCLEVBQXFCLEVBQXJCLENBQVA7QUFBa0MsS0FkM0QsRUFlSzdCLElBZkwsQ0FlVSxNQWZWLEVBZWtCLFVBQVVTLENBQVYsRUFBYVcsQ0FBYixFQUFnQjtBQUFFLGVBQU9oQixNQUFNZ0IsQ0FBTixDQUFQO0FBQWtCLEtBZnRELEVBZ0JLcEIsSUFoQkwsQ0FnQlUsYUFoQlYsRUFnQnlCLE1BaEJ6QixFQWlCS0EsSUFqQkwsQ0FpQlUsSUFqQlYsRUFpQmdCLFVBQVVTLENBQVYsRUFBYTtBQUNyQixZQUFJcUIsS0FBS1AsU0FBU2QsQ0FBVCxJQUFjakIsS0FBS2dDLEVBQW5CLEdBQXdCLENBQXhCLEdBQTRCLENBQUMsRUFBdEM7QUFDQSxlQUFPTSxFQUFQO0FBQ0gsS0FwQkwsRUFxQks5QixJQXJCTCxDQXFCVSxJQXJCVixFQXFCZ0IsQ0FyQmhCOztBQXdCQSxhQUFTdUIsUUFBVCxDQUFrQmQsQ0FBbEIsRUFBcUI7QUFDakIsZUFBT0EsRUFBRWtCLFVBQUYsR0FBZSxDQUFDbEIsRUFBRWlCLFFBQUYsR0FBYWpCLEVBQUVrQixVQUFoQixJQUE4QixDQUFwRDtBQUNIOztBQUVELFFBQUlJLFdBQVc3QixFQUFFZSxTQUFGLENBQVksVUFBWixFQUNWckIsSUFEVSxDQUNMVSxJQUFJVixJQUFKLENBREssRUFDTSxVQUFVYSxDQUFWLEVBQWE7QUFDMUIsZUFBT0EsRUFBRWIsSUFBRixDQUFPdUIsSUFBZDtBQUNILEtBSFUsRUFJVkQsS0FKVSxHQUtWZixNQUxVLENBS0gsVUFMRyxFQU1WSCxJQU5VLENBTUwsUUFOSyxFQU1LLFVBQVVTLENBQVYsRUFBYVcsQ0FBYixFQUFnQjtBQUM1QixZQUFJQyxNQUFNTixTQUFTTyxRQUFULENBQWtCYixDQUFsQixDQUFWO0FBQ0FZLFlBQUksQ0FBSixJQUFTOUIsU0FBUyxJQUFULElBQWlCZ0MsU0FBU2QsQ0FBVCxJQUFjakIsS0FBS2dDLEVBQW5CLEdBQXdCLENBQXhCLEdBQTRCLENBQUMsQ0FBOUMsQ0FBVDtBQUNBLFlBQUlRLFFBQVFqQixTQUFTTyxRQUFULENBQWtCYixDQUFsQixDQUFaO0FBQ0EsWUFBSWdCLFVBQVUsQ0FBQ2hCLEVBQUVpQixRQUFGLEdBQWFqQixFQUFFa0IsVUFBaEIsS0FBK0IsSUFBSW5DLEtBQUtnQyxFQUF4QyxJQUE4QyxHQUE1RDtBQUNBLFlBQUlDLFVBQVUsQ0FBZCxFQUFpQjtBQUNiTyxrQkFBTSxDQUFOO0FBQ0FYLGdCQUFJLENBQUosS0FBVUQsSUFBSSxFQUFkO0FBQ0g7O0FBRUQsZUFBTyxDQUFDSixNQUFNTSxRQUFOLENBQWViLENBQWYsQ0FBRCxFQUFvQixDQUFDdUIsTUFBTSxDQUFOLENBQUQsRUFBV1gsSUFBSSxDQUFKLENBQVgsQ0FBcEIsRUFBd0NBLEdBQXhDLENBQVA7QUFDSCxLQWpCVSxFQWtCVlksS0FsQlUsQ0FrQkosTUFsQkksRUFrQkksTUFsQkosRUFvQlZqQyxJQXBCVSxDQW9CTCxRQXBCSyxFQW9CSyxVQUFVUyxDQUFWLEVBQWFXLENBQWIsRUFBZ0I7QUFBRSxlQUFPaEIsTUFBTWdCLENBQU4sQ0FBUDtBQUFrQixLQXBCekMsRUFxQlZhLEtBckJVLENBcUJKLGNBckJJLEVBcUJZLEtBckJaLENBQWY7QUEwQkg7O0FBRUEsU0FBU0MsYUFBVCxHQUF5Qjs7QUFFdEIsUUFBSUMsYUFBYSxFQUFqQjs7QUFFQ0EsaUJBQWFDLFVBQVVDLE1BQVYsQ0FBaUIsaUJBQVM7O0FBRWhDLGVBQVFDLFNBQVNDLE1BQU1DLGNBQWYsRUFBK0IsRUFBL0IsSUFBcUMsSUFBN0M7QUFFSCxLQUpTLENBQWI7O0FBTUc3QyxpQkFBYXdDLFdBQVdOLEtBQVgsQ0FBaUIsQ0FBakIsRUFBb0IsRUFBcEIsQ0FBYjtBQUNBO0FBRVA7O0FBRUQsU0FBU1ksYUFBVCxHQUF5Qjs7QUFFckIsUUFBSUMsYUFBYSxFQUFqQjs7QUFFQUEsaUJBQWFOLFVBQVVDLE1BQVYsQ0FBaUIsaUJBQVM7O0FBRS9CLGVBQVFDLFNBQVNDLE1BQU1DLGNBQWYsRUFBK0IsRUFBL0IsSUFBcUMsSUFBckMsSUFBNkNGLFNBQVNDLE1BQU1DLGNBQWYsRUFBK0IsRUFBL0IsSUFBcUMsSUFBMUY7QUFFSCxLQUpRLENBQWI7O0FBTUk3QyxpQkFBYStDLFdBQVdiLEtBQVgsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBYjtBQUNBO0FBRVA7O0FBRUQsU0FBU2MsYUFBVCxHQUF5Qjs7QUFFckIsUUFBSUMsYUFBYSxFQUFqQjs7QUFFQUEsaUJBQWFSLFVBQVVDLE1BQVYsQ0FBaUIsaUJBQVM7O0FBRS9CLGVBQVFDLFNBQVNDLE1BQU1DLGNBQWYsRUFBK0IsRUFBL0IsSUFBcUMsSUFBckMsSUFBNkNGLFNBQVNDLE1BQU1DLGNBQWYsRUFBK0IsRUFBL0IsSUFBcUMsSUFBMUY7QUFFSCxLQUpRLENBQWI7O0FBTUk3QyxpQkFBYWlELFdBQVdmLEtBQVgsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBYjtBQUNBO0FBRVA7O0FBRUQsU0FBU2dCLGFBQVQsR0FBeUI7O0FBRXJCLFFBQUlDLGFBQWEsRUFBakI7O0FBRUlBLGlCQUFhVixVQUFVQyxNQUFWLENBQWlCLGlCQUFTOztBQUVuQyxlQUFRQyxTQUFTQyxNQUFNQyxjQUFmLEVBQStCLEVBQS9CLElBQXFDLElBQTdDO0FBRUgsS0FKWSxDQUFiOztBQU1BN0MsaUJBQWFtRCxXQUFXakIsS0FBWCxDQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUFiO0FBQ0E7QUFFUDs7QUFHR2tCLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQzlDQztBQUNBZjtBQUNGOztBQUVBLFFBQU1nQixVQUFVSCxTQUFTSSxjQUFULENBQXdCLFNBQXhCLENBQWhCO0FBQ0FELFlBQVFFLE9BQVIsR0FBa0IsWUFBTTtBQUNwQkg7QUFDQWY7QUFDRDtBQUNGLEtBSkQ7QUFLQSxRQUFNbUIsVUFBVU4sU0FBU0ksY0FBVCxDQUF3QixTQUF4QixDQUFoQjtBQUNBRSxZQUFRRCxPQUFSLEdBQWtCLFlBQU07O0FBRXBCRTtBQUNBYjtBQUNEO0FBQ0YsS0FMRDtBQU1BLFFBQU1jLFVBQVVSLFNBQVNJLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBaEI7QUFDQUksWUFBUUgsT0FBUixHQUFrQixZQUFNO0FBQ3BCSTtBQUNBYjtBQUNEO0FBQ0YsS0FKRDtBQUtBLFFBQU1jLFNBQVNWLFNBQVNJLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBTSxXQUFPTCxPQUFQLEdBQWlCLFlBQU07QUFDbkJNO0FBQ0FiO0FBQ0Q7QUFDRixLQUpEO0FBS0gsQ0E5QkQ7O0FBaUNKLElBQUljLGNBQUo7O0FBRUEsSUFBTUMsU0FBUyxTQUFUQSxNQUFTLE9BQVE7O0FBRW5COztBQUVBLFFBQU1DLFFBQVEsR0FBZDtBQUNBLFFBQU1DLFNBQVMsR0FBZjtBQUNBLFFBQU1DLFNBQVMsRUFBQ0MsS0FBSyxFQUFOLEVBQVVDLE9BQU8sRUFBakIsRUFBcUJDLFFBQVEsRUFBN0IsRUFBaUNDLE1BQU0sR0FBdkMsRUFBZjtBQUNEO0FBQ0MsUUFBTUMsY0FBY04sU0FBU0MsT0FBT0MsR0FBaEIsR0FBc0JELE9BQU9HLE1BQWpEO0FBQ0E7QUFDQSxRQUFNRyxTQUFTdkUsR0FBR3dFLFdBQUgsR0FDVkMsTUFEVSxDQUNILENBQUMsQ0FBRCxFQUFJekUsR0FBRzBFLEdBQUgsQ0FBTzVFLElBQVAsRUFBYTtBQUFBLGVBQUthLEVBQUVnRSxVQUFQO0FBQUEsS0FBYixDQUFKLENBREcsRUFFVkMsS0FGVSxDQUVKLENBQUMsQ0FBRCxFQUFJYixLQUFKLENBRkksQ0FBZjs7QUFJSSxRQUFNYyxRQUFRN0UsR0FBRzhFLFVBQUgsQ0FBY1AsTUFBZCxDQUFkO0FBQ0osUUFBTVEsU0FBUy9FLEdBQUdnRixTQUFILEdBQ1ZQLE1BRFUsQ0FDSDNFLEtBQUttRixHQUFMLENBQVM7QUFBQSxlQUFLdEUsRUFBRXVFLFFBQVA7QUFBQSxLQUFULENBREcsRUFFVk4sS0FGVSxDQUVKLENBQUMsQ0FBRCxFQUFJTixXQUFKLENBRkksRUFHVmEsT0FIVSxDQUdGLEdBSEUsQ0FBZjtBQUlJO0FBQ0gsUUFBTUMsUUFBUXBGLEdBQUdxRixRQUFILENBQVlOLE1BQVosQ0FBZDs7QUFFRCxRQUFJaEYsTUFBTUMsR0FBR0MsTUFBSCxDQUFVLFlBQVYsQ0FBVjs7QUFJQSxRQUFJNEQsS0FBSixFQUFVO0FBQ045RCxZQUFJRSxNQUFKLENBQVcsR0FBWCxFQUFnQkUsTUFBaEI7QUFDSDs7QUFFRCxRQUFNQyxJQUFJTCxJQUFJTSxNQUFKLENBQVcsR0FBWCxFQUNUSCxJQURTLENBQ0osV0FESSxpQkFDc0IrRCxPQUFPSSxJQUQ3QixVQUNzQ0osT0FBT0MsR0FEN0MsT0FBVjs7QUFHQTlELE1BQUVDLE1BQUYsQ0FBUyxHQUFULEVBQWNpRixJQUFkLENBQW1CRixLQUFuQixFQUNDbkYsTUFERCxDQUNRLFNBRFIsRUFDa0IsWUFEbEIsRUFFQ0UsTUFGRDtBQUdBQyxNQUFFQyxNQUFGLENBQVMsR0FBVCxFQUFjaUYsSUFBZCxDQUFtQlQsS0FBbkIsRUFDSzNFLElBREwsQ0FDVSxXQURWLG9CQUN1Q29FLFdBRHZDLFFBRUtqRSxNQUZMLENBRVksTUFGWixFQUdLSCxJQUhMLENBR1UsR0FIVixFQUdlLEVBSGYsRUFJS0EsSUFKTCxDQUlVLEdBSlYsRUFJZTZELFFBQU8sQ0FKdEIsRUFLSzdELElBTEwsQ0FLVSxNQUxWLEVBS2tCLE9BTGxCLEVBTUtBLElBTkwsQ0FNVSxXQU5WLEVBTXVCLEVBTnZCLEVBT0s0QixJQVBMLENBT1Usa0JBUFY7O0FBVUErQixZQUFRLElBQVI7QUFDQ3pELE1BQUVlLFNBQUYsQ0FBWSxNQUFaLEVBQW9CckIsSUFBcEIsQ0FBeUJBLElBQXpCLEVBQ0lzQixLQURKLEdBRUlmLE1BRkosQ0FFVyxNQUZYLEVBR1FILElBSFIsQ0FHYSxHQUhiLEVBR2tCO0FBQUEsZUFBSzZFLE9BQU9wRSxFQUFFdUUsUUFBVCxDQUFMO0FBQUEsS0FIbEIsRUFJUWhGLElBSlIsQ0FJYSxPQUpiLEVBSXNCO0FBQUEsZUFBS3FFLE9BQU81RCxFQUFFZ0UsVUFBVCxDQUFMO0FBQUEsS0FKdEIsRUFLUXpFLElBTFIsQ0FLYSxRQUxiLEVBS3VCNkUsT0FBT1EsU0FBUCxFQUx2QjtBQU1BbkYsTUFBRUMsTUFBRixDQUFTLE1BQVQsRUFDQ3lCLElBREQsQ0FDTSw2Q0FETjtBQUdKLENBeEREO0FBeURHLFNBQVNxQixRQUFULEdBQW1COztBQUVmLFFBQUlxQyxhQUFhLEVBQWpCOztBQUVBQSxpQkFBYUMsVUFBVWxELE1BQVYsQ0FBaUIsaUJBQVM7O0FBRTlCLGVBQVFDLFNBQVNDLE1BQU1pRCxJQUFmLEVBQXFCLEVBQXJCLElBQTJCLElBQTNCLElBQW1DakQsTUFBTWtELEtBQU4sS0FBZ0IsVUFBM0Q7QUFFSCxLQUpPLENBQWI7O0FBT003QixXQUFPMEIsV0FBV3pELEtBQVgsQ0FBaUIsQ0FBakIsRUFBb0IsRUFBcEIsQ0FBUDtBQUNEO0FBRVI7O0FBRUosU0FBU3lCLFFBQVQsR0FBb0I7O0FBRWhCLFFBQUlvQyxhQUFhLEVBQWpCOztBQUVBQSxpQkFBYUgsVUFBVWxELE1BQVYsQ0FBaUIsaUJBQVM7O0FBRS9CLGVBQVFDLFNBQVNDLE1BQU1pRCxJQUFmLEVBQXFCLEVBQXJCLElBQTJCLElBQTNCLElBQW1DbEQsU0FBU0MsTUFBTWlELElBQWYsRUFBcUIsRUFBckIsSUFBMkIsSUFBOUQsSUFBdUVqRCxNQUFNa0QsS0FBTixLQUFnQixVQUEvRjtBQUVILEtBSlEsQ0FBYjs7QUFNSTdCLFdBQU84QixXQUFXN0QsS0FBWCxDQUFpQixDQUFqQixFQUFvQixFQUFwQixDQUFQO0FBQ0E7QUFFUDs7QUFFRCxTQUFTMkIsUUFBVCxHQUFvQjs7QUFFaEIsUUFBSW1DLGFBQWEsRUFBakI7O0FBRUlBLGlCQUFhSixVQUFVbEQsTUFBVixDQUFpQixpQkFBUzs7QUFFbkMsZUFBUUMsU0FBU0MsTUFBTWlELElBQWYsRUFBcUIsRUFBckIsSUFBMkIsSUFBM0IsSUFBbUNsRCxTQUFTQyxNQUFNaUQsSUFBZixFQUFxQixFQUFyQixJQUEyQixJQUF0RSxDQUZtQyxDQUUyQztBQUVqRixLQUpZLENBQWI7O0FBTUE1QixXQUFPK0IsV0FBVzlELEtBQVgsQ0FBaUIsQ0FBakIsRUFBb0IsRUFBcEIsQ0FBUDtBQUNBO0FBRVA7O0FBRUQsU0FBUzZCLFFBQVQsR0FBb0I7O0FBRWhCLFFBQUlrQyxhQUFhLEVBQWpCOztBQUVBQSxpQkFBYUwsVUFBVWxELE1BQVYsQ0FBaUIsaUJBQVM7O0FBRS9CLGVBQVFDLFNBQVNDLE1BQU1pRCxJQUFmLEVBQXFCLEVBQXJCLElBQTJCLElBQW5DLENBRitCLENBRVc7QUFFN0MsS0FKUSxDQUFiOztBQU1JNUIsV0FBT2dDLFdBQVcvRCxLQUFYLENBQWlCLENBQWpCLEVBQW9CLEVBQXBCLENBQVA7QUFDQTtBQUVQOztBQUlELFciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9pbmRleC5qc1wiKTtcbiIsIlxubGV0IHN2Z1dpZHRoID0gNTAwLCBzdmdIZWlnaHQgPSAzMDAsIGJhclBhZGRpbmcgPSA1LCByYWRpdXMgPSBNYXRoLm1pbihzdmdXaWR0aCwgc3ZnSGVpZ2h0KSAvIDIgO1xuXG5sZXQgcGllQ2hhcnQ7XG5cbmZ1bmN0aW9uIGRyYXdQaWVDaGFydChkYXRhKXtcbiAgIFxuICAgIHZhciBzdmcgPSBkMy5zZWxlY3QoJy5waWVfY2hhcnQnKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHN2Z1dpZHRoKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBzdmdIZWlnaHQpO1xuXG4gICAgaWYgKHBpZUNoYXJ0KSB7c3ZnLnNlbGVjdCgnZycpLnJlbW92ZSgpIH1cbiAgICAgICBcbiAgICAgICAgIHZhciBnID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHN2Z1dpZHRoIC8gMiArIFwiLFwiICsgc3ZnSGVpZ2h0LzIgKyBcIilcIik7XG5cbiAgICAgcGllQ2hhcnQgPSB0cnVlO1xuICAgICAgICBcbiAgICB2YXIgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoW1wiIzk4YWJjNVwiLFxuICAgICAgICBcIiM4YTg5YTZcIixcbiAgICAgICAgXCIjN2I2ODg4XCIsXG4gICAgICAgIFwiIzZiNDg2YlwiLFxuICAgICAgICBcIiNhMDVkNTZcIixcbiAgICAgICAgXCIjZDA3NDNjXCIsXG4gICAgICAgIFwiI2ZmOGMwMFwiLFxuICAgICAgICBcIiNlMzRkMDFcIixcbiAgICAgICAgXCJibGFja1wiLFxuICAgICAgICBcIiMzZTdlY2FcIixcbiAgICAgICAgXCIjYWEwMDkyXCIsXG4gICAgICAgIFwiI2IzMmU0ZlwiXSk7XG5cbiAgICB2YXIgcGllID0gZDMucGllKClcbiAgICAgICAgLnNvcnQobnVsbClcbiAgICAgICAgLnZhbHVlKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm1lbnVzX2FwcGVhcmVkOyB9KTtcblxuICBcbiAgICB2YXIgcGF0aCA9IGQzLmFyYygpXG4gICAgICAgIC5vdXRlclJhZGl1cyhyYWRpdXMgLSAxMClcbiAgICAgICAgLmlubmVyUmFkaXVzKDApO1xuXG4gICAgdmFyIG91dGVyQXJjID0gZDMuYXJjKClcbiAgICAgICAgLmlubmVyUmFkaXVzKHJhZGl1cyAqIDAuOSlcbiAgICAgICAgLm91dGVyUmFkaXVzKHJhZGl1cyAqIDAuOSk7XG5cblxuICAgIHZhciBsYWJlbCA9IGQzLmFyYygpXG4gICAgICAgIC5vdXRlclJhZGl1cyhyYWRpdXMgLSA0MClcbiAgICAgICAgLmlubmVyUmFkaXVzKHJhZGl1cyAtIDQwKTtcblxuICAgIHZhciBhcmMgPSBnLnNlbGVjdEFsbChcIi5hcmNcIilcbiAgICAgICAgLmRhdGEocGllKGRhdGEpKVxuICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJhcmNcIik7XG5cblxuICAgIFxuICAgIGFyYy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgIC5hdHRyKFwiZFwiLCBwYXRoKVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGNvbG9yKGQuZGF0YS5uYW1lKTsgfSk7XG5cblxuICAgIGFyYy5hcHBlbmQoXCJ0ZXh0XCIpXG5cbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgIHZhciBwb3MgPSBvdXRlckFyYy5jZW50cm9pZChkKTtcbiAgICAgICAgICAgIHBvc1swXSA9IHJhZGl1cyAqIChtaWRBbmdsZShkKSA8IE1hdGguUEkgPyAxLjEgOiAtMS4xKTtcblxuXG4gICAgICAgICAgICB2YXIgcGVyY2VudCA9IChkLmVuZEFuZ2xlIC0gZC5zdGFydEFuZ2xlKSAvICgyICogTWF0aC5QSSkgKiAxMDBcbiAgICAgICAgICAgIGlmIChwZXJjZW50IDwgMykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHBvc1sxXSArPSBpICogMTBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIHBvcyArIFwiKVwiO1xuICAgICAgICB9KVxuICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5kYXRhLm5hbWUuc2xpY2UoMCwgMzApOyB9KVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24gKGQsIGkpIHsgcmV0dXJuIGNvbG9yKGkpOyB9KVxuICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsICdsZWZ0JylcbiAgICAgICAgLmF0dHIoXCJkeFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgdmFyIGFjID0gbWlkQW5nbGUoZCkgPCBNYXRoLlBJID8gMCA6IC01MFxuICAgICAgICAgICAgcmV0dXJuIGFjXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiZHlcIiwgNSlcblxuXG4gICAgZnVuY3Rpb24gbWlkQW5nbGUoZCkge1xuICAgICAgICByZXR1cm4gZC5zdGFydEFuZ2xlICsgKGQuZW5kQW5nbGUgLSBkLnN0YXJ0QW5nbGUpIC8gMjtcbiAgICB9XG5cbiAgICB2YXIgcG9seWxpbmUgPSBnLnNlbGVjdEFsbChcInBvbHlsaW5lXCIpXG4gICAgICAgIC5kYXRhKHBpZShkYXRhKSwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLmRhdGEubmFtZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInBvbHlsaW5lXCIpXG4gICAgICAgIC5hdHRyKFwicG9pbnRzXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICB2YXIgcG9zID0gb3V0ZXJBcmMuY2VudHJvaWQoZCk7XG4gICAgICAgICAgICBwb3NbMF0gPSByYWRpdXMgKiAwLjk1ICogKG1pZEFuZ2xlKGQpIDwgTWF0aC5QSSA/IDEgOiAtMSk7XG4gICAgICAgICAgICB2YXIgb3V0ZXIgPSBvdXRlckFyYy5jZW50cm9pZChkKVxuICAgICAgICAgICAgdmFyIHBlcmNlbnQgPSAoZC5lbmRBbmdsZSAtIGQuc3RhcnRBbmdsZSkgLyAoMiAqIE1hdGguUEkpICogMTAwXG4gICAgICAgICAgICBpZiAocGVyY2VudCA8IDMpIHtcbiAgICAgICAgICAgICAgICBvdXRlclsxXVxuICAgICAgICAgICAgICAgIHBvc1sxXSArPSBpICogMTBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIFtsYWJlbC5jZW50cm9pZChkKSwgW291dGVyWzBdLCBwb3NbMV1dLCBwb3NdO1xuICAgICAgICB9KVxuICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgICBcbiAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgZnVuY3Rpb24gKGQsIGkpIHsgcmV0dXJuIGNvbG9yKGkpOyB9KVxuICAgICAgICAuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgXCIxcHhcIik7XG4gICAgICAgXG5cbiAgICBcblxufVxuXG4gZnVuY3Rpb24gZGlzaF90ZXN0aW5nMSgpIHtcblxuICAgIGxldCBkaXNoX2RhdGExID0gW11cbiAgICBcbiAgICAgZGlzaF9kYXRhMSA9IGRpc2hfZGF0YS5maWx0ZXIoZGF0dW0gPT4ge1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIChwYXJzZUludChkYXR1bS5maXJzdF9hcHBlYXJlZCwgMTApIDwgMTkwMCk7XG4gICAgXG4gICAgICAgIH0pXG4gICAgICAgXG4gICAgICAgIGRyYXdQaWVDaGFydChkaXNoX2RhdGExLnNsaWNlKDAsIDEwKSlcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkaXNoX2RhdGEuc2xpY2UoMCwgMTApKVxuICAgIFxufVxuXG5mdW5jdGlvbiBkaXNoX3Rlc3RpbmcyKCkge1xuXG4gICAgbGV0IGRpc2hfZGF0YTIgPSBbXVxuICAgXG4gICAgZGlzaF9kYXRhMiA9IGRpc2hfZGF0YS5maWx0ZXIoZGF0dW0gPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gKHBhcnNlSW50KGRhdHVtLmZpcnN0X2FwcGVhcmVkLCAxMCkgPiAxOTAwICYmIHBhcnNlSW50KGRhdHVtLmZpcnN0X2FwcGVhcmVkLCAxMCkgPCAxOTUwKTtcblxuICAgICAgICB9KVxuICAgICAgIFxuICAgICAgICBkcmF3UGllQ2hhcnQoZGlzaF9kYXRhMi5zbGljZSgwLCA2KSlcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkaXNoX2RhdGEuc2xpY2UoMCwgMTApKVxuICAgXG59XG5cbmZ1bmN0aW9uIGRpc2hfdGVzdGluZzMoKSB7XG5cbiAgICBsZXQgZGlzaF9kYXRhMyA9IFtdXG4gICAgXG4gICAgZGlzaF9kYXRhMyA9IGRpc2hfZGF0YS5maWx0ZXIoZGF0dW0gPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gKHBhcnNlSW50KGRhdHVtLmZpcnN0X2FwcGVhcmVkLCAxMCkgPiAxOTUwICYmIHBhcnNlSW50KGRhdHVtLmZpcnN0X2FwcGVhcmVkLCAxMCkgPCAyMDAwKTtcblxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgZHJhd1BpZUNoYXJ0KGRpc2hfZGF0YTMuc2xpY2UoMCwgNikpXG4gICAgICAgIC8vY29uc29sZS5sb2coZGlzaF9kYXRhLnNsaWNlKDAsIDEwKSlcbiAgICBcbn1cblxuZnVuY3Rpb24gZGlzaF90ZXN0aW5nNCgpIHtcblxuICAgIGxldCBkaXNoX2RhdGE0ID0gW11cbiAgIFxuICAgICAgICBkaXNoX2RhdGE0ID0gZGlzaF9kYXRhLmZpbHRlcihkYXR1bSA9PiB7XG5cbiAgICAgICAgICAgIHJldHVybiAocGFyc2VJbnQoZGF0dW0uZmlyc3RfYXBwZWFyZWQsIDEwKSA+IDIwMDApO1xuXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBkcmF3UGllQ2hhcnQoZGlzaF9kYXRhNC5zbGljZSgwLCA2KSlcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkaXNoX2RhdGEuc2xpY2UoMCwgMTApKVxuICAgXG59XG5cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgICB0ZXN0aW5nMSgpO1xuICAgICAgICAgIGRpc2hfdGVzdGluZzEoKTtcbiAgICAgICAgLy9kcmF3UGllQ2hhcnQoZGF0YTEpXG4gICAgICAgIFxuICAgICAgICBjb25zdCB0eXBpY2FsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eXBpY2FsXCIpO1xuICAgICAgICB0eXBpY2FsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0ZXN0aW5nMSgpO1xuICAgICAgICAgICAgZGlzaF90ZXN0aW5nMSgpO1xuICAgICAgICAgICAvLyBkcmF3UGllQ2hhcnQoZGF0YTEpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVndWxhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVndWxhclwiKTtcbiAgICAgICAgcmVndWxhci5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICBcbiAgICAgICAgICAgIHRlc3RpbmcyKCk7XG4gICAgICAgICAgICBkaXNoX3Rlc3RpbmcyKCk7XG4gICAgICAgICAgIC8vIGRyYXdQaWVDaGFydChkYXRhMik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3BlY2lhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BlY2lhbFwiKTtcbiAgICAgICAgc3BlY2lhbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGVzdGluZzMoKTtcbiAgICAgICAgICAgIGRpc2hfdGVzdGluZzMoKTtcbiAgICAgICAgICAgLy8gZHJhd1BpZUNoYXJ0KGRhdGEzKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld2FyaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3YXJpXCIpO1xuICAgICAgICBuZXdhcmkub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRlc3Rpbmc0KCk7XG4gICAgICAgICAgICBkaXNoX3Rlc3Rpbmc0KCk7XG4gICAgICAgICAgIC8vIGRyYXdQaWVDaGFydChkYXRhNClcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBcbmxldCBjaGFydDtcblxuY29uc3QgcmVuZGVyID0gZGF0YSA9PiB7XG4gICAgXG4gICAgLy8gZDMuc2VsZWN0KFwiLmJhci1jaGFydFwiKS5yZW1vdmUoKTtcblxuICAgIGNvbnN0IHdpZHRoID0gMzAwO1xuICAgIGNvbnN0IGhlaWdodCA9IDUwMDtcbiAgICBjb25zdCBtYXJnaW4gPSB7dG9wOiAyMCwgcmlnaHQ6IDIwLCBib3R0b206IDEwLCBsZWZ0OiAxNTB9O1xuICAgLy8gY29uc3QgaW5uZXJXaWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgY29uc3QgaW5uZXJIZWlnaHQgPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcbiAgICAvLyBcbiAgICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5kb21haW4oWzAsIGQzLm1heChkYXRhLCBkID0+IGQuZGlzaF9jb3VudCldKVxuICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSk7XG5cbiAgICAgICAgY29uc3QgeEF4aXMgPSBkMy5heGlzQm90dG9tKHhTY2FsZSk7XG4gICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVCYW5kKClcbiAgICAgICAgLmRvbWFpbihkYXRhLm1hcChkID0+IGQubG9jYXRpb24pKVxuICAgICAgICAucmFuZ2UoWzAsIGlubmVySGVpZ2h0XSlcbiAgICAgICAgLnBhZGRpbmcoMC4xKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh5U2NhbGUuZG9tYWluKCkpXG4gICAgIGNvbnN0IHlBeGlzID0gZDMuYXhpc0xlZnQoeVNjYWxlKTtcbiAgICBcbiAgICBsZXQgc3ZnID0gZDMuc2VsZWN0KFwiLmJhci1jaGFydFwiKTtcbiAgICBcbiAgICBcblxuICAgIGlmIChjaGFydCl7XG4gICAgICAgIHN2Zy5zZWxlY3QoJ2cnKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBnID0gc3ZnLmFwcGVuZChcImdcIilcbiAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHttYXJnaW4udG9wfSlgKTtcblxuICAgIGcuYXBwZW5kKCdnJykuY2FsbCh5QXhpcylcbiAgICAuc2VsZWN0KCcuZG9tYWluJywnLnRpY2sgbGluZScpXG4gICAgLnJlbW92ZSgpO1xuICAgIGcuYXBwZW5kKFwiZ1wiKS5jYWxsKHhBeGlzKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCAke2lubmVySGVpZ2h0fSlgKVxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3knLCA1MClcbiAgICAgICAgLmF0dHIoJ3gnLCB3aWR0aC8gMilcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgICAuYXR0cignZm9udC1zaXplJywgMjApXG4gICAgICAgIC50ZXh0KCdOdW1iZXIgb2YgRGlzaGVzJyk7XG4gICAgICAgIFxuXG4gICAgY2hhcnQgPSB0cnVlO1xuICAgICBnLnNlbGVjdEFsbChcInJlY3RcIikuZGF0YShkYXRhKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGQgPT4geVNjYWxlKGQubG9jYXRpb24pKVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBkID0+IHhTY2FsZShkLmRpc2hfY291bnQpKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgeVNjYWxlLmJhbmR3aWR0aCgpKTtcbiAgICAgZy5hcHBlbmQoJ3RleHQnKVxuICAgICAudGV4dChcIk51bWJlciBvZiBEaXNoZXMgc2V2ZXJlZCBpbiBOZXcgWW9yayBIb3RlbHNcIik7ICAgXG5cbn1cbiAgIGZ1bmN0aW9uIHRlc3RpbmcxKCl7XG5cbiAgICAgICBsZXQgbWVudV9kYXRhMSA9IFtdXG4gICAgICAgICBcbiAgICAgICBtZW51X2RhdGExID0gbWVudV9kYXRhLmZpbHRlcihkYXR1bSA9PiB7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gKHBhcnNlSW50KGRhdHVtLmRhdGUsIDEwKSA8IDE5MDAgJiYgZGF0dW0ucGxhY2UgPT09IFwiTkVXIFlPUktcIik7XG4gICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICBcblxuICAgICAgICAgICAgIHJlbmRlcihtZW51X2RhdGExLnNsaWNlKDAsIDEwKSlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1lbnVfZGF0YS5zbGljZSgwLDEwKVswXS5kaXNoX2NvdW50KVxuICAgICAgXG4gICB9XG5cbmZ1bmN0aW9uIHRlc3RpbmcyKCkge1xuXG4gICAgbGV0IG1lbnVfZGF0YTIgPSBbXVxuICAgXG4gICAgbWVudV9kYXRhMiA9IG1lbnVfZGF0YS5maWx0ZXIoZGF0dW0gPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gKHBhcnNlSW50KGRhdHVtLmRhdGUsIDEwKSA+IDE5MDAgJiYgcGFyc2VJbnQoZGF0dW0uZGF0ZSwgMTApIDwgMTk1MCAgJiYgZGF0dW0ucGxhY2UgPT09IFwiTkVXIFlPUktcIik7XG5cbiAgICAgICAgfSlcbiAgICAgICBcbiAgICAgICAgcmVuZGVyKG1lbnVfZGF0YTIuc2xpY2UoMCwgMTApKVxuICAgICAgICAvL2NvbnNvbGUubG9nKG1lbnVfZGF0YS5zbGljZSgwLDEwKSlcbiAgIFxufVxuXG5mdW5jdGlvbiB0ZXN0aW5nMygpIHtcblxuICAgIGxldCBtZW51X2RhdGEzID0gW11cbiAgICBcbiAgICAgICAgbWVudV9kYXRhMyA9IG1lbnVfZGF0YS5maWx0ZXIoZGF0dW0gPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gKHBhcnNlSW50KGRhdHVtLmRhdGUsIDEwKSA+IDE5NTAgJiYgcGFyc2VJbnQoZGF0dW0uZGF0ZSwgMTApIDwgMTk4MCApOyAvLyBub3QgaW4gbmV3IHlvcmtcblxuICAgICAgICB9KVxuICAgICAgIFxuICAgICAgICByZW5kZXIobWVudV9kYXRhMy5zbGljZSgwLCAxMCkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1lbnVfZGF0YS5zbGljZSgwLDEwKSlcbiAgIFxufVxuXG5mdW5jdGlvbiB0ZXN0aW5nNCgpIHtcblxuICAgIGxldCBtZW51X2RhdGE0ID0gW11cbiAgICBcbiAgICBtZW51X2RhdGE0ID0gbWVudV9kYXRhLmZpbHRlcihkYXR1bSA9PiB7XG5cbiAgICAgICAgICAgIHJldHVybiAocGFyc2VJbnQoZGF0dW0uZGF0ZSwgMTApID4gMjAwMCApOy8vIG5vdCBpbiBuZXcgeW9ya1xuXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICByZW5kZXIobWVudV9kYXRhNC5zbGljZSgwLCAxMCkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1lbnVfZGF0YS5zbGljZSgwLDEwKSlcbiAgIFxufVxuXG5cblxuLy8gdGVzdGluZ3NcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==