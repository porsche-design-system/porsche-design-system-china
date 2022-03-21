# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.1.14](https://gitlab.porsche-preview.cn///compare/v0.1.13...v0.1.14) (2022-03-21)


### Features

* input 组件新增后缀suffixIcon @立超校验 ([6bee23c](https://gitlab.porsche-preview.cn///commit/6bee23ccfb827c71673fac81de91e2242ffebf4f))


### Bug Fixes

* fix bugs and add features ([8d1af7e](https://gitlab.porsche-preview.cn///commit/8d1af7e3bb05b9c3bc889609e4427cb87487b507))
* 编译模式改 react-jsx 兼容 POS 团队项目配置 ([adf8a27](https://gitlab.porsche-preview.cn///commit/adf8a2791d09268472f5d030a517f02e31cffaf4))

### [0.1.13](https://gitlab.porsche-preview.cn///compare/v0.1.12...v0.1.13) (2022-03-15)


### Features

* dscwcn110 面包屑调整 ([72d2baf](https://gitlab.porsche-preview.cn///commit/72d2baf9449445d4d2cb6a556cfb5d29eb15e5e5))
* dscwcn110 面包屑调整 ([c6d4edd](https://gitlab.porsche-preview.cn///commit/c6d4edd713641a782086939fcd3a3db716f94ae7))
* dscwcn110 面包屑调整 ([f130236](https://gitlab.porsche-preview.cn///commit/f130236a2ab4d7fde3d7f8612bd8cf70603c6333))
* dscwcn110 面包屑调整 ([cae4656](https://gitlab.porsche-preview.cn///commit/cae465650dadacfe605d30cf23a738363db5a3e2))

### [0.1.12](https://gitlab.porsche-preview.cn///compare/v0.1.11...v0.1.12) (2022-03-14)

### Bug Fixes

- DSCWCN-107| UI 走查 ([9b7dffd](https://gitlab.porsche-preview.cn///commit/9b7dffd2524ef437696d0bb7d2cac8bd2d59a2aa))
- DSCWCN-107|Select&Multi|下拉默认宽度设置 ([b113394](https://gitlab.porsche-preview.cn///commit/b113394e9c4526845b35541f9809806833425235))
- 修正各种 bug ([7294938](https://gitlab.porsche-preview.cn///commit/7294938b811bcaa21a7cdf15f5ed78289ecee1b1))
- 更新 tsx 转换模式，修正清除按钮透明度 ([c2e66ba](https://gitlab.porsche-preview.cn///commit/c2e66baf5ad78a4c5dd26570b0fd9300feac3011))
- 修正 select / multi-select 优先匹配类型推断
- 修正 select 优先匹配 value 显示打钩，而不是全显示打钩
- 修正 Form.findByName() 命名
- 修正 Search 向上对齐方式
- 非表单 Require 去掉红色错误框，不再判断
- 修正弹出框出边界
- 加入 Modal.close() 方法方便关闭弹框
- Form 的 submit 方法改良返回 promise，支持与 Modal 联动
- 添加 filterInputPlaceholder（2 处）支持 select 过滤器修改 placeholder
- 修正 itemStyle 错误
- 修正 table 行 key 在 Fragment 中不起作用的 bug

### [0.1.11](https://gitlab.porsche-preview.cn///compare/v0.1.10...v0.1.11) (2022-03-07)

### Features

- multi-search 过滤关键字 加入放大镜 ([d917ca2](https://gitlab.porsche-preview.cn///commit/d917ca20b9bbb82e9caabb415c5a894ef1424669))

### Bug Fixes

- a lot of improments ([3b03d7d](https://gitlab.porsche-preview.cn///commit/3b03d7d3a9dc7659d7229d9bd3dbafee7d75aacc))
- DSCWCN-107|Select 和 MultiSelect 菜单的最小宽度调整 ([f95e9ad](https://gitlab.porsche-preview.cn///commit/f95e9ad539eecbe81352ed8ae1d95a74c2deaef2))
- Modal 属性 lint 报错 ([88d86d1](https://gitlab.porsche-preview.cn///commit/88d86d1edbfe8babadd18010b36caa159ab314e5))
- Modal 框 Footer 按钮间距 ([752b731](https://gitlab.porsche-preview.cn///commit/752b7311937aa4dc07c7e5792c0912de3b2f6195))
- 解决 dropdown 点击菜单不自动隐藏 ([ce03712](https://gitlab.porsche-preview.cn///commit/ce037127f8e28b8f2dbfcccfad01aa625a1f93ab))

### [0.1.10](https://gitlab.porsche-preview.cn///compare/v0.1.9...v0.1.10) (2022-02-28)

### Features

- 加入 form 过滤器模式，加入 composing 选项 ([b2e5081](https://gitlab.porsche-preview.cn///commit/b2e50816e1c7ffc7fb8e7a6fa4a5d2e06b148be9))

### [0.1.9](https://gitlab.porsche-preview.cn///compare/v0.1.8...v0.1.9) (2022-02-25)

### Features

- Table 加入行点击事件，加入行样式设置 @刘毅 verified @顺波 verified @赵忠事 verified ([72b88fc](https://gitlab.porsche-preview.cn///commit/72b88fc6409e56c55403c622e0d8e5ee4346ec69))

### Bug Fixes

- 解决 menu 点击事件错误 ([75b834c](https://gitlab.porsche-preview.cn///commit/75b834ca37f86a16dda6c1420107a89163c5661a))

### [0.1.8](https://gitlab.porsche-preview.cn///compare/v0.1.6...v0.1.8) (2022-02-24)

### Features

- 加强 Search 和和 Pagination 功能 @Jack verify ([1b11ee4](https://gitlab.porsche-preview.cn///commit/1b11ee4a405d6ddf17cd207a05676c7d00265f05))

### Bug Fixes

- dropdown menu 边界位置处理 @Asimov 校验 ([67e5d10](https://gitlab.porsche-preview.cn///commit/67e5d104ffd07c73309734a3a2463b4b87acda2c))
- DSCWCN-108 | fixed dateRangePicker clear-button style ([d4a0aad](https://gitlab.porsche-preview.cn///commit/d4a0aadc9c047070502434e515c97650d3669e49))
- 修复下拉菜单间距,调整默认宽度 ([7b13cef](https://gitlab.porsche-preview.cn///commit/7b13cef91c0bde0cce49bfd4c4702a97b84e03dd))
- 修正所有 ESlint 错误和 Babel 错误 ([b51422f](https://gitlab.porsche-preview.cn///commit/b51422fd55e48f8815c9d830b33035885dbdc7db))
- 菜单默认值变更无效,新增 onClick 事件 @立超验证 ([2bfb4fd](https://gitlab.porsche-preview.cn///commit/2bfb4fd9bad9ce1cad9e7201c5ef8eac2d38ead3))
- **react, icons:** compile issues of typescript dependances ([fa498e5](https://gitlab.porsche-preview.cn///commit/fa498e5147e9cff9206f5e09ac0c6cccb2ef1025))

### [0.1.7](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/compare/v0.1.0...v0.1.7) (2022-02-23)

### Features

- add filter mode ([a62e697](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/a62e697f50f297e6e5667b23758f5b565d14a25f))
- add select component "maxWidth" option ([b5558d6](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/b5558d6a4dfc035ded0476e3197737ab71beb479))
- datepicker 加入过滤器模式 ([d48759b](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/d48759b00199967cb405b2c44d86deb5d015cedc))
- DSCWCN-107: Select 触屏设备下清除按钮一直显示 ([9f7569b](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/9f7569b891410733c9a349117b83398e2e1eed54))
- DSCWCN-108| mulitSelect add filterMode ([9c656e5](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/9c656e569fcee52e2f81da3bdaf86f8bbb8064d3))
- DSCWCN-92 ｜ Search Component ｜ Add search button background ([c28b101](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/c28b101e36f503b3d8f7fae784141b9bfee36b79))
- Select 组件加入分组，过滤器模式，高亮等功能 ([c3e6432](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/c3e64323395004dd2d76aa0c5118518c24c51a5b))
- Table 组件加入忽略默认排序功能 ([d90fab4](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/d90fab4955e73d652abeabfb8c8d7bed22a85440))
- Tab 组件加入受控激活 Tab 功能 ([7bea951](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/7bea9511f1ebe922a711af5d513b591bb25f29ce))
- 完成日期范围选择组件 修整所有过滤器组件 ([a2c1e7d](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/a2c1e7d26f2634c275f383a042c892a110487bba))
- 补全输入组件 events，优化 onChange 回调方法 ([2ec0675](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/2ec0675c8f9539357b818d7c63e836ee8b91c86b))
- 重构 Memu ([413aa4e](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/413aa4eecdda1024b998a9f7ce3d62afb4f0b53b))

### Bug Fixes

- 0.1.6 发版，另外修改了编译错误 ([edfbc87](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/edfbc8756e8766d7bdccdee9ff39a6c22a0f6ec8))
- dropdown menu 边界位置处理 @Asimov 校验 ([67e5d10](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/67e5d104ffd07c73309734a3a2463b4b87acda2c))
- DSCWCN-108| mulitSelect | filterMode 下样式和 select 保持统一 ([7cf1336](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/7cf133628f1b44b9491a0e7614b316ea65e5c682))
- DSCWCN-108| mulitSelect | 描述文字修正 清楚->清除 ([3ddb69b](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/3ddb69b144a08b4bee80bae12a372329d12cd609))
- DSCWCN-108|调整小尺寸下 Multi、Input 清除 icon 大小 ([8d6d014](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/8d6d014b1db72d5f3c9482ed1bb0c32dd345b1da))
- **react, icons:** compile issues of typescript dependances ([fa498e5](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/fa498e5147e9cff9206f5e09ac0c6cccb2ef1025))
- 优化代码 ([ea669c1](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/ea669c1554a5ed2288145562d69bbe431f8b621f))
- 优化代码，使用工具类 ([39c27b1](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/39c27b13c45c974d3774796d6ffc4641f2f0d5e5))
- 修正 select 组件显示错误 ([133a151](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/133a151523945cb68043aa058f196ec4face142a))
- 修正暗色主题背景色 ([4e9160b](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/4e9160b574c215f80a8557d9dbf5db93897ee44a))
- 修正样式，替换 placeholder 成 label ([bf3965f](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/bf3965f9d0ef0cef729a15355c506a1cfb2c6ca8))
- 修正页面代码错误 ([7609c33](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/7609c333ad0795f9e6ef6d38676d9160e11b07f7))
- 加入 changelog 生成代码 ([e807e40](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/e807e40719bb1451501667b306a626daa8421692))
- 去掉 !important ([3af425f](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/3af425f3e0b050ad5bb0bdea13c458883692a515))
- 去掉 !important ([2732cd4](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/2732cd4c8761efc290d13b8e308ea7a8c7867082))
- 更新背景色 ([e140664](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/e140664bdcfb42b240579524aa044ca249190191))
- 更新边框颜色 ([e240f2b](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/e240f2b7ba04b58edaacd928de434977b189344f))
- 给 select 标签加入过滤器模式 ([dc30926](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/dc309263587b9992d4fcd89c9536df7e615f3bd7))

### [0.1.6](https://gitlab.porsche-preview.cn///compare/v0.1.3...v0.1.6) (2022-02-23)

### Features

- add filter mode ([a62e697](https://gitlab.porsche-preview.cn///commit/a62e697f50f297e6e5667b23758f5b565d14a25f))
- add select component "maxWidth" option ([b5558d6](https://gitlab.porsche-preview.cn///commit/b5558d6a4dfc035ded0476e3197737ab71beb479))
- datepicker 加入过滤器模式 ([d48759b](https://gitlab.porsche-preview.cn///commit/d48759b00199967cb405b2c44d86deb5d015cedc))
- DSCWCN-107: Select 触屏设备下清除按钮一直显示 ([9f7569b](https://gitlab.porsche-preview.cn///commit/9f7569b891410733c9a349117b83398e2e1eed54))
- DSCWCN-108| mulitSelect add filterMode ([9c656e5](https://gitlab.porsche-preview.cn///commit/9c656e569fcee52e2f81da3bdaf86f8bbb8064d3))
- DSCWCN-92 ｜ Search Component ｜ Add search button background ([c28b101](https://gitlab.porsche-preview.cn///commit/c28b101e36f503b3d8f7fae784141b9bfee36b79))
- Select 组件加入分组，过滤器模式，高亮等功能 ([c3e6432](https://gitlab.porsche-preview.cn///commit/c3e64323395004dd2d76aa0c5118518c24c51a5b))
- Table 组件加入忽略默认排序功能 ([d90fab4](https://gitlab.porsche-preview.cn///commit/d90fab4955e73d652abeabfb8c8d7bed22a85440))
- Tab 组件加入受控激活 Tab 功能 ([7bea951](https://gitlab.porsche-preview.cn///commit/7bea9511f1ebe922a711af5d513b591bb25f29ce))
- 完成日期范围选择组件 修整所有过滤器组件 ([a2c1e7d](https://gitlab.porsche-preview.cn///commit/a2c1e7d26f2634c275f383a042c892a110487bba))
- 补全输入组件 events，优化 onChange 回调方法 ([2ec0675](https://gitlab.porsche-preview.cn///commit/2ec0675c8f9539357b818d7c63e836ee8b91c86b))
- 重构 Memu ([413aa4e](https://gitlab.porsche-preview.cn///commit/413aa4eecdda1024b998a9f7ce3d62afb4f0b53b))

### Bug Fixes

- DSCWCN-108| mulitSelect | filterMode 下样式和 select 保持统一 ([7cf1336](https://gitlab.porsche-preview.cn///commit/7cf133628f1b44b9491a0e7614b316ea65e5c682))
- DSCWCN-108| mulitSelect | 描述文字修正 清楚->清除 ([3ddb69b](https://gitlab.porsche-preview.cn///commit/3ddb69b144a08b4bee80bae12a372329d12cd609))
- DSCWCN-108|调整小尺寸下 Multi、Input 清除 icon 大小 ([8d6d014](https://gitlab.porsche-preview.cn///commit/8d6d014b1db72d5f3c9482ed1bb0c32dd345b1da))
- 优化代码 ([ea669c1](https://gitlab.porsche-preview.cn///commit/ea669c1554a5ed2288145562d69bbe431f8b621f))
- 优化代码，使用工具类 ([39c27b1](https://gitlab.porsche-preview.cn///commit/39c27b13c45c974d3774796d6ffc4641f2f0d5e5))
- 修正 select 组件显示错误 ([133a151](https://gitlab.porsche-preview.cn///commit/133a151523945cb68043aa058f196ec4face142a))
- 修正暗色主题背景色 ([4e9160b](https://gitlab.porsche-preview.cn///commit/4e9160b574c215f80a8557d9dbf5db93897ee44a))
- 修正样式，替换 placeholder 成 label ([bf3965f](https://gitlab.porsche-preview.cn///commit/bf3965f9d0ef0cef729a15355c506a1cfb2c6ca8))
- 修正页面代码错误 ([7609c33](https://gitlab.porsche-preview.cn///commit/7609c333ad0795f9e6ef6d38676d9160e11b07f7))
- 去掉 !important ([3af425f](https://gitlab.porsche-preview.cn///commit/3af425f3e0b050ad5bb0bdea13c458883692a515))
- 去掉 !important ([2732cd4](https://gitlab.porsche-preview.cn///commit/2732cd4c8761efc290d13b8e308ea7a8c7867082))
- 更新背景色 ([e140664](https://gitlab.porsche-preview.cn///commit/e140664bdcfb42b240579524aa044ca249190191))
- 更新边框颜色 ([e240f2b](https://gitlab.porsche-preview.cn///commit/e240f2b7ba04b58edaacd928de434977b189344f))

### [0.1.5](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/compare/v0.1.0...v0.1.5) (2022-02-23)

### Features

- 补全输入组件 events，优化 onChange 回调方法 ([2ec0675](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/2ec0675c8f9539357b818d7c63e836ee8b91c86b))
- 完成日期范围选择组件 修整所有过滤器组件 ([a2c1e7d](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/a2c1e7d26f2634c275f383a042c892a110487bba))
- 重构 Menu ([413aa4e](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/413aa4eecdda1024b998a9f7ce3d62afb4f0b53b))
- add filter mode ([a62e697](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/a62e697f50f297e6e5667b23758f5b565d14a25f))
- add select component "maxWidth" option ([b5558d6](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/b5558d6a4dfc035ded0476e3197737ab71beb479))
- datepicker 加入过滤器模式 ([d48759b](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/d48759b00199967cb405b2c44d86deb5d015cedc))
- DSCWCN-107: Select 触屏设备下清除按钮一直显示 ([9f7569b](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/9f7569b891410733c9a349117b83398e2e1eed54))
- DSCWCN-108| mulitSelect add filterMode ([9c656e5](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/9c656e569fcee52e2f81da3bdaf86f8bbb8064d3))
- DSCWCN-92 ｜ Search Component ｜ Add search button background ([c28b101](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/c28b101e36f503b3d8f7fae784141b9bfee36b79))
- Select 组件加入分组，过滤器模式，高亮等功能 ([c3e6432](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/c3e64323395004dd2d76aa0c5118518c24c51a5b))
- Tab 组件加入受控激活 Tab 功能 ([7bea951](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/7bea9511f1ebe922a711af5d513b591bb25f29ce))
- Table 组件加入忽略默认排序功能 ([d90fab4](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/d90fab4955e73d652abeabfb8c8d7bed22a85440))

### Bug Fixes

- 给 select 标签加入过滤器模式 ([dc30926](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/dc309263587b9992d4fcd89c9536df7e615f3bd7))
- 更新背景色 ([e140664](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/e140664bdcfb42b240579524aa044ca249190191))
- 更新边框颜色 ([e240f2b](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/e240f2b7ba04b58edaacd928de434977b189344f))
- 加入 changelog 生成代码 ([e807e40](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/e807e40719bb1451501667b306a626daa8421692))
- 去掉 !important ([3af425f](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/3af425f3e0b050ad5bb0bdea13c458883692a515))
- 去掉 !important ([2732cd4](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/2732cd4c8761efc290d13b8e308ea7a8c7867082))
- 修正暗色主题背景色 ([4e9160b](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/4e9160b574c215f80a8557d9dbf5db93897ee44a))
- 修正样式，替换 placeholder 成 label ([bf3965f](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/bf3965f9d0ef0cef729a15355c506a1cfb2c6ca8))
- 修正页面代码错误 ([7609c33](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/7609c333ad0795f9e6ef6d38676d9160e11b07f7))
- 修正 select 组件显示错误 ([133a151](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/133a151523945cb68043aa058f196ec4face142a))
- 优化代码 ([ea669c1](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/ea669c1554a5ed2288145562d69bbe431f8b621f))
- 优化代码，使用工具类 ([39c27b1](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/39c27b13c45c974d3774796d6ffc4641f2f0d5e5))
- DSCWCN-108| mulitSelect | 描述文字修正 清楚->清除 ([3ddb69b](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/3ddb69b144a08b4bee80bae12a372329d12cd609))
- DSCWCN-108| mulitSelect | filterMode 下样式和 select 保持统一 ([7cf1336](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/7cf133628f1b44b9491a0e7614b316ea65e5c682))
- DSCWCN-108|调整小尺寸下 Multi、Input 清除 icon 大小 ([8d6d014](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/8d6d014b1db72d5f3c9482ed1bb0c32dd345b1da))

### [0.1.4](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/compare/v0.1.0...v0.1.4) (2022-02-23)

### Features

- 补全输入组件 events，优化 onChange 回调方法 ([2ec0675](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/2ec0675c8f9539357b818d7c63e836ee8b91c86b))
- 完成日期范围选择组件 修整所有过滤器组件 ([a2c1e7d](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/a2c1e7d26f2634c275f383a042c892a110487bba))
- 重构 Memu ([413aa4e](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/413aa4eecdda1024b998a9f7ce3d62afb4f0b53b))
- add filter mode ([a62e697](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/a62e697f50f297e6e5667b23758f5b565d14a25f))
- add select component "maxWidth" option ([b5558d6](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/b5558d6a4dfc035ded0476e3197737ab71beb479))
- datepicker 加入过滤器模式 ([d48759b](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/d48759b00199967cb405b2c44d86deb5d015cedc))
- DSCWCN-107: Select 触屏设备下清除按钮一直显示 ([9f7569b](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/9f7569b891410733c9a349117b83398e2e1eed54))
- DSCWCN-108| mulitSelect add filterMode ([9c656e5](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/9c656e569fcee52e2f81da3bdaf86f8bbb8064d3))
- DSCWCN-92 ｜ Search Component ｜ Add search button background ([c28b101](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/c28b101e36f503b3d8f7fae784141b9bfee36b79))
- Select 组件加入分组，过滤器模式，高亮等功能 ([c3e6432](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/c3e64323395004dd2d76aa0c5118518c24c51a5b))
- Tab 组件加入受控激活 Tab 功能 ([7bea951](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/7bea9511f1ebe922a711af5d513b591bb25f29ce))
- Table 组件加入忽略默认排序功能 ([d90fab4](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/d90fab4955e73d652abeabfb8c8d7bed22a85440))

### Bug Fixes

- 给 select 标签加入过滤器模式 ([dc30926](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/dc309263587b9992d4fcd89c9536df7e615f3bd7))
- 更新背景色 ([e140664](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/e140664bdcfb42b240579524aa044ca249190191))
- 更新边框颜色 ([e240f2b](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/e240f2b7ba04b58edaacd928de434977b189344f))
- 加入 changelog 生成代码 ([e807e40](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/e807e40719bb1451501667b306a626daa8421692))
- 去掉 !important ([3af425f](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/3af425f3e0b050ad5bb0bdea13c458883692a515))
- 去掉 !important ([2732cd4](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/2732cd4c8761efc290d13b8e308ea7a8c7867082))
- 修正暗色主题背景色 ([4e9160b](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/4e9160b574c215f80a8557d9dbf5db93897ee44a))
- 修正样式，替换 placeholder 成 label ([bf3965f](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/bf3965f9d0ef0cef729a15355c506a1cfb2c6ca8))
- 修正页面代码错误 ([7609c33](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/7609c333ad0795f9e6ef6d38676d9160e11b07f7))
- 修正 select 组件显示错误 ([133a151](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/133a151523945cb68043aa058f196ec4face142a))
- 优化代码 ([ea669c1](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/ea669c1554a5ed2288145562d69bbe431f8b621f))
- 优化代码，使用工具类 ([39c27b1](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/39c27b13c45c974d3774796d6ffc4641f2f0d5e5))
- DSCWCN-108| mulitSelect | 描述文字修正 清楚->清除 ([3ddb69b](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/3ddb69b144a08b4bee80bae12a372329d12cd609))
- DSCWCN-108| mulitSelect | filterMode 下样式和 select 保持统一 ([7cf1336](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/7cf133628f1b44b9491a0e7614b316ea65e5c682))
- DSCWCN-108|调整小尺寸下 Multi、Input 清除 icon 大小 ([8d6d014](https://gitlab.porsche-preview.cn/porsche-digital-china/web/pui/commit/8d6d014b1db72d5f3c9482ed1bb0c32dd345b1da))

### [0.1.3](https://gitlab.porsche-preview.cn///compare/v0.1.2...v0.1.3) (2022-02-07)

### New Feature

- 给 select 标签加入过滤器模式 ([dc30926](https://gitlab.porsche-preview.cn///commit/dc309263587b9992d4fcd89c9536df7e615f3bd7))

### Bug Fixes

- 修复上传组件 bug

### [0.1.0](///compare/v1.2.1...v1.2.2) (2022-01-21)

### Fixed

- 修正 InputNumber 组件小尺寸显示 bug
