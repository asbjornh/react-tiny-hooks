"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useTimer;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Internal hook not meant for public consumption.  */
function useTimer(callback) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var timerActive = _react["default"].useRef(false);

  var timer = _react["default"].useRef(); // NOTE: Callback that starts a timer if a timer isn't already running.


  var pingTimer = _react["default"].useCallback(function () {
    if (!timerActive.current) {
      timerActive.current = true;
      timer.current = setTimeout(function () {
        timerActive.current = false;
        callback();
      }, wait);
    }
  }, [callback, wait]);

  _react["default"].useEffect(function () {
    return function () {
      return clearTimeout(timer.current);
    };
  }, []);

  return pingTimer;
}