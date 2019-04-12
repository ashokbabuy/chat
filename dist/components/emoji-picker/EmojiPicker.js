"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emojiMart = require("emoji-mart");

var _apple = _interopRequireDefault(require("emoji-mart/data/apple.json"));

require("emoji-mart/css/emoji-mart.css");

require("../../styles/emojiPicker.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var EmojiPicker =
/*#__PURE__*/
function (_Component) {
  _inherits(EmojiPicker, _Component);

  function EmojiPicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EmojiPicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EmojiPicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickOutside", function (event) {
      var onBlur = _this.props.onBlur;
      if (_this.domNode && !_this.domNode.contains(event.target)) onBlur();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onEmojiPicked", function (emoji) {
      var _this$props = _this.props,
          propOnEmojiPicked = _this$props.onEmojiPicked,
          onBlur = _this$props.onBlur;
      propOnEmojiPicked(emoji);
      onBlur();
    });

    return _this;
  }

  _createClass(EmojiPicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
      var elem = this.domNode;
      elem.style.opacity = 0;
      window.requestAnimationFrame(function () {
        elem.style.transition = 'opacity 350ms';
        elem.style.opacity = 1;
      });
      this.domNode.focus();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        tabIndex: "0",
        className: "sc-emoji-picker",
        ref: function ref(e) {
          return _this2.domNode = e;
        }
      }, _react.default.createElement(_emojiMart.NimblePicker, {
        autoFocus: true,
        onSelect: this.onEmojiPicked,
        set: "apple",
        data: _apple.default
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return EmojiPicker;
}(_react.Component);

EmojiPicker.propTypes = {
  onEmojiPicked: _propTypes.default.func.isRequired,
  onBlur: _propTypes.default.func.isRequired
};
var _default = EmojiPicker;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EmojiPicker, "EmojiPicker", "/mnt/c/Projects/JS/react-chat-view/src/components/emoji-picker/EmojiPicker.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Projects/JS/react-chat-view/src/components/emoji-picker/EmojiPicker.jsx");
  leaveModule(module);
})();

;