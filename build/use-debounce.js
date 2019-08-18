"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useDebounce;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Returns a debounced version of `value`. Useful for stuff like autosuggest. */
function useDebounce(value) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var _React$useState = _react["default"].useState(value),
      debouncedValue = _React$useState[0],
      setDebouncedValue = _React$useState[1];

  _react["default"].useEffect(function () {
    var timerId = setTimeout(function () {
      return setDebouncedValue(value);
    }, wait);
    return function () {
      return clearTimeout(timerId);
    };
  }, [value, wait]);

  return debouncedValue;
}