## Ldap npm guide:

1. Change the .npmrc in your project root to :

```
strict-ssl=false
electron_mirror=https://npm.taobao.org/mirrors/electron/
registry=https://devops.porsche-preview.cn/nexus/repository/npm-all/
SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass
```

2. npm scripts:

```bash
$ npm adduser --registry  https://devops.porsche-preview.cn/nexus/repository/npm-all/
```
use your ldap account to login, the account name like:  **dihui.wang**
Then use the same account to login

```bash
$ npm login --registry  https://devops.porsche-preview.cn/nexus/repository/npm-all/
```
3. add "@pui/others" to package.json:

`
  "dependencies": {
...
    "pui": "0.0.44",
...
  },
`

4. Run the installation:
```bash
npm install
```
If not using .npmrc, please run below script:
```bash
npm install pui --registry  https://devops.porsche-preview.cn/nexus/repository/npm-all/
```

***start development*** 



