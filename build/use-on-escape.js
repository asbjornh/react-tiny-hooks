"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useOnEscape;

var _useEvent = _interopRequireDefault(require("./use-event"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isEscape = function isEscape(e) {
  return e.key === 'Escape' || e.keyCode === 27;
};
/** Calls `callback` whenever the Escape key is pressed. */


function useOnEscape(callback) {
  var dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  (0, _useEvent["default"])('keydown', function (e) {
    return isEscape(e) && callback();
  }, dependencies);
}