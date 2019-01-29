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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/VNextElements/ChatInput.js":
/*!***********************************************!*\
  !*** ./components/VNextElements/ChatInput.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brspeight/dev-proto/react/vnext3/components/VNextElements/ChatInput.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: rgba(0, 0, 30, 0.02);\n  border-top: 1px solid rgba(0, 0, 30, 0.12);\n  padding: 16px 20px;\n  position: relative;\n  input {\n    border: 1px solid rgba(0, 0, 30, 0.12);\n    font-size: 14px;\n    border-radius: 4px;\n    background-color: #fff;\n    height: 52px;\n    width: 100%;\n    padding: 0 66px 0 16px;\n  }\n  input::placeholder {\n    font-style: italic;\n    font-size: 14px;\n    color: rgba(0, 0, 30, 0.6);\n  }\n  button {\n    border: none;\n    background-color: transparent;\n    position: absolute;\n    padding: 16px;\n    right: 20px;\n    font-size: 14px;\n    color: rgba(0, 0, 30, 0.28);\n    height: 52px;\n    cursor: pointer;\n  }\n"]);

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




var ChatInput =
/*#__PURE__*/
function (_Component) {
  _inherits(ChatInput, _Component);

  function ChatInput(props) {
    var _this;

    _classCallCheck(this, ChatInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChatInput).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (event) {
      _this.setState({
        textInput: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submitChange", function (event) {
      event.preventDefault();

      _this.props.testFunc('From ChatInput');

      _this.setState({
        textInput: ''
      });
    });

    _this.state = {
      textInput: ''
    };
    return _this;
  }

  _createClass(ChatInput, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChatInputContainer, {
        onSubmit: this.submitChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        placeholder: this.props.inputPlaceholder,
        value: this.state.textInput,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, this.props.submitTitle));
    }
  }]);

  return ChatInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var ChatInputContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (ChatInput);

/***/ }),

/***/ "./components/VNextLayout/PaneBot.js":
/*!*******************************************!*\
  !*** ./components/VNextLayout/PaneBot.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaneBot; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_ChatBot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/ChatBot */ "./components/icons/ChatBot.js");
/* harmony import */ var _VNextElements_ChatInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VNextElements/ChatInput */ "./components/VNextElements/ChatInput.js");
var _jsxFileName = "/Users/brspeight/dev-proto/react/vnext3/components/VNextLayout/PaneBot.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: rgba(255, 255, 255, 0.4);\n  display: flex;\n  flex-direction: column;\n  header {\n    display: flex;\n    align-items: center;\n    padding: 40px 20px 20px;\n    background-color: #fff;\n    height: 80px;\n    font-size: 16px;\n    border-radius: 0 4px 0 0;\n  }\n  .title,\n  .subtitle {\n    padding: 0;\n    margin: 0;\n  }\n  .header-title {\n    padding-left: 16px;\n  }\n  .title {\n    font-size: 16px;\n    color: #00001e;\n  }\n  .subtitle {\n    font-size: 12px;\n    color: #00001e;\n    opacity: 0.6;\n    margin-top: 2px;\n  }\n  .conversation {\n    height: 100%;\n  }\n  .chat-container {\n    display: grid;\n    grid-template-columns: 100%;\n    grid-template-rows: auto 84px;\n    height: calc(100vh - 222px);\n    border-radius: 0 0 4px 0;\n  }\n"]);

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






var PaneBot =
/*#__PURE__*/
function (_Component) {
  _inherits(PaneBot, _Component);

  function PaneBot() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PaneBot);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PaneBot)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function () {
      _this.props.testFunc('Bloop');
    });

    return _this;
  }

  _createClass(PaneBot, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BotPane, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_ChatBot__WEBPACK_IMPORTED_MODULE_2__["default"], {
        color: "#4a4a4a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Agent Help Bot"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Have a trip or service question?"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VNextElements_ChatInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
        submitTitle: "Go",
        inputPlaceholder: "Placeholder text...",
        testFunc: this.props.testFunc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }));
    }
  }]);

  return PaneBot;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


var BotPane = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());

/***/ }),

