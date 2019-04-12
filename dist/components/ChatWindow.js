"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MessageList = _interopRequireDefault(require("./messages/MessageList"));

var _UserInput = _interopRequireDefault(require("./UserInput"));

var _Header = _interopRequireDefault(require("./Header"));

require("../styles/chatWindow.css");

var _types = require("../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ChatWindow = function ChatWindow(_ref) {
  var userId = _ref.userId,
      messageList = _ref.messageList,
      onUserInputSubmit = _ref.onUserInputSubmit,
      isOpen = _ref.isOpen,
      headerConfig = _ref.headerConfig,
      onClose = _ref.onClose,
      showEmoji = _ref.showEmoji,
      showUsername = _ref.showUsername,
      showAvatar = _ref.showAvatar,
      avatarTopPosition = _ref.avatarTopPosition,
      showDate = _ref.showDate,
      minDateDiff = _ref.minDateDiff,
      isTyping = _ref.isTyping;
  return _react.default.createElement("div", {
    className: "sc-chat-window ".concat(isOpen ? 'opened' : 'closed')
  }, _react.default.createElement(_Header.default, _extends({}, headerConfig, {
    onClose: onClose
  })), _react.default.createElement(_MessageList.default, {
    messages: messageList,
    userId: userId,
    showUsername: showUsername,
    showAvatar: showAvatar,
    avatarTopPosition: avatarTopPosition,
    showDate: showDate,
    minDateDiff: minDateDiff,
    isTyping: isTyping
  }), _react.default.createElement(_UserInput.default, {
    showEmoji: showEmoji,
    onSubmit: onUserInputSubmit
  }));
};

ChatWindow.propTypes = {
  userId: _propTypes.default.string.isRequired,
  messageList: _types.messageArrayType.isRequired,
  onClose: _propTypes.default.func.isRequired,
  onUserInputSubmit: _propTypes.default.func.isRequired,
  isOpen: _propTypes.default.bool.isRequired,
  headerConfig: _types.headerConfigType.isRequired,
  showEmoji: _propTypes.default.bool.isRequired,
  showUsername: _propTypes.default.bool.isRequired,
  showAvatar: _propTypes.default.bool.isRequired,
  avatarTopPosition: _propTypes.default.bool.isRequired,
  showDate: _propTypes.default.bool.isRequired,
  minDateDiff: _propTypes.default.number.isRequired,
  isTyping: _propTypes.default.bool.isRequired
};
var _default = ChatWindow;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ChatWindow, "ChatWindow", "/mnt/c/Projects/JS/react-chat-view/src/components/ChatWindow.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Projects/JS/react-chat-view/src/components/ChatWindow.jsx");
  leaveModule(module);
})();

;