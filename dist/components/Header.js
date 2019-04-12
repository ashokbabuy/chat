"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _closeIcon = _interopRequireDefault(require("../assets/close-icon.png"));

require("../styles/header.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var Header = function Header(_ref) {
  var imageUrl = _ref.imageUrl,
      headerName = _ref.headerName,
      onClose = _ref.onClose,
      onHeaderNameClick = _ref.onHeaderNameClick;
  return _react.default.createElement("div", {
    className: "sc-header"
  }, _react.default.createElement("div", {
    className: "sc-header--img"
  }, imageUrl && _react.default.createElement("img", {
    className: "sc-header--img",
    src: imageUrl,
    alt: ""
  })), _react.default.createElement("div", {
    className: "sc-header--team-name ".concat(headerName && onHeaderNameClick ? 'enabled' : ''),
    onClick: onHeaderNameClick,
    onKeyPress: onHeaderNameClick,
    role: "button",
    tabIndex: 0
  }, ' ', headerName, ' '), _react.default.createElement("div", {
    className: "sc-header--close-button",
    onClick: onClose,
    onKeyPress: onClose,
    role: "button",
    tabIndex: 0
  }, _react.default.createElement("img", {
    src: _closeIcon.default,
    alt: ""
  })));
};

Header.propTypes = {
  imageUrl: _propTypes.default.string,
  headerName: _propTypes.default.string,
  onHeaderNameClick: _propTypes.default.func,
  onClose: _propTypes.default.func.isRequired
};
Header.defaultProps = {
  imageUrl: '',
  headerName: '',
  onHeaderNameClick: undefined
};
var _default = Header;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, "Header", "/mnt/c/Projects/JS/react-chat-view/src/components/Header.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Projects/JS/react-chat-view/src/components/Header.jsx");
  leaveModule(module);
})();

;