/***/ "./components/VNextLayout/PaneChat.js":
/*!********************************************!*\
  !*** ./components/VNextLayout/PaneChat.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaneChat; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/brspeight/dev-proto/react/vnext3/components/VNextLayout/PaneChat.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PaneChat =
/*#__PURE__*/
function (_Component) {
  _inherits(PaneChat, _Component);

  function PaneChat() {
    _classCallCheck(this, PaneChat);

    return _possibleConstructorReturn(this, _getPrototypeOf(PaneChat).apply(this, arguments));
  }

  _createClass(PaneChat, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        },
        __self: this
      });
    }
  }]);

  return PaneChat;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/VNextLayout/PaneCustomer.js":
/*!************************************************!*\
  !*** ./components/VNextLayout/PaneCustomer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaneCustomer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/brspeight/dev-proto/react/vnext3/components/VNextLayout/PaneCustomer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PaneCustomer =
/*#__PURE__*/
function (_Component) {
  _inherits(PaneCustomer, _Component);

  function PaneCustomer() {
    _classCallCheck(this, PaneCustomer);

    return _possibleConstructorReturn(this, _getPrototypeOf(PaneCustomer).apply(this, arguments));
  }

  _createClass(PaneCustomer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        },
        __self: this
      });
    }
  }]);

  return PaneCustomer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/VNextLayout/VNextContainer.js":
/*!**************************************************!*\
  !*** ./components/VNextLayout/VNextContainer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VNextContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PaneCustomer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PaneCustomer */ "./components/VNextLayout/PaneCustomer.js");
/* harmony import */ var _PaneChat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PaneChat */ "./components/VNextLayout/PaneChat.js");
/* harmony import */ var _PaneBot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PaneBot */ "./components/VNextLayout/PaneBot.js");
var _jsxFileName = "/Users/brspeight/dev-proto/react/vnext3/components/VNextLayout/VNextContainer.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 24% 38% 38%;\n"]);

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







var VNextContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(VNextContainer, _Component);

  function VNextContainer(props) {
    var _this;

    _classCallCheck(this, VNextContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VNextContainer).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "testFunc", function (test) {
      console.log(test);
    });

    _this.testFunc = _this.testFunc.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      test: ''
    };
    return _this;
  }

  _createClass(VNextContainer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaneCustomer__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaneChat__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PaneBot__WEBPACK_IMPORTED_MODULE_4__["default"], {
        testFunc: this.testFunc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }));
    }
  }]);

  return VNextContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());

/***/ }),

/***/ "./components/icons/ChatBot.js":
/*!*************************************!*\
  !*** ./components/icons/ChatBot.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatBot; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/brspeight/dev-proto/react/vnext3/components/icons/ChatBot.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ChatBot =
/*#__PURE__*/
function (_Component) {
  _inherits(ChatBot, _Component);

  function ChatBot() {
    _classCallCheck(this, ChatBot);

    return _possibleConstructorReturn(this, _getPrototypeOf(ChatBot).apply(this, arguments));
  }

  _createClass(ChatBot, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        height: "40",
        width: "40",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        transform: "scale(1.538)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M15.9 12.8c-.7 0-1.3.5-1.2 1.1 0 .6.6 1.1 1.3 1.1.7 0 1.2-.5 1.2-1.1-.1-.6-.7-1.1-1.3-1.1M12.8 20c2.2 0 4.1-1.5 4.3-3.5H8.6c.2 2 2 3.5 4.2 3.5m-3-5c.7 0 1.3-.5 1.3-1.1 0-.6-.6-1.1-1.2-1.1-.7 0-1.2.5-1.2 1.1-.1.6.4 1.1 1.1 1.1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M20.6 17.3h-2c-.4 2.4-2.7 4.3-5.6 4.3h-.4c-2.8 0-5.1-1.9-5.6-4.3H5v-6h2V7.6h5.8V5.4c-.6-.1-1.1-.6-1.1-1.2 0-.7.6-1.2 1.4-1.2s1.4.6 1.4 1.2-.5 1.1-1.1 1.2v2.2h5.4v3.6h1.9v6.1zM13 0C5.8 0 0 5.8 0 13s5.8 13 13 13 13-5.8 13-13S20.2 0 13 0z",
        fill: "#4a4a4a",
        fillRule: "evenodd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      })));
    }
  }]);

  return ChatBot;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_VNextLayout_VNextContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/VNextLayout/VNextContainer */ "./components/VNextLayout/VNextContainer.js");
var _jsxFileName = "/Users/brspeight/dev-proto/react/vnext3/pages/index.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_VNextLayout_VNextContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  });
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


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
//# sourceMappingURL=index.js.map