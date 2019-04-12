"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _SendIcon = _interopRequireDefault(require("./icons/SendIcon"));

var _EmojiIcon = _interopRequireDefault(require("./icons/EmojiIcon"));

require("../styles/userInput.css");

var _types = require("../types");

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

var UserInput =
/*#__PURE__*/
function (_Component) {
  _inherits(UserInput, _Component);

  function UserInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UserInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UserInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      inputActive: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKey", function (event) {
      if (event.keyCode === 13 && !event.shiftKey) {
        _this._submitText(event);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearInput", function () {
      return _this.userInput.value = '';
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_submitText", function (event) {
      event.preventDefault();
      var onSubmit = _this.props.onSubmit;
      var text = _this.userInput.value;

      if (text && text.length > 0) {
        onSubmit({
          type: _types.MESSAGE_CONTENT_TYPE_TEXT,
          text: text
        });

        _this.clearInput();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleEmojiPicked", function (emoji) {
      var onSubmit = _this.props.onSubmit;
      onSubmit({
        type: _types.MESSAGE_CONTENT_TYPE_EMOJI,
        emoji: emoji
      });
    });

    return _this;
  }

  _createClass(UserInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var inputActive = this.state.inputActive;
      var showEmoji = this.props.showEmoji;
      return _react.default.createElement("form", {
        className: "sc-user-input ".concat(inputActive ? 'active' : '')
      }, _react.default.createElement("textarea", {
        onFocus: function onFocus() {
          _this2.setState({
            inputActive: true
          });
        },
        onBlur: function onBlur() {
          _this2.setState({
            inputActive: false
          });
        },
        ref: function ref(e) {
          _this2.userInput = e;
        },
        onKeyDown: this.handleKey,
        placeholder: "Write a reply...",
        className: "sc-user-input--text"
      }), _react.default.createElement("div", {
        className: "sc-user-input--buttons"
      }, _react.default.createElement("div", {
        className: "sc-user-input--button"
      }, showEmoji && _react.default.createElement(_EmojiIcon.default, {
        onEmojiPicked: this._handleEmojiPicked
      })), _react.default.createElement("div", {
        className: "sc-user-input--button"
      }, _react.default.createElement(_SendIcon.default, {
        onClick: this._submitText
      }))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return UserInput;
}(_react.Component);

UserInput.propTypes = {
  onSubmit: _propTypes.default.func.isRequired,
  showEmoji: _propTypes.default.bool.isRequired
};
var _default = UserInput;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UserInput, "UserInput", "/mnt/c/Projects/JS/react-chat-view/src/components/UserInput.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Projects/JS/react-chat-view/src/components/UserInput.jsx");
  leaveModule(module);
})();

;