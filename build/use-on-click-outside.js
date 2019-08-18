"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useOnClickOutside;

var _react = _interopRequireDefault(require("react"));

var _useEvent = _interopRequireDefault(require("./use-event"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Returns a ref to be attached to a React element. Whenever a click event occurs outside of that ref, `callback` is called.
 */
function useOnClickOutside(callback) {
  var dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _React$useState = _react["default"].useState(),
      node = _React$useState[0],
      setNode = _React$useState[1];

  (0, _useEvent["default"])('click', function (e) {
    return node && node !== e.target && !node.contains(e.target) && callback();
  }, dependencies.concat(node));
  return setNode;
}