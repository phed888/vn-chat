module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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

/***/ "./components/VNextChrome/GlobalHeader.js":
/*!************************************************!*\
  !*** ./components/VNextChrome/GlobalHeader.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_VoyLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/VoyLogo */ "./components/icons/VoyLogo.js");
/* harmony import */ var _icons_IconPhone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/IconPhone */ "./components/icons/IconPhone.js");
/* harmony import */ var _icons_IconNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/IconNotification */ "./components/icons/IconNotification.js");
/* harmony import */ var _icons_DropdownCaret__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/DropdownCaret */ "./components/icons/DropdownCaret.js");
var _jsxFileName = "/Users/brspeight/dev-proto/react/vnext3/components/VNextChrome/GlobalHeader.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  height: 60px;\n  align-items: center;\n  .global-controls {\n    display: flex;\n    align-items: center;\n    * {\n      margin-right: 20px;\n    }\n    *:last-child {\n      margin-right: 0;\n    }\n    .agent-lockup,\n    .agent-id {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      *:last-child {\n        float: right;\n      }\n      .agent-avatar {\n        display: flex;\n        border-radius: 18px;\n        height: 36px;\n        width: 36px;\n        background-color: rgba(255, 255, 255, 0.7);\n        align-items: center;\n        justify-content: center;\n        margin-right: 8px;\n        color: #00001d;\n      }\n      .agent-info {\n        .agent-name,\n        .agent-status {\n          margin: 0;\n          font-size: 14px;\n          font-weight: bold;\n          color: rgba(255, 255, 255, 0.7);\n        }\n        .agent-status {\n          font-weight: normal;\n          color: #fff;\n          margin-top: 4px;\n        }\n      }\n    }\n    .agent-lockup {\n      min-width: 184px;\n      justify-content: space-between;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var GlobalHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(GlobalHeader, _Component);

  function GlobalHeader() {
    _classCallCheck(this, GlobalHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(GlobalHeader).apply(this, arguments));
  }

  _createClass(GlobalHeader, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GHeader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_VoyLogo__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "global-controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_IconPhone__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_IconNotification__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "agent-lockup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "agent-id",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "agent-avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "AS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "agent-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "agent-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Angela Smith"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "agent-status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Initial login"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_DropdownCaret__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }))));
    }
  }]);

  return GlobalHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


var GHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());

/***/ }),

/***/ "./components/VNextChrome/Tab.js":
/*!***************************************!*\
  !*** ./components/VNextChrome/Tab.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brspeight/dev-proto/react/vnext3/components/VNextChrome/Tab.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Tab =
/*#__PURE__*/
function (_Component) {
  _inherits(Tab, _Component);

  function Tab(props) {
    var _this;

    _classCallCheck(this, Tab);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tab).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function () {
      var _this$props = _this.props,
          title = _this$props.title,
          tabClick = _this$props.tabClick;
      tabClick(title);
    });

    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Tab, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: this.props.active === this.props.title ? 'is-active' : undefined,
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: this.props.link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: this.props.tabType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: this.props.badgeType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, this.props.badgeValue), this.props.title)));
    }
  }]);

  return Tab;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Tab);

/***/ }),

/***/ "./components/VNextChrome/Tabs.js":
/*!****************************************!*\
  !*** ./components/VNextChrome/Tabs.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tab */ "./components/VNextChrome/Tab.js");
