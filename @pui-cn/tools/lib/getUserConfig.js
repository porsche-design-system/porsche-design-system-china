"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONFIG_FILES = void 0;
exports.default = _default;
var _ajv = _interopRequireDefault(require("ajv"));
var _slash = _interopRequireDefault(require("slash2"));
var _path = require("path");
var _schema = _interopRequireDefault(require("./schema"));
var _utils = require("./utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function testDefault(obj) {
  return obj.default || obj;
}
const CONFIG_FILES = ['.ptoolsrc.js', '.ptoolsrc.jsx', '.ptoolsrc.ts', '.ptoolsrc.tsx'];
exports.CONFIG_FILES = CONFIG_FILES;
function _default({
  cwd
}) {
  const configFile = (0, _utils.getExistFile)({
    cwd,
    files: CONFIG_FILES,
    returnRelative: false
  });
  if (configFile) {
    const userConfig = testDefault(require(configFile)); // eslint-disable-line
    const userConfigs = Array.isArray(userConfig) ? userConfig : [userConfig];
    userConfigs.forEach(userConfig => {
      const ajv = new _ajv.default({
        allErrors: true
      });
      const isValid = ajv.validate(_schema.default, userConfig);
      if (!isValid) {
        const errors = ajv.errors.map(({
          dataPath,
          message
        }, index) => {
          return `${index + 1}. ${dataPath}${dataPath ? ' ' : ''}${message}`;
        });
        throw new Error(`Invalid options in ${(0, _slash.default)((0, _path.relative)(cwd, configFile))}${errors.join('\n')}`.trim());
      }
    });
    return userConfig;
  } else {
    return {};
  }
}