## web team npm guide:
TODO
1. Change the .npmrc in your project root to :

```
strict-ssl=false
electron_mirror=https://npm.taobao.org/mirrors/electron/
registry=http://52.83.74.69:4111/
SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass
```

2. npm scripts:

```bash
$ npm adduser --registry  http://52.83.74.69:4111/
```
add your ldap account to it, the account name like:  **dihui.wang**
Then use the same account to login

```bash
$ npm login --registry  http://52.83.74.69:4111/
```
1. add "@pui/helper" to package.json:

`
  "dependencies": {
...
    "@pui/helper": "0.0.1",	
...
  },
`

4. Run the installation:
```bash
npm install
```
If not using .npmrc, please run below script:
```bash
npm install pui@helper --registry  http://52.83.74.69:4111/
```

***start development*** 



