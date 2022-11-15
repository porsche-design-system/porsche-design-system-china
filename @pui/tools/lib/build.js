"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.build = build;
exports.default = _default;
exports.getBundleOpts = getBundleOpts;
var _fs = require("fs");
var _path = require("path");
var _rimraf = _interopRequireDefault(require("rimraf"));
var _chalk = _interopRequireDefault(require("chalk"));
var assert = _interopRequireWildcard(require("assert"));
var _lodash = _interopRequireDefault(require("lodash.merge"));
var _signale = _interopRequireDefault(require("signale"));
var _registerBabel = _interopRequireDefault(require("./registerBabel"));
var _getUserConfig = _interopRequireWildcard(require("./getUserConfig"));
var _utils = require("./utils");
var _randomColor = _interopRequireDefault(require("./randomColor"));
var _rollup = _interopRequireDefault(require("./rollup"));
var _babel = _interopRequireDefault(require("./babel"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function getBundleOpts(opts) {
  const {
    cwd,
    buildArgs = {},
    rootConfig = {}
  } = opts;
  const entry = (0, _utils.getExistFile)({
    cwd,
    files: ['src/index.tsx', 'src/index.ts', 'src/index.jsx', 'src/index.js'],
    returnRelative: true
  });
  const userConfig = (0, _getUserConfig.default)({
    cwd
  });
  const userConfigs = Array.isArray(userConfig) ? userConfig : [userConfig];
  return userConfigs.map(userConfig => {
    const bundleOpts = (0, _lodash.default)(rootConfig, userConfig, buildArgs, {
      entry
    });

    // Support config esm: 'rollup' and cjs: 'rollup'
    if (typeof bundleOpts.esm === 'string') {
      bundleOpts.esm = {
        type: bundleOpts.esm
      };
    }
    if (typeof bundleOpts.cjs === 'string') {
      bundleOpts.cjs = {
        type: bundleOpts.cjs
      };
    }
    return bundleOpts;
  });
}
function isTypescriptFile(filePath) {
  return filePath.endsWith('.ts') || filePath.endsWith('.tsx');
}
function validateBundleOpts(bundleOpts, {
  cwd,
  rootPath
}) {
  if (bundleOpts.runtimeHelpers) {
    const pkgPath = (0, _path.join)(cwd, 'package.json');
    assert.ok((0, _fs.existsSync)(pkgPath), `@babel/runtime dependency is required to use runtimeHelpers`);
    const pkg = JSON.parse((0, _fs.readFileSync)(pkgPath, 'utf-8'));
    assert.ok((pkg.dependencies || {})['@babel/runtime'], `@babel/runtime dependency is required to use runtimeHelpers`);
  }
  if (bundleOpts.cjs && bundleOpts.cjs.lazy && bundleOpts.cjs.type === 'rollup') {
    throw new Error(`cjs.lazy don't support rollup.`.trim());
  }
  if (!bundleOpts.esm && !bundleOpts.cjs && !bundleOpts.umd) {
    throw new Error(`None format of ${_chalk.default.cyan('cjs | esm | umd')} is configured, checkout https://github.com/umijs/father for usage details.`.trim());
  }
  if (bundleOpts.entry) {
    const tsConfigPath = (0, _path.join)(cwd, 'tsconfig.json');
    const tsConfig = (0, _fs.existsSync)(tsConfigPath) || rootPath && (0, _fs.existsSync)((0, _path.join)(rootPath, 'tsconfig.json'));
    if (!tsConfig && (Array.isArray(bundleOpts.entry) && bundleOpts.entry.some(isTypescriptFile) || !Array.isArray(bundleOpts.entry) && isTypescriptFile(bundleOpts.entry))) {
      _signale.default.info(`Project using ${_chalk.default.cyan('typescript')} but tsconfig.json not exists. Use default config.`);
    }
  }
}
async function build(opts, extraOpts = {}) {
  const {
    cwd,
    rootPath,
    watch
  } = opts;
  const {
    pkg
  } = extraOpts;

  // register babel for config files
  (0, _registerBabel.default)({
    cwd,
    only: _getUserConfig.CONFIG_FILES
  });

  // Get user config
  const bundleOptsArray = getBundleOpts(opts);
  function log(msg) {
    console.log(`${pkg ? `${(0, _randomColor.default)(`${pkg}`)}: ` : ''}${msg}`);
  }
  for (const bundleOpts of bundleOptsArray) {
    validateBundleOpts(bundleOpts, {
      cwd,
      rootPath
    });

    // Clean dist
    log(_chalk.default.gray(`Clean dist directory`));
    _rimraf.default.sync((0, _path.join)(cwd, 'dist'));

    // Build umd
    if (bundleOpts.umd) {
      log(`Build umd`);
      await (0, _rollup.default)({
        cwd,
        log,
        type: 'umd',
        entry: bundleOpts.entry,
        watch,
        bundleOpts
      });
    }

    // Build cjs
    if (bundleOpts.cjs) {
      const cjs = bundleOpts.cjs;
      log(`Build cjs with ${cjs.type}`);
      if (cjs.type === 'babel') {
        await (0, _babel.default)({
          cwd,
          rootPath,
          watch,
          type: 'cjs',
          log,
          bundleOpts
        });
      } else {
        await (0, _rollup.default)({
          cwd,
          log,
          type: 'cjs',
          entry: bundleOpts.entry,
          watch,
          bundleOpts
        });
      }
    }

    // Build esm
    if (bundleOpts.esm) {
      const esm = bundleOpts.esm;
      log(`Build esm with ${esm.type}`);
      const importLibToEs = esm && esm.importLibToEs;
      if (esm && esm.type === 'babel') {
        await (0, _babel.default)({
          cwd,
          rootPath,
          watch,
          type: 'esm',
          importLibToEs,
          log,
          bundleOpts
        });
      } else {
        await (0, _rollup.default)({
          cwd,
          log,
          type: 'esm',
          entry: bundleOpts.entry,
          importLibToEs,
          watch,
          bundleOpts
        });
      }
    }
  }
}
async function _default(opts) {
  await build(opts);
}