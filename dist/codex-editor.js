/*!
 * Codex Editor
 * 
 * @version 2.7.22
 * 
 * @licence Apache-2.0
 * @author CodeX-Team <https://ifmo.su>
 * 
 * @uses html-janitor
 * @licence Apache-2.0 (https://github.com/guardian/html-janitor/blob/master/LICENSE)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CodexEditor"] = factory();
	else
		root["CodexEditor"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/sprite.svg":
/*!*************************!*\
  !*** ./dist/sprite.svg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\">\n<symbol id=\"arrow-down\" viewBox=\"0 0 14 14\">\n  <path transform=\"matrix(1 0 0 -1 0 14)\" d=\"M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z\"/>\n\n</symbol>\n<symbol id=\"arrow-up\" viewBox=\"0 0 14 14\">\n    <path d=\"M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z\"/>\n\n</symbol>\n<symbol id=\"bold\" viewBox=\"0 0 13 15\">\n  <path d=\"M5.996 13.9H1.752c-.613 0-1.05-.137-1.312-.412-.262-.275-.393-.712-.393-1.312V1.737C.047 1.125.18.684.449.416.718.147 1.152.013 1.752.013h4.5a10.5 10.5 0 0 1 1.723.123c.487.082.922.24 1.308.474a3.43 3.43 0 0 1 1.449 1.738c.132.363.199.747.199 1.151 0 1.39-.695 2.406-2.084 3.05 1.825.581 2.737 1.712 2.737 3.391 0 .777-.199 1.477-.596 2.099a3.581 3.581 0 0 1-1.61 1.378c-.424.177-.91.301-1.46.374-.549.073-1.19.109-1.922.109zm-.209-6.167H2.86v4.055h3.022c1.9 0 2.851-.686 2.851-2.056 0-.7-.246-1.21-.739-1.525-.492-.316-1.228-.474-2.207-.474zM2.86 2.125v3.59h2.577c.7 0 1.242-.066 1.624-.198a1.55 1.55 0 0 0 .876-.758c.158-.265.237-.562.237-.89 0-.702-.25-1.167-.748-1.398-.499-.23-1.26-.346-2.283-.346H2.86z\"/>\n\n</symbol>\n<symbol id=\"cross\" viewBox=\"0 0 237 237\">\n  <path transform=\"rotate(45 280.675 51.325)\" d=\"M191 191V73c0-5.523 4.477-10 10-10h25c5.523 0 10 4.477 10 10v118h118c5.523 0 10 4.477 10 10v25c0 5.523-4.477 10-10 10H236v118c0 5.523-4.477 10-10 10h-25c-5.523 0-10-4.477-10-10V236H73c-5.523 0-10-4.477-10-10v-25c0-5.523 4.477-10 10-10h118z\"/>\n\n</symbol>\n<symbol id=\"dots\" viewBox=\"0 0 18 4\">\n  <g fill-rule=\"evenodd\">\n    <circle cx=\"9\" cy=\"2\" r=\"2\"/>\n    <circle cx=\"2\" cy=\"2\" r=\"2\"/>\n    <circle cx=\"16\" cy=\"2\" r=\"2\"/>\n  </g>\n\n</symbol>\n<symbol id=\"italic\" viewBox=\"0 0 6 15\">\n  <path d=\"M4 5.2l-1.368 7.474c-.095.518-.29.91-.585 1.175a1.468 1.468 0 0 1-1.01.398c-.379 0-.662-.136-.85-.407-.186-.272-.234-.66-.141-1.166L1.4 5.276c.093-.511.282-.896.567-1.155a1.43 1.43 0 0 1 .994-.389c.38 0 .668.13.867.389.199.259.256.618.172 1.08zm-.79-2.67c-.36 0-.648-.111-.863-.332-.215-.221-.286-.534-.212-.938.067-.366.253-.668.559-.905A1.57 1.57 0 0 1 3.673 0c.334 0 .612.107.831.322.22.215.292.527.217.938-.073.398-.256.709-.55.933a1.55 1.55 0 0 1-.961.336z\"/>\n\n</symbol>\n<symbol id=\"link\" viewBox=\"0 0 15 14\">\n    <path transform=\"rotate(-45 11.83 6.678)\" d=\"M11.332 4.013a51.07 51.07 0 0 1-2.28.001A1.402 1.402 0 0 0 7.7 2.25H3.65a1.4 1.4 0 1 0 0 2.8h.848c.206.86.693 1.61 1.463 2.25H3.65a3.65 3.65 0 1 1 0-7.3H7.7a3.65 3.65 0 0 1 3.632 4.013zM10.9 0h2a3.65 3.65 0 0 1 0 7.3H8.85a3.65 3.65 0 0 1-3.632-4.011A62.68 62.68 0 0 1 7.5 3.273 1.401 1.401 0 0 0 8.85 5.05h4.05a1.4 1.4 0 0 0 0-2.8h-.48C12.274 1.664 11.694.785 10.9 0z\"/>\n\n</symbol>\n<symbol id=\"plus\" viewBox=\"0 0 14 14\">\n    <path d=\"M8.05 5.8h4.625a1.125 1.125 0 0 1 0 2.25H8.05v4.625a1.125 1.125 0 0 1-2.25 0V8.05H1.125a1.125 1.125 0 0 1 0-2.25H5.8V1.125a1.125 1.125 0 0 1 2.25 0V5.8z\"/>\n\n</symbol>\n<symbol id=\"sad-face\" viewBox=\"0 0 52 52\">\n    <path fill=\"#D76B6B\" fill-rule=\"nonzero\" d=\"M26 52C11.64 52 0 40.36 0 26S11.64 0 26 0s26 11.64 26 26-11.64 26-26 26zm0-3.25c12.564 0 22.75-10.186 22.75-22.75S38.564 3.25 26 3.25 3.25 13.436 3.25 26 13.436 48.75 26 48.75zM15.708 33.042a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm23.834 0a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm-15.875 5.452a1.083 1.083 0 1 1-1.834-1.155c1.331-2.114 3.49-3.179 6.334-3.179 2.844 0 5.002 1.065 6.333 3.18a1.083 1.083 0 1 1-1.833 1.154c-.913-1.45-2.366-2.167-4.5-2.167s-3.587.717-4.5 2.167z\"/>\n\n</symbol>\n<symbol id=\"unlink\" viewBox=\"0 0 16 18\">\n    <path transform=\"rotate(-45 8.358 11.636)\" d=\"M9.14 9.433c.008-.12-.087-.686-.112-.81a1.4 1.4 0 0 0-1.64-1.106l-3.977.772a1.4 1.4 0 0 0 .535 2.749l.935-.162s.019 1.093.592 2.223l-1.098.148A3.65 3.65 0 1 1 2.982 6.08l3.976-.773c1.979-.385 3.838.919 4.28 2.886.51 2.276-1.084 2.816-1.073 2.935.011.12-.394-1.59-1.026-1.696zm3.563-.875l2.105 3.439a3.65 3.65 0 0 1-6.19 3.868L6.47 12.431c-1.068-1.71-.964-2.295-.49-3.07.067-.107 1.16-1.466 1.48-.936-.12.036.9 1.33.789 1.398-.656.41-.28.76.13 1.415l2.145 3.435a1.4 1.4 0 0 0 2.375-1.484l-1.132-1.941c.42-.435 1.237-1.054.935-2.69zm1.88-2.256h3.4a1.125 1.125 0 0 1 0 2.25h-3.4a1.125 1.125 0 0 1 0-2.25zM11.849.038c.62 0 1.125.503 1.125 1.125v3.4a1.125 1.125 0 0 1-2.25 0v-3.4c0-.622.503-1.125 1.125-1.125z\"/>\n\n</symbol></svg>"

/***/ }),

/***/ "./node_modules/@babel/polyfill/lib/noConflict.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/noConflict.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/es6 */ "./node_modules/core-js/es6/index.js");

__webpack_require__(/*! core-js/fn/array/includes */ "./node_modules/core-js/fn/array/includes.js");

__webpack_require__(/*! core-js/fn/string/pad-start */ "./node_modules/core-js/fn/string/pad-start.js");

__webpack_require__(/*! core-js/fn/string/pad-end */ "./node_modules/core-js/fn/string/pad-end.js");

__webpack_require__(/*! core-js/fn/symbol/async-iterator */ "./node_modules/core-js/fn/symbol/async-iterator.js");

__webpack_require__(/*! core-js/fn/object/get-own-property-descriptors */ "./node_modules/core-js/fn/object/get-own-property-descriptors.js");

__webpack_require__(/*! core-js/fn/object/values */ "./node_modules/core-js/fn/object/values.js");

__webpack_require__(/*! core-js/fn/object/entries */ "./node_modules/core-js/fn/object/entries.js");

__webpack_require__(/*! core-js/fn/promise/finally */ "./node_modules/core-js/fn/promise/finally.js");

__webpack_require__(/*! core-js/web */ "./node_modules/core-js/web/index.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/@babel/polyfill/noConflict.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/polyfill/noConflict.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./lib/noConflict */ "./node_modules/@babel/polyfill/lib/noConflict.js");


/***/ }),

/***/ "./node_modules/@babel/register/lib/browser.js":
/*!*****************************************************!*\
  !*** ./node_modules/@babel/register/lib/browser.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = register;
exports.revert = revert;

function register() {}

function revert() {}

/***/ }),

/***/ "./node_modules/@babel/register/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@babel/register/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = function (...args) {
  return register(...args);
};

exports.__esModule = true;

const node = __webpack_require__(/*! ./node */ "./node_modules/@babel/register/lib/browser.js");

const register = node.default;
Object.assign(exports, node);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/@codexteam/shortcuts/lib/shortcuts.js":
/*!************************************************************!*\
  !*** ./node_modules/@codexteam/shortcuts/lib/shortcuts.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Library for handling keyboard shortcuts
 * @copyright undefined
 * @license MIT
 * @author CodeX (https://ifmo.su)
 * @version 1.0.0
 */
!function(e,t){if(true)module.exports=t();else { var r, n; }}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i={0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,BACKSPACE:8,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46},u={CMD:["CMD","CONTROL","COMMAND","WINDOWS","CTRL"],SHIFT:["SHIFT"],ALT:["ALT","OPTION"]},c=function(){function e(t){var n=this;r(this,e),this.commands={},this.keys={},this.parseShortcutName(t.name),this.element=t.on,this.callback=t.callback,this.executeShortcut=function(e){n.execute(e)},this.element.addEventListener("keydown",this.executeShortcut,!1)}return o(e,[{key:"parseShortcutName",value:function(e){e=e.split("+");for(var t=0;t<e.length;t++)if(e[t]=e[t].toUpperCase(),e[t].length>1)for(var n in u)u[n].includes(e[t])&&(this.commands[n]=!0);else this.keys[e[t]]=!0}},{key:"execute",value:function(e){var t=e.ctrlKey||e.metaKey,n=e.shiftKey,r=e.altKey,o={CMD:t,SHIFT:n,ALT:r},u=void 0,c=!0;for(u in this.commands)c=c&&o[u];var a=void 0,s=!0;for(a in this.keys)s=s&&e.keyCode===i[a];c&&s&&this.callback(e)}},{key:"remove",value:function(){this.element.removeEventListener("keydown",this.executeShortcut)}}]),e}();t.default=c}])});

/***/ }),

/***/ "./node_modules/codex-notifier/dist/bundle.js":
/*!****************************************************!*\
  !*** ./node_modules/codex-notifier/dist/bundle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){"use strict";n(1),
/*!
 * Codex JavaScript Notification module
 * https://github.com/codex-team/js-notifier
 */
t.exports=function(){var t=n(6),e="cdx-notify--bounce-in",r=null;return{show:function(n){if(n.message){!function(){if(r)return!0;r=t.getWrapper(),document.body.appendChild(r)}();var o=null,i=n.time||8e3;switch(n.type){case"confirm":o=t.confirm(n);break;case"prompt":o=t.prompt(n);break;default:o=t.alert(n),window.setTimeout(function(){o.remove()},i)}r.appendChild(o),o.classList.add(e)}}}}()},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,'.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:\'\';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:\'\';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}',""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),a=null,c=0,s=[],f=n(5);function d(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(x(o.parts[a],e))}else{var c=[];for(a=0;a<o.parts.length;a++)c.push(x(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:c}}}}function u(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function l(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=s[s.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),s.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function p(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=s.indexOf(t);e>=0&&s.splice(e,1)}function b(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),m(e,t.attrs),l(t,e),e}function m(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function x(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var s=c++;n=a||(a=b(e)),r=h.bind(null,n,s,!1),o=h.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),l(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,n,e),o=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){p(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=u(t,e);return d(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var a=n[i];(c=r[a.id]).refs--,o.push(c)}t&&d(u(t,e),e);for(i=0;i<o.length;i++){var c;if(0===(c=o[i]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete r[c.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function h(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){"use strict";t.exports=function(){var t="cdx-notifies",e="cdx-notify",n="cdx-notify__cross",r="cdx-notify__button--confirm",o="cdx-notify__button--cancel",i="cdx-notify__input",a="cdx-notify__button",c="cdx-notify__btns-wrapper",s=function(t){var r=document.createElement("DIV"),o=document.createElement("DIV"),i=t.message,a=t.style;return r.classList.add(e),a&&r.classList.add(e+"--"+a),r.innerHTML=i,o.classList.add(n),o.addEventListener("click",r.remove.bind(r)),r.appendChild(o),r};return{alert:s,confirm:function(t){var e=s(t),i=document.createElement("div"),f=document.createElement("button"),d=document.createElement("button"),u=e.querySelector("."+n),l=t.cancelHandler,p=t.okHandler;return i.classList.add(c),f.innerHTML=t.okText||"Confirm",d.innerHTML=t.cancelText||"Cancel",f.classList.add(a),d.classList.add(a),f.classList.add(r),d.classList.add(o),l&&"function"==typeof l&&(d.addEventListener("click",l),u.addEventListener("click",l)),p&&"function"==typeof p&&f.addEventListener("click",p),f.addEventListener("click",e.remove.bind(e)),d.addEventListener("click",e.remove.bind(e)),i.appendChild(f),i.appendChild(d),e.appendChild(i),e},prompt:function(t){var e=s(t),o=document.createElement("div"),f=document.createElement("button"),d=document.createElement("input"),u=e.querySelector("."+n),l=t.cancelHandler,p=t.okHandler;return o.classList.add(c),f.innerHTML=t.okText||"Ok",f.classList.add(a),f.classList.add(r),d.classList.add(i),t.placeholder&&d.setAttribute("placeholder",t.placeholder),t.default&&(d.value=t.default),t.inputType&&(d.type=t.inputType),l&&"function"==typeof l&&u.addEventListener("click",l),p&&"function"==typeof p&&f.addEventListener("click",function(){p(d.value)}),f.addEventListener("click",e.remove.bind(e)),o.appendChild(d),o.appendChild(f),e.appendChild(o),e},getWrapper:function(){var e=document.createElement("DIV");return e.classList.add(t),e}}}()}])});

/***/ }),

/***/ "./node_modules/core-js/es6/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/es6/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! ../modules/es6.object.create */ "./node_modules/core-js/modules/es6.object.create.js");
__webpack_require__(/*! ../modules/es6.object.define-property */ "./node_modules/core-js/modules/es6.object.define-property.js");
__webpack_require__(/*! ../modules/es6.object.define-properties */ "./node_modules/core-js/modules/es6.object.define-properties.js");
__webpack_require__(/*! ../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.object.get-prototype-of */ "./node_modules/core-js/modules/es6.object.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
__webpack_require__(/*! ../modules/es6.object.get-own-property-names */ "./node_modules/core-js/modules/es6.object.get-own-property-names.js");
__webpack_require__(/*! ../modules/es6.object.freeze */ "./node_modules/core-js/modules/es6.object.freeze.js");
__webpack_require__(/*! ../modules/es6.object.seal */ "./node_modules/core-js/modules/es6.object.seal.js");
__webpack_require__(/*! ../modules/es6.object.prevent-extensions */ "./node_modules/core-js/modules/es6.object.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.object.is-frozen */ "./node_modules/core-js/modules/es6.object.is-frozen.js");
__webpack_require__(/*! ../modules/es6.object.is-sealed */ "./node_modules/core-js/modules/es6.object.is-sealed.js");
__webpack_require__(/*! ../modules/es6.object.is-extensible */ "./node_modules/core-js/modules/es6.object.is-extensible.js");
__webpack_require__(/*! ../modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
__webpack_require__(/*! ../modules/es6.object.is */ "./node_modules/core-js/modules/es6.object.is.js");
__webpack_require__(/*! ../modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.function.bind */ "./node_modules/core-js/modules/es6.function.bind.js");
__webpack_require__(/*! ../modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
__webpack_require__(/*! ../modules/es6.function.has-instance */ "./node_modules/core-js/modules/es6.function.has-instance.js");
__webpack_require__(/*! ../modules/es6.parse-int */ "./node_modules/core-js/modules/es6.parse-int.js");
__webpack_require__(/*! ../modules/es6.parse-float */ "./node_modules/core-js/modules/es6.parse-float.js");
__webpack_require__(/*! ../modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
__webpack_require__(/*! ../modules/es6.number.to-fixed */ "./node_modules/core-js/modules/es6.number.to-fixed.js");
__webpack_require__(/*! ../modules/es6.number.to-precision */ "./node_modules/core-js/modules/es6.number.to-precision.js");
__webpack_require__(/*! ../modules/es6.number.epsilon */ "./node_modules/core-js/modules/es6.number.epsilon.js");
__webpack_require__(/*! ../modules/es6.number.is-finite */ "./node_modules/core-js/modules/es6.number.is-finite.js");
__webpack_require__(/*! ../modules/es6.number.is-integer */ "./node_modules/core-js/modules/es6.number.is-integer.js");
__webpack_require__(/*! ../modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
__webpack_require__(/*! ../modules/es6.number.is-safe-integer */ "./node_modules/core-js/modules/es6.number.is-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.max-safe-integer */ "./node_modules/core-js/modules/es6.number.max-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.min-safe-integer */ "./node_modules/core-js/modules/es6.number.min-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.parse-float */ "./node_modules/core-js/modules/es6.number.parse-float.js");
__webpack_require__(/*! ../modules/es6.number.parse-int */ "./node_modules/core-js/modules/es6.number.parse-int.js");
__webpack_require__(/*! ../modules/es6.math.acosh */ "./node_modules/core-js/modules/es6.math.acosh.js");
__webpack_require__(/*! ../modules/es6.math.asinh */ "./node_modules/core-js/modules/es6.math.asinh.js");
__webpack_require__(/*! ../modules/es6.math.atanh */ "./node_modules/core-js/modules/es6.math.atanh.js");
__webpack_require__(/*! ../modules/es6.math.cbrt */ "./node_modules/core-js/modules/es6.math.cbrt.js");
__webpack_require__(/*! ../modules/es6.math.clz32 */ "./node_modules/core-js/modules/es6.math.clz32.js");
__webpack_require__(/*! ../modules/es6.math.cosh */ "./node_modules/core-js/modules/es6.math.cosh.js");
__webpack_require__(/*! ../modules/es6.math.expm1 */ "./node_modules/core-js/modules/es6.math.expm1.js");
__webpack_require__(/*! ../modules/es6.math.fround */ "./node_modules/core-js/modules/es6.math.fround.js");
__webpack_require__(/*! ../modules/es6.math.hypot */ "./node_modules/core-js/modules/es6.math.hypot.js");
__webpack_require__(/*! ../modules/es6.math.imul */ "./node_modules/core-js/modules/es6.math.imul.js");
__webpack_require__(/*! ../modules/es6.math.log10 */ "./node_modules/core-js/modules/es6.math.log10.js");
__webpack_require__(/*! ../modules/es6.math.log1p */ "./node_modules/core-js/modules/es6.math.log1p.js");
__webpack_require__(/*! ../modules/es6.math.log2 */ "./node_modules/core-js/modules/es6.math.log2.js");
__webpack_require__(/*! ../modules/es6.math.sign */ "./node_modules/core-js/modules/es6.math.sign.js");
__webpack_require__(/*! ../modules/es6.math.sinh */ "./node_modules/core-js/modules/es6.math.sinh.js");
__webpack_require__(/*! ../modules/es6.math.tanh */ "./node_modules/core-js/modules/es6.math.tanh.js");
__webpack_require__(/*! ../modules/es6.math.trunc */ "./node_modules/core-js/modules/es6.math.trunc.js");
__webpack_require__(/*! ../modules/es6.string.from-code-point */ "./node_modules/core-js/modules/es6.string.from-code-point.js");
__webpack_require__(/*! ../modules/es6.string.raw */ "./node_modules/core-js/modules/es6.string.raw.js");
__webpack_require__(/*! ../modules/es6.string.trim */ "./node_modules/core-js/modules/es6.string.trim.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/es6.string.code-point-at */ "./node_modules/core-js/modules/es6.string.code-point-at.js");
__webpack_require__(/*! ../modules/es6.string.ends-with */ "./node_modules/core-js/modules/es6.string.ends-with.js");
__webpack_require__(/*! ../modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
__webpack_require__(/*! ../modules/es6.string.repeat */ "./node_modules/core-js/modules/es6.string.repeat.js");
__webpack_require__(/*! ../modules/es6.string.starts-with */ "./node_modules/core-js/modules/es6.string.starts-with.js");
__webpack_require__(/*! ../modules/es6.string.anchor */ "./node_modules/core-js/modules/es6.string.anchor.js");
__webpack_require__(/*! ../modules/es6.string.big */ "./node_modules/core-js/modules/es6.string.big.js");
__webpack_require__(/*! ../modules/es6.string.blink */ "./node_modules/core-js/modules/es6.string.blink.js");
__webpack_require__(/*! ../modules/es6.string.bold */ "./node_modules/core-js/modules/es6.string.bold.js");
__webpack_require__(/*! ../modules/es6.string.fixed */ "./node_modules/core-js/modules/es6.string.fixed.js");
__webpack_require__(/*! ../modules/es6.string.fontcolor */ "./node_modules/core-js/modules/es6.string.fontcolor.js");
__webpack_require__(/*! ../modules/es6.string.fontsize */ "./node_modules/core-js/modules/es6.string.fontsize.js");
__webpack_require__(/*! ../modules/es6.string.italics */ "./node_modules/core-js/modules/es6.string.italics.js");
__webpack_require__(/*! ../modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");
__webpack_require__(/*! ../modules/es6.string.small */ "./node_modules/core-js/modules/es6.string.small.js");
__webpack_require__(/*! ../modules/es6.string.strike */ "./node_modules/core-js/modules/es6.string.strike.js");
__webpack_require__(/*! ../modules/es6.string.sub */ "./node_modules/core-js/modules/es6.string.sub.js");
__webpack_require__(/*! ../modules/es6.string.sup */ "./node_modules/core-js/modules/es6.string.sup.js");
__webpack_require__(/*! ../modules/es6.date.now */ "./node_modules/core-js/modules/es6.date.now.js");
__webpack_require__(/*! ../modules/es6.date.to-json */ "./node_modules/core-js/modules/es6.date.to-json.js");
__webpack_require__(/*! ../modules/es6.date.to-iso-string */ "./node_modules/core-js/modules/es6.date.to-iso-string.js");
__webpack_require__(/*! ../modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
__webpack_require__(/*! ../modules/es6.date.to-primitive */ "./node_modules/core-js/modules/es6.date.to-primitive.js");
__webpack_require__(/*! ../modules/es6.array.is-array */ "./node_modules/core-js/modules/es6.array.is-array.js");
__webpack_require__(/*! ../modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
__webpack_require__(/*! ../modules/es6.array.of */ "./node_modules/core-js/modules/es6.array.of.js");
__webpack_require__(/*! ../modules/es6.array.join */ "./node_modules/core-js/modules/es6.array.join.js");
__webpack_require__(/*! ../modules/es6.array.slice */ "./node_modules/core-js/modules/es6.array.slice.js");
__webpack_require__(/*! ../modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
__webpack_require__(/*! ../modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");
__webpack_require__(/*! ../modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
__webpack_require__(/*! ../modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
__webpack_require__(/*! ../modules/es6.array.some */ "./node_modules/core-js/modules/es6.array.some.js");
__webpack_require__(/*! ../modules/es6.array.every */ "./node_modules/core-js/modules/es6.array.every.js");
__webpack_require__(/*! ../modules/es6.array.reduce */ "./node_modules/core-js/modules/es6.array.reduce.js");
__webpack_require__(/*! ../modules/es6.array.reduce-right */ "./node_modules/core-js/modules/es6.array.reduce-right.js");
__webpack_require__(/*! ../modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");
__webpack_require__(/*! ../modules/es6.array.last-index-of */ "./node_modules/core-js/modules/es6.array.last-index-of.js");
__webpack_require__(/*! ../modules/es6.array.copy-within */ "./node_modules/core-js/modules/es6.array.copy-within.js");
__webpack_require__(/*! ../modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");
__webpack_require__(/*! ../modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
__webpack_require__(/*! ../modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
__webpack_require__(/*! ../modules/es6.array.species */ "./node_modules/core-js/modules/es6.array.species.js");
__webpack_require__(/*! ../modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! ../modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
__webpack_require__(/*! ../modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
__webpack_require__(/*! ../modules/es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
__webpack_require__(/*! ../modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
__webpack_require__(/*! ../modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
__webpack_require__(/*! ../modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
__webpack_require__(/*! ../modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es6.map */ "./node_modules/core-js/modules/es6.map.js");
__webpack_require__(/*! ../modules/es6.set */ "./node_modules/core-js/modules/es6.set.js");
__webpack_require__(/*! ../modules/es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js");
__webpack_require__(/*! ../modules/es6.weak-set */ "./node_modules/core-js/modules/es6.weak-set.js");
__webpack_require__(/*! ../modules/es6.typed.array-buffer */ "./node_modules/core-js/modules/es6.typed.array-buffer.js");
__webpack_require__(/*! ../modules/es6.typed.data-view */ "./node_modules/core-js/modules/es6.typed.data-view.js");
__webpack_require__(/*! ../modules/es6.typed.int8-array */ "./node_modules/core-js/modules/es6.typed.int8-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint8-array */ "./node_modules/core-js/modules/es6.typed.uint8-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint8-clamped-array */ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js");
__webpack_require__(/*! ../modules/es6.typed.int16-array */ "./node_modules/core-js/modules/es6.typed.int16-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint16-array */ "./node_modules/core-js/modules/es6.typed.uint16-array.js");
__webpack_require__(/*! ../modules/es6.typed.int32-array */ "./node_modules/core-js/modules/es6.typed.int32-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint32-array */ "./node_modules/core-js/modules/es6.typed.uint32-array.js");
__webpack_require__(/*! ../modules/es6.typed.float32-array */ "./node_modules/core-js/modules/es6.typed.float32-array.js");
__webpack_require__(/*! ../modules/es6.typed.float64-array */ "./node_modules/core-js/modules/es6.typed.float64-array.js");
__webpack_require__(/*! ../modules/es6.reflect.apply */ "./node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__(/*! ../modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! ../modules/es6.reflect.define-property */ "./node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__(/*! ../modules/es6.reflect.delete-property */ "./node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__(/*! ../modules/es6.reflect.enumerate */ "./node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__(/*! ../modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.reflect.has */ "./node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ "./node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__(/*! ../modules/es6.reflect.own-keys */ "./node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.reflect.set */ "./node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js");


/***/ }),

/***/ "./node_modules/core-js/fn/array/includes.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/includes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.includes;


/***/ }),

/***/ "./node_modules/core-js/fn/object/entries.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/object/entries.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.entries;


/***/ }),

/***/ "./node_modules/core-js/fn/object/get-own-property-descriptors.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/fn/object/get-own-property-descriptors.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.getOwnPropertyDescriptors;


/***/ }),

/***/ "./node_modules/core-js/fn/object/values.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/object/values.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/core-js/modules/es7.object.values.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/core-js/fn/promise/finally.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/promise/finally.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ../../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../../modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Promise['finally'];


/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-end.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-end.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.string.pad-end */ "./node_modules/core-js/modules/es7.string.pad-end.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padEnd;


/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-start.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-start.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.string.pad-start */ "./node_modules/core-js/modules/es7.string.pad-start.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padStart;


/***/ }),

/***/ "./node_modules/core-js/fn/symbol/async-iterator.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/fn/symbol/async-iterator.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js").f('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseFloat;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;

module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseInt;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;
var ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
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

/***/ "./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")) {
  var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
  var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
  var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
  var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
  var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
  var $buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
  var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
  var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
  var propertyDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
  var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
  var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
  var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
  var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
  var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
  var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
  var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
  var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
  var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
  var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
  var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
  var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
  var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js");
  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
  var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
  var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
  var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js");
  var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
  var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('copyWithin');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $every = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(4);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $filter = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(2);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $forEach = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var STRICT = __webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $indexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js") != Object || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $map = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(1);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $some = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(3);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('Array');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toISOString = __webpack_require__(/*! ./_date-to-iso-string */ "./node_modules/core-js/modules/_date-to-iso-string.js");

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ "./node_modules/core-js/modules/_date-to-primitive.js"));


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var HAS_INSTANCE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var log1p = __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js");
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ "./node_modules/core-js/modules/_math-fround.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var _isFinite = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isInteger = __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js");
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js").f;
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var rApply = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('RegExp');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var ArrayBuffer = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").ArrayBuffer;
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(ARRAY_BUFFER);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.G + $export.W + $export.F * !__webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js").ABV, {
  DataView: __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js").DataView
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $entries = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js");
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "./node_modules/core-js/web/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/web/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! ../modules/web.immediate */ "./node_modules/core-js/modules/web.immediate.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js");


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/html-janitor/src/html-janitor.js":
/*!*******************************************************!*\
  !*** ./node_modules/html-janitor/src/html-janitor.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {

  /**
   * @param {Object} config.tags Dictionary of allowed tags.
   * @param {boolean} config.keepNestedBlockElements Default false.
   */
  function HTMLJanitor(config) {

    var tagDefinitions = config['tags'];
    var tags = Object.keys(tagDefinitions);

    var validConfigValues = tags
      .map(function(k) { return typeof tagDefinitions[k]; })
      .every(function(type) { return type === 'object' || type === 'boolean' || type === 'function'; });

    if(!validConfigValues) {
      throw new Error("The configuration was invalid");
    }

    this.config = config;
  }

  // TODO: not exhaustive?
  var blockElementNames = ['P', 'LI', 'TD', 'TH', 'DIV', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'PRE'];
  function isBlockElement(node) {
    return blockElementNames.indexOf(node.nodeName) !== -1;
  }

  var inlineElementNames = ['A', 'B', 'STRONG', 'I', 'EM', 'SUB', 'SUP', 'U', 'STRIKE'];
  function isInlineElement(node) {
    return inlineElementNames.indexOf(node.nodeName) !== -1;
  }

  HTMLJanitor.prototype.clean = function (html) {
    const sandbox = document.implementation.createHTMLDocument();
    const root = sandbox.createElement("div");
    root.innerHTML = html;

    this._sanitize(sandbox, root);

    return root.innerHTML;
  };

  HTMLJanitor.prototype._sanitize = function (document, parentNode) {
    var treeWalker = createTreeWalker(document, parentNode);
    var node = treeWalker.firstChild();

    if (!node) { return; }

    do {
      if (node.nodeType === Node.TEXT_NODE) {
        // If this text node is just whitespace and the previous or next element
        // sibling is a block element, remove it
        // N.B.: This heuristic could change. Very specific to a bug with
        // `contenteditable` in Firefox: http://jsbin.com/EyuKase/1/edit?js,output
        // FIXME: make this an option?
        if (node.data.trim() === ''
            && ((node.previousElementSibling && isBlockElement(node.previousElementSibling))
                 || (node.nextElementSibling && isBlockElement(node.nextElementSibling)))) {
          parentNode.removeChild(node);
          this._sanitize(document, parentNode);
          break;
        } else {
          continue;
        }
      }

      // Remove all comments
      if (node.nodeType === Node.COMMENT_NODE) {
        parentNode.removeChild(node);
        this._sanitize(document, parentNode);
        break;
      }

      var isInline = isInlineElement(node);
      var containsBlockElement;
      if (isInline) {
        containsBlockElement = Array.prototype.some.call(node.childNodes, isBlockElement);
      }

      // Block elements should not be nested (e.g. <li><p>...); if
      // they are, we want to unwrap the inner block element.
      var isNotTopContainer = !! parentNode.parentNode;
      var isNestedBlockElement =
            isBlockElement(parentNode) &&
            isBlockElement(node) &&
            isNotTopContainer;

      var nodeName = node.nodeName.toLowerCase();

      var allowedAttrs = getAllowedAttrs(this.config, nodeName, node);

      var isInvalid = isInline && containsBlockElement;

      // Drop tag entirely according to the whitelist *and* if the markup
      // is invalid.
      if (isInvalid || shouldRejectNode(node, allowedAttrs)
          || (!this.config.keepNestedBlockElements && isNestedBlockElement)) {
        // Do not keep the inner text of SCRIPT/STYLE elements.
        if (! (node.nodeName === 'SCRIPT' || node.nodeName === 'STYLE')) {
          while (node.childNodes.length > 0) {
            parentNode.insertBefore(node.childNodes[0], node);
          }
        }
        parentNode.removeChild(node);

        this._sanitize(document, parentNode);
        break;
      }

      // Sanitize attributes
      for (var a = 0; a < node.attributes.length; a += 1) {
        var attr = node.attributes[a];

        if (shouldRejectAttr(attr, allowedAttrs, node)) {
          node.removeAttribute(attr.name);
          // Shift the array to continue looping.
          a = a - 1;
        }
      }

      // Sanitize children
      this._sanitize(document, node);

    } while ((node = treeWalker.nextSibling()));
  };

  function createTreeWalker(document, node) {
    return document.createTreeWalker(node,
                                     NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT,
                                     null, false);
  }

  function getAllowedAttrs(config, nodeName, node){
    if (typeof config.tags[nodeName] === 'function') {
      return config.tags[nodeName](node);
    } else {
      return config.tags[nodeName];
    }
  }

  function shouldRejectNode(node, allowedAttrs){
    if (typeof allowedAttrs === 'undefined') {
      return true;
    } else if (typeof allowedAttrs === 'boolean') {
      return !allowedAttrs;
    }

    return false;
  }

  function shouldRejectAttr(attr, allowedAttrs, node){
    var attrName = attr.name.toLowerCase();

    if (allowedAttrs === true){
      return false;
    } else if (typeof allowedAttrs[attrName] === 'function'){
      return !allowedAttrs[attrName](attr.value, node);
    } else if (typeof allowedAttrs[attrName] === 'undefined'){
      return true;
    } else if (allowedAttrs[attrName] === false) {
      return true;
    } else if (typeof allowedAttrs[attrName] === 'string') {
      return (allowedAttrs[attrName] !== attr.value);
    }

    return false;
  }

  return HTMLJanitor;

}));


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/codex.ts":
/*!**********************!*\
  !*** ./src/codex.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"), __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/register */ "./node_modules/@babel/register/lib/index.js"), __webpack_require__(/*! components/polyfills */ "./src/components/polyfills.ts"), __webpack_require__(/*! ./components/core */ "./src/components/core.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _typeof2, _classCallCheck2, _createClass2, _register, _polyfills, _core) {
  'use strict';
  /**
   * Apply polyfills
   */

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _typeof2 = _interopRequireDefault(_typeof2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _core = _interopRequireDefault(_core);

  /**
   * Codex Editor
   *
   * Short Description (눈_눈;)
   * @version 2.0
   *
   * @licence Apache-2.0
   * @author CodeX-Team <https://ifmo.su>
   */
  var CodexEditor =
  /*#__PURE__*/
  function () {
    (0, _createClass2.default)(CodexEditor, null, [{
      key: "version",

      /** Editor version */
      get: function get() {
        return "2.7.22";
      }
      /**
       * @constructor
       *
       * @param {EditorConfig|String|undefined} [configuration] - user configuration
       */

    }]);

    function CodexEditor(configuration) {
      var _this = this;

      (0, _classCallCheck2.default)(this, CodexEditor);

      /**
       * Set default onReady function
       */
      var onReady = function onReady() {};
      /**
       * If `onReady` was passed in `configuration` then redefine onReady function
       */


      if ((0, _typeof2.default)(configuration) === 'object' && typeof configuration.onReady === 'function') {
        onReady = configuration.onReady;
      }
      /**
       * Create a CodeX Editor instance
       */


      var editor = new _core.default(configuration);
      /**
       * We need to export isReady promise in the constructor
       * as it can be used before other API methods are exported
       * @type {Promise<void>}
       */

      this.isReady = editor.isReady.then(function () {
        _this.exportAPI(editor);

        onReady();
      });
    }
    /**
     * Export external API methods
     *
     * @param editor
     */


    (0, _createClass2.default)(CodexEditor, [{
      key: "exportAPI",
      value: function exportAPI(editor) {
        var _this2 = this;

        var fieldsToExport = ['configuration'];

        var destroy = function destroy() {
          editor.moduleInstances.Listeners.removeAll();
          editor.moduleInstances.UI.destroy();
          editor.moduleInstances.ModificationsObserver.destroy();
          editor = null;

          for (var field in _this2) {
            if (_this2.hasOwnProperty(field)) {
              delete _this2[field];
            }
          }

          Object.setPrototypeOf(_this2, null);
        };

        fieldsToExport.forEach(function (field) {
          _this2[field] = editor[field];
        });
        this.destroy = destroy;
        Object.setPrototypeOf(this, editor.moduleInstances.API.methods);
        delete this.exportAPI;
      }
    }]);
    return CodexEditor;
  }();

  _exports.default = CodexEditor;
  CodexEditor.displayName = "CodexEditor";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/__module.ts":
/*!************************************!*\
  !*** ./src/components/__module.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);

  /**
   * @abstract
   * @class      Module
   * @classdesc  All modules inherits from this class.
   *
   * @typedef {Module} Module
   * @property {Object} config - Editor user settings
   * @property {EditorModules} Editor - List of Editor modules
   */
  var Module =
  /*#__PURE__*/
  function () {
    /**
     * @constructor
     * @param {EditorConfig}
     */
    function Module(_ref) {
      var config = _ref.config;
      (0, _classCallCheck2.default)(this, Module);

      if ((this instanceof Module ? this.constructor : void 0) === Module) {
        throw new TypeError('Constructors for abstract class Module are not allowed.');
      }

      this.config = config;
    }
    /**
     * Editor modules setter
     * @param {EditorModules} Editor
     */


    (0, _createClass2.default)(Module, [{
      key: "state",
      set: function set(Editor) {
        this.Editor = Editor;
      }
    }]);
    return Module;
  }();

  _exports.default = Module;
  Module.displayName = "Module";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/block-tunes/block-tune-delete.ts":
/*!*********************************************************!*\
  !*** ./src/components/block-tunes/block-tune-delete.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! ../dom */ "./src/components/dom.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _dom) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _dom = _interopRequireDefault(_dom);

  var DeleteTune =
  /*#__PURE__*/
  function () {
    /**
     * DeleteTune constructor
     *
     * @param {{api: API}} api
     */
    function DeleteTune(_ref) {
      var _this = this;

      var api = _ref.api;
      (0, _classCallCheck2.default)(this, DeleteTune);

      /**
       * Styles
       * @type {{wrapper: string}}
       */
      this.CSS = {
        wrapper: 'ass',
        button: 'ce-settings__button',
        buttonDelete: 'ce-settings__button--delete',
        buttonConfirm: 'ce-settings__button--confirm'
      };
      /**
       * Tune nodes
       */

      this.nodes = {
        button: null
      };
      this.api = api;

      this.resetConfirmation = function () {
        _this.setConfirmation(false);
      };
    }
    /**
     * Create "Delete" button and add click event listener
     * @returns [Element}
     */


    (0, _createClass2.default)(DeleteTune, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        this.nodes.button = _dom.default.make('div', [this.CSS.button, this.CSS.buttonDelete], {});
        this.nodes.button.appendChild(_dom.default.svg('cross', 12, 12));
        this.api.listeners.on(this.nodes.button, 'click', function (event) {
          return _this2.handleClick(event);
        }, false);
        return this.nodes.button;
      }
      /**
       * Delete block conditions passed
       * @param {MouseEvent} event
       */

    }, {
      key: "handleClick",
      value: function handleClick(event) {
        /**
         * if block is not waiting the confirmation, subscribe on block-settings-closing event to reset
         * otherwise delete block
         */
        if (!this.needConfirmation) {
          this.setConfirmation(true);
          /**
           * Subscribe on event.
           * When toolbar block settings is closed but block deletion is not confirmed,
           * then reset confirmation state
           */

          this.api.events.on('block-settings-closed', this.resetConfirmation);
        } else {
          /**
           * Unsubscribe from block-settings closing event
           */
          this.api.events.off('block-settings-closed', this.resetConfirmation);
          this.api.blocks.delete();
          this.api.toolbar.close();
          /**
           * Prevent firing ui~documentClicked that can drop currentBlock pointer
           */

          event.stopPropagation();
        }
      }
      /**
       * change tune state
       */

    }, {
      key: "setConfirmation",
      value: function setConfirmation(state) {
        this.needConfirmation = state;
        this.nodes.button.classList.add(this.CSS.buttonConfirm);
      }
    }]);
    return DeleteTune;
  }();

  _exports.default = DeleteTune;
  DeleteTune.displayName = "DeleteTune";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/block-tunes/block-tune-move-down.ts":
/*!************************************************************!*\
  !*** ./src/components/block-tunes/block-tune-move-down.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! ../dom */ "./src/components/dom.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _dom) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _dom = _interopRequireDefault(_dom);

  /**
   * @class MoveDownTune
   * @classdesc Editor's default tune - Moves down highlighted block
   *
   * @copyright <CodeX Team> 2018
   */
  var MoveDownTune =
  /*#__PURE__*/
  function () {
    /**
     * MoveDownTune constructor
     *
     * @param {{api: API}} api
     */
    function MoveDownTune(_ref) {
      var api = _ref.api;
      (0, _classCallCheck2.default)(this, MoveDownTune);

      /**
       * Styles
       * @type {{wrapper: string}}
       */
      this.CSS = {
        button: 'ce-settings__button',
        wrapper: 'ce-tune-move-down',
        animation: 'wobble'
      };
      this.api = api;
    }
    /**
     * Return 'move down' button
     */


    (0, _createClass2.default)(MoveDownTune, [{
      key: "render",
      value: function render() {
        var _this = this;

        var moveDownButton = _dom.default.make('div', [this.CSS.button, this.CSS.wrapper], {});

        moveDownButton.appendChild(_dom.default.svg('arrow-down', 14, 14));
        this.api.listeners.on(moveDownButton, 'click', function (event) {
          return _this.handleClick(event, moveDownButton);
        }, false);
        return moveDownButton;
      }
      /**
       * Handle clicks on 'move down' button
       * @param {MouseEvent} event
       * @param {HTMLElement} button
       */

    }, {
      key: "handleClick",
      value: function handleClick(event, button) {
        var _this2 = this;

        var currentBlockIndex = this.api.blocks.getCurrentBlockIndex(); // If Block is last do nothing

        if (currentBlockIndex === this.api.blocks.getBlocksCount() - 1) {
          button.classList.add(this.CSS.animation);
          window.setTimeout(function () {
            button.classList.remove(_this2.CSS.animation);
          }, 500);
          return;
        }

        var nextBlockElement = this.api.blocks.getBlockByIndex(currentBlockIndex + 1);
        var nextBlockCoords = nextBlockElement.getBoundingClientRect();
        var scrollOffset = Math.abs(window.innerHeight - nextBlockElement.offsetHeight);
        /**
         * Next block ends on screen.
         * Increment scroll by next block's height to save element onscreen-position
         */

        if (nextBlockCoords.top < window.innerHeight) {
          scrollOffset = window.scrollY + nextBlockElement.offsetHeight;
        }

        window.scrollTo(0, scrollOffset);
        /** Change blocks positions */

        this.api.blocks.swap(currentBlockIndex, currentBlockIndex + 1);
      }
    }]);
    return MoveDownTune;
  }();

  _exports.default = MoveDownTune;
  MoveDownTune.displayName = "MoveDownTune";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/block-tunes/block-tune-move-up.ts":
/*!**********************************************************!*\
  !*** ./src/components/block-tunes/block-tune-move-up.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! ../dom */ "./src/components/dom.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _dom) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _dom = _interopRequireDefault(_dom);

  /**
   * @class MoveUpTune
   * @classdesc Editor's default tune that moves up selected block
   *
   * @copyright <CodeX Team> 2018
   */
  var MoveUpTune =
  /*#__PURE__*/
  function () {
    /**
     * MoveUpTune constructor
     *
     * @param {{api: API}} api
     */
    function MoveUpTune(_ref) {
      var api = _ref.api;
      (0, _classCallCheck2.default)(this, MoveUpTune);

      /**
       * Styles
       * @type {{wrapper: string}}
       */
      this.CSS = {
        button: 'ce-settings__button',
        wrapper: 'ce-tune-move-up',
        animation: 'wobble'
      };
      this.api = api;
    }
    /**
     * Create "MoveUp" button and add click event listener
     * @returns [HTMLElement}
     */


    (0, _createClass2.default)(MoveUpTune, [{
      key: "render",
      value: function render() {
        var _this = this;

        var moveUpButton = _dom.default.make('div', [this.CSS.button, this.CSS.wrapper], {});

        moveUpButton.appendChild(_dom.default.svg('arrow-up', 14, 14));
        this.api.listeners.on(moveUpButton, 'click', function (event) {
          return _this.handleClick(event, moveUpButton);
        }, false);
        return moveUpButton;
      }
      /**
       * Move current block up
       * @param {MouseEvent} event
       * @param {HTMLElement} button
       */

    }, {
      key: "handleClick",
      value: function handleClick(event, button) {
        var _this2 = this;

        var currentBlockIndex = this.api.blocks.getCurrentBlockIndex();

        if (currentBlockIndex === 0) {
          button.classList.add(this.CSS.animation);
          window.setTimeout(function () {
            button.classList.remove(_this2.CSS.animation);
          }, 500);
          return;
        }

        var currentBlockElement = this.api.blocks.getBlockByIndex(currentBlockIndex);
        var previousBlockElement = this.api.blocks.getBlockByIndex(currentBlockIndex - 1);
        /**
         * Here is two cases:
         *  - when previous block has negative offset and part of it is visible on window, then we scroll
         *  by window's height and add offset which is mathematically difference between two blocks
         *
         *  - when previous block is visible and has offset from the window,
         *      than we scroll window to the difference between this offsets.
         */

        var currentBlockCoords = currentBlockElement.getBoundingClientRect(),
            previousBlockCoords = previousBlockElement.getBoundingClientRect();
        var scrollUpOffset;

        if (previousBlockCoords.top > 0) {
          scrollUpOffset = Math.abs(currentBlockCoords.top) - Math.abs(previousBlockCoords.top);
        } else {
          scrollUpOffset = window.innerHeight - Math.abs(currentBlockCoords.top) + Math.abs(previousBlockCoords.top);
        }

        window.scrollBy(0, -1 * scrollUpOffset);
        /** Change blocks positions */

        this.api.blocks.swap(currentBlockIndex, currentBlockIndex - 1);
      }
    }]);
    return MoveUpTune;
  }();

  _exports.default = MoveUpTune;
  MoveUpTune.displayName = "MoveUpTune";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/block.ts":
/*!*********************************!*\
  !*** ./src/components/block.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"), __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! ./dom */ "./src/components/dom.ts"), __webpack_require__(/*! ./utils */ "./src/components/utils.ts"), __webpack_require__(/*! ./block-tunes/block-tune-move-up */ "./src/components/block-tunes/block-tune-move-up.ts"), __webpack_require__(/*! ./block-tunes/block-tune-delete */ "./src/components/block-tunes/block-tune-delete.ts"), __webpack_require__(/*! ./block-tunes/block-tune-move-down */ "./src/components/block-tunes/block-tune-move-down.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _regenerator, _asyncToGenerator2, _classCallCheck2, _createClass2, _dom, _utils, _blockTuneMoveUp, _blockTuneDelete, _blockTuneMoveDown) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _dom = _interopRequireDefault(_dom);
  _utils = _interopRequireDefault(_utils);
  _blockTuneMoveUp = _interopRequireDefault(_blockTuneMoveUp);
  _blockTuneDelete = _interopRequireDefault(_blockTuneDelete);
  _blockTuneMoveDown = _interopRequireDefault(_blockTuneMoveDown);

  /**
   * @class Block
   * @classdesc This class describes editor`s block, including block`s HTMLElement, data and tool
   *
   * @property {BlockTool} tool — current block tool (Paragraph, for example)
   * @property {Object} CSS — block`s css classes
   *
   */

  /** Import default tunes */

  /**
   * @classdesc Abstract Block class that contains Block information, Tool name and Tool class instance
   *
   * @property tool - Tool instance
   * @property html - Returns HTML content of plugin
   * @property holder - Div element that wraps block content with Tool's content. Has `ce-block` CSS class
   * @property pluginsContent - HTML content that returns by Tool's render function
   */
  var Block =
  /*#__PURE__*/
  function () {
    /**
     * @constructor
     * @param {String} toolName - Tool name that passed on initialization
     * @param {Object} toolInstance — passed Tool`s instance that rendered the Block
     * @param {Object} toolClass — Tool's class
     * @param {Object} settings - default settings
     * @param {Object} apiMethods - Editor API
     */
    function Block(toolName, toolInstance, toolClass, settings, apiMethods) {
      (0, _classCallCheck2.default)(this, Block);

      /**
       * Focused input index
       * @type {number}
       */
      this.inputIndex = 0;
      this.name = toolName;
      this.tool = toolInstance;
      this.class = toolClass;
      this.settings = settings;
      this.api = apiMethods;
      this.holder = this.compose();
      /**
       * @type {BlockTune[]}
       */

      this.tunes = this.makeTunes();
    }
    /**
     * CSS classes for the Block
     * @return {{wrapper: string, content: string}}
     */


    (0, _createClass2.default)(Block, [{
      key: "call",

      /**
       * Calls Tool's method
       *
       * Method checks tool property {MethodName}. Fires method with passes params If it is instance of Function
       *
       * @param {String} methodName
       * @param {Object} params
       */
      value: function call(methodName, params) {
        /**
         * call Tool's method with the instance context
         */
        if (this.tool[methodName] && this.tool[methodName] instanceof Function) {
          this.tool[methodName].call(this.tool, params);
        }
      }
      /**
       * Call plugins merge method
       * @param {Object} data
       */

    }, {
      key: "mergeWith",
      value: function () {
        var _mergeWith = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(data) {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.tool.merge(data);

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function mergeWith(_x) {
          return _mergeWith.apply(this, arguments);
        };
      }()
      /**
       * Extracts data from Block
       * Groups Tool's save processing time
       * @return {Object}
       */

    }, {
      key: "save",
      value: function () {
        var _save = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2() {
          var _this = this;

          var extractedBlock, measuringStart, measuringEnd;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.tool.save(this.pluginsContent);

                case 2:
                  extractedBlock = _context2.sent;

                  /**
                   * Measuring execution time
                   */
                  measuringStart = window.performance.now();
                  return _context2.abrupt("return", Promise.resolve(extractedBlock).then(function (finishedExtraction) {
                    /** measure promise execution */
                    measuringEnd = window.performance.now();
                    return {
                      tool: _this.name,
                      data: finishedExtraction,
                      time: measuringEnd - measuringStart
                    };
                  }).catch(function (error) {
                    _utils.default.log("Saving proccess for ".concat(_this.name, " tool failed due to the ").concat(error), 'log', 'red');
                  }));

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function save() {
          return _save.apply(this, arguments);
        };
      }()
      /**
       * Uses Tool's validation method to check the correctness of output data
       * Tool's validation method is optional
       *
       * @description Method also can return data if it passed the validation
       *
       * @param {Object} data
       * @returns {Boolean|Object} valid
       */

    }, {
      key: "validateData",
      value: function validateData(data) {
        var isValid = true;

        if (this.tool.validate instanceof Function) {
          isValid = this.tool.validate(data);
        }

        if (!isValid) {
          return false;
        }

        return data;
      }
      /**
       * Make an array with default settings
       * Each block has default tune instance that have states
       * @return {BlockTune[]}
       */

    }, {
      key: "makeTunes",
      value: function makeTunes() {
        var _this2 = this;

        var tunesList = [_blockTuneMoveUp.default, _blockTuneDelete.default, _blockTuneMoveDown.default]; // Pluck tunes list and return tune instances with passed Editor API and settings

        return tunesList.map(function (tune) {
          return new tune({
            api: _this2.api,
            settings: _this2.settings
          });
        });
      }
      /**
       * Enumerates initialized tunes and returns fragment that can be appended to the toolbars area
       * @return {DocumentFragment}
       */

    }, {
      key: "renderTunes",
      value: function renderTunes() {
        var tunesElement = document.createDocumentFragment();
        this.tunes.forEach(function (tune) {
          _dom.default.append(tunesElement, tune.render());
        });
        return tunesElement;
      }
      /**
       * Toggle drop target state
       * @param {boolean} state
       */

    }, {
      key: "compose",

      /**
       * Make default Block wrappers and put Tool`s content there
       * @returns {HTMLDivElement}
       */
      value: function compose() {
        var wrapper = _dom.default.make('div', Block.CSS.wrapper),
            contentNode = _dom.default.make('div', Block.CSS.content),
            pluginsContent = this.tool.render();

        contentNode.appendChild(pluginsContent);
        wrapper.appendChild(contentNode);
        return wrapper;
      }
    }, {
      key: "inputs",

      /**
       * Find and return all editable elements (contenteditables and native inputs) in the Tool HTML
       *
       * @returns {HTMLElement[]}
       */
      get: function get() {
        var content = this.holder;
        var allowedInputTypes = ['text', 'password', 'email', 'number', 'search', 'tel', 'url'];
        var selector = '[contenteditable], textarea, input, ' + allowedInputTypes.map(function (type) {
          return "input[type=\"".concat(type, "\"]");
        }).join(', ');

        var inputs = _utils.default.array(content.querySelectorAll(selector));
        /**
         * If inputs amount was changed we need to check if input index is bigger then inputs array length
         */


        if (this.inputIndex > inputs.length - 1) {
          this.inputIndex = inputs.length - 1;
        }

        return inputs;
      }
      /**
       * Return current Tool`s input
       *
       * @returns {HTMLElement}
       */

    }, {
      key: "currentInput",
      get: function get() {
        return this.inputs[this.inputIndex];
      }
      /**
       * Set input index to the passed element
       *
       * @param {HTMLElement} element
       */
      ,
      set: function set(element) {
        var index = this.inputs.findIndex(function (input) {
          return input === element || input.contains(element);
        });

        if (index !== -1) {
          this.inputIndex = index;
        }
      }
      /**
       * Return first Tool`s input
       *
       * @returns {HTMLElement}
       */

    }, {
      key: "firstInput",
      get: function get() {
        return this.inputs[0];
      }
      /**
       * Return first Tool`s input
       *
       * @returns {HTMLElement}
       */

    }, {
      key: "lastInput",
      get: function get() {
        var inputs = this.inputs;
        return inputs[inputs.length - 1];
      }
      /**
       * Return next Tool`s input or undefined if it doesn't exist
       *
       * @returns {HTMLElement}
       */

    }, {
      key: "nextInput",
      get: function get() {
        return this.inputs[this.inputIndex + 1];
      }
      /**
       * Return previous Tool`s input or undefined if it doesn't exist
       *
       * @returns {HTMLElement}
       */

    }, {
      key: "previousInput",
      get: function get() {
        return this.inputs[this.inputIndex - 1];
      }
      /**
       * Returns Plugins content
       * @return {Node}
       */

    }, {
      key: "pluginsContent",
      get: function get() {
        var pluginsContent = this.holder.querySelector(".".concat(Block.CSS.content));

        if (pluginsContent && pluginsContent.childNodes.length) {
          return pluginsContent.childNodes[0];
        }

        return null;
      }
      /**
       * Get Block's JSON data
       * @return {Object}
       */

    }, {
      key: "data",
      get: function get() {
        return this.save().then(function (savedObject) {
          if (savedObject && !_utils.default.isEmpty(savedObject.data)) {
            return savedObject.data;
          } else {
            return {};
          }
        });
      }
      /**
       * Returns tool's sanitizer config
       * @return {object}
       */

    }, {
      key: "sanitize",
      get: function get() {
        return this.tool.sanitize;
      }
      /**
       * is block mergeable
       * We plugin have merge function then we call it mergable
       * @return {boolean}
       */

    }, {
      key: "mergeable",
      get: function get() {
        return typeof this.tool.merge === 'function';
      }
      /**
       * Check block for emptiness
       * @return {Boolean}
       */

    }, {
      key: "isEmpty",
      get: function get() {
        var emptyText = _dom.default.isEmpty(this.pluginsContent);

        var emptyMedia = !this.hasMedia;
        return emptyText && emptyMedia;
      }
      /**
       * Check if block has a media content such as images, iframes and other
       * @return {Boolean}
       */

    }, {
      key: "hasMedia",
      get: function get() {
        /**
         * This tags represents media-content
         * @type {string[]}
         */
        var mediaTags = ['img', 'iframe', 'video', 'audio', 'source', 'input', 'textarea', 'twitterwidget'];
        return !!this.holder.querySelector(mediaTags.join(','));
      }
      /**
       * Set focused state
       * @param {Boolean} state - 'true' to select, 'false' to remove selection
       */

    }, {
      key: "focused",
      set: function set(state) {
        this.holder.classList.toggle(Block.CSS.focused, state);
      }
      /**
       * Set selected state
       * We don't need to mark Block as Selected when it is empty
       * @param {Boolean} state - 'true' to select, 'false' to remove selection
       */

    }, {
      key: "selected",
      set: function set(state) {
        if (state) {
          this.holder.classList.add(Block.CSS.selected);
        } else {
          this.holder.classList.remove(Block.CSS.selected);
        }
      }
      /**
       * Returns True if it is Selected
       * @return {boolean}
       */
      ,
      get: function get() {
        return this.holder.classList.contains(Block.CSS.selected);
      }
      /**
       * Set stretched state
       * @param {Boolean} state - 'true' to enable, 'false' to disable stretched statte
       */

    }, {
      key: "stretched",
      set: function set(state) {
        this.holder.classList.toggle(Block.CSS.wrapperStretched, state);
      }
    }, {
      key: "dropTarget",
      set: function set(state) {
        this.holder.classList.toggle(Block.CSS.dropTarget, state);
      }
    }], [{
      key: "CSS",
      get: function get() {
        return {
          wrapper: 'ce-block',
          wrapperStretched: 'ce-block--stretched',
          content: 'ce-block__content',
          focused: 'ce-block--focused',
          selected: 'ce-block--selected',
          dropTarget: 'ce-block--drop-target'
        };
      }
    }]);
    return Block;
  }();

  _exports.default = Block;
  Block.displayName = "Block";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/blocks.ts":
/*!**********************************!*\
  !*** ./src/components/blocks.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! ./utils */ "./src/components/utils.ts"), __webpack_require__(/*! ./dom */ "./src/components/dom.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _utils, _dom) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _utils = _interopRequireDefault(_utils);
  _dom = _interopRequireDefault(_dom);

  /**
   * @class Blocks
   * @classdesc Class to work with Block instances array
   *
   * @private
   *
   * @property {HTMLElement} workingArea — editor`s working node
   *
   */
  var Blocks =
  /*#__PURE__*/
  function () {
    (0, _createClass2.default)(Blocks, [{
      key: "length",

      /**
       * Get length of Block instances array
       *
       * @returns {Number}
       */
      get: function get() {
        return this.blocks.length;
      }
      /**
       * Get Block instances array
       *
       * @returns {Block[]}
       */

    }, {
      key: "array",
      get: function get() {
        return this.blocks;
      }
      /**
       * Get blocks html elements array
       *
       * @returns {HTMLElement[]}
       */

    }, {
      key: "nodes",
      get: function get() {
        return _utils.default.array(this.workingArea.children);
      }
      /**
       * Proxy trap to implement array-like setter
       *
       * @example
       * blocks[0] = new Block(...)
       *
       * @param {Blocks} instance — Blocks instance
       * @param {Number|String} index — block index
       * @param {Block} block — Block to set
       * @returns {Boolean}
       */

    }], [{
      key: "set",
      value: function set(instance, index, block) {
        if (isNaN(Number(index))) {
          return false;
        }

        instance.insert(index, block);
        return true;
      }
      /**
       * Proxy trap to implement array-like getter
       *
       * @param {Blocks} instance — Blocks instance
       * @param {Number|String} index — Block index
       * @returns {Block|*}
       */

    }, {
      key: "get",
      value: function get(instance, index) {
        if (isNaN(Number(index))) {
          return instance[index];
        }

        return instance.get(index);
      }
      /**
       * @constructor
       *
       * @param {HTMLElement} workingArea — editor`s working node
       */

    }]);

    function Blocks(workingArea) {
      (0, _classCallCheck2.default)(this, Blocks);
      this.blocks = [];
      this.workingArea = workingArea;
    }
    /**
     * Push new Block to the blocks array and append it to working area
     *
     * @param {Block} block
     */


    (0, _createClass2.default)(Blocks, [{
      key: "push",
      value: function push(block) {
        this.blocks.push(block);
        this.workingArea.appendChild(block.holder);
      }
      /**
       * Swaps blocks with indexes first and second
       * @param {Number} first - first block index
       * @param {Number} second - second block index
       */

    }, {
      key: "swap",
      value: function swap(first, second) {
        var secondBlock = this.blocks[second];
        /**
         * Change in DOM
         */

        _dom.default.swap(this.blocks[first].holder, secondBlock.holder);
        /**
         * Change in array
         */


        this.blocks[second] = this.blocks[first];
        this.blocks[first] = secondBlock;
      }
      /**
       * Insert new Block at passed index
       *
       * @param {Number} index — index to insert Block
       * @param {Block} block — Block to insert
       * @param {Boolean} replace — it true, replace block on given index
       */

    }, {
      key: "insert",
      value: function insert(index, block) {
        var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (!this.length) {
          this.push(block);
          return;
        }

        if (index > this.length) {
          index = this.length;
        }

        if (replace) {
          this.blocks[index].holder.remove();
        }

        var deleteCount = replace ? 1 : 0;
        this.blocks.splice(index, deleteCount, block);

        if (index > 0) {
          var previousBlock = this.blocks[index - 1];
          previousBlock.holder.insertAdjacentElement('afterend', block.holder);
        } else {
          var nextBlock = this.blocks[index + 1];

          if (nextBlock) {
            nextBlock.holder.insertAdjacentElement('beforebegin', block.holder);
          } else {
            this.workingArea.appendChild(block.holder);
          }
        }
      }
      /**
       * Remove block
       * @param {Number|null} index
       */

    }, {
      key: "remove",
      value: function remove(index) {
        if (isNaN(index)) {
          index = this.length - 1;
        }

        this.blocks[index].holder.remove();
        this.blocks.splice(index, 1);
      }
      /**
       * Remove all blocks
       */

    }, {
      key: "removeAll",
      value: function removeAll() {
        this.workingArea.innerHTML = '';
        this.blocks.length = 0;
      }
      /**
       * Insert Block after passed target
       *
       * @todo decide if this method is necessary
       *
       * @param {Block} targetBlock — target after wich Block should be inserted
       * @param {Block} newBlock — Block to insert
       */

    }, {
      key: "insertAfter",
      value: function insertAfter(targetBlock, newBlock) {
        var index = this.blocks.indexOf(targetBlock);
        this.insert(index + 1, newBlock);
      }
      /**
       * Get Block by index
       *
       * @param {Number} index — Block index
       * @returns {Block}
       */

    }, {
      key: "get",
      value: function get(index) {
        return this.blocks[index];
      }
      /**
       * Return index of passed Block
       *
       * @param {Block} block
       * @returns {Number}
       */

    }, {
      key: "indexOf",
      value: function indexOf(block) {
        return this.blocks.indexOf(block);
      }
    }]);
    return Blocks;
  }();

  _exports.default = Blocks;
  Blocks.displayName = "Blocks";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/core.ts":
/*!********************************!*\
  !*** ./src/components/core.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"), __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"), __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! ./dom */ "./src/components/dom.ts"), __webpack_require__(/*! ./utils */ "./src/components/utils.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _typeof2, _regenerator, _asyncToGenerator2, _classCallCheck2, _createClass2, _dom, _utils) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _typeof2 = _interopRequireDefault(_typeof2);
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _dom = _interopRequireDefault(_dom);
  _utils = _interopRequireDefault(_utils);

  /**
   * @typedef {Core} Core - editor core class
   */

  /**
   * Require Editor modules places in components/modules dir
   */
  var contextRequire = __webpack_require__("./src/components/modules sync recursive ^\\.\\/.*$");

  var modules = [];
  contextRequire.keys().forEach(function (filename) {
    /**
     * Include files if:
     * - extension is .js or .ts
     * - does not starts with _
     */
    if (filename.match(/^\.\/[^_][\w/]*\.([tj])s$/)) {
      modules.push(contextRequire(filename));
    }
  });
  /**
   * @class Core
   *
   * @classdesc CodeX Editor core class
   *
   * @property this.config - all settings
   * @property this.moduleInstances - constructed editor components
   *
   * @type {Core}
   */

  var Core =
  /*#__PURE__*/
  function () {
    /**
     * @param {EditorConfig} config - user configuration
     *
     */
    function Core(config) {
      var _this = this;

      (0, _classCallCheck2.default)(this, Core);

      /**
       * Object with core modules instances
       */
      this.moduleInstances = {};
      /**
       * Ready promise. Resolved if CodeX Editor is ready to work, rejected otherwise
       */

      var onReady, onFail;
      this.isReady = new Promise(function (resolve, reject) {
        onReady = resolve;
        onFail = reject;
      });
      Promise.resolve().then(
      /*#__PURE__*/
      (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.configuration = config;
                _context.next = 3;
                return _this.validate();

              case 3:
                _context.next = 5;
                return _this.init();

              case 5:
                _context.next = 7;
                return _this.start();

              case 7:
                _utils.default.log('I\'m ready! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', 'log', '', 'color: #E24A75');

                setTimeout(function () {
                  /**
                   * Remove loader, show content
                   */
                  _this.moduleInstances.UI.removeLoader();
                  /**
                   * Resolve this.isReady promise
                   */


                  onReady();
                }, 500);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }))).catch(function (error) {
        _utils.default.log("CodeX Editor does not ready because of ".concat(error), 'error');
        /**
         * Reject this.isReady promise
         */


        onFail(error);
      });
    }
    /**
     * Setting for configuration
     * @param {EditorConfig|string|undefined} config
     */


    (0, _createClass2.default)(Core, [{
      key: "validate",

      /**
       * Checks for required fields in Editor's config
       * @returns {Promise<void>}
       */
      value: function () {
        var _validate = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2() {
          var toolName, tool;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (this.config.holderId) {
                    _context2.next = 2;
                    break;
                  }

                  throw Error('«holderId» param must being not empty');

                case 2:
                  if (_dom.default.get(this.config.holderId)) {
                    _context2.next = 4;
                    break;
                  }

                  throw Error("element with ID \xAB".concat(this.config.holderId, "\xBB is missing. Pass correct holder's ID."));

                case 4:
                  _context2.t0 = _regenerator.default.keys(this.config.tools);

                case 5:
                  if ((_context2.t1 = _context2.t0()).done) {
                    _context2.next = 13;
                    break;
                  }

                  toolName = _context2.t1.value;

                  if (!this.config.tools.hasOwnProperty(toolName)) {
                    _context2.next = 11;
                    break;
                  }

                  tool = this.config.tools[toolName];

                  if (!(!_utils.default.isFunction(tool) && !_utils.default.isFunction(tool.class))) {
                    _context2.next = 11;
                    break;
                  }

                  throw Error("Tool \xAB".concat(toolName, "\xBB must be a constructor function or an object with function in the \xABclass\xBB property"));

                case 11:
                  _context2.next = 5;
                  break;

                case 13:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function validate() {
          return _validate.apply(this, arguments);
        };
      }()
      /**
       * Initializes modules:
       *  - make and save instances
       *  - configure
       */

    }, {
      key: "init",
      value: function init() {
        /**
         * Make modules instances and save it to the @property this.moduleInstances
         */
        this.constructModules();
        /**
         * Modules configuration
         */

        this.configureModules();
      }
      /**
       * Start Editor!
       *
       * Get list of modules that needs to be prepared and return a sequence (Promise)
       * @return {Promise}
       */

    }, {
      key: "start",
      value: function () {
        var _start = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee4() {
          var _this2 = this;

          var modulesToPrepare;
          return _regenerator.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  modulesToPrepare = ['Tools', 'UI', 'BlockManager', 'Paste', 'DragNDrop', 'ModificationsObserver', 'BlockSelection'];
                  _context4.next = 3;
                  return modulesToPrepare.reduce(function (promise, module) {
                    return promise.then(
                    /*#__PURE__*/
                    (0, _asyncToGenerator2.default)(
                    /*#__PURE__*/
                    _regenerator.default.mark(function _callee3() {
                      return _regenerator.default.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              _context3.prev = 0;
                              _context3.next = 3;
                              return _this2.moduleInstances[module].prepare();

                            case 3:
                              _context3.next = 8;
                              break;

                            case 5:
                              _context3.prev = 5;
                              _context3.t0 = _context3["catch"](0);

                              _utils.default.log("Module ".concat(module, " was skipped because of %o"), 'warn', _context3.t0);

                            case 8:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3, this, [[0, 5]]);
                    })));
                  }, Promise.resolve());

                case 3:
                  return _context4.abrupt("return", this.moduleInstances.Renderer.render(this.config.data.blocks));

                case 4:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        return function start() {
          return _start.apply(this, arguments);
        };
      }()
      /**
       * Make modules instances and save it to the @property this.moduleInstances
       */

    }, {
      key: "constructModules",
      value: function constructModules() {
        var _this3 = this;

        modules.forEach(function (Module) {
          try {
            /**
             * We use class name provided by displayName property
             *
             * On build, Babel will transform all Classes to the Functions so, name will always be 'Function'
             * To prevent this, we use 'babel-plugin-class-display-name' plugin
             * @see  https://www.npmjs.com/package/babel-plugin-class-display-name
             */
            _this3.moduleInstances[Module.displayName] = new Module({
              config: _this3.configuration
            });
          } catch (e) {
            _utils.default.log("Module ".concat(Module.displayName, " skipped because"), 'warn', e);
          }
        });
      }
      /**
       * Modules instances configuration:
       *  - pass other modules to the 'state' property
       *  - ...
       */

    }, {
      key: "configureModules",
      value: function configureModules() {
        for (var name in this.moduleInstances) {
          if (this.moduleInstances.hasOwnProperty(name)) {
            /**
             * Module does not need self-instance
             */
            this.moduleInstances[name].state = this.getModulesDiff(name);
          }
        }
      }
      /**
       * Return modules without passed name
       * @param {string} name - module for witch modules difference should be calculated
       */

    }, {
      key: "getModulesDiff",
      value: function getModulesDiff(name) {
        var diff = {};

        for (var moduleName in this.moduleInstances) {
          /**
           * Skip module with passed name
           */
          if (moduleName === name) {
            continue;
          }

          diff[moduleName] = this.moduleInstances[moduleName];
        }

        return diff;
      }
    }, {
      key: "configuration",
      set: function set(config) {
        /**
         * Process zero-configuration or with only holderId
         * Make config object
         */
        if ((0, _typeof2.default)(config) !== 'object') {
          config = {
            holderId: config
          };
        }
        /**
         * Place config into the class property
         * @type {EditorConfig}
         */


        this.config = config;
        /**
         * If holderId is empty then set a default value
         */

        if (!this.config.holderId || typeof this.config.holderId !== 'string') {
          this.config.holderId = 'codex-editor';
        }
        /**
         * If initial Block's Tool was not passed, use the Paragraph Tool
         */


        this.config.initialBlock = this.config.initialBlock || 'paragraph';
        /**
         * Initial block type
         * Uses in case when there is no blocks passed
         * @type {{type: (*), data: {text: null}}}
         */

        var initialBlockData = {
          type: this.config.initialBlock,
          data: {}
        };
        this.config.placeholder = this.config.placeholder || 'write your story...';
        this.config.sanitizer = this.config.sanitizer || {
          p: true,
          b: true,
          a: true
        };
        this.config.hideToolbar = this.config.hideToolbar ? this.config.hideToolbar : false;
        this.config.tools = this.config.tools || {};
        this.config.data = this.config.data || {};

        this.config.onReady = this.config.onReady || function () {};

        this.config.onChange = this.config.onChange || function () {};
        /**
         * Initialize Blocks to pass data to the Renderer
         */


        if (_utils.default.isEmpty(this.config.data)) {
          this.config.data = {};
          this.config.data.blocks = [initialBlockData];
        } else {
          if (!this.config.data.blocks || this.config.data.blocks.length === 0) {
            this.config.data.blocks = [initialBlockData];
          }
        }
      }
      /**
       * Returns private property
       * @returns {EditorConfig}
       */
      ,
      get: function get() {
        return this.config;
      }
    }]);
    return Core;
  }();

  _exports.default = Core;
  Core.displayName = "Core";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/dom.ts":
/*!*******************************!*\
  !*** ./src/components/dom.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"), __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"), __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _typeof2, _toConsumableArray2, _classCallCheck2, _createClass2) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _typeof2 = _interopRequireDefault(_typeof2);
  _toConsumableArray2 = _interopRequireDefault(_toConsumableArray2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);

  /**
   * DOM manipulations helper
   */
  var Dom =
  /*#__PURE__*/
  function () {
    function Dom() {
      (0, _classCallCheck2.default)(this, Dom);
    }

    (0, _createClass2.default)(Dom, null, [{
      key: "isSingleTag",

      /**
       * Check if passed tag has no closed tag
       * @param  {HTMLElement}  tag
       * @return {Boolean}
       */
      value: function isSingleTag(tag) {
        return tag.tagName && ['AREA', 'BASE', 'BR', 'COL', 'COMMAND', 'EMBED', 'HR', 'IMG', 'INPUT', 'KEYGEN', 'LINK', 'META', 'PARAM', 'SOURCE', 'TRACK', 'WBR'].includes(tag.tagName);
      }
      /**
       * Helper for making Elements with classname and attributes
       *
       * @param  {string} tagName           - new Element tag name
       * @param  {array|string} classNames  - list or name of CSS classname(s)
       * @param  {Object} attributes        - any attributes
       * @return {HTMLElement}
       */

    }, {
      key: "make",
      value: function make(tagName) {
        var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var el = document.createElement(tagName);

        if (Array.isArray(classNames)) {
          var _el$classList;

          (_el$classList = el.classList).add.apply(_el$classList, (0, _toConsumableArray2.default)(classNames));
        } else if (classNames) {
          el.classList.add(classNames);
        }

        for (var attrName in attributes) {
          if (attributes.hasOwnProperty(attrName)) {
            el[attrName] = attributes[attrName];
          }
        }

        return el;
      }
      /**
       * Creates Text Node with the passed content
       * @param {String} content - text content
       * @return {Text}
       */

    }, {
      key: "text",
      value: function text(content) {
        return document.createTextNode(content);
      }
      /**
       * Creates SVG icon linked to the sprite
       * @param {string} name - name (id) of icon from sprite
       * @param {number} width
       * @param {number} height
       * @return {SVGElement}
       */

    }, {
      key: "svg",
      value: function svg(name) {
        var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 14;
        var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 14;
        var icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        icon.classList.add('icon', 'icon--' + name);
        icon.setAttribute('width', width + 'px');
        icon.setAttribute('height', height + 'px');
        icon.innerHTML = "<use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#".concat(name, "\"></use>");
        return icon;
      }
      /**
       * Append one or several elements to the parent
       *
       * @param  {Element|DocumentFragment} parent    - where to append
       * @param  {Element|Element[]} elements - element or elements list
       */

    }, {
      key: "append",
      value: function append(parent, elements) {
        if (Array.isArray(elements)) {
          elements.forEach(function (el) {
            return parent.appendChild(el);
          });
        } else {
          parent.appendChild(elements);
        }
      }
      /**
       * Append element or a couple to the beginning of the parent elements
       *
       * @param {Element} parent - where to append
       * @param {Element|Element[]} elements - element or elements list
       */

    }, {
      key: "prepend",
      value: function prepend(parent, elements) {
        if (Array.isArray(elements)) {
          elements = elements.reverse();
          elements.forEach(function (el) {
            return parent.prepend(el);
          });
        } else {
          parent.prepend(elements);
        }
      }
      /**
       * Swap two elements in parent
       * @param {HTMLElement} el1 - from
       * @param {HTMLElement} el2 - to
       */

    }, {
      key: "swap",
      value: function swap(el1, el2) {
        // create marker element and insert it where el1 is
        var temp = document.createElement('div'),
            parent = el1.parentNode;
        parent.insertBefore(temp, el1); // move el1 to right before el2

        parent.insertBefore(el1, el2); // move el2 to right before where el1 used to be

        parent.insertBefore(el2, temp); // remove temporary marker node

        parent.removeChild(temp);
      }
      /**
       * Selector Decorator
       *
       * Returns first match
       *
       * @param {Element} el - element we searching inside. Default - DOM Document
       * @param {String} selector - searching string
       *
       * @returns {Element}
       */

    }, {
      key: "find",
      value: function find() {
        var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
        var selector = arguments.length > 1 ? arguments[1] : undefined;
        return el.querySelector(selector);
      }
      /**
       * Get Element by Id
       *
       * @param {string} id
       * @returns {HTMLElement | null}
       */

    }, {
      key: "get",
      value: function get(id) {
        return document.getElementById(id);
      }
      /**
       * Selector Decorator.
       *
       * Returns all matches
       *
       * @param {Element} el - element we searching inside. Default - DOM Document
       * @param {String} selector - searching string
       * @returns {NodeList}
       */

    }, {
      key: "findAll",
      value: function findAll() {
        var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
        var selector = arguments.length > 1 ? arguments[1] : undefined;
        return el.querySelectorAll(selector);
      }
      /**
       * Search for deepest node which is Leaf.
       * Leaf is the vertex that doesn't have any child nodes
       *
       * @description Method recursively goes throw the all Node until it finds the Leaf
       *
       * @param {Node} node - root Node. From this vertex we start Deep-first search
       *                      {@link https://en.wikipedia.org/wiki/Depth-first_search}
       * @param {Boolean} atLast - find last text node
       * @return {Node} - it can be text Node or Element Node, so that caret will able to work with it
       */

    }, {
      key: "getDeepestNode",
      value: function getDeepestNode(node) {
        var atLast = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        /**
         * Current function have two directions:
         *  - starts from first child and every time gets first or nextSibling in special cases
         *  - starts from last child and gets last or previousSibling
         * @type {string}
         */
        var child = atLast ? 'lastChild' : 'firstChild',
            sibling = atLast ? 'previousSibling' : 'nextSibling';

        if (node && node.nodeType === Node.ELEMENT_NODE && node[child]) {
          var nodeChild = node[child];
          /**
           * special case when child is single tag that can't contain any content
           */

          if (Dom.isSingleTag(nodeChild) && !Dom.isNativeInput(nodeChild)) {
            /**
             * 1) We need to check the next sibling. If it is Node Element then continue searching for deepest
             * from sibling
             *
             * 2) If single tag's next sibling is null, then go back to parent and check his sibling
             * In case of Node Element continue searching
             *
             * 3) If none of conditions above happened return parent Node Element
             */
            if (nodeChild[sibling]) {
              nodeChild = nodeChild[sibling];
            } else if (nodeChild.parentNode[sibling]) {
              nodeChild = nodeChild.parentNode[sibling];
            } else {
              return nodeChild.parentNode;
            }
          }

          return this.getDeepestNode(nodeChild, atLast);
        }

        return node;
      }
      /**
       * Check if object is DOM node
       *
       * @param {Object} node
       * @returns {boolean}
       */

    }, {
      key: "isElement",
      value: function isElement(node) {
        return node && (0, _typeof2.default)(node) === 'object' && node.nodeType && node.nodeType === Node.ELEMENT_NODE;
      }
      /**
       * Check if object is DocumentFragmemt node
       *
       * @param {Object} node
       * @returns {boolean}
       */

    }, {
      key: "isFragment",
      value: function isFragment(node) {
        return node && (0, _typeof2.default)(node) === 'object' && node.nodeType && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
      }
      /**
       * Check if passed element is contenteditable
       * @param {HTMLElement} element
       * @return {boolean}
       */

    }, {
      key: "isContentEditable",
      value: function isContentEditable(element) {
        return element.contentEditable === 'true';
      }
      /**
       * Checks target if it is native input
       * @param {Element|String|Node} target - HTML element or string
       * @return {Boolean}
       */

    }, {
      key: "isNativeInput",
      value: function isNativeInput(target) {
        var nativeInputs = ['INPUT', 'TEXTAREA'];
        return target && target.tagName ? nativeInputs.includes(target.tagName) : false;
      }
      /**
       * Checks if we can set caret
       * @param {HTMLElement} target
       * @return {boolean}
       */

    }, {
      key: "canSetCaret",
      value: function canSetCaret(target) {
        var result = true;

        if (Dom.isNativeInput(target)) {
          var inputElement = target;

          switch (inputElement.type) {
            case 'file':
            case 'checkbox':
            case 'radio':
            case 'hidden':
            case 'submit':
            case 'button':
            case 'image':
            case 'reset':
              result = false;
              break;
          }
        } else {
          result = Dom.isContentEditable(target);
        }

        return result;
      }
      /**
       * Checks node if it is empty
       *
       * @description Method checks simple Node without any childs for emptiness
       * If you have Node with 2 or more children id depth, you better use {@link Dom#isEmpty} method
       *
       * @param {Node} node
       * @return {Boolean} true if it is empty
       */

    }, {
      key: "isNodeEmpty",
      value: function isNodeEmpty(node) {
        var nodeText;

        if (this.isSingleTag(node)) {
          return false;
        }

        if (this.isElement(node) && this.isNativeInput(node)) {
          nodeText = node.value;
        } else {
          nodeText = node.textContent.replace("\u200B", '');
        }

        return nodeText.trim().length === 0;
      }
      /**
       * checks node if it is doesn't have any child nodes
       * @param {Node} node
       * @return {boolean}
       */

    }, {
      key: "isLeaf",
      value: function isLeaf(node) {
        if (!node) {
          return false;
        }

        return node.childNodes.length === 0;
      }
      /**
       * breadth-first search (BFS)
       * {@link https://en.wikipedia.org/wiki/Breadth-first_search}
       *
       * @description Pushes to stack all DOM leafs and checks for emptiness
       *
       * @param {Node} node
       * @return {boolean}
       */

    }, {
      key: "isEmpty",
      value: function isEmpty(node) {
        var _this = this;

        var treeWalker = [],
            leafs = [];

        if (!node) {
          return true;
        }

        if (!node.childNodes.length) {
          return this.isNodeEmpty(node);
        }

        treeWalker.push(node.firstChild);

        while (treeWalker.length > 0) {
          node = treeWalker.shift();

          if (!node) {
            continue;
          }

          if (this.isLeaf(node)) {
            leafs.push(node);
          } else {
            treeWalker.push(node.firstChild);
          }

          while (node && node.nextSibling) {
            node = node.nextSibling;

            if (!node) {
              continue;
            }

            treeWalker.push(node);
          }
          /**
           * If one of childs is not empty, checked Node is not empty too
           */


          if (node && !this.isNodeEmpty(node)) {
            return false;
          }
        }

        return leafs.every(function (leaf) {
          return _this.isNodeEmpty(leaf);
        });
      }
      /**
       * Check if string contains html elements
       *
       * @returns {boolean}
       * @param {String} str
       */

    }, {
      key: "isHTMLString",
      value: function isHTMLString(str) {
        var wrapper = Dom.make('div');
        wrapper.innerHTML = str;
        return wrapper.childElementCount > 0;
      }
      /**
       * Return length of node`s text content
       *
       * @param {Node} node
       * @returns {number}
       */

    }, {
      key: "getContentLength",
      value: function getContentLength(node) {
        if (Dom.isNativeInput(node)) {
          return node.value.length;
        }

        if (node.nodeType === Node.TEXT_NODE) {
          return node.length;
        }

        return node.textContent.length;
      }
      /**
       * Return array of names of block html elements
       *
       * @returns {string[]}
       */

    }, {
      key: "containsOnlyInlineElements",

      /**
       * Check if passed content includes only inline elements
       *
       * @param {string|HTMLElement} data - element or html string
       * @return {boolean}
       */
      value: function containsOnlyInlineElements(data) {
        var wrapper = document.createElement('template');

        if (typeof data === 'string') {
          wrapper.innerHTML = data;
        } else {
          wrapper.appendChild(data);
        }

        var check = function check(element) {
          return !Dom.blockElements.includes(element.tagName.toLowerCase()) && Array.from(element.children).every(check);
        };

        return check(wrapper);
      }
    }, {
      key: "blockElements",
      get: function get() {
        return ['address', 'article', 'aside', 'blockquote', 'canvas', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr', 'li', 'main', 'nav', 'noscript', 'ol', 'output', 'p', 'pre', 'ruby', 'section', 'table', 'tr', 'tfoot', 'ul', 'video'];
      }
    }]);
    return Dom;
  }();

  _exports.default = Dom;
  Dom.displayName = "Dom";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/inline-tools/inline-tool-bold.ts":
/*!*********************************************************!*\
  !*** ./src/components/inline-tools/inline-tool-bold.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! ../dom */ "./src/components/dom.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _dom) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _dom = _interopRequireDefault(_dom);

  /**
   * Bold Tool
   *
   * Inline Toolbar Tool
   *
   * Makes selected text bolder
   */
  var BoldInlineTool =
  /*#__PURE__*/
  function () {
    function BoldInlineTool() {
      (0, _classCallCheck2.default)(this, BoldInlineTool);

      /**
       * Native Document's command that uses for Bold
       */
      this.commandName = 'bold';
      /**
       * Styles
       */

      this.CSS = {
        button: 'ce-inline-tool',
        buttonActive: 'ce-inline-tool--active',
        buttonModifier: 'ce-inline-tool--bold'
      };
      /**
       * Elements
       */

      this.nodes = {
        button: undefined
      };
    }
    /**
     * Sanitizer Rule
     * Leave <b> tags
     * @return {object}
     */


    (0, _createClass2.default)(BoldInlineTool, [{
      key: "render",

      /**
       * Create button for Inline Toolbar
       */
      value: function render() {
        this.nodes.button = document.createElement('button');
        this.nodes.button.type = 'button';
        this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier);
        this.nodes.button.appendChild(_dom.default.svg('bold', 13, 15));
        return this.nodes.button;
      }
      /**
       * Wrap range with <b> tag
       * @param {Range} range
       */

    }, {
      key: "surround",
      value: function surround(range) {
        document.execCommand(this.commandName);
      }
      /**
       * Check selection and set activated state to button if there are <b> tag
       * @param {Selection} selection
       */

    }, {
      key: "checkState",
      value: function checkState(selection) {
        var isActive = document.queryCommandState(this.commandName);
        this.nodes.button.classList.toggle(this.CSS.buttonActive, isActive);
        return isActive;
      }
      /**
       * Set a shortcut
       */

    }, {
      key: "shortcut",
      get: function get() {
        return 'CMD+B';
      }
    }], [{
      key: "sanitize",
      get: function get() {
        return {
          b: {}
        };
      }
    }]);
    return BoldInlineTool;
  }();
  /**
   * Specifies Tool as Inline Toolbar Tool
   *
   * @return {boolean}
   */


  _exports.default = BoldInlineTool;
  BoldInlineTool.displayName = "BoldInlineTool";
  BoldInlineTool.isInline = true;
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/inline-tools/inline-tool-italic.ts":
/*!***********************************************************!*\
  !*** ./src/components/inline-tools/inline-tool-italic.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! ../dom */ "./src/components/dom.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _dom) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _dom = _interopRequireDefault(_dom);

  /**
   * Italic Tool
   *
   * Inline Toolbar Tool
   *
   * Style selected text with italic
   */
  var ItalicInlineTool =
  /*#__PURE__*/
  function () {
    function ItalicInlineTool() {
      (0, _classCallCheck2.default)(this, ItalicInlineTool);

      /**
       * Native Document's command that uses for Italic
       */
      this.commandName = 'italic';
      /**
       * Styles
       */

      this.CSS = {
        button: 'ce-inline-tool',
        buttonActive: 'ce-inline-tool--active',
        buttonModifier: 'ce-inline-tool--italic'
      };
      /**
       * Elements
       */

      this.nodes = {
        button: null
      };
    }
    /**
     * Sanitizer Rule
     * Leave <i> tags
     * @return {object}
     */


    (0, _createClass2.default)(ItalicInlineTool, [{
      key: "render",

      /**
       * Create button for Inline Toolbar
       */
      value: function render() {
        this.nodes.button = document.createElement('button');
        this.nodes.button.type = 'button';
        this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier);
        this.nodes.button.appendChild(_dom.default.svg('italic', 6, 15));
        return this.nodes.button;
      }
      /**
       * Wrap range with <i> tag
       * @param {Range} range
       */

    }, {
      key: "surround",
      value: function surround(range) {
        document.execCommand(this.commandName);
      }
      /**
       * Check selection and set activated state to button if there are <i> tag
       * @param {Selection} selection
       */

    }, {
      key: "checkState",
      value: function checkState(selection) {
        var isActive = document.queryCommandState(this.commandName);
        this.nodes.button.classList.toggle(this.CSS.buttonActive, isActive);
        return isActive;
      }
      /**
       * Set a shortcut
       */

    }, {
      key: "shortcut",
      get: function get() {
        return 'CMD+I';
      }
    }], [{
      key: "sanitize",
      get: function get() {
        return {
          i: {}
        };
      }
    }]);
    return ItalicInlineTool;
  }();
  /**
   * Specifies Tool as Inline Toolbar Tool
   *
   * @return {boolean}
   */


  _exports.default = ItalicInlineTool;
  ItalicInlineTool.displayName = "ItalicInlineTool";
  ItalicInlineTool.isInline = true;
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/inline-tools/inline-tool-link.ts":
/*!*********************************************************!*\
  !*** ./src/components/inline-tools/inline-tool-link.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! ../selection */ "./src/components/selection.ts"), __webpack_require__(/*! ../dom */ "./src/components/dom.ts"), __webpack_require__(/*! ../utils */ "./src/components/utils.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _selection, _dom, _utils) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _selection = _interopRequireDefault(_selection);
  _dom = _interopRequireDefault(_dom);
  _utils = _interopRequireDefault(_utils);

  /**
   * Link Tool
   *
   * Inline Toolbar Tool
   *
   * Wrap selected text with <a> tag
   */
  var LinkInlineTool =
  /*#__PURE__*/
  function () {
    /**
     * @param {{api: API}} - CodeX Editor API
     */
    function LinkInlineTool(_ref) {
      var api = _ref.api;
      (0, _classCallCheck2.default)(this, LinkInlineTool);

      /**
       * Native Document's commands for link/unlink
       */
      this.commandLink = 'createLink';
      this.commandUnlink = 'unlink';
      /**
       * Enter key code
       */

      this.ENTER_KEY = 13;
      /**
       * Styles
       */

      this.CSS = {
        button: 'ce-inline-tool',
        buttonActive: 'ce-inline-tool--active',
        buttonModifier: 'ce-inline-tool--link',
        buttonUnlink: 'ce-inline-tool--unlink',
        input: 'ce-inline-tool-input',
        inputShowed: 'ce-inline-tool-input--showed'
      };
      /**
       * Elements
       */

      this.nodes = {
        button: null,
        input: null
      };
      /**
       * Input opening state
       */

      this.inputOpened = false;
      this.inlineToolbar = api.inlineToolbar;
      this.toolbar = api.toolbar;
      this.notifier = api.notifier;
      this.selection = new _selection.default();
    }
    /**
     * Sanitizer Rule
     * Leave <a> tags
     * @return {object}
     */


    (0, _createClass2.default)(LinkInlineTool, [{
      key: "render",

      /**
       * Create button for Inline Toolbar
       */
      value: function render() {
        this.nodes.button = document.createElement('button');
        this.nodes.button.type = 'button';
        this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier);
        this.nodes.button.appendChild(_dom.default.svg('link', 15, 14));
        this.nodes.button.appendChild(_dom.default.svg('unlink', 16, 18));
        return this.nodes.button;
      }
      /**
       * Input for the link
       */

    }, {
      key: "renderActions",
      value: function renderActions() {
        var _this = this;

        this.nodes.input = document.createElement('input');
        this.nodes.input.placeholder = 'Add a link';
        this.nodes.input.classList.add(this.CSS.input);
        this.nodes.input.addEventListener('keydown', function (event) {
          if (event.keyCode === _this.ENTER_KEY) {
            _this.enterPressed(event);
          }
        });
        return this.nodes.input;
      }
      /**
       * Handle clicks on the Inline Toolbar icon
       * @param {Range} range
       */

    }, {
      key: "surround",
      value: function surround(range) {
        /**
         * Range will be null when user makes second click on the 'link icon' to close opened input
         */
        if (range) {
          /**
           * Save selection before change focus to the input
           */
          if (!this.inputOpened) {
            /** Create blue background instead of selection */
            this.selection.setFakeBackground();
            this.selection.save();
          } else {
            this.selection.restore();
            this.selection.removeFakeBackground();
          }

          var parentAnchor = this.selection.findParentTag('A');
          /**
           * Unlink icon pressed
           */

          if (parentAnchor) {
            this.selection.expandToTag(parentAnchor);
            this.unlink();
            this.closeActions();
            this.checkState();
            this.toolbar.close();
            return;
          }
        }

        this.toggleActions();
      }
      /**
       * Check selection and set activated state to button if there are <a> tag
       * @param {Selection} selection
       */

    }, {
      key: "checkState",
      value: function checkState(selection) {
        var anchorTag = this.selection.findParentTag('A');

        if (anchorTag) {
          this.nodes.button.classList.add(this.CSS.buttonUnlink);
          this.nodes.button.classList.add(this.CSS.buttonActive);
          this.openActions();
          /**
           * Fill input value with link href
           */

          var hrefAttr = anchorTag.getAttribute('href');
          this.nodes.input.value = hrefAttr !== 'null' ? hrefAttr : '';
          this.selection.save();
        } else {
          this.nodes.button.classList.remove(this.CSS.buttonUnlink);
          this.nodes.button.classList.remove(this.CSS.buttonActive);
        }

        return !!anchorTag;
      }
      /**
       * Function called with Inline Toolbar closing
       */

    }, {
      key: "clear",
      value: function clear() {
        this.closeActions();
      }
      /**
       * Set a shortcut
       */

    }, {
      key: "toggleActions",
      value: function toggleActions() {
        this.inlineToolbar.toggleActions('link');

        if (!this.inputOpened) {
          this.openActions(true);
        } else {
          this.closeActions(false);
        }
      }
      /**
       * @param {boolean} needFocus - on link creation we need to focus input. On editing - nope.
       */

    }, {
      key: "openActions",
      value: function openActions() {
        var needFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        // this.nodes.input.classList.add(this.CSS.inputShowed);
        if (needFocus) {
          this.nodes.input.focus();
        }

        this.inputOpened = true;
      }
      /**
       * Close input
       * @param {boolean} clearSavedSelection — we don't need to clear saved selection
       *                                        on toggle-clicks on the icon of opened Toolbar
       */

    }, {
      key: "closeActions",
      value: function closeActions() {
        var clearSavedSelection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        if (this.selection.isFakeBackgroundEnabled) {
          // if actions is broken by other selection We need to save new selection
          var currentSelection = new _selection.default();
          currentSelection.save();
          this.selection.restore();
          this.selection.removeFakeBackground(); // and recover new selection after removing fake background

          currentSelection.restore();
        }

        this.nodes.input.classList.remove(this.CSS.inputShowed);
        this.nodes.input.value = '';

        if (clearSavedSelection) {
          this.selection.clearSaved();
        }

        this.inputOpened = false;
      }
      /**
       * Enter pressed on input
       * @param {KeyboardEvent} event
       */

    }, {
      key: "enterPressed",
      value: function enterPressed(event) {
        var value = this.nodes.input.value || '';

        if (!value.trim()) {
          this.selection.restore();
          this.unlink();
          event.preventDefault();
          this.closeActions();
        }

        if (!this.validateURL(value)) {
          this.notifier.show({
            message: 'Pasted link is not valid.',
            style: 'error'
          });

          _utils.default.log('Incorrect Link pasted', 'warn', value);

          return;
        }

        value = this.prepareLink(value);
        this.selection.restore();
        this.selection.removeFakeBackground();
        this.insertLink(value);
        /**
         * Preventing events that will be able to happen
         */

        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        this.closeActions();
        this.toolbar.close();
        this.checkState();
      }
      /**
       * Detects if passed string is URL
       * @param  {string}  str
       * @return {Boolean}
       */

    }, {
      key: "validateURL",
      value: function validateURL(str) {
        /**
         * Don't allow spaces
         */
        return !/\s/.test(str);
      }
      /**
       * Process link before injection
       * - sanitize
       * - add protocol for links like 'google.com'
       * @param {string} link - raw user input
       */

    }, {
      key: "prepareLink",
      value: function prepareLink(link) {
        link = link.trim();
        link = this.addProtocol(link);
        return link;
      }
      /**
       * Add 'http' protocol to the links like 'vc.ru', 'google.com'
       * @param {String} link
       */

    }, {
      key: "addProtocol",
      value: function addProtocol(link) {
        /**
         * If protocol already exists, do nothing
         */
        if (/^(\w+):\/\//.test(link)) {
          return link;
        }
        /**
         * We need to add missed HTTP protocol to the link, but skip 2 cases:
         *     1) Internal links like "/general"
         *     2) Anchors looks like "#results"
         *     3) Protocol-relative URLs like "//google.com"
         */


        var isInternal = /^\/[^\/\s]/.test(link),
            isAnchor = link.substring(0, 1) === '#',
            isProtocolRelative = /^\/\/[^\/\s]/.test(link);

        if (!isInternal && !isAnchor && !isProtocolRelative) {
          link = 'http://' + link;
        }

        return link;
      }
      /**
       * Inserts <a> tag with "href"
       * @param {string} link - "href" value
       */

    }, {
      key: "insertLink",
      value: function insertLink(link) {
        /**
         * Edit all link, not selected part
         */
        var anchorTag = this.selection.findParentTag('A');

        if (anchorTag) {
          this.selection.expandToTag(anchorTag);
        }

        document.execCommand(this.commandLink, false, link);
      }
      /**
       * Removes <a> tag
       */

    }, {
      key: "unlink",
      value: function unlink() {
        document.execCommand(this.commandUnlink);
      }
    }, {
      key: "shortcut",
      get: function get() {
        return 'CMD+K';
      }
    }], [{
      key: "sanitize",
      get: function get() {
        return {
          a: {
            href: true,
            target: '_blank',
            rel: 'nofollow'
          }
        };
      }
    }]);
    return LinkInlineTool;
  }();
  /**
   * Specifies Tool as Inline Toolbar Tool
   *
   * @return {boolean}
   */


  _exports.default = LinkInlineTool;
  LinkInlineTool.displayName = "LinkInlineTool";
  LinkInlineTool.isInline = true;
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules sync recursive ^\\.\\/.*$":
/*!**********************************************!*\
  !*** ./src/components/modules sync ^\.\/.*$ ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./api": "./src/components/modules/api/index.ts",
	"./api/": "./src/components/modules/api/index.ts",
	"./api/blocks": "./src/components/modules/api/blocks.ts",
	"./api/blocks.ts": "./src/components/modules/api/blocks.ts",
	"./api/caret": "./src/components/modules/api/caret.ts",
	"./api/caret.ts": "./src/components/modules/api/caret.ts",
	"./api/events": "./src/components/modules/api/events.ts",
	"./api/events.ts": "./src/components/modules/api/events.ts",
	"./api/index": "./src/components/modules/api/index.ts",
	"./api/index.ts": "./src/components/modules/api/index.ts",
	"./api/inlineToolbar": "./src/components/modules/api/inlineToolbar.ts",
	"./api/inlineToolbar.ts": "./src/components/modules/api/inlineToolbar.ts",
	"./api/listeners": "./src/components/modules/api/listeners.ts",
	"./api/listeners.ts": "./src/components/modules/api/listeners.ts",
	"./api/notifier": "./src/components/modules/api/notifier.ts",
	"./api/notifier.ts": "./src/components/modules/api/notifier.ts",
	"./api/sanitizer": "./src/components/modules/api/sanitizer.ts",
	"./api/sanitizer.ts": "./src/components/modules/api/sanitizer.ts",
	"./api/saver": "./src/components/modules/api/saver.ts",
	"./api/saver.ts": "./src/components/modules/api/saver.ts",
	"./api/selection": "./src/components/modules/api/selection.ts",
	"./api/selection.ts": "./src/components/modules/api/selection.ts",
	"./api/styles": "./src/components/modules/api/styles.ts",
	"./api/styles.ts": "./src/components/modules/api/styles.ts",
	"./api/toolbar": "./src/components/modules/api/toolbar.ts",
	"./api/toolbar.ts": "./src/components/modules/api/toolbar.ts",
	"./blockEvents": "./src/components/modules/blockEvents.ts",
	"./blockEvents.ts": "./src/components/modules/blockEvents.ts",
	"./blockManager": "./src/components/modules/blockManager.ts",
	"./blockManager.ts": "./src/components/modules/blockManager.ts",
	"./blockSelection": "./src/components/modules/blockSelection.ts",
	"./blockSelection.ts": "./src/components/modules/blockSelection.ts",
	"./caret": "./src/components/modules/caret.ts",
	"./caret.ts": "./src/components/modules/caret.ts",
	"./dragNDrop": "./src/components/modules/dragNDrop.ts",
	"./dragNDrop.ts": "./src/components/modules/dragNDrop.ts",
	"./events": "./src/components/modules/events.ts",
	"./events.ts": "./src/components/modules/events.ts",
	"./listeners": "./src/components/modules/listeners.ts",
	"./listeners.ts": "./src/components/modules/listeners.ts",
	"./modificationsObserver": "./src/components/modules/modificationsObserver.ts",
	"./modificationsObserver.ts": "./src/components/modules/modificationsObserver.ts",
	"./notifier": "./src/components/modules/notifier.ts",
	"./notifier.ts": "./src/components/modules/notifier.ts",
	"./paste": "./src/components/modules/paste.ts",
	"./paste.ts": "./src/components/modules/paste.ts",
	"./renderer": "./src/components/modules/renderer.ts",
	"./renderer.ts": "./src/components/modules/renderer.ts",
	"./sanitizer": "./src/components/modules/sanitizer.ts",
	"./sanitizer.ts": "./src/components/modules/sanitizer.ts",
	"./saver": "./src/components/modules/saver.ts",
	"./saver.ts": "./src/components/modules/saver.ts",
	"./shortcuts": "./src/components/modules/shortcuts.ts",
	"./shortcuts.ts": "./src/components/modules/shortcuts.ts",
	"./toolbar": "./src/components/modules/toolbar/index.ts",
	"./toolbar/": "./src/components/modules/toolbar/index.ts",
	"./toolbar/blockSettings": "./src/components/modules/toolbar/blockSettings.ts",
	"./toolbar/blockSettings.ts": "./src/components/modules/toolbar/blockSettings.ts",
	"./toolbar/index": "./src/components/modules/toolbar/index.ts",
	"./toolbar/index.ts": "./src/components/modules/toolbar/index.ts",
	"./toolbar/inline": "./src/components/modules/toolbar/inline.ts",
	"./toolbar/inline.ts": "./src/components/modules/toolbar/inline.ts",
	"./toolbar/toolbox": "./src/components/modules/toolbar/toolbox.ts",
	"./toolbar/toolbox.ts": "./src/components/modules/toolbar/toolbox.ts",
	"./tools": "./src/components/modules/tools.ts",
	"./tools.ts": "./src/components/modules/tools.ts",
	"./ui": "./src/components/modules/ui.ts",
	"./ui.ts": "./src/components/modules/ui.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components/modules sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/components/modules/api/blocks.ts":
/*!**********************************************!*\
  !*** ./src/components/modules/api/blocks.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../../__module */ "./src/components/__module.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);

  /**
   * @class BlocksAPI
   * provides with methods working with Block
   */
  var BlocksAPI =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(BlocksAPI, _Module);

    function BlocksAPI() {
      (0, _classCallCheck2.default)(this, BlocksAPI);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BlocksAPI).apply(this, arguments));
    }

    (0, _createClass2.default)(BlocksAPI, [{
      key: "getBlocksCount",

      /**
       * Returns Blocks count
       * @return {number}
       */
      value: function getBlocksCount() {
        return this.Editor.BlockManager.blocks.length;
      }
      /**
       * Returns current block index
       * @return {number}
       */

    }, {
      key: "getCurrentBlockIndex",
      value: function getCurrentBlockIndex() {
        return this.Editor.BlockManager.currentBlockIndex;
      }
      /**
       * Returns Block holder by Block index
       * @param {Number} index
       *
       * @return {HTMLElement}
       */

    }, {
      key: "getBlockByIndex",
      value: function getBlockByIndex(index) {
        var block = this.Editor.BlockManager.getBlockByIndex(index);
        return block.holder;
      }
      /**
       * Call Block Manager method that swap Blocks
       * @param {number} fromIndex - position of first Block
       * @param {number} toIndex - position of second Block
       */

    }, {
      key: "swap",
      value: function swap(fromIndex, toIndex) {
        this.Editor.BlockManager.swap(fromIndex, toIndex);
        /**
         * Move toolbar
         * DO not close the settings
         */

        this.Editor.Toolbar.move(false);
      }
      /**
       * Deletes Block
       * @param blockIndex
       */

    }, {
      key: "delete",
      value: function _delete(blockIndex) {
        this.Editor.BlockManager.removeBlock(blockIndex);
        /**
         * in case of last block deletion
         * Insert new initial empty block
         */

        if (this.Editor.BlockManager.blocks.length === 0) {
          this.Editor.BlockManager.insert();
        }
        /**
         * In case of deletion first block we need to set caret to the current Block
         */


        if (this.Editor.BlockManager.currentBlockIndex === 0) {
          this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock);
        } else {
          this.Editor.Caret.navigatePrevious(true);
        }

        this.Editor.Toolbar.close();
      }
      /**
       * Clear Editor's area
       */

    }, {
      key: "clear",
      value: function clear() {
        this.Editor.BlockManager.clear(true);
      }
      /**
       * Fills Editor with Blocks data
       * @param {OutputData} data — Saved Editor data
       */

    }, {
      key: "render",
      value: function render(data) {
        this.Editor.BlockManager.clear();
        return this.Editor.Renderer.render(data.blocks);
      }
      /**
       * Stretch Block's content
       * @param {number} index
       * @param {boolean} status - true to enable, false to disable
       */

    }, {
      key: "stretchBlock",
      value: function stretchBlock(index) {
        var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var block = this.Editor.BlockManager.getBlockByIndex(index);

        if (!block) {
          return;
        }

        block.stretched = status;
      }
      /**
       * Insert new Block
       * After set caret to this Block
       */

    }, {
      key: "insertNewBlock",
      value: function insertNewBlock() {
        var newBlock = this.Editor.BlockManager.insert();
        this.Editor.Caret.setToBlock(newBlock);
      }
    }, {
      key: "methods",

      /**
       * Available methods
       * @return {Blocks}
       */
      get: function get() {
        var _this = this;

        return {
          clear: function clear() {
            return _this.clear();
          },
          render: function render(data) {
            return _this.render(data);
          },
          delete: function _delete() {
            return _this.delete();
          },
          swap: function swap(fromIndex, toIndex) {
            return _this.swap(fromIndex, toIndex);
          },
          getBlockByIndex: function getBlockByIndex(index) {
            return _this.getBlockByIndex(index);
          },
          getCurrentBlockIndex: function getCurrentBlockIndex() {
            return _this.getCurrentBlockIndex();
          },
          getBlocksCount: function getBlocksCount() {
            return _this.getBlocksCount();
          },
          stretchBlock: function stretchBlock(index) {
            var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return _this.stretchBlock(index, status);
          },
          insertNewBlock: function insertNewBlock() {
            return _this.insertNewBlock();
          }
        };
      }
    }]);
    return BlocksAPI;
  }(_module.default);

  _exports.default = BlocksAPI;
  BlocksAPI.displayName = "BlocksAPI";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/api/caret.ts":
/*!*********************************************!*\
  !*** ./src/components/modules/api/caret.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../../__module */ "./src/components/__module.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);

  /**
   * @class CaretAPI
   * provides with methods to work with caret
   */
  var CaretAPI =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(CaretAPI, _Module);

    function CaretAPI() {
      (0, _classCallCheck2.default)(this, CaretAPI);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CaretAPI).apply(this, arguments));
    }

    (0, _createClass2.default)(CaretAPI, [{
      key: "methods",

      /**
       * Available methods
       * @return {Caret}
       */
      get: function get() {
        return {};
      }
    }]);
    return CaretAPI;
  }(_module.default);

  _exports.default = CaretAPI;
  CaretAPI.displayName = "CaretAPI";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/api/events.ts":
/*!**********************************************!*\
  !*** ./src/components/modules/api/events.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../../__module */ "./src/components/__module.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);

  /**
   * @class EventsAPI
   * provides with methods working with Toolbar
   */
  var EventsAPI =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(EventsAPI, _Module);

    function EventsAPI() {
      (0, _classCallCheck2.default)(this, EventsAPI);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(EventsAPI).apply(this, arguments));
    }

    (0, _createClass2.default)(EventsAPI, [{
      key: "on",

      /**
       * Subscribe on Events
       * @param {String} eventName
       * @param {Function} callback
       */
      value: function on(eventName, callback) {
        this.Editor.Events.on(eventName, callback);
      }
      /**
       * Emit event with data
       * @param {String} eventName
       * @param {Object} data
       */

    }, {
      key: "emit",
      value: function emit(eventName, data) {
        this.Editor.Events.emit(eventName, data);
      }
      /**
       * Unsubscribe from Event
       * @param {String} eventName
       * @param {Function} callback
       */

    }, {
      key: "off",
      value: function off(eventName, callback) {
        this.Editor.Events.off(eventName, callback);
      }
    }, {
      key: "methods",

      /**
       * Available methods
       * @return {Events}
       */
      get: function get() {
        var _this = this;

        return {
          emit: function emit(eventName, data) {
            return _this.emit(eventName, data);
          },
          off: function off(eventName, callback) {
            return _this.off(eventName, callback);
          },
          on: function on(eventName, callback) {
            return _this.on(eventName, callback);
          }
        };
      }
    }]);
    return EventsAPI;
  }(_module.default);

  _exports.default = EventsAPI;
  EventsAPI.displayName = "EventsAPI";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/api/index.ts":
/*!*********************************************!*\
  !*** ./src/components/modules/api/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../../__module */ "./src/components/__module.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);

  /**
   * @module API
   * @copyright <CodeX Team> 2018
   *
   * Each block has an Editor API instance to use provided public methods
   * if you cant to read more about how API works, please see docs
   */

  /**
   * @class API
   */
  var API =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(API, _Module);

    function API() {
      (0, _classCallCheck2.default)(this, API);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(API).apply(this, arguments));
    }

    (0, _createClass2.default)(API, [{
      key: "methods",
      get: function get() {
        return {
          blocks: this.Editor.BlocksAPI.methods,
          caret: this.Editor.CaretAPI.methods,
          events: this.Editor.EventsAPI.methods,
          listeners: this.Editor.ListenersAPI.methods,
          notifier: this.Editor.NotifierAPI.methods,
          sanitizer: this.Editor.SanitizerAPI.methods,
          saver: this.Editor.SaverAPI.methods,
          selection: this.Editor.SelectionAPI.methods,
          styles: this.Editor.StylesAPI.classes,
          toolbar: this.Editor.ToolbarAPI.methods,
          inlineToolbar: this.Editor.InlineToolbarAPI.methods
        };
      }
    }]);
    return API;
  }(_module.default);

  _exports.default = API;
  API.displayName = "API";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/api/inlineToolbar.ts":
/*!*****************************************************!*\
  !*** ./src/components/modules/api/inlineToolbar.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../../__module */ "./src/components/__module.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);

  /**
   * @class ToolbarAPI
   * provides with methods working with Toolbar
   */
  var InlineToolbarAPI =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(InlineToolbarAPI, _Module);

    function InlineToolbarAPI() {
      (0, _classCallCheck2.default)(this, InlineToolbarAPI);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(InlineToolbarAPI).apply(this, arguments));
    }

    (0, _createClass2.default)(InlineToolbarAPI, [{
      key: "toggleActions",

      /**
       * Toggles actions
       */
      value: function toggleActions(toolName) {
        this.Editor.InlineToolbar.toggleActions(toolName);
      }
    }, {
      key: "methods",

      /**
       * Available methods
       * @return {InlineToolbar}
       */
      get: function get() {
        var _this = this;

        return {
          toggleActions: function toggleActions(toolName) {
            return _this.toggleActions(toolName);
          }
        };
      }
    }]);
    return InlineToolbarAPI;
  }(_module.default);

  _exports.default = InlineToolbarAPI;
  InlineToolbarAPI.displayName = "InlineToolbarAPI";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/api/listeners.ts":
/*!*************************************************!*\
  !*** ./src/components/modules/api/listeners.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../../__module */ "./src/components/__module.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);

  /**
   * @class ListenersAPI
   * Provides with methods working with DOM Listener
   */
  var ListenersAPI =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(ListenersAPI, _Module);

    function ListenersAPI() {
      (0, _classCallCheck2.default)(this, ListenersAPI);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ListenersAPI).apply(this, arguments));
    }

    (0, _createClass2.default)(ListenersAPI, [{
      key: "on",

      /**
       * adds DOM event listener
       *
       * @param {HTMLElement} element
       * @param {string} eventType
       * @param {() => void} handler
       * @param {boolean} useCapture
       */
      value: function on(element, eventType, handler, useCapture) {
        this.Editor.Listeners.on(element, eventType, handler, useCapture);
      }
      /**
       * Removes DOM listener from element
       *
       * @param element
       * @param eventType
       * @param handler
       */

    }, {
      key: "off",
      value: function off(element, eventType, handler) {
        this.Editor.Listeners.off(element, eventType, handler);
      }
    }, {
      key: "methods",

      /**
       * Available methods
       * @return {Listeners}
       */
      get: function get() {
        var _this = this;

        return {
          on: function on(element, eventType, handler, useCapture) {
            return _this.on(element, eventType, handler, useCapture);
          },
          off: function off(element, eventType, handler) {
            return _this.off(element, eventType, handler);
          }
        };
      }
    }]);
    return ListenersAPI;
  }(_module.default);

  _exports.default = ListenersAPI;
  ListenersAPI.displayName = "ListenersAPI";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/api/notifier.ts":
/*!************************************************!*\
  !*** ./src/components/modules/api/notifier.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../../__module */ "./src/components/__module.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);

  var NotifierAPI =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(NotifierAPI, _Module);

    function NotifierAPI() {
      (0, _classCallCheck2.default)(this, NotifierAPI);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NotifierAPI).apply(this, arguments));
    }

    (0, _createClass2.default)(NotifierAPI, [{
      key: "show",
      value: function show(options) {
        return this.Editor.Notifier.show(options);
      }
    }, {
      key: "methods",

      /**
       * Available methods
       */
      get: function get() {
        var _this = this;

        return {
          show: function show(options) {
            return _this.show(options);
          }
        };
      }
    }]);
    return NotifierAPI;
  }(_module.default);

  _exports.default = NotifierAPI;
  NotifierAPI.displayName = "NotifierAPI";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/api/sanitizer.ts":
/*!*************************************************!*\
  !*** ./src/components/modules/api/sanitizer.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../../__module */ "./src/components/__module.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);

  /**
   * @class SanitizerAPI
   * Provides CodeX Editor Sanitizer that allows developers to clean their HTML
   */
  var SanitizerAPI =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(SanitizerAPI, _Module);

    function SanitizerAPI() {
      (0, _classCallCheck2.default)(this, SanitizerAPI);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SanitizerAPI).apply(this, arguments));
    }

    (0, _createClass2.default)(SanitizerAPI, [{
      key: "clean",
      value: function clean(taintString, config) {
        return this.Editor.Sanitizer.clean(taintString, config);
      }
    }, {
      key: "methods",

      /**
       * Available methods
       * @return {Sanitizer}
       */
      get: function get() {
        var _this = this;

        return {
          clean: function clean(taintString, config) {
            return _this.clean(taintString, config);
          }
        };
      }
    }]);
    return SanitizerAPI;
  }(_module.default);

  _exports.default = SanitizerAPI;
  SanitizerAPI.displayName = "SanitizerAPI";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/api/saver.ts":
/*!*********************************************!*\
  !*** ./src/components/modules/api/saver.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../../__module */ "./src/components/__module.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);

  /**
   * @class SaverAPI
   * provides with methods to save data
   */
  var SaverAPI =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(SaverAPI, _Module);

    function SaverAPI() {
      (0, _classCallCheck2.default)(this, SaverAPI);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SaverAPI).apply(this, arguments));
    }

    (0, _createClass2.default)(SaverAPI, [{
      key: "save",

      /**
       * Return Editor's data
       */
      value: function save() {
        return this.Editor.Saver.save();
      }
    }, {
      key: "methods",

      /**
       * Available methods
       * @return {Saver}
       */
      get: function get() {
        var _this = this;

        return {
          save: function save() {
            return _this.save();
          }
        };
      }
    }]);
    return SaverAPI;
  }(_module.default);

  _exports.default = SaverAPI;
  SaverAPI.displayName = "SaverAPI";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/api/selection.ts":
/*!*************************************************!*\
  !*** ./src/components/modules/api/selection.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../../__module */ "./src/components/__module.ts"), __webpack_require__(/*! ../../selection */ "./src/components/selection.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module, _selection) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);
  _selection = _interopRequireDefault(_selection);

  /**
   * @class SelectionAPI
   * Provides with methods working with SelectionUtils
   */
  var SelectionAPI =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(SelectionAPI, _Module);

    function SelectionAPI() {
      (0, _classCallCheck2.default)(this, SelectionAPI);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SelectionAPI).apply(this, arguments));
    }

    (0, _createClass2.default)(SelectionAPI, [{
      key: "findParentTag",

      /**
       * Looks ahead from selection and find passed tag with class name
       * @param {string} tagName - tag to find
       * @param {string} className - tag's class name
       * @return {HTMLElement|null}
       */
      value: function findParentTag(tagName, className) {
        return new _selection.default().findParentTag(tagName, className);
      }
      /**
       * Expand selection to passed tag
       * @param {HTMLElement} node - tag that should contain selection
       */

    }, {
      key: "expandToTag",
      value: function expandToTag(node) {
        new _selection.default().expandToTag(node);
      }
    }, {
      key: "methods",

      /**
       * Available methods
       * @return {SelectionAPIInterface}
       */
      get: function get() {
        var _this = this;

        return {
          findParentTag: function findParentTag(tagName, className) {
            return _this.findParentTag(tagName, className);
          },
          expandToTag: function expandToTag(node) {
            return _this.expandToTag(node);
          }
        };
      }
    }]);
    return SelectionAPI;
  }(_module.default);

  _exports.default = SelectionAPI;
  SelectionAPI.displayName = "SelectionAPI";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/api/styles.ts":
/*!**********************************************!*\
  !*** ./src/components/modules/api/styles.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../../__module */ "./src/components/__module.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);

  /**
   *
   */
  var StylesAPI =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(StylesAPI, _Module);

    function StylesAPI() {
      (0, _classCallCheck2.default)(this, StylesAPI);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(StylesAPI).apply(this, arguments));
    }

    (0, _createClass2.default)(StylesAPI, [{
      key: "classes",
      get: function get() {
        return {
          /**
           * Base Block styles
           */
          block: 'cdx-block',

          /**
           * Inline Tools styles
           */
          inlineToolButton: 'ce-inline-tool',
          inlineToolButtonActive: 'ce-inline-tool--active',

          /**
           * UI elements
           */
          input: 'cdx-input',
          loader: 'cdx-loader',
          button: 'cdx-button',

          /**
           * Settings styles
           */
          settingsButton: 'cdx-settings-button',
          settingsButtonActive: 'cdx-settings-button--active'
        };
      }
    }]);
    return StylesAPI;
  }(_module.default);

  _exports.default = StylesAPI;
  StylesAPI.displayName = "StylesAPI";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/api/toolbar.ts":
/*!***********************************************!*\
  !*** ./src/components/modules/api/toolbar.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../../__module */ "./src/components/__module.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);

  /**
   * @class ToolbarAPI
   * provides with methods working with Toolbar
   */
  var ToolbarAPI =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(ToolbarAPI, _Module);

    function ToolbarAPI() {
      (0, _classCallCheck2.default)(this, ToolbarAPI);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ToolbarAPI).apply(this, arguments));
    }

    (0, _createClass2.default)(ToolbarAPI, [{
      key: "open",

      /**
       * Open toolbar
       */
      value: function open() {
        this.Editor.Toolbar.open();
      }
      /**
       * Close toolbar and all included elements
       */

    }, {
      key: "close",
      value: function close() {
        this.Editor.Toolbar.close();
      }
    }, {
      key: "methods",

      /**
       * Available methods
       * @return {Toolbar}
       */
      get: function get() {
        var _this = this;

        return {
          close: function close() {
            return _this.close();
          },
          open: function open() {
            return _this.open();
          }
        };
      }
    }]);
    return ToolbarAPI;
  }(_module.default);

  _exports.default = ToolbarAPI;
  ToolbarAPI.displayName = "ToolbarAPI";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/blockEvents.ts":
/*!***********************************************!*\
  !*** ./src/components/modules/blockEvents.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../__module */ "./src/components/__module.ts"), __webpack_require__(/*! ../utils */ "./src/components/utils.ts"), __webpack_require__(/*! ./caret */ "./src/components/modules/caret.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module, _utils, _caret) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);
  _utils = _interopRequireDefault(_utils);
  _caret = _interopRequireDefault(_caret);

  /**
   * Contains keyboard and mouse events binded on each Block by Block Manager
   */
  var BlockEvents =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(BlockEvents, _Module);

    function BlockEvents() {
      (0, _classCallCheck2.default)(this, BlockEvents);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BlockEvents).apply(this, arguments));
    }

    (0, _createClass2.default)(BlockEvents, [{
      key: "keydown",

      /**
       * All keydowns on Block
       * @param {KeyboardEvent} event - keydown
       */
      value: function keydown(event) {
        /**
         * Run common method for all keydown events
         */
        this.beforeKeydownProcessing(event);
        /**
         * Fire keydown processor by event.keyCode
         */

        switch (event.keyCode) {
          case _utils.default.keyCodes.BACKSPACE:
            this.backspace(event);
            break;

          case _utils.default.keyCodes.ENTER:
            this.enter(event);
            break;

          case _utils.default.keyCodes.DOWN:
          case _utils.default.keyCodes.RIGHT:
            this.arrowRightAndDown(event);
            break;

          case _utils.default.keyCodes.UP:
          case _utils.default.keyCodes.LEFT:
            this.arrowLeftAndUp(event);
            break;

          case _utils.default.keyCodes.TAB:
            this.tabPressed(event);
            break;

          case _utils.default.keyCodes.ESC:
            this.escapePressed(event);
            break;

          default:
            this.defaultHandler();
            break;
        }
      }
      /**
       * Fires on keydown before event processing
       * @param {KeyboardEvent} event - keydown
       */

    }, {
      key: "beforeKeydownProcessing",
      value: function beforeKeydownProcessing(event) {
        /**
         * Do not close Toolbox on Tabs or on Enter with opened Toolbox
         */
        if (!this.needToolbarClosing(event)) {
          return;
        }

        this.Editor.Toolbar.close();
        var cmdKey = event.ctrlKey || event.metaKey;
        var altKey = event.altKey;
        var shiftKey = event.shiftKey;
        /** clear selecton when it is not CMD, SHIFT, ALT keys */

        if (cmdKey || altKey || shiftKey) {
          return;
        }
        /**
         * Clear all highlightings
         */


        this.Editor.BlockManager.clearFocused();

        if (event.keyCode !== _utils.default.keyCodes.ENTER && event.keyCode !== _utils.default.keyCodes.BACKSPACE) {
          /**
           * Clear selection and restore caret before navigation
           */
          this.Editor.BlockSelection.clearSelection(true);
        }
      }
      /**
       * Key up on Block:
       * - shows Inline Toolbar if something selected
       */

    }, {
      key: "keyup",
      value: function keyup(event) {
        this.Editor.InlineToolbar.handleShowingEvent(event);
      }
      /**
       * Mouse up on Block:
       * - shows Inline Toolbar if something selected
       */

    }, {
      key: "mouseUp",
      value: function mouseUp(event) {
        this.Editor.InlineToolbar.handleShowingEvent(event);
      }
      /**
       * Open Toolbox to leaf Tools
       * @param {KeyboardEvent} event
       */

    }, {
      key: "tabPressed",
      value: function tabPressed(event) {
        var currentBlock = this.Editor.BlockManager.currentBlock;
        /** Prevent Default behaviour */

        event.preventDefault();
        event.stopPropagation();
        /** this property defines leaf direction */

        var shiftKey = event.shiftKey,
            direction = shiftKey ? 'left' : 'right';
        /**
         * Don't show Plus and Toolbox near not-inital Tools
         */

        if (!this.Editor.Tools.isInitial(currentBlock.tool)) {
          return;
        }

        if (currentBlock.isEmpty) {
          if (!this.Editor.Toolbar.opened) {
            this.Editor.Toolbar.open(false, false);
            this.Editor.Toolbar.plusButton.show();
          }

          this.Editor.Toolbox.open();
        }

        if (this.Editor.Toolbox.opened) {
          this.Editor.Toolbox.leaf(direction);
        }
      }
      /**
       * Escape pressed
       * @param event
       */

    }, {
      key: "escapePressed",
      value: function escapePressed(event) {}
      /**
       * Add drop target styles
       *
       * @param {DragEvent} e
       */

    }, {
      key: "dragOver",
      value: function dragOver(e) {
        var block = this.Editor.BlockManager.getBlockByChildNode(e.target);
        block.dropTarget = true;
      }
      /**
       * Remove drop target style
       *
       * @param {DragEvent} e
       */

    }, {
      key: "dragLeave",
      value: function dragLeave(e) {
        var block = this.Editor.BlockManager.getBlockByChildNode(e.target);
        block.dropTarget = false;
      }
      /**
       * ENTER pressed on block
       * @param {KeyboardEvent} event - keydown
       */

    }, {
      key: "enter",
      value: function enter(event) {
        var _this$Editor = this.Editor,
            BlockSelection = _this$Editor.BlockSelection,
            BlockManager = _this$Editor.BlockManager,
            Tools = _this$Editor.Tools,
            Caret = _this$Editor.Caret;
        var currentBlock = BlockManager.currentBlock;
        var tool = Tools.available[currentBlock.name];

        if (currentBlock.selected) {
          if (BlockSelection.allBlocksSelected) {
            BlockManager.removeAllBlocks();
          } else {
            /** Replace current Block */
            var newBlock = BlockManager.replace();
            /** Set caret to the current block */

            Caret.setToBlock(newBlock);
          }
          /** Clear selection */


          BlockSelection.clearSelection();
          return;
        }
        /**
         * Don't handle Enter keydowns when Tool sets enableLineBreaks to true.
         * Uses for Tools like <code> where line breaks should be handled by default behaviour.
         */


        if (tool && tool[this.Editor.Tools.apiSettings.IS_ENABLED_LINE_BREAKS]) {
          return;
        }

        if (this.Editor.Toolbox.opened && this.Editor.Toolbox.getActiveTool) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
          this.Editor.Toolbox.toolButtonActivate(event, this.Editor.Toolbox.getActiveTool);
          return;
        }
        /**
         * Allow to create linebreaks by Shift+Enter
         */


        if (event.shiftKey) {
          return;
        }
        /**
         * Split the Current Block into two blocks
         * Renew local current node after split
         */


        var newCurrent = this.Editor.BlockManager.split();
        this.Editor.Caret.setToBlock(newCurrent);
        /**
         * If new Block is empty
         */

        if (this.Editor.Tools.isInitial(newCurrent.tool) && newCurrent.isEmpty) {
          /**
           * Show Toolbar
           */
          this.Editor.Toolbar.open(false);
          /**
           * Show Plus Button
           */

          this.Editor.Toolbar.plusButton.show();
        }

        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
      }
      /**
       * Handle backspace keydown on Block
       * @param {KeyboardEvent} event - keydown
       */

    }, {
      key: "backspace",
      value: function backspace(event) {
        var _this$Editor2 = this.Editor,
            BlockManager = _this$Editor2.BlockManager,
            BlockSelection = _this$Editor2.BlockSelection,
            Caret = _this$Editor2.Caret;
        var currentBlock = BlockManager.currentBlock;
        var tool = this.Editor.Tools.available[currentBlock.name];
        /**
         * Check if Block should be removed by current Backspace keydown
         */

        if (currentBlock.selected || BlockManager.currentBlock.isEmpty) {
          if (BlockSelection.allBlocksSelected) {
            this.removeAllBlocks();
          } else {
            this.removeCurrentBlock();
          }
          /** Clear selection */


          BlockSelection.clearSelection();
          return;
        }
        /**
         * Don't handle Backspaces when Tool sets enableLineBreaks to true.
         * Uses for Tools like <code> where line breaks should be handled by default behaviour.
         */


        if (tool && tool[this.Editor.Tools.apiSettings.IS_ENABLED_LINE_BREAKS]) {
          return;
        }

        var isFirstBlock = BlockManager.currentBlockIndex === 0;
        var canMergeBlocks = Caret.isAtStart && !isFirstBlock;

        if (canMergeBlocks) {
          /**
           * preventing browser default behaviour
           */
          event.preventDefault();
          /**
           * Merge Blocks
           */

          this.mergeBlocks();
        }
      }
      /**
       * remove all selected Blocks
       */

    }, {
      key: "removeAllBlocks",
      value: function removeAllBlocks() {
        var BlockManager = this.Editor.BlockManager;
        BlockManager.removeAllBlocks();
        return true;
      }
      /**
       * remove current Block and sets Caret to the correct position
       */

    }, {
      key: "removeCurrentBlock",
      value: function removeCurrentBlock() {
        var _this$Editor3 = this.Editor,
            BlockManager = _this$Editor3.BlockManager,
            Caret = _this$Editor3.Caret;
        /** If current Block is empty just remove this Block */

        BlockManager.removeBlock();
        /**
         * In case of deletion first block we need to set caret to the current Block
         * After BlockManager removes the Block (which is current now),
         * pointer that references to the current Block, now points to the Next
         */

        if (BlockManager.currentBlockIndex === 0) {
          Caret.setToBlock(BlockManager.currentBlock);
        } else if (BlockManager.currentBlock.inputs.length === 0) {
          /** If previous (now current) block doesn't contain inputs, remove it */
          BlockManager.removeBlock();
          BlockManager.insert();
        }

        Caret.setToBlock(BlockManager.currentBlock, _caret.default.positions.END);
        this.Editor.Toolbar.close();
        return true;
      }
      /**
       * Merge current and previous Blocks if they have the same type
       */

    }, {
      key: "mergeBlocks",
      value: function mergeBlocks() {
        var _this$Editor4 = this.Editor,
            BlockManager = _this$Editor4.BlockManager,
            Caret = _this$Editor4.Caret,
            Toolbar = _this$Editor4.Toolbar;
        var targetBlock = BlockManager.previousBlock;
        var blockToMerge = BlockManager.currentBlock;
        /**
         * Blocks that can be merged:
         * 1) with the same Name
         * 2) Tool has 'merge' method
         *
         * other case will handle as usual ARROW LEFT behaviour
         */

        if (blockToMerge.name !== targetBlock.name || !targetBlock.mergeable) {
          /** If target Block doesn't contain inputs, remove it */
          if (targetBlock.inputs.length === 0) {
            BlockManager.removeBlock(BlockManager.currentBlockIndex - 1);
            Caret.setToBlock(BlockManager.currentBlock);
            Toolbar.close();
            return;
          }

          if (Caret.navigatePrevious()) {
            Toolbar.close();
          }

          return;
        }

        Caret.createShadow(targetBlock.pluginsContent);
        BlockManager.mergeBlocks(targetBlock, blockToMerge).then(function () {
          /** Restore caret position after merge */
          Caret.restoreCaret(targetBlock.pluginsContent);
          targetBlock.pluginsContent.normalize();
          Toolbar.close();
        });
      }
      /**
       * Handle right and down keyboard keys
       */

    }, {
      key: "arrowRightAndDown",
      value: function arrowRightAndDown(event) {
        if (this.Editor.Caret.navigateNext()) {
          /**
           * Default behaviour moves cursor by 1 character, we need to prevent it
           */
          event.preventDefault();
        }
      }
      /**
       * Handle left and up keyboard keys
       */

    }, {
      key: "arrowLeftAndUp",
      value: function arrowLeftAndUp(event) {
        if (this.Editor.Caret.navigatePrevious()) {
          /**
           * Default behaviour moves cursor by 1 character, we need to prevent it
           */
          event.preventDefault();
        }
      }
      /**
       * Default keydown handler
       */

    }, {
      key: "defaultHandler",
      value: function defaultHandler() {}
      /**
       * Cases when we need to close Toolbar
       */

    }, {
      key: "needToolbarClosing",
      value: function needToolbarClosing(event) {
        var toolboxItemSelected = event.keyCode === _utils.default.keyCodes.ENTER && this.Editor.Toolbox.opened,
            flippingToolboxItems = event.keyCode === _utils.default.keyCodes.TAB;
        return !(event.shiftKey || flippingToolboxItems || toolboxItemSelected);
      }
    }]);
    return BlockEvents;
  }(_module.default);

  _exports.default = BlockEvents;
  BlockEvents.displayName = "BlockEvents";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/blockManager.ts":
/*!************************************************!*\
  !*** ./src/components/modules/blockManager.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"), __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../block */ "./src/components/block.ts"), __webpack_require__(/*! ../__module */ "./src/components/__module.ts"), __webpack_require__(/*! ../dom */ "./src/components/dom.ts"), __webpack_require__(/*! ../utils */ "./src/components/utils.ts"), __webpack_require__(/*! ../blocks */ "./src/components/blocks.ts"), __webpack_require__(/*! ./caret */ "./src/components/modules/caret.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _regenerator, _asyncToGenerator2, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _block, _module, _dom, _utils, _blocks, _caret) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _block = _interopRequireDefault(_block);
  _module = _interopRequireDefault(_module);
  _dom = _interopRequireDefault(_dom);
  _utils = _interopRequireDefault(_utils);
  _blocks = _interopRequireDefault(_blocks);
  _caret = _interopRequireDefault(_caret);

  /**
   * @class BlockManager
   * @classdesc Manage editor`s blocks storage and appearance
   *
   * @module BlockManager
   *
   * @version 2.0.0
   */

  /**
   * @typedef {BlockManager} BlockManager
   * @property {Number} currentBlockIndex - Index of current working block
   * @property {Proxy} _blocks - Proxy for Blocks instance {@link Blocks}
   */
  var BlockManager =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(BlockManager, _Module);

    function BlockManager() {
      var _this;

      (0, _classCallCheck2.default)(this, BlockManager);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BlockManager).apply(this, arguments));
      /**
       * Index of current working block
       *
       * @type {number}
       */

      _this.currentBlockIndex = -1;
      /**
       * Proxy for Blocks instance {@link Blocks}
       *
       * @type {Proxy}
       * @private
       */

      _this._blocks = null;
      return _this;
    }
    /**
     * returns last Block
     * @return {Block}
     */


    (0, _createClass2.default)(BlockManager, [{
      key: "prepare",

      /**
       * Should be called after Editor.UI preparation
       * Define this._blocks property
       *
       * @returns {Promise}
       */
      value: function () {
        var _prepare = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          var blocks;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  blocks = new _blocks.default(this.Editor.UI.nodes.redactor);
                  /**
                   * We need to use Proxy to overload set/get [] operator.
                   * So we can use array-like syntax to access blocks
                   *
                   * @example
                   * this._blocks[0] = new Block(...);
                   *
                   * block = this._blocks[0];
                   *
                   * @todo proxy the enumerate method
                   *
                   * @type {Proxy}
                   * @private
                   */

                  this._blocks = new Proxy(blocks, {
                    set: _blocks.default.set,
                    get: _blocks.default.get
                  });

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function prepare() {
          return _prepare.apply(this, arguments);
        };
      }()
      /**
       * Creates Block instance by tool name
       *
       * @param {String} toolName - tools passed in editor config {@link EditorConfig#tools}
       * @param {Object} data - constructor params
       * @param {Object} settings - block settings
       *
       * @return {Block}
       */

    }, {
      key: "composeBlock",
      value: function composeBlock(toolName) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var toolInstance = this.Editor.Tools.construct(toolName, data);
        var toolClass = this.Editor.Tools.available[toolName];
        var block = new _block.default(toolName, toolInstance, toolClass, settings, this.Editor.API.methods);
        this.bindEvents(block);
        return block;
      }
      /**
       * Insert new block into _blocks
       *
       * @param {String} toolName — plugin name, by default method inserts initial block type
       * @param {Object} data — plugin data
       * @param {Object} settings - default settings
       *
       * @return {Block}
       */

    }, {
      key: "insert",
      value: function insert() {
        var toolName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.config.initialBlock;
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        // Increment index before construct,
        // because developers can use API/Blocks/getCurrentInputIndex on the render() method
        var newIndex = ++this.currentBlockIndex;
        var block = this.composeBlock(toolName, data, settings);
        this._blocks[newIndex] = block;
        return block;
      }
      /**
       * Insert pasted content. Call onPaste callback after insert.
       *
       * @param {string} toolName
       * @param {PasteEvent} pasteEvent - pasted data
       * @param {boolean} replace - should replace current block
       */

    }, {
      key: "paste",
      value: function paste(toolName, pasteEvent) {
        var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var block;

        if (replace) {
          block = this.replace(toolName);
        } else {
          block = this.insert(toolName);
        }

        try {
          block.call('onPaste', pasteEvent);
        } catch (e) {
          _utils.default.log("".concat(toolName, ": onPaste callback call is failed"), 'error', e);
        }

        return block;
      }
      /**
       * Always inserts at the end
       * @return {Block}
       */

    }, {
      key: "insertAtEnd",
      value: function insertAtEnd() {
        /**
         * Define new value for current block index
         */
        this.currentBlockIndex = this.blocks.length - 1;
        /**
         * Insert initial typed block
         */

        return this.insert();
      }
      /**
       * Merge two blocks
       * @param {Block} targetBlock - previous block will be append to this block
       * @param {Block} blockToMerge - block that will be merged with target block
       *
       * @return {Promise} - the sequence that can be continued
       */

    }, {
      key: "mergeBlocks",
      value: function () {
        var _mergeBlocks = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2(targetBlock, blockToMerge) {
          var blockToMergeIndex, blockToMergeData;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  blockToMergeIndex = this._blocks.indexOf(blockToMerge);

                  if (!blockToMerge.isEmpty) {
                    _context2.next = 3;
                    break;
                  }

                  return _context2.abrupt("return");

                case 3:
                  _context2.next = 5;
                  return blockToMerge.data;

                case 5:
                  blockToMergeData = _context2.sent;

                  if (_utils.default.isEmpty(blockToMergeData)) {
                    _context2.next = 9;
                    break;
                  }

                  _context2.next = 9;
                  return targetBlock.mergeWith(blockToMergeData);

                case 9:
                  this.removeBlock(blockToMergeIndex);
                  this.currentBlockIndex = this._blocks.indexOf(targetBlock);

                case 11:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function mergeBlocks(_x, _x2) {
          return _mergeBlocks.apply(this, arguments);
        };
      }()
      /**
       * Remove block with passed index or remove last
       * @param {Number|null} index
       */

    }, {
      key: "removeBlock",
      value: function removeBlock(index) {
        if (!index) {
          index = this.currentBlockIndex;
        }

        this._blocks.remove(index);

        if (this.currentBlockIndex >= index) {
          this.currentBlockIndex--;
        }
        /**
         * If first Block was removed, insert new Initial Block and set focus on it`s first input
         */


        if (!this.blocks.length) {
          this.currentBlockIndex = -1;
          this.insert();
          this.currentBlock.firstInput.focus();
        }
      }
      /**
       * Attention!
       * After removing insert new initial typed Block and focus on it
       * Removes all blocks
       */

    }, {
      key: "removeAllBlocks",
      value: function removeAllBlocks() {
        for (var index = this.blocks.length - 1; index >= 0; index--) {
          this._blocks.remove(index);
        }

        this.currentBlockIndex = -1;
        this.insert();
        this.currentBlock.firstInput.focus();
      }
      /**
       * Split current Block
       * 1. Extract content from Caret position to the Block`s end
       * 2. Insert a new Block below current one with extracted content
       *
       * @return {Block}
       */

    }, {
      key: "split",
      value: function split() {
        var extractedFragment = this.Editor.Caret.extractFragmentFromCaretPosition();

        var wrapper = _dom.default.make('div');

        wrapper.append(extractedFragment);
        /**
         * @todo make object in accordance with Tool
         */

        var data = {
          text: _dom.default.isEmpty(wrapper) ? '' : wrapper.innerHTML
        };
        /**
         * Renew current Block
         * @type {Block}
         */

        return this.insert(this.config.initialBlock, data);
      }
      /**
       * Replace current working block
       *
       * @param {String} toolName — plugin name
       * @param {Object} data — plugin data
       *
       * @return {Block}
       */

    }, {
      key: "replace",
      value: function replace() {
        var toolName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.config.initialBlock;
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var block = this.composeBlock(toolName, data);

        this._blocks.insert(this.currentBlockIndex, block, true);

        return block;
      }
      /**
       * Returns Block by passed index
       * @param {Number} index
       * @return {Block}
       */

    }, {
      key: "getBlockByIndex",
      value: function getBlockByIndex(index) {
        return this._blocks[index];
      }
      /**
       * Get Block instance by html element
       * @param {Node} element
       * @returns {Block}
       */

    }, {
      key: "getBlock",
      value: function getBlock(element) {
        if (!_dom.default.isElement(element)) {
          element = element.parentNode;
        }

        var nodes = this._blocks.nodes,
            firstLevelBlock = element.closest(".".concat(_block.default.CSS.wrapper)),
            index = nodes.indexOf(firstLevelBlock);

        if (index >= 0) {
          return this._blocks[index];
        }
      }
      /**
       * Remove selection from all Blocks then highlight only Current Block
       */

    }, {
      key: "highlightCurrentNode",
      value: function highlightCurrentNode() {
        /**
         * Remove previous selected Block's state
         */
        this.clearFocused();
        /**
         * Mark current Block as selected
         * @type {boolean}
         */

        this.currentBlock.focused = true;
      }
      /**
       * Remove selection from all Blocks
       */

    }, {
      key: "clearFocused",
      value: function clearFocused() {
        this.blocks.forEach(function (block) {
          return block.focused = false;
        });
      }
      /**
       * 1) Find first-level Block from passed child Node
       * 2) Mark it as current
       *
       *  @param {Node} childNode - look ahead from this node.
       *  @param {string} caretPosition - position where to set caret
       *  @throws Error  - when passed Node is not included at the Block
       */

    }, {
      key: "setCurrentBlockByChildNode",
      value: function setCurrentBlockByChildNode(childNode) {
        var caretPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _caret.default.positions.DEFAULT;

        /**
         * If node is Text TextNode
         */
        if (!_dom.default.isElement(childNode)) {
          childNode = childNode.parentNode;
        }

        var parentFirstLevelBlock = childNode.closest(".".concat(_block.default.CSS.wrapper));

        if (parentFirstLevelBlock) {
          /**
           * Update current Block's index
           * @type {number}
           */
          this.currentBlockIndex = this._blocks.nodes.indexOf(parentFirstLevelBlock);
          this.Editor.Caret.setToInput(childNode, caretPosition);
        } else {
          throw new Error('Can not find a Block from this child Node');
        }
      }
      /**
       * Return block which contents passed node
       *
       * @param {Node} childNode
       * @return {Block}
       */

    }, {
      key: "getBlockByChildNode",
      value: function getBlockByChildNode(childNode) {
        /**
         * If node is Text TextNode
         */
        if (!_dom.default.isElement(childNode)) {
          childNode = childNode.parentNode;
        }

        var firstLevelBlock = childNode.closest(".".concat(_block.default.CSS.wrapper));
        return this.blocks.find(function (block) {
          return block.holder === firstLevelBlock;
        });
      }
      /**
       * Swap Blocks Position
       * @param {Number} fromIndex
       * @param {Number} toIndex
       */

    }, {
      key: "swap",
      value: function swap(fromIndex, toIndex) {
        /** Move up current Block */
        this._blocks.swap(fromIndex, toIndex);
        /** Now actual block moved up so that current block index decreased */


        this.currentBlockIndex = toIndex;
      }
      /**
       * Sets current Block Index -1 which means unknown
       * and clear highlightings
       */

    }, {
      key: "dropPointer",
      value: function dropPointer() {
        this.currentBlockIndex = -1;
        this.clearFocused();
      }
      /**
       * Clears Editor
       * @param {boolean} needAddInitialBlock - 1) in internal calls (for example, in api.blocks.render)
       *                                        we don't need to add empty initial block
       *                                        2) in api.blocks.clear we should add empty block
       */

    }, {
      key: "clear",
      value: function clear() {
        var needAddInitialBlock = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        this._blocks.removeAll();

        this.dropPointer();

        if (needAddInitialBlock) {
          this.insert(this.config.initialBlock);
        }
      }
      /**
       * Bind Events
       * @param {Object} block
       */

    }, {
      key: "bindEvents",
      value: function bindEvents(block) {
        var _this$Editor = this.Editor,
            BlockEvents = _this$Editor.BlockEvents,
            Listeners = _this$Editor.Listeners;
        Listeners.on(block.holder, 'keydown', function (event) {
          return BlockEvents.keydown(event);
        }, true);
        Listeners.on(block.holder, 'mouseup', function (event) {
          return BlockEvents.mouseUp(event);
        });
        Listeners.on(block.holder, 'keyup', function (event) {
          return BlockEvents.keyup(event);
        });
        Listeners.on(block.holder, 'dragover', function (event) {
          return BlockEvents.dragOver(event);
        });
        Listeners.on(block.holder, 'dragleave', function (event) {
          return BlockEvents.dragLeave(event);
        });
      }
    }, {
      key: "lastBlock",
      get: function get() {
        return this._blocks[this._blocks.length - 1];
      }
      /**
       * Get current Block instance
       *
       * @return {Block}
       */

    }, {
      key: "currentBlock",
      get: function get() {
        return this._blocks[this.currentBlockIndex];
      }
      /**
       * Returns next Block instance
       * @return {Block|null}
       */

    }, {
      key: "nextBlock",
      get: function get() {
        var isLastBlock = this.currentBlockIndex === this._blocks.length - 1;

        if (isLastBlock) {
          return null;
        }

        return this._blocks[this.currentBlockIndex + 1];
      }
      /**
       * Return first Block with inputs after current Block
       *
       * @returns {Block | undefined}
       */

    }, {
      key: "nextContentfulBlock",
      get: function get() {
        var nextBlocks = this.blocks.slice(this.currentBlockIndex + 1);
        return nextBlocks.find(function (block) {
          return !!block.inputs.length;
        });
      }
      /**
       * Return first Block with inputs before current Block
       *
       * @returns {Block | undefined}
       */

    }, {
      key: "previousContentfulBlock",
      get: function get() {
        var previousBlocks = this.blocks.slice(0, this.currentBlockIndex).reverse();
        return previousBlocks.find(function (block) {
          return !!block.inputs.length;
        });
      }
      /**
       * Returns previous Block instance
       * @return {Block|null}
       */

    }, {
      key: "previousBlock",
      get: function get() {
        var isFirstBlock = this.currentBlockIndex === 0;

        if (isFirstBlock) {
          return null;
        }

        return this._blocks[this.currentBlockIndex - 1];
      }
      /**
       * Get array of Block instances
       *
       * @returns {Block[]} {@link Blocks#array}
       */

    }, {
      key: "blocks",
      get: function get() {
        return this._blocks.array;
      }
    }]);
    return BlockManager;
  }(_module.default);

  _exports.default = BlockManager;
  BlockManager.displayName = "BlockManager";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/blockSelection.ts":
/*!**************************************************!*\
  !*** ./src/components/modules/blockSelection.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../__module */ "./src/components/__module.ts"), __webpack_require__(/*! ../utils */ "./src/components/utils.ts"), __webpack_require__(/*! ../dom */ "./src/components/dom.ts"), __webpack_require__(/*! ../selection */ "./src/components/selection.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module, _utils, _dom, _selection) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);
  _utils = _interopRequireDefault(_utils);
  _dom = _interopRequireDefault(_dom);
  _selection = _interopRequireDefault(_selection);

  /**
   * @class BlockSelection
   * @classdesc Manages Block selection with shortcut CMD+A and with mouse
   *
   * @module BlockSelection
   * @version 1.0.0
   */
  var BlockSelection =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(BlockSelection, _Module);

    function BlockSelection() {
      var _this;

      (0, _classCallCheck2.default)(this, BlockSelection);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BlockSelection).apply(this, arguments));
      /**
       * Flag used to define block selection
       * First CMD+A defines it as true and then second CMD+A selects all Blocks
       * @type {boolean}
       */

      _this.needToSelectAll = false;
      /**
       * Flag used to define native input selection
       * In this case we allow double CMD+A to select Block
       * @type {boolean}
       */

      _this.nativeInputSelected = false;
      return _this;
    }
    /**
     * Sanitizer Config
     * @return {SanitizerConfig}
     */


    (0, _createClass2.default)(BlockSelection, [{
      key: "prepare",

      /**
       * Module Preparation
       * Registers Shortcuts CMD+A and CMD+C
       * to select all and copy them
       */
      value: function prepare() {
        var _this2 = this;

        var Shortcuts = this.Editor.Shortcuts;
        /** Selection shortcut */

        Shortcuts.add({
          name: 'CMD+A',
          handler: function handler(event) {
            _this2.handleCommandA(event);
          }
        });
        /** Shortcut to copy selected blocks */

        Shortcuts.add({
          name: 'CMD+C',
          handler: function handler(event) {
            _this2.handleCommandC(event);
          }
        });
        this.selection = new _selection.default();
      }
      /**
       * Clear selection from Blocks
       */

    }, {
      key: "clearSelection",
      value: function clearSelection() {
        var restoreSelection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        this.needToSelectAll = false;
        this.nativeInputSelected = false;

        if (!this.anyBlockSelected) {
          return;
        }
        /**
         * restore selection when Block is already selected
         * but someone tries to write something.
         */


        if (restoreSelection) {
          this.selection.restore();
        }
        /** Now all blocks cleared */


        this.allBlocksSelected = false;
      }
      /**
       * First CMD+A Selects current focused blocks,
       * and consequent second CMD+A keypress selects all blocks
       *
       * @param {keydown} event
       */

    }, {
      key: "handleCommandA",
      value: function handleCommandA(event) {
        /** allow default selection on native inputs */
        if (_dom.default.isNativeInput(event.target) && !this.nativeInputSelected) {
          this.nativeInputSelected = true;
          return;
        }
        /** Prevent default selection */


        event.preventDefault();

        if (this.needToSelectAll) {
          this.selectAllBlocks();
          this.needToSelectAll = false;
        } else {
          this.selectBlockByIndex();
          this.needToSelectAll = true;
        }
      }
      /**
       * Copying selected blocks
       * Before putting to the clipboard we sanitize all blocks and then copy to the clipboard
       *
       * @param event
       */

    }, {
      key: "handleCommandC",
      value: function handleCommandC(event) {
        var _this3 = this;

        var _this$Editor = this.Editor,
            BlockManager = _this$Editor.BlockManager,
            Sanitizer = _this$Editor.Sanitizer;

        if (!this.anyBlockSelected) {
          return;
        }
        /**
         * Prevent default copy
         * Remove "decline sound" on macOS
         */


        event.preventDefault();

        var fakeClipboard = _dom.default.make('div');

        BlockManager.blocks.filter(function (block) {
          return block.selected;
        }).forEach(function (block) {
          /**
           * Make <p> tag that holds clean HTML
           */
          var cleanHTML = Sanitizer.clean(block.holder.innerHTML, _this3.sanitizerConfig);

          var fragment = _dom.default.make('p');

          fragment.innerHTML = cleanHTML;
          fakeClipboard.appendChild(fragment);
        });

        _utils.default.copyTextToClipboard(fakeClipboard.innerHTML);
      }
      /**
       * Select All Blocks
       * Each Block has selected setter that makes Block copyable
       */

    }, {
      key: "selectAllBlocks",
      value: function selectAllBlocks() {
        var BlockManager = this.Editor.BlockManager;
        this.allBlocksSelected = true;
      }
      /**
       * select Block
       * @param {number?} index - Block index according to the BlockManager's indexes
       */

    }, {
      key: "selectBlockByIndex",
      value: function selectBlockByIndex(index) {
        var BlockManager = this.Editor.BlockManager;
        /**
         * Remove previous focused Block's state
         */

        BlockManager.clearFocused();
        var block;

        if (isNaN(index)) {
          block = BlockManager.currentBlock;
        } else {
          block = BlockManager.getBlockByIndex(index);
        }
        /** Save selection */


        this.selection.save();

        _selection.default.get().removeAllRanges();

        block.selected = true;
      }
    }, {
      key: "sanitizerConfig",
      get: function get() {
        return {
          p: {},
          h1: {},
          h2: {},
          h3: {},
          h4: {},
          h5: {},
          h6: {},
          ol: {},
          ul: {},
          li: {},
          br: true,
          img: {
            src: true,
            width: true,
            height: true
          },
          a: {
            href: true
          },
          b: {},
          i: {},
          u: {}
        };
      }
      /**
       * Flag that identifies all Blocks selection
       * @return {boolean}
       */

    }, {
      key: "allBlocksSelected",
      get: function get() {
        var BlockManager = this.Editor.BlockManager;
        return BlockManager.blocks.every(function (block) {
          return block.selected === true;
        });
      }
      /**
       * Set selected all blocks
       * @param {boolean} state
       */
      ,
      set: function set(state) {
        var BlockManager = this.Editor.BlockManager;
        BlockManager.blocks.forEach(function (block) {
          return block.selected = state;
        });
      }
      /**
       * Flag that identifies any Block selection
       * @return {boolean}
       */

    }, {
      key: "anyBlockSelected",
      get: function get() {
        var BlockManager = this.Editor.BlockManager;
        return BlockManager.blocks.some(function (block) {
          return block.selected === true;
        });
      }
    }]);
    return BlockSelection;
  }(_module.default);

  _exports.default = BlockSelection;
  BlockSelection.displayName = "BlockSelection";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/caret.ts":
/*!*****************************************!*\
  !*** ./src/components/modules/caret.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../selection */ "./src/components/selection.ts"), __webpack_require__(/*! ../__module */ "./src/components/__module.ts"), __webpack_require__(/*! ../dom */ "./src/components/dom.ts"), __webpack_require__(/*! ../utils */ "./src/components/utils.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _selection, _module, _dom, _utils) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _selection = _interopRequireDefault(_selection);
  _module = _interopRequireDefault(_module);
  _dom = _interopRequireDefault(_dom);
  _utils = _interopRequireDefault(_utils);

  /**
   * @class Caret
   * @classdesc Contains methods for working Caret
   *
   * Uses Range methods to manipulate with caret
   *
   * @module Caret
   *
   * @version 2.0.0
   */

  /**
   * @typedef {Caret} Caret
   */
  var Caret =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(Caret, _Module);

    function Caret() {
      (0, _classCallCheck2.default)(this, Caret);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Caret).apply(this, arguments));
    }

    (0, _createClass2.default)(Caret, [{
      key: "setToBlock",

      /**
       * Method gets Block instance and puts caret to the text node with offset
       * There two ways that method applies caret position:
       *   - first found text node: sets at the beginning, but you can pass an offset
       *   - last found text node: sets at the end of the node. Also, you can customize the behaviour
       *
       * @param {Block} block - Block class
       * @param {String} position - position where to set caret.
       *                            If default - leave default behaviour and apply offset if it's passed
       * @param {Number} offset - caret offset regarding to the text node
       */
      value: function setToBlock(block) {
        var _this = this;

        var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Caret.positions.DEFAULT;
        var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var BlockManager = this.Editor.BlockManager;
        var element;

        switch (position) {
          case Caret.positions.START:
            element = block.firstInput;
            break;

          case Caret.positions.END:
            element = block.lastInput;
            break;

          default:
            element = block.currentInput;
        }

        if (!element) {
          return;
        }

        var nodeToSet = _dom.default.getDeepestNode(element, position === Caret.positions.END);

        var contentLength = _dom.default.getContentLength(nodeToSet);

        switch (true) {
          case position === Caret.positions.START:
            offset = 0;
            break;

          case position === Caret.positions.END:
          case offset > contentLength:
            offset = contentLength;
            break;
        }
        /**
         * @todo try to fix via Promises or use querySelectorAll to not to use timeout
         */


        _utils.default.delay(function () {
          _this.set(nodeToSet, offset);
        }, 20)();

        BlockManager.setCurrentBlockByChildNode(block.holder);
        BlockManager.currentBlock.currentInput = element;
      }
      /**
       * Set caret to the current input of current Block.
       *
       * @param {HTMLElement} input - input where caret should be set
       * @param {String} position - position of the caret.
       *                            If default - leave default behaviour and apply offset if it's passed
       * @param {number} offset - caret offset regarding to the text node
       */

    }, {
      key: "setToInput",
      value: function setToInput(input) {
        var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Caret.positions.DEFAULT;
        var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var currentBlock = this.Editor.BlockManager.currentBlock;

        var nodeToSet = _dom.default.getDeepestNode(input);

        switch (position) {
          case Caret.positions.START:
            this.set(nodeToSet, 0);
            break;

          case Caret.positions.END:
            var contentLength = _dom.default.getContentLength(nodeToSet);

            this.set(nodeToSet, contentLength);
            break;

          default:
            if (offset) {
              this.set(nodeToSet, offset);
            }

        }

        currentBlock.currentInput = input;
      }
      /**
       * Creates Document Range and sets caret to the element with offset
       * @param {HTMLElement} element - target node.
       * @param {Number} offset - offset
       */

    }, {
      key: "set",
      value: function set(element) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var range = document.createRange(),
            selection = _selection.default.get();
        /** if found deepest node is native input */


        if (_dom.default.isNativeInput(element)) {
          if (!_dom.default.canSetCaret(element)) {
            return;
          }

          element.focus();
          element.selectionStart = element.selectionEnd = offset;
          return;
        }

        range.setStart(element, offset);
        range.setEnd(element, offset);
        selection.removeAllRanges();
        selection.addRange(range);
        /** If new cursor position is not visible, scroll to it */

        var _range$getBoundingCli = range.getBoundingClientRect(),
            top = _range$getBoundingCli.top,
            bottom = _range$getBoundingCli.bottom;

        var _window = window,
            innerHeight = _window.innerHeight;

        if (top < 0) {
          window.scrollBy(0, top);
        }

        if (bottom > innerHeight) {
          window.scrollBy(0, bottom - innerHeight);
        }
      }
      /**
       * Set Caret to the last Block
       * If last block is not empty, append another empty block
       */

    }, {
      key: "setToTheLastBlock",
      value: function setToTheLastBlock() {
        var lastBlock = this.Editor.BlockManager.lastBlock;

        if (!lastBlock) {
          return;
        }
        /**
         * If last block is empty and it is an initialBlock, set to that.
         * Otherwise, append new empty block and set to that
         */


        if (this.Editor.Tools.isInitial(lastBlock.tool) && lastBlock.isEmpty) {
          this.setToBlock(lastBlock);
        } else {
          var newBlock = this.Editor.BlockManager.insertAtEnd();
          this.setToBlock(newBlock);
        }
      }
      /**
       * Extract content fragment of current Block from Caret position to the end of the Block
       */

    }, {
      key: "extractFragmentFromCaretPosition",
      value: function extractFragmentFromCaretPosition() {
        var selection = _selection.default.get();

        if (selection.rangeCount) {
          var selectRange = selection.getRangeAt(0);
          var currentBlockInput = this.Editor.BlockManager.currentBlock.currentInput;
          selectRange.deleteContents();

          if (currentBlockInput) {
            var range = selectRange.cloneRange();
            range.selectNodeContents(currentBlockInput);
            range.setStart(selectRange.endContainer, selectRange.endOffset);
            return range.extractContents();
          }
        }
      }
      /**
       * Set's caret to the next Block or Tool`s input
       * Before moving caret, we should check if caret position is at the end of Plugins node
       * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
       *
       * @param {Boolean} force - force navigation even if caret is not at the end
       *
       * @return {Boolean}
       */

    }, {
      key: "navigateNext",
      value: function navigateNext() {
        var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var _this$Editor$BlockMan = this.Editor.BlockManager,
            currentBlock = _this$Editor$BlockMan.currentBlock,
            nextContentfulBlock = _this$Editor$BlockMan.nextContentfulBlock;
        var nextInput = currentBlock.nextInput;

        if (!nextContentfulBlock && !nextInput) {
          return false;
        }

        if (force) {
          this.setToBlock(nextContentfulBlock, Caret.positions.START);
          return true;
        }

        if (this.isAtEnd) {
          /** If next Tool`s input exists, focus on it. Otherwise set caret to the next Block */
          if (!nextInput) {
            this.setToBlock(nextContentfulBlock, Caret.positions.START);
          } else {
            this.setToInput(nextInput, Caret.positions.START);
          }

          return true;
        }

        return false;
      }
      /**
       * Set's caret to the previous Tool`s input or Block
       * Before moving caret, we should check if caret position is start of the Plugins node
       * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
       *
       * @param {Boolean} force - force navigation even if caret is not at the start
       *
       * @return {Boolean}
       */

    }, {
      key: "navigatePrevious",
      value: function navigatePrevious() {
        var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var _this$Editor$BlockMan2 = this.Editor.BlockManager,
            currentBlock = _this$Editor$BlockMan2.currentBlock,
            previousContentfulBlock = _this$Editor$BlockMan2.previousContentfulBlock;

        if (!currentBlock) {
          return false;
        }

        var previousInput = currentBlock.previousInput;

        if (!previousContentfulBlock && !previousInput) {
          return false;
        }

        if (force) {
          this.setToBlock(previousContentfulBlock, Caret.positions.END);
          return true;
        }

        if (this.isAtStart) {
          /** If previous Tool`s input exists, focus on it. Otherwise set caret to the previous Block */
          if (!previousInput) {
            this.setToBlock(previousContentfulBlock, Caret.positions.END);
          } else {
            this.setToInput(previousInput, Caret.positions.END);
          }

          return true;
        }

        return false;
      }
      /**
       * Inserts shadow element after passed element where caret can be placed
       * @param {Node} element
       */

    }, {
      key: "createShadow",
      value: function createShadow(element) {
        var shadowCaret = document.createElement('span');
        shadowCaret.classList.add(Caret.CSS.shadowCaret);
        element.insertAdjacentElement('beforeEnd', shadowCaret);
      }
      /**
       * Restores caret position
       * @param {HTMLElement} element
       */

    }, {
      key: "restoreCaret",
      value: function restoreCaret(element) {
        var shadowCaret = element.querySelector(".".concat(Caret.CSS.shadowCaret));

        if (!shadowCaret) {
          return;
        }
        /**
         * After we set the caret to the required place
         * we need to clear shadow caret
         *
         * - make new range
         * - select shadowed span
         * - use extractContent to remove it from DOM
         */


        var sel = new _selection.default();
        sel.expandToTag(shadowCaret);
        setTimeout(function () {
          var newRange = document.createRange();
          newRange.selectNode(shadowCaret);
          newRange.extractContents();
        }, 50);
      }
      /**
       * Inserts passed content at caret position
       *
       * @param {string} content - content to insert
       */

    }, {
      key: "insertContentAtCaretPosition",
      value: function insertContentAtCaretPosition(content) {
        var fragment = document.createDocumentFragment();
        var wrapper = document.createElement('div');

        var selection = _selection.default.get();

        var range = _selection.default.range;
        wrapper.innerHTML = content;
        Array.from(wrapper.childNodes).forEach(function (child) {
          return fragment.appendChild(child);
        });
        var lastChild = fragment.lastChild;
        range.deleteContents();
        range.insertNode(fragment);
        /** Cross-browser caret insertion */

        var newRange = document.createRange();
        newRange.setStart(lastChild, lastChild.textContent.length);
        selection.removeAllRanges();
        selection.addRange(newRange);
      }
      /**
       * Get all first-level (first child of [contenteditabel]) siblings from passed node
       * Then you can check it for emptiness
       *
       * @example
       * <div contenteditable>
       *     <p></p>                            |
       *     <p></p>                            | left first-level siblings
       *     <p></p>                            |
       *     <blockquote><a><b>adaddad</b><a><blockquote>       <-- passed node for example <b>
       *     <p></p>                            |
       *     <p></p>                            | right first-level siblings
       *     <p></p>                            |
       * </div>
       *
       * @return {Element[]}
       */

    }, {
      key: "getHigherLevelSiblings",
      value: function getHigherLevelSiblings(from, direction) {
        var current = from;
        var siblings = [];
        /**
         * Find passed node's firs-level parent (in example - blockquote)
         */

        while (current.parentNode && current.parentNode.contentEditable !== 'true') {
          current = current.parentNode;
        }

        var sibling = direction === 'left' ? 'previousSibling' : 'nextSibling';
        /**
         * Find all left/right siblings
         */

        while (current[sibling]) {
          current = current[sibling];
          siblings.push(current);
        }

        return siblings;
      }
    }, {
      key: "isAtStart",

      /**
       * Get's deepest first node and checks if offset is zero
       * @return {boolean}
       */
      get: function get() {
        /**
         * Don't handle ranges
         */
        if (!_selection.default.isCollapsed) {
          return false;
        }

        var selection = _selection.default.get(),
            anchorNode = selection.anchorNode,
            firstNode = _dom.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput);
        /** In case lastNode is native input */


        if (_dom.default.isNativeInput(firstNode)) {
          return firstNode.selectionEnd === 0;
        }
        /**
         * Workaround case when caret in the text like " |Hello!"
         * selection.anchorOffset is 1, but real caret visible position is 0
         * @type {number}
         */


        var firstLetterPosition = anchorNode.textContent.search(/\S/);

        if (firstLetterPosition === -1) {
          // empty text
          firstLetterPosition = 0;
        }
        /**
         * In case of
         * <div contenteditable>
         *     <p><b></b></p>   <-- first (and deepest) node is <b></b>
         *     |adaddad         <-- anchor node
         * </div>
         */


        if (_dom.default.isEmpty(firstNode)) {
          var leftSiblings = this.getHigherLevelSiblings(anchorNode, 'left'),
              nothingAtLeft = leftSiblings.every(function (node) {
            return _dom.default.isEmpty(node);
          });

          if (nothingAtLeft && selection.anchorOffset === firstLetterPosition) {
            return true;
          }
        }
        /**
         * We use <= comparison for case:
         * "| Hello"  <--- selection.anchorOffset is 0, but firstLetterPosition is 1
         */


        return firstNode === null || anchorNode === firstNode && selection.anchorOffset <= firstLetterPosition;
      }
      /**
       * Get's deepest last node and checks if offset is last node text length
       * @return {boolean}
       */

    }, {
      key: "isAtEnd",
      get: function get() {
        /**
         * Don't handle ranges
         */
        if (!_selection.default.isCollapsed) {
          return false;
        }

        var selection = _selection.default.get(),
            anchorNode = selection.anchorNode,
            lastNode = _dom.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput, true);
        /** In case lastNode is native input */


        if (_dom.default.isNativeInput(lastNode)) {
          return lastNode.selectionEnd === lastNode.value.length;
        }
        /**
         * In case of
         * <div contenteditable>
         *     adaddad|         <-- anchor node
         *     <p><b></b></p>   <-- first (and deepest) node is <b></b>
         * </div>
         */


        if (_dom.default.isEmpty(lastNode)) {
          var leftSiblings = this.getHigherLevelSiblings(anchorNode, 'right'),
              nothingAtRight = leftSiblings.every(function (node) {
            return _dom.default.isEmpty(node);
          });

          if (nothingAtRight && selection.anchorOffset === anchorNode.textContent.length) {
            return true;
          }
        }
        /**
         * Workaround case:
         * hello |     <--- anchorOffset will be 5, but textContent.length will be 6.
         * Why not regular .trim():
         *  in case of ' hello |' trim() will also remove space at the beginning, so length will be lower than anchorOffset
         */


        var rightTrimmedText = lastNode.textContent.replace(/\s+$/, '');
        /**
         * We use >= comparison for case:
         * "Hello |"  <--- selection.anchorOffset is 7, but rightTrimmedText is 6
         */

        return anchorNode === lastNode && selection.anchorOffset >= rightTrimmedText.length;
      }
    }], [{
      key: "positions",

      /**
       * Allowed caret positions in input
       *
       * @static
       * @returns {{START: string, END: string, DEFAULT: string}}
       */
      get: function get() {
        return {
          START: 'start',
          END: 'end',
          DEFAULT: 'default'
        };
      }
      /**
       * Elements styles that can be useful for Caret Module
       */

    }, {
      key: "CSS",
      get: function get() {
        return {
          shadowCaret: 'cdx-shadow-caret'
        };
      }
    }]);
    return Caret;
  }(_module.default);

  _exports.default = Caret;
  Caret.displayName = "Caret";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/dragNDrop.ts":
/*!*********************************************!*\
  !*** ./src/components/modules/dragNDrop.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"), __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../selection */ "./src/components/selection.ts"), __webpack_require__(/*! ../__module */ "./src/components/__module.ts"), __webpack_require__(/*! ./caret */ "./src/components/modules/caret.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _regenerator, _asyncToGenerator2, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _selection, _module, _caret) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _selection = _interopRequireDefault(_selection);
  _module = _interopRequireDefault(_module);
  _caret = _interopRequireDefault(_caret);

  var DragNDrop =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(DragNDrop, _Module);

    function DragNDrop() {
      var _this;

      (0, _classCallCheck2.default)(this, DragNDrop);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DragNDrop).apply(this, arguments));
      /**
       * If drag has been started at editor, we save it
       *
       * @type Boolean
       * @private
       */

      _this.isStartedAtEditor = false;
      /**
       * Handle drop event
       *
       * @param {DragEvent} dropEvent
       */

      _this.processDrop =
      /*#__PURE__*/
      function () {
        var _ref = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(dropEvent) {
          var _this$Editor, BlockManager, Paste;

          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this$Editor = _this.Editor, BlockManager = _this$Editor.BlockManager, Paste = _this$Editor.Paste;
                  dropEvent.preventDefault();
                  BlockManager.blocks.forEach(function (block) {
                    return block.dropTarget = false;
                  });

                  if (_selection.default.isAtEditor && !_selection.default.isCollapsed && _this.isStartedAtEditor) {
                    document.execCommand('delete');
                  }

                  _this.isStartedAtEditor = false;
                  /**
                   * Try to set current block by drop target.
                   * If drop target (error will be thrown) is not part of the Block, set last Block as current.
                   */

                  try {
                    BlockManager.setCurrentBlockByChildNode(dropEvent.target, _caret.default.positions.END);
                  } catch (e) {
                    BlockManager.setCurrentBlockByChildNode(BlockManager.lastBlock.holder, _caret.default.positions.END);
                  }

                  Paste.processDataTransfer(dropEvent.dataTransfer, true);

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();

      return _this;
    }
    /**
     * Bind events
     *
     * @private
     */


    (0, _createClass2.default)(DragNDrop, [{
      key: "prepare",
      value: function prepare() {
        this.bindEvents();
      }
      /**
       * Add drag events listeners to editor zone
       * @private
       */

    }, {
      key: "bindEvents",
      value: function bindEvents() {
        var _this2 = this;

        this.Editor.Listeners.on(this.Editor.UI.nodes.holder, 'drop', this.processDrop, true);
        this.Editor.Listeners.on(this.Editor.UI.nodes.holder, 'dragstart', function (dragEvent) {
          if (_selection.default.isAtEditor && !_selection.default.isCollapsed) {
            _this2.isStartedAtEditor = true;
          }

          _this2.Editor.InlineToolbar.close();
        });
        /* Prevent default browser behavior to allow drop on non-contenteditable elements */

        this.Editor.Listeners.on(this.Editor.UI.nodes.holder, 'dragover', function (e) {
          return e.preventDefault();
        }, true);
      }
    }]);
    return DragNDrop;
  }(_module.default);

  _exports.default = DragNDrop;
  DragNDrop.displayName = "DragNDrop";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/events.ts":
/*!******************************************!*\
  !*** ./src/components/modules/events.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../__module */ "./src/components/__module.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);

  /**
   * @module eventDispatcher
   *
   * Has two important methods:
   *    - {Function} on - appends subscriber to the event. If event doesn't exist - creates new one
   *    - {Function} emit - fires all subscribers with data
   *    - {Function off - unsubsribes callback
   *
   * @version 1.0.0
   *
   * @typedef {Events} Events
   * @property {Object} subscribers - all subscribers grouped by event name
   */
  var Events =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(Events, _Module);

    function Events() {
      var _this;

      (0, _classCallCheck2.default)(this, Events);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Events).apply(this, arguments));
      /**
       * Object with events` names as key and array of callback functions as value
       * @type {{}}
       */

      _this.subscribers = {};
      return _this;
    }
    /**
     * Subscribe any event on callback
     *
     * @param {String} eventName - event name
     * @param {Function} callback - subscriber
     */


    (0, _createClass2.default)(Events, [{
      key: "on",
      value: function on(eventName, callback) {
        if (!(eventName in this.subscribers)) {
          this.subscribers[eventName] = [];
        } // group by events


        this.subscribers[eventName].push(callback);
      }
      /**
       * Emit callbacks with passed data
       *
       * @param {String} eventName - event name
       * @param {Object} data - subscribers get this data when they were fired
       */

    }, {
      key: "emit",
      value: function emit(eventName, data) {
        if (!this.subscribers[eventName]) {
          return;
        }

        this.subscribers[eventName].reduce(function (previousData, currentHandler) {
          var newData = currentHandler(previousData);
          return newData ? newData : previousData;
        }, data);
      }
      /**
       * Unsubsribe callback from event
       *
       * @param eventName
       * @param callback
       */

    }, {
      key: "off",
      value: function off(eventName, callback) {
        for (var i = 0; i < this.subscribers[eventName].length; i++) {
          if (this.subscribers[eventName][i] === callback) {
            delete this.subscribers[eventName][i];
            break;
          }
        }
      }
      /**
       * Destroyer
       * clears subsribers list
       */

    }, {
      key: "destroy",
      value: function destroy() {
        this.subscribers = null;
      }
    }]);
    return Events;
  }(_module.default);

  _exports.default = Events;
  Events.displayName = "Events";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/listeners.ts":
/*!*********************************************!*\
  !*** ./src/components/modules/listeners.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../__module */ "./src/components/__module.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);

  /**
   * Codex Editor Listeners module
   *
   * @module Listeners
   *
   * Module-decorator for event listeners assignment
   *
   * @author Codex Team
   * @version 2.0.0
   */

  /**
   * @typedef {Listeners} Listeners
   * @property {Array} allListeners
   */
  var Listeners =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(Listeners, _Module);

    function Listeners() {
      var _this;

      (0, _classCallCheck2.default)(this, Listeners);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Listeners).apply(this, arguments));
      /**
       * Stores all listeners data to find/remove/process it
       * @type {ListenerData[]}
       */

      _this.allListeners = [];
      return _this;
    }
    /**
     * Assigns event listener on element
     *
     * @param {EventTarget} element - DOM element that needs to be listened
     * @param {String} eventType - event type
     * @param {Function} handler - method that will be fired on event
     * @param {Boolean} useCapture - use event bubbling
     */


    (0, _createClass2.default)(Listeners, [{
      key: "on",
      value: function on(element, eventType, handler) {
        var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var assignedEventData = {
          element: element,
          eventType: eventType,
          handler: handler,
          useCapture: useCapture
        };
        var alreadyExist = this.findOne(element, eventType, handler);

        if (alreadyExist) {
          return;
        }

        this.allListeners.push(assignedEventData);
        element.addEventListener(eventType, handler, useCapture);
      }
      /**
       * Removes event listener from element
       *
       * @param {EventTarget} element - DOM element that we removing listener
       * @param {String} eventType - event type
       * @param {Function} handler - remove handler, if element listens several handlers on the same event type
       * @param {Boolean} useCapture - use event bubbling
       */

    }, {
      key: "off",
      value: function off(element, eventType, handler) {
        var _this2 = this;

        var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var existingListeners = this.findAll(element, eventType, handler);
        existingListeners.forEach(function (listener, i) {
          var index = _this2.allListeners.indexOf(existingListeners[i]);

          if (index > 0) {
            _this2.allListeners.splice(index, 1);
          }
        });
        element.removeEventListener(eventType, handler, useCapture);
      }
      /**
       * @param {EventTarget} element
       * @param {String} eventType
       * @param {Function} handler
       * @return {EventTarget|null}
       */

    }, {
      key: "findOne",
      value: function findOne(element, eventType, handler) {
        var foundListeners = this.findAll(element, eventType, handler);
        return foundListeners.length > 0 ? foundListeners[0] : null;
      }
      /**
       * @param {EventTarget} element
       * @param {String} eventType
       * @param {Function} handler
       * @return {Array}
       */

    }, {
      key: "findAll",
      value: function findAll(element, eventType, handler) {
        var found;
        var foundByEventTargets = element ? this.findByEventTarget(element) : [];

        if (element && eventType && handler) {
          found = foundByEventTargets.filter(function (event) {
            return event.eventType === eventType && event.handler === handler;
          });
        } else if (element && eventType) {
          found = foundByEventTargets.filter(function (event) {
            return event.eventType === eventType;
          });
        } else {
          found = foundByEventTargets;
        }

        return found;
      }
      /**
       * Removes all listeners
       */

    }, {
      key: "removeAll",
      value: function removeAll() {
        this.allListeners.map(function (current) {
          current.element.removeEventListener(current.eventType, current.handler);
        });
        this.allListeners = [];
      }
      /**
       * Search method: looks for listener by passed element
       * @param {EventTarget} element - searching element
       * @returns {Array} listeners that found on element
       */

    }, {
      key: "findByEventTarget",
      value: function findByEventTarget(element) {
        return this.allListeners.filter(function (listener) {
          if (listener.element === element) {
            return listener;
          }
        });
      }
      /**
       * Search method: looks for listener by passed event type
       * @param {String} eventType
       * @return {Array} listeners that found on element
       */

    }, {
      key: "findByType",
      value: function findByType(eventType) {
        return this.allListeners.filter(function (listener) {
          if (listener.eventType === eventType) {
            return listener;
          }
        });
      }
      /**
       * Search method: looks for listener by passed handler
       * @param {Function} handler
       * @return {Array} listeners that found on element
       */

    }, {
      key: "findByHandler",
      value: function findByHandler(handler) {
        return this.allListeners.filter(function (listener) {
          if (listener.handler === handler) {
            return listener;
          }
        });
      }
    }]);
    return Listeners;
  }(_module.default);

  _exports.default = Listeners;
  Listeners.displayName = "Listeners";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/modificationsObserver.ts":
/*!*********************************************************!*\
  !*** ./src/components/modules/modificationsObserver.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"), __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../__module */ "./src/components/__module.ts"), __webpack_require__(/*! ../utils */ "./src/components/utils.ts"), __webpack_require__(/*! ../block */ "./src/components/block.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _regenerator, _asyncToGenerator2, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module, _utils, _block) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);
  _utils = _interopRequireDefault(_utils);
  _block = _interopRequireDefault(_block);

  /**
   * @module ModificationsObserver
   *
   * Handles any mutations
   * and gives opportunity to handle outside
   */
  var ModificationsObserver =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(ModificationsObserver, _Module);

    function ModificationsObserver() {
      var _this;

      (0, _classCallCheck2.default)(this, ModificationsObserver);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ModificationsObserver).apply(this, arguments));
      /**
       * Used to prevent several mutation callback execution
       * @type {Function}
       */

      _this.mutationDebouncer = _utils.default.debounce(function () {
        _this.config.onChange();
      }, ModificationsObserver.DebounceTimer);
      return _this;
    }
    /**
     * Clear timeout and set null to mutationDebouncer property
     */


    (0, _createClass2.default)(ModificationsObserver, [{
      key: "destroy",
      value: function destroy() {
        this.mutationDebouncer = null;
        this.observer.disconnect();
        this.observer = null;
      }
      /**
       * Preparation method
       * @return {Promise<void>}
       */

    }, {
      key: "prepare",
      value: function () {
        var _prepare = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          var _this2 = this;

          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  /**
                   * wait till Browser render Editor's Blocks
                   */
                  window.setTimeout(function () {
                    _this2.setObserver();
                  }, 1000);

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function prepare() {
          return _prepare.apply(this, arguments);
        };
      }()
      /**
       * Allows to disable observer,
       * for example when Editor wants to stealthy mutate DOM
       */

    }, {
      key: "disable",
      value: function disable() {
        this.disabled = true;
      }
      /**
       * Enables mutation handling
       * Should be called after .disable()
       */

    }, {
      key: "enable",
      value: function enable() {
        this.disabled = false;
      }
      /**
       * setObserver
       *
       * sets 'DOMSubtreeModified' listener on Editor's UI.nodes.redactor
       * so that User can handle outside from API
       */

    }, {
      key: "setObserver",
      value: function setObserver() {
        var _this3 = this;

        var UI = this.Editor.UI;
        var observerOptions = {
          childList: true,
          attributes: true,
          subtree: true,
          characterData: true,
          characterDataOldValue: true
        };
        this.observer = new MutationObserver(function (mutationList, observer) {
          _this3.mutationHandler(mutationList, observer);
        });
        this.observer.observe(UI.nodes.redactor, observerOptions);
      }
      /**
       * MutationObserver events handler
       * @param mutationList
       * @param observer
       */

    }, {
      key: "mutationHandler",
      value: function mutationHandler(mutationList, observer) {
        /**
         * Skip mutations in stealth mode
         */
        if (this.disabled) {
          return;
        }
        /**
         * We divide two Mutation types:
         * 1) mutations that concerns client changes: settings changes, symbol added, deletion, insertions and so on
         * 2) functional changes. On each client actions we set functional identifiers to interact with user
         */


        var contentMutated = false;
        mutationList.forEach(function (mutation) {
          switch (mutation.type) {
            case 'childList':
            case 'subtree':
            case 'characterData':
            case 'characterDataOldValue':
              contentMutated = true;
              break;

            case 'attributes':
              var mutatedTarget = mutation.target;
              /**
               * Changes on Element.ce-block usually is functional
               */

              if (!mutatedTarget.classList.contains(_block.default.CSS.wrapper)) {
                contentMutated = true;
                return;
              }

              break;
          }
        });
        /** call once */

        if (contentMutated) {
          this.mutationDebouncer();
        }
      }
    }]);
    return ModificationsObserver;
  }(_module.default);
  /**
   * Debounce Timer
   * @type {number}
   */


  _exports.default = ModificationsObserver;
  ModificationsObserver.displayName = "ModificationsObserver";
  ModificationsObserver.DebounceTimer = 450;
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/notifier.ts":
/*!********************************************!*\
  !*** ./src/components/modules/notifier.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../__module */ "./src/components/__module.ts"), __webpack_require__(/*! codex-notifier */ "./node_modules/codex-notifier/dist/bundle.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module, _codexNotifier) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);
  _codexNotifier = _interopRequireDefault(_codexNotifier);

  /**
   * Use external package module for notifications
   *
   * @see https://github.com/codex-team/js-notifier
   */

  /**
   * Notifier module
   */
  var Notifier =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(Notifier, _Module);

    function Notifier() {
      (0, _classCallCheck2.default)(this, Notifier);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Notifier).apply(this, arguments));
    }

    (0, _createClass2.default)(Notifier, [{
      key: "show",

      /**
       * Show web notification
       *
       * @param {NotifierOptions | ConfirmNotifierOptions | PromptNotifierOptions} options
       */
      value: function show(options) {
        _codexNotifier.default.show(options);
      }
    }]);
    return Notifier;
  }(_module.default);

  _exports.default = Notifier;
  Notifier.displayName = "Notifier";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/paste.ts":
/*!*****************************************!*\
  !*** ./src/components/modules/paste.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"), __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"), __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"), __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ./caret */ "./src/components/modules/caret.ts"), __webpack_require__(/*! ../__module */ "./src/components/__module.ts"), __webpack_require__(/*! ../dom */ "./src/components/dom.ts"), __webpack_require__(/*! ../utils */ "./src/components/utils.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _toConsumableArray2, _regenerator, _asyncToGenerator2, _slicedToArray2, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _caret, _module, _dom, _utils) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _toConsumableArray2 = _interopRequireDefault(_toConsumableArray2);
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _caret = _interopRequireDefault(_caret);
  _module = _interopRequireDefault(_module);
  _dom = _interopRequireDefault(_dom);
  _utils = _interopRequireDefault(_utils);

  /**
   * @class Paste
   * @classdesc Contains methods to handle paste on editor
   *
   * @module Paste
   *
   * @version 2.0.0
   */
  var Paste =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(Paste, _Module);

    function Paste() {
      var _this;

      (0, _classCallCheck2.default)(this, Paste);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Paste).apply(this, arguments));
      /**
       * Tags` substitutions parameters
       */

      _this.toolsTags = {};
      /**
       * Store tags to substitute by tool name
       */

      _this.tagsByTool = {};
      /** Patterns` substitutions parameters */

      _this.toolsPatterns = [];
      /** Files` substitutions parameters */

      _this.toolsFiles = {};
      /**
       * Process paste config for each tool
       *
       * @param {string} name
       * @param {Tool} tool
       */

      _this.processTool = function (_ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
            name = _ref2[0],
            tool = _ref2[1];

        try {
          var toolInstance = new _this.Editor.Tools.blockTools[name]({
            api: _this.Editor.API.methods,
            config: {},
            data: {}
          });

          if (!toolInstance.onPaste || typeof toolInstance.onPaste !== 'function') {
            return;
          }

          var toolPasteConfig = tool.pasteConfig || {};

          _this.getTagsConfig(name, toolPasteConfig);

          _this.getFilesConfig(name, toolPasteConfig);

          _this.getPatternsConfig(name, toolPasteConfig);
        } catch (e) {
          _utils.default.log("Paste handling for \xAB".concat(name, "\xBB Tool hasn't been set up because of the error"), 'warn', e);
        }
      };
      /**
       * Check if Editor should process pasted data and pass data transfer object to handler
       *
       * @param {ClipboardEvent} event
       */


      _this.handlePasteEvent =
      /*#__PURE__*/
      function () {
        var _ref3 = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(event) {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(_this.isNativeBehaviour(event.target) && !event.clipboardData.types.includes('Files'))) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  event.preventDefault();

                  _this.processDataTransfer(event.clipboardData);

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }();

      return _this;
    }
    /**
     * Set onPaste callback and collect tools` paste configurations
     *
     * @public
     */


    (0, _createClass2.default)(Paste, [{
      key: "prepare",
      value: function () {
        var _prepare = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2() {
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  this.setCallback();
                  this.processTools();

                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function prepare() {
          return _prepare.apply(this, arguments);
        };
      }()
      /**
       * Handle pasted or dropped data transfer object
       *
       * @param {DataTransfer} dataTransfer - pasted or dropped data transfer object
       * @param {boolean} isDragNDrop
       */

    }, {
      key: "processDataTransfer",
      value: function () {
        var _processDataTransfer = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee3(dataTransfer) {
          var isDragNDrop,
              Sanitizer,
              plainData,
              htmlData,
              toolsTags,
              customConfig,
              cleanData,
              _args3 = arguments;
          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  isDragNDrop = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : false;
                  Sanitizer = this.Editor.Sanitizer;

                  if (!dataTransfer.types.includes('Files')) {
                    _context3.next = 6;
                    break;
                  }

                  _context3.next = 5;
                  return this.processFiles(dataTransfer.files);

                case 5:
                  return _context3.abrupt("return");

                case 6:
                  plainData = dataTransfer.getData('text/plain');
                  htmlData = dataTransfer.getData('text/html');
                  /**
                   *  If text was drag'n'dropped, wrap content with P tag to insert it as the new Block
                   */

                  if (isDragNDrop && plainData.trim() && htmlData.trim()) {
                    htmlData = '<p>' + (htmlData.trim() ? htmlData : plainData) + '</p>';
                  }
                  /** Add all tags that can be substituted to sanitizer configuration */


                  toolsTags = Object.keys(this.toolsTags).reduce(function (result, tag) {
                    result[tag.toLowerCase()] = true;
                    return result;
                  }, {});
                  customConfig = Object.assign({}, toolsTags, Sanitizer.getAllInlineToolsConfig(), {
                    br: {}
                  });
                  cleanData = Sanitizer.clean(htmlData, customConfig);
                  /** If there is no HTML or HTML string is equal to plain one, process it as plain text */

                  if (!(!cleanData.trim() || cleanData.trim() === plainData || !_dom.default.isHTMLString(cleanData))) {
                    _context3.next = 17;
                    break;
                  }

                  _context3.next = 15;
                  return this.processText(plainData);

                case 15:
                  _context3.next = 19;
                  break;

                case 17:
                  _context3.next = 19;
                  return this.processText(cleanData, true);

                case 19:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        return function processDataTransfer(_x2) {
          return _processDataTransfer.apply(this, arguments);
        };
      }()
      /**
       * Set onPaste callback handler
       */

    }, {
      key: "setCallback",
      value: function setCallback() {
        var _this$Editor = this.Editor,
            Listeners = _this$Editor.Listeners,
            UI = _this$Editor.UI;
        Listeners.on(UI.nodes.redactor, 'paste', this.handlePasteEvent);
      }
      /**
       * Get and process tool`s paste configs
       */

    }, {
      key: "processTools",
      value: function processTools() {
        var tools = this.Editor.Tools.blockTools;
        Object.entries(tools).forEach(this.processTool);
      }
      /**
       * Get tags to substitute by Tool
       *
       * @param {string} name - Tool name
       * @param {PasteConfig} toolPasteConfig - Tool onPaste configuration
       */

    }, {
      key: "getTagsConfig",
      value: function getTagsConfig(name, toolPasteConfig) {
        var _this2 = this;

        var tags = toolPasteConfig.tags || [];
        tags.forEach(function (tag) {
          if (_this2.toolsTags.hasOwnProperty(tag)) {
            _utils.default.log("Paste handler for \xAB".concat(name, "\xBB Tool on \xAB").concat(tag, "\xBB tag is skipped ") + "because it is already used by \xAB".concat(_this2.toolsTags[tag].tool, "\xBB Tool."), 'warn');

            return;
          }

          _this2.toolsTags[tag.toUpperCase()] = {
            tool: name
          };
        });
        this.tagsByTool[name] = tags.map(function (t) {
          return t.toUpperCase();
        });
      }
      /**
       * Get files` types and extensions to substitute by Tool
       *
       * @param {string} name - Tool name
       * @param {PasteConfig} toolPasteConfig - Tool onPaste configuration
       */

    }, {
      key: "getFilesConfig",
      value: function getFilesConfig(name, toolPasteConfig) {
        var _toolPasteConfig$file = toolPasteConfig.files,
            files = _toolPasteConfig$file === void 0 ? {} : _toolPasteConfig$file;
        var extensions = files.extensions,
            mimeTypes = files.mimeTypes;

        if (!extensions && !mimeTypes) {
          return;
        }

        if (extensions && !Array.isArray(extensions)) {
          _utils.default.log("\xABextensions\xBB property of the onDrop config for \xAB".concat(name, "\xBB Tool should be an array"));

          extensions = [];
        }

        if (mimeTypes && !Array.isArray(mimeTypes)) {
          _utils.default.log("\xABmimeTypes\xBB property of the onDrop config for \xAB".concat(name, "\xBB Tool should be an array"));

          mimeTypes = [];
        }

        if (mimeTypes) {
          mimeTypes = mimeTypes.filter(function (type) {
            if (!_utils.default.isValidMimeType(type)) {
              _utils.default.log("MIME type value \xAB".concat(type, "\xBB for the \xAB").concat(name, "\xBB Tool is not a valid MIME type"), 'warn');

              return false;
            }

            return true;
          });
        }

        this.toolsFiles[name] = {
          extensions: extensions || [],
          mimeTypes: mimeTypes || []
        };
      }
      /**
       * Get RegExp patterns to substitute by Tool
       *
       * @param {string} name - Tool name
       * @param {PasteConfig} toolPasteConfig - Tool onPaste configuration
       */

    }, {
      key: "getPatternsConfig",
      value: function getPatternsConfig(name, toolPasteConfig) {
        var _this3 = this;

        if (!toolPasteConfig.patterns || _utils.default.isEmpty(toolPasteConfig.patterns)) {
          return;
        }

        Object.entries(toolPasteConfig.patterns).forEach(function (_ref4) {
          var _ref5 = (0, _slicedToArray2.default)(_ref4, 2),
              key = _ref5[0],
              pattern = _ref5[1];

          /** Still need to validate pattern as it provided by user */
          if (!(pattern instanceof RegExp)) {
            _utils.default.log("Pattern ".concat(pattern, " for \xAB").concat(name, "\xBB Tool is skipped because it should be a Regexp instance."), 'warn');
          }

          _this3.toolsPatterns.push({
            key: key,
            pattern: pattern,
            tool: name
          });
        });
      }
      /**
       * Check if browser behavior suits better
       *
       * @param {EventTarget} element - element where content has been pasted
       * @returns {boolean}
       */

    }, {
      key: "isNativeBehaviour",
      value: function isNativeBehaviour(element) {
        var BlockManager = this.Editor.BlockManager;

        if (_dom.default.isNativeInput(element)) {
          return true;
        }

        var block = BlockManager.getBlock(element);
        return !block;
      }
      /**
       * Get files from data transfer object and insert related Tools
       *
       * @param {FileList} items - pasted or dropped items
       */

    }, {
      key: "processFiles",
      value: function () {
        var _processFiles = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee4(items) {
          var _this4 = this;

          var BlockManager, dataToInsert;
          return _regenerator.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  BlockManager = this.Editor.BlockManager;
                  _context4.next = 3;
                  return Promise.all(Array.from(items).map(function (item) {
                    return _this4.processFile(item);
                  }));

                case 3:
                  dataToInsert = _context4.sent;
                  dataToInsert = dataToInsert.filter(function (data) {
                    return !!data;
                  });
                  dataToInsert.forEach(function (data, i) {
                    if (i === 0 && BlockManager.currentBlock && BlockManager.currentBlock.isEmpty) {
                      BlockManager.paste(data.type, data.event, true);
                      return;
                    }

                    BlockManager.paste(data.type, data.event);
                  });

                case 6:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        return function processFiles(_x3) {
          return _processFiles.apply(this, arguments);
        };
      }()
      /**
       * Get information about file and find Tool to handle it
       *
       * @param {File} file
       */

    }, {
      key: "processFile",
      value: function () {
        var _processFile = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee5(file) {
          var extension, foundConfig, _foundConfig, tool, pasteEvent;

          return _regenerator.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  extension = _utils.default.getFileExtension(file);
                  foundConfig = Object.entries(this.toolsFiles).find(function (_ref6) {
                    var _ref7 = (0, _slicedToArray2.default)(_ref6, 2),
                        toolName = _ref7[0],
                        _ref7$ = _ref7[1],
                        mimeTypes = _ref7$.mimeTypes,
                        extensions = _ref7$.extensions;

                    var _file$type$split = file.type.split('/'),
                        _file$type$split2 = (0, _slicedToArray2.default)(_file$type$split, 2),
                        fileType = _file$type$split2[0],
                        fileSubtype = _file$type$split2[1];

                    var foundExt = extensions.find(function (ext) {
                      return ext.toLowerCase() === extension.toLowerCase();
                    });
                    var foundMimeType = mimeTypes.find(function (mime) {
                      var _mime$split = mime.split('/'),
                          _mime$split2 = (0, _slicedToArray2.default)(_mime$split, 2),
                          type = _mime$split2[0],
                          subtype = _mime$split2[1];

                      return type === fileType && (subtype === fileSubtype || subtype === '*');
                    });
                    return !!foundExt || !!foundMimeType;
                  });

                  if (foundConfig) {
                    _context5.next = 4;
                    break;
                  }

                  return _context5.abrupt("return");

                case 4:
                  _foundConfig = (0, _slicedToArray2.default)(foundConfig, 1), tool = _foundConfig[0];
                  pasteEvent = this.composePasteEvent('file', {
                    file: file
                  });
                  return _context5.abrupt("return", {
                    event: pasteEvent,
                    type: tool
                  });

                case 7:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        return function processFile(_x4) {
          return _processFile.apply(this, arguments);
        };
      }()
      /**
       * Process pasted text and divide them into Blocks
       *
       * @param {string} data - text to process. Can be HTML or plain.
       * @param {boolean} isHTML - if passed string is HTML, this parameter should be true
       */

    }, {
      key: "processText",
      value: function () {
        var _processText = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee7(data) {
          var _this5 = this;

          var isHTML,
              _this$Editor2,
              Caret,
              BlockManager,
              Tools,
              dataToInsert,
              isCurrentBlockInitial,
              needToReplaceCurrentBlock,
              _args7 = arguments;

          return _regenerator.default.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  isHTML = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : false;
                  _this$Editor2 = this.Editor, Caret = _this$Editor2.Caret, BlockManager = _this$Editor2.BlockManager, Tools = _this$Editor2.Tools;
                  dataToInsert = isHTML ? this.processHTML(data) : this.processPlain(data);

                  if (dataToInsert.length) {
                    _context7.next = 5;
                    break;
                  }

                  return _context7.abrupt("return");

                case 5:
                  if (!(dataToInsert.length === 1)) {
                    _context7.next = 8;
                    break;
                  }

                  if (!dataToInsert[0].isBlock) {
                    this.processInlinePaste(dataToInsert.pop());
                  } else {
                    this.processSingleBlock(dataToInsert.pop());
                  }

                  return _context7.abrupt("return");

                case 8:
                  isCurrentBlockInitial = Tools.isInitial(BlockManager.currentBlock.tool);
                  needToReplaceCurrentBlock = isCurrentBlockInitial && BlockManager.currentBlock.isEmpty;
                  _context7.next = 12;
                  return Promise.all(dataToInsert.map(
                  /*#__PURE__*/
                  function () {
                    var _ref8 = (0, _asyncToGenerator2.default)(
                    /*#__PURE__*/
                    _regenerator.default.mark(function _callee6(content, i) {
                      return _regenerator.default.wrap(function _callee6$(_context6) {
                        while (1) {
                          switch (_context6.prev = _context6.next) {
                            case 0:
                              _context6.next = 2;
                              return _this5.insertBlock(content, i === 0 && needToReplaceCurrentBlock);

                            case 2:
                              return _context6.abrupt("return", _context6.sent);

                            case 3:
                            case "end":
                              return _context6.stop();
                          }
                        }
                      }, _callee6, this);
                    }));

                    return function (_x6, _x7) {
                      return _ref8.apply(this, arguments);
                    };
                  }()));

                case 12:
                  Caret.setToBlock(BlockManager.currentBlock, _caret.default.positions.END);

                case 13:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        return function processText(_x5) {
          return _processText.apply(this, arguments);
        };
      }()
      /**
       * Split HTML string to blocks and return it as array of Block data
       *
       * @param {string} innerHTML
       * @returns {PasteData[]}
       */

    }, {
      key: "processHTML",
      value: function processHTML(innerHTML) {
        var _this6 = this;

        var _this$Editor3 = this.Editor,
            Tools = _this$Editor3.Tools,
            Sanitizer = _this$Editor3.Sanitizer;
        var initialTool = this.config.initialBlock;

        var wrapper = _dom.default.make('DIV');

        wrapper.innerHTML = innerHTML;
        var nodes = this.getNodes(wrapper);
        return nodes.map(function (node) {
          var content,
              tool = initialTool,
              isBlock = false;

          switch (node.nodeType) {
            /** If node is a document fragment, use temp wrapper to get innerHTML */
            case Node.DOCUMENT_FRAGMENT_NODE:
              content = _dom.default.make('div');
              content.appendChild(node);
              break;

            /** If node is an element, then there might be a substitution */

            case Node.ELEMENT_NODE:
              content = node;
              isBlock = true;

              if (_this6.toolsTags[content.tagName]) {
                tool = _this6.toolsTags[content.tagName].tool;
              }

              break;
          }

          var tags = Tools.blockTools[tool].pasteConfig.tags;
          var toolTags = tags.reduce(function (result, tag) {
            result[tag.toLowerCase()] = {};
            return result;
          }, {});
          var customConfig = Object.assign({}, toolTags, Sanitizer.getInlineToolsConfig(tool));
          content.innerHTML = Sanitizer.clean(content.innerHTML, customConfig);

          var event = _this6.composePasteEvent('tag', {
            data: content
          });

          return {
            content: content,
            isBlock: isBlock,
            tool: tool,
            event: event
          };
        }).filter(function (data) {
          return !_dom.default.isNodeEmpty(data.content) || _dom.default.isSingleTag(data.content);
        });
      }
      /**
       * Split plain text by new line symbols and return it as array of Block data
       *
       * @param {string} plain
       * @returns {PasteData[]}
       */

    }, {
      key: "processPlain",
      value: function processPlain(plain) {
        var _this7 = this;

        var initialBlock = this.config.initialBlock,
            Tools = this.Editor.Tools;

        if (!plain) {
          return [];
        }

        var tool = initialBlock;
        return plain.split(/\r?\n/).filter(function (text) {
          return text.trim();
        }).map(function (text) {
          var content = _dom.default.make('div');

          content.innerHTML = text;

          var event = _this7.composePasteEvent('tag', {
            data: content
          });

          return {
            content: content,
            tool: tool,
            isBlock: false,
            event: event
          };
        });
      }
      /**
       * Process paste of single Block tool content
       *
       * @param {PasteData} dataToInsert
       */

    }, {
      key: "processSingleBlock",
      value: function () {
        var _processSingleBlock = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee8(dataToInsert) {
          var _this$Editor4, Caret, BlockManager, Tools, currentBlock;

          return _regenerator.default.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _this$Editor4 = this.Editor, Caret = _this$Editor4.Caret, BlockManager = _this$Editor4.BlockManager, Tools = _this$Editor4.Tools;
                  currentBlock = BlockManager.currentBlock;
                  /**
                   * If pasted tool isn`t equal current Block or if pasted content contains block elements, insert it as new Block
                   */

                  if (!(dataToInsert.tool !== currentBlock.name || !_dom.default.containsOnlyInlineElements(dataToInsert.content.innerHTML))) {
                    _context8.next = 5;
                    break;
                  }

                  this.insertBlock(dataToInsert, Tools.isInitial(currentBlock.tool) && currentBlock.isEmpty);
                  return _context8.abrupt("return");

                case 5:
                  Caret.insertContentAtCaretPosition(dataToInsert.content.innerHTML);

                case 6:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        return function processSingleBlock(_x8) {
          return _processSingleBlock.apply(this, arguments);
        };
      }()
      /**
       * Process paste to single Block:
       * 1. Find patterns` matches
       * 2. Insert new block if it is not the same type as current one
       * 3. Just insert text if there is no substitutions
       *
       * @param {PasteData} dataToInsert
       */

    }, {
      key: "processInlinePaste",
      value: function () {
        var _processInlinePaste = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee9(dataToInsert) {
          var initialTool, _this$Editor5, BlockManager, Caret, Sanitizer, Tools, content, tool, blockData, insertedBlock, needToReplaceCurrentBlock, currentToolSanitizeConfig;

          return _regenerator.default.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  initialTool = this.config.initialBlock, _this$Editor5 = this.Editor, BlockManager = _this$Editor5.BlockManager, Caret = _this$Editor5.Caret, Sanitizer = _this$Editor5.Sanitizer, Tools = _this$Editor5.Tools, content = dataToInsert.content, tool = dataToInsert.tool;

                  if (!(tool === initialTool && content.textContent.length < Paste.PATTERN_PROCESSING_MAX_LENGTH)) {
                    _context9.next = 10;
                    break;
                  }

                  _context9.next = 4;
                  return this.processPattern(content.textContent);

                case 4:
                  blockData = _context9.sent;

                  if (!blockData) {
                    _context9.next = 10;
                    break;
                  }

                  needToReplaceCurrentBlock = BlockManager.currentBlock && Tools.isInitial(BlockManager.currentBlock.tool) && BlockManager.currentBlock.isEmpty;
                  insertedBlock = BlockManager.paste(blockData.tool, blockData.event, needToReplaceCurrentBlock);
                  Caret.setToBlock(insertedBlock, _caret.default.positions.END);
                  return _context9.abrupt("return");

                case 10:
                  currentToolSanitizeConfig = Sanitizer.getInlineToolsConfig(BlockManager.currentBlock.name);
                  /** If there is no pattern substitute - insert string as it is */

                  document.execCommand('insertHTML', false, Sanitizer.clean(content.innerHTML, currentToolSanitizeConfig));

                case 12:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9, this);
        }));

        return function processInlinePaste(_x9) {
          return _processInlinePaste.apply(this, arguments);
        };
      }()
      /**
       * Get patterns` matches
       *
       * @param {string} text
       * @returns Promise<{data: BlockToolData, tool: string}>
       */

    }, {
      key: "processPattern",
      value: function () {
        var _processPattern = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee10(text) {
          var pattern, event;
          return _regenerator.default.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  pattern = this.toolsPatterns.find(function (substitute) {
                    var execResult = substitute.pattern.exec(text);

                    if (!execResult) {
                      return false;
                    }

                    return text === execResult.shift();
                  });

                  if (pattern) {
                    _context10.next = 3;
                    break;
                  }

                  return _context10.abrupt("return");

                case 3:
                  event = this.composePasteEvent('pattern', {
                    key: pattern.key,
                    data: text
                  });
                  return _context10.abrupt("return", {
                    event: event,
                    tool: pattern.tool
                  });

                case 5:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }));

        return function processPattern(_x10) {
          return _processPattern.apply(this, arguments);
        };
      }()
      /**
       *
       * @param {PasteData} data
       * @param {Boolean} canReplaceCurrentBlock - if true and is current Block is empty, will replace current Block
       * @returns {Promise<void>}
       */

    }, {
      key: "insertBlock",
      value: function () {
        var _insertBlock = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee11(data) {
          var canReplaceCurrentBlock,
              _this$Editor6,
              BlockManager,
              Caret,
              currentBlock,
              block,
              _args11 = arguments;

          return _regenerator.default.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  canReplaceCurrentBlock = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : false;
                  _this$Editor6 = this.Editor, BlockManager = _this$Editor6.BlockManager, Caret = _this$Editor6.Caret;
                  currentBlock = BlockManager.currentBlock;

                  if (!(canReplaceCurrentBlock && currentBlock && currentBlock.isEmpty)) {
                    _context11.next = 7;
                    break;
                  }

                  block = BlockManager.paste(data.tool, data.event, true);
                  Caret.setToBlock(block, _caret.default.positions.END);
                  return _context11.abrupt("return");

                case 7:
                  block = BlockManager.paste(data.tool, data.event);
                  Caret.setToBlock(block, _caret.default.positions.END);

                case 9:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, this);
        }));

        return function insertBlock(_x11) {
          return _insertBlock.apply(this, arguments);
        };
      }()
      /**
       * Recursively divide HTML string to two types of nodes:
       * 1. Block element
       * 2. Document Fragments contained text and markup tags like a, b, i etc.
       *
       * @param {Node} wrapper
       * @returns {Node[]}
       */

    }, {
      key: "getNodes",
      value: function getNodes(wrapper) {
        var _this8 = this;

        var children = Array.from(wrapper.childNodes),
            tags = Object.keys(this.toolsTags);

        var reducer = function reducer(nodes, node) {
          if (_dom.default.isEmpty(node) && !_dom.default.isSingleTag(node)) {
            return nodes;
          }

          var lastNode = nodes[nodes.length - 1];
          var destNode = new DocumentFragment();

          if (lastNode && _dom.default.isFragment(lastNode)) {
            destNode = nodes.pop();
          }

          switch (node.nodeType) {
            /**
             * If node is HTML element:
             * 1. Check if it is inline element
             * 2. Check if it contains another block or substitutable elements
             */
            case Node.ELEMENT_NODE:
              var element = node;

              if (element.tagName === 'BR') {
                return (0, _toConsumableArray2.default)(nodes).concat([destNode, new DocumentFragment()]);
              }

              var _ref9 = _this8.toolsTags[element.tagName] || {},
                  _ref9$tool = _ref9.tool,
                  tool = _ref9$tool === void 0 ? '' : _ref9$tool;

              var toolTags = _this8.tagsByTool[tool] || [];
              var isSubstitutable = tags.includes(element.tagName);

              var isBlockElement = _dom.default.blockElements.includes(element.tagName.toLowerCase());

              var containsAnotherToolTags = Array.from(element.children).some(function (_ref10) {
                var tagName = _ref10.tagName;
                return tags.includes(tagName) && !toolTags.includes(tagName);
              });
              var containsBlockElements = Array.from(element.children).some(function (_ref11) {
                var tagName = _ref11.tagName;
                return _dom.default.blockElements.includes(tagName.toLowerCase());
              });
              /** Append inline elements to previous fragment */

              if (!isBlockElement && !isSubstitutable && !containsAnotherToolTags) {
                destNode.appendChild(element);
                return (0, _toConsumableArray2.default)(nodes).concat([destNode]);
              }

              if (isSubstitutable && !containsAnotherToolTags || isBlockElement && !containsBlockElements && !containsAnotherToolTags) {
                return (0, _toConsumableArray2.default)(nodes).concat([destNode, element]);
              }

              break;

            /**
             * If node is text node, wrap it with DocumentFragment
             */

            case Node.TEXT_NODE:
              destNode.appendChild(node);
              return (0, _toConsumableArray2.default)(nodes).concat([destNode]);

            default:
              return (0, _toConsumableArray2.default)(nodes).concat([destNode]);
          }

          return (0, _toConsumableArray2.default)(nodes).concat((0, _toConsumableArray2.default)(Array.from(node.childNodes).reduce(reducer, [])));
        };

        return children.reduce(reducer, []);
      }
      /**
       * Compose paste event with passed type and detail
       *
       * @param {string} type
       * @param {PasteEventDetail} detail
       */

    }, {
      key: "composePasteEvent",
      value: function composePasteEvent(type, detail) {
        return new CustomEvent(type, {
          detail: detail
        });
      }
    }]);
    return Paste;
  }(_module.default);
  /** If string`s length is greater than this number we don't check paste patterns */


  _exports.default = Paste;
  Paste.displayName = "Paste";
  Paste.PATTERN_PROCESSING_MAX_LENGTH = 450;
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/renderer.ts":
/*!********************************************!*\
  !*** ./src/components/modules/renderer.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"), __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../__module */ "./src/components/__module.ts"), __webpack_require__(/*! ../utils */ "./src/components/utils.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _regenerator, _asyncToGenerator2, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module, _utils) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);
  _utils = _interopRequireDefault(_utils);

  /**
   * Codex Editor Renderer Module
   *
   * @module Renderer
   * @author CodeX Team
   *
   * @version 2.0.0
   */
  var Renderer =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(Renderer, _Module);

    function Renderer() {
      (0, _classCallCheck2.default)(this, Renderer);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Renderer).apply(this, arguments));
    }

    (0, _createClass2.default)(Renderer, [{
      key: "render",

      /**
       * @typedef {Object} RendererBlocks
       * @property {String} type - tool name
       * @property {Object} data - tool data
       */

      /**
       * @example
       *
       * blocks: [
       *   {
       *     type : 'paragraph',
       *     data : {
       *       text : 'Hello from Codex!'
       *     }
       *   },
       *   {
       *     type : 'paragraph',
       *     data : {
       *       text : 'Leave feedback if you like it!'
       *     }
       *   },
       * ]
       *
       */

      /**
       * Make plugin blocks from array of plugin`s data
       * @param {RendererBlocks[]} blocks
       */
      value: function render(blocks) {
        var _this = this;

        var chainData = blocks.map(function (block) {
          return {
            function: function _function() {
              return _this.insertBlock(block);
            }
          };
        });
        return _utils.default.sequence(chainData);
      }
      /**
       * Get plugin instance
       * Add plugin instance to BlockManager
       * Insert block to working zone
       *
       * @param {Object} item
       * @returns {Promise<void>}
       * @private
       */

    }, {
      key: "insertBlock",
      value: function () {
        var _insertBlock = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(item) {
          var _this$Editor, Tools, BlockManager, tool, data, settings, stubData, toolToolboxSettings, userToolboxSettings, stub;

          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this$Editor = this.Editor, Tools = _this$Editor.Tools, BlockManager = _this$Editor.BlockManager;
                  tool = item.type;
                  data = item.data;
                  settings = item.settings;

                  if (!(tool in Tools.available)) {
                    _context.next = 15;
                    break;
                  }

                  _context.prev = 5;
                  BlockManager.insert(tool, data, settings);
                  _context.next = 13;
                  break;

                case 9:
                  _context.prev = 9;
                  _context.t0 = _context["catch"](5);

                  _utils.default.log("Block \xAB".concat(tool, "\xBB skipped because of plugins error"), 'warn', data);

                  throw Error(_context.t0);

                case 13:
                  _context.next = 20;
                  break;

                case 15:
                  /** If Tool is unavailable, create stub Block for it */
                  stubData = {
                    savedData: {
                      type: tool,
                      data: data
                    },
                    title: tool
                  };

                  if (tool in Tools.unavailable) {
                    toolToolboxSettings = Tools.unavailable[tool].toolbox;
                    userToolboxSettings = Tools.getToolSettings(tool).toolbox;
                    stubData.title = toolToolboxSettings.title || userToolboxSettings.title || stubData.title;
                  }

                  stub = BlockManager.insert(Tools.stubTool, stubData, settings);
                  stub.stretched = true;

                  _utils.default.log("Tool \xAB".concat(tool, "\xBB is not found. Check 'tools' property at your initial CodeX Editor config."), 'warn');

                case 20:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[5, 9]]);
        }));

        return function insertBlock(_x) {
          return _insertBlock.apply(this, arguments);
        };
      }()
    }]);
    return Renderer;
  }(_module.default);

  _exports.default = Renderer;
  Renderer.displayName = "Renderer";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/sanitizer.ts":
/*!*********************************************!*\
  !*** ./src/components/modules/sanitizer.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"), __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"), __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../__module */ "./src/components/__module.ts"), __webpack_require__(/*! ../utils */ "./src/components/utils.ts"), __webpack_require__(/*! html-janitor */ "./node_modules/html-janitor/src/html-janitor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _slicedToArray2, _typeof2, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module, _utils, _htmlJanitor) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);
  _typeof2 = _interopRequireDefault(_typeof2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);
  _utils = _interopRequireDefault(_utils);
  _htmlJanitor = _interopRequireDefault(_htmlJanitor);

  /**
   * CodeX Sanitizer
   *
   * @module Sanitizer
   * Clears HTML from taint tags
   *
   * @version 2.0.0
   *
   * @example
   *  Module can be used within two ways:
   *     1) When you have an instance
   *         - this.Editor.Sanitizer.clean(yourTaintString);
   *     2) As static method
   *         - CodexEditor.Sanitizer.clean(yourTaintString, yourCustomConfiguration);
   *
   * {@link SanitizerConfig}
   */

  /**
   * @typedef {Object} SanitizerConfig
   * @property {Object} tags - define tags restrictions
   *
   * @example
   *
   * tags : {
   *     p: true,
   *     a: {
   *       href: true,
   *       rel: "nofollow",
   *       target: "_blank"
   *     }
   * }
   */
  var Sanitizer =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(Sanitizer, _Module);

    function Sanitizer() {
      var _this;

      (0, _classCallCheck2.default)(this, Sanitizer);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Sanitizer).apply(this, arguments));
      /**
       * Memoize tools config
       */

      _this.configCache = {};
      /**
       * Cached inline tools config
       */

      _this.inlineToolsConfigCache = null;
      return _this;
    }
    /**
     * Sanitize Blocks
     *
     * Enumerate blocks and clean data
     *
     * @param {{tool, data: BlockToolData}[]} blocksData[]
     */


    (0, _createClass2.default)(Sanitizer, [{
      key: "sanitizeBlocks",
      value: function sanitizeBlocks(blocksData) {
        var _this2 = this;

        return blocksData.map(function (block) {
          var toolConfig = _this2.composeToolConfig(block.tool);

          if (_utils.default.isEmpty(toolConfig)) {
            return block;
          }

          block.data = _this2.deepSanitize(block.data, toolConfig);
          return block;
        });
      }
      /**
       * Method recursively reduces Block's data and cleans with passed rules
       *
       * @param {BlockToolData|object|*} dataToSanitize - taint string or object/array that contains taint string
       * @param {SanitizerConfig} rules - object with sanitizer rules
       */

    }, {
      key: "deepSanitize",
      value: function deepSanitize(dataToSanitize, rules) {
        /**
         * BlockData It may contain 3 types:
         *  - Array
         *  - Object
         *  - Primitive
         */
        if (Array.isArray(dataToSanitize)) {
          /**
           * Array: call sanitize for each item
           */
          return this.cleanArray(dataToSanitize, rules);
        } else if ((0, _typeof2.default)(dataToSanitize) === 'object') {
          /**
           * Objects: just clean object deeper.
           */
          return this.cleanObject(dataToSanitize, rules);
        } else {
          /**
           * Primitives (number|string|boolean): clean this item
           *
           * Clean only strings
           */
          if (typeof dataToSanitize === 'string') {
            return this.cleanOneItem(dataToSanitize, rules);
          }

          return dataToSanitize;
        }
      }
      /**
       * Cleans string from unwanted tags
       * Method allows to use default config
       *
       * @param {string} taintString - taint string
       * @param {SanitizerConfig} customConfig - allowed tags
       *
       * @return {string} clean HTML
       */

    }, {
      key: "clean",
      value: function clean(taintString) {
        var customConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var sanitizerConfig = {
          tags: customConfig
        };
        /**
         * API client can use custom config to manage sanitize process
         */

        var sanitizerInstance = this.createHTMLJanitorInstance(sanitizerConfig);
        return sanitizerInstance.clean(taintString);
      }
      /**
       * Merge with inline tool config
       *
       * @param {string} toolName
       * @param {SanitizerConfig} toolRules
       * @return {SanitizerConfig}
       */

    }, {
      key: "composeToolConfig",
      value: function composeToolConfig(toolName) {
        /**
         * If cache is empty, then compose tool config and put it to the cache object
         */
        if (this.configCache[toolName]) {
          return this.configCache[toolName];
        }

        var sanitizeGetter = this.Editor.Tools.apiSettings.SANITIZE_CONFIG;
        var toolClass = this.Editor.Tools.available[toolName];
        var baseConfig = this.getInlineToolsConfig(toolName);
        /**
         * If Tools doesn't provide sanitizer config or it is empty
         */

        if (!toolClass.sanitize || toolClass[sanitizeGetter] && _utils.default.isEmpty(toolClass[sanitizeGetter])) {
          return baseConfig;
        }

        var toolRules = toolClass.sanitize;
        var toolConfig = {};

        for (var fieldName in toolRules) {
          if (toolRules.hasOwnProperty(fieldName)) {
            var rule = toolRules[fieldName];

            if ((0, _typeof2.default)(rule) === 'object') {
              toolConfig[fieldName] = Object.assign({}, baseConfig, rule);
            } else {
              toolConfig[fieldName] = rule;
            }
          }
        }

        this.configCache[toolName] = toolConfig;
        return toolConfig;
      }
      /**
       * Returns Sanitizer config
       * When Tool's "inlineToolbar" value is True, get all sanitizer rules from all tools,
       * otherwise get only enabled
       */

    }, {
      key: "getInlineToolsConfig",
      value: function getInlineToolsConfig(name) {
        var Tools = this.Editor.Tools;
        var toolsConfig = Tools.getToolSettings(name);
        var enableInlineTools = toolsConfig.inlineToolbar || [];
        var config = {};

        if (typeof enableInlineTools === 'boolean' && enableInlineTools) {
          /**
           * getting all tools sanitizer rule
           */
          config = this.getAllInlineToolsConfig();
        } else {
          /**
           * getting only enabled
           */
          enableInlineTools.map(function (inlineToolName) {
            config = Object.assign(config, Tools.inline[inlineToolName][Tools.apiSettings.SANITIZE_CONFIG]);
          });
        }

        return config;
      }
      /**
       * Return general config for all inline tools
       */

    }, {
      key: "getAllInlineToolsConfig",
      value: function getAllInlineToolsConfig() {
        var Tools = this.Editor.Tools;

        if (this.inlineToolsConfigCache) {
          return this.inlineToolsConfigCache;
        }

        var config = {};
        Object.entries(Tools.inline).forEach(function (_ref) {
          var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
              name = _ref2[0],
              inlineTool = _ref2[1];

          Object.assign(config, inlineTool[Tools.apiSettings.SANITIZE_CONFIG]);
        });
        this.inlineToolsConfigCache = config;
        return this.inlineToolsConfigCache;
      }
      /**
       * Clean array
       * @param {array} array - [1, 2, {}, []]
       * @param {object} ruleForItem
       */

    }, {
      key: "cleanArray",
      value: function cleanArray(array, ruleForItem) {
        var _this3 = this;

        return array.map(function (arrayItem) {
          return _this3.deepSanitize(arrayItem, ruleForItem);
        });
      }
      /**
       * Clean object
       * @param {object} object  - {level: 0, text: 'adada', items: [1,2,3]}}
       * @param {object} rules - { b: true } or true|false
       * @return {object}
       */

    }, {
      key: "cleanObject",
      value: function cleanObject(object, rules) {
        var cleanData = {};

        for (var fieldName in object) {
          if (!object.hasOwnProperty(fieldName)) {
            continue;
          }

          var currentIterationItem = object[fieldName];
          /**
           *  Get object from config by field name
           *   - if it is a HTML Janitor rule, call with this rule
           *   - otherwise, call with parent's config
           */

          var ruleForItem = this.isRule(rules[fieldName]) ? rules[fieldName] : rules;
          cleanData[fieldName] = this.deepSanitize(currentIterationItem, ruleForItem);
        }

        return cleanData;
      }
      /**
       * @param {string} taintString
       * @param {SanitizerConfig|boolean} rule
       * @return {string}
       */

    }, {
      key: "cleanOneItem",
      value: function cleanOneItem(taintString, rule) {
        if ((0, _typeof2.default)(rule) === 'object') {
          return this.clean(taintString, rule);
        } else if (rule === false) {
          return this.clean(taintString, {});
        } else {
          return taintString;
        }
      }
      /**
       * Check if passed item is a HTML Janitor rule:
       *  { a : true }, {}, false, true, function(){} — correct rules
       *  undefined, null, 0, 1, 2 — not a rules
       * @param config
       */

    }, {
      key: "isRule",
      value: function isRule(config) {
        return (0, _typeof2.default)(config) === 'object' || typeof config === 'boolean' || typeof config === 'function';
      }
      /**
       * If developer uses editor's API, then he can customize sanitize restrictions.
       * Or, sanitizing config can be defined globally in editors initialization. That config will be used everywhere
       * At least, if there is no config overrides, that API uses Default configuration
       *
       * @uses https://www.npmjs.com/package/html-janitor
       * @license https://github.com/guardian/html-janitor/blob/master/LICENSE
       *
       * @param {SanitizerConfig} config - sanitizer extension
       */

    }, {
      key: "createHTMLJanitorInstance",
      value: function createHTMLJanitorInstance(config) {
        if (config) {
          return new _htmlJanitor.default(config);
        }

        return null;
      }
    }]);
    return Sanitizer;
  }(_module.default);

  _exports.default = Sanitizer;
  Sanitizer.displayName = "Sanitizer";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/saver.ts":
/*!*****************************************!*\
  !*** ./src/components/modules/saver.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"), __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../__module */ "./src/components/__module.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _regenerator, _asyncToGenerator2, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);

  /**
   * Codex Editor Saver
   *
   * @module Saver
   * @author Codex Team
   * @version 2.0.0
   */

  /**
   * @classdesc This method reduces all Blocks asyncronically and calls Block's save method to extract data
   *
   * @typedef {Saver} Saver
   * @property {Element} html - Editor HTML content
   * @property {String} json - Editor JSON output
   */
  var Saver =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(Saver, _Module);

    function Saver() {
      (0, _classCallCheck2.default)(this, Saver);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Saver).apply(this, arguments));
    }

    (0, _createClass2.default)(Saver, [{
      key: "save",

      /**
       * Composes new chain of Promises to fire them alternatelly
       * @return {OutputData}
       */
      value: function () {
        var _save = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          var _this$Editor, BlockManager, Sanitizer, ModificationsObserver, blocks, chainData, extractedData, sanitizedData;

          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this$Editor = this.Editor, BlockManager = _this$Editor.BlockManager, Sanitizer = _this$Editor.Sanitizer, ModificationsObserver = _this$Editor.ModificationsObserver;
                  blocks = BlockManager.blocks, chainData = [];
                  /**
                   * Disable modifications observe while saving
                   */

                  ModificationsObserver.disable();
                  blocks.forEach(function (block) {
                    chainData.push(block.save());
                  });
                  _context.next = 6;
                  return Promise.all(chainData);

                case 6:
                  extractedData = _context.sent;
                  _context.next = 9;
                  return Sanitizer.sanitizeBlocks(extractedData);

                case 9:
                  sanitizedData = _context.sent;
                  ModificationsObserver.enable();
                  return _context.abrupt("return", this.makeOutput(sanitizedData));

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function save() {
          return _save.apply(this, arguments);
        };
      }()
      /**
       * Creates output object with saved data, time and version of editor
       * @param {Object} allExtractedData
       * @return {OutputData}
       */

    }, {
      key: "makeOutput",
      value: function makeOutput(allExtractedData) {
        var _this = this;

        var totalTime = 0;
        var blocks = [];
        console.groupCollapsed('[CodexEditor saving]:');
        allExtractedData.forEach(function (extraction) {
          /** Group process info */
          console.log("\xAB".concat(extraction.tool, "\xBB saving info"), extraction);
          totalTime += extraction.time;
          /** If it was stub Block, get original data */

          if (extraction.tool === _this.Editor.Tools.stubTool) {
            blocks.push(extraction.data);
            return;
          }

          blocks.push({
            type: extraction.tool,
            data: extraction.data
          });
        });
        console.log('Total', totalTime);
        console.groupEnd();
        return {
          time: +new Date(),
          blocks: blocks,
          version: "2.7.22"
        };
      }
    }]);
    return Saver;
  }(_module.default);

  _exports.default = Saver;
  Saver.displayName = "Saver";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/shortcuts.ts":
/*!*********************************************!*\
  !*** ./src/components/modules/shortcuts.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @codexteam/shortcuts */ "./node_modules/@codexteam/shortcuts/lib/shortcuts.js"), __webpack_require__(/*! ../__module */ "./src/components/__module.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _shortcuts, _module) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _shortcuts = _interopRequireDefault(_shortcuts);
  _module = _interopRequireDefault(_module);

  /**
   * Contains keyboard and mouse events binded on each Block by Block Manager
   */

  /**
   * @class Shortcut
   * @classdesc Allows to register new shortcut
   *
   * Internal Shortcuts Module
   */
  var Shortcuts =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(Shortcuts, _Module);

    function Shortcuts() {
      var _this;

      (0, _classCallCheck2.default)(this, Shortcuts);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Shortcuts).apply(this, arguments));
      /**
       * All registered shortcuts
       * @type {Shortcut[]}
       */

      _this.registeredShortcuts = [];
      return _this;
    }
    /**
     * Register shortcut
     * @param {ShortcutData} shortcut
     */


    (0, _createClass2.default)(Shortcuts, [{
      key: "add",
      value: function add(shortcut) {
        var UI = this.Editor.UI;
        var newShortcut = new _shortcuts.default({
          name: shortcut.name,
          on: UI.nodes.redactor,
          callback: shortcut.handler
        });
        this.registeredShortcuts.push(newShortcut);
      }
      /**
       * Remove shortcut
       * @param {ShortcutData} shortcut
       */

    }, {
      key: "remove",
      value: function remove(shortcut) {
        var index = this.registeredShortcuts.findIndex(function (shc) {
          return shc.name === shortcut;
        });
        this.registeredShortcuts[index].remove();
        this.registeredShortcuts.splice(index, 1);
      }
    }]);
    return Shortcuts;
  }(_module.default);

  _exports.default = Shortcuts;
  Shortcuts.displayName = "Shortcuts";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/toolbar/blockSettings.ts":
/*!*********************************************************!*\
  !*** ./src/components/modules/toolbar/blockSettings.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../../__module */ "./src/components/__module.ts"), __webpack_require__(/*! ../../dom */ "./src/components/dom.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module, _dom) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);
  _dom = _interopRequireDefault(_dom);

  /**
   * Block Settings
   *
   *   ____ Settings Panel ____
   *  | ...................... |
   *  | .   Tool Settings    . |
   *  | ...................... |
   *  | .  Default Settings  . |
   *  | ...................... |
   *  |________________________|
   */
  var BlockSettings =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(BlockSettings, _Module);

    function BlockSettings() {
      var _this;

      (0, _classCallCheck2.default)(this, BlockSettings);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BlockSettings).apply(this, arguments));
      /**
       * Block settings UI HTML elements
       */

      _this.nodes = {
        wrapper: null,
        toolSettings: null,
        defaultSettings: null
      };
      return _this;
    }
    /**
     * Module Events
     * @return {{opened: string, closed: string}}
     */


    (0, _createClass2.default)(BlockSettings, [{
      key: "make",

      /**
       * Panel with block settings with 2 sections:
       *  - Tool's Settings
       *  - Default Settings [Move, Remove, etc]
       *
       * @return {Element}
       */
      value: function make() {
        this.nodes.wrapper = _dom.default.make('div', BlockSettings.CSS.wrapper);
        this.nodes.toolSettings = _dom.default.make('div', BlockSettings.CSS.toolSettings);
        this.nodes.defaultSettings = _dom.default.make('div', BlockSettings.CSS.defaultSettings);

        _dom.default.append(this.nodes.wrapper, [this.nodes.toolSettings, this.nodes.defaultSettings]);
      }
      /**
       * Open Block Settings pane
       */

    }, {
      key: "open",
      value: function open() {
        this.nodes.wrapper.classList.add(BlockSettings.CSS.wrapperOpened);
        /**
         * Fill Tool's settings
         */

        this.addToolSettings();
        /**
         * Add default settings that presents for all Blocks
         */

        this.addDefaultSettings();
        /** Tell to subscribers that block settings is opened */

        this.Editor.Events.emit(this.events.opened);
      }
      /**
       * Close Block Settings pane
       */

    }, {
      key: "close",
      value: function close() {
        this.nodes.wrapper.classList.remove(BlockSettings.CSS.wrapperOpened);
        /** Clear settings */

        this.nodes.toolSettings.innerHTML = '';
        this.nodes.defaultSettings.innerHTML = '';
        /** Tell to subscribers that block settings is closed */

        this.Editor.Events.emit(this.events.closed);
      }
      /**
       * Add Tool's settings
       */

    }, {
      key: "addToolSettings",
      value: function addToolSettings() {
        if (typeof this.Editor.BlockManager.currentBlock.tool.renderSettings === 'function') {
          _dom.default.append(this.nodes.toolSettings, this.Editor.BlockManager.currentBlock.tool.renderSettings());
        }
      }
      /**
       * Add default settings
       */

    }, {
      key: "addDefaultSettings",
      value: function addDefaultSettings() {
        _dom.default.append(this.nodes.defaultSettings, this.Editor.BlockManager.currentBlock.renderTunes());
      }
    }, {
      key: "events",
      get: function get() {
        return {
          opened: 'block-settings-opened',
          closed: 'block-settings-closed'
        };
      }
      /**
       * Block Settings CSS
       * @return {{wrapper, wrapperOpened, toolSettings, defaultSettings, button}}
       */

    }, {
      key: "opened",

      /**
       * Is Block Settings opened or not
       * @returns {boolean}
       */
      get: function get() {
        return this.nodes.wrapper.classList.contains(BlockSettings.CSS.wrapperOpened);
      }
    }], [{
      key: "CSS",
      get: function get() {
        return {
          // Settings Panel
          wrapper: 'ce-settings',
          wrapperOpened: 'ce-settings--opened',
          toolSettings: 'ce-settings__plugin-zone',
          defaultSettings: 'ce-settings__default-zone',
          button: 'ce-settings__button'
        };
      }
    }]);
    return BlockSettings;
  }(_module.default);

  _exports.default = BlockSettings;
  BlockSettings.displayName = "BlockSettings";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/toolbar/index.ts":
/*!*************************************************!*\
  !*** ./src/components/modules/toolbar/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../../__module */ "./src/components/__module.ts"), __webpack_require__(/*! ../../dom */ "./src/components/dom.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module, _dom) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);
  _dom = _interopRequireDefault(_dom);

  /**
   *
   * «Toolbar» is the node that moves up/down over current block
   *
   *  ______________________________________ Toolbar ____________________________________________
   * |                                                                                           |
   * |  ..................... Content ....................   ......... Block Actions ..........  |
   * |  .                                                .   .                                .  |
   * |  .                                                .   .        [Open Settings]         .  |
   * |  .  [Plus Button]  [Toolbox: {Tool1}, {Tool2}]    .   .                                .  |
   * |  .                                                .   .        [Settings Panel]        .  |
   * |  ..................................................   ..................................  |
   * |                                                                                           |
   * |___________________________________________________________________________________________|
   *
   *
   * Toolbox — its an Element contains tools buttons. Can be shown by Plus Button.
   *
   *  _______________ Toolbox _______________
   * |                                       |
   * | [Header] [Image] [List] [Quote] ...   |
   * |_______________________________________|
   *
   *
   * Settings Panel — is an Element with block settings:
   *
   *   ____ Settings Panel ____
   *  | ...................... |
   *  | .   Tool Settings    . |
   *  | ...................... |
   *  | .  Default Settings  . |
   *  | ...................... |
   *  |________________________|
   *
   *
   * @class
   * @classdesc Toolbar module
   *
   * @typedef {Toolbar} Toolbar
   * @property {Object} nodes
   * @property {Element} nodes.wrapper        - Toolbar main element
   * @property {Element} nodes.content        - Zone with Plus button and toolbox.
   * @property {Element} nodes.actions        - Zone with Block Settings and Remove Button
   * @property {Element} nodes.blockActionsButtons   - Zone with Block Buttons: [Settings]
   * @property {Element} nodes.plusButton     - Button that opens or closes Toolbox
   * @property {Element} nodes.toolbox        - Container for tools
   * @property {Element} nodes.settingsToggler - open/close Settings Panel button
   * @property {Element} nodes.settings          - Settings Panel
   * @property {Element} nodes.pluginSettings    - Plugin Settings section of Settings Panel
   * @property {Element} nodes.defaultSettings   - Default Settings section of Settings Panel
   */
  var Toolbar =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(Toolbar, _Module);

    function Toolbar() {
      var _this;

      (0, _classCallCheck2.default)(this, Toolbar);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Toolbar).apply(this, arguments));
      /**
       * HTML Elements used for Toolbar UI
       */

      _this.nodes = {
        wrapper: null,
        content: null,
        actions: null,
        // Content Zone
        plusButton: null,
        // Actions Zone
        blockActionsButtons: null,
        settingsToggler: null
      };
      return _this;
    }
    /**
     * CSS styles
     * @return {Object}
     */


    (0, _createClass2.default)(Toolbar, [{
      key: "make",

      /**
       * Makes toolbar
       */
      value: function make() {
        var _this2 = this;

        this.nodes.wrapper = _dom.default.make('div', Toolbar.CSS.toolbar);
        /**
         * Make Content Zone and Actions Zone
         */

        ['content', 'actions'].forEach(function (el) {
          _this2.nodes[el] = _dom.default.make('div', Toolbar.CSS[el]);

          _dom.default.append(_this2.nodes.wrapper, _this2.nodes[el]);
        });
        /**
         * Fill Content Zone:
         *  - Plus Button
         *  - Toolbox
         */

        this.nodes.plusButton = _dom.default.make('div', Toolbar.CSS.plusButton);

        _dom.default.append(this.nodes.plusButton, _dom.default.svg('plus', 14, 14));

        _dom.default.append(this.nodes.content, this.nodes.plusButton);

        this.Editor.Listeners.on(this.nodes.plusButton, 'click', function () {
          return _this2.plusButtonClicked();
        }, false);
        /**
         * Make a Toolbox
         */

        this.Editor.Toolbox.make();
        /**
         * Fill Actions Zone:
         *  - Settings Toggler
         *  - Remove Block Button
         *  - Settings Panel
         */

        this.nodes.blockActionsButtons = _dom.default.make('div', Toolbar.CSS.blockActionsButtons);
        this.nodes.settingsToggler = _dom.default.make('span', Toolbar.CSS.settingsToggler);

        var settingsIcon = _dom.default.svg('dots', 18, 4);

        _dom.default.append(this.nodes.settingsToggler, settingsIcon);

        _dom.default.append(this.nodes.blockActionsButtons, this.nodes.settingsToggler);

        _dom.default.append(this.nodes.actions, this.nodes.blockActionsButtons);
        /**
         * Make and append Settings Panel
         */


        this.Editor.BlockSettings.make();

        _dom.default.append(this.nodes.actions, this.Editor.BlockSettings.nodes.wrapper);
        /**
         * Append toolbar to the Editor
         */


        _dom.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
        /**
         * Bind events on the Toolbar elements
         */


        this.bindEvents();
      }
      /**
       * Move Toolbar to the Current Block
       * @param {Boolean} forceClose - force close Toolbar Settings and Toolbar
       */

    }, {
      key: "move",
      value: function move() {
        var forceClose = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        if (forceClose) {
          /** Close Toolbox when we move toolbar */
          this.Editor.Toolbox.close();
          this.Editor.BlockSettings.close();
        }

        var currentBlock = this.Editor.BlockManager.currentBlock.holder;
        /**
         * If no one Block selected as a Current
         */

        if (!currentBlock) {
          return;
        }
        /**
         * Set Toolbar Min Height as Block's height
         * Plus Button and Toolbox positioned at the center of the Toolbar
         */


        var contentOffset = Math.floor(currentBlock.offsetHeight / 2);
        this.nodes.plusButton.style.transform = "translate3d(0, calc(".concat(contentOffset, "px - 50%), 0)");
        this.Editor.Toolbox.nodes.toolbox.style.transform = "translate3d(0, calc(".concat(contentOffset, "px - 50%), 0)");
        /**
         * Move Toolbar to the Top coordinate of Block
         */

        this.nodes.wrapper.style.transform = "translate3D(0, ".concat(Math.floor(currentBlock.offsetTop), "px, 0)");
      }
      /**
       * Open Toolbar with Plus Button and Actions
       * @param {boolean} withBlockActions - by default, Toolbar opens with Block Actions.
       *                                     This flag allows to open Toolbar without Actions.
       * @param {boolean} needToCloseToolbox - by default, Toolbar will be moved with opening
       *                                      (by click on Block, or by enter)
       *                                      with closing Toolbox and Block Settings
       *                                      This flag allows to open Toolbar with Toolbox
       */

    }, {
      key: "open",
      value: function open() {
        var _this3 = this;

        var withBlockActions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var needToCloseToolbox = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        setTimeout(function () {
          _this3.move(needToCloseToolbox);

          _this3.nodes.wrapper.classList.add(Toolbar.CSS.toolbarOpened);

          if (withBlockActions) {
            _this3.blockActions.show();
          } else {
            _this3.blockActions.hide();
          }
        }, 50);
      }
      /**
       * returns toolbar opened state
       * @return {Boolean}
       */

    }, {
      key: "close",

      /**
       * Close the Toolbar
       */
      value: function close() {
        this.nodes.wrapper.classList.remove(Toolbar.CSS.toolbarOpened);
        /** Close components */

        this.blockActions.hide();
        this.Editor.Toolbox.close();
        this.Editor.BlockSettings.close();
      }
      /**
       * Plus Button public methods
       * @return {{hide: function(): void, show: function(): void}}
       */

    }, {
      key: "plusButtonClicked",

      /**
       * Handler for Plus Button
       * @param {MouseEvent} event
       */
      value: function plusButtonClicked() {
        this.Editor.Toolbox.toggle();
      }
      /**
       * Bind events on the Toolbar Elements:
       * - Block Settings
       */

    }, {
      key: "bindEvents",
      value: function bindEvents() {
        var _this4 = this;

        /**
         * Settings toggler
         */
        this.Editor.Listeners.on(this.nodes.settingsToggler, 'click', function () {
          return _this4.settingsTogglerClicked();
        });
      }
      /**
       * Clicks on the Block Settings toggler
       */

    }, {
      key: "settingsTogglerClicked",
      value: function settingsTogglerClicked() {
        if (this.Editor.BlockSettings.opened) {
          this.Editor.BlockSettings.close();
        } else {
          this.Editor.BlockSettings.open();
        }
      }
    }, {
      key: "opened",
      get: function get() {
        return this.nodes.wrapper.classList.contains(Toolbar.CSS.toolbarOpened);
      }
    }, {
      key: "plusButton",
      get: function get() {
        var _this5 = this;

        return {
          hide: function hide() {
            return _this5.nodes.plusButton.classList.add(Toolbar.CSS.plusButtonHidden);
          },
          show: function show() {
            if (_this5.Editor.Toolbox.isEmpty) {
              return;
            }

            _this5.nodes.plusButton.classList.remove(Toolbar.CSS.plusButtonHidden);
          }
        };
      }
      /**
       * Block actions appearance manipulations
       * @return {{hide: function(): void, show: function(): void}}
       */

    }, {
      key: "blockActions",
      get: function get() {
        var _this6 = this;

        return {
          hide: function hide() {
            _this6.nodes.actions.classList.remove(Toolbar.CSS.actionsOpened);
          },
          show: function show() {
            _this6.nodes.actions.classList.add(Toolbar.CSS.actionsOpened);
          }
        };
      }
    }], [{
      key: "CSS",
      get: function get() {
        return {
          toolbar: 'ce-toolbar',
          content: 'ce-toolbar__content',
          actions: 'ce-toolbar__actions',
          actionsOpened: 'ce-toolbar__actions--opened',
          toolbarOpened: 'ce-toolbar--opened',
          // Content Zone
          plusButton: 'ce-toolbar__plus',
          plusButtonHidden: 'ce-toolbar__plus--hidden',
          // Actions Zone
          blockActionsButtons: 'ce-toolbar__actions-buttons',
          settingsToggler: 'ce-toolbar__settings-btn'
        };
      }
    }]);
    return Toolbar;
  }(_module.default);

  _exports.default = Toolbar;
  Toolbar.displayName = "Toolbar";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/toolbar/inline.ts":
/*!**************************************************!*\
  !*** ./src/components/modules/toolbar/inline.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"), __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../../__module */ "./src/components/__module.ts"), __webpack_require__(/*! ../../dom */ "./src/components/dom.ts"), __webpack_require__(/*! ../../inline-tools/inline-tool-bold */ "./src/components/inline-tools/inline-tool-bold.ts"), __webpack_require__(/*! ../../inline-tools/inline-tool-italic */ "./src/components/inline-tools/inline-tool-italic.ts"), __webpack_require__(/*! ../../inline-tools/inline-tool-link */ "./src/components/inline-tools/inline-tool-link.ts"), __webpack_require__(/*! ../../selection */ "./src/components/selection.ts"), __webpack_require__(/*! ../../utils */ "./src/components/utils.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _slicedToArray2, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module, _dom, _inlineToolBold, _inlineToolItalic, _inlineToolLink, _selection, _utils) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);
  _dom = _interopRequireDefault(_dom);
  _inlineToolBold = _interopRequireDefault(_inlineToolBold);
  _inlineToolItalic = _interopRequireDefault(_inlineToolItalic);
  _inlineToolLink = _interopRequireDefault(_inlineToolLink);
  _selection = _interopRequireDefault(_selection);
  _utils = _interopRequireDefault(_utils);

  /**
   * Inline toolbar with actions that modifies selected text fragment
   *
   * |¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯|
   * |   B  i [link] [mark]   |
   * |________________________|
   */
  var InlineToolbar =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(InlineToolbar, _Module);

    function InlineToolbar() {
      var _this;

      (0, _classCallCheck2.default)(this, InlineToolbar);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(InlineToolbar).apply(this, arguments));
      /**
       * CSS styles
       */

      _this.CSS = {
        inlineToolbar: 'ce-inline-toolbar',
        inlineToolbarShowed: 'ce-inline-toolbar--showed',
        buttonsWrapper: 'ce-inline-toolbar__buttons',
        actionsWrapper: 'ce-inline-toolbar__actions',
        actionsWrapperOpened: 'ce-inline-toolbar__actions--opened',
        inlineToolButton: 'ce-inline-tool',
        inlineToolButtonPinch: 'ce-inline-tool--pinch',
        inlineToolButtonLast: 'ce-inline-tool--last',
        inputField: 'cdx-input'
      };
      /**
       * Inline Toolbar elements
       */

      _this.nodes = {
        wrapper: null,
        buttons: null,

        /**
         * Zone below the buttons where Tools can create additional actions by 'renderActions()' method
         * For example, input for the 'link' tool or textarea for the 'comment' tool
         */
        actions: null
      };
      _this.toolsButtons = {};
      _this.toolsActions = {};
      /**
       * Margin above/below the Toolbar
       */

      _this.toolbarVerticalMargin = 20;
      return _this;
    }
    /**
     * Returns internal inline tools
     * Includes Bold, Italic, Link
     */


    (0, _createClass2.default)(InlineToolbar, [{
      key: "make",

      /**
       * Making DOM
       */
      value: function make() {
        this.nodes.wrapper = _dom.default.make('div', this.CSS.inlineToolbar);
        this.nodes.buttons = _dom.default.make('div', this.CSS.buttonsWrapper);
        this.nodes.actions = _dom.default.make('div', this.CSS.actionsWrapper); // To prevent reset of a selection when click on the wrapper

        this.Editor.Listeners.on(this.nodes.wrapper, 'mousedown', function (event) {
          event.preventDefault();
        });
        /**
         * Append Inline Toolbar to the Editor
         */

        _dom.default.append(this.nodes.wrapper, this.nodes.buttons);

        _dom.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
        /**
         * Append Inline Toolbar Tools
         */


        this.addTools();
      }
      /**
       *  Moving / appearance
       *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       */

      /**
       * Shows Inline Toolbar by keyup/mouseup
       * @param {KeyboardEvent|MouseEvent} event
       */

    }, {
      key: "handleShowingEvent",
      value: function handleShowingEvent(event) {
        if (!this.allowedToShow()) {
          this.close();
          return;
        }

        this.move();
        this.open();
        /** Check Tools state for selected fragment */

        this.checkToolsState();
        /** Clear selection */

        this.Editor.BlockSelection.clearSelection();
      }
      /**
       * Move Toolbar to the selected text
       */

    }, {
      key: "move",
      value: function move() {
        var selectionRect = _selection.default.rect;
        var wrapperOffset = this.Editor.UI.nodes.wrapper.getBoundingClientRect();
        var newCoords = {
          x: selectionRect.x - wrapperOffset.left,
          y: selectionRect.y + selectionRect.height // + window.scrollY
          - wrapperOffset.top + this.toolbarVerticalMargin
        };
        /**
         * If we know selections width, place InlineToolbar to center
         */

        if (selectionRect.width) {
          newCoords.x += Math.floor(selectionRect.width / 2);
        }

        this.nodes.wrapper.style.left = Math.floor(newCoords.x) + 'px';
        this.nodes.wrapper.style.top = Math.floor(newCoords.y) + 'px';
      }
      /**
       * Hides Inline Toolbar
       */

    }, {
      key: "close",
      value: function close() {
        this.currentActionsTool = null;
        this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed);
        this.tools.forEach(function (toolInstance) {
          if (typeof toolInstance.clear === 'function') {
            toolInstance.clear();
          }
        });
      }
    }, {
      key: "toggleActions",
      value: function toggleActions(toolName) {
        if (!this.currentActionsTool) {
          this.openActions(toolName);
          return;
        }

        if (this.currentActionsTool === toolName) {
          this.closeActions();
          return;
        }

        this.closeActions();
        this.openActions(toolName);
      }
    }, {
      key: "openActions",
      value: function openActions(toolName) {
        var _this2 = this;

        if (!this.toolsActions[toolName]) {
          return;
        }

        this.currentActionsTool = toolName;
        var toolbarWidth = this.nodes.buttons.clientWidth;
        this.nodes.buttons.style.minWidth = "".concat(toolbarWidth, "px");
        Array.from(this.nodes.actions.children).forEach(function (child) {
          return child.remove();
        });
        this.nodes.actions.appendChild(this.toolsActions[toolName]);
        this.nodes.buttons.insertBefore(this.nodes.actions, this.toolsButtons[toolName]);
        setImmediate(function () {
          Object.entries(_this2.toolsButtons).forEach(function (_ref) {
            var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
                name = _ref2[0],
                button = _ref2[1];

            button.classList.toggle(_this2.CSS.inlineToolButtonPinch, name !== toolName);
          });
          _this2.nodes.actions.style.width = "".concat(toolbarWidth - 34, "px");

          _this2.nodes.actions.classList.add(_this2.CSS.actionsWrapperOpened);
        });
      }
    }, {
      key: "closeActions",
      value: function closeActions() {
        var _this3 = this;

        this.currentActionsTool = null; // Array.from(this.nodes.actions.children).forEach((child) => child.remove());

        Object.entries(this.toolsButtons).forEach(function (_ref3) {
          var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
              name = _ref4[0],
              button = _ref4[1];

          button.classList.remove(_this3.CSS.actionsWrapperOpened);
        });
        this.nodes.buttons.style.minWidth = '';
        this.nodes.actions.style.width = '';
        this.nodes.actions.classList.remove(this.CSS.actionsWrapperOpened);
      }
      /**
       * Shows Inline Toolbar
       */

    }, {
      key: "open",
      value: function open() {
        this.currentActionsTool = null;
        /**
         * Filter inline-tools and show only allowed by Block's Tool
         */

        this.filterTools();
        /**
         * Show Inline Toolbar
         */

        this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed);
        /**
         * Call 'clear' method for Inline Tools (for example, 'link' want to clear input)
         */

        this.tools.forEach(function (toolInstance) {
          if (typeof toolInstance.clear === 'function') {
            toolInstance.clear();
          }
        });
      }
      /**
       * Need to show Inline Toolbar or not
       */

    }, {
      key: "allowedToShow",
      value: function allowedToShow() {
        /**
         * Tags conflicts with window.selection function.
         * Ex. IMG tag returns null (Firefox) or Redactors wrapper (Chrome)
         */
        var tagsConflictsWithSelection = ['IMG', 'INPUT'];

        var currentSelection = _selection.default.get();

        var selectedText = _selection.default.text; // old browsers

        if (!currentSelection || !currentSelection.anchorNode) {
          return false;
        } // empty selection


        if (currentSelection.isCollapsed || selectedText.length < 1) {
          return false;
        }

        var target = currentSelection.anchorNode.parentElement;

        if (currentSelection && tagsConflictsWithSelection.includes(target.tagName)) {
          return false;
        } // The selection of the element only in contenteditable


        var contenteditable = target.closest('[contenteditable="true"]');

        if (contenteditable === null) {
          return false;
        } // is enabled by current Block's Tool


        var currentBlock = this.Editor.BlockManager.getBlock(currentSelection.anchorNode);

        if (!currentBlock) {
          return false;
        }

        var toolSettings = this.Editor.Tools.getToolSettings(currentBlock.name);
        return toolSettings && toolSettings[this.Editor.Tools.apiSettings.IS_ENABLED_INLINE_TOOLBAR];
      }
      /**
       * Show only allowed Tools
       */

    }, {
      key: "filterTools",
      value: function filterTools() {
        var _this4 = this;

        var currentSelection = _selection.default.get(),
            currentBlock = this.Editor.BlockManager.getBlock(currentSelection.anchorNode);

        var toolSettings = this.Editor.Tools.getToolSettings(currentBlock.name),
            inlineToolbarSettings = toolSettings && toolSettings[this.Editor.Tools.apiSettings.IS_ENABLED_INLINE_TOOLBAR];
        /**
         * All Inline Toolbar buttons
         * @type {HTMLElement[]}
         */

        var buttons = Object.values(this.toolsButtons);
        /**
         * Show previously hided
         */

        buttons.forEach(function (button) {
          button.hidden = false;
          button.classList.remove(_this4.CSS.inlineToolButtonLast);
        });
        /**
         * Filter buttons if Block Tool pass config like inlineToolbar=['link']
         */

        if (Array.isArray(inlineToolbarSettings)) {
          buttons.forEach(function (button) {
            button.hidden = !inlineToolbarSettings.includes(button.dataset.tool);
          });
        }
        /**
         * Tick for removing right-margin from last visible button.
         * Current generation of CSS does not allow to filter :visible elements
         */


        var lastVisibleButton = buttons.filter(function (button) {
          return !button.hidden;
        }).pop();

        if (lastVisibleButton) {
          lastVisibleButton.classList.add(this.CSS.inlineToolButtonLast);
        }
      }
      /**
       *  Working with Tools
       *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       */

      /**
       * Fill Inline Toolbar with Tools
       */

    }, {
      key: "addTools",
      value: function addTools() {
        var _this5 = this;

        this.tools.forEach(function (toolInstance, toolName) {
          _this5.addTool(toolName, toolInstance);
        });
      }
      /**
       * Add tool button and activate clicks
       */

    }, {
      key: "addTool",
      value: function addTool(toolName, tool) {
        var _this6 = this;

        var _this$Editor = this.Editor,
            Listeners = _this$Editor.Listeners,
            Tools = _this$Editor.Tools;
        var button = tool.render();
        this.toolsButtons[toolName] = button;

        if (!button) {
          _utils.default.log('Render method must return an instance of Node', 'warn', toolName);

          return;
        }

        button.dataset.tool = toolName;
        this.nodes.buttons.appendChild(button);

        if (typeof tool.renderActions === 'function') {
          this.toolsActions[toolName] = tool.renderActions();
        }

        Listeners.on(button, 'click', function (event) {
          _this6.toolClicked(toolName, tool);

          event.preventDefault();
        });
        /**
         * Enable shortcuts
         * Ignore tool that doesn't have shortcut or empty string
         */

        var toolSettings = Tools.getToolSettings(toolName);
        var shortcut = null;
        /**
         * Get internal inline tools
         */

        var internalTools = Object.entries(Tools.internalTools).filter(function (_ref5) {
          var _ref6 = (0, _slicedToArray2.default)(_ref5, 2),
              name = _ref6[0],
              toolClass = _ref6[1];

          if (_utils.default.isFunction(toolClass)) {
            return toolClass[Tools.apiSettings.IS_INLINE];
          }

          return toolClass.class[Tools.apiSettings.IS_INLINE];
        }).map(function (_ref7) {
          var _ref8 = (0, _slicedToArray2.default)(_ref7, 1),
              name = _ref8[0];

          return name;
        });
        /**
         * 1) For internal tools, check public getter 'shortcut'
         * 2) For external tools, check tool's settings
         */

        if (internalTools.includes(toolName)) {
          shortcut = this.inlineTools[toolName].shortcut;
        } else if (toolSettings && toolSettings[Tools.apiSettings.SHORTCUT]) {
          shortcut = toolSettings[Tools.apiSettings.SHORTCUT];
        }

        if (shortcut) {
          this.enableShortcuts(toolName, tool, shortcut);
        }
      }
      /**
       * Enable Tool shortcut with Editor Shortcuts Module
       * @param {InlineTool} tool - Tool instance
       * @param {string} shortcut - shortcut according to the ShortcutData Module format
       */

    }, {
      key: "enableShortcuts",
      value: function enableShortcuts(toolName, tool, shortcut) {
        var _this7 = this;

        this.Editor.Shortcuts.add({
          name: shortcut,
          handler: function handler(event) {
            var currentBlock = _this7.Editor.BlockManager.currentBlock;
            /**
             * Editor is not focused
             */

            if (!currentBlock) {
              return;
            }
            /**
             * We allow to fire shortcut with empty selection (isCollapsed=true)
             * it can be used by tools like «Mention» that works without selection:
             * Example: by SHIFT+@ show dropdown and insert selected username
             */
            // if (SelectionUtils.isCollapsed) return;


            var toolSettings = _this7.Editor.Tools.getToolSettings(currentBlock.name);

            if (!toolSettings || !toolSettings[_this7.Editor.Tools.apiSettings.IS_ENABLED_INLINE_TOOLBAR]) {
              return;
            }

            event.preventDefault();

            _this7.toolClicked(toolName, tool);
          }
        });
      }
      /**
       * Inline Tool button clicks
       * @param {InlineTool} tool - Tool's instance
       */

    }, {
      key: "toolClicked",
      value: function toolClicked(toolName, tool) {
        var range = _selection.default.range;
        tool.surround(range);
        this.checkToolsState();
      }
      /**
       * Check Tools` state by selection
       */

    }, {
      key: "checkToolsState",
      value: function checkToolsState() {
        this.tools.forEach(function (toolInstance) {
          toolInstance.checkState(_selection.default.get());
        });
      }
      /**
       * Get inline tools tools
       * Tools that has isInline is true
       */

    }, {
      key: "internalTools",
      get: function get() {
        return {
          bold: this.Editor.Tools.constructInline(_inlineToolBold.default),
          italic: this.Editor.Tools.constructInline(_inlineToolItalic.default),
          link: this.Editor.Tools.constructInline(_inlineToolLink.default)
        };
      }
      /**
       * Get external tools
       * Tools that has isInline is true
       */

    }, {
      key: "externalTools",
      get: function get() {
        var result = {};

        for (var tool in this.Editor.Tools.inline) {
          if (this.Editor.Tools.inline.hasOwnProperty(tool)) {
            result[tool] = this.Editor.Tools.constructInline(this.Editor.Tools.inline[tool]);
          }
        }

        return result;
      }
      /**
       * Inline Toolbar Tools
       *
       * @returns Map<string, InlineTool>
       */

    }, {
      key: "tools",
      get: function get() {
        if (!this.toolsInstances || this.toolsInstances.size === 0) {
          var allTools = this.inlineTools;
          this.toolsInstances = new Map();

          for (var tool in allTools) {
            if (allTools.hasOwnProperty(tool)) {
              this.toolsInstances.set(tool, allTools[tool]);
            }
          }
        }

        return this.toolsInstances;
      }
    }, {
      key: "inlineTools",
      get: function get() {
        var result = {};

        for (var tool in this.Editor.Tools.inline) {
          if (this.Editor.Tools.inline.hasOwnProperty(tool)) {
            result[tool] = this.Editor.Tools.constructInline(this.Editor.Tools.inline[tool]);
          }
        }

        return result;
      }
    }]);
    return InlineToolbar;
  }(_module.default);

  _exports.default = InlineToolbar;
  InlineToolbar.displayName = "InlineToolbar";
  module.exports = exports.default;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./src/components/modules/toolbar/toolbox.ts":
/*!***************************************************!*\
  !*** ./src/components/modules/toolbar/toolbox.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../../__module */ "./src/components/__module.ts"), __webpack_require__(/*! ../../dom */ "./src/components/dom.ts"), __webpack_require__(/*! ../../utils */ "./src/components/utils.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _module, _dom, _utils) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _module = _interopRequireDefault(_module);
  _dom = _interopRequireDefault(_dom);
  _utils = _interopRequireDefault(_utils);

  /**
   * @class Toolbox
   * @classdesc Holder for Tools
   *
   * @typedef {Toolbox} Toolbox
   * @property {Boolean} opened - opening state
   * @property {Object} nodes   - Toolbox nodes
   * @property {Object} CSS     - CSS class names
   *
   */
  var Toolbox =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(Toolbox, _Module);

    function Toolbox() {
      var _this;

      (0, _classCallCheck2.default)(this, Toolbox);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Toolbox).apply(this, arguments));
      /**
       * Opening state
       * @type {boolean}
       */

      _this.opened = false;
      /**
       * HTMLElements used for Toolbox UI
       */

      _this.nodes = {
        toolbox: null,
        buttons: []
      };
      /**
       * Active button index
       * -1 equals no chosen Tool
       * @type {number}
       */

      _this.activeButtonIndex = -1;
      /**
       * How many tools displayed in Toolbox
       * @type {number}
       */

      _this.displayedToolsCount = 0;
      return _this;
    }
    /**
     * CSS styles
     * @return {{toolbox: string, toolboxButton: string, toolboxOpened: string}}
     */


    (0, _createClass2.default)(Toolbox, [{
      key: "make",

      /**
       * Makes the Toolbox
       */
      value: function make() {
        this.nodes.toolbox = _dom.default.make('div', Toolbox.CSS.toolbox);

        _dom.default.append(this.Editor.Toolbar.nodes.content, this.nodes.toolbox);

        this.addTools();
      }
      /**
       * Toolbox Tool's button click handler
       *
       * @param {MouseEvent|KeyboardEvent} event
       * @param {string} toolName
       */

    }, {
      key: "toolButtonActivate",
      value: function toolButtonActivate(event, toolName) {
        var tool = this.Editor.Tools.toolsClasses[toolName];
        this.insertNewBlock(tool, toolName);
      }
      /**
       * Open Toolbox with Tools
       */

    }, {
      key: "open",
      value: function open() {
        if (this.isEmpty) {
          return;
        }

        this.nodes.toolbox.classList.add(Toolbox.CSS.toolboxOpened);
        this.opened = true;
      }
      /**
       * Close Toolbox
       */

    }, {
      key: "close",
      value: function close() {
        this.nodes.toolbox.classList.remove(Toolbox.CSS.toolboxOpened);
        this.opened = false;
        /** remove active item pointer */

        this.activeButtonIndex = -1;
        var activeButton = this.nodes.toolbox.querySelector(".".concat(Toolbox.CSS.toolboxButtonActive));

        if (activeButton) {
          activeButton.classList.remove(Toolbox.CSS.toolboxButtonActive);
        }
      }
      /**
       * Close Toolbox
       */

    }, {
      key: "toggle",
      value: function toggle() {
        if (!this.opened) {
          this.open();
        } else {
          this.close();
        }
      }
      /**
       * Leaf
       * flip through the toolbox items
       * @param {String} direction - leaf direction, right is default
       */

    }, {
      key: "leaf",
      value: function leaf() {
        var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Toolbox.LEAF_DIRECTIONS.RIGHT;
        var childNodes = this.nodes.toolbox.childNodes;
        /**
         * If activeButtonIndex === -1 then we have no chosen Tool in Toolbox
         */

        if (this.activeButtonIndex === -1) {
          /**
           * Normalize "previous" Tool index depending on direction.
           * We need to do this to highlight "first" Tool correctly
           *
           * Order of Tools: [0] [1] ... [n - 1]
           *   [0 = n] because of: n % n = 0 % n
           *
           * Direction 'right': for [0] the [n - 1] is a previous index
           *   [n - 1] -> [0]
           *
           * Direction 'left': for [n - 1] the [0] is a previous index
           *   [n - 1] <- [0]
           *
           * @type {number}
           */
          this.activeButtonIndex = direction === Toolbox.LEAF_DIRECTIONS.RIGHT ? -1 : 0;
        } else {
          /**
           * If we have chosen Tool then remove highlighting
           */
          childNodes[this.activeButtonIndex].classList.remove(Toolbox.CSS.toolboxButtonActive);
        }
        /**
         * Count index for next Tool
         */


        if (direction === Toolbox.LEAF_DIRECTIONS.RIGHT) {
          /**
           * If we go right then choose next (+1) Tool
           * @type {number}
           */
          this.activeButtonIndex = (this.activeButtonIndex + 1) % childNodes.length;
        } else {
          /**
           * If we go left then choose previous (-1) Tool
           * Before counting module we need to add length before because of "The JavaScript Modulo Bug"
           * @type {number}
           */
          this.activeButtonIndex = (childNodes.length + this.activeButtonIndex - 1) % childNodes.length;
        }
        /**
         * Highlight new chosen Tool
         */


        childNodes[this.activeButtonIndex].classList.add(Toolbox.CSS.toolboxButtonActive);
      }
      /**
       * get tool name when it is selected
       * In case when nothing selection returns null
       *
       * @return {String|null}
       */

    }, {
      key: "addTools",

      /**
       * Iterates available tools and appends them to the Toolbox
       */
      value: function addTools() {
        var tools = this.Editor.Tools.available;

        for (var toolName in tools) {
          if (tools.hasOwnProperty(toolName)) {
            this.addTool(toolName, tools[toolName]);
          }
        }
      }
      /**
       * Append Tool to the Toolbox
       *
       * @param {string} toolName - tool name
       * @param {BlockToolConstructable} tool - tool class
       */

    }, {
      key: "addTool",
      value: function addTool(toolName, tool) {
        var _this2 = this;

        var api = this.Editor.Tools.apiSettings;
        var toolToolboxSettings = tool[api.TOOLBOX];
        /**
         * Skip tools that don't pass 'toolbox' property
         */

        if (_utils.default.isEmpty(toolToolboxSettings)) {
          return;
        }

        if (toolToolboxSettings && !toolToolboxSettings.icon) {
          _utils.default.log('Toolbar icon is missed. Tool %o skipped', 'warn', toolName);

          return;
        }
        /**
         * @todo Add checkup for the render method
         */
        // if (typeof tool.render !== 'function') {
        //   _.log('render method missed. Tool %o skipped', 'warn', tool);
        //   return;
        // }


        var _this$Editor$Tools$ge = this.Editor.Tools.getToolSettings(toolName),
            _this$Editor$Tools$ge2 = _this$Editor$Tools$ge.toolbox,
            userToolboxSettings = _this$Editor$Tools$ge2 === void 0 ? {} : _this$Editor$Tools$ge2;

        var button = _dom.default.make('li', [Toolbox.CSS.toolboxButton], {
          title: userToolboxSettings.title || toolToolboxSettings.title || toolName
        });

        button.dataset.tool = toolName;
        button.innerHTML = userToolboxSettings.icon || toolToolboxSettings.icon;

        _dom.default.append(this.nodes.toolbox, button);

        this.nodes.toolbox.appendChild(button);
        this.nodes.buttons.push(button);
        /**
         * Add click listener
         */

        this.Editor.Listeners.on(button, 'click', function (event) {
          _this2.toolButtonActivate(event, toolName);
        });
        /**
         * Enable shortcut
         */

        var toolSettings = this.Editor.Tools.getToolSettings(toolName);

        if (toolSettings && toolSettings[this.Editor.Tools.apiSettings.SHORTCUT]) {
          this.enableShortcut(tool, toolName, toolSettings[this.Editor.Tools.apiSettings.SHORTCUT]);
        }
        /** Increment Tools count */


        this.displayedToolsCount++;
      }
      /**
       * Enable shortcut Block Tool implemented shortcut
       * @param {BlockToolConstructable} tool - Tool class
       * @param {String} toolName - Tool name
       * @param {String} shortcut - shortcut according to the ShortcutData Module format
       */

    }, {
      key: "enableShortcut",
      value: function enableShortcut(tool, toolName, shortcut) {
        var _this3 = this;

        this.Editor.Shortcuts.add({
          name: shortcut,
          handler: function handler(event) {
            event.preventDefault();

            _this3.insertNewBlock(tool, toolName);
          }
        });
      }
      /**
       * Inserts new block
       * Can be called when button clicked on Toolbox or by ShortcutData
       *
       * @param {BlockToolConstructable} tool - Tool Class
       * @param {String} toolName - Tool name
       */

    }, {
      key: "insertNewBlock",
      value: function insertNewBlock(tool, toolName) {
        var _this$Editor = this.Editor,
            BlockManager = _this$Editor.BlockManager,
            Caret = _this$Editor.Caret;
        /**
         * @type {Block}
         */

        var currentBlock = BlockManager.currentBlock;
        var newBlock;

        if (currentBlock.isEmpty) {
          newBlock = BlockManager.replace(toolName);
        } else {
          newBlock = BlockManager.insert(toolName);
        }
        /**
         * Apply callback before inserting html
         */


        newBlock.call('appendCallback', {});
        this.Editor.Caret.setToBlock(newBlock);
        /** If new block doesn't contain inpus, insert new paragraph above */

        if (newBlock.inputs.length === 0) {
          if (newBlock === BlockManager.lastBlock) {
            BlockManager.insertAtEnd();
            Caret.setToBlock(BlockManager.lastBlock);
          } else {
            Caret.setToBlock(BlockManager.nextBlock);
          }
        }
        /**
         * close toolbar when node is changed
         */


        this.Editor.Toolbar.close();
      }
    }, {
      key: "getActiveTool",
      get: function get() {
        var childNodes = this.nodes.toolbox.childNodes;

        if (this.activeButtonIndex === -1) {
          return null;
        }

        return childNodes[this.activeButtonIndex].dataset.tool;
      }
      /**
       * Returns True if Toolbox is Empty and nothing to show
       * @return {boolean}
       */

    }, {
      key: "isEmpty",
      get: function get() {
        return this.displayedToolsCount === 0;
      }
    }], [{
      key: "CSS",
      get: function get() {
        return {
          toolbox: 'ce-toolbox',
          toolboxButton: 'ce-toolbox__button',
          toolboxButtonActive: 'ce-toolbox__button--active',
          toolboxOpened: 'ce-toolbox--opened'
        };
      }
    }]);
    return Toolbox;
  }(_module.default);

  _exports.default = Toolbox;
  Toolbox.displayName = "Toolbox";
  Toolbox.LEAF_DIRECTIONS = {
    RIGHT: 'right',
    LEFT: 'left'
  };
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/tools.ts":
/*!*****************************************!*\
  !*** ./src/components/modules/tools.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"), __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"), __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../tools/paragraph/dist/bundle */ "./src/components/tools/paragraph/dist/bundle.js"), __webpack_require__(/*! ../__module */ "./src/components/__module.ts"), __webpack_require__(/*! ../utils */ "./src/components/utils.ts"), __webpack_require__(/*! ../inline-tools/inline-tool-bold */ "./src/components/inline-tools/inline-tool-bold.ts"), __webpack_require__(/*! ../inline-tools/inline-tool-italic */ "./src/components/inline-tools/inline-tool-italic.ts"), __webpack_require__(/*! ../inline-tools/inline-tool-link */ "./src/components/inline-tools/inline-tool-link.ts"), __webpack_require__(/*! ../tools/stub */ "./src/components/tools/stub/index.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _slicedToArray2, _typeof2, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _bundle, _module, _utils, _inlineToolBold, _inlineToolItalic, _inlineToolLink, _stub) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);
  _typeof2 = _interopRequireDefault(_typeof2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _bundle = _interopRequireDefault(_bundle);
  _module = _interopRequireDefault(_module);
  _utils = _interopRequireDefault(_utils);
  _inlineToolBold = _interopRequireDefault(_inlineToolBold);
  _inlineToolItalic = _interopRequireDefault(_inlineToolItalic);
  _inlineToolLink = _interopRequireDefault(_inlineToolLink);
  _stub = _interopRequireDefault(_stub);

  /**
   * @module Codex Editor Tools Submodule
   *
   * Creates Instances from Plugins and binds external config to the instances
   */

  /**
   * Class properties:
   *
   * @typedef {Tools} Tools
   * @property {Tools[]} toolsAvailable - available Tools
   * @property {Tools[]} toolsUnavailable - unavailable Tools
   * @property {object} toolsClasses - all classes
   * @property {object} toolsSettings - Tools settings
   * @property {EditorConfig} config - Editor config
   */
  var Tools =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(Tools, _Module);

    /**
     * @constructor
     *
     * @param {EditorConfig} config
     */
    function Tools(_ref) {
      var _this;

      var config = _ref.config;
      (0, _classCallCheck2.default)(this, Tools);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Tools).call(this, {
        config: config
      }));
      /**
       * Name of Stub Tool
       * Stub Tool is used to substitute unavailable block Tools and store their data
       * @type {string}
       */

      _this.stubTool = 'stub';
      /**
       * Map {name: Class, ...} where:
       *  name — block type name in JSON. Got from EditorConfig.tools keys
       * @type {Object}
       */

      _this.toolsClasses = {};
      /**
       * Tools` classes available to use
       */

      _this.toolsAvailable = {};
      /**
       * Tools` classes not availbale to use beacause of preparation failure
       */

      _this.toolsUnavailable = {};
      /**
       * Tools settings in a map {name: settings, ...}
       * @type {Object}
       */

      _this.toolsSettings = {};
      /**
       * Cache for the prepared inline tools
       * @type {null|object}
       * @private
       */

      _this._inlineTools = {};
      _this.toolsClasses = {};
      _this.toolsSettings = {};
      /**
       * Available tools list
       * {name: Class, ...}
       * @type {Object}
       */

      _this.toolsAvailable = {};
      /**
       * Tools that rejected a prepare method
       * {name: Class, ... }
       * @type {Object}
       */

      _this.toolsUnavailable = {};
      _this._inlineTools = null;
      return _this;
    }
    /**
     * Returns available Tools
     * @return {Tool[]}
     */


    (0, _createClass2.default)(Tools, [{
      key: "prepare",

      /**
       * Creates instances via passed or default configuration
       * @return {Promise}
       */
      value: function prepare() {
        var _this2 = this;

        /**
         * Assign internal tools
         */
        Object.assign(this.config.tools, this.internalTools);

        if (!this.config.hasOwnProperty('tools') || Object.keys(this.config.tools).length === 0) {
          throw Error('Can\'t start without tools');
        }
        /**
         * Save Tools settings to a map
         */


        for (var toolName in this.config.tools) {
          /**
           * If Tool is an object not a Tool's class then
           * save class and settings separately
           */
          if ((0, _typeof2.default)(this.config.tools[toolName]) === 'object') {
            /**
             * Save Tool's class from 'class' field
             * @type {Tool}
             */
            this.toolsClasses[toolName] = this.config.tools[toolName].class;
            /**
             * Save Tool's settings
             * @type {ToolSettings}
             */

            this.toolsSettings[toolName] = this.config.tools[toolName];
            /**
             * Remove Tool's class from settings
             */

            delete this.toolsSettings[toolName].class;
          } else {
            /**
             * Save Tool's class
             * @type {Tool}
             */
            this.toolsClasses[toolName] = this.config.tools[toolName];
            /**
             * Set empty settings for Block by default
             * @type {{}}
             */

            this.toolsSettings[toolName] = {
              class: this.config.tools[toolName]
            };
          }
        }
        /**
         * getting classes that has prepare method
         */


        var sequenceData = this.getListOfPrepareFunctions();
        /**
         * if sequence data contains nothing then resolve current chain and run other module prepare
         */

        if (sequenceData.length === 0) {
          return Promise.resolve();
        }
        /**
         * to see how it works {@link Util#sequence}
         */


        return _utils.default.sequence(sequenceData, function (data) {
          _this2.success(data);
        }, function (data) {
          _this2.fallback(data);
        });
      }
      /**
       * @param {ChainData.data} data - append tool to available list
       */

    }, {
      key: "success",
      value: function success(data) {
        this.toolsAvailable[data.toolName] = this.toolsClasses[data.toolName];
      }
      /**
       * @param {ChainData.data} data - append tool to unavailable list
       */

    }, {
      key: "fallback",
      value: function fallback(data) {
        this.toolsUnavailable[data.toolName] = this.toolsClasses[data.toolName];
      }
      /**
       * Return Tool`s instance
       *
       * @param {String} tool — tool name
       * @param {BlockToolData} data — initial data
       * @return {BlockTool}
       */

    }, {
      key: "construct",
      value: function construct(tool, data) {
        var plugin = this.toolsClasses[tool];
        /**
         * Configuration to be passed to the Tool's constructor
         */

        var config = this.toolsSettings[tool][this.apiSettings.CONFIG];
        /**
         * @type {{api: API, config: ({}), data: BlockToolData}}
         */

        var constructorOptions = {
          api: this.Editor.API.methods,
          config: config || {},
          data: data
        };
        return new plugin(constructorOptions);
      }
      /**
       * Return Inline Tool's instance
       *
       * @param {InlineTool} tool
       * @return {InlineTool} — instance
       */

    }, {
      key: "constructInline",
      value: function constructInline(tool) {
        /**
         * @type {{api: API}}
         */
        var constructorOptions = {
          api: this.Editor.API.methods
        };
        return new tool(constructorOptions);
      }
      /**
       * Check if passed Tool is an instance of Initial Block Tool
       * @param {Tool} tool - Tool to check
       * @return {Boolean}
       */

    }, {
      key: "isInitial",
      value: function isInitial(tool) {
        return tool instanceof this.available[this.config.initialBlock];
      }
      /**
       * Return Tool's config by name
       * @param {string} toolName
       * @return {ToolSettings}
       */

    }, {
      key: "getToolSettings",
      value: function getToolSettings(toolName) {
        return this.toolsSettings[toolName];
      }
      /**
       * Binds prepare function of plugins with user or default config
       * @return {Array} list of functions that needs to be fired sequentially
       */

    }, {
      key: "getListOfPrepareFunctions",
      value: function getListOfPrepareFunctions() {
        var toolPreparationList = [];

        for (var toolName in this.toolsClasses) {
          if (this.toolsClasses.hasOwnProperty(toolName)) {
            var toolClass = this.toolsClasses[toolName];

            if (typeof toolClass.prepare === 'function') {
              toolPreparationList.push({
                function: toolClass.prepare,
                data: {
                  toolName: toolName,
                  config: this.toolsSettings[toolName][this.apiSettings.CONFIG]
                }
              });
            } else {
              /**
               * If Tool hasn't a prepare method, mark it as available
               */
              this.toolsAvailable[toolName] = toolClass;
            }
          }
        }

        return toolPreparationList;
      }
      /**
       * Returns internal tools
       * Includes Bold, Italic, Link and Paragraph
       */

    }, {
      key: "available",
      get: function get() {
        return this.toolsAvailable;
      }
      /**
       * Returns unavailable Tools
       * @return {Tool[]}
       */

    }, {
      key: "unavailable",
      get: function get() {
        return this.toolsUnavailable;
      }
      /**
       * Return Tools for the Inline Toolbar
       * @return {Object} - object of Inline Tool's classes
       */

    }, {
      key: "inline",
      get: function get() {
        var _this3 = this;

        if (this._inlineTools) {
          return this._inlineTools;
        }

        var tools = Object.entries(this.available).filter(function (_ref2) {
          var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
              name = _ref3[0],
              tool = _ref3[1];

          if (!tool[_this3.apiSettings.IS_INLINE]) {
            return false;
          }
          /**
           * Some Tools validation
           */


          var inlineToolRequiredMethods = ['render', 'surround', 'checkState'];
          var notImplementedMethods = inlineToolRequiredMethods.filter(function (method) {
            return !_this3.constructInline(tool)[method];
          });

          if (notImplementedMethods.length) {
            _utils.default.log("Incorrect Inline Tool: ".concat(tool.name, ". Some of required methods is not implemented %o"), 'warn', notImplementedMethods);

            return false;
          }

          return true;
        });
        /**
         * collected inline tools with key of tool name
         */

        var result = {};
        tools.forEach(function (_ref4) {
          var _ref5 = (0, _slicedToArray2.default)(_ref4, 2),
              name = _ref5[0],
              tool = _ref5[1];

          return result[name] = tool;
        });
        /**
         * Cache prepared Tools
         */

        this._inlineTools = result;
        return this._inlineTools;
      }
      /**
       * Return editor block tools
       */

    }, {
      key: "blockTools",
      get: function get() {
        var _this4 = this;

        // eslint-disable-next-line no-unused-vars
        var tools = Object.entries(this.available).filter(function (_ref6) {
          var _ref7 = (0, _slicedToArray2.default)(_ref6, 2),
              name = _ref7[0],
              tool = _ref7[1];

          return !tool[_this4.apiSettings.IS_INLINE];
        });
        /**
         * collected block tools with key of tool name
         */

        var result = {};
        tools.forEach(function (_ref8) {
          var _ref9 = (0, _slicedToArray2.default)(_ref8, 2),
              name = _ref9[0],
              tool = _ref9[1];

          return result[name] = tool;
        });
        return result;
      }
      /**
       * Constant for available Tools Settings
       * @return {object}
       */

    }, {
      key: "apiSettings",
      get: function get() {
        return {
          CONFIG: 'config',
          IS_ENABLED_INLINE_TOOLBAR: 'inlineToolbar',
          IS_ENABLED_LINE_BREAKS: 'enableLineBreaks',
          IS_INLINE: 'isInline',
          IS_PASTE_DISALLOWED: 'disallowPaste',
          SHORTCUT: 'shortcut',
          TOOLBOX: 'toolbox',
          SANITIZE_CONFIG: 'sanitize'
        };
      }
    }, {
      key: "internalTools",
      get: function get() {
        return {
          bold: _inlineToolBold.default,
          italic: _inlineToolItalic.default,
          link: _inlineToolLink.default,
          paragraph: {
            class: _bundle.default,
            inlineToolbar: true
          },
          stub: _stub.default
        };
      }
    }]);
    return Tools;
  }(_module.default);

  _exports.default = Tools;
  Tools.displayName = "Tools";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/modules/ui.ts":
/*!**************************************!*\
  !*** ./src/components/modules/ui.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"), __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! ../../../dist/sprite.svg */ "./dist/sprite.svg"), __webpack_require__(/*! ../__module */ "./src/components/__module.ts"), __webpack_require__(/*! ../dom */ "./src/components/dom.ts"), __webpack_require__(/*! ../utils */ "./src/components/utils.ts"), __webpack_require__(/*! ../selection */ "./src/components/selection.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _regenerator, _asyncToGenerator2, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _sprite, _module, _dom, _utils, _selection) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _sprite = _interopRequireDefault(_sprite);
  _module = _interopRequireDefault(_module);
  _dom = _interopRequireDefault(_dom);
  _utils = _interopRequireDefault(_utils);
  _selection = _interopRequireDefault(_selection);

  /**
   * Prebuilded sprite of SVG icons
   */

  /**
   * Module UI
   *
   * @type {UI}
   */

  /**
   * @class
   *
   * @classdesc Makes CodeX Editor UI:
   *                <codex-editor>
   *                    <ce-redactor />
   *                    <ce-toolbar />
   *                    <ce-inline-toolbar />
   *                </codex-editor>
   *
   * @typedef {UI} UI
   * @property {EditorConfig} config   - editor configuration {@link CodexEditor#configuration}
   * @property {Object} Editor         - available editor modules {@link CodexEditor#moduleInstances}
   * @property {Object} nodes          -
   * @property {Element} nodes.holder  - element where we need to append redactor
   * @property {Element} nodes.wrapper  - <codex-editor>
   * @property {Element} nodes.redactor - <ce-redactor>
   */
  var UI =
  /*#__PURE__*/
  function (_Module) {
    (0, _inherits2.default)(UI, _Module);

    function UI() {
      var _this;

      (0, _classCallCheck2.default)(this, UI);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(UI).apply(this, arguments));
      /**
       * HTML Elements used for UI
       */

      _this.nodes = {
        holder: null,
        wrapper: null,
        redactor: null
      };
      return _this;
    }
    /**
     * CodeX Editor UI CSS class names
     * @return {{editorWrapper: string, editorZone: string}}
     */


    (0, _createClass2.default)(UI, [{
      key: "addLoader",

      /**
       * Adds loader to editor while content is not ready
       */
      value: function addLoader() {
        this.nodes.loader = _dom.default.make('div', this.CSS.editorLoader);
        this.nodes.wrapper.prepend(this.nodes.loader);
        this.nodes.redactor.classList.add(this.CSS.editorZoneHidden);
      }
      /**
       * Removes loader when content has loaded
       */

    }, {
      key: "removeLoader",
      value: function removeLoader() {
        this.nodes.loader.remove();
        this.nodes.redactor.classList.remove(this.CSS.editorZoneHidden);
      }
      /**
       * Making main interface
       */

    }, {
      key: "prepare",
      value: function () {
        var _prepare = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.make();

                case 2:
                  this.addLoader();
                  /**
                   * Append SVG sprite
                   */

                  _context.next = 5;
                  return this.appendSVGSprite();

                case 5:
                  _context.next = 7;
                  return this.Editor.Toolbar.make();

                case 7:
                  _context.next = 9;
                  return this.Editor.InlineToolbar.make();

                case 9:
                  _context.next = 11;
                  return this.loadStyles();

                case 11:
                  _context.next = 13;
                  return this.bindEvents();

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function prepare() {
          return _prepare.apply(this, arguments);
        };
      }()
      /**
       * Clean editor`s UI
       */

    }, {
      key: "destroy",
      value: function destroy() {
        this.nodes.holder.innerHTML = '';
      }
      /**
       * Makes CodeX Editor interface
       * @return {Promise<void>}
       */

    }, {
      key: "make",
      value: function () {
        var _make = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2() {
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  /**
                   * Element where we need to append CodeX Editor
                   * @type {Element}
                   */
                  this.nodes.holder = document.getElementById(this.config.holderId);

                  if (this.nodes.holder) {
                    _context2.next = 3;
                    break;
                  }

                  throw Error('Holder wasn\'t found by ID: #' + this.config.holderId);

                case 3:
                  /**
                   * Create and save main UI elements
                   */
                  this.nodes.wrapper = _dom.default.make('div', this.CSS.editorWrapper);
                  this.nodes.redactor = _dom.default.make('div', this.CSS.editorZone);
                  this.nodes.wrapper.appendChild(this.nodes.redactor);
                  this.nodes.holder.appendChild(this.nodes.wrapper);

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function make() {
          return _make.apply(this, arguments);
        };
      }()
      /**
       * Appends CSS
       */

    }, {
      key: "loadStyles",
      value: function loadStyles() {
        /**
         * Load CSS
         */
        var styles = __webpack_require__(/*! ../../styles/main.css */ "./src/styles/main.css");
        /**
         * Make tag
         */


        var tag = _dom.default.make('style', null, {
          textContent: styles.toString()
        });
        /**
         * Append styles at the top of HEAD tag
         */


        _dom.default.prepend(document.head, tag);
      }
      /**
       * Bind events on the CodeX Editor interface
       */

    }, {
      key: "bindEvents",
      value: function bindEvents() {
        var _this2 = this;

        this.Editor.Listeners.on(this.nodes.redactor, 'click', function (event) {
          return _this2.redactorClicked(event);
        }, false);
        this.Editor.Listeners.on(document, 'keydown', function (event) {
          return _this2.documentKeydown(event);
        }, true);
        this.Editor.Listeners.on(document, 'click', function (event) {
          return _this2.documentClicked(event);
        }, false);
      }
      /**
       * All keydowns on document
       * @param {Event} event
       */

    }, {
      key: "documentKeydown",
      value: function documentKeydown(event) {
        switch (event.keyCode) {
          case _utils.default.keyCodes.ENTER:
            this.enterPressed(event);
            break;

          default:
            this.defaultBehaviour(event);
            break;
        }
      }
      /**
       * Ignore all other document's keydown events
       * @param {KeyboardEvent} event
       */

    }, {
      key: "defaultBehaviour",
      value: function defaultBehaviour(event) {
        var keyDownOnEditor = event.target.closest(".".concat(this.CSS.editorWrapper));
        /**
         * Ignore keydowns on document
         * clear pointer and close toolbar
         */

        if (!keyDownOnEditor) {
          /**
           * Remove all highlights and remove caret
           */
          this.Editor.BlockManager.dropPointer();
          /**
           * Close Toolbar
           */

          this.Editor.Toolbar.close();
        }
      }
      /**
       * Enter pressed on document
       * @param event
       */

    }, {
      key: "enterPressed",
      value: function enterPressed(event) {
        var hasPointerToBlock = this.Editor.BlockManager.currentBlockIndex >= 0;

        if (this.Editor.BlockSelection.anyBlockSelected) {
          return;
        }
        /**
         * If Caret is not set anywhere, event target on Enter is always Element that we handle
         * In our case it is document.body
         *
         * So, BlockManager points some Block and Enter press is on Body
         * We can create a new block
         */


        if (hasPointerToBlock && event.target.tagName === 'BODY') {
          /**
           * Insert initial typed Block
           */
          var newBlock = this.Editor.BlockManager.insert();
          this.Editor.Caret.setToBlock(newBlock);
          /**
           * And highlight
           */

          this.Editor.BlockManager.highlightCurrentNode();
          /**
           * Move toolbar and show plus button because new Block is empty
           */

          this.Editor.Toolbar.move();
          this.Editor.Toolbar.plusButton.show();
        }

        this.Editor.BlockSelection.clearSelection();
      }
      /**
       * All clicks on document
       * @param {MouseEvent} event - Click
       */

    }, {
      key: "documentClicked",
      value: function documentClicked(event) {
        /**
         * Close Inline Toolbar when nothing selected
         * Do not fire check on clicks at the Inline Toolbar buttons
         */
        var target = event.target;
        var clickedOnInlineToolbarButton = target.closest(".".concat(this.Editor.InlineToolbar.CSS.inlineToolbar));
        var clickedInsideofEditor = target.closest(".".concat(this.CSS.editorWrapper));
        /** Clear highlightings and pointer on BlockManager */

        if (!clickedInsideofEditor && !_selection.default.isAtEditor) {
          this.Editor.BlockManager.dropPointer();
          this.Editor.Toolbar.close();
        }

        if (!clickedOnInlineToolbarButton) {
          this.Editor.InlineToolbar.handleShowingEvent(event);
        }

        if (_selection.default.isAtEditor) {
          this.Editor.BlockManager.setCurrentBlockByChildNode(_selection.default.anchorNode);
        }
        /** Clear selection */


        this.Editor.BlockSelection.clearSelection();
      }
      /**
       * All clicks on the redactor zone
       *
       * @param {MouseEvent} event
       *
       * @description
       * 1. Save clicked Block as a current {@link BlockManager#currentNode}
       *      it uses for the following:
       *      - add CSS modifier for the selected Block
       *      - on Enter press, we make a new Block under that
       *
       * 2. Move and show the Toolbar
       *
       * 3. Set a Caret
       *
       * 4. By clicks on the Editor's bottom zone:
       *      - if last Block is empty, set a Caret to this
       *      - otherwise, add a new empty Block and set a Caret to that
       *
       * 5. Hide the Inline Toolbar
       *
       * @see selectClickedBlock
       *
       */

    }, {
      key: "redactorClicked",
      value: function redactorClicked(event) {
        if (!_selection.default.isCollapsed) {
          return;
        }

        var clickedNode = event.target;
        /**
         * If click was fired is on Editor`s wrapper, try to get clicked node by elementFromPoint method
         */

        if (clickedNode === this.nodes.redactor) {
          clickedNode = document.elementFromPoint(event.clientX, event.clientY);
        }
        /**
         * Select clicked Block as Current
         */


        try {
          /**
           * Renew Current Block
           */
          this.Editor.BlockManager.setCurrentBlockByChildNode(clickedNode);
          /**
           * Highlight Current Node
           */

          this.Editor.BlockManager.highlightCurrentNode();
        } catch (e) {
          /**
           * If clicked outside first-level Blocks, set Caret to the last empty Block
           */
          this.Editor.Caret.setToTheLastBlock();
        }

        event.stopImmediatePropagation();
        event.stopPropagation();
        /**
         * Move and open toolbar
         */

        this.Editor.Toolbar.open();
        /**
         * Hide the Plus Button
         */

        this.Editor.Toolbar.plusButton.hide();

        if (!this.Editor.BlockManager.currentBlock) {
          this.Editor.BlockManager.insert();
        }
        /**
         * Show the Plus Button if:
         * - Block is an initial-block (Text)
         * - Block is empty
         */


        var isInitialBlock = this.Editor.Tools.isInitial(this.Editor.BlockManager.currentBlock.tool);

        if (isInitialBlock) {
          /**
           * Check isEmpty only for paragraphs to prevent unnecessary tree-walking on Tools with many nodes (for ex. Table)
           */
          var isEmptyBlock = this.Editor.BlockManager.currentBlock.isEmpty;

          if (isEmptyBlock) {
            this.Editor.Toolbar.plusButton.show();
          }
        }
        /** Clear selection */


        this.Editor.BlockSelection.clearSelection();
      }
      /**
       * Append prebuilded sprite with SVG icons
       */

    }, {
      key: "appendSVGSprite",
      value: function appendSVGSprite() {
        var spriteHolder = _dom.default.make('div');

        spriteHolder.hidden = true;
        spriteHolder.style.display = 'none';
        spriteHolder.innerHTML = _sprite.default;

        _dom.default.append(this.nodes.wrapper, spriteHolder);
      }
    }, {
      key: "CSS",
      get: function get() {
        return {
          editorWrapper: 'codex-editor',
          editorZone: 'codex-editor__redactor',
          editorZoneHidden: 'codex-editor__redactor--hidden',
          editorLoader: 'codex-editor__loader'
        };
      }
    }]);
    return UI;
  }(_module.default);

  _exports.default = UI;
  UI.displayName = "UI";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/polyfills.ts":
/*!*************************************!*\
  !*** ./src/components/polyfills.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  'use strict';
  /**
   * The Element.matches() method returns true if the element
   * would be selected by the specified selector string;
   * otherwise, returns false.
   *
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill}
   */

  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s);
      var i = matches.length;

      while (--i >= 0 && matches.item(i) !== this) {}

      return i > -1;
    };
  }
  /**
   * The Element.closest() method returns the closest ancestor
   * of the current element (or the current element itself) which
   * matches the selectors given in parameter.
   * If there isn't such an ancestor, it returns null.
   *
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill}
   */


  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      if (!document.documentElement.contains(el)) {
        return null;
      }

      do {
        if (el.matches(s)) {
          return el;
        }

        el = el.parentElement || el.parentNode;
      } while (el !== null);

      return null;
    };
  }
  /**
   * The ParentNode.prepend method inserts a set of Node objects
   * or DOMString objects before the first child of the ParentNode.
   * DOMString objects are inserted as equivalent Text nodes.
   *
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend#Polyfill}
   */


  if (!Element.prototype.prepend) {
    Element.prototype.prepend = function prepend(nodes) {
      var docFrag = document.createDocumentFragment();

      if (!Array.isArray(nodes)) {
        nodes = [nodes];
      }

      nodes.forEach(function (node) {
        var isNode = node instanceof Node;
        docFrag.appendChild(isNode ? node : document.createTextNode(String(node)));
      });
      this.insertBefore(docFrag, this.firstChild);
    };
  }
});

/***/ }),

/***/ "./src/components/selection.ts":
/*!*************************************!*\
  !*** ./src/components/selection.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! ./utils */ "./src/components/utils.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _utils) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _utils = _interopRequireDefault(_utils);

  /**
   * TextRange interface fot IE9-
   */

  /**
   * Working with selection
   * @typedef {SelectionUtils} SelectionUtils
   */
  var SelectionUtils =
  /*#__PURE__*/
  function () {
    function SelectionUtils() {
      (0, _classCallCheck2.default)(this, SelectionUtils);
      this.instance = null;
      this.selection = null;
      /**
       * This property can store SelectionUtils's range for restoring later
       * @type {Range|null}
       */

      this.savedSelectionRange = null;
      /**
       * Fake background is active
       *
       * @return {boolean}
       */

      this.isFakeBackgroundEnabled = false;
      /**
       * Native Document's commands for fake background
       */

      this.commandBackground = 'backColor';
      this.commandRemoveFormat = 'removeFormat';
    }
    /**
     * Editor styles
     * @return {{editorWrapper: string, editorZone: string}}
     */


    (0, _createClass2.default)(SelectionUtils, [{
      key: "removeFakeBackground",

      /**
       * Removes fake background
       */
      value: function removeFakeBackground() {
        if (!this.isFakeBackgroundEnabled) {
          return;
        }

        var fakeBack = this.findParentTag('SPAN');
        fakeBack.style.paddingTop = '';
        this.isFakeBackgroundEnabled = false;
        document.execCommand(this.commandRemoveFormat);
      }
      /**
       * Sets fake background
       */

    }, {
      key: "setFakeBackground",
      value: function setFakeBackground() {
        document.execCommand(this.commandBackground, false, '#a8d6ff');
        var fakeBack = this.findParentTag('SPAN'); // The matched value to be slightly compared with the actual height of the selection

        fakeBack.style.paddingTop = '0.30em';
        this.isFakeBackgroundEnabled = true;
      }
      /**
       * Save SelectionUtils's range
       */

    }, {
      key: "save",
      value: function save() {
        this.savedSelectionRange = SelectionUtils.range;
      }
      /**
       * Restore saved SelectionUtils's range
       */

    }, {
      key: "restore",
      value: function restore() {
        if (!this.savedSelectionRange) {
          return;
        }

        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(this.savedSelectionRange);
      }
      /**
       * Clears saved selection
       */

    }, {
      key: "clearSaved",
      value: function clearSaved() {
        this.savedSelectionRange = null;
      }
      /**
       * Looks ahead to find passed tag from current selection
       *
       * @param  {String} tagName       - tag to found
       * @param  {String} [className]   - tag's class name
       * @param  {Number} [searchDepth] - count of tags that can be included. For better performance.
       * @return {HTMLElement|null}
       */

    }, {
      key: "findParentTag",
      value: function findParentTag(tagName, className) {
        var searchDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
        var selection = window.getSelection();
        var parentTag = null;
        /**
         * If selection is missing or no anchorNode or focusNode were found then return null
         */

        if (!selection || !selection.anchorNode || !selection.focusNode) {
          return null;
        }
        /**
         * Define Nodes for start and end of selection
         */


        var boundNodes = [
        /** the Node in which the selection begins */
        selection.anchorNode,
        /** the Node in which the selection ends */
        selection.focusNode];
        /**
         * For each selection parent Nodes we try to find target tag [with target class name]
         * It would be saved in parentTag variable
         */

        boundNodes.forEach(function (parent) {
          /** Reset tags limit */
          var searchDepthIterable = searchDepth;

          while (searchDepthIterable > 0 && parent.parentNode) {
            /**
             * Check tag's name
             */
            if (parent.tagName === tagName) {
              /**
               * Save the result
               */
              parentTag = parent;
              /**
               * Optional additional check for class-name mismatching
               */

              if (className && parent.classList && !parent.classList.contains(className)) {
                parentTag = null;
              }
              /**
               * If we have found required tag with class then go out from the cycle
               */


              if (parentTag) {
                break;
              }
            }
            /**
             * Target tag was not found. Go up to the parent and check it
             */


            parent = parent.parentNode;
            searchDepthIterable--;
          }
        });
        /**
         * Return found tag or null
         */

        return parentTag;
      }
      /**
       * Expands selection range to the passed parent node
       *
       * @param {HTMLElement} element
       */

    }, {
      key: "expandToTag",
      value: function expandToTag(element) {
        var selection = window.getSelection();
        selection.removeAllRanges();
        var range = document.createRange();
        range.selectNodeContents(element);
        selection.addRange(range);
      }
    }], [{
      key: "get",

      /**
       * Returns window SelectionUtils
       * {@link https://developer.mozilla.org/ru/docs/Web/API/Window/getSelection}
       * @return {Selection}
       */
      value: function get() {
        return window.getSelection();
      }
    }, {
      key: "CSS",
      get: function get() {
        return {
          editorWrapper: 'codex-editor',
          editorZone: 'codex-editor__redactor'
        };
      }
      /**
       * Returns selected anchor
       * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorNode}
       * @return {Node|null}
       */

    }, {
      key: "anchorNode",
      get: function get() {
        var selection = window.getSelection();
        return selection ? selection.anchorNode : null;
      }
      /**
       * Returns selection offset according to the anchor node
       * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorOffset}
       * @return {Number|null}
       */

    }, {
      key: "anchorOffset",
      get: function get() {
        var selection = window.getSelection();
        return selection ? selection.anchorOffset : null;
      }
      /**
       * Is current selection range collapsed
       * @return {boolean|null}
       */

    }, {
      key: "isCollapsed",
      get: function get() {
        var selection = window.getSelection();
        return selection ? selection.isCollapsed : null;
      }
      /**
       * Check current selection if it is at Editor's zone
       * @return {boolean}
       */

    }, {
      key: "isAtEditor",
      get: function get() {
        var selection = SelectionUtils.get();
        /**
         * Something selected on document
         */

        var selectedNode = selection.anchorNode || selection.focusNode;

        if (selectedNode && selectedNode.nodeType === Node.TEXT_NODE) {
          selectedNode = selectedNode.parentNode;
        }

        var editorZone = null;

        if (selectedNode) {
          editorZone = selectedNode.closest(".".concat(SelectionUtils.CSS.editorZone));
        }
        /**
         * SelectionUtils is not out of Editor because Editor's wrapper was found
         */


        return editorZone && editorZone.nodeType === Node.ELEMENT_NODE;
      }
      /**
       * Return first range
       * @return {Range|null}
       */

    }, {
      key: "range",
      get: function get() {
        var selection = window.getSelection();
        return selection && selection.rangeCount ? selection.getRangeAt(0) : null;
      }
      /**
       * Calculates position and size of selected text
       * @return {{x, y, width, height, top?, left?, bottom?, right?}}
       */

    }, {
      key: "rect",
      get: function get() {
        var sel = document.selection,
            range;
        var rect = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };

        if (sel && sel.type !== 'Control') {
          sel = sel;
          range = sel.createRange();
          rect.x = range.boundingLeft;
          rect.y = range.boundingTop;
          rect.width = range.boundingWidth;
          rect.height = range.boundingHeight;
          return rect;
        }

        if (!window.getSelection) {
          _utils.default.log('Method window.getSelection is not supported', 'warn');

          return rect;
        }

        sel = window.getSelection();

        if (sel.rangeCount === null || isNaN(sel.rangeCount)) {
          _utils.default.log('Method SelectionUtils.rangeCount is not supported', 'warn');

          return rect;
        }

        range = sel.getRangeAt(0).cloneRange();

        if (range.getBoundingClientRect) {
          rect = range.getBoundingClientRect();
        } // Fall back to inserting a temporary element


        if (rect.x === 0 && rect.y === 0) {
          var span = document.createElement('span');

          if (span.getBoundingClientRect) {
            // Ensure span has dimensions and position by
            // adding a zero-width space character
            span.appendChild(document.createTextNode("\u200B"));
            range.insertNode(span);
            rect = span.getBoundingClientRect();
            var spanParent = span.parentNode;
            spanParent.removeChild(span); // Glue any broken text nodes back together

            spanParent.normalize();
          }
        }

        return rect;
      }
      /**
       * Returns selected text as String
       * @returns {string}
       */

    }, {
      key: "text",
      get: function get() {
        return window.getSelection ? window.getSelection().toString() : '';
      }
    }]);
    return SelectionUtils;
  }();

  _exports.default = SelectionUtils;
  SelectionUtils.displayName = "SelectionUtils";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/tools/paragraph/dist/bundle.js":
/*!*******************************************************!*\
  !*** ./src/components/tools/paragraph/dist/bundle.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){"use strict";var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();n(1).toString();
/**
 * Base Paragraph Block for the CodeX Editor.
 * Represents simple paragraph
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */
var o=function(){function t(e){var n=e.data,r=(e.config,e.api);!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=r,this._CSS={block:this.api.styles.block,wrapper:"ce-paragraph"},this._data={},this._element=this.drawView(),this.data=n}return r(t,[{key:"drawView",value:function(){var t=document.createElement("DIV");return t.classList.add(this._CSS.wrapper,this._CSS.block),t.contentEditable=!0,t}},{key:"render",value:function(){return this._element}},{key:"merge",value:function(t){var e={text:this.data.text+t.text};this.data=e}},{key:"validate",value:function(t){return""!==t.text.trim()}},{key:"save",value:function(t){return{text:t.innerHTML}}},{key:"onPaste",value:function(t){var e={text:t.detail.data.innerHTML};this.data=e}},{key:"sanitize",get:function(){return{text:{br:!0}}}},{key:"data",get:function(){var t=this._element.innerHTML;return this._data.text=t,this._data},set:function(t){this._data=t||{},this._element.innerHTML=this._data.text||""}}],[{key:"pasteConfig",get:function(){return{tags:["P"]}}}]),t}();t.exports=o},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),a=null,s=0,u=[],f=n(5);function c(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(b(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:s}}}}function l(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function p(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function h(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),v(e,t.attrs),p(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var u=s++;n=a||(a=h(e)),r=m.bind(null,n,u,!1),o=m.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),p(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=l(t,e);return c(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var a=n[i];(s=r[a.id]).refs--,o.push(s)}t&&c(l(t,e),e);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete r[s.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function m(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}])});

/***/ }),

/***/ "./src/components/tools/stub/index.ts":
/*!********************************************!*\
  !*** ./src/components/tools/stub/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! ../../dom */ "./src/components/dom.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _dom) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _dom = _interopRequireDefault(_dom);

  var Stub =
  /*#__PURE__*/
  function () {
    function Stub(_ref) {
      var data = _ref.data,
          config = _ref.config,
          api = _ref.api;
      (0, _classCallCheck2.default)(this, Stub);

      /**
       * Stub styles
       * @type {{wrapper: string; info: string; title: string; subtitle: string}}
       */
      this.CSS = {
        wrapper: 'ce-stub',
        info: 'ce-stub__info',
        title: 'ce-stub__title',
        subtitle: 'ce-stub__subtitle'
      };
      this.title = data.title || 'Error';
      this.subtitle = 'The block can not be displayed correctly.';
      this.savedData = data.savedData;
      this.wrapper = this.make();
    }
    /**
     * Returns stub holder
     * @return {HTMLElement}
     */


    (0, _createClass2.default)(Stub, [{
      key: "render",
      value: function render() {
        return this.wrapper;
      }
      /**
       * Return original Tool data
       * @return {BlockToolData}
       */

    }, {
      key: "save",
      value: function save() {
        return this.savedData;
      }
      /**
       * Create Tool html markup
       * @return {HTMLElement}
       */

    }, {
      key: "make",
      value: function make() {
        var wrapper = _dom.default.make('div', this.CSS.wrapper);

        var icon = _dom.default.svg('sad-face', 52, 52);

        var infoContainer = _dom.default.make('div', this.CSS.info);

        var title = _dom.default.make('div', this.CSS.title, {
          textContent: this.title
        });

        var subtitle = _dom.default.make('div', this.CSS.subtitle, {
          textContent: this.subtitle
        });

        wrapper.appendChild(icon);
        infoContainer.appendChild(title);
        infoContainer.appendChild(subtitle);
        wrapper.appendChild(infoContainer);
        return wrapper;
      }
    }]);
    return Stub;
  }();

  _exports.default = Stub;
  Stub.displayName = "Stub";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/components/utils.ts":
/*!*********************************!*\
  !*** ./src/components/utils.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"), __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! ./dom */ "./src/components/dom.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _regenerator, _asyncToGenerator2, _classCallCheck2, _createClass2, _dom) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _dom = _interopRequireDefault(_dom);

  /**
   * Class Util
   */

  /**
   * Codex Editor Util
   */
  var Util =
  /*#__PURE__*/
  function () {
    function Util() {
      (0, _classCallCheck2.default)(this, Util);
    }

    (0, _createClass2.default)(Util, null, [{
      key: "log",

      /**
       * Custom logger
       *
       * @param {string} msg  - message
       * @param {string} type - logging type 'log'|'warn'|'error'|'info'
       * @param {*} [args]      - argument to log with a message
       * @param {string} style  - additional styling to message
       */
      value: function log(msg) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'log';
        var args = arguments.length > 2 ? arguments[2] : undefined;
        var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'color: inherit';

        if (!('console' in window) || !window.console[type]) {
          return;
        }

        var editorLabelText = "Editor.js ".concat("2.7.22");
        var editorLabelStyle = "line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;";

        try {
          if (['time', 'timeEnd'].includes(type)) {
            console[type]("( ".concat(editorLabelText, " ) ").concat(msg));
          } else if (args) {
            console[type]("%c".concat(editorLabelText, "%c ").concat(msg, " %o"), editorLabelStyle, style, args);
          } else {
            console[type]("%c".concat(editorLabelText, "%c ").concat(msg), editorLabelStyle, style);
          }
        } catch (ignored) {}
      }
      /**
       * Returns basic keycodes as constants
       * @return {{}}
       */

    }, {
      key: "sequence",

      /**
       * Fires a promise sequence asyncronically
       *
       * @param {ChainData[]} chains - list or ChainData's
       * @param {Function} success - success callback
       * @param {Function} fallback - callback that fires in case of errors
       *
       * @return {Promise}
       */
      value: function () {
        var _sequence = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee3(chains) {
          var success,
              fallback,
              waitNextBlock,
              _waitNextBlock,
              _args3 = arguments;

          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _waitNextBlock = function _ref3() {
                    _waitNextBlock = (0, _asyncToGenerator2.default)(
                    /*#__PURE__*/
                    _regenerator.default.mark(function _callee2(chainData, successCallback, fallbackCallback) {
                      return _regenerator.default.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.prev = 0;
                              _context2.next = 3;
                              return chainData.function(chainData.data);

                            case 3:
                              _context2.next = 5;
                              return successCallback(typeof chainData.data !== 'undefined' ? chainData.data : {});

                            case 5:
                              _context2.next = 10;
                              break;

                            case 7:
                              _context2.prev = 7;
                              _context2.t0 = _context2["catch"](0);
                              fallbackCallback(typeof chainData.data !== 'undefined' ? chainData.data : {});

                            case 10:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2, this, [[0, 7]]);
                    }));
                    return _waitNextBlock.apply(this, arguments);
                  };

                  waitNextBlock = function _ref2(_x2, _x3, _x4) {
                    return _waitNextBlock.apply(this, arguments);
                  };

                  success = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : function () {};
                  fallback = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : function () {};
                  _context3.next = 6;
                  return chains.reduce(
                  /*#__PURE__*/
                  function () {
                    var _ref = (0, _asyncToGenerator2.default)(
                    /*#__PURE__*/
                    _regenerator.default.mark(function _callee(previousValue, currentValue) {
                      return _regenerator.default.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return previousValue;

                            case 2:
                              return _context.abrupt("return", waitNextBlock(currentValue, success, fallback));

                            case 3:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee, this);
                    }));

                    return function (_x5, _x6) {
                      return _ref.apply(this, arguments);
                    };
                  }(), Promise.resolve());

                case 6:
                  return _context3.abrupt("return", _context3.sent);

                case 7:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        return function sequence(_x) {
          return _sequence.apply(this, arguments);
        };
      }()
      /**
       * Make array from array-like collection
       *
       * @param {ArrayLike} collection
       *
       * @return {Array}
       */

    }, {
      key: "array",
      value: function array(collection) {
        return Array.prototype.slice.call(collection);
      }
      /**
       * Check if passed variable is a function
       * @param {*} fn
       * @return {boolean}
       */

    }, {
      key: "isFunction",
      value: function isFunction(fn) {
        return typeof fn === 'function';
      }
      /**
       * Check if passed function is a class
       * @param {function} fn
       * @return {boolean}
       */

    }, {
      key: "isClass",
      value: function isClass(fn) {
        return typeof fn === 'function' && /^\s*class\s+/.test(fn.toString());
      }
      /**
       * Checks if object is empty
       *
       * @param {Object} object
       * @return {boolean}
       */

    }, {
      key: "isEmpty",
      value: function isEmpty(object) {
        if (!object) {
          return true;
        }

        return Object.keys(object).length === 0 && object.constructor === Object;
      }
      /**
       * Check if passed object is a Promise
       * @param  {*}  object - object to check
       * @return {Boolean}
       */

    }, {
      key: "isPromise",
      value: function isPromise(object) {
        return Promise.resolve(object) === object;
      }
      /**
       * Delays method execution
       *
       * @param {Function} method
       * @param {Number} timeout
       */

    }, {
      key: "delay",
      value: function delay(method, timeout) {
        return function () {
          var context = this,
              args = arguments;
          window.setTimeout(function () {
            return method.apply(context, args);
          }, timeout);
        };
      }
      /**
       * Get file extension
       *
       * @param {File} file
       * @return string
       */

    }, {
      key: "getFileExtension",
      value: function getFileExtension(file) {
        return file.name.split('.').pop();
      }
      /**
       * Check if string is MIME type
       *
       * @param {string} type
       * @return boolean
       */

    }, {
      key: "isValidMimeType",
      value: function isValidMimeType(type) {
        return /^[-\w]+\/([-+\w]+|\*)$/.test(type);
      }
      /**
       * Debouncing method
       * Call method after passed time
       *
       * Note that this method returns Function and declared variable need to be called
       *
       * @param {Function} func - function that we're throttling
       * @param {Number} wait - time in milliseconds
       * @param {Boolean} immediate - call now
       * @return {Function}
       */

    }, {
      key: "debounce",
      value: function debounce(func, wait, immediate) {
        var _this = this,
            _arguments = arguments;

        var timeout;
        return function () {
          var context = _this,
              args = _arguments;

          var later = function later() {
            timeout = null;

            if (!immediate) {
              func.apply(context, args);
            }
          };

          var callNow = immediate && !timeout;
          window.clearTimeout(timeout);
          timeout = window.setTimeout(later, wait);

          if (callNow) {
            func.apply(context, args);
          }
        };
      }
      /**
       * Copies passed text to the clipboard
       * @param text
       */

    }, {
      key: "copyTextToClipboard",
      value: function copyTextToClipboard(text) {
        var el = _dom.default.make('div', 'codex-editor-clipboard', {
          innerHTML: text
        });

        document.body.appendChild(el);
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNode(el);
        window.getSelection().removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        document.body.removeChild(el);
      }
    }, {
      key: "keyCodes",
      get: function get() {
        return {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          ESC: 27,
          SPACE: 32,
          LEFT: 37,
          UP: 38,
          DOWN: 40,
          RIGHT: 39,
          DELETE: 46,
          META: 91
        };
      }
    }]);
    return Util;
  }();

  _exports.default = Util;
  Util.displayName = "Util";
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":root {\n  /**\n   * Selection color\n   */\n  --selectionColor: #a8d6ff;\n\n  /**\n   * Toolbar buttons\n   */\n  --bg-light: #eff2f5;\n\n  /**\n   * All gray texts: placeholders, settings\n   */\n  --grayText: #707684;\n\n  /**\n   * Blue icons\n   */\n  --color-active-icon: #388AE5;\n\n  /**\n   * Gray border, loaders\n   */\n  --color-gray-border: rgba(201, 201, 204, 0.48);\n\n  /**\n   * Block content width\n   */\n  --content-width: 650px;\n\n  /**\n   * Toolbar buttons height and width\n   */\n  --toolbar-buttons-size: 34px;\n\n  /**\n   * Toolbar Plus Button and Toolbox buttons height and width\n   */\n  --toolbox-buttons-size: 24px;\n\n  /**\n   * Confirm deletion bg\n   */\n  --color-confirm: #E24A4A;\n}\n/**\n* Editor wrapper\n*/\n.codex-editor {\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 1;\n}\n.codex-editor .hide {\n    display: none;\n  }\n.codex-editor__redactor {\n    padding-bottom: 300px;\n  }\n.codex-editor__redactor--hidden {\n      display: none;\n    }\n.codex-editor__loader {\n    position: relative;\n    height: 30vh\n  }\n.codex-editor__loader::before {\n      content: '';\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      width: 30px;\n      height: 30px;\n      margin-top: -15px;\n      margin-left: -15px;\n      border-radius: 50%;\n      border: 2px solid rgba(201, 201, 204, 0.48);\n      border: 2px solid var(--color-gray-border);\n      border-top-color: transparent;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -webkit-animation: editor-loader-spin 800ms infinite linear;\n              animation: editor-loader-spin 800ms infinite linear;\n      will-change: transform;\n    }\n.codex-editor-copyable {\n    position: absolute;\n    height: 1px;\n    width: 1px;\n    top: -400%;\n    opacity: 0.001;\n  }\n.codex-editor svg {\n    fill: currentColor;\n    vertical-align: middle;\n    max-height: 100%;\n  }\n/**\n * Set color for native selection\n */\n::-moz-selection{\n  background-color: #a8d6ff;\n  background-color: var(--selectionColor);\n}\n::selection{\n  background-color: #a8d6ff;\n  background-color: var(--selectionColor);\n}\n/**\n * Add placeholder to content editable elements with data attribute\n * data-placeholder=\"Hello world!\"\n */\n[contentEditable=true][data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  color: var(--grayText);\n  font-weight: normal;\n}\n[contentEditable=true][data-placeholder]:empty:focus::before {\n  opacity: 0.3;\n}\n@-webkit-keyframes editor-loader-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes editor-loader-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.ce-toolbar {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  /*opacity: 0;*/\n  /*visibility: hidden;*/\n  -webkit-transition: opacity 100ms ease;\n  transition: opacity 100ms ease;\n  will-change: opacity, transform;\n  display: none;\n}\n.ce-toolbar--opened {\n    display: block;\n    /*opacity: 1;*/\n    /*visibility: visible;*/\n  }\n.ce-toolbar__content {\n    max-width: 650px;\n    max-width: var(--content-width);\n    margin: 0 auto;\n    position: relative;\n  }\n.ce-toolbar__plus {\n  color: #707684;\n  color: var(--grayText);\n  cursor: pointer;\n  width: 24px;\n  width: var(--toolbox-buttons-size);\n  height: 24px;\n  height: var(--toolbox-buttons-size);\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center\n  }\n.ce-toolbar__plus:not(:last-of-type){\n  margin-right: 10px;\n    }\n.ce-toolbar__plus {\n\n    position: absolute;\n    left: calc(calc(24px + 10px) * -1);\n    left: calc(calc(var(--toolbox-buttons-size) + 10px) * -1);\n  }\n.ce-toolbar__plus:hover,\n    .ce-toolbar__plus--active {\n  color: #388AE5;\n  color: var(--color-active-icon);\n    }\n.ce-toolbar__plus--active{\n  -webkit-animation: bounceIn 0.75s 1;\n          animation: bounceIn 0.75s 1;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n    }\n.ce-toolbar__plus--hidden {\n      display: none;\n    }\n.ce-toolbar__plus,\n  .ce-toolbar .ce-toolbox {\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n  }\n/**\n   * Block actions Zone\n   * -------------------------\n   */\n.ce-toolbar__actions {\n    position: absolute;\n    right: 0;\n    top: 10px;\n    padding-right: 16px;\n    opacity: 0;\n  }\n.ce-toolbar__actions--opened {\n      opacity: 1;\n    }\n.ce-toolbar__actions-buttons {\n      text-align: right;\n    }\n.ce-toolbar__settings-btn {\n    display: inline-block;\n    width: 24px;\n    height: 24px;\n    color: #707684;\n    color: var(--grayText);\n    cursor: pointer;\n  }\n.ce-toolbox {\n    position: absolute;\n    visibility: hidden;\n    -webkit-transition: opacity 100ms ease;\n    transition: opacity 100ms ease;\n    will-change: opacity;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n.ce-toolbox--opened {\n        opacity: 1;\n        visibility: visible;\n    }\n.ce-toolbox__button {\n  color: #707684;\n  color: var(--grayText);\n  cursor: pointer;\n  width: 24px;\n  width: var(--toolbox-buttons-size);\n  height: 24px;\n  height: var(--toolbox-buttons-size);\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n    }\n.ce-toolbox__button:not(:last-of-type){\n  margin-right: 10px;\n    }\n.ce-toolbox__button:hover,\n    .ce-toolbox__button--active {\n  color: #388AE5;\n  color: var(--color-active-icon);\n    }\n.ce-toolbox__button--active{\n  -webkit-animation: bounceIn 0.75s 1;\n          animation: bounceIn 0.75s 1;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n    }\n.ce-inline-toolbar {\n  position: absolute;\n  background-color: #FFFFFF;\n  -webkit-box-shadow: 0 8px 23px -6px rgba(21,40,54,0.31), 22px -14px 34px -18px rgba(33,48,73,0.26);\n          box-shadow: 0 8px 23px -6px rgba(21,40,54,0.31), 22px -14px 34px -18px rgba(33,48,73,0.26);\n  border-radius: 4px;\n  z-index: 2\n}\n.ce-inline-toolbar::before {\n  content: '';\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  top: -7px;\n  left: 50%;\n  margin-left: -7px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  background-color: #fff;\n  z-index: -1;\n    }\n.ce-inline-toolbar {\n  padding: 6px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  display: none;\n  -webkit-box-shadow: 0 6px 12px -6px rgba(131, 147, 173, 0.46),\n              5px -12px 34px -13px rgba(97, 105, 134, 0.6),\n              0 26px 52px 3px rgba(147, 165, 186, 0.24);\n          box-shadow: 0 6px 12px -6px rgba(131, 147, 173, 0.46),\n              5px -12px 34px -13px rgba(97, 105, 134, 0.6),\n              0 26px 52px 3px rgba(147, 165, 186, 0.24);\n}\n.ce-inline-toolbar--showed {\n    display: block;\n  }\n.ce-inline-toolbar__buttons {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: right;\n        -ms-flex-pack: right;\n            justify-content: right;\n  }\n.ce-inline-toolbar__actions {\n    display: inline-block;\n    width: 0;\n    height: 0;\n    padding: 0;\n    overflow: hidden;\n    -webkit-transition: width 0.5s ease, padding 0.5s ease;\n    transition: width 0.5s ease, padding 0.5s ease;\n  }\n.ce-inline-toolbar__actions--opened {\n      height: initial;\n      padding: initial;\n      margin-right: 5px;\n      overflow: initial;\n    }\n.ce-inline-toolbar [hidden] {\n    display: none !important;\n  }\n.ce-inline-tool {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  border-radius: 3px;\n  cursor: pointer;\n  border: 0;\n  outline: none;\n  background-color: transparent;\n  vertical-align: bottom;\n  color: #707684;\n  color: var(--grayText)\n}\n.ce-inline-tool:not(:last-of-type){\n  margin-right: 5px;\n    }\n.ce-inline-tool:hover {\n  background-color: #eff2f5;\n  background-color: var(--bg-light);\n    }\n.ce-inline-tool {\n  line-height: normal;\n  -webkit-transition: padding 0.5s ease, margin 0.5s ease, width 0.5s ease;\n  transition: padding 0.5s ease, margin 0.5s ease, width 0.5s ease;\n}\n.ce-inline-tool > svg,\n    .ce-inline-tool .icon {\n  margin: auto;\n    }\n.ce-inline-tool--active {\n  color: #388AE5;\n  color: var(--color-active-icon);\n    }\n.ce-inline-tool--pinch {\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n    width: 0 !important;\n  }\n.ce-inline-tool--last {\n    margin-right: 0 !important;\n  }\n.ce-inline-tool--link .icon {\n      margin-top: -2px;\n    }\n.ce-inline-tool--link .icon--unlink {\n      display: none;\n    }\n.ce-inline-tool--unlink .icon--link {\n      display: none;\n    }\n.ce-inline-tool--unlink .icon--unlink {\n      display: inline-block;\n    }\n.ce-inline-tool-input {\n    background-color: #eff2f5;\n    background-color: var(--bg-light);\n    outline: none;\n    border: 0;\n    border-radius: 3px;\n    font-size: 13px;\n    padding: 8px;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box\n  }\n.ce-inline-tool-input::-webkit-input-placeholder {\n      color: #707684;\n      color: var(--grayText);\n    }\n.ce-inline-tool-input::-ms-input-placeholder {\n      color: #707684;\n      color: var(--grayText);\n    }\n.ce-inline-tool-input::placeholder {\n      color: #707684;\n      color: var(--grayText);\n    }\n.ce-inline-tool-input--showed {\n      display: block;\n    }\n.ce-settings {\n  position: absolute;\n  background-color: #FFFFFF;\n  -webkit-box-shadow: 0 8px 23px -6px rgba(21,40,54,0.31), 22px -14px 34px -18px rgba(33,48,73,0.26);\n          box-shadow: 0 8px 23px -6px rgba(21,40,54,0.31), 22px -14px 34px -18px rgba(33,48,73,0.26);\n  border-radius: 4px;\n  z-index: 2\n}\n.ce-settings::before {\n  content: '';\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  top: -7px;\n  left: 50%;\n  margin-left: -7px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  background-color: #fff;\n  z-index: -1;\n    }\n.ce-settings {\n  right: 5px;\n  top: 35px;\n  min-width: 124px\n}\n.ce-settings::before{\n    left: auto;\n    right: 12px;\n  }\n.ce-settings {\n\n  display: none;\n}\n.ce-settings--opened {\n    display: block;\n    -webkit-animation-duration: 0.5s;\n            animation-duration: 0.5s;\n    -webkit-animation-name: bounceIn;\n            animation-name: bounceIn;\n  }\n.ce-settings__plugin-zone:not(:empty){\n      padding: 6px 6px 0;\n    }\n.ce-settings__default-zone:not(:empty){\n      padding: 6px;\n    }\n.ce-settings__button {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  border-radius: 3px;\n  cursor: pointer;\n  border: 0;\n  outline: none;\n  background-color: transparent;\n  vertical-align: bottom;\n  color: #707684;\n  color: var(--grayText)\n  }\n.ce-settings__button:not(:last-of-type){\n  margin-right: 5px;\n    }\n.ce-settings__button:hover {\n  background-color: #eff2f5;\n  background-color: var(--bg-light);\n    }\n.ce-settings__button {\n    line-height: 32px;\n  }\n.ce-settings__button > svg,\n    .ce-settings__button .icon {\n  margin: auto;\n    }\n.ce-settings__button--active {\n  color: #388AE5;\n  color: var(--color-active-icon);\n    }\n.ce-settings__button--disabled {\n        cursor: not-allowed !important;\n        opacity: .3;\n    }\n.ce-settings__button--selected {\n      color: #388AE5;\n      color: var(--color-active-icon);\n    }\n.ce-settings__button--delete {\n      -webkit-transition: background-color 300ms ease;\n      transition: background-color 300ms ease;\n      will-change: background-color;\n    }\n.ce-settings__button--delete .icon {\n        -webkit-transition: -webkit-transform 200ms ease-out;\n        transition: -webkit-transform 200ms ease-out;\n        transition: transform 200ms ease-out;\n        transition: transform 200ms ease-out, -webkit-transform 200ms ease-out;\n        will-change: transform;\n      }\n.ce-settings__button--confirm {\n      background-color: #E24A4A;\n      background-color: var(--color-confirm);\n      color: #fff\n    }\n.ce-settings__button--confirm:hover {\n        background-color: rgb(213, 74, 74) !important;\n        background-color: rgb(213, 74, 74) !important;\n      }\n.ce-settings__button--confirm .icon {\n        -webkit-transform: rotate(90deg);\n                transform: rotate(90deg);\n      }\n.ce-block:first-of-type {\n    margin-top: 0;\n  }\n.ce-block--focused {\n    background-image: linear-gradient(17deg, rgba(243, 248, 255, 0.03) 63.45%, rgba(207, 214, 229, 0.27) 98%);\n    border-radius: 3px;\n  }\n.ce-block--selected .ce-block__content {\n    background: #a8d6ff;\n    background: var(--selectionColor);\n    -webkit-box-shadow: 0 31px 23px -22px rgba(175, 220, 255, 1);\n            box-shadow: 0 31px 23px -22px rgba(175, 220, 255, 1);\n    -webkit-animation: selectionBounce 0.2s 1;\n            animation: selectionBounce 0.2s 1;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n  }\n.ce-block--selected .ce-block__content img,\n    .ce-block--selected .ce-block__content .ce-stub {\n      opacity: 0.55;\n    }\n.ce-block--stretched .ce-block__content {\n    max-width: none;\n  }\n.ce-block__content {\n    position: relative;\n    max-width: 650px;\n    max-width: var(--content-width);\n    margin: 0 auto;\n  }\n.ce-block--drop-target .ce-block__content:before {\n      content: '';\n      position: absolute;\n      top: 100%;\n      left: -20px;\n      margin-top: -1px;\n      height: 8px;\n      width: 8px;\n      border: solid #388AE5;\n      border: solid var(--color-active-icon);\n      border-width: 1px 1px 0 0;\n      -webkit-transform-origin: right;\n              transform-origin: right;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg);\n    }\n.ce-block--drop-target .ce-block__content:after {\n      content: '';\n      position: absolute;\n      top: 100%;\n      height: 1px;\n      width: 100%;\n      color: #388AE5;\n      color: var(--color-active-icon);\n      background: repeating-linear-gradient(\n        90deg,\n        #388AE5,\n        #388AE5 1px,\n        #fff 1px,\n        #fff 6px\n      );\n      background: repeating-linear-gradient(\n        90deg,\n        var(--color-active-icon),\n        var(--color-active-icon) 1px,\n        #fff 1px,\n        #fff 6px\n      );\n    }\n.ce-block a {\n    cursor: pointer;\n    text-decoration: underline;\n  }\n.ce-block b {\n    font-weight: bold;\n  }\n.ce-block i {\n    font-style: italic;\n  }\n.wobble {\n  -webkit-animation-name: wobble;\n          animation-name: wobble;\n  -webkit-animation-duration: 400ms;\n          animation-duration: 400ms;\n}\n/**\n * @author Nick Pettit - https://github.com/nickpettit/glide\n */\n@-webkit-keyframes wobble {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n\n  15% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -5deg);\n            transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    -webkit-transform: translate3d(2%, 0, 0) rotate3d(0, 0, 1, 3deg);\n            transform: translate3d(2%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    -webkit-transform: translate3d(-3%, 0, 0) rotate3d(0, 0, 1, -3deg);\n            transform: translate3d(-3%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    -webkit-transform: translate3d(2%, 0, 0) rotate3d(0, 0, 1, 2deg);\n            transform: translate3d(2%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-1%, 0, 0) rotate3d(0, 0, 1, -1deg);\n            transform: translate3d(-1%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes wobble {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n\n  15% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -5deg);\n            transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    -webkit-transform: translate3d(2%, 0, 0) rotate3d(0, 0, 1, 3deg);\n            transform: translate3d(2%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    -webkit-transform: translate3d(-3%, 0, 0) rotate3d(0, 0, 1, -3deg);\n            transform: translate3d(-3%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    -webkit-transform: translate3d(2%, 0, 0) rotate3d(0, 0, 1, 2deg);\n            transform: translate3d(2%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-1%, 0, 0) rotate3d(0, 0, 1, -1deg);\n            transform: translate3d(-1%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes bounceIn {\n  from,\n  20%,\n  40%,\n  60%,\n  80%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n            transform: scale3d(0.9, 0.9, 0.9);\n  }\n\n  20% {\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n            transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  60% {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n@keyframes bounceIn {\n  from,\n  20%,\n  40%,\n  60%,\n  80%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n            transform: scale3d(0.9, 0.9, 0.9);\n  }\n\n  20% {\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n            transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  60% {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n@-webkit-keyframes selectionBounce {\n  from,\n  20%,\n  40%,\n  60%,\n  80%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.01, 1.01, 1.01);\n            transform: scale3d(1.01, 1.01, 1.01);\n  }\n\n  70% {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n@keyframes selectionBounce {\n  from,\n  20%,\n  40%,\n  60%,\n  80%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.01, 1.01, 1.01);\n            transform: scale3d(1.01, 1.01, 1.01);\n  }\n\n  70% {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n/**\n * Block Tool wrapper\n */\n.cdx-block {\n  padding: 0.7em 0;\n}\n/**\n * Input\n */\n.cdx-input {\n  border: 1px solid rgba(201, 201, 204, 0.48);\n  border: 1px solid var(--color-gray-border);\n  -webkit-box-shadow: inset 0 1px 2px 0 rgba(35, 44, 72, 0.06);\n          box-shadow: inset 0 1px 2px 0 rgba(35, 44, 72, 0.06);\n  border-radius: 3px;\n  padding: 10px 12px;\n  outline: none;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n/**\n * Settings\n */\n.cdx-settings-button {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  border-radius: 3px;\n  cursor: pointer;\n  border: 0;\n  outline: none;\n  background-color: transparent;\n  vertical-align: bottom;\n  color: #707684;\n  color: var(--grayText)\n}\n.cdx-settings-button:not(:last-of-type){\n  margin-right: 5px;\n    }\n.cdx-settings-button:hover {\n  background-color: #eff2f5;\n  background-color: var(--bg-light);\n    }\n.cdx-settings-button > svg,\n    .cdx-settings-button .icon {\n  margin: auto;\n    }\n.cdx-settings-button--active {\n  color: #388AE5;\n  color: var(--color-active-icon);\n    }\n.cdx-settings-button--active {\n    color: #388AE5;\n    color: var(--color-active-icon);\n  }\n/**\n * Loader\n */\n.cdx-loader {\n  position: relative;\n  border: 1px solid rgba(201, 201, 204, 0.48);\n  border: 1px solid var(--color-gray-border)\n}\n.cdx-loader::before {\n    content: '';\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 18px;\n    height: 18px;\n    margin: -11px 0 0 -11px;\n    border: 2px solid rgba(201, 201, 204, 0.48);\n    border: 2px solid var(--color-gray-border);\n    border-left-color: #388AE5;\n    border-left-color: var(--color-active-icon);\n    border-radius: 50%;\n    -webkit-animation: cdxRotation 1.2s infinite linear;\n            animation: cdxRotation 1.2s infinite linear;\n  }\n@-webkit-keyframes cdxRotation {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes cdxRotation {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n/**\n * Button\n */\n.cdx-button {\n  padding: 13px;\n  border-radius: 3px;\n  border: 1px solid rgba(201, 201, 204, 0.48);\n  border: 1px solid var(--color-gray-border);\n  font-size: 14.9px;\n  background: #fff;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(18,30,57,0.04);\n          box-shadow: 0 2px 2px 0 rgba(18,30,57,0.04);\n  color: #707684;\n  color: var(--grayText);\n  text-align: center;\n  cursor: pointer\n}\n.cdx-button:hover {\n    background: #FBFCFE;\n    -webkit-box-shadow: 0 1px 3px 0 rgba(18,30,57,0.08);\n            box-shadow: 0 1px 3px 0 rgba(18,30,57,0.08);\n  }\n.cdx-button svg {\n    height: 20px;\n    margin-right: 0.2em;\n    margin-top: -2px;\n  }\n.ce-stub {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  padding: 3.5em 0;\n  margin: 17px 0;\n  border-radius: 3px;\n  background: #fcf7f7;\n  color: #b46262;\n}\n.ce-stub__info {\n    margin-left: 20px;\n  }\n.ce-stub__title {\n    margin-bottom: 3px;\n    font-weight: 600;\n    font-size: 18px;\n    text-transform: capitalize;\n  }\n.ce-stub__subtitle {\n    font-size: 16px;\n  }\n", ""]);

// exports


/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi @babel/polyfill/noConflict ./src/codex.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill/noConflict */"./node_modules/@babel/polyfill/noConflict.js");
module.exports = __webpack_require__(/*! ./src/codex.ts */"./src/codex.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=codex-editor.js.map