var _jsxFileName = "/Users/brspeight/dev-proto/react/vnext3/components/VNextChrome/Tabs.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 40px;\n  display: flex;\n  list-style: none;\n  padding-left: 48px;\n  margin: 12px 0 0 0;\n  li {\n    display: flex;\n    background-color: #fff;\n    padding: 0;\n    position: relative;\n    margin-right: 27px;\n    font-size: 14px;\n    cursor: pointer;\n    width: 174px;\n  }\n  li:hover,\n  li:hover::before,\n  li:hover::after {\n    background-color: #dddfe5;\n  }\n\n  li.is-active {\n    z-index: 1;\n  }\n  li.is-active,\n  li.is-active::before,\n  li.is-active::after {\n    background-color: #fff;\n    border: none;\n  }\n  li,\n  li::before,\n  li::after {\n    background-color: #bbc0cc;\n  }\n  li::after,\n  li::before {\n    content: '';\n    width: 28px;\n    height: 40px;\n    position: absolute;\n    top: 0;\n  }\n  li::after {\n    z-index: -1;\n    transform: skewX(26deg);\n    right: -18px;\n    border-top-right-radius: 8px;\n    border-right: 3px solid #212c53;\n  }\n  li::before {\n    z-index: -2;\n    transform: skewX(-26deg);\n    left: -18px;\n    border-top-left-radius: 8px;\n    border-left: 3px solid #212c53;\n  }\n  li a,\n  li a:link,\n  li a:visited,\n  li a:active {\n    text-decoration: none;\n    text-align: left;\n    color: #000;\n  }\n  .tab-title {\n    display: flex;\n    padding-top: 14px;\n    width: 100%;\n  }\n  .tab-title.alert {\n    border-top: 4px solid #e83e8c;\n    padding-top: 10px;\n  }\n  .badge-disc {\n    height: 16px;\n    width: 16px;\n    background-color: #e83e8c;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 12px;\n    color: #fff;\n    margin-right: 8px;\n    border-radius: 8px;\n  }\n  .badge-bubble {\n    width: 16px;\n    height: 16px;\n    margin-right: 8px;\n    background: url('/static/images/chat-bubble.svg');\n    color: red;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Tabs =
/*#__PURE__*/
function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tabs).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickTabItem", function (title) {
      _this.setState({
        activeTab: title
      });
    });

    _this.state = {
      activeTab: 'Wilo'
    }; // This binding is necessary to make `this` work in the callback

    _this.onClickTabItem = _this.onClickTabItem.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Tabs, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabBar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tab__WEBPACK_IMPORTED_MODULE_2__["default"], {
        active: this.state.activeTab,
        title: "Allesandro",
        link: "/",
        tabType: "tab-title alert",
        badgeType: "badge-disc",
        badgeValue: "1",
        tabClick: this.onClickTabItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tab__WEBPACK_IMPORTED_MODULE_2__["default"], {
        active: this.state.activeTab,
        title: "Wilo",
        link: "/",
        tabType: "tab-title",
        badgeType: "badge-bubble",
        badgeValue: "",
        tabClick: this.onClickTabItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }));
    }
  }]);

  return Tabs;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var TabBar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./components/icons/DropdownCaret.js":
