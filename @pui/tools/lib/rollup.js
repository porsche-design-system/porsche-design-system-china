"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _rollup = require("rollup");
var _signale = _interopRequireDefault(require("signale"));
var _getRollupConfig = _interopRequireDefault(require("./getRollupConfig"));
var _normalizeBundleOpts = _interopRequireDefault(require("./normalizeBundleOpts"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function build(entry, opts) {
  const {
    cwd,
    type,
    log,
    bundleOpts,
    importLibToEs
  } = opts;
  const rollupConfigs = (0, _getRollupConfig.default)({
    cwd,
    type,
    entry,
    importLibToEs,
    bundleOpts: (0, _normalizeBundleOpts.default)(entry, bundleOpts)
  });
  for (const rollupConfig of rollupConfigs) {
    if (opts.watch) {
      const watcher = (0, _rollup.watch)([{
        ...rollupConfig,
        watch: {}
      }]);
      watcher.on('event', event => {
        if (event.error) {
          _signale.default.error(event.error);
        } else if (event.code === 'START') {
          log(`[${type}] Rebuild since file changed`);
        }
      });
      process.once('SIGINT', () => {
        watcher.close();
      });
    } else {
      const {
        output,
        ...input
      } = rollupConfig;
      const bundle = await (0, _rollup.rollup)(input); // eslint-disable-line
      await bundle.write(output); // eslint-disable-line
    }
  }
}

async function _default(opts) {
  if (Array.isArray(opts.entry)) {
    const {
      entry: entries
    } = opts;
    for (const entry of entries) {
      await build(entry, opts);
    }
  } else {
    await build(opts.entry, opts);
  }
}