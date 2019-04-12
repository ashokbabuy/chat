"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _ChatWindow = _interopRequireDefault(require("./ChatWindow"));

var _logoNoBg = _interopRequireDefault(require("../assets/logo-no-bg.png"));

var _closeIcon = _interopRequireDefault(require("../assets/close-icon.png"));

var _types = require("../types");

require("../styles/launcher.css");

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

var Launcher =
/*#__PURE__*/
function (_Component) {
  _inherits(Launcher, _Component);

  function Launcher() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Launcher);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Launcher)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function () {
      var propHandleClick = _this.props.handleClick;

      if (propHandleClick) {
        propHandleClick();
      } else {
        _this.setState(function (_ref) {
          var isOpen = _ref.isOpen;
          return {
            isOpen: !isOpen
          };
        });
      }
    });

    return _this;
  }

  _createClass(Launcher, [{
    key: "render",
    value: function render() {
      var stateIsOpen = this.state.isOpen;
      var _this$props = this.props,
          userId = _this$props.userId,
          propIsOpen = _this$props.isOpen,
          newMessagesCount = _this$props.newMessagesCount,
          messageList = _this$props.messageList,
          onMessageWasSent = _this$props.onMessageWasSent,
          headerConfig = _this$props.headerConfig,
          showEmoji = _this$props.showEmoji,
          showUsername = _this$props.showUsername,
          showAvatar = _this$props.showAvatar,
          avatarTopPosition = _this$props.avatarTopPosition,
          showDate = _this$props.showDate,
          minDateDiff = _this$props.minDateDiff,
          isTyping = _this$props.isTyping;
      var isOpen = propIsOpen !== null ? propIsOpen : stateIsOpen;
      return _react.default.createElement("div", null, _react.default.createElement("div", null), _react.default.createElement("div", {
        className: "sc-launcher ".concat(isOpen ? 'opened' : ''),
        onClick: this.handleClick,
        onKeyPress: this.handleClick,
        role: "button",
        tabIndex: 0
      }, _react.default.createElement(MessageCount, {
        count: newMessagesCount,
        isOpen: isOpen
      }), _react.default.createElement("img", {
        className: "sc-open-icon",
        src: _closeIcon.default,
        alt: "open chat"
      }), _react.default.createElement("img", {
        className: "sc-closed-icon",
        src: _logoNoBg.default,
        alt: "close chat"
      })), _react.default.createElement(_ChatWindow.default, {
        userId: userId,
        isOpen: isOpen,
        onClose: this.handleClick,
        messageList: messageList,
        onUserInputSubmit: onMessageWasSent,
        headerConfig: headerConfig,
        showEmoji: showEmoji,
        showUsername: showUsername,
        showAvatar: showAvatar,
        avatarTopPosition: avatarTopPosition,
        showDate: showDate,
        minDateDiff: minDateDiff,
        isTyping: isTyping
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

  return Launcher;
}(_react.Component);

var MessageCount = function MessageCount(_ref2) {
  var count = _ref2.count,
      isOpen = _ref2.isOpen;
  if (!count || isOpen) return null;
  return _react.default.createElement("div", {
    className: "sc-new-messsages-count"
  }, count);
};

Launcher.propTypes = {
  userId: _propTypes.default.string.isRequired,
  // the user's id. Used to determine whether a message is his or not (display right/left)
  isOpen: _propTypes.default.bool,
  // leave null or dont set to handle state internally
  handleClick: _propTypes.default.func,
  // fired on button click and header close, use this to determine your own `isOpen` state
  headerConfig: _types.headerConfigType,
  messageList: _types.messageArrayType,
  // the array of messages to display
  onMessageWasSent: _propTypes.default.func.isRequired,
  // Called when the user submits text or an emoji. Passes a single object parameter with keys `text` and `text/emoji`
  newMessagesCount: _propTypes.default.number,
  // the number for the unread messages counter
  showEmoji: _propTypes.default.bool,
  // show the emoji picker, does not change markdown emoji parsing
  showUsername: _propTypes.default.bool,
  // globally enable/disable usernames
  showAvatar: _propTypes.default.bool,
  // globally enable/disable avatars
  avatarTopPosition: _propTypes.default.bool,
  // true for top, false for bottom
  showDate: _propTypes.default.bool,
  // globally enable/disable dates
  minDateDiff: _propTypes.default.number,
  // the min amount of time betweeen messages to automatically display the date (in seconds)
  isTyping: _propTypes.default.bool // show typing indicator

};
Launcher.defaultProps = {
  isOpen: null,
  handleClick: undefined,
  headerConfig: {
    imageUrl: '',
    headerName: '',
    onHeaderNameClick: undefined
  },
  messageList: [],
  newMessagesCount: 0,
  showEmoji: true,
  showUsername: true,
  showAvatar: true,
  avatarTopPosition: false,
  showDate: true,
  minDateDiff: 60 * 5,
  isTyping: false
};
var _default = Launcher;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Launcher, "Launcher", "/mnt/c/Projects/JS/react-chat-view/src/components/Launcher.jsx");
  reactHotLoader.register(MessageCount, "MessageCount", "/mnt/c/Projects/JS/react-chat-view/src/components/Launcher.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Projects/JS/react-chat-view/src/components/Launcher.jsx");
  leaveModule(module);
})();

;