/*!*******************************************!*\
  !*** ./components/icons/DropdownCaret.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropdownCaret; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/brspeight/dev-proto/react/vnext3/components/icons/DropdownCaret.js";

function DropdownCaret() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "8",
    height: "5",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M7.312.249a.348.348 0 0 0-.486-.005L4 3.108 1.174.244a.345.345 0 0 0-.486.005L.245.697A.362.362 0 0 0 .25 1.2l3.5 3.546c.138.14.365.137.5 0L7.75 1.2a.363.363 0 0 0 .005-.503L7.312.25z",
    fill: "#FFF",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/icons/IconNotification.js":
/*!**********************************************!*\
  !*** ./components/icons/IconNotification.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconNotification; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/brspeight/dev-proto/react/vnext3/components/icons/IconNotification.js";

function IconNotification() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "21",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M10.443 22.73a4.309 4.309 0 0 1-2.429-.726 4.255 4.255 0 0 1-1.598-1.958L5.99 19.01h8.908l-.412 1.029a4.224 4.224 0 0 1-1.597 1.963 4.172 4.172 0 0 1-2.446.728zM1.63 16.367c.069-.254.227-.44.433-.594l.754-.598c.719-.628 1.333-1.73 1.82-3.329.266-.81.403-1.853.404-3.162.105-2.17.968-3.789 2.583-4.767.18-.108.416-.224.71-.349l.006-.188c0-.584.211-1.102.62-1.51.408-.409.926-.62 1.51-.62.59 0 1.107.216 1.504.633.381.402.586.904.606 1.497v.198c.75.326 1.418.833 2 1.515.744.87 1.15 2.072 1.24 3.627 0 2.08.445 3.823 1.33 5.248.36.588.696 1.006.996 1.252.345.284.573.461.641.504.259.162.448.391.499.69l.313.9.03.123c.06.352-.009.692-.219.973-.203.27-.49.388-.845.434l-.095.006H2.43c-.356 0-.68-.133-.91-.402-.238-.279-.309-.63-.251-1.002l.032-.132.329-.947z",
    stroke: "#FFF",
    strokeWidth: "1.5",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/icons/IconPhone.js":
/*!***************************************!*\
  !*** ./components/icons/IconPhone.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconPhone; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/brspeight/dev-proto/react/vnext3/components/icons/IconPhone.js";

function IconPhone() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M8.872 10.524l.297.556c.294.551.857 1.251 1.688 2.082.832.832 1.527 1.397 2.072 1.694l.548.305 2.11-1.36c.33-.197.708-.294 1.118-.294.436 0 .836.125 1.172.372l4.009 2.897a2.1 2.1 0 0 1 .86 1.572c.043.66-.212 1.24-.717 1.661l-2.573 2.238-.01.008c-.533.448-1.182.594-1.885.424-1.54-.404-3.01-.951-4.405-1.641-2.332-1.137-4.331-2.538-5.995-4.201-1.665-1.666-3.053-3.668-4.157-5.991-.761-1.537-1.323-3.007-1.688-4.423-.17-.7-.01-1.354.456-1.861l2.234-2.563c.4-.513.972-.77 1.64-.748.67.022 1.226.324 1.589.857l2.884 4.034c.546.756.57 1.594.068 2.304l-1.315 2.078z",
    stroke: "#FFF",
    strokeWidth: "1.5",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/icons/VoyLogo.js":
/*!*************************************!*\
  !*** ./components/icons/VoyLogo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VoyLogo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/brspeight/dev-proto/react/vnext3/components/icons/VoyLogo.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var VoyLogo =
/*#__PURE__*/
function (_Component) {
  _inherits(VoyLogo, _Component);

  function VoyLogo() {
    _classCallCheck(this, VoyLogo);

    return _possibleConstructorReturn(this, _getPrototypeOf(VoyLogo).apply(this, arguments));
  }

  _createClass(VoyLogo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        width: "146",
        height: "37",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        fill: "#FFF",
        fillRule: "evenodd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M35.01 20.022a1.405 1.405 0 1 0-.001-2.81 1.405 1.405 0 0 0 0 2.81zm-32.782 0a1.405 1.405 0 1 0-.001-2.81 1.405 1.405 0 0 0 0 2.81zM18.62 3.632A1.406 1.406 0 1 0 18.616.82a1.406 1.406 0 0 0 .004 2.812zm0 32.78a1.404 1.404 0 1 0 0-2.808 1.405 1.405 0 1 0 0 2.809zM7.202 33.149l4.539-1.944a14.308 14.308 0 0 0 6.76 1.684c7.946 0 14.388-6.443 14.388-14.389 0-2.717-.753-5.26-2.063-7.428l1.89-4.412A18.425 18.425 0 0 1 37 18.499C37 28.717 28.717 37 18.5 37a18.41 18.41 0 0 1-11.298-3.852zm-3.132-3.07A18.425 18.425 0 0 1 0 18.498C0 8.283 8.283 0 18.5 0a18.42 18.42 0 0 1 12.105 4.51l-4.352 1.864a14.322 14.322 0 0 0-7.752-2.263c-7.946 0-14.389 6.442-14.389 14.388 0 2.584.682 5.01 1.875 7.107L4.07 30.077z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M13.41 18.814L11.594 17 4 33l16-7.593-1.813-1.816a3.568 3.568 0 0 1-4.778-4.776M21.581 20.176L23.405 22 31 6l-16 7.595 1.824 1.824a3.567 3.567 0 1 1 4.757 4.757M117.471 24.126c-.149.104-.34.214-.575.33-.231.117-.49.227-.774.33a6.09 6.09 0 0 1-.929.253 5.453 5.453 0 0 1-1.036.097c-.65 0-1.232-.118-1.74-.357a3.722 3.722 0 0 1-1.286-.981 4.342 4.342 0 0 1-.797-1.465 5.764 5.764 0 0 1-.272-1.797c0-.645.09-1.248.272-1.81.182-.56.447-1.052.797-1.471.35-.421.777-.75 1.285-.99.509-.238 1.09-.357 1.74-.357.365 0 .713.033 1.048.098.337.065.648.149.931.251.284.104.541.213.77.33.228.119.417.228.566.331v7.208zm-.392-9.923a6.671 6.671 0 0 0-.908-.337 9.604 9.604 0 0 0-1.091-.245 7.417 7.417 0 0 0-1.216-.097c-1.007 0-1.92.172-2.74.518a6.017 6.017 0 0 0-2.104 1.458 6.54 6.54 0 0 0-1.349 2.23c-.317.862-.476 1.805-.476 2.835 0 1.009.152 1.94.453 2.79a6.4 6.4 0 0 0 1.302 2.202 5.862 5.862 0 0 0 2.068 1.446c.816.344 1.737.518 2.763.518.782 0 1.487-.104 2.116-.309.63-.204 1.155-.438 1.574-.7v.981c0 .45-.065.886-.196 1.311-.13.427-.345.804-.644 1.137-.297.332-.685.595-1.161.791-.474.198-1.057.296-1.747.296-.13 0-.288-.008-.474-.021-.187-.013-.378-.031-.574-.049a6.714 6.714 0 0 1-.566-.078 2.243 2.243 0 0 1-.44-.118l-.896 2.244c.17.075.392.137.672.189a15.538 15.538 0 0 0 1.706.218c.27.019.48.027.63.027 1.202 0 2.217-.172 3.046-.52.83-.346 1.499-.799 2.007-1.36a5.145 5.145 0 0 0 1.103-1.913c.23-.716.343-1.442.343-2.181V13.902l-2.543.658a5.372 5.372 0 0 0-.658-.357zm-14.832 9.923c-.147.104-.34.214-.573.33a7.15 7.15 0 0 1-.775.33 6.04 6.04 0 0 1-.93.253 5.449 5.449 0 0 1-1.034.097c-.653 0-1.232-.118-1.74-.357a3.728 3.728 0 0 1-1.288-.981 4.4 4.4 0 0 1-.796-1.465 5.812 5.812 0 0 1-.272-1.797c0-.645.09-1.248.272-1.81a4.43 4.43 0 0 1 .796-1.471c.35-.421.779-.75 1.287-.99.509-.238 1.088-.357 1.74-.357.363 0 .713.033 1.05.098a6.286 6.286 0 0 1 1.698.581c.227.119.418.228.565.331v7.208zm-.495-9.958a9.169 9.169 0 0 0-.944-.33 7.725 7.725 0 0 0-2.195-.315c-.998 0-1.904.173-2.725.519-.821.346-1.52.831-2.099 1.458a6.599 6.599 0 0 0-1.34 2.23c-.319.862-.476 1.805-.476 2.835 0 1.009.152 1.94.453 2.79a6.4 6.4 0 0 0 1.302 2.202 5.848 5.848 0 0 0 2.067 1.446c.816.344 1.736.518 2.763.518.866 0 1.623-.109 2.271-.33.648-.22 1.192-.474 1.629-.763l2.6.91V13.903l-2.544.658a4.633 4.633 0 0 0-.762-.392zm23.503 4.784c.038-.395.144-.78.323-1.158.176-.378.412-.721.705-1.023a3.308 3.308 0 0 1 1.05-.73c.404-.183.86-.274 1.361-.274.439 0 .852.073 1.237.217.387.145.727.353 1.022.624.294.272.523.603.693.996.166.393.25.841.25 1.348h-6.64zm7.67-3.928a5.19 5.19 0 0 0-1.938-1.145 7.162 7.162 0 0 0-2.236-.355c-1.006 0-1.91.183-2.712.553a6.07 6.07 0 0 0-2.042 1.508 6.584 6.584 0 0 0-1.279 2.23 8.256 8.256 0 0 0-.44 2.721c0 .944.15 1.837.455 2.68.301.84.75 1.58 1.342 2.222.591.64 1.328 1.149 2.208 1.522.881.374 1.904.56 3.069.56.419 0 .843-.027 1.272-.084a10.69 10.69 0 0 0 2.398-.596c.358-.135.672-.282.942-.442l-.894-2.215a6.394 6.394 0 0 1-1.768.716 7.702 7.702 0 0 1-1.81.237c-.663 0-1.254-.097-1.776-.294a3.86 3.86 0 0 1-1.342-.835 3.71 3.71 0 0 1-.866-1.298 5.279 5.279 0 0 1-.364-1.682h9.646v-1.01c0-1.159-.17-2.15-.51-2.973-.34-.824-.793-1.496-1.355-2.02zm12.565-1.158c-.2-.07-.42-.128-.657-.175a10.739 10.739 0 0 0-.742-.119 6.396 6.396 0 0 0-2.09.084c-.41.088-.777.199-1.103.329a5.45 5.45 0 0 0-.875.442c-.256.164-.476.316-.664.456l-2.432-.981v13.213h2.796V17.38c.159-.14.35-.284.573-.436.224-.149.48-.282.77-.4.289-.114.6-.212.935-.287a4.965 4.965 0 0 1 1.077-.112c.319 0 .644.043.98.127.334.084.637.182.907.296L146 14.069a5.665 5.665 0 0 0-.51-.203zM61.271 7l-6.5 17.322L48.214 7H45l7.967 20.115h3.454L64.417 7h-3.146zm11.693 15.346a4.163 4.163 0 0 1-.826 1.458 3.893 3.893 0 0 1-1.342.975c-.531.239-1.137.357-1.817.357-.68 0-1.283-.118-1.811-.357a3.907 3.907 0 0 1-1.334-.975 4.254 4.254 0 0 1-.832-1.458 5.57 5.57 0 0 1-.287-1.81c0-.645.095-1.248.287-1.81.19-.56.469-1.052.832-1.471a3.82 3.82 0 0 1 1.334-.99c.528-.238 1.131-.357 1.811-.357.68 0 1.286.119 1.817.357.531.24.98.569 1.342.99.364.419.638.911.826 1.471.186.562.278 1.165.278 1.81 0 .647-.092 1.25-.278 1.81zm1.187-6.761a6.662 6.662 0 0 0-2.236-1.508c-.876-.37-1.854-.553-2.936-.553-1.081 0-2.059.183-2.935.553a6.669 6.669 0 0 0-2.237 1.508 6.696 6.696 0 0 0-1.427 2.23 7.358 7.358 0 0 0-.503 2.721c0 .963.168 1.868.503 2.714a6.633 6.633 0 0 0 1.427 2.216 6.702 6.702 0 0 0 2.237 1.5c.876.371 1.854.555 2.935.555 1.082 0 2.06-.184 2.936-.554a6.695 6.695 0 0 0 2.236-1.501 6.637 6.637 0 0 0 1.428-2.216 7.304 7.304 0 0 0 .502-2.714c0-.963-.167-1.87-.502-2.72a6.7 6.7 0 0 0-1.428-2.231zm13.028 8.374c-.521.318-1.046.584-1.572.799-.526.216-1.12.323-1.783.323-.513 0-.955-.075-1.329-.226a2.38 2.38 0 0 1-.915-.622 2.6 2.6 0 0 1-.53-.947 3.854 3.854 0 0 1-.176-1.194V13.93h-2.81v8.585c0 .71.107 1.372.322 1.984.214.613.533 1.142.957 1.59.426.45.962.8 1.608 1.055.649.252 1.405.377 2.271.377.811 0 1.53-.1 2.155-.302a8.718 8.718 0 0 0 1.802-.82v1.094c0 .45-.066.886-.202 1.311a3.045 3.045 0 0 1-.651 1.137 3.136 3.136 0 0 1-1.16.791c-.474.198-1.058.296-1.746.296-.132 0-.29-.008-.476-.021-.188-.013-.378-.031-.574-.049a6.584 6.584 0 0 1-.565-.078 2.231 2.231 0 0 1-.442-.118l-.895 2.244c.178.075.406.137.685.189a15.7 15.7 0 0 0 1.706.218c.27.019.481.027.63.027 1.203 0 2.217-.172 3.04-.52.825-.346 1.494-.799 2.007-1.36a5.04 5.04 0 0 0 1.104-1.913 7.282 7.282 0 0 0 .335-2.181V13.93H87.18v10.029z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      })));
    }
  }]);

  return VoyLogo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_VNextChrome_GlobalHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/VNextChrome/GlobalHeader */ "./components/VNextChrome/GlobalHeader.js");
/* harmony import */ var _components_VNextChrome_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/VNextChrome/Tabs */ "./components/VNextChrome/Tabs.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/brspeight/dev-proto/react/vnext3/pages/_app.js";


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  html {\n    height: 100%;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 16px;\n    box-sizing: border-box;\n  }\n  body {\n    height: 100%;\n    margin: 0;\n    padding: 0 28px 28px;\n    background: linear-gradient(\n        to bottom,\n        rgba(0, 0, 29, 0.7) 16%,\n        rgba(0, 0, 29, 0) 75%,\n        rgba(0, 0, 29, 0)\n      ),\n      url('/static/images/252339-New-York.jpg');\n    background-size: cover;\n    background-position: center top;\n    background-color: #203157;\n  }\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var Component = this.props.Component;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GlobalStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_VNextChrome_GlobalHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_VNextChrome_Tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_1___default.a);

var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["createGlobalStyle"])(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map