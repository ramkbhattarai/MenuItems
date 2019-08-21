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


function dish_testing1() {

    var dish_data1 = [];

    dish_data1 = dish_data.filter(function (datum) {

        return parseInt(datum.first_appeared, 10) < 1950;
    });

    testing_again(dish_data1.slice(0, 10));
    //console.log(dish_data.slice(0, 10))
}

function dish_testing2() {

    var dish_data2 = [];

    dish_data2 = dish_data.filter(function (datum) {

        return parseInt(datum.first_appeared, 10) > 1900 && parseInt(datum.first_appeared, 10) < 1950;
    });

    testing_again(dish_data2.slice(0, 6));
    //console.log(dish_data.slice(0, 10))
}

function dish_testing3() {

    var dish_data3 = [];

    dish_data3 = dish_data.filter(function (datum) {

        return parseInt(datum.first_appeared, 10) > 1950 && parseInt(datum.first_appeared, 10) < 2000;
    });

    testing_again(dish_data3.slice(0, 6));
    //console.log(dish_data.slice(0, 10))
}

function dish_testing4() {

    var dish_data4 = [];

    dish_data4 = dish_data.filter(function (datum) {

        return parseInt(datum.first_appeared, 10) > 2000;
    });

    testing_again(dish_data4.slice(0, 6));
    //console.log(dish_data.slice(0, 10))
}

document.addEventListener("DOMContentLoaded", function () {
    // testing1();
    dish_testing1();
    //drawPieChart(data1)

    var typical = document.getElementById("typical");
    typical.onclick = function () {
        // testing1();
        dish_testing1();
        // drawPieChart(data1)
    };
    // const regular = document.getElementById("regular");
    // regular.onclick = () => {

    //    // testing2();
    //     dish_testing2();
    //    // drawPieChart(data2);
    // }
    var special = document.getElementById("special");
    special.onclick = function () {
        //testing3();
        dish_testing3();
        // drawPieChart(data3)
    };
    var newari = document.getElementById("newari");
    newari.onclick = function () {
        // testing4();
        dish_testing4();
        // drawPieChart(data4)
    };
});
// testings

var histogramdata = void 0;
var piechartdata = void 0;
var legenddata = void 0;

