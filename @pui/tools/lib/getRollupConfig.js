"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _path = require("path");
var _pluginUrl = _interopRequireDefault(require("@rollup/plugin-url"));
var _pluginJson = _interopRequireDefault(require("@rollup/plugin-json"));
var _pluginReplace = _interopRequireDefault(require("@rollup/plugin-replace"));
var _pluginCommonjs = _interopRequireDefault(require("@rollup/plugin-commonjs"));
var _pluginNodeResolve = _interopRequireDefault(require("@rollup/plugin-node-resolve"));
var _pluginInject = _interopRequireDefault(require("@rollup/plugin-inject"));
var _pluginBabel = _interopRequireDefault(require("@rollup/plugin-babel"));
var _rollupPluginPostcss = _interopRequireDefault(require("rollup-plugin-postcss"));
var _rollupPluginTerser = require("rollup-plugin-terser");
var _rollupPluginTypescript = _interopRequireDefault(require("rollup-plugin-typescript2"));
var _lodash = require("lodash");
var _tempDir = _interopRequireDefault(require("temp-dir"));
var _autoprefixer = _interopRequireDefault(require("autoprefixer"));
var _lessPluginNpmImport = _interopRequireDefault(require("less-plugin-npm-import"));
var _rollup = _interopRequireDefault(require("@svgr/rollup"));
var _getBabelConfig = _interopRequireDefault(require("./getBabelConfig"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _default(opts) {
  const {
    type,
    entry,
    cwd,
    importLibToEs,
    bundleOpts
  } = opts;
  const {
    umd,
    esm,
    cjs,
    file,
    target = 'browser',
    extractCSS = false,
    injectCSS = true,
    cssModules: modules,
    extraPostCSSPlugins = [],
    extraBabelPresets = [],
    extraBabelPlugins = [],
    extraRollupPlugins = [],
    autoprefixer: autoprefixerOpts,
    include = /node_modules/,
    runtimeHelpers: runtimeHelpersOpts,
    replace: replaceOpts,
    inject: injectOpts,
    extraExternals = [],
    externalsExclude = [],
    nodeVersion,
    typescriptOpts,
    nodeResolveOpts = {},
    disableTypeCheck,
    lessInRollupMode = {},
    sassInRollupMode = {}
  } = bundleOpts;
  const entryExt = (0, _path.extname)(entry);
  const name = file || (0, _path.basename)(entry, entryExt);
  const isTypeScript = entryExt === '.ts' || entryExt === '.tsx';
  const extensions = ['.js', '.jsx', '.ts', '.tsx', '.es6', '.es', '.mjs'];
  let pkg = {};
  try {
    pkg = require((0, _path.join)(cwd, 'package.json')); // eslint-disable-line
  } catch (e) {}

  // cjs 不给浏览器用，所以无需 runtimeHelpers
  const runtimeHelpers = type === 'cjs' ? false : runtimeHelpersOpts;
  const babelOpts = {
    ...(0, _getBabelConfig.default)({
      type,
      target: type === 'esm' ? 'browser' : target,
      // watch 模式下有几率走的 babel？原因未知。
      // ref: https://github.com/umijs/father/issues/158
      typescript: true,
      runtimeHelpers,
      nodeVersion
    }).opts,
    // ref: https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
    babelHelpers: runtimeHelpers ? 'runtime' : 'bundled',
    exclude: /\/node_modules\//,
    babelrc: false,
    // ref: https://github.com/rollup/rollup-plugin-babel#usage
    extensions
  };
  if (importLibToEs && type === 'esm') {
    babelOpts.plugins.push(require.resolve('../lib/importLibToEs'));
  }
  babelOpts.presets.push(...extraBabelPresets);
  babelOpts.plugins.push(...extraBabelPlugins);

  // rollup configs
  const input = (0, _path.join)(cwd, entry);
  const format = type;

  // ref: https://rollupjs.org/guide/en#external
  // 潜在问题：引用包的子文件时会报 warning，比如 @babel/runtime/helpers/esm/createClass
  // 解决方案：可以用 function 处理
  const external = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {}), ...extraExternals];
  // umd 只要 external peerDependencies
  const externalPeerDeps = [...Object.keys(pkg.peerDependencies || {}), ...extraExternals];
  function getPkgNameByid(id) {
    const splitted = id.split('/');
    // @ 和 @tmp 是为了兼容 umi 的逻辑
    if (id.charAt(0) === '@' && splitted[0] !== '@' && splitted[0] !== '@tmp') {
      return splitted.slice(0, 2).join('/');
    } else {
      return id.split('/')[0];
    }
  }
  function testExternal(pkgs, excludes, id) {
    if (excludes.includes(id)) {
      return false;
    }
    return pkgs.includes(getPkgNameByid(id));
  }
  const terserOpts = {
    compress: {
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
      warnings: false
    }
  };
  function getPlugins(opts = {}) {
    const {
      minCSS
    } = opts;
    return [(0, _pluginUrl.default)(), (0, _rollup.default)(), (0, _rollupPluginPostcss.default)({
      extract: extractCSS,
      inject: injectCSS,
      modules,
      // modules => all .less will convert into css modules
      ...(modules ? {
        autoModules: false
      } : {}),
      minimize: !!minCSS,
      use: {
        less: {
          plugins: [new _lessPluginNpmImport.default({
            prefix: '~'
          })],
          javascriptEnabled: true,
          ...lessInRollupMode
        },
        sass: {
          ...sassInRollupMode
        },
        stylus: false
      },
      plugins: [(0, _autoprefixer.default)({
        // https://github.com/postcss/autoprefixer/issues/776
        remove: false,
        ...autoprefixerOpts
      }), ...extraPostCSSPlugins]
    }), ...(injectOpts ? [(0, _pluginInject.default)(injectOpts)] : []), ...(replaceOpts && Object.keys(replaceOpts || {}).length ? [(0, _pluginReplace.default)(replaceOpts)] : []), (0, _pluginNodeResolve.default)({
      mainFields: ['module', 'jsnext:main', 'main'],
      extensions,
      ...nodeResolveOpts
    }), ...(isTypeScript ? [(0, _rollupPluginTypescript.default)({
      cwd,
      // @see https://github.com/umijs/father/issues/61#issuecomment-544822774
      clean: true,
      cacheRoot: `${_tempDir.default}/.rollup_plugin_typescript2_cache`,
      // TODO: 支持往上找 tsconfig.json
      // 比如 lerna 的场景不需要每个 package 有个 tsconfig.json
      tsconfig: (0, _path.join)(cwd, 'tsconfig.json'),
      tsconfigDefaults: {
        compilerOptions: {
          // Generate declaration files by default
          declaration: true
        }
      },
      tsconfigOverride: {
        compilerOptions: {
          // Support dynamic import
          target: 'esnext'
        }
      },
      check: !disableTypeCheck,
      ...(typescriptOpts || {})
    })] : []), (0, _pluginBabel.default)(babelOpts), (0, _pluginJson.default)(), ...(extraRollupPlugins || [])];
  }
  switch (type) {
    case 'esm':
      return [{
        input,
        output: {
          format,
          file: (0, _path.join)(cwd, `dist/${esm && esm.file || `${name}.esm`}.js`)
        },
        plugins: [...getPlugins(), ...(esm && esm.minify ? [(0, _rollupPluginTerser.terser)(terserOpts)] : [])],
        external: testExternal.bind(null, external, externalsExclude)
      }, ...(esm && esm.mjs ? [{
        input,
        output: {
          format,
          file: (0, _path.join)(cwd, `dist/${esm && esm.file || `${name}`}.mjs`)
        },
        plugins: [...getPlugins(), (0, _pluginReplace.default)({
          'process.env.NODE_ENV': JSON.stringify('production')
        }), (0, _rollupPluginTerser.terser)(terserOpts)],
        external: testExternal.bind(null, externalPeerDeps, externalsExclude)
      }] : [])];
    case 'cjs':
      return [{
        input,
        output: {
          format,
          file: (0, _path.join)(cwd, `dist/${cjs && cjs.file || name}.js`)
        },
        plugins: [...getPlugins(), ...(cjs && cjs.minify ? [(0, _rollupPluginTerser.terser)(terserOpts)] : [])],
        external: testExternal.bind(null, external, externalsExclude)
      }];
    case 'umd':
      // Add umd related plugins
      const extraUmdPlugins = [(0, _pluginCommonjs.default)({
        include
        // namedExports options has been remove from https://github.com/rollup/plugins/pull/149
      })];

      return [{
        input,
        output: {
          format,
          sourcemap: umd && umd.sourcemap,
          file: (0, _path.join)(cwd, `dist/${umd && umd.file || `${name}.umd`}.js`),
          globals: umd && umd.globals,
          name: umd && umd.name || pkg.name && (0, _lodash.camelCase)((0, _path.basename)(pkg.name))
        },
        plugins: [...getPlugins(), ...extraUmdPlugins, (0, _pluginReplace.default)({
          'process.env.NODE_ENV': JSON.stringify('development')
        })],
        external: testExternal.bind(null, externalPeerDeps, externalsExclude)
      }, ...(umd && umd.minFile === false ? [] : [{
        input,
        output: {
          format,
          sourcemap: umd && umd.sourcemap,
          file: (0, _path.join)(cwd, `dist/${umd && umd.file || `${name}.umd`}.min.js`),
          globals: umd && umd.globals,
          name: umd && umd.name || pkg.name && (0, _lodash.camelCase)((0, _path.basename)(pkg.name))
        },
        plugins: [...getPlugins({
          minCSS: true
        }), ...extraUmdPlugins, (0, _pluginReplace.default)({
          'process.env.NODE_ENV': JSON.stringify('production')
        }), (0, _rollupPluginTerser.terser)(terserOpts)],
        external: testExternal.bind(null, externalPeerDeps, externalsExclude)
      }])];
    default:
      throw new Error(`Unsupported type ${type}`);
  }
}