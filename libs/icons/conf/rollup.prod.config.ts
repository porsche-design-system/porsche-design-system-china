import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default [
  {
    input: "src/index.ts",
    output: {
      file: "es/index.js",
      format: "esm",
      exports: "named",
      sourcemap: true,
      globals: {
        react: "React",
        "react-dom": "ReactDOM"
      }
    },
    external: ["react", "react-dom"],
    plugins: [
      babel({
        babelHelpers: "runtime",
        exclude: "node_modules/**", // 只编译我们的源代码
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }),
      nodeResolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        modulesOnly: true
      }),
      commonjs({
        include: "node_modules/**"
      })
    ]
  },
  {
    input: "src/index.ts",
    output: {
      file: "lib/index.js",
      format: "cjs",
      exports: "named",
      sourcemap: true,
      globals: {
        react: "React",
        "react-dom": "ReactDOM"
      }
    },
    external: ["react", "react-dom"],
    plugins: [
      nodeResolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        modulesOnly: true
      }),
      babel({
        babelHelpers: "runtime",
        exclude: "node_modules/**", // 只编译我们的源代码
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }),
      commonjs({
        include: "node_modules/**"
      })
    ]
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.umd.js",
      format: "umd",
      exports: "named",
      sourcemap: true,
      name: "@pui/icons",
      globals: {
        react: "React",
        "react-dom": "ReactDOM"
      }
    },
    external: ["react", "react-dom"],
    plugins: [
      nodeResolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        modulesOnly: true
      }),
      babel({
        babelHelpers: "runtime",
        exclude: "node_modules/**", // 只编译我们的源代码
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }),
      commonjs({
        include: "node_modules/**"
      })
    ]
  }
];
