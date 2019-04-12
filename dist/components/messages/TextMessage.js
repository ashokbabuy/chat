"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _emojiMart = require("emoji-mart");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _types = require("../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var MarkdownIt = require('markdown-it');

var emoji = require('markdown-it-emoji');
/* eslint react/no-danger: 0, react/require-default-props: 0 */


var md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true
});
md.use(emoji);

md.renderer.rules.emoji = function (tokens, idx) {
  return _server.default.renderToString(_react.default.createElement(_emojiMart.Emoji, {
    emoji: tokens[idx].markup,
    size: 25
  }));
};

var TextMessage = function TextMessage(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick;

  var renderMarkdown = function renderMarkdown() {
    return {
      __html: md.render(text)
    };
  };

  return _react.default.createElement("div", {
    className: "sc-message--text",
    dangerouslySetInnerHTML: renderMarkdown(),
    onClick: onClick,
    onKeyPress: onclick,
    role: "button",
    tabIndex: 0
  });
};

TextMessage.propTypes = {
  text: _types.messageContentTextValidator,
  onClick: _propTypes.default.func.isRequired
};
var _default = TextMessage;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(md, "md", "/mnt/c/Projects/JS/react-chat-view/src/components/messages/TextMessage.jsx");
  reactHotLoader.register(TextMessage, "TextMessage", "/mnt/c/Projects/JS/react-chat-view/src/components/messages/TextMessage.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Projects/JS/react-chat-view/src/components/messages/TextMessage.jsx");
  leaveModule(module);
})();

;