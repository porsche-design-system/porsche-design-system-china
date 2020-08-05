const local = window.localStorage;

const storageProfile = (user) => {
  if (!!user) {
    window.localStorage.setItem($USER_PROFILE, JSON.stringify(user));
  } else {
    window.localStorage.clear();
  }
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

export * from './common'

export {
	storageProfile,
	getPath,
	getMenu,
	local
}
