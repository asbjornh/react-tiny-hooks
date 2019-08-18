"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useIsMounted;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function useIsMounted() {
  var _React$useState = _react["default"].useState(false),
      isMounted = _React$useState[0],
      setIsMounted = _React$useState[1];

  _react["default"].useEffect(function () {
    return setIsMounted(true);
  }, []);

  return isMounted;
}