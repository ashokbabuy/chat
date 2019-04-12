"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.headerConfigType = exports.messageArrayType = exports.messageType = exports.messageContentEmojiValidator = exports.messageContentTextValidator = exports.MESSAGE_CONTENT_TYPE_EMOJI = exports.MESSAGE_CONTENT_TYPE_TEXT = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var momentPropTypes = require('react-moment-proptypes');
/* eslint react/destructuring-assignment: 0 */


var MESSAGE_CONTENT_TYPE_TEXT = 'text';
exports.MESSAGE_CONTENT_TYPE_TEXT = MESSAGE_CONTENT_TYPE_TEXT;
var MESSAGE_CONTENT_TYPE_EMOJI = 'emoji';
exports.MESSAGE_CONTENT_TYPE_EMOJI = MESSAGE_CONTENT_TYPE_EMOJI;

var avatarType = _propTypes.default.shape({
  email: _propTypes.default.string,
  md5Email: _propTypes.default.string,
  facebookId: _propTypes.default.string,
  twitterHandle: _propTypes.default.string,
  instagramId: _propTypes.default.string,
  googleId: _propTypes.default.string,
  skypeId: _propTypes.default.string,
  name: _propTypes.default.string,
  maxInitials: _propTypes.default.string,
  value: _propTypes.default.string,
  color: _propTypes.default.string,
  fgColor: _propTypes.default.string,
  src: _propTypes.default.string
});

var messageContentTextValidator = function messageContentTextValidator(props, propName, componentName) {
  if (props.type === MESSAGE_CONTENT_TYPE_EMOJI) {
    return null;
  }

  if (props.type === MESSAGE_CONTENT_TYPE_TEXT && typeof props[propName] !== 'string') {
    return new Error("Invalid prop '".concat(propName, "' supplied to ").concat(componentName, ". Validation failed"));
  }

  return null;
};

exports.messageContentTextValidator = messageContentTextValidator;

var messageContentEmojiValidator = function messageContentEmojiValidator(props, propName, componentName) {
  if (props.type === MESSAGE_CONTENT_TYPE_TEXT) {
    return null;
  }

  if (props.type === MESSAGE_CONTENT_TYPE_EMOJI && _typeof(props[propName]) !== 'object' && typeof props[propName] !== 'string') {
    return new Error("Invalid prop '".concat(propName, "' supplied to ").concat(componentName, ". Validation failed"));
  }

  return null;
};

exports.messageContentEmojiValidator = messageContentEmojiValidator;

var messageType = _propTypes.default.shape({
  id: _propTypes.default.string.isRequired,
  // for the react array key
  senderId: _propTypes.default.string.isRequired,
  // used to determine whether the message was sent or received
  username: _propTypes.default.string,
  // the username that will be displayed, if necessary
  avatar: avatarType,
  // the props to pass to `react-avatar`, the avatar that will be displayed, if necessary
  type: _propTypes.default.oneOf([MESSAGE_CONTENT_TYPE_TEXT, MESSAGE_CONTENT_TYPE_EMOJI]).isRequired,
  // the type of the message, determines which property will be used (text/emoji)
  text: messageContentTextValidator,
  // the plain text to display. Markdown will be parsed automatically
  emoji: messageContentEmojiValidator,
  // the emoji objet or string id, as per `emoji-mart`
  date: _propTypes.default.oneOfType([momentPropTypes.momentString, momentPropTypes.momentObj]) // the date that will be displayed, if necessary

});

exports.messageType = messageType;

var messageArrayType = _propTypes.default.arrayOf(messageType);

exports.messageArrayType = messageArrayType;

var headerConfigType = _propTypes.default.shape({
  imageUrl: _propTypes.default.string,
  headerName: _propTypes.default.string,
  onHeaderNameClick: _propTypes.default.func
});

exports.headerConfigType = headerConfigType;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MESSAGE_CONTENT_TYPE_TEXT, "MESSAGE_CONTENT_TYPE_TEXT", "/mnt/c/Projects/JS/react-chat-view/src/types/index.js");
  reactHotLoader.register(MESSAGE_CONTENT_TYPE_EMOJI, "MESSAGE_CONTENT_TYPE_EMOJI", "/mnt/c/Projects/JS/react-chat-view/src/types/index.js");
  reactHotLoader.register(avatarType, "avatarType", "/mnt/c/Projects/JS/react-chat-view/src/types/index.js");
  reactHotLoader.register(messageContentTextValidator, "messageContentTextValidator", "/mnt/c/Projects/JS/react-chat-view/src/types/index.js");
  reactHotLoader.register(messageContentEmojiValidator, "messageContentEmojiValidator", "/mnt/c/Projects/JS/react-chat-view/src/types/index.js");
  reactHotLoader.register(messageType, "messageType", "/mnt/c/Projects/JS/react-chat-view/src/types/index.js");
  reactHotLoader.register(messageArrayType, "messageArrayType", "/mnt/c/Projects/JS/react-chat-view/src/types/index.js");
  reactHotLoader.register(headerConfigType, "headerConfigType", "/mnt/c/Projects/JS/react-chat-view/src/types/index.js");
  leaveModule(module);
})();

;