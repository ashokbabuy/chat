"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _reactAnimateHeight = _interopRequireDefault(require("react-animate-height"));

var _Message = _interopRequireDefault(require("./Message"));

var _types = require("../../types");

require("../../styles/messages/messageList.css");

var _TypingIndicator = _interopRequireDefault(require("./TypingIndicator"));

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

var MessageList =
/*#__PURE__*/
function (_Component) {
  _inherits(MessageList, _Component);

  function MessageList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MessageList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MessageList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "messageList", function () {
      var _this$props = _this.props,
          userId = _this$props.userId,
          messages = _this$props.messages,
          propShowUsername = _this$props.showUsername,
          propShowAvatar = _this$props.showAvatar,
          avatarTopPosition = _this$props.avatarTopPosition,
          showDate = _this$props.showDate,
          minDateDiff = _this$props.minDateDiff;
      var lastSenderId = '';
      return messages.map(function (message, index) {
        var lastSenderIsDiff = lastSenderId !== message.senderId;
        var nextSenderIsSame = index < messages.length - 1 && messages[index + 1].senderId === message.senderId;
        var canShowAvatar = avatarTopPosition ? lastSenderIsDiff : !nextSenderIsSame;
        var dateDiff = index > 0 ? (0, _moment.default)(message.date).diff((0, _moment.default)(messages[index - 1].date), 'seconds') : 0;
        var shouldShowDate = index === 0 || dateDiff >= minDateDiff;

        var messageComp = _react.default.createElement(_Message.default, {
          key: message.id,
          message: message,
          userId: userId,
          showUsername: propShowUsername && lastSenderIsDiff,
          showAvatar: propShowAvatar,
          canShowAvatar: canShowAvatar,
          showDate: showDate,
          shouldShowDate: shouldShowDate,
          expand: lastSenderIsDiff
        });

        lastSenderId = message.senderId;
        return messageComp;
      });
    });

    return _this;
  }

  _createClass(MessageList, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollList.scrollTop = this.scrollList.scrollHeight;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var isTyping = this.props.isTyping;
      return _react.default.createElement("div", {
        className: "sc-message-list",
        ref: function ref(el) {
          return _this2.scrollList = el;
        }
      }, this.messageList(), _react.default.createElement(_reactAnimateHeight.default, {
        duration: 500,
        height: isTyping ? 'auto' : '0',
        className: "sc-message--date"
      }, _react.default.createElement(_TypingIndicator.default, {
        nDots: 5
      })), _react.default.createElement("div", {
        style: {
          paddingBottom: '15px'
        }
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

  return MessageList;
}(_react.Component);

MessageList.propTypes = {
  userId: _propTypes.default.string.isRequired,
  messages: _types.messageArrayType.isRequired,
  showUsername: _propTypes.default.bool.isRequired,
  showAvatar: _propTypes.default.bool.isRequired,
  avatarTopPosition: _propTypes.default.bool.isRequired,
  showDate: _propTypes.default.bool.isRequired,
  minDateDiff: _propTypes.default.number.isRequired,
  isTyping: _propTypes.default.bool.isRequired
};
var _default = MessageList;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MessageList, "MessageList", "/mnt/c/Projects/JS/react-chat-view/src/components/messages/MessageList.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Projects/JS/react-chat-view/src/components/messages/MessageList.jsx");
  leaveModule(module);
})();

;