"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GenericButton;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@chakra-ui/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function GenericButton(_ref) {
  var colourScheme = _ref.colourScheme,
      disabled = _ref.disabled,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_react2.Button, {
    colorScheme: colourScheme,
    disabled: disabled
  }, children);
}