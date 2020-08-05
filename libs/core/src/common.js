import axios from 'axios';
import moment from 'moment';
import {
	dateFormat,
	dateTimeFormat
} from './constants';

const titleCase = (str)=>{
    if(!str)return '';
    let arr = str.toLowerCase().split(" ");
    for (let i=0;i<arr.length;i++){
      let char = arr[i].charAt(0);
      arr[i] = arr[i].replace(char, function replace(charValue){
        return charValue.toUpperCase();
      });
    }
    return arr.join(' ');
};

const queryObject = () => {
    let codeData = {};
    window.location.search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (codeData[k] = v));
    return codeData;
};

const toQueryParam = (queryParams) => {
    const params = new URLSearchParams();
    Object.keys(queryParams).forEach(key => {
      if (queryParams[key]) {
        params.append(key, queryParams[key]);
      }
    });
    return params;
};

const getProjectData = (basename, data) =>{//通过basename查找当前项目的面包屑数据
    for(let item of data){
      for(let key in item){
        if(key === basename) return item[key];
      }
    }
    return [];
}

const sortTableFunc=(data, params={}, sorter, name='orderBy')=>{
  if(sorter.order){
    Object.keys(data).forEach((item)=>{
      if(item===sorter.field) params[name]= `${data[item]} ${sorter.order==='ascend'?'asc':'desc'}`;
    });
  }else {
    params[name]= '';
  }
  return params;
};

const getTimeZone=()=>{
  return -(new Date().getTimezoneOffset()/60);
};

const getTimeOffset=()=>{
  return -(new Date().getTimezoneOffset() * 60000);//本地时间与GMT时间的时间偏移差
};

const formatDate=(value,format=dateTimeFormat)=>{
  if(!value)return '';
  if(typeof value !== 'number'){
    if(value.indexOf('Z')===value.length-1 || value.indexOf('+')>-1){
      return moment(new Date(value)).format(format);
    }else{
      return moment(new Date(new Date(value).getTime()+getTimeOffset())).format(format);
    }
  }
  return moment(new Date(value*1000)).format(format);
};

const formatDateToUtc=(value,type)=>{
  let date=new Date(value).getTime()/1000;
  if(type){
    let time=type==='start'?'00:00:00':'23:59:59';
    let day=moment(new Date(value)).format(dateFormat);
    date=new Date(`${day} ${time}`).getTime()/1000;
  }
  return Math.round(date);
};

const compareDate=(start,end,day=365)=>{//比较两个日期是否相差多少天，默认365
  if(!start || !end) return true;
  let time=day*24*60*60*1000;
  let dValue=Math.abs(new Date(start).getTime()-new Date(end).getTime());
  return time>dValue;
};

const statusArrToValueFunc=(value, data = [], key='dictValue', label='description')=>{
  if(!value && value!==0)return '';
  let index=data.findIndex((item)=>item[key]===value||Number(item[key])===value);
  return index>-1?data[index][label]:'';
};

const statusArrToValueSfFunc=(value, data, key='dictKey', label='dictValue')=>{
  if((!value && value!==0) || !data) return '';
  if(Array.isArray(value)){
    let text = '';
    data.forEach((item)=>{
      value.forEach((list)=>{
        if(item[key].toString() === list.toString()) text+=text?`,${item[label]}`:item[label];
      })
    });
    return text;
  }
  let index=data.findIndex((item)=>item[key].toString()===value.toString());
  return index>-1?data[index][label]:'';
};

const startToEndTime=(startTime,endTime)=>{
  let timeDiff = endTime - startTime;
  const hour = Math.floor(timeDiff / 3600);
  timeDiff = timeDiff % 3600;
  const minute = Math.floor(timeDiff / 60);
  timeDiff = timeDiff % 60;
  const second = timeDiff;
  const dataContent = typeof(startTime)&&typeof(endTime)==="number"? [hour+'小时', minute+'分', second+'秒'] :'';
  return dataContent
};

const blobToDownloadExcel=(data,title,fileType='xls')=>{
  let blob = new Blob([data], {type: 'application/octet-stream;charset=utf-8'});
  if(window.navigator && window.navigator.msSaveOrOpenBlob){
    window.navigator.msSaveOrOpenBlob(blob, `${title}.${fileType}`);
    return;
  }
  let url = window.URL.createObjectURL(blob);
  let aLink = document.createElement("a");
  aLink.style.display = "none";
  aLink.href = url;
  aLink.setAttribute("download", `${title}.${fileType}`);
  document.body.appendChild(aLink);
  aLink.click();
  document.body.removeChild(aLink);
  window.URL.revokeObjectURL(url);
};

const getElementImg = (data) =>{
  const value = data.map((blob)=>{
    return new Promise((resolve, reject)=>{
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = ()=>{
        resolve(reader.result);
      };
      reader.onerror = (err)=>{
        reject(err);
      }
    });
  });
  return axios.all(value);
};

const compare = (x, y) => {
  return x.date > y.date;
};

const isTitleFunc = (searchParams) => {
  return Object.values(searchParams).some((item)=>!!item);
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

const recursionTreeFunc = data => {
  data.forEach((item)=>{
    if(item.children && item.children.length){
      recursionTreeFunc(item.children);
    }
    if(item.permissionList && item.permissionList.length){
      item.permissionList=item.permissionList.map((permission)=>Object.assign({},permission,{assetName:permission.permissionName,type:'permission'}));
      item.children=[...item.permissionList,...item.children];
    }
  });
  return data;
};

export {
    titleCase,
    queryObject,
    toQueryParam,
    getProjectData,
    isTitleFunc,
    formatDate,
    sortTableFunc,
    formatDateToUtc,
    statusArrToValueFunc,
    statusArrToValueSfFunc,
    startToEndTime,
    compareDate,
    getElementImg,
    compare,
    blobToDownloadExcel,
    getTimeZone,
    getMenu,
    recursionTreeFunc
};
