"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useToggle;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cb = _react["default"].useCallback;
/** Returns `[isActive, toggle, activate, deactivate]` */

function useToggle() {
  var initiallyActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var _React$useState = _react["default"].useState(initiallyActive),
      isActive = _React$useState[0],
      setIsActive = _React$useState[1];

  var toggle = cb(function () {
    return setIsActive(function (a) {
      return !a;
    });
  });
  var activate = cb(function () {
    return setIsActive(true);
  });
  var deactivate = cb(function () {
    return setIsActive(false);
  });
  return [isActive, toggle, activate, deactivate];
}