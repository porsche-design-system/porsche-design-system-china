## web team npm guide:

1. Change the .npmrc in your project root to :

```
strict-ssl=false
electron_mirror=https://npm.taobao.org/mirrors/electron/
registry=http://52.83.74.69:4111/
SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass
```

1. After Ldap setup, npm scripts:

```bash
$ npm adduser --registry  http://52.83.74.69:4111/
```
add your ldap account to it, the account name like:  **dihui.wang**
Then use the same account to login

```bash
$ npm login --registry  http://52.83.74.69:4111/
```

2. 安装包 📦 

```bash
npm i @pui/xxx -S 
```

```bash
yarn add @pui/xxx 
```
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
If not using .npmrc, please run below script:
```bash
npm install pui@xxx --registry  http://52.83.74.69:4111/
```


3. 示例 🔨 

```jsx
import {api} from '@pui/xxx'

```

引入样式：

```jsx
```

***start development*** 



