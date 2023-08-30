//localstorage keys
const $USER_CODE = '$userCode';//code
const $USER_TOKEN = '$userToken';//token
const $USER_ID = '$userId';
const $USER_CLIENT_ID = '$userClientId';
const $USER_PROFILE = '$userProfile';//用户信息

const $ROLE_ASSET_DIGEST = '$roleAssetDigest';//当前项目的菜单
const $CUR_BREAD_CRUMB = '$curBreadCrumb';//当前项目的面包屑的数据
const $CUR_PRIVILEGES = '$curPrivileges';//当前项目的资源和权限
export {
	$USER_CODE,
	$USER_TOKEN,
	$USER_ID,
	$USER_CLIENT_ID,
	$USER_PROFILE,
	$ROLE_ASSET_DIGEST,
	$CUR_BREAD_CRUMB,
	$CUR_PRIVILEGES
}

//URL paths
const URL_ApiGateway = '/pdc-api-gateway/';
//Request URL: https://develop.porsche-preview.cn/pdc-api-gateway/ss-usercenter/login/callback/ppn/saml

const URL_service = `${URL_ApiGateway}smamo-charging-parking-operator`;			//TODO
// const SMAMO_SERVICE_PARKING = '/pdc-api-gateway/smamo-service-package/v1';
// const CHARGING_PARKING = '/pdc-api-gateway/smamo-charging-parking-operator';
// const SMAMO_CHARGING_PARKING = `${CHARGING_PARKING}/v1`;
// const SMAMO_SHARE_FEATURE = '/pdc-api-gateway/smamo-share-feature-service/v1';
const URL_utilityCenter = '/pdc-api-gateway/ss-utilitycenter/v1';
const URL_userCenter = '/pdc-api-gateway/ss-usercenter/api/v1';
const URL_ppnLogin= process.env.NODE_ENV==='development' ? 'https://ppnlite.porsche.com/ppnmda/login.do': 'https://ppn.porsche.com/ppnmda/login.do';

export {
	URL_service,
	URL_utilityCenter,
	URL_userCenter,
	URL_ppnLogin
}
