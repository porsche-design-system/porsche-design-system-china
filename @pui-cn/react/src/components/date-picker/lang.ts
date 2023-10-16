import { PUI } from '../pui/pui'

export const langData = {
  en: {
    Weekdays: 'Sun Mon Tue Wed Thu Fri Sat',
    Months:
      'January February March April May June July August September October November December',
    To: '-'
  },
  'zh-CN': {
    Weekdays: '日 一 二 三 四 五 六',
    Months: '1月 2月 3月 4月 5月 6月 7月 8月 9月 10月 11月 12月',
    To: '至'
  }
}

PUI.addLangResources('DatePicker', langData)
