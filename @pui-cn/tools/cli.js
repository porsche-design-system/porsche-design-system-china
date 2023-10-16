const yParser = require('yargs-parser');
const { join, extname, sep } = require('path');
const { existsSync, statSync } = require('fs');
const assert = require('assert');
const log = require('./utils/log');
const slash = require('slash2');
const chalk = require('chalk');
const rimraf = require('rimraf');
const vfs = require('vinyl-fs');
const through = require('through2');
const chokidar = require('chokidar');
const babel = require('@babel/core');

const cwd = process.cwd();

function getBabelConfig() {
  const targets = { node: 'current' };
  return {
    presets: [
      [
        require.resolve('@babel/preset-typescript'),
        {},
      ],
      [
        require.resolve('@babel/preset-env'),
        {
          targets
        },
      ]
    ],
    plugins: [
      require.resolve('@babel/plugin-proposal-export-default-from'),
      require.resolve('@babel/plugin-proposal-do-expressions'),
      require.resolve('@babel/plugin-proposal-class-properties'),
    ],
  }
}

function transform(opts = {}) {
  const { content, path, pkg, root } = opts;
  assert(content, `opts.content should be supplied for transform()`);
  assert(path, `opts.path should be supplied for transform()`);
  assert(pkg, `opts.pkg should be supplied for transform()`);
  assert(root, `opts.root should be supplied for transform()`);
  assert(['.js', '.ts'].includes(extname(path)), `extname of opts.path should be .js, .ts or .tsx`);

  const babelConfig = getBabelConfig();
  log.transform(
    chalk['blue'](
      `${slash(path).replace(`${cwd}/`, '')}`,
    ),
  );
  return babel.transform(content, {
    ...babelConfig,
    filename: path
  }).code;
}

function build(dir, opts = {}) {
  const { cwd, watch } = opts;
  assert(dir.charAt(0) !== '/', `dir should be relative`);
  assert(cwd, `opts.cwd should be supplied`);

  const pkgPath = join(cwd, dir, 'package.json');
  assert(existsSync(pkgPath), 'package.json should exists');
  const pkg = require(pkgPath);
  const libDir = join(dir, 'lib');
  const srcDir = join(dir, 'src');

  // clean
  rimraf.sync(join(cwd, libDir));

  function createStream(src) {
    assert(typeof src === 'string', `src for createStream should be string`);
    return vfs
      .src([
        src
      ], {
        allowEmpty: true,
        base: srcDir,
      })
      .pipe(through.obj((file, encoding, done) => {
        if (['.js', '.ts'].includes(extname(file.path)) && !file.path.includes(`${sep}templates${sep}`)) {  
          file.contents = Buffer.from(
            transform({
              content: file.contents,
              path: file.path,
              pkg,
              root: join(cwd, dir),
            })
          );
          file.path = file.path.replace(extname(file.path), '.js');
        }
        done(null, file);
      }))
      .pipe(vfs.dest(libDir));
  }

  // build
  const stream = createStream(join(srcDir, '**/*'));
  stream.on('end', () => {
    if (!watch && process.send) {
        process.send('BUILD_COMPLETE');
    }
    // watch
    if (watch) {
      log.pending('start watch', srcDir);
      const watcher = chokidar.watch(join(cwd, srcDir), {
        ignoreInitial: true,
      });
      watcher.on('all', (event, fullPath) => {
        const relPath = fullPath.replace(join(cwd, srcDir), '');
        log.watch(`[${event}] ${join(srcDir, relPath)}`);
        if (!existsSync(fullPath)) return;
        if (statSync(fullPath).isFile()) {
          createStream(fullPath);
        }
      });
    }
  });
};

// Init
const args = yParser(process.argv.slice(2));
const watch = args.w || args.watch;
build('./', {
    cwd,
    watch
});
