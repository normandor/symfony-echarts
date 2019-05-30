(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./assets/js/echarts/data_line.js":
/*!****************************************!*\
  !*** ./assets/js/echarts/data_line.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function createChartLines(arr) {
  var myChart = echarts.init(document.getElementById('chartPorZonaAnomalias'));
  var seriesList = [];

  for (var j = 0; j < arr['seriesNameTot'].length; j++) {
    seriesList.push({
      name: arr['seriesNameTot'][j],
      type: 'line',
      smooth: false,
      symbol: 'none',
      sampling: 'average',
      itemStyle: {
        normal: {
          color: arr['seriesLineColorTot'][j]
        }
      },
      areaStyle: {
        normal: {
          color: arr['seriesAreaColorTot'][j]
        }
      },
      data: arr['seriesDataTot'][j]
    });
  }

  option = {
    tooltip: {
      trigger: 'axis',
      position: function position(pt) {
        return [pt[0], '10%'];
      },
      extraCssText: 'text-align: left;'
    },
    legend: {
      orient: 'horizontal',
      // 'vertical'
      x: 'center',
      // 'center' | 'left' | {number},
      y: 'bottom',
      // 'center' | 'bottom' | {number}
      backgroundColor: 'none',
      borderColor: '#4e6a26',
      borderWidth: 0,
      padding: 0,
      itemGap: 15,
      textStyle: {
        color: '#4e6a26'
      },
      data: arr['dataLegendTot']
    },
    xAxis: {
      type: 'category',
      name: 'mes',
      boundaryGap: false,
      data: arr['dateTot']
    },
    yAxis: {
      name: arr['yAxisTitleTot'],
      type: 'value',
      boundaryGap: [0, '10%']
    },
    dataZoom: [{
      type: 'inside',
      start: 0,
      end: 100
    }, {
      start: 0,
      end: 100,
      backgroundColor: '#cbef99',
      dataBackgroundColor: '#8db356',
      fillerColor: '#4e6a2688',
      height: 15,
      handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
      handleSize: '80%',
      handleStyle: {
        color: '#fff',
        shadowBlur: 3,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffsetX: 2,
        shadowOffsetY: 2
      }
    }],
    series: seriesList
  };
  myChart.setOption(option);
}

var request = new XMLHttpRequest();
request.open('GET', './chartdata/linechart', true);

request.onload = function () {
  var arr = JSON.parse(this.response);
  console.log(arr);
  createChartLines(arr);
};

request.send();

/***/ }),

/***/ "./assets/js/echarts/data_pie.js":
/*!***************************************!*\
  !*** ./assets/js/echarts/data_pie.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);


function createChart(jsonData) {
  var myChart = echarts.init(document.getElementById('chartPie'));
  var itemStyle = {
    normal: {
      opacity: 0.7
    }
  };
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: function formatter(params) {
        return params.name + "\n" + Math.round(params.percent) + "%";
      }
    },
    series: [{
      name: 'rs',
      type: 'pie',
      radius: '55%',
      selectedMode: 'single',
      selectedOffset: 15,
      clockwise: true,
      label: {
        normal: {
          formatter: function formatter(params) {
            return params.name + "\n(" + Math.round(params.percent) + "%)";
          },
          textStyle: {
            fontSize: 12,
            color: '#4e6a26'
          }
        }
      },
      labelLine: {
        normal: {
          lineStyle: {
            color: '#4e6a26'
          }
        }
      },
      data: jsonData,
      itemStyle: itemStyle
    }]
  };
  myChart.setOption(option);
}

var request = new XMLHttpRequest();
request.open('GET', 'chartdata/piechart', true);

request.onload = function () {
  var arr = JSON.parse(this.response);
  createChart(arr);
};

request.send();

/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var document = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js").document;
// typeof document.createElement is 'object' in old IE
var exist = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return exist ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = typeof window == 'object' && window && window.Math == Math ? window
  : typeof self == 'object' && self && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js") && !__webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js")('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var nativeDefineProperty = Object.defineProperty;

exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ 1:
/*!******************************************************************************!*\
  !*** multi ./assets/js/echarts/data_line.js ./assets/js/echarts/data_pie.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./assets/js/echarts/data_line.js */"./assets/js/echarts/data_line.js");
module.exports = __webpack_require__(/*! ./assets/js/echarts/data_pie.js */"./assets/js/echarts/data_pie.js");


