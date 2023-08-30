import { URL_service, URL_userCenter, URL_ppnLogin } from './constants';
import {request} from './requests';
import {titleCase} from './common';
const {
	$USER_CODE,
	$USER_TOKEN,
	$USER_ID,
	$USER_CLIENT_ID,
	$USER_PROFILE,
	$ROLE_ASSET_DIGEST,
	// $CUR_BREAD_CRUMB,
	$CUR_PRIVILEGES
} = constants;
const local = window.localStorage;

const storageProfile = (user) => {
  if (!!user) {
    window.localStorage.setItem($USER_PROFILE, JSON.stringify(user));
  } else {
    window.localStorage.clear();
  }
};

const fetchRoleAssetDigest = (params, url) => {
  return request.get(url || `${URL_userCenter}/user/roleAsset/group/digest`, params, {
    headers: {Authorization: params.userGetToken}
  }).then((res) => {
    const {code, data} = res;
    if (code === '0') {
      let roleAssetDigest = data.map((item) => {
        return Object.assign({}, {
          assetCode: item.clientInfo.clientCode,
          assetName: item.clientInfo.clientName,
          routePath: item.clientInfo.entryUrl,
          redirectBlankFlag: item.clientInfo.redirectBlankFlag,
          redirectTokenFlag: item.clientInfo.redirectTokenFlag,
          children: item.assetList
        })
      });

      const userProfile = data.map((item)=>{
        const role = item.roleList && item.roleList.length ? item.roleList[0] : {};
        return Object.assign({}, {
          [item.clientInfo.clientCode] : {
            firstName: item.userInfo.firstName,
            lastName: item.userInfo.lastName,
            roleCode: role.roleCode,
            roleName: role.roleName
          }
        })
      });
      const assetPermission = getPath(roleAssetDigest);
      const assetCurrentMenu = getMenu(roleAssetDigest);

      local.setItem($USER_PROFILE, JSON.stringify(userProfile));
      local.setItem($ROLE_ASSET_DIGEST, JSON.stringify(roleAssetDigest));
      // local.setItem($CUR_BREAD_CRUMB, JSON.stringify(assetCurrentMenu));
      local.setItem($CUR_PRIVILEGES, JSON.stringify(assetPermission));

      return {userProfile, roleAssetDigest, assetPermission, assetCurrentMenu};
    }
  });
};

const fetchTokenAndMenu = ({sessionCode, clientId, urlPermission}, urlDigest) => {
  local.clear();
  return request.get(urlPermission || `${URL_service}/permission/token/${sessionCode}`).then((res) => {
    const {code, data} = res;
    if (code === '0') {
      const { userId } = data;
      local.setItem($USER_CODE, sessionCode);
      local.setItem($USER_TOKEN, titleCase(data.tokenType) + ' ' + data.accessToken);
      local.setItem($USER_ID, userId);
      local.setItem($USER_CLIENT_ID, clientId);

      return fetchRoleAssetDigest({
				accountType: 'PPN',
				clientId: clientId,
				userId,
				userGetToken: titleCase(data.tokenType) + ' ' + data.accessToken
			}, urlDigest||undefined)
    }
  });
};

const logout = (url) => {
  return request.get(url || `/pdc-request-gateway/ss-usercenter/oauth/logout`)
    .then(res => {
      if (res.code === '0') {
        storageProfile();
        window.location.href = URL_ppnLogin;
      }
    });
};

const getPath = (data) =>{
  const dt = data.map((item)=>{
    let pathVal=[];
    let forFunc=(arr, path)=>{
      arr.forEach((item)=>{
        if(item.children && item.children.length){
          forFunc(item.children, path);
        }else {
          pathVal.push({'path':item.routePath, 'permission':item.permissionList || []});
        }
      })
    };
    forFunc((item.children || []), pathVal);
    return {[item.assetCode]: pathVal};
  });
  return dt;
};

const getMenu = (data) => {
  let pathVal = [];
  let forFunc = (arr, path, name = []) => {
    arr.forEach((item) => {
      let nameValue = [...name, item.assetName];
      if (item.children && item.children.length) {
        forFunc(item.children, path, nameValue)
      } else {
        path.push({
          currentMenu: nameValue,
          routePath: item.routePath,
          assetCode: item.assetCode,
          permission: item.permissionList || []
        })
      }
    })
  };
  data.forEach((item, index) => {
    pathVal.push({ [item.assetCode]: [] });
    forFunc(item.children, pathVal[index][item.assetCode], [item.assetName])
  });
  return pathVal
};

const getSmamoLocalMenu= () =>{
  let profile= local.getItem($USER_PROFILE);
  let digest= local.getItem($ROLE_ASSET_DIGEST);
  // let currentMenu = local.getItem($CUR_BREAD_CRUMB);
  let permission = local.getItem($CUR_PRIVILEGES);
  let permissionValue = permission ? JSON.parse(permission) : [];
  const userProfile= profile ? JSON.parse(profile) : [];
  const roleAssetDigest= digest ? JSON.parse(digest) : [];
  const assetCurrentMenu = getMenu(roleAssetDigest);
  const assetPermission = [...permissionValue];
  return {userProfile, roleAssetDigest, assetPermission, assetCurrentMenu};
};

const IDP = {
	logout,
	fetchTokenAndMenu,
	fetchRoleAssetDigest,
	getSmamoLocalMenu
}

import * as $CONSTANTS from './constants';
import * as common  from './common'
export {$CONSTANTS, IDP, common};

export * from './constants'
export * from './common'
export {
	request,
	logout,
	fetchTokenAndMenu,
	fetchRoleAssetDigest
}


