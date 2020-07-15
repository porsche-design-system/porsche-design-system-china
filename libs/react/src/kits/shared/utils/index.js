import {deleteSpaceAll,deleteSpaceFirst} from '../constants/regExp'
export const removeFirstAndEnd=(value)=>{//去除首尾空格
  if(!value) return '';
  return value.replace(deleteSpaceAll, "");
};

export const removeFirst=(value)=>{//去除首部空格
  if(!value) return '';
  return value.replace(deleteSpaceFirst, "");
};
