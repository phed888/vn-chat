webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/VNextLayout/PaneBot.js":
/*!*******************************************!*\
  !*** ./components/VNextLayout/PaneBot.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaneBot; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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


var BotPane = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());

/***/ })

})
//# sourceMappingURL=index.js.32eba1b2bc5a1261f1c5.hot-update.js.map