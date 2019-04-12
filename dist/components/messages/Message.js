"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactAvatar = _interopRequireDefault(require("react-avatar"));

var _moment = _interopRequireDefault(require("moment"));

var _reactAnimateHeight = _interopRequireDefault(require("react-animate-height"));

var _TextMessage = _interopRequireDefault(require("./TextMessage"));

var _EmojiMessage = _interopRequireDefault(require("./EmojiMessage"));

require("../../styles/messages/message.css");

var _types = require("../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Message =
/*#__PURE__*/
function (_Component) {
  _inherits(Message, _Component);

  function Message() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Message);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Message)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      canShowDate: _this.props.shouldShowDate,
      toggleState: _this.props.shouldShowDate,
      prevPropShouldShowDate: _this.props.shouldShowDate
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_renderMessageOfType", function (type, message) {
      switch (type) {
        default:
        case _types.MESSAGE_CONTENT_TYPE_TEXT:
          return _react.default.createElement(_TextMessage.default, _extends({}, message, {
            onClick: _this.handleMessageClick
          }));

        case _types.MESSAGE_CONTENT_TYPE_EMOJI:
          return _react.default.createElement(_EmojiMessage.default, _extends({}, message, {
            onClick: _this.handleMessageClick
          }));
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMessageClick", function (e) {
      e.preventDefault();

      _this.setState(function (_ref) {
        var canShowDate = _ref.canShowDate;
        return {
          toggleState: !canShowDate
        };
      });
    });

    return _this;
  }

  _createClass(Message, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          userId = _this$props.userId,
          _this$props$message = _this$props.message,
          senderId = _this$props$message.senderId,
          type = _this$props$message.type,
          username = _this$props$message.username,
          avatar = _this$props$message.avatar,
          date = _this$props$message.date,
          message = _this$props.message,
          showAvatar = _this$props.showAvatar,
          canShowAvatar = _this$props.canShowAvatar,
          showUsername = _this$props.showUsername,
          showDate = _this$props.showDate,
          expand = _this$props.expand;
      var canShowDate = this.state.canShowDate;
      var messageIsMine = senderId === userId;
      return _react.default.createElement("div", {
        className: "sc-message ".concat(expand ? 'expand' : '')
      }, _react.default.createElement("div", {
        className: "sc-message--content ".concat(messageIsMine ? 'sent' : 'received')
      }, !messageIsMine && showAvatar && _react.default.createElement("div", {
        className: "sc-message--avatar ".concat(canShowAvatar ? '' : 'hidden')
      }, _react.default.createElement(_reactAvatar.default, _extends({}, avatar, {
        size: "30px",
        round: true
      }))), _react.default.createElement("div", {
        className: "sc-message--content---body"
      }, !messageIsMine && showUsername && _react.default.createElement("span", {
        className: "sc-message--username"
      }, username), this._renderMessageOfType(type, message), showDate && _react.default.createElement(_reactAnimateHeight.default, {
        duration: 500,
        height: canShowDate ? 'auto' : '0',
        className: "sc-message--date"
      }, (0, _moment.default)(date).format('LTS')))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var shouldShowDate = nextProps.shouldShowDate;
      var prevPropShouldShowDate = prevState.prevPropShouldShowDate,
          toggleState = prevState.toggleState;

      if (!toggleState) {
        return {
          canShowDate: false,
          prevPropShouldShowDate: prevPropShouldShowDate
        };
      }

      if (prevPropShouldShowDate && shouldShowDate || toggleState) {
        return {
          canShowDate: true,
          prevPropShouldShowDate: prevPropShouldShowDate
        };
      }

      return {
        canShowDate: false,
        prevPropShouldShowDate: prevPropShouldShowDate
      };
    }
  }]);

  return Message;
}(_react.Component);

Message.propTypes = {
  userId: _propTypes.default.string.isRequired,
  message: _types.messageType.isRequired,
  showAvatar: _propTypes.default.bool.isRequired,
  // if avatar should be displayed or collapsed
  canShowAvatar: _propTypes.default.bool.isRequired,
  // if the avatar should be displayed or whitespace
  showUsername: _propTypes.default.bool.isRequired,
  showDate: _propTypes.default.bool.isRequired,
  shouldShowDate: _propTypes.default.bool.isRequired,
  expand: _propTypes.default.bool.isRequired
};
var _default = Message;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Message, "Message", "/mnt/c/Projects/JS/react-chat-view/src/components/messages/Message.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Projects/JS/react-chat-view/src/components/messages/Message.jsx");
  leaveModule(module);
})();

;