/***/ })

},[[1,"runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZWNoYXJ0cy9kYXRhX2xpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2VjaGFydHMvZGF0YV9waWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNoYXJ0TGluZXMiLCJhcnIiLCJteUNoYXJ0IiwiZWNoYXJ0cyIsImluaXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VyaWVzTGlzdCIsImoiLCJsZW5ndGgiLCJwdXNoIiwibmFtZSIsInR5cGUiLCJzbW9vdGgiLCJzeW1ib2wiLCJzYW1wbGluZyIsIml0ZW1TdHlsZSIsIm5vcm1hbCIsImNvbG9yIiwiYXJlYVN0eWxlIiwiZGF0YSIsIm9wdGlvbiIsInRvb2x0aXAiLCJ0cmlnZ2VyIiwicG9zaXRpb24iLCJwdCIsImV4dHJhQ3NzVGV4dCIsImxlZ2VuZCIsIm9yaWVudCIsIngiLCJ5IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsInBhZGRpbmciLCJpdGVtR2FwIiwidGV4dFN0eWxlIiwieEF4aXMiLCJib3VuZGFyeUdhcCIsInlBeGlzIiwiZGF0YVpvb20iLCJzdGFydCIsImVuZCIsImRhdGFCYWNrZ3JvdW5kQ29sb3IiLCJmaWxsZXJDb2xvciIsImhlaWdodCIsImhhbmRsZUljb24iLCJoYW5kbGVTaXplIiwiaGFuZGxlU3R5bGUiLCJzaGFkb3dCbHVyIiwic2hhZG93Q29sb3IiLCJzaGFkb3dPZmZzZXRYIiwic2hhZG93T2Zmc2V0WSIsInNlcmllcyIsInNldE9wdGlvbiIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJvbmxvYWQiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIiwiY3JlYXRlQ2hhcnQiLCJqc29uRGF0YSIsIm9wYWNpdHkiLCJmb3JtYXR0ZXIiLCJwYXJhbXMiLCJNYXRoIiwicm91bmQiLCJwZXJjZW50IiwicmFkaXVzIiwic2VsZWN0ZWRNb2RlIiwic2VsZWN0ZWRPZmZzZXQiLCJjbG9ja3dpc2UiLCJsYWJlbCIsImZvbnRTaXplIiwibGFiZWxMaW5lIiwibGluZVN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxTQUFTQSxnQkFBVCxDQUEwQkMsR0FBMUIsRUFBK0I7QUFFM0IsTUFBSUMsT0FBTyxHQUFHQyxPQUFPLENBQUNDLElBQVIsQ0FBYUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLHVCQUF4QixDQUFiLENBQWQ7QUFDQSxNQUFJQyxVQUFVLEdBQUcsRUFBakI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdB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Q0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQixNQUFNLG1CQUFPLENBQUMscUVBQW9CO0FBQ3RGLCtCQUErQixtQkFBTyxDQUFDLHlHQUFzQztBQUM3RSxzQkFBc0IsVUFBVTtBQUNoQyxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7O0FDTEQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGQSxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDcEQscUJBQXFCLG1CQUFPLENBQUMsdUZBQTZCO0FBQzFELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0Msa0JBQWtCLG1CQUFPLENBQUMsbUZBQTJCO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZ0JBQWdCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQSxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQSxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDcEQscUJBQXFCLG1CQUFPLENBQUMsdUdBQXFDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQ2hhcnRMaW5lcyhhcnIpIHtcbiAgICBcbiAgICB2YXIgbXlDaGFydCA9IGVjaGFydHMuaW5pdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnRQb3Jab25hQW5vbWFsaWFzJykpO1xuICAgIHZhciBzZXJpZXNMaXN0ID0gW107XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBhcnJbJ3Nlcmllc05hbWVUb3QnXS5sZW5ndGg7IGorKykge1xuICAgICAgICBzZXJpZXNMaXN0LnB1c2goXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogYXJyWydzZXJpZXNOYW1lVG90J11bal0sXG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgICAgIHNtb290aDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3ltYm9sOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgc2FtcGxpbmc6ICdhdmVyYWdlJyxcbiAgICAgICAgICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYXJyWydzZXJpZXNMaW5lQ29sb3JUb3QnXVtqXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhcmVhU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYXJyWydzZXJpZXNBcmVhQ29sb3JUb3QnXVtqXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRhOiBhcnJbJ3Nlcmllc0RhdGFUb3QnXVtqXVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9wdGlvbiA9IHtcbiAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgdHJpZ2dlcjogJ2F4aXMnLFxuICAgICAgICAgICAgcG9zaXRpb246IGZ1bmN0aW9uIChwdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbcHRbMF0sICcxMCUnXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHRyYUNzc1RleHQ6ICd0ZXh0LWFsaWduOiBsZWZ0OydcbiAgICAgICAgfSxcbiAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICBvcmllbnQ6ICdob3Jpem9udGFsJywgLy8gJ3ZlcnRpY2FsJ1xuICAgICAgICAgICAgeDogJ2NlbnRlcicsIC8vICdjZW50ZXInIHwgJ2xlZnQnIHwge251bWJlcn0sXG4gICAgICAgICAgICB5OiAnYm90dG9tJywgLy8gJ2NlbnRlcicgfCAnYm90dG9tJyB8IHtudW1iZXJ9XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdub25lJyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzRlNmEyNicsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMCxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICBpdGVtR2FwOiAxNSxcbiAgICAgICAgICAgIHRleHRTdHlsZToge2NvbG9yOiAnIzRlNmEyNid9LFxuICAgICAgICAgICAgZGF0YTogYXJyWydkYXRhTGVnZW5kVG90J11cbiAgICAgICAgfSxcbiAgICAgICAgeEF4aXM6IHtcbiAgICAgICAgICAgIHR5cGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICBuYW1lOiAnbWVzJyxcbiAgICAgICAgICAgIGJvdW5kYXJ5R2FwOiBmYWxzZSxcbiAgICAgICAgICAgIGRhdGE6IGFyclsnZGF0ZVRvdCddXG4gICAgICAgIH0sXG4gICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICBuYW1lOiBhcnJbJ3lBeGlzVGl0bGVUb3QnXSxcbiAgICAgICAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICAgICAgICBib3VuZGFyeUdhcDogWzAsICcxMCUnXVxuICAgICAgICB9LFxuICAgICAgICBkYXRhWm9vbTogW3tcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW5zaWRlJyxcbiAgICAgICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgICAgICBlbmQ6IDEwMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgICAgIGVuZDogMTAwLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNjYmVmOTknLFxuICAgICAgICAgICAgICAgIGRhdGFCYWNrZ3JvdW5kQ29sb3I6ICcjOGRiMzU2JyxcbiAgICAgICAgICAgICAgICBmaWxsZXJDb2xvcjogJyM0ZTZhMjY4OCcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNSxcbiAgICAgICAgICAgICAgICBoYW5kbGVJY29uOiAnTTEwLjcsMTEuOXYtMS4zSDkuM3YxLjNjLTQuOSwwLjMtOC44LDQuNC04LjgsOS40YzAsNSwzLjksOS4xLDguOCw5LjR2MS4zaDEuM3YtMS4zYzQuOS0wLjMsOC44LTQuNCw4LjgtOS40QzE5LjUsMTYuMywxNS42LDEyLjIsMTAuNywxMS45eiBNMTMuMywyNC40SDYuN1YyM2g2LjZWMjQuNHogTTEzLjMsMTkuNkg2Ljd2LTEuNGg2LjZWMTkuNnonLFxuICAgICAgICAgICAgICAgIGhhbmRsZVNpemU6ICc4MCUnLFxuICAgICAgICAgICAgICAgIGhhbmRsZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvd0JsdXI6IDMsXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjYpJyxcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93T2Zmc2V0WDogMixcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93T2Zmc2V0WTogMlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dLFxuICAgICAgICBzZXJpZXM6IHNlcmllc0xpc3RcbiAgICB9O1xuXG4gICAgbXlDaGFydC5zZXRPcHRpb24ob3B0aW9uKTtcbn1cblxudmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbnJlcXVlc3Qub3BlbignR0VUJywgJy4vY2hhcnRkYXRhL2xpbmVjaGFydCcsIHRydWUpO1xucmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyciA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZSk7XG4gICAgY29uc29sZS5sb2coYXJyKTtcbiAgICBjcmVhdGVDaGFydExpbmVzKGFycik7XG59O1xuXG5yZXF1ZXN0LnNlbmQoKTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUNoYXJ0KGpzb25EYXRhKSB7XG4gICAgdmFyIG15Q2hhcnQgPSBlY2hhcnRzLmluaXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0UGllJykpO1xuXG4gICAgdmFyIGl0ZW1TdHlsZSA9IHtcbiAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjdcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIG9wdGlvbiA9IHtcbiAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgdHJpZ2dlcjogJ2l0ZW0nLFxuICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtcy5uYW1lICsgXCJcXG5cIiArIE1hdGgucm91bmQocGFyYW1zLnBlcmNlbnQpICsgXCIlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgICBuYW1lOiAncnMnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgICAgICAgIHJhZGl1czogJzU1JScsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRNb2RlOiAnc2luZ2xlJyxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZE9mZnNldDogMTUsXG4gICAgICAgICAgICAgICAgY2xvY2t3aXNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtcy5uYW1lICsgXCJcXG4oXCIgKyBNYXRoLnJvdW5kKHBhcmFtcy5wZXJjZW50KSArIFwiJSlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjNGU2YTI2J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsYWJlbExpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyM0ZTZhMjYnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGE6IGpzb25EYXRhLFxuICAgICAgICAgICAgICAgIGl0ZW1TdHlsZTogaXRlbVN0eWxlXG4gICAgICAgICAgICB9XVxuICAgIH07XG4gICAgbXlDaGFydC5zZXRPcHRpb24ob3B0aW9uKTtcbn1cblxudmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbnJlcXVlc3Qub3BlbignR0VUJywgJ2NoYXJ0ZGF0YS9waWVjaGFydCcsIHRydWUpO1xucmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyciA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZSk7XG4gICAgY3JlYXRlQ2hhcnQoYXJyKTtcbn07XG5cbnJlcXVlc3Quc2VuZCgpO1xuXG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgZXhpc3QgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBleGlzdCA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIHdpbmRvdy5NYXRoID09IE1hdGggPyB3aW5kb3dcbiAgOiB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKSgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9IDc7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gbmF0aXZlRGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcgPSBGdW5jdGlvblByb3RvdHlwZS50b1N0cmluZztcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gRnVuY3Rpb24gaW5zdGFuY2VzIGAubmFtZWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXG5pZiAoREVTQ1JJUFRPUlMgJiYgIShOQU1FIGluIEZ1bmN0aW9uUHJvdG90eXBlKSkge1xuICBkZWZpbmVQcm9wZXJ0eShGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nLmNhbGwodGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==