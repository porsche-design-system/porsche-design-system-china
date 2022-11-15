"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExistFile = getExistFile;
var _fs = require("fs");
var _path = require("path");
function getExistFile({
  cwd,
  files,
  returnRelative
}) {
  for (const file of files) {
    const absFilePath = (0, _path.join)(cwd, file);
    if ((0, _fs.existsSync)(absFilePath)) {
      return returnRelative ? file : absFilePath;
    }
  }
}