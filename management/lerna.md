#### 常用命令

```
lerna init #初始化
lerna bootstrap #下载依赖包或者生成本地软连接
lerna add axios #所有包都添加axios
lerna add prpr-lerna-core --scope=prpr-lerna-popular #给包prpr-lerna-popularx添加prpr-lerna-core依赖
lerna list
lerna clean
```

#### 添加依赖

* 第一种方法是修改prpr-lerna-popular/package.json，添加

```
{
  "dependencies": {
    "core": "^1.0.0"
  }
}
```
然后运行: 
```
lerna bootstrap 
lerna bootstrap --hoist
```

* 第二种方法是直接使用命令add

```
lerna add prpr-lerna-core --scope=prpr-lerna-popular
```

```
lerna add @tpui/utils --scope=@tpui/others
```

prpr-lerna-popular除了依赖prpr-lerna-core，还可以依赖其他开源的库，比如我们使用axios:

```
lerna add axios --scope=prpr-lerna-popular
```

#### 发布到npm

```
npm login
lerna publish --registry http://52.83.74.69:411

```
![de71c8b19f1d2cb1dfd1b98fe26c5a1e.png](evernotecid://FFB9913C-DAAE-4BEC-B878-D3E705BA7C40/wwwevernotecom/10776835/ENResource/p5098)


#### 自动生成changelog

```
<!-- npm install lerna-changelog -g -->
```
然后在lerna.json添加对应配置项：

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
repo是必填的
labels里，key是要在Github配置的标签，用来给Issue/PR分类，value里的:bug:只是调皮的emoji，会作为changelog里该类change的标题



#### lerna-changelog

Install
```
yarn add lerna-changelog --dev

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
Lerna-changelog 会自动把 对应子包的包名放在changelog 每条的前面


#### import 包和commits

how-to-import-a-local-git-repo-in-lerna
```
git commit -a -m 'message'
git import path/to/import
```

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


这个命令 识别出修改的包 --> 创建新的版本号 --> 修改package.json --> 提交修改 打上版本的tag --> 推送到git上。
```
lerna version
```
[Options](https://www.jianshu.com/p/8b7e6025354b)
```
--allow-branch <glob>
```
设置git上的哪些分支允许执行 lerna version 命令， 也可以在lerna.json中设置

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



[lerna最佳实践](https://juejin.im/post/5a989fb451882555731b88c2)

1. 采用Independent模式
2. 根据Git提交信息，自动生成changelog
3. eslint规则检查
4. prettier自动格式化代码
5. 提交代码，代码检查hook
6. 遵循semver版本规范

最为重要的一点就是规范。因为应用场景各种各样，你必须保证发布的packge是规范的，代码是规范的，一切都是有迹可循的。

github代码
工具整合
在这里引入的工具都是为了解决一个问题，就是工程和代码的规范问题。

husky
lint-staged
prettier
eslint

#### lerna version
这个命令 识别出修改的包 --> 创建新的版本号 --> 修改package.json --> 提交修改 打上版本的tag --> 推送到git上。

问题：

怎么新建包？
```
lerna create
```
怎么导入本地其他目录已有的文件夹作为一个package(并带入已有的commits)？
```
lerna import <pathToRepo>
```

怎么发单独包的version？
```
lerna publish --contents dist   // 指定dist目录为发布目录
# 他妈的就是扯淡，浪费时间. 直接使用independent的模式。这样只有有更新才publish上去
```

怎么把共同依赖的库安装到根目录的node_modules下，以统一版本依赖?
```
rockwang@rocks-MacBook-Pro pui (master) $ lerna bootstrap --hoist
```
怎么显示至上次release tag以来有修改的包？
```
lerna changed
```
怎么显示至上次release tag以来有修改包的差异？
```
lerna diff
```
怎么在每个包目录下执行任意命令？
```
$ lerna exec --scope my-component -- ls -la

```
lerna exec --scope @pui/react -- npm run prod
```

$ lerna exec -- <command> [..args] # runs the command in all packages
$ lerna exec -- rm -rf ./node_modules
$ lerna exec -- protractor conf.js
$ lerna exec -- npm view \$LERNA_PACKAGE_NAME
$ lerna exec -- node \$LERNA_ROOT_PATH/scripts/some-script.js
```
--scope
`
lerna exec --scope my-component -- ls -la
`
怎么执行每个包里面的script中有的命令？
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
怎么删除各个包下的node_modules
```
lerna clean
```
怎么链接互相引用的库？
```
lerna link
```


```
#常用的仓库地址
  npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
  taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  rednpm - http://registry.mirror.cqupt.edu.cn/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
```

