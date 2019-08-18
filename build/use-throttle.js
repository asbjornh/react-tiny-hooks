"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useThrottle;

var _react = _interopRequireDefault(require("react"));

var _useThrottledTimer = _interopRequireDefault(require("./utils/use-throttled-timer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Returns a throttled version of `value` */
function useThrottle(value) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var valueRef = _react["default"].useRef(value);

  var _React$useState = _react["default"].useState(value),
      throttledValue = _React$useState[0],
      setThrottledValue = _React$useState[1];

  var pingTimer = (0, _useThrottledTimer["default"])(_react["default"].useCallback(function () {
    return setThrottledValue(valueRef.current);
  }, []), wait);

  _react["default"].useEffect(function () {
    valueRef.current = value;
    pingTimer();
  }, [pingTimer, value]);

  return throttledValue;
}