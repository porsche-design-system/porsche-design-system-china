1. [Ldap setup](./ldap.md), npm scripts:

```bash
$ npm adduser --registry  http://52.83.74.69:4111/
```
add your ldap account to it, the account name like:  **dihui.wang**
Then use the same account to login

```bash
$ npm login --registry  http://52.83.74.69:4111/
```

2. 安装包 📦 

* 直接安装
```bash
npm i @pui/xxx -S 
```

```bash
yarn add @pui/xxx 
```

* 通过修改`package.json` 安装：
Or:

add "@pui/xxx" to package.json:

`
  "dependencies": {
...
    "@pui/xxx": "~0.0.1",	
...
  },
`

Run the installation:
```bash
npm install
```

* If not using .npmrc, please run below script:
```bash
npm install pui@xxx --registry  http://52.83.74.69:4111/
```


3. 使用示例 🔨 

```jsx
import {$IDP} from '@pui/core'
```

引入样式：

```jsx
```

***Enjoy development*** 
