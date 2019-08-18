"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = usePrevious;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Returns the value of `value` from the previous render. */
function usePrevious(value, initialValue) {
  var state = _react["default"].useRef(initialValue);

  _react["default"].useEffect(function () {
    state.current = value;
  }, [value]);

  return state.current;
}