function dashboard(id, fData) {
    var barColor = 'steelblue';
    function segColor(c) {
        return { low: "#807dba", mid: "#e08214", high: "#41ab5d" }[c];
    }

    // compute total for each Name.
    fData.forEach(function (d) {
        d.total = d.freq.low + d.freq.mid + d.freq.high;
    });

    // function to handle histogram.
    function histoGram(fD) {
        var hG = {},
            hGDim = { t: 60, r: 0, b: 30, l: 0 };
        hGDim.w = 500 - hGDim.l - hGDim.r, hGDim.h = 300 - hGDim.t - hGDim.b;

        if (histogramdata) {
            d3.select(id).selectAll("svg").remove();
        }
        //create svg for histogram.
        var hGsvg = d3.select(id).append("svg").attr("width", hGDim.w + hGDim.l + hGDim.r).attr("height", hGDim.h + hGDim.t + hGDim.b).append("g").attr("transform", "translate(" + hGDim.l + "," + hGDim.t + ")");
        histogramdata = true;
        // create function for x-axis mapping.
        var x = d3.scale.ordinal().rangeRoundBands([0, hGDim.w], 0.1).domain(fD.map(function (d) {
            return d[0];
        }));

        // Add x-axis to the histogram svg.
        hGsvg.append("g").attr("class", "x axis").attr("transform", "translate(0," + hGDim.h + ")").call(d3.svg.axis().scale(x).orient("bottom")).selectAll(".tick text").call(wrap, x.rangeBand());

        function wrap(text, width) {
            text.each(function () {
                var text = d3.select(this),
                    words = text.text().split(/\s+/).reverse(),
                    word,
                    line = [],
                    lineNumber = 0,
                    lineHeight = 1.1,
                    // ems
                y = text.attr("y"),
                    dy = parseFloat(text.attr("dy")),
                    tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
                while (word = words.pop()) {
                    line.push(word);
                    tspan.text(line.join(" "));
                    if (tspan.node().getComputedTextLength() > width) {
                        line.pop();
                        tspan.text(line.join(" "));
                        line = [word];
                        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                    }
                }
            });
        }

        // Create function for y-axis map.
        var y = d3.scale.linear().range([hGDim.h, 0]).domain([0, d3.max(fD, function (d) {
            return d[1];
        })]);

        // Create bars for histogram to contain rectangles and freq labels.
        var bars = hGsvg.selectAll(".bar").data(fD).enter().append("g").attr("class", "bar");

        //create the rectangles.
        bars.append("rect").attr("x", function (d) {
            return x(d[0]);
        }).attr("y", function (d) {
            return y(d[1]);
        }).attr("width", x.rangeBand()).attr("height", function (d) {
            return hGDim.h - y(d[1]);
        }).attr('fill', barColor).on("mouseover", mouseover) // mouseover is defined below.
        .on("mouseout", mouseout); // mouseout is defined below.


        //Create the frequency labels above the rectangles.
        bars.append("text").text(function (d) {
            var datum = d3.format(",")(d[1]).slice(0, 4);

            return datum;
        }).attr("x", function (d) {
            return x(d[0]) + x.rangeBand() / 2;
        }).attr("y", function (d) {
            return y(d[1]) - 5;
        }).attr("text-anchor", "middle");

        function mouseover(d) {
            // utility function to be called on mouseover.
            // filter for selected Name.
            var st = fData.filter(function (s) {
                return s.Name == d[0];
            })[0],
                nD = d3.keys(st.freq).map(function (s) {
                return { type: s, freq: st.freq[s] };
            });

            // call update functions of pie-chart and legend.    
            pC.update(nD);
            leg.update(nD);
        }

        function mouseout(d) {
            // utility function to be called on mouseout.
            // reset the pie-chart and legend.    
            pC.update(tF);
            leg.update(tF);
        }

        // create function to update the bars. This will be used by pie-chart.
        hG.update = function (nD, color) {
            // update the domain of the y-axis map to reflect change in frequencies.
            y.domain([0, d3.max(nD, function (d) {
                return d[1];
            })]);

            // Attach the new data to the bars.
            var bars = hGsvg.selectAll(".bar").data(nD);

            // transition the height and color of rectangles.
            bars.select("rect").transition().duration(500).attr("y", function (d) {
                return y(d[1]);
            }).attr("height", function (d) {
                return hGDim.h - y(d[1]);
            }).attr("fill", color);

            // transition the frequency labels location and change value.
            bars.select("text").transition().duration(500).text(function (d) {
                return d3.format(",")(d[1]).slice(0, 4);
            }).attr("y", function (d) {
                return y(d[1]) - 5;
            });
        };
        return hG;
    }

    // function to handle pieChart.
    function pieChart(pD) {
        var pC = {},
            pieDim = { w: 250, h: 250 };
        pieDim.r = Math.min(pieDim.w, pieDim.h) / 2;

        // if (piechartdata) {
        //     d3.select(id).selectAll("svg").remove();
        // }
        // create svg for pie chart.
        var piesvg = d3.select(id).append("svg").attr("width", pieDim.w).attr("height", pieDim.h).append("g").attr("transform", "translate(" + pieDim.w / 2 + "," + pieDim.h / 2 + ")");

        // piechartdata = true;
        // create function to draw the arcs of the pie slices.
        var arc = d3.svg.arc().outerRadius(pieDim.r - 10).innerRadius(0);

        // create a function to compute the pie slice angles.
        var pie = d3.layout.pie().sort(null).value(function (d) {
            return d.freq;
        });

        // Draw the pie slices.
        piesvg.selectAll("path").data(pie(pD)).enter().append("path").attr("d", arc).each(function (d) {
            this._current = d;
        }).style("fill", function (d) {
            return segColor(d.data.type);
        }).on("mouseover", mouseover).on("mouseout", mouseout);

        // create function to update pie-chart. This will be used by histogram.
        pC.update = function (nD) {
            piesvg.selectAll("path").data(pie(nD)).transition().duration(500).attrTween("d", arcTween);
        };
        // Utility function to be called on mouseover a pie slice.
        function mouseover(d) {
            // call the update function of histogram with new data.
            hG.update(fData.map(function (v) {
                return [v.Name, v.freq[d.data.type]];
            }), segColor(d.data.type));
        }
        //Utility function to be called on mouseout a pie slice.
        function mouseout(d) {
            // call the update function of histogram with all data.
            hG.update(fData.map(function (v) {
                return [v.Name, v.total];
            }), barColor);
        }
        // Animating the pie-slice requiring a custom function which specifies
        // how the intermediate paths should be drawn.
        function arcTween(a) {
            var i = d3.interpolate(this._current, a);
            this._current = i(0);
            return function (t) {
                return arc(i(t));
            };
        }
        return pC;
    }

    // function to handle legend.
    function legend(lD) {
        var leg = {};

        if (legenddata) {
            d3.select(id).selectAll("table").remove();
        }
        // create table for legend.
        var legend = d3.select(id).append("table");
        legend.attr('class', 'legend');

        // create one row per segment.
        var tr = legend.append("tbody").selectAll("tr").data(lD).enter().append("tr");

        // create the first column for each segment.
        tr.append("td").append("svg").attr("width", '16').attr("height", '16').append("rect").attr("width", '16').attr("height", '16').attr("fill", function (d) {
            return segColor(d.type);
        });

        legenddata = true;
        // create the second column for each segment.
        tr.append("td").text(function (d) {
            return d.type;
        });

        // create the third column for each segment.
        tr.append("td").attr("class", 'legendFreq').text(function (d) {
            return d3.format(",")(d.freq);
        });

        // create the fourth column for each segment.
        tr.append("td").attr("class", 'legendPerc').text(function (d) {
            return getLegend(d, lD);
        });

        // Utility function to be used to update the legend.
        leg.update = function (nD) {
            // update the data attached to the row elements.
            var l = legend.select("tbody").selectAll("tr").data(nD);

            // update the frequencies.
            l.select(".legendFreq").text(function (d) {
                return d3.format(",")(d.freq);
            });

            // update the percentage column.
            l.select(".legendPerc").text(function (d) {
                return getLegend(d, nD);
            });
        };

        function getLegend(d, aD) {
            // Utility function to compute percentage.
            return d3.format("%")(d.freq / d3.sum(aD.map(function (v) {
                return v.freq;
            })));
        }

        return leg;
    }

    // calculate total frequency by segment for all Name.
    var tF = ['low', 'mid', 'high'].map(function (d) {
        return { type: d, freq: d3.sum(fData.map(function (t) {
                return t.freq[d];
            })) };
    });

    // calculate total frequency by Name for all segment.
    var sF = fData.map(function (d) {
        return [d.Name, d.total];
    });

    var hG = histoGram(sF),
        // create the histogram.
    pC = pieChart(tF),
        // create the pie-chart.
    leg = legend(tF); // create the legend.

}

