"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("../../styles/messages/typingIndicator.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

/* eslint react/no-array-index-key: 0 */
var TypingIndicator = function TypingIndicator(_ref) {
  var nDots = _ref.nDots;
  return _react.default.createElement("div", {
    className: "typing-indicator-container"
  }, _react.default.createElement("div", {
    className: "typing-indicator"
  }, Array.from(Array(nDots)).map(function (dot, index) {
    return _react.default.createElement("span", {
      key: index,
      className: "typing-indicator-dot",
      style: {
        animation: "1s blink infinite ".concat(1 / nDots * (index + 1), "s")
      }
    });
  })));
};

TypingIndicator.propTypes = {
  nDots: _propTypes.default.number
};
TypingIndicator.defaultProps = {
  nDots: 3
};
var _default = TypingIndicator;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TypingIndicator, "TypingIndicator", "/mnt/c/Projects/JS/react-chat-view/src/components/messages/TypingIndicator.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Projects/JS/react-chat-view/src/components/messages/TypingIndicator.jsx");
  leaveModule(module);
})();

;