"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emojiMart = require("emoji-mart");

var _types = require("../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

/* eslint react/require-default-props: 0 */
var EmojiMessage = function EmojiMessage(_ref) {
  var emoji = _ref.emoji,
      onClick = _ref.onClick;
  return _react.default.createElement("div", {
    className: "sc-message--emoji",
    onClick: onClick,
    onKeyPress: onclick,
    role: "button",
    tabIndex: 0
  }, _react.default.createElement(_emojiMart.Emoji, {
    emoji: emoji,
    size: 32
  }));
};

EmojiMessage.propTypes = {
  emoji: _types.messageContentEmojiValidator,
  onClick: _propTypes.default.func.isRequired
};
var _default = EmojiMessage;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EmojiMessage, "EmojiMessage", "/mnt/c/Projects/JS/react-chat-view/src/components/messages/EmojiMessage.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Projects/JS/react-chat-view/src/components/messages/EmojiMessage.jsx");
  leaveModule(module);
})();

;