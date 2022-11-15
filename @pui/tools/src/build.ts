import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import rimraf from 'rimraf';
import chalk from 'chalk';
import * as assert from 'assert';
import merge from 'lodash.merge';
import signale from 'signale';
import registerBabel from './registerBabel';
import getUserConfig, { CONFIG_FILES } from './getUserConfig';
import { getExistFile } from './utils';
import randomColor from "./randomColor";
import rollup from './rollup';
import babel from './babel';
import { IOpts, IBundleOptions, IBundleTypeOutput, ICjs, IEsm } from './types';

export function getBundleOpts(opts: IOpts): IBundleOptions[] {
    const { cwd, buildArgs = {}, rootConfig = {} } = opts;
    const entry = getExistFile({
      cwd,
      files: ['src/index.tsx', 'src/index.ts', 'src/index.jsx', 'src/index.js'],
      returnRelative: true,
    });
    const userConfig = getUserConfig({ cwd });
    const userConfigs = Array.isArray(userConfig) ? userConfig : [userConfig];
    return (userConfigs as any).map(userConfig => {
      const bundleOpts = merge(
        rootConfig,
        userConfig,
        buildArgs,
        {
          entry
        },
      );
  
      // Support config esm: 'rollup' and cjs: 'rollup'
      if (typeof bundleOpts.esm === 'string') {
        bundleOpts.esm = { type: bundleOpts.esm };
      }
      if (typeof bundleOpts.cjs === 'string') {
        bundleOpts.cjs = { type: bundleOpts.cjs };
      }
  
      return bundleOpts;
    });
}

function isTypescriptFile(filePath) {
    return filePath.endsWith('.ts') || filePath.endsWith('.tsx')
}

function validateBundleOpts(bundleOpts: IBundleOptions, { cwd, rootPath }) {
    if(bundleOpts.runtimeHelpers){
        const pkgPath = join(cwd, 'package.json');
        assert.ok(existsSync(pkgPath), `@babel/runtime dependency is required to use runtimeHelpers`);
        const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
        assert.ok(
            (pkg.dependencies || {})['@babel/runtime'],
            `@babel/runtime dependency is required to use runtimeHelpers`,
        );
    }
    if (bundleOpts.cjs && (bundleOpts.cjs as ICjs).lazy && (bundleOpts.cjs as ICjs).type === 'rollup') {
        throw new Error(`cjs.lazy don't support rollup.`.trim());
    }
    if (!bundleOpts.esm && !bundleOpts.cjs && !bundleOpts.umd) {
        throw new Error(
          `None format of ${chalk.cyan('cjs | esm | umd',)} is configured, checkout https://github.com/umijs/father for usage details.`.trim(),
        );
    }
    if (bundleOpts.entry) {
        const tsConfigPath = join(cwd, 'tsconfig.json');
        const tsConfig = existsSync(tsConfigPath) || (rootPath && existsSync(join(rootPath, 'tsconfig.json')));
        if (
          !tsConfig && (
            (Array.isArray(bundleOpts.entry) && bundleOpts.entry.some(isTypescriptFile)) ||
            (!Array.isArray(bundleOpts.entry) && isTypescriptFile(bundleOpts.entry))
          )
        ) {
          signale.info(
            `Project using ${chalk.cyan('typescript')} but tsconfig.json not exists. Use default config.`
          );
        }
    }
}

interface IExtraBuildOpts {
    pkg?: string;
}

export async function build(opts: IOpts, extraOpts: IExtraBuildOpts = {}) {
    const { cwd, rootPath, watch } = opts;
    const { pkg } = extraOpts;

    // register babel for config files
    registerBabel({
        cwd,
        only: CONFIG_FILES,
    });

    // Get user config
    const bundleOptsArray = getBundleOpts(opts);

    function log(msg) {
        console.log(`${pkg ? `${randomColor(`${pkg}`)}: ` : ''}${msg}`);
    }

    for (const bundleOpts of bundleOptsArray) {

        validateBundleOpts(bundleOpts, { cwd, rootPath });

        // Clean dist
        log(chalk.gray(`Clean dist directory`));
        rimraf.sync(join(cwd, 'dist'));

        // Build umd
        if (bundleOpts.umd) {
            log(`Build umd`);
            await rollup({
                cwd,
                log,
                type: 'umd',
                entry: bundleOpts.entry,
                watch,
                bundleOpts,
            });
        }

        // Build cjs
        if (bundleOpts.cjs) {
            const cjs = bundleOpts.cjs as IBundleTypeOutput;
            log(`Build cjs with ${cjs.type}`);
            if (cjs.type === 'babel') {
                await babel({ cwd, rootPath, watch, type: 'cjs', log, bundleOpts });
            } else {
                await rollup({
                    cwd,
                    log,
                    type: 'cjs',
                    entry: bundleOpts.entry,
                    watch,
                    bundleOpts,
                });
            }
        }

        // Build esm
        if (bundleOpts.esm) {
            const esm = bundleOpts.esm as IEsm;
            log(`Build esm with ${esm.type}`);
            const importLibToEs = esm && esm.importLibToEs;
            if (esm && esm.type === 'babel') {
                await babel({ cwd, rootPath, watch, type: 'esm', importLibToEs, log, bundleOpts });
            } else {
                await rollup({
                    cwd,
                    log,
                    type: 'esm',
                    entry: bundleOpts.entry,
                    importLibToEs,
                    watch,
                    bundleOpts,
                });
            }
        }
    }
}

export default async function(opts: IOpts) {
    await build(opts);
}