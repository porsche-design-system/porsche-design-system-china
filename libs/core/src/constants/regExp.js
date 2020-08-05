export const roundRegExp = /^[1-9]\d*$/ //是否正整数

export const floatRoundRegExp = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/ //是否正整数或正浮点数

export const urlRegExp = /(http|https):\/\/([\w.]+\/?)\S*/ //是否为http或https的url

export const vihecleExp = /^[0-9a-zA-Z]+$/ //只包含数字和字母

export const phoneExp = /^1[3456789]\d{9}$/ //检查手机号

export const emailExp = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/ //检查邮箱

const dateFormat = 'YYYY/MM/DD';
const dateTimeFormat = 'YYYY-MM-DD HH:mm:ss';
export {
	dateFormat,
	dateTimeFormat
}
