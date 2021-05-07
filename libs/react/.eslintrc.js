module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // 解决头部React引用的问题
    'no-use-before-define': 'off',
    // import 的时候要求带上扩展名，用扩展名对引用内容判断，没比亚
    'import/extensions': 'off',
    // 强制使用字符串模板 ` ${var}  `,不能再使用 + 号合并字符串，太过严格，有一些特定情况这么写会很麻烦
    'prefer-template': 'off',
    // 检查组件的扩展名是 tsx,jsx 这个没必要，因为写不对完全不能编译
    'react/jsx-filename-extension': 'off',
    // 保证引用根据不同的打包方式可以正确解析模块，如果不能解析，IDE会报错，不需要使用这种方式检测
    'import/no-unresolved': 'off',
    // 强制要求 user.name 的形式取代 user['name'] 没有这个强制的必要
    'dot-notation': 'off',
    // 对于只有一个 return 的component，强制直接写返回内容 a => 123 ，去掉return语句
    // 过于严格，尤其是常做代码修改的时候需要在return上加入功能，这样在代码修改上变得麻烦
    'arrow-body-style': 'off',
    // 需要做调试就需要打印
    'no-console': 'off',
    // 强制要求使用 default export，部分封装不见得非得要做default export，
    // 因为default export给了import改名的权利，所以不强制使用default export
    'import/prefer-default-export': 'off',
    // 不允许 props 使用扩展属性 {...props} 不用强制
    'react/jsx-props-no-spreading': 'off',
    // 下两行是一体的，no-unused-vars主要是关闭在interface上的"未用变量"（其实是定义）
    // 然后在typescript开启报错
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    // 不能用++语法，过于严格
    'no-plusplus': 'off',
    // 不允许对props或者
    'no-param-reassign': 'off',
    // 非得使用结构的方式去使用属性，过于严格
    'react/destructuring-assignment': 'off',
    // click事件不能写到标签里，过于严格
    'jsx-a11y/click-events-have-key-events': 'off',
    // 事件不能写到标签里，过于严格
    'jsx-a11y/no-static-element-interactions': 'off',
    // parseInt还需要传入转换的进制，没有必要
    radix: 'off',
    // 不能在函数内用相同的变量名字
    'no-shadow': 'off',
    // 非得使用结构的方式去使用属性，过于严格
    'prefer-destructuring': 'off',
    // 事件不能写到标签里，过于严格
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    // method && method() 不可用过于严格
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    // forEach 打印不能使用index，过于严格
    'react/no-array-index-key': 'off',
    // 不能迭代使用 ? :
    'no-nested-ternary': 'off',
    // else 语句前用不能用return
    'no-else-return': 'off',
    // 禁止 for in 语句，过于严格
    'no-restricted-syntax': 'off',
    // 禁止 for in 语句，过于严格
    'guard-for-in': 'off',
    // 保证一个方法的多个条件返回类型一致，有时候就是需要不一样的
    'consistent-return': 'off',
    'no-constant-condition': 'off'
  }
}
