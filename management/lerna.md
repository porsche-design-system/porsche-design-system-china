### lerna 常用命令

[Lerna 入门](https://lernajs.bootcss.com/#command-changed)

- 创建一个新的 lerna 仓库（repo）或将现有的仓库升级为适配当前 版本的 Lerna

```
lerna init
```

**参数**
`--independent/-i ` – 使用独立的 版本控制模式。

- 在当前 Lerna 仓库中执行引导流程（bootstrap）。安装所有依赖项并链接任何交叉依赖。让你可以 在 require() 中直接通过软件包的名称加载交叉依赖的包，就好像此软件包已经存在于 你的 node_modules 目录下一样。

- 清除所有包的 node_packages

```
lerna clean
```

- 导包(根据文件夹路径 pathToRepo 把本地开发的 npm 组件导入 lerna 项目中作为依赖)

```
lerna import <pathToRepo>
```

- 安装 package 到 依赖

```
#所有子包统一添加packageName
lerna add packageName

#指定在子 package  @pui/react 中添加依赖 packageName
lerna add packageName --scope=@pui/react
```

`即：类似在@pui/react 的 package.json中添加依赖 或npm install的效果`

- 发布版本: 为已经更新过的软件包创建一个新版本。`会提示 输入新版本号并更新：git 和 npm 上的所有软件包`

```
# 先检查从上次发版以来已经变更的包
lerna changed

# 列出 所有或某个软件包的修改情况
lerna diff [package?]

#登录npm 仓库
npm login
# 发布
lerna publish --registry http://52.83.74.69:411
```

**参数**

--npm-tag [tagname] — 使用给定的 npm dist-tag （默认为 latest）发布到 npm。

--canary/-c – 创建一个 canary 版本`(不建议使用)`

--skip-git – 不要运行任何 git 命令。

--force-publish [packages] — 强制发布 指定的一个或多个软件包（以逗号分隔）或使用 \* 表示所有软件包`（对于修改过的软件包跳过 git diff 检查）`。

- 在每一个包含 [script] 脚本的软件包中运行此 npm 脚本

```
lerna run [script]
```

- 列出当前 Lerna 仓库中的所有公共软件包（public packages）

```
lerna ls
```

### 自动生成 changelog

在 lerna.json 中已添加对应配置项：

```
"changelog": {
  "repo": "https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui.git",
  "labels": {
    "enhancement": ":rocket: Enhancement",
    "fix": ":bug: Bug Fix",
    "doc": "Refine Doc",
    "feat": "New Feature"
  },
  "cacheDir": ".changelog"
```

注意：
repo 是必填的
labels 里，key 是要在 Github 配置的标签，用来给 Issue/PR 分类，value 里的:bug:只是调皮的 emoji，会作为 changelog 里该类 change 的标题

#### lerna-changelog

Install

```
yarn add lerna-changelog --dev

# or:
npm install --save-dev lerna-changelog
```

By default lerna-changelog will show all pull requests that have been merged since the latest tagged commit in the repository. That is however only true for pull requests with certain labels applied. The labels that are supported by default are:

```
lerna-changelog
```

You can also use the --from and --to options to view a different range of pull requests:

```
lerna-changelog --from=v1.0.0 --to=v2.0.0
```

Lerna-changelog 会自动把 对应子包的包名放在 changelog 每条的前面

#### 发布

options

```
--npm-tag [tagname] — Publish to npm with the given npm dist-tag (Defaults to latest).

--canary/-c – Create a canary release.

--skip-git – Don't run any git commands.

--force-publish [packages] — Force publish for the specified packages (comma-separated) or all packages using * (skips the git diff check for changed packages).
```

```
$ lerna publish --skip-git
$ lerna publish --skip-npm
```

```
$ lerna publish --force-publish=package-2,package-4
$ lerna publish --force-publish=*
```

```
$ lerna exec --scope my-component -- ls -la
$ lerna exec --concurrency 1 -- ls -la

```

这个命令 识别出修改的包 --> 创建新的版本号 --> 修改 package.json --> 提交修改 打上版本的 tag --> 推送到 git 上。

```
lerna version
```

[Options](https://www.jianshu.com/p/8b7e6025354b)

```
--allow-branch <glob>
```

设置 git 上的哪些分支允许执行 lerna version 命令， 也可以在 lerna.json 中设置

{
"command": {
"publish": {
"allowBranch": "master"
}
}
}

多个
{
"command": {
"publish": {
"allowBranch": ["master", "feature/*"]
}
}
}

[lerna 最佳实践](https://juejin.im/post/5a989fb451882555731b88c2)

1. 采用 Independent 模式
2. 根据 Git 提交信息，自动生成 changelog
3. eslint 规则检查
4. prettier 自动格式化代码
5. 提交代码，代码检查 hook
6. 遵循 semver 版本规范

最为重要的一点就是规范。因为应用场景各种各样，你必须保证发布的 packge 是规范的，代码是规范的，一切都是有迹可循的。

github 代码
工具整合
在这里引入的工具都是为了解决一个问题，就是工程和代码的规范问题。

husky
lint-staged
prettier
eslint

#### lerna FAQ

这个命令 识别出修改的包 --> 创建新的版本号 --> 修改 package.json --> 提交修改 打上版本的 tag --> 推送到 git 上。

问题：

怎么新建包？

```
lerna create
```

怎么导入本地其他目录已有的文件夹作为一个 package(并带入已有的 commits)？

```
lerna import <pathToRepo>
```

怎么把共同依赖的库安装到根目录的 node_modules 下，以统一版本依赖?

```
rockwang@rocks-MacBook-Pro pui (master) $ lerna bootstrap --hoist
```

怎么在每个包目录下执行任意命令？

```
$ lerna exec --scope my-component -- ls -la

```

lerna exec --scope @pui/react -- npm install axios

```

$ lerna exec -- <command> [..args] # runs the command in all packages
$ lerna exec -- rm -rf ./node_modules
$ lerna exec -- protractor conf.js
$ lerna exec -- npm view \$LERNA_PACKAGE_NAME
$ lerna exec -- node \$LERNA_ROOT_PATH/scripts/some-script.js
```

--scope
`lerna exec --scope my-component -- ls -la`
怎么执行每个包里面的 script 中有的命令？

```
$ lerna run <script> -- [..args] # runs npm run my-script in all packages that have it
$ lerna run test
$ lerna run build

# watch all packages and transpile on change, streaming prefixed output
$ lerna run --parallel watch
```

怎么添加一个包的版本为各个包的依赖?

```
$ lerna add <package>[@version] [--dev] [--exact]
```

怎么删除各个包下的 node_modules

```
lerna clean
```

怎么链接互相引用的库？

```
lerna link
```

```
#常用的仓库地址
	pdc-npm- http://s1.web.porsche-preview.cn
  npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
  taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  rednpm - http://registry.mirror.cqupt.edu.cn/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
```
