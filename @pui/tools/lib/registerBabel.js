"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _path = require("path");
var _slash = _interopRequireDefault(require("slash2"));
var _getBabelConfig = _interopRequireDefault(require("./getBabelConfig"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _default(opts) {
  const {
    cwd,
    only
  } = opts;
  const {
    opts: babelConfig
  } = (0, _getBabelConfig.default)({
    target: 'node',
    typescript: true
  });
  require('@babel/register')({
    ...babelConfig,
    extensions: ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx'],
    only: only.map(file => (0, _slash.default)((0, _path.join)(cwd, file))),
    babelrc: false,
    cache: false
  });
}