var freqData;
function testing_again(data) {
    freqData = data.map(function (d) {
        return {
            Name: d.name,
            freq: {
                low: d.lowest_price,
                mid: (d.lowest_price + d.highest_price) / 2,
                high: d.highest_price
            }
        };
    });
    dashboard('#dashboard', freqData);
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiXSwibmFtZXMiOlsiZGlzaF90ZXN0aW5nMSIsImRpc2hfZGF0YTEiLCJkaXNoX2RhdGEiLCJmaWx0ZXIiLCJwYXJzZUludCIsImRhdHVtIiwiZmlyc3RfYXBwZWFyZWQiLCJ0ZXN0aW5nX2FnYWluIiwic2xpY2UiLCJkaXNoX3Rlc3RpbmcyIiwiZGlzaF9kYXRhMiIsImRpc2hfdGVzdGluZzMiLCJkaXNoX2RhdGEzIiwiZGlzaF90ZXN0aW5nNCIsImRpc2hfZGF0YTQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0eXBpY2FsIiwiZ2V0RWxlbWVudEJ5SWQiLCJvbmNsaWNrIiwic3BlY2lhbCIsIm5ld2FyaSIsImhpc3RvZ3JhbWRhdGEiLCJwaWVjaGFydGRhdGEiLCJsZWdlbmRkYXRhIiwiZGFzaGJvYXJkIiwiaWQiLCJmRGF0YSIsImJhckNvbG9yIiwic2VnQ29sb3IiLCJjIiwibG93IiwibWlkIiwiaGlnaCIsImZvckVhY2giLCJkIiwidG90YWwiLCJmcmVxIiwiaGlzdG9HcmFtIiwiZkQiLCJoRyIsImhHRGltIiwidCIsInIiLCJiIiwibCIsInciLCJoIiwiZDMiLCJzZWxlY3QiLCJzZWxlY3RBbGwiLCJyZW1vdmUiLCJoR3N2ZyIsImFwcGVuZCIsImF0dHIiLCJ4Iiwic2NhbGUiLCJvcmRpbmFsIiwicmFuZ2VSb3VuZEJhbmRzIiwiZG9tYWluIiwibWFwIiwiY2FsbCIsInN2ZyIsImF4aXMiLCJvcmllbnQiLCJ3cmFwIiwicmFuZ2VCYW5kIiwidGV4dCIsIndpZHRoIiwiZWFjaCIsIndvcmRzIiwic3BsaXQiLCJyZXZlcnNlIiwid29yZCIsImxpbmUiLCJsaW5lTnVtYmVyIiwibGluZUhlaWdodCIsInkiLCJkeSIsInBhcnNlRmxvYXQiLCJ0c3BhbiIsInBvcCIsInB1c2giLCJqb2luIiwibm9kZSIsImdldENvbXB1dGVkVGV4dExlbmd0aCIsImxpbmVhciIsInJhbmdlIiwibWF4IiwiYmFycyIsImRhdGEiLCJlbnRlciIsIm9uIiwibW91c2VvdmVyIiwibW91c2VvdXQiLCJmb3JtYXQiLCJzdCIsInMiLCJOYW1lIiwibkQiLCJrZXlzIiwidHlwZSIsInBDIiwidXBkYXRlIiwibGVnIiwidEYiLCJjb2xvciIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInBpZUNoYXJ0IiwicEQiLCJwaWVEaW0iLCJNYXRoIiwibWluIiwicGllc3ZnIiwiYXJjIiwib3V0ZXJSYWRpdXMiLCJpbm5lclJhZGl1cyIsInBpZSIsImxheW91dCIsInNvcnQiLCJ2YWx1ZSIsIl9jdXJyZW50Iiwic3R5bGUiLCJhdHRyVHdlZW4iLCJhcmNUd2VlbiIsInYiLCJhIiwiaSIsImludGVycG9sYXRlIiwibGVnZW5kIiwibEQiLCJ0ciIsImdldExlZ2VuZCIsImFEIiwic3VtIiwic0YiLCJmcmVxRGF0YSIsIm5hbWUiLCJsb3dlc3RfcHJpY2UiLCJoaWdoZXN0X3ByaWNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7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O0FBQ0ZOLHFCQUFLSSxFQUFFd0csWUFETDtBQUVGM0cscUJBQUssQ0FBQ0csRUFBRXdHLFlBQUYsR0FBaUJ4RyxFQUFFeUcsYUFBcEIsSUFBbUMsQ0FGdEM7QUFHRjNHLHNCQUFNRSxFQUFFeUc7QUFITjtBQUZILFNBQVA7QUFRSCxLQVRVLENBQVg7QUFVVm5ILGNBQVUsWUFBVixFQUF1QmdILFFBQXZCO0FBQ0ssRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL2luZGV4LmpzXCIpO1xuIiwiXG4gZnVuY3Rpb24gZGlzaF90ZXN0aW5nMSgpIHtcblxuICAgIGxldCBkaXNoX2RhdGExID0gW11cbiAgICBcbiAgICAgZGlzaF9kYXRhMSA9IGRpc2hfZGF0YS5maWx0ZXIoZGF0dW0gPT4ge1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIChwYXJzZUludChkYXR1bS5maXJzdF9hcHBlYXJlZCwgMTApIDwgMTk1MCk7XG4gICAgXG4gICAgICAgIH0pXG4gICAgICAgXG4gICAgICAgIHRlc3RpbmdfYWdhaW4oZGlzaF9kYXRhMS5zbGljZSgwLCAxMCkpXG4gICAgICAgIC8vY29uc29sZS5sb2coZGlzaF9kYXRhLnNsaWNlKDAsIDEwKSlcbiAgICBcbn1cblxuZnVuY3Rpb24gZGlzaF90ZXN0aW5nMigpIHtcblxuICAgIGxldCBkaXNoX2RhdGEyID0gW11cbiAgIFxuICAgIGRpc2hfZGF0YTIgPSBkaXNoX2RhdGEuZmlsdGVyKGRhdHVtID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIChwYXJzZUludChkYXR1bS5maXJzdF9hcHBlYXJlZCwgMTApID4gMTkwMCAmJiBwYXJzZUludChkYXR1bS5maXJzdF9hcHBlYXJlZCwgMTApIDwgMTk1MCk7XG5cbiAgICAgICAgfSlcbiAgICAgICBcbiAgICB0ZXN0aW5nX2FnYWluKGRpc2hfZGF0YTIuc2xpY2UoMCwgNikpXG4gICAgICAgIC8vY29uc29sZS5sb2coZGlzaF9kYXRhLnNsaWNlKDAsIDEwKSlcbiAgIFxufVxuXG5mdW5jdGlvbiBkaXNoX3Rlc3RpbmczKCkge1xuXG4gICAgbGV0IGRpc2hfZGF0YTMgPSBbXVxuICAgIFxuICAgIGRpc2hfZGF0YTMgPSBkaXNoX2RhdGEuZmlsdGVyKGRhdHVtID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIChwYXJzZUludChkYXR1bS5maXJzdF9hcHBlYXJlZCwgMTApID4gMTk1MCAmJiBwYXJzZUludChkYXR1bS5maXJzdF9hcHBlYXJlZCwgMTApIDwgMjAwMCk7XG5cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgdGVzdGluZ19hZ2FpbihkaXNoX2RhdGEzLnNsaWNlKDAsIDYpKVxuICAgICAgICAvL2NvbnNvbGUubG9nKGRpc2hfZGF0YS5zbGljZSgwLCAxMCkpXG4gICAgXG59XG5cbmZ1bmN0aW9uIGRpc2hfdGVzdGluZzQoKSB7XG5cbiAgICBsZXQgZGlzaF9kYXRhNCA9IFtdXG4gICBcbiAgICAgICAgZGlzaF9kYXRhNCA9IGRpc2hfZGF0YS5maWx0ZXIoZGF0dW0gPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gKHBhcnNlSW50KGRhdHVtLmZpcnN0X2FwcGVhcmVkLCAxMCkgPiAyMDAwKTtcblxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB0ZXN0aW5nX2FnYWluKGRpc2hfZGF0YTQuc2xpY2UoMCwgNikpXG4gICAgICAgIC8vY29uc29sZS5sb2coZGlzaF9kYXRhLnNsaWNlKDAsIDEwKSlcbiAgIFxufVxuXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgICAvLyB0ZXN0aW5nMSgpO1xuICAgICAgICAgIGRpc2hfdGVzdGluZzEoKTtcbiAgICAgICAgLy9kcmF3UGllQ2hhcnQoZGF0YTEpXG4gICAgICAgIFxuICAgICAgICBjb25zdCB0eXBpY2FsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eXBpY2FsXCIpO1xuICAgICAgICB0eXBpY2FsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgIC8vIHRlc3RpbmcxKCk7XG4gICAgICAgICAgICBkaXNoX3Rlc3RpbmcxKCk7XG4gICAgICAgICAgIC8vIGRyYXdQaWVDaGFydChkYXRhMSlcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zdCByZWd1bGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWd1bGFyXCIpO1xuICAgICAgICAvLyByZWd1bGFyLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgIFxuICAgICAgICAvLyAgICAvLyB0ZXN0aW5nMigpO1xuICAgICAgICAvLyAgICAgZGlzaF90ZXN0aW5nMigpO1xuICAgICAgICAvLyAgICAvLyBkcmF3UGllQ2hhcnQoZGF0YTIpO1xuICAgICAgICAvLyB9XG4gICAgICAgIGNvbnN0IHNwZWNpYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwZWNpYWxcIik7XG4gICAgICAgIHNwZWNpYWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vdGVzdGluZzMoKTtcbiAgICAgICAgICAgIGRpc2hfdGVzdGluZzMoKTtcbiAgICAgICAgICAgLy8gZHJhd1BpZUNoYXJ0KGRhdGEzKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld2FyaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3YXJpXCIpO1xuICAgICAgICBuZXdhcmkub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgLy8gdGVzdGluZzQoKTtcbiAgICAgICAgICAgIGRpc2hfdGVzdGluZzQoKTtcbiAgICAgICAgICAgLy8gZHJhd1BpZUNoYXJ0KGRhdGE0KVxuICAgICAgICB9XG4gICAgfSlcbi8vIHRlc3RpbmdzXG5cbmxldCBoaXN0b2dyYW1kYXRhO1xubGV0IHBpZWNoYXJ0ZGF0YTtcbmxldCBsZWdlbmRkYXRhO1xuXG5mdW5jdGlvbiBkYXNoYm9hcmQoaWQsIGZEYXRhKSB7XG4gICAgdmFyIGJhckNvbG9yID0gJ3N0ZWVsYmx1ZSc7XG4gICAgZnVuY3Rpb24gc2VnQ29sb3IoYykgeyByZXR1cm4geyBsb3c6IFwiIzgwN2RiYVwiLCBtaWQ6IFwiI2UwODIxNFwiLCBoaWdoOiBcIiM0MWFiNWRcIiB9W2NdOyB9XG5cbiAgICAvLyBjb21wdXRlIHRvdGFsIGZvciBlYWNoIE5hbWUuXG4gICAgZkRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZCkgeyBkLnRvdGFsID0gZC5mcmVxLmxvdyArIGQuZnJlcS5taWQgKyBkLmZyZXEuaGlnaDsgfSk7XG5cbiAgICAvLyBmdW5jdGlvbiB0byBoYW5kbGUgaGlzdG9ncmFtLlxuICAgIGZ1bmN0aW9uIGhpc3RvR3JhbShmRCkge1xuICAgICAgICB2YXIgaEcgPSB7fSwgaEdEaW0gPSB7IHQ6IDYwLCByOiAwLCBiOiAzMCwgbDogMCB9O1xuICAgICAgICBoR0RpbS53ID0gNTAwIC0gaEdEaW0ubCAtIGhHRGltLnIsXG4gICAgICAgICAgICBoR0RpbS5oID0gMzAwIC0gaEdEaW0udCAtIGhHRGltLmI7XG5cbiAgICAgICAgICAgIGlmKGhpc3RvZ3JhbWRhdGEpe1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdChpZCkuc2VsZWN0QWxsKFwic3ZnXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAvL2NyZWF0ZSBzdmcgZm9yIGhpc3RvZ3JhbS5cbiAgICAgICAgdmFyIGhHc3ZnID0gZDMuc2VsZWN0KGlkKS5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgaEdEaW0udyArIGhHRGltLmwgKyBoR0RpbS5yKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaEdEaW0uaCArIGhHRGltLnQgKyBoR0RpbS5iKS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIGhHRGltLmwgKyBcIixcIiArIGhHRGltLnQgKyBcIilcIik7XG4gICAgICAgICAgICBoaXN0b2dyYW1kYXRhID0gdHJ1ZTtcbiAgICAgICAgLy8gY3JlYXRlIGZ1bmN0aW9uIGZvciB4LWF4aXMgbWFwcGluZy5cbiAgICAgICAgdmFyIHggPSBkMy5zY2FsZS5vcmRpbmFsKCkucmFuZ2VSb3VuZEJhbmRzKFswLCBoR0RpbS53XSwgMC4xKVxuICAgICAgICAgICAgLmRvbWFpbihmRC5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGRbMF07IH0pKTtcblxuICAgICAgICAvLyBBZGQgeC1heGlzIHRvIHRoZSBoaXN0b2dyYW0gc3ZnLlxuICAgICAgICBoR3N2Zy5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcInggYXhpc1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhHRGltLmggKyBcIilcIilcbiAgICAgICAgICAgIC5jYWxsKGQzLnN2Zy5heGlzKCkuc2NhbGUoeCkub3JpZW50KFwiYm90dG9tXCIpKVxuICAgICAgICAgICAgLnNlbGVjdEFsbChcIi50aWNrIHRleHRcIilcbiAgICAgICAgICAgIC5jYWxsKHdyYXAsIHgucmFuZ2VCYW5kKCkpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiB3cmFwKHRleHQsIHdpZHRoKSB7XG4gICAgICAgICAgICB0ZXh0LmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBkMy5zZWxlY3QodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIHdvcmRzID0gdGV4dC50ZXh0KCkuc3BsaXQoL1xccysvKS5yZXZlcnNlKCksXG4gICAgICAgICAgICAgICAgICAgIHdvcmQsXG4gICAgICAgICAgICAgICAgICAgIGxpbmUgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlciA9IDAsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQgPSAxLjEsIC8vIGVtc1xuICAgICAgICAgICAgICAgICAgICB5ID0gdGV4dC5hdHRyKFwieVwiKSxcbiAgICAgICAgICAgICAgICAgICAgZHkgPSBwYXJzZUZsb2F0KHRleHQuYXR0cihcImR5XCIpKSxcbiAgICAgICAgICAgICAgICAgICAgdHNwYW4gPSB0ZXh0LnRleHQobnVsbCkuYXBwZW5kKFwidHNwYW5cIikuYXR0cihcInhcIiwgMCkuYXR0cihcInlcIiwgeSkuYXR0cihcImR5XCIsIGR5ICsgXCJlbVwiKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAod29yZCA9IHdvcmRzLnBvcCgpKSB7XG4gICAgICAgICAgICAgICAgbGluZS5wdXNoKHdvcmQpO1xuICAgICAgICAgICAgICAgIHRzcGFuLnRleHQobGluZS5qb2luKFwiIFwiKSk7XG4gICAgICAgICAgICAgICAgaWYgKHRzcGFuLm5vZGUoKS5nZXRDb21wdXRlZFRleHRMZW5ndGgoKSA+IHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHRzcGFuLnRleHQobGluZS5qb2luKFwiIFwiKSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgPSBbd29yZF07XG4gICAgICAgICAgICAgICAgICAgIHRzcGFuID0gdGV4dC5hcHBlbmQoXCJ0c3BhblwiKS5hdHRyKFwieFwiLCAwKS5hdHRyKFwieVwiLCB5KS5hdHRyKFwiZHlcIiwgKytsaW5lTnVtYmVyICogbGluZUhlaWdodCArIGR5ICsgXCJlbVwiKS50ZXh0KHdvcmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgZnVuY3Rpb24gZm9yIHktYXhpcyBtYXAuXG4gICAgICAgIHZhciB5ID0gZDMuc2NhbGUubGluZWFyKCkucmFuZ2UoW2hHRGltLmgsIDBdKVxuICAgICAgICAgICAgLmRvbWFpbihbMCwgZDMubWF4KGZELCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZFsxXTsgfSldKTtcblxuICAgICAgICAvLyBDcmVhdGUgYmFycyBmb3IgaGlzdG9ncmFtIHRvIGNvbnRhaW4gcmVjdGFuZ2xlcyBhbmQgZnJlcSBsYWJlbHMuXG4gICAgICAgIHZhciBiYXJzID0gaEdzdmcuc2VsZWN0QWxsKFwiLmJhclwiKS5kYXRhKGZEKS5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJiYXJcIik7XG5cbiAgICAgICAgLy9jcmVhdGUgdGhlIHJlY3RhbmdsZXMuXG4gICAgICAgIGJhcnMuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB4KGRbMF0pOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5KGRbMV0pOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB4LnJhbmdlQmFuZCgpKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGhHRGltLmggLSB5KGRbMV0pOyB9KVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCBiYXJDb2xvcilcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBtb3VzZW92ZXIpLy8gbW91c2VvdmVyIGlzIGRlZmluZWQgYmVsb3cuXG4gICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCBtb3VzZW91dCk7Ly8gbW91c2VvdXQgaXMgZGVmaW5lZCBiZWxvdy5cblxuICAgICAgICBcbiAgICAgICAgLy9DcmVhdGUgdGhlIGZyZXF1ZW5jeSBsYWJlbHMgYWJvdmUgdGhlIHJlY3RhbmdsZXMuXG4gICAgICAgIGJhcnMuYXBwZW5kKFwidGV4dFwiKS50ZXh0KGZ1bmN0aW9uIChkKSB7IFxuICAgICAgICAgICAgdmFyIGRhdHVtID0gKGQzLmZvcm1hdChcIixcIikoZFsxXSkpLnNsaWNlKDAsIDQpO1xuICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBkYXR1bSB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB4KGRbMF0pICsgeC5yYW5nZUJhbmQoKSAvIDI7IH0pXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHkoZFsxXSkgLSA1OyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcblxuICAgICAgICBmdW5jdGlvbiBtb3VzZW92ZXIoZCkgeyAgLy8gdXRpbGl0eSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gbW91c2VvdmVyLlxuICAgICAgICAgICAgLy8gZmlsdGVyIGZvciBzZWxlY3RlZCBOYW1lLlxuICAgICAgICAgICAgdmFyIHN0ID0gZkRhdGEuZmlsdGVyKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLk5hbWUgPT0gZFswXTsgfSlbMF0sXG4gICAgICAgICAgICAgICAgbkQgPSBkMy5rZXlzKHN0LmZyZXEpLm1hcChmdW5jdGlvbiAocykgeyByZXR1cm4geyB0eXBlOiBzLCBmcmVxOiBzdC5mcmVxW3NdIH07IH0pO1xuXG4gICAgICAgICAgICAvLyBjYWxsIHVwZGF0ZSBmdW5jdGlvbnMgb2YgcGllLWNoYXJ0IGFuZCBsZWdlbmQuICAgIFxuICAgICAgICAgICAgcEMudXBkYXRlKG5EKTtcbiAgICAgICAgICAgIGxlZy51cGRhdGUobkQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbW91c2VvdXQoZCkgeyAgICAvLyB1dGlsaXR5IGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBtb3VzZW91dC5cbiAgICAgICAgICAgIC8vIHJlc2V0IHRoZSBwaWUtY2hhcnQgYW5kIGxlZ2VuZC4gICAgXG4gICAgICAgICAgICBwQy51cGRhdGUodEYpO1xuICAgICAgICAgICAgbGVnLnVwZGF0ZSh0Rik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjcmVhdGUgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBiYXJzLiBUaGlzIHdpbGwgYmUgdXNlZCBieSBwaWUtY2hhcnQuXG4gICAgICAgIGhHLnVwZGF0ZSA9IGZ1bmN0aW9uIChuRCwgY29sb3IpIHtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgZG9tYWluIG9mIHRoZSB5LWF4aXMgbWFwIHRvIHJlZmxlY3QgY2hhbmdlIGluIGZyZXF1ZW5jaWVzLlxuICAgICAgICAgICAgeS5kb21haW4oWzAsIGQzLm1heChuRCwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGRbMV07IH0pXSk7XG5cbiAgICAgICAgICAgIC8vIEF0dGFjaCB0aGUgbmV3IGRhdGEgdG8gdGhlIGJhcnMuXG4gICAgICAgICAgICB2YXIgYmFycyA9IGhHc3ZnLnNlbGVjdEFsbChcIi5iYXJcIikuZGF0YShuRCk7XG5cbiAgICAgICAgICAgIC8vIHRyYW5zaXRpb24gdGhlIGhlaWdodCBhbmQgY29sb3Igb2YgcmVjdGFuZ2xlcy5cbiAgICAgICAgICAgIGJhcnMuc2VsZWN0KFwicmVjdFwiKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oNTAwKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geShkWzFdKTsgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gaEdEaW0uaCAtIHkoZFsxXSk7IH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGNvbG9yKTtcblxuICAgICAgICAgICAgLy8gdHJhbnNpdGlvbiB0aGUgZnJlcXVlbmN5IGxhYmVscyBsb2NhdGlvbiBhbmQgY2hhbmdlIHZhbHVlLlxuICAgICAgICAgICAgYmFycy5zZWxlY3QoXCJ0ZXh0XCIpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig1MDApXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIChkMy5mb3JtYXQoXCIsXCIpKGRbMV0pKS5zbGljZSgwLDQpIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5KGRbMV0pIC0gNTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhHO1xuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIHRvIGhhbmRsZSBwaWVDaGFydC5cbiAgICBmdW5jdGlvbiBwaWVDaGFydChwRCkge1xuICAgICAgICB2YXIgcEMgPSB7fSwgcGllRGltID0geyB3OiAyNTAsIGg6IDI1MCB9O1xuICAgICAgICBwaWVEaW0uciA9IE1hdGgubWluKHBpZURpbS53LCBwaWVEaW0uaCkgLyAyO1xuXG4gICAgICAgIC8vIGlmIChwaWVjaGFydGRhdGEpIHtcbiAgICAgICAgLy8gICAgIGQzLnNlbGVjdChpZCkuc2VsZWN0QWxsKFwic3ZnXCIpLnJlbW92ZSgpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGNyZWF0ZSBzdmcgZm9yIHBpZSBjaGFydC5cbiAgICAgICAgdmFyIHBpZXN2ZyA9IGQzLnNlbGVjdChpZCkuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHBpZURpbS53KS5hdHRyKFwiaGVpZ2h0XCIsIHBpZURpbS5oKS5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHBpZURpbS53IC8gMiArIFwiLFwiICsgcGllRGltLmggLyAyICsgXCIpXCIpO1xuXG4gICAgICAgICAgICAvLyBwaWVjaGFydGRhdGEgPSB0cnVlO1xuICAgICAgICAvLyBjcmVhdGUgZnVuY3Rpb24gdG8gZHJhdyB0aGUgYXJjcyBvZiB0aGUgcGllIHNsaWNlcy5cbiAgICAgICAgdmFyIGFyYyA9IGQzLnN2Zy5hcmMoKS5vdXRlclJhZGl1cyhwaWVEaW0uciAtIDEwKS5pbm5lclJhZGl1cygwKTtcblxuICAgICAgICAvLyBjcmVhdGUgYSBmdW5jdGlvbiB0byBjb21wdXRlIHRoZSBwaWUgc2xpY2UgYW5nbGVzLlxuICAgICAgICB2YXIgcGllID0gZDMubGF5b3V0LnBpZSgpLnNvcnQobnVsbCkudmFsdWUoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuZnJlcTsgfSk7XG5cbiAgICAgICAgLy8gRHJhdyB0aGUgcGllIHNsaWNlcy5cbiAgICAgICAgcGllc3ZnLnNlbGVjdEFsbChcInBhdGhcIikuZGF0YShwaWUocEQpKS5lbnRlcigpLmFwcGVuZChcInBhdGhcIikuYXR0cihcImRcIiwgYXJjKVxuICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24gKGQpIHsgdGhpcy5fY3VycmVudCA9IGQ7IH0pXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBzZWdDb2xvcihkLmRhdGEudHlwZSk7IH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgbW91c2VvdmVyKS5vbihcIm1vdXNlb3V0XCIsIG1vdXNlb3V0KTtcblxuICAgICAgICAvLyBjcmVhdGUgZnVuY3Rpb24gdG8gdXBkYXRlIHBpZS1jaGFydC4gVGhpcyB3aWxsIGJlIHVzZWQgYnkgaGlzdG9ncmFtLlxuICAgICAgICBwQy51cGRhdGUgPSBmdW5jdGlvbiAobkQpIHtcbiAgICAgICAgICAgIHBpZXN2Zy5zZWxlY3RBbGwoXCJwYXRoXCIpLmRhdGEocGllKG5EKSkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDUwMClcbiAgICAgICAgICAgICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2Vlbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXRpbGl0eSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gbW91c2VvdmVyIGEgcGllIHNsaWNlLlxuICAgICAgICBmdW5jdGlvbiBtb3VzZW92ZXIoZCkge1xuICAgICAgICAgICAgLy8gY2FsbCB0aGUgdXBkYXRlIGZ1bmN0aW9uIG9mIGhpc3RvZ3JhbSB3aXRoIG5ldyBkYXRhLlxuICAgICAgICAgICAgaEcudXBkYXRlKGZEYXRhLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHJldHVybiBbdi5OYW1lLCB2LmZyZXFbZC5kYXRhLnR5cGVdXTtcbiAgICAgICAgICAgIH0pLCBzZWdDb2xvcihkLmRhdGEudHlwZSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vVXRpbGl0eSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gbW91c2VvdXQgYSBwaWUgc2xpY2UuXG4gICAgICAgIGZ1bmN0aW9uIG1vdXNlb3V0KGQpIHtcbiAgICAgICAgICAgIC8vIGNhbGwgdGhlIHVwZGF0ZSBmdW5jdGlvbiBvZiBoaXN0b2dyYW0gd2l0aCBhbGwgZGF0YS5cbiAgICAgICAgICAgIGhHLnVwZGF0ZShmRGF0YS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3YuTmFtZSwgdi50b3RhbF07XG4gICAgICAgICAgICB9KSwgYmFyQ29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFuaW1hdGluZyB0aGUgcGllLXNsaWNlIHJlcXVpcmluZyBhIGN1c3RvbSBmdW5jdGlvbiB3aGljaCBzcGVjaWZpZXNcbiAgICAgICAgLy8gaG93IHRoZSBpbnRlcm1lZGlhdGUgcGF0aHMgc2hvdWxkIGJlIGRyYXduLlxuICAgICAgICBmdW5jdGlvbiBhcmNUd2VlbihhKSB7XG4gICAgICAgICAgICB2YXIgaSA9IGQzLmludGVycG9sYXRlKHRoaXMuX2N1cnJlbnQsIGEpO1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudCA9IGkoMCk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIGFyYyhpKHQpKTsgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcEM7XG4gICAgfVxuXG4gICAgLy8gZnVuY3Rpb24gdG8gaGFuZGxlIGxlZ2VuZC5cbiAgICBmdW5jdGlvbiBsZWdlbmQobEQpIHtcbiAgICAgICAgdmFyIGxlZyA9IHt9O1xuXG4gICAgICAgIGlmIChsZWdlbmRkYXRhKSB7XG4gICAgICAgICAgICBkMy5zZWxlY3QoaWQpLnNlbGVjdEFsbChcInRhYmxlXCIpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNyZWF0ZSB0YWJsZSBmb3IgbGVnZW5kLlxuICAgICAgICB2YXIgbGVnZW5kID0gZDMuc2VsZWN0KGlkKS5hcHBlbmQoXCJ0YWJsZVwiKTtcbiAgICAgICAgbGVnZW5kLmF0dHIoJ2NsYXNzJywgJ2xlZ2VuZCcpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBvbmUgcm93IHBlciBzZWdtZW50LlxuICAgICAgICB2YXIgdHIgPSBsZWdlbmQuYXBwZW5kKFwidGJvZHlcIikuc2VsZWN0QWxsKFwidHJcIikuZGF0YShsRCkuZW50ZXIoKS5hcHBlbmQoXCJ0clwiKTtcblxuICAgICAgICAvLyBjcmVhdGUgdGhlIGZpcnN0IGNvbHVtbiBmb3IgZWFjaCBzZWdtZW50LlxuICAgICAgICB0ci5hcHBlbmQoXCJ0ZFwiKS5hcHBlbmQoXCJzdmdcIikuYXR0cihcIndpZHRoXCIsICcxNicpLmF0dHIoXCJoZWlnaHRcIiwgJzE2JykuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCAnMTYnKS5hdHRyKFwiaGVpZ2h0XCIsICcxNicpXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHNlZ0NvbG9yKGQudHlwZSk7IH0pO1xuXG4gICAgICAgICAgICBsZWdlbmRkYXRhID0gdHJ1ZTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBzZWNvbmQgY29sdW1uIGZvciBlYWNoIHNlZ21lbnQuXG4gICAgICAgIHRyLmFwcGVuZChcInRkXCIpLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQudHlwZTsgfSk7XG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSB0aGlyZCBjb2x1bW4gZm9yIGVhY2ggc2VnbWVudC5cbiAgICAgICAgdHIuYXBwZW5kKFwidGRcIikuYXR0cihcImNsYXNzXCIsICdsZWdlbmRGcmVxJylcbiAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkMy5mb3JtYXQoXCIsXCIpKGQuZnJlcSk7IH0pO1xuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgZm91cnRoIGNvbHVtbiBmb3IgZWFjaCBzZWdtZW50LlxuICAgICAgICB0ci5hcHBlbmQoXCJ0ZFwiKS5hdHRyKFwiY2xhc3NcIiwgJ2xlZ2VuZFBlcmMnKVxuICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGdldExlZ2VuZChkLCBsRCk7IH0pO1xuXG4gICAgICAgIC8vIFV0aWxpdHkgZnVuY3Rpb24gdG8gYmUgdXNlZCB0byB1cGRhdGUgdGhlIGxlZ2VuZC5cbiAgICAgICAgbGVnLnVwZGF0ZSA9IGZ1bmN0aW9uIChuRCkge1xuICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBkYXRhIGF0dGFjaGVkIHRvIHRoZSByb3cgZWxlbWVudHMuXG4gICAgICAgICAgICB2YXIgbCA9IGxlZ2VuZC5zZWxlY3QoXCJ0Ym9keVwiKS5zZWxlY3RBbGwoXCJ0clwiKS5kYXRhKG5EKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBmcmVxdWVuY2llcy5cbiAgICAgICAgICAgIGwuc2VsZWN0KFwiLmxlZ2VuZEZyZXFcIikudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZDMuZm9ybWF0KFwiLFwiKShkLmZyZXEpOyB9KTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBwZXJjZW50YWdlIGNvbHVtbi5cbiAgICAgICAgICAgIGwuc2VsZWN0KFwiLmxlZ2VuZFBlcmNcIikudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZ2V0TGVnZW5kKGQsIG5EKTsgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRMZWdlbmQoZCwgYUQpIHsgLy8gVXRpbGl0eSBmdW5jdGlvbiB0byBjb21wdXRlIHBlcmNlbnRhZ2UuXG4gICAgICAgICAgICByZXR1cm4gZDMuZm9ybWF0KFwiJVwiKShkLmZyZXEgLyBkMy5zdW0oYUQubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiB2LmZyZXE7IH0pKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGVnO1xuICAgIH1cblxuICAgIC8vIGNhbGN1bGF0ZSB0b3RhbCBmcmVxdWVuY3kgYnkgc2VnbWVudCBmb3IgYWxsIE5hbWUuXG4gICAgdmFyIHRGID0gWydsb3cnLCAnbWlkJywgJ2hpZ2gnXS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogZCwgZnJlcTogZDMuc3VtKGZEYXRhLm1hcChmdW5jdGlvbiAodCkgeyByZXR1cm4gdC5mcmVxW2RdOyB9KSkgfTtcbiAgICB9KTtcblxuICAgIC8vIGNhbGN1bGF0ZSB0b3RhbCBmcmVxdWVuY3kgYnkgTmFtZSBmb3IgYWxsIHNlZ21lbnQuXG4gICAgdmFyIHNGID0gZkRhdGEubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBbZC5OYW1lLCBkLnRvdGFsXTsgfSk7XG5cbiAgICB2YXIgaEcgPSBoaXN0b0dyYW0oc0YpLCAvLyBjcmVhdGUgdGhlIGhpc3RvZ3JhbS5cbiAgICAgICAgcEMgPSBwaWVDaGFydCh0RiksIC8vIGNyZWF0ZSB0aGUgcGllLWNoYXJ0LlxuICAgICAgICBsZWcgPSBsZWdlbmQodEYpOyAgLy8gY3JlYXRlIHRoZSBsZWdlbmQuXG5cbiAgICAgXG59XG5cbiAgICAgICAgdmFyIGZyZXFEYXRhO1xuICBmdW5jdGlvbiB0ZXN0aW5nX2FnYWluIChkYXRhKSB7XG4gICAgICAgICAgICBmcmVxRGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgTmFtZTogZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBmcmVxOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3c6IGQubG93ZXN0X3ByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWlkOiAoZC5sb3dlc3RfcHJpY2UgKyBkLmhpZ2hlc3RfcHJpY2UpLzIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWdoOiBkLmhpZ2hlc3RfcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICBkYXNoYm9hcmQoJyNkYXNoYm9hcmQnLGZyZXFEYXRhKTtcbiAgICAgIH07XG4gICAgICBcbiJdLCJzb3VyY2VSb290IjoiIn0=