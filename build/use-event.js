"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useEvent;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Attach an event listener to `window`. */
function useEvent(eventName, eventHandler) {
  var dependencies = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  _react["default"].useEffect(function () {
    if (eventName && eventHandler) {
      window.addEventListener(eventName, eventHandler);
      return function () {
        return window.removeEventListener(eventName, eventHandler);
      };
    }
  }, dependencies);
}