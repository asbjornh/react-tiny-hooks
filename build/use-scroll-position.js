"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useScrollPosition;

var _react = _interopRequireDefault(require("react"));

var _useEvent = _interopRequireDefault(require("./use-event"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var scrollEl = typeof document !== 'undefined' ? document.scrollingElement || document.documentElement || document.body : undefined;

function useScrollPosition() {
  var _React$useState = _react["default"].useState(scrollEl ? scrollEl.scrollTop : 0),
      pos = _React$useState[0],
      setPos = _React$useState[1];

  (0, _useEvent["default"])('scroll', function () {
    return scrollEl && setPos(scrollEl.scrollTop);
  });
  return pos;
}