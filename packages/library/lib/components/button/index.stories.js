"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disabledButton = exports["default"] = exports.coloredButton = exports.basicButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "GenericButton"
};
exports["default"] = _default;

var basicButton = function basicButton() {
  return /*#__PURE__*/_react["default"].createElement(_["default"], null, "Basic Button");
};

exports.basicButton = basicButton;

var coloredButton = function coloredButton() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    colourScheme: "teal"
  }, "Teal"), /*#__PURE__*/_react["default"].createElement(_["default"], {
    colourScheme: "pink"
  }, "Pink"));
};

exports.coloredButton = coloredButton;

var disabledButton = function disabledButton() {
  return /*#__PURE__*/_react["default"].createElement(_["default"], {
    disabled: true
  }, "Disabled Button");
};

exports.disabledButton = disabledButton;