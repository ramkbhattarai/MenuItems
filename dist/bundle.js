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
}

function dish_testing2() {

    var dish_data2 = [];

    dish_data2 = dish_data.filter(function (datum) {

        return parseInt(datum.first_appeared, 10) > 1900 && parseInt(datum.first_appeared, 10) < 1950;
    });

    testing_again(dish_data2.slice(0, 6));
}

function dish_testing3() {

    var dish_data3 = [];

    dish_data3 = dish_data.filter(function (datum) {

        return parseInt(datum.first_appeared, 10) > 1950 && parseInt(datum.first_appeared, 10) < 2000;
    });

    testing_again(dish_data3.slice(0, 6));
}

function dish_testing4() {

    var dish_data4 = [];

    dish_data4 = dish_data.filter(function (datum) {

        return parseInt(datum.first_appeared, 10) > 2000;
    });

    testing_again(dish_data4.slice(0, 6));
}

document.addEventListener("DOMContentLoaded", function () {

    dish_testing1();

    var typical = document.getElementById("typical");
    typical.onclick = function () {

        dish_testing1();
    };

    var special = document.getElementById("special");
    special.onclick = function () {

        dish_testing3();
    };
    var newari = document.getElementById("newari");
    newari.onclick = function () {

        dish_testing4();
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

    // computing total for each dish Name with low, high and mid price.
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
        // svg for histogram.
        //hGDim.w + hGDim.l + hGDim.r
        //hGDim.h + hGDim.t + hGDim.b
        var hGsvg = d3.select(id).append("svg").attr("width", 500).attr("height", 350).append("g").attr("transform", "translate(" + hGDim.l + "," + hGDim.t + ")");
        histogramdata = true;
        // function for x-axis mapping.
        var x = d3.scale.ordinal().rangeRoundBands([0, hGDim.w], 0.1).domain(fD.map(function (d) {
            return d[0];
        }));

        // x-axis to the histogram svg.
        hGsvg.append("g").attr("class", "x axis").attr("transform", "translate(0," + hGDim.h + ")").call(d3.svg.axis().scale(x).orient("bottom")).selectAll(".tick text").call(wrap, x.rangeBand());

        // to wrap the text of the name of the dishes so as to present nicely
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

        //  function for y-axis map.
        var y = d3.scale.linear().range([hGDim.h, 0]).domain([0, d3.max(fD, function (d) {
            return d[1];
        })]);

        // bars for histogram to contain rectangles and freq labels.
        var bars = hGsvg.selectAll(".bar").data(fD).enter().append("g").attr("class", "bar");

        // the rectangles.
        bars.append("rect").attr("x", function (d) {
            return x(d[0]);
        }).attr("y", function (d) {
            return y(d[1]);
        }).attr("width", x.rangeBand()).attr("height", function (d) {
            return hGDim.h - y(d[1]);
        }).attr('fill', barColor).on("mouseover", mouseover) // mouseover will be defined below.
        .on("mouseout", mouseout); // mouseout will be defined below.


        // the frequency labels above the rectangles.
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

            // update functions of pie-chart and legend.    
            pC.update(nD);
            leg.update(nD);
        }

        function mouseout(d) {
            //function to be called on mouseout.
            //  to reset the pie-chart and legend.    
            pC.update(tF);
            leg.update(tF);
        }

        //  function to update the bars. This will be used by pie-chart.
        hG.update = function (nD, color) {
            // to update the domain of the y-axis map to reflect change in frequencies.
            y.domain([0, d3.max(nD, function (d) {
                return d[1];
            })]);

            // To Attach the new data to the bars.
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
            return d3.format("$,")(d.freq);
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
                return d3.format("$,")(d.freq);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiXSwibmFtZXMiOlsiZGlzaF90ZXN0aW5nMSIsImRpc2hfZGF0YTEiLCJkaXNoX2RhdGEiLCJmaWx0ZXIiLCJwYXJzZUludCIsImRhdHVtIiwiZmlyc3RfYXBwZWFyZWQiLCJ0ZXN0aW5nX2FnYWluIiwic2xpY2UiLCJkaXNoX3Rlc3RpbmcyIiwiZGlzaF9kYXRhMiIsImRpc2hfdGVzdGluZzMiLCJkaXNoX2RhdGEzIiwiZGlzaF90ZXN0aW5nNCIsImRpc2hfZGF0YTQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0eXBpY2FsIiwiZ2V0RWxlbWVudEJ5SWQiLCJvbmNsaWNrIiwic3BlY2lhbCIsIm5ld2FyaSIsImhpc3RvZ3JhbWRhdGEiLCJwaWVjaGFydGRhdGEiLCJsZWdlbmRkYXRhIiwiZGFzaGJvYXJkIiwiaWQiLCJmRGF0YSIsImJhckNvbG9yIiwic2VnQ29sb3IiLCJjIiwibG93IiwibWlkIiwiaGlnaCIsImZvckVhY2giLCJkIiwidG90YWwiLCJmcmVxIiwiaGlzdG9HcmFtIiwiZkQiLCJoRyIsImhHRGltIiwidCIsInIiLCJiIiwibCIsInciLCJoIiwiZDMiLCJzZWxlY3QiLCJzZWxlY3RBbGwiLCJyZW1vdmUiLCJoR3N2ZyIsImFwcGVuZCIsImF0dHIiLCJ4Iiwic2NhbGUiLCJvcmRpbmFsIiwicmFuZ2VSb3VuZEJhbmRzIiwiZG9tYWluIiwibWFwIiwiY2FsbCIsInN2ZyIsImF4aXMiLCJvcmllbnQiLCJ3cmFwIiwicmFuZ2VCYW5kIiwidGV4dCIsIndpZHRoIiwiZWFjaCIsIndvcmRzIiwic3BsaXQiLCJyZXZlcnNlIiwid29yZCIsImxpbmUiLCJsaW5lTnVtYmVyIiwibGluZUhlaWdodCIsInkiLCJkeSIsInBhcnNlRmxvYXQiLCJ0c3BhbiIsInBvcCIsInB1c2giLCJqb2luIiwibm9kZSIsImdldENvbXB1dGVkVGV4dExlbmd0aCIsImxpbmVhciIsInJhbmdlIiwibWF4IiwiYmFycyIsImRhdGEiLCJlbnRlciIsIm9uIiwibW91c2VvdmVyIiwibW91c2VvdXQiLCJmb3JtYXQiLCJzdCIsInMiLCJOYW1lIiwibkQiLCJrZXlzIiwidHlwZSIsInBDIiwidXBkYXRlIiwibGVnIiwidEYiLCJjb2xvciIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInBpZUNoYXJ0IiwicEQiLCJwaWVEaW0iLCJNYXRoIiwibWluIiwicGllc3ZnIiwiYXJjIiwib3V0ZXJSYWRpdXMiLCJpbm5lclJhZGl1cyIsInBpZSIsImxheW91dCIsInNvcnQiLCJ2YWx1ZSIsIl9jdXJyZW50Iiwic3R5bGUiLCJhdHRyVHdlZW4iLCJhcmNUd2VlbiIsInYiLCJhIiwiaSIsImludGVycG9sYXRlIiwibGVnZW5kIiwibEQiLCJ0ciIsImdldExlZ2VuZCIsImFEIiwic3VtIiwic0YiLCJmcmVxRGF0YSIsIm5hbWUiLCJsb3dlc3RfcHJpY2UiLCJoaWdoZXN0X3ByaWNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7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QUF1QmdILFFBQXZCO0FBQ0ssRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL2luZGV4LmpzXCIpO1xuIiwiXG4gZnVuY3Rpb24gZGlzaF90ZXN0aW5nMSgpIHtcblxuICAgIGxldCBkaXNoX2RhdGExID0gW11cbiAgICBcbiAgICAgZGlzaF9kYXRhMSA9IGRpc2hfZGF0YS5maWx0ZXIoZGF0dW0gPT4ge1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIChwYXJzZUludChkYXR1bS5maXJzdF9hcHBlYXJlZCwgMTApIDwgMTk1MCk7XG4gICAgXG4gICAgICAgIH0pXG4gICAgICAgXG4gICAgICAgIHRlc3RpbmdfYWdhaW4oZGlzaF9kYXRhMS5zbGljZSgwLCAxMCkpXG4gICAgICAgXG4gICAgXG59XG5cbmZ1bmN0aW9uIGRpc2hfdGVzdGluZzIoKSB7XG5cbiAgICBsZXQgZGlzaF9kYXRhMiA9IFtdXG4gICBcbiAgICBkaXNoX2RhdGEyID0gZGlzaF9kYXRhLmZpbHRlcihkYXR1bSA9PiB7XG5cbiAgICAgICAgICAgIHJldHVybiAocGFyc2VJbnQoZGF0dW0uZmlyc3RfYXBwZWFyZWQsIDEwKSA+IDE5MDAgJiYgcGFyc2VJbnQoZGF0dW0uZmlyc3RfYXBwZWFyZWQsIDEwKSA8IDE5NTApO1xuXG4gICAgICAgIH0pXG4gICAgICAgXG4gICAgdGVzdGluZ19hZ2FpbihkaXNoX2RhdGEyLnNsaWNlKDAsIDYpKVxuICAgICAgICBcbiAgIFxufVxuXG5mdW5jdGlvbiBkaXNoX3Rlc3RpbmczKCkge1xuXG4gICAgbGV0IGRpc2hfZGF0YTMgPSBbXVxuICAgIFxuICAgIGRpc2hfZGF0YTMgPSBkaXNoX2RhdGEuZmlsdGVyKGRhdHVtID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIChwYXJzZUludChkYXR1bS5maXJzdF9hcHBlYXJlZCwgMTApID4gMTk1MCAmJiBwYXJzZUludChkYXR1bS5maXJzdF9hcHBlYXJlZCwgMTApIDwgMjAwMCk7XG5cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgdGVzdGluZ19hZ2FpbihkaXNoX2RhdGEzLnNsaWNlKDAsIDYpKVxuICAgICAgIFxuICAgIFxufVxuXG5mdW5jdGlvbiBkaXNoX3Rlc3Rpbmc0KCkge1xuXG4gICAgbGV0IGRpc2hfZGF0YTQgPSBbXVxuICAgXG4gICAgICAgIGRpc2hfZGF0YTQgPSBkaXNoX2RhdGEuZmlsdGVyKGRhdHVtID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIChwYXJzZUludChkYXR1bS5maXJzdF9hcHBlYXJlZCwgMTApID4gMjAwMCk7XG5cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgdGVzdGluZ19hZ2FpbihkaXNoX2RhdGE0LnNsaWNlKDAsIDYpKVxuICAgICAgIFxuICAgXG59XG5cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgICAgZGlzaF90ZXN0aW5nMSgpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHR5cGljYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR5cGljYWxcIik7XG4gICAgICAgIHR5cGljYWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBkaXNoX3Rlc3RpbmcxKCk7XG4gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIGNvbnN0IHNwZWNpYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwZWNpYWxcIik7XG4gICAgICAgIHNwZWNpYWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBkaXNoX3Rlc3RpbmczKCk7XG4gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld2FyaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3YXJpXCIpO1xuICAgICAgICBuZXdhcmkub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBkaXNoX3Rlc3Rpbmc0KCk7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9KVxuLy8gdGVzdGluZ3NcblxubGV0IGhpc3RvZ3JhbWRhdGE7XG5sZXQgcGllY2hhcnRkYXRhO1xubGV0IGxlZ2VuZGRhdGE7XG5cbmZ1bmN0aW9uIGRhc2hib2FyZChpZCwgZkRhdGEpIHtcbiAgICB2YXIgYmFyQ29sb3IgPSAnc3RlZWxibHVlJztcbiAgICBmdW5jdGlvbiBzZWdDb2xvcihjKSB7IHJldHVybiB7IGxvdzogXCIjODA3ZGJhXCIsIG1pZDogXCIjZTA4MjE0XCIsIGhpZ2g6IFwiIzQxYWI1ZFwiIH1bY107IH1cblxuICAgIC8vIGNvbXB1dGluZyB0b3RhbCBmb3IgZWFjaCBkaXNoIE5hbWUgd2l0aCBsb3csIGhpZ2ggYW5kIG1pZCBwcmljZS5cbiAgICBmRGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7IGQudG90YWwgPSBkLmZyZXEubG93ICsgZC5mcmVxLm1pZCArIGQuZnJlcS5oaWdoOyB9KTtcblxuICAgIC8vIGZ1bmN0aW9uIHRvIGhhbmRsZSBoaXN0b2dyYW0uXG4gICAgZnVuY3Rpb24gaGlzdG9HcmFtKGZEKSB7XG4gICAgICAgIHZhciBoRyA9IHt9LCBoR0RpbSA9IHsgdDogNjAsIHI6IDAsIGI6IDMwLCBsOiAwIH07XG4gICAgICAgIGhHRGltLncgPSA1MDAgLSBoR0RpbS5sIC0gaEdEaW0ucixcbiAgICAgICAgICAgIGhHRGltLmggPSAzMDAgLSBoR0RpbS50IC0gaEdEaW0uYjtcblxuICAgICAgICAgICAgaWYoaGlzdG9ncmFtZGF0YSl7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KGlkKS5zZWxlY3RBbGwoXCJzdmdcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIC8vIHN2ZyBmb3IgaGlzdG9ncmFtLlxuICAgICAgICAvL2hHRGltLncgKyBoR0RpbS5sICsgaEdEaW0uclxuICAgICAgICAvL2hHRGltLmggKyBoR0RpbS50ICsgaEdEaW0uYlxuICAgICAgICB2YXIgaEdzdmcgPSBkMy5zZWxlY3QoaWQpLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLDUwMCApXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCAzNTApLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgaEdEaW0ubCArIFwiLFwiICsgaEdEaW0udCArIFwiKVwiKTtcbiAgICAgICAgICAgIGhpc3RvZ3JhbWRhdGEgPSB0cnVlO1xuICAgICAgICAvLyBmdW5jdGlvbiBmb3IgeC1heGlzIG1hcHBpbmcuXG4gICAgICAgIHZhciB4ID0gZDMuc2NhbGUub3JkaW5hbCgpLnJhbmdlUm91bmRCYW5kcyhbMCwgaEdEaW0ud10sIDAuMSlcbiAgICAgICAgICAgIC5kb21haW4oZkQubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkWzBdOyB9KSk7XG5cbiAgICAgICAgLy8geC1heGlzIHRvIHRoZSBoaXN0b2dyYW0gc3ZnLlxuICAgICAgICBoR3N2Zy5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcInggYXhpc1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhHRGltLmggKyBcIilcIilcbiAgICAgICAgICAgIC5jYWxsKGQzLnN2Zy5heGlzKCkuc2NhbGUoeCkub3JpZW50KFwiYm90dG9tXCIpKVxuICAgICAgICAgICAgLnNlbGVjdEFsbChcIi50aWNrIHRleHRcIilcbiAgICAgICAgICAgIC5jYWxsKHdyYXAsIHgucmFuZ2VCYW5kKCkpO1xuXG4gICAgICAgICAgICAvLyB0byB3cmFwIHRoZSB0ZXh0IG9mIHRoZSBuYW1lIG9mIHRoZSBkaXNoZXMgc28gYXMgdG8gcHJlc2VudCBuaWNlbHlcbiAgICAgICAgICAgIGZ1bmN0aW9uIHdyYXAodGV4dCwgd2lkdGgpIHtcbiAgICAgICAgICAgIHRleHQuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IGQzLnNlbGVjdCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgd29yZHMgPSB0ZXh0LnRleHQoKS5zcGxpdCgvXFxzKy8pLnJldmVyc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgd29yZCxcbiAgICAgICAgICAgICAgICAgICAgbGluZSA9IFtdLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyID0gMCxcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodCA9IDEuMSwgLy8gZW1zXG4gICAgICAgICAgICAgICAgICAgIHkgPSB0ZXh0LmF0dHIoXCJ5XCIpLFxuICAgICAgICAgICAgICAgICAgICBkeSA9IHBhcnNlRmxvYXQodGV4dC5hdHRyKFwiZHlcIikpLFxuICAgICAgICAgICAgICAgICAgICB0c3BhbiA9IHRleHQudGV4dChudWxsKS5hcHBlbmQoXCJ0c3BhblwiKS5hdHRyKFwieFwiLCAwKS5hdHRyKFwieVwiLCB5KS5hdHRyKFwiZHlcIiwgZHkgKyBcImVtXCIpO1xuICAgICAgICAgICAgICAgIHdoaWxlICh3b3JkID0gd29yZHMucG9wKCkpIHtcbiAgICAgICAgICAgICAgICBsaW5lLnB1c2god29yZCk7XG4gICAgICAgICAgICAgICAgdHNwYW4udGV4dChsaW5lLmpvaW4oXCIgXCIpKTtcbiAgICAgICAgICAgICAgICBpZiAodHNwYW4ubm9kZSgpLmdldENvbXB1dGVkVGV4dExlbmd0aCgpID4gd2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgdHNwYW4udGV4dChsaW5lLmpvaW4oXCIgXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZSA9IFt3b3JkXTtcbiAgICAgICAgICAgICAgICAgICAgdHNwYW4gPSB0ZXh0LmFwcGVuZChcInRzcGFuXCIpLmF0dHIoXCJ4XCIsIDApLmF0dHIoXCJ5XCIsIHkpLmF0dHIoXCJkeVwiLCArK2xpbmVOdW1iZXIgKiBsaW5lSGVpZ2h0ICsgZHkgKyBcImVtXCIpLnRleHQod29yZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIC8vICBmdW5jdGlvbiBmb3IgeS1heGlzIG1hcC5cbiAgICAgICAgdmFyIHkgPSBkMy5zY2FsZS5saW5lYXIoKS5yYW5nZShbaEdEaW0uaCwgMF0pXG4gICAgICAgICAgICAuZG9tYWluKFswLCBkMy5tYXgoZkQsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkWzFdOyB9KV0pO1xuXG4gICAgICAgIC8vIGJhcnMgZm9yIGhpc3RvZ3JhbSB0byBjb250YWluIHJlY3RhbmdsZXMgYW5kIGZyZXEgbGFiZWxzLlxuICAgICAgICB2YXIgYmFycyA9IGhHc3ZnLnNlbGVjdEFsbChcIi5iYXJcIikuZGF0YShmRCkuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwiYmFyXCIpO1xuXG4gICAgICAgIC8vIHRoZSByZWN0YW5nbGVzLlxuICAgICAgICBiYXJzLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geChkWzBdKTsgfSlcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geShkWzFdKTsgfSlcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgeC5yYW5nZUJhbmQoKSlcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBoR0RpbS5oIC0geShkWzFdKTsgfSlcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgYmFyQ29sb3IpXG4gICAgICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgbW91c2VvdmVyKS8vIG1vdXNlb3ZlciB3aWxsIGJlIGRlZmluZWQgYmVsb3cuXG4gICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCBtb3VzZW91dCk7Ly8gbW91c2VvdXQgd2lsbCBiZSBkZWZpbmVkIGJlbG93LlxuXG4gICAgICAgIFxuICAgICAgICAvLyB0aGUgZnJlcXVlbmN5IGxhYmVscyBhYm92ZSB0aGUgcmVjdGFuZ2xlcy5cbiAgICAgICAgYmFycy5hcHBlbmQoXCJ0ZXh0XCIpLnRleHQoZnVuY3Rpb24gKGQpIHsgXG4gICAgICAgICAgICB2YXIgZGF0dW0gPSAoZDMuZm9ybWF0KFwiLFwiKShkWzFdKSkuc2xpY2UoMCwgNCk7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGRhdHVtIH0pXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHgoZFswXSkgKyB4LnJhbmdlQmFuZCgpIC8gMjsgfSlcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geShkWzFdKSAtIDU7IH0pXG4gICAgICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xuXG4gICAgICAgIGZ1bmN0aW9uIG1vdXNlb3ZlcihkKSB7ICAvLyB1dGlsaXR5IGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBtb3VzZW92ZXIuXG4gICAgICAgICAgICAvLyBmaWx0ZXIgZm9yIHNlbGVjdGVkIE5hbWUuXG4gICAgICAgICAgICB2YXIgc3QgPSBmRGF0YS5maWx0ZXIoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuTmFtZSA9PSBkWzBdOyB9KVswXSxcbiAgICAgICAgICAgICAgICBuRCA9IGQzLmtleXMoc3QuZnJlcSkubWFwKGZ1bmN0aW9uIChzKSB7IHJldHVybiB7IHR5cGU6IHMsIGZyZXE6IHN0LmZyZXFbc10gfTsgfSk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBmdW5jdGlvbnMgb2YgcGllLWNoYXJ0IGFuZCBsZWdlbmQuICAgIFxuICAgICAgICAgICAgcEMudXBkYXRlKG5EKTtcbiAgICAgICAgICAgIGxlZy51cGRhdGUobkQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbW91c2VvdXQoZCkgeyAgICAvL2Z1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBtb3VzZW91dC5cbiAgICAgICAgICAgIC8vICB0byByZXNldCB0aGUgcGllLWNoYXJ0IGFuZCBsZWdlbmQuICAgIFxuICAgICAgICAgICAgcEMudXBkYXRlKHRGKTtcbiAgICAgICAgICAgIGxlZy51cGRhdGUodEYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgYmFycy4gVGhpcyB3aWxsIGJlIHVzZWQgYnkgcGllLWNoYXJ0LlxuICAgICAgICBoRy51cGRhdGUgPSBmdW5jdGlvbiAobkQsIGNvbG9yKSB7XG4gICAgICAgICAgICAvLyB0byB1cGRhdGUgdGhlIGRvbWFpbiBvZiB0aGUgeS1heGlzIG1hcCB0byByZWZsZWN0IGNoYW5nZSBpbiBmcmVxdWVuY2llcy5cbiAgICAgICAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgobkQsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkWzFdOyB9KV0pO1xuXG4gICAgICAgICAgICAvLyBUbyBBdHRhY2ggdGhlIG5ldyBkYXRhIHRvIHRoZSBiYXJzLlxuICAgICAgICAgICAgdmFyIGJhcnMgPSBoR3N2Zy5zZWxlY3RBbGwoXCIuYmFyXCIpLmRhdGEobkQpO1xuXG4gICAgICAgICAgICAvLyB0cmFuc2l0aW9uIHRoZSBoZWlnaHQgYW5kIGNvbG9yIG9mIHJlY3RhbmdsZXMuXG4gICAgICAgICAgICBiYXJzLnNlbGVjdChcInJlY3RcIikudHJhbnNpdGlvbigpLmR1cmF0aW9uKDUwMClcbiAgICAgICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHkoZFsxXSk7IH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGhHRGltLmggLSB5KGRbMV0pOyB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBjb2xvcik7XG5cbiAgICAgICAgICAgIC8vIHRyYW5zaXRpb24gdGhlIGZyZXF1ZW5jeSBsYWJlbHMgbG9jYXRpb24gYW5kIGNoYW5nZSB2YWx1ZS5cbiAgICAgICAgICAgIGJhcnMuc2VsZWN0KFwidGV4dFwiKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oNTAwKVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiAoZDMuZm9ybWF0KFwiLFwiKShkWzFdKSkuc2xpY2UoMCw0KSB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geShkWzFdKSAtIDU7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoRztcbiAgICB9XG5cbiAgICAvLyBmdW5jdGlvbiB0byBoYW5kbGUgcGllQ2hhcnQuXG4gICAgZnVuY3Rpb24gcGllQ2hhcnQocEQpIHtcbiAgICAgICAgdmFyIHBDID0ge30sIHBpZURpbSA9IHsgdzogMjUwLCBoOiAyNTAgfTtcbiAgICAgICAgcGllRGltLnIgPSBNYXRoLm1pbihwaWVEaW0udywgcGllRGltLmgpIC8gMjtcblxuICAgICAgICAvLyBpZiAocGllY2hhcnRkYXRhKSB7XG4gICAgICAgIC8vICAgICBkMy5zZWxlY3QoaWQpLnNlbGVjdEFsbChcInN2Z1wiKS5yZW1vdmUoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBjcmVhdGUgc3ZnIGZvciBwaWUgY2hhcnQuXG4gICAgICAgIHZhciBwaWVzdmcgPSBkMy5zZWxlY3QoaWQpLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBwaWVEaW0udykuYXR0cihcImhlaWdodFwiLCBwaWVEaW0uaCkuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBwaWVEaW0udyAvIDIgKyBcIixcIiArIHBpZURpbS5oIC8gMiArIFwiKVwiKTtcblxuICAgICAgICAgICAgLy8gcGllY2hhcnRkYXRhID0gdHJ1ZTtcbiAgICAgICAgLy8gY3JlYXRlIGZ1bmN0aW9uIHRvIGRyYXcgdGhlIGFyY3Mgb2YgdGhlIHBpZSBzbGljZXMuXG4gICAgICAgIHZhciBhcmMgPSBkMy5zdmcuYXJjKCkub3V0ZXJSYWRpdXMocGllRGltLnIgLSAxMCkuaW5uZXJSYWRpdXMoMCk7XG5cbiAgICAgICAgLy8gY3JlYXRlIGEgZnVuY3Rpb24gdG8gY29tcHV0ZSB0aGUgcGllIHNsaWNlIGFuZ2xlcy5cbiAgICAgICAgdmFyIHBpZSA9IGQzLmxheW91dC5waWUoKS5zb3J0KG51bGwpLnZhbHVlKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmZyZXE7IH0pO1xuXG4gICAgICAgIC8vIERyYXcgdGhlIHBpZSBzbGljZXMuXG4gICAgICAgIHBpZXN2Zy5zZWxlY3RBbGwoXCJwYXRoXCIpLmRhdGEocGllKHBEKSkuZW50ZXIoKS5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIGFyYylcbiAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uIChkKSB7IHRoaXMuX2N1cnJlbnQgPSBkOyB9KVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gc2VnQ29sb3IoZC5kYXRhLnR5cGUpOyB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIG1vdXNlb3Zlcikub24oXCJtb3VzZW91dFwiLCBtb3VzZW91dCk7XG5cbiAgICAgICAgLy8gY3JlYXRlIGZ1bmN0aW9uIHRvIHVwZGF0ZSBwaWUtY2hhcnQuIFRoaXMgd2lsbCBiZSB1c2VkIGJ5IGhpc3RvZ3JhbS5cbiAgICAgICAgcEMudXBkYXRlID0gZnVuY3Rpb24gKG5EKSB7XG4gICAgICAgICAgICBwaWVzdmcuc2VsZWN0QWxsKFwicGF0aFwiKS5kYXRhKHBpZShuRCkpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig1MDApXG4gICAgICAgICAgICAgICAgLmF0dHJUd2VlbihcImRcIiwgYXJjVHdlZW4pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFV0aWxpdHkgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIG1vdXNlb3ZlciBhIHBpZSBzbGljZS5cbiAgICAgICAgZnVuY3Rpb24gbW91c2VvdmVyKGQpIHtcbiAgICAgICAgICAgIC8vIGNhbGwgdGhlIHVwZGF0ZSBmdW5jdGlvbiBvZiBoaXN0b2dyYW0gd2l0aCBuZXcgZGF0YS5cbiAgICAgICAgICAgIGhHLnVwZGF0ZShmRGF0YS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3YuTmFtZSwgdi5mcmVxW2QuZGF0YS50eXBlXV07XG4gICAgICAgICAgICB9KSwgc2VnQ29sb3IoZC5kYXRhLnR5cGUpKTtcbiAgICAgICAgfVxuICAgICAgICAvL1V0aWxpdHkgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIG1vdXNlb3V0IGEgcGllIHNsaWNlLlxuICAgICAgICBmdW5jdGlvbiBtb3VzZW91dChkKSB7XG4gICAgICAgICAgICAvLyBjYWxsIHRoZSB1cGRhdGUgZnVuY3Rpb24gb2YgaGlzdG9ncmFtIHdpdGggYWxsIGRhdGEuXG4gICAgICAgICAgICBoRy51cGRhdGUoZkRhdGEubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFt2Lk5hbWUsIHYudG90YWxdO1xuICAgICAgICAgICAgfSksIGJhckNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBbmltYXRpbmcgdGhlIHBpZS1zbGljZSByZXF1aXJpbmcgYSBjdXN0b20gZnVuY3Rpb24gd2hpY2ggc3BlY2lmaWVzXG4gICAgICAgIC8vIGhvdyB0aGUgaW50ZXJtZWRpYXRlIHBhdGhzIHNob3VsZCBiZSBkcmF3bi5cbiAgICAgICAgZnVuY3Rpb24gYXJjVHdlZW4oYSkge1xuICAgICAgICAgICAgdmFyIGkgPSBkMy5pbnRlcnBvbGF0ZSh0aGlzLl9jdXJyZW50LCBhKTtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQgPSBpKDApO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiBhcmMoaSh0KSk7IH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBDO1xuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIHRvIGhhbmRsZSBsZWdlbmQuXG4gICAgZnVuY3Rpb24gbGVnZW5kKGxEKSB7XG4gICAgICAgIHZhciBsZWcgPSB7fTtcblxuICAgICAgICBpZiAobGVnZW5kZGF0YSkge1xuICAgICAgICAgICAgZDMuc2VsZWN0KGlkKS5zZWxlY3RBbGwoXCJ0YWJsZVwiKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjcmVhdGUgdGFibGUgZm9yIGxlZ2VuZC5cbiAgICAgICAgdmFyIGxlZ2VuZCA9IGQzLnNlbGVjdChpZCkuYXBwZW5kKFwidGFibGVcIik7XG4gICAgICAgIGxlZ2VuZC5hdHRyKCdjbGFzcycsICdsZWdlbmQnKTtcblxuICAgICAgICAvLyBjcmVhdGUgb25lIHJvdyBwZXIgc2VnbWVudC5cbiAgICAgICAgdmFyIHRyID0gbGVnZW5kLmFwcGVuZChcInRib2R5XCIpLnNlbGVjdEFsbChcInRyXCIpLmRhdGEobEQpLmVudGVyKCkuYXBwZW5kKFwidHJcIik7XG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSBmaXJzdCBjb2x1bW4gZm9yIGVhY2ggc2VnbWVudC5cbiAgICAgICAgdHIuYXBwZW5kKFwidGRcIikuYXBwZW5kKFwic3ZnXCIpLmF0dHIoXCJ3aWR0aFwiLCAnMTYnKS5hdHRyKFwiaGVpZ2h0XCIsICcxNicpLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgJzE2JykuYXR0cihcImhlaWdodFwiLCAnMTYnKVxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBzZWdDb2xvcihkLnR5cGUpOyB9KTtcblxuICAgICAgICAgICAgbGVnZW5kZGF0YSA9IHRydWU7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgc2Vjb25kIGNvbHVtbiBmb3IgZWFjaCBzZWdtZW50LlxuICAgICAgICB0ci5hcHBlbmQoXCJ0ZFwiKS50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnR5cGU7IH0pO1xuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgdGhpcmQgY29sdW1uIGZvciBlYWNoIHNlZ21lbnQuXG4gICAgICAgIHRyLmFwcGVuZChcInRkXCIpLmF0dHIoXCJjbGFzc1wiLCAnbGVnZW5kRnJlcScpXG4gICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZDMuZm9ybWF0KFwiJCxcIikoZC5mcmVxKTsgfSk7XG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSBmb3VydGggY29sdW1uIGZvciBlYWNoIHNlZ21lbnQuXG4gICAgICAgIHRyLmFwcGVuZChcInRkXCIpLmF0dHIoXCJjbGFzc1wiLCAnbGVnZW5kUGVyYycpXG4gICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZ2V0TGVnZW5kKGQsIGxEKTsgfSk7XG5cbiAgICAgICAgLy8gVXRpbGl0eSBmdW5jdGlvbiB0byBiZSB1c2VkIHRvIHVwZGF0ZSB0aGUgbGVnZW5kLlxuICAgICAgICBsZWcudXBkYXRlID0gZnVuY3Rpb24gKG5EKSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGRhdGEgYXR0YWNoZWQgdG8gdGhlIHJvdyBlbGVtZW50cy5cbiAgICAgICAgICAgIHZhciBsID0gbGVnZW5kLnNlbGVjdChcInRib2R5XCIpLnNlbGVjdEFsbChcInRyXCIpLmRhdGEobkQpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGZyZXF1ZW5jaWVzLlxuICAgICAgICAgICAgbC5zZWxlY3QoXCIubGVnZW5kRnJlcVwiKS50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkMy5mb3JtYXQoXCIkLFwiKShkLmZyZXEpOyB9KTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBwZXJjZW50YWdlIGNvbHVtbi5cbiAgICAgICAgICAgIGwuc2VsZWN0KFwiLmxlZ2VuZFBlcmNcIikudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZ2V0TGVnZW5kKGQsIG5EKTsgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRMZWdlbmQoZCwgYUQpIHsgLy8gVXRpbGl0eSBmdW5jdGlvbiB0byBjb21wdXRlIHBlcmNlbnRhZ2UuXG4gICAgICAgICAgICByZXR1cm4gZDMuZm9ybWF0KFwiJVwiKShkLmZyZXEgLyBkMy5zdW0oYUQubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiB2LmZyZXE7IH0pKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGVnO1xuICAgIH1cblxuICAgIC8vIGNhbGN1bGF0ZSB0b3RhbCBmcmVxdWVuY3kgYnkgc2VnbWVudCBmb3IgYWxsIE5hbWUuXG4gICAgdmFyIHRGID0gWydsb3cnLCAnbWlkJywgJ2hpZ2gnXS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogZCwgZnJlcTogZDMuc3VtKGZEYXRhLm1hcChmdW5jdGlvbiAodCkgeyByZXR1cm4gdC5mcmVxW2RdOyB9KSkgfTtcbiAgICB9KTtcblxuICAgIC8vIGNhbGN1bGF0ZSB0b3RhbCBmcmVxdWVuY3kgYnkgTmFtZSBmb3IgYWxsIHNlZ21lbnQuXG4gICAgdmFyIHNGID0gZkRhdGEubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBbZC5OYW1lLCBkLnRvdGFsXTsgfSk7XG5cbiAgICB2YXIgaEcgPSBoaXN0b0dyYW0oc0YpLCAvLyBjcmVhdGUgdGhlIGhpc3RvZ3JhbS5cbiAgICAgICAgcEMgPSBwaWVDaGFydCh0RiksIC8vIGNyZWF0ZSB0aGUgcGllLWNoYXJ0LlxuICAgICAgICBsZWcgPSBsZWdlbmQodEYpOyAgLy8gY3JlYXRlIHRoZSBsZWdlbmQuXG5cbiAgICAgXG59XG5cbiAgICAgICAgdmFyIGZyZXFEYXRhO1xuICBmdW5jdGlvbiB0ZXN0aW5nX2FnYWluIChkYXRhKSB7XG4gICAgICAgICAgICBmcmVxRGF0YSA9IGRhdGEubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgTmFtZTogZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBmcmVxOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3c6IGQubG93ZXN0X3ByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWlkOiAoZC5sb3dlc3RfcHJpY2UgKyBkLmhpZ2hlc3RfcHJpY2UpLzIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWdoOiBkLmhpZ2hlc3RfcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICBkYXNoYm9hcmQoJyNkYXNoYm9hcmQnLGZyZXFEYXRhKTtcbiAgICAgIH07XG4gICAgICBcbiJdLCJzb3VyY2VSb290IjoiIn0=