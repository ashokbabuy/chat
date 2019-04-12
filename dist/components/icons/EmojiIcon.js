"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _EmojiPicker = _interopRequireDefault(require("../emoji-picker/EmojiPicker"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

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

var EmojiIcon =
/*#__PURE__*/
function (_Component) {
  _inherits(EmojiIcon, _Component);

  function EmojiIcon() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EmojiIcon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EmojiIcon)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isActive: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handlePickerBlur", function () {
      _this.ignoreClick = true;

      _this.setState({
        isActive: false
      });

      setTimeout(function () {
        _this.ignoreClick = false;
      }, 100);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_openPicker", function (e) {
      e.preventDefault();

      if (_this.ignoreClick) {
        _this.ignoreClick = false;
        return;
      }

      _this.setState(function (_ref) {
        var isActive = _ref.isActive;
        return {
          isActive: !isActive
        };
      });
    });

    return _this;
  }

  _createClass(EmojiIcon, [{
    key: "render",
    value: function render() {
      var isActive = this.state.isActive;
      var onEmojiPicked = this.props.onEmojiPicked;
      return _react.default.createElement("div", {
        className: "sc-user-input--picker-wrapper"
      }, isActive && _react.default.createElement(_EmojiPicker.default, {
        onEmojiPicked: onEmojiPicked,
        onBlur: this._handlePickerBlur
      }), _react.default.createElement("button", {
        onClick: this._openPicker,
        className: "sc-user-input--emoji-icon-wrapper",
        type: "button"
      }, _react.default.createElement("svg", {
        className: "sc-user-input--emoji-icon ".concat(isActive ? 'active' : ''),
        version: "1.1",
        id: "Layer_2",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        width: "37.393px",
        height: "37.393px",
        viewBox: "0 0 37.393 37.393",
        enableBackground: "new 0 0 37.393 37.393"
      }, _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M18.696,37.393C8.387,37.393,0,29.006,0,18.696C0,8.387,8.387,0,18.696,0c10.31,0,18.696,8.387,18.696,18.696 C37.393,29.006,29.006,37.393,18.696,37.393z M18.696,2C9.49,2,2,9.49,2,18.696c0,9.206,7.49,16.696,16.696,16.696 c9.206,0,16.696-7.49,16.696-16.696C35.393,9.49,27.902,2,18.696,2z"
      })), _react.default.createElement("g", null, _react.default.createElement("circle", {
        cx: "12.379",
        cy: "14.359",
        r: "1.938"
      })), _react.default.createElement("g", null, _react.default.createElement("circle", {
        cx: "24.371",
        cy: "14.414",
        r: "1.992"
      })), _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M18.035,27.453c-5.748,0-8.342-4.18-8.449-4.357c-0.286-0.473-0.135-1.087,0.338-1.373 c0.471-0.286,1.084-0.136,1.372,0.335c0.094,0.151,2.161,3.396,6.74,3.396c4.713,0,7.518-3.462,7.545-3.497 c0.343-0.432,0.973-0.504,1.405-0.161c0.433,0.344,0.505,0.973,0.161,1.405C27.009,23.374,23.703,27.453,18.035,27.453z"
      })))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return EmojiIcon;
}(_react.Component);

EmojiIcon.propTypes = {
  onEmojiPicked: _propTypes.default.func.isRequired
};
var _default = EmojiIcon;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EmojiIcon, "EmojiIcon", "/mnt/c/Projects/JS/react-chat-view/src/components/icons/EmojiIcon.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Projects/JS/react-chat-view/src/components/icons/EmojiIcon.jsx");
  leaveModule(module);
})();

;