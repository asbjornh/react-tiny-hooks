"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useCounter;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cb = _react["default"].useCallback;
/** Returns `[count, increase, decrease, setCount]` */

function useCounter() {
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
  var step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  var _React$useState = _react["default"].useState(initialValue),
      count = _React$useState[0],
      set = _React$useState[1];

  var increase = cb(function () {
    return set(function (c) {
      return Math.min(max, c + step);
    });
  }, [min, step]);
  var decrease = cb(function () {
    return set(function (c) {
      return Math.max(min, c - step);
    });
  }, [max, step]);
  return [count, increase, decrease, set];
}