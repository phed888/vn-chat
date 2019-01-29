webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/VNextElements/ChatInput.js":
/*!***********************************************!*\
  !*** ./components/VNextElements/ChatInput.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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

var ChatInputContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (ChatInput);

/***/ })

})
//# sourceMappingURL=index.js.9689c54d6cdc2fa5c3ca.hot-update.js.map