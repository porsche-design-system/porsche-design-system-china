## Ldap npm guide for consumers:

1. (npm users)Change the .npmrc in your project root to :

```
strict-ssl=false
electron_mirror=https://npm.taobao.org/mirrors/electron/
registry=http://52.83.74.69:4111/
SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass
```

(yarn users) yarn config set registry http://52.83.74.69:4111/

below shell are all basid on npm, if use yarn please refer to [yarn工具的使用]()
1. npm scripts:

```bash
$ npm adduser --registry http://52.83.74.69:4111/
```
use your ldap account to login, the account name like:  **dihui.wang**
Then use the same account to login

```bash
$ npm login --registry  http://52.83.74.69:4111/
```
And for yarn:
$ yarn login 

***Enjoy development in your project*** 
