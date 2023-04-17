const jet = {}
const regymdzz = 'YYYY|MM|DD|hh|mm|ss|zz'
let puiDateObj = {}

function $Q(selector, content) {
  content = content || document
  return selector.nodeType ? selector : content.querySelector(selector)
}

function $I(id) {
  return document.getElementById(id)
}

function $C(classStr) {
  return document.getElementsByClassName(classStr)
}

function jeDatePick(elem, options) {
  const config = {
    language: {
      name: 'cn',
      month: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12'
      ],
      weeks: ['日', '一', '二', '三', '四', '五', '六'],
      times: options.showSecend ? ['时', '分', '秒'] : ['时', '分'],
      timetxt: ['选择时间', '开始时间', '结束时间'],
      backtxt: '返回日期',
      clear: '清空',
      today: '现在',
      yes: '确定'
    },
    format: 'YYYY-MM-DD hh:mm', // 日期格式
    minDate: '1900-01-01 00:00:00', // 最小日期
    maxDate: '2099-12-31 23:59:59', // 最大日期
    isShow: true, // 是否显示为固定日历，为false的时候固定显示
    multiPane: true, // 是否为双面板，为false是展示双面板
    onClose: true, // 是否为选中日期后关闭弹层，为false时选中日期后关闭弹层
    range: false, // 如果不为空且不为false，则会进行区域选择，例如 " 至 "，" ~ "，" To "
    trigger: 'click', // 是否为内部触发事件，默认为内部触发事件
    position: [], // 自定义日期弹层的偏移位置，长度为0，弹层自动查找位置
    valiDate: [], // 有效日期与非有效日期，例如 ["0[4-7]$,1[1-5]$,2[58]$",true]
    isinitVal: false, // 是否初始化时间，默认不初始化时间
    initDate: {}, // 初始化时间，加减 天 时 分
    isTime: true, // 是否开启时间选择
    isClear: true, // 是否显示清空按钮
    isToday: true, // 是否显示今天或本月按钮
    isYes: true, // 是否显示确定按钮
    festival: false, // 是否显示农历节日
    fixed: true, // 是否静止定位，为true时定位在输入框，为false时居中定位
    zIndex: 2099, // 弹出层的层级高度
    method: {}, // 自定义方法
    theme: {}, // 自定义主题色
    shortcut: [], // 日期选择的快捷方式
    doneFun: null, // 选中日期完成的回调
    before: null, // 在界面加载之前执行
    succeed: null, // 在界面加载之后执行
    yearIcon: null,
    singleLeftIcon: null,
    singleRightIcon: null,
    doubleRightIcon: null,
    isClickYearNow: false, // 是否正在点击 年
    clickYearVal: null, // 选中的年，和上面一起使用
    allowNullDate: false, // 开始日期或结束日期可以为空
    currentClickIndex: 0,
    isClickYearBtn: false,
    isClickMonthBtn: false,
    monthItemClickFun: null,
    yearItemClickFun: null,
    dayItemClickFun: null,
    dynamicRangeDate: false, // 动态大小日期
    minSession: '',
    maxSession: ''
  }
  this.$opts = jet.extend(config, options || {})
  this.valCell = $Q(elem)
  this.format = this.$opts.format
  this.valCell != null
    ? this.init()
    : alert(elem + '  ID\u6216\u7C7B\u540D\u4E0D\u5B58\u5728!')
  jet.extend(this, this.$opts.method)
  delete this.$opts.method
}

// 返回日期
function DateTime(arr, valObj) {
  const that = this
  const newdate = new Date()
  const narr = ['FullYear', 'Month', 'Date', 'Hours', 'Minutes', 'Seconds']
  const vb = jet.extend(
    {
      YYYY: null,
      MM: null,
      DD: null,
      hh: newdate.getHours(),
      mm: newdate.getMinutes(),
      ss: newdate.getSeconds()
    },
    valObj
  )
  const ND =
    valObj == undefined
      ? newdate
      : new Date(vb.YYYY, vb.MM, vb.DD, vb.hh, vb.mm, vb.ss)
  if ((arr || []).length > 0)
    jet.each(arr, (i, par) => {
      ND['set' + narr[i]](
        narr[i] == 'Month' ? parseInt(par) - 1 : parseInt(par)
      )
    })
  // 返回一个数值相同的新DateTime对象
  that.reDate = function () {
    return new DateTime()
  }
  // 返回此实例的Date值
  that.GetValue = function () {
    return ND
  }
  // 获取此实例所表示日期的年份部分。
  that.GetYear = function () {
    return ND.getFullYear()
  }
  // 获取此实例所表示日期的月份部分。
  that.GetMonth = function () {
    return ND.getMonth() + 1
  }
  // 获取此实例所表示的日期为该月中的第几天。
  that.GetDate = function () {
    return ND.getDate()
  }
  // 获取此实例所表示日期的小时部分。
  that.GetHours = function () {
    return ND.getHours()
  }
  // 获取此实例所表示日期的分钟部分。
  that.GetMinutes = function () {
    return ND.getMinutes()
  }
  // 获取此实例所表示日期的秒部分。
  that.GetSeconds = function () {
    return ND.getSeconds()
  }
}

function searandom() {
  let str = ''
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  for (let i = 0; i < 8; i++)
    str += arr[Math.round(Math.random() * (arr.length - 1))]
  return str
}

function jeLunar(ly, lm, ld) {
  const lunarInfo = []
  const sTermInfo = []
  const Gan = ''
  const Zhi = ''
  const Animals = ''
  const solarTerm = []
  const nStr1 = ''
  const nStr2 = '初十廿卅'
  const nStr3 = []
  const sFtv1 = {}
  const sFtv2 = {}
  function flunar(Y) {
    const sTerm = function (j, i) {
      const h = new Date(
        31556925974.7 * (j - 1900) +
          sTermInfo[i] * 60000 +
          Date.UTC(1900, 0, 6, 2, 5)
      )
      return h.getUTCDate()
    }
    const d = function (k) {
      let h
      let j = 348
      for (h = 32768; h > 8; h >>= 1) j += lunarInfo[k - 1900] & h ? 1 : 0
      return j + b(k)
    }
    const ymdCyl = function (h) {
      return Gan.charAt(h % 10) + Zhi.charAt(h % 12)
    }
    var b = function (h) {
      const islp = g(h) ? (lunarInfo[h - 1900] & 65536 ? 30 : 29) : 0
      return islp
    }
    var g = function (h) {
      return lunarInfo[h - 1900] & 15
    }
    const e = function (i, h) {
      return lunarInfo[i - 1900] & (65536 >> h) ? 30 : 29
    }
    const newymd = function (m) {
      let k
      let j = 0
      let h = 0
      const l = new Date(1900, 0, 31)
      let n = (m - l) / 86400000
      this.dayCyl = n + 40
      this.monCyl = 14
      for (k = 1900; k < 2050 && n > 0; k++) {
        h = d(k)
        n -= h
        this.monCyl += 12
      }
      if (n < 0) {
        n += h
        k--
        this.monCyl -= 12
      }
      this.year = k
      this.yearCyl = k - 1864
      j = g(k)
      this.isLeap = false
      for (k = 1; k < 13 && n > 0; k++) {
        if (j > 0 && k == j + 1 && this.isLeap == false) {
          --k
          this.isLeap = true
          h = b(this.year)
        } else {
          h = e(this.year, k)
        }
        if (this.isLeap == true && k == j + 1) {
          this.isLeap = false
        }
        n -= h
        if (this.isLeap == false) this.monCyl++
      }
      if (n == 0 && j > 0 && k == j + 1) {
        if (this.isLeap) {
          this.isLeap = false
        } else {
          this.isLeap = true
          --k
          --this.monCyl
        }
      }
      if (n < 0) {
        n += h
        --k
        --this.monCyl
      }
      this.month = k
      this.day = n + 1
    }
    const digit = function (num) {
      return num < 10 ? '0' + (num | 0) : num
    }
    const reymd = function (i, j) {
      const h = i
      return j.replace(/dd?d?d?|MM?M?M?|yy?y?y?/g, k => {
        switch (k) {
          case 'yyyy':
            var l = '000' + h.getFullYear()
            return l.substring(l.length - 4)
          case 'dd':
            return digit(h.getDate())
          case 'd':
            return h.getDate().toString()
          case 'MM':
            return digit(h.getMonth() + 1)
          case 'M':
            return h.getMonth() + 1
        }
      })
    }
    const lunarMD = function (i, h) {
      let j
      switch ((i, h)) {
        case 10:
          j = '初十'
          break
        case 20:
          j = '二十'
          break
        case 30:
          j = '三十'
          break
        default:
          j = nStr2.charAt(Math.floor(h / 10))
          j += nStr1.charAt(h % 10)
      }
      return j
    }
    this.isToday = false
    this.isRestDay = false
    this.solarYear = reymd(Y, 'yyyy')
    this.solarMonth = reymd(Y, 'M')
    this.solarDate = reymd(Y, 'd')
    this.solarWeekDay = Y.getDay()
    this.inWeekDays = '星期' + nStr1.charAt(this.solarWeekDay)
    const X = new newymd(Y)
    this.lunarYear = X.year
    this.shengxiao = Animals.charAt((this.lunarYear - 4) % 12)
    this.lunarMonth = X.month
    this.lunarIsLeapMonth = X.isLeap
    this.lnongMonth = this.lunarIsLeapMonth
      ? '闰' + nStr3[X.month - 1]
      : nStr3[X.month - 1]
    this.lunarDate = X.day
    this.showInLunar = this.lnongDate = lunarMD(this.lunarMonth, this.lunarDate)
    if (this.lunarDate == 1) {
      this.showInLunar = this.lnongMonth + '月'
    }
    this.ganzhiYear = ymdCyl(X.yearCyl)
    this.ganzhiMonth = ymdCyl(X.monCyl)
    this.ganzhiDate = ymdCyl(X.dayCyl++)
    this.jieqi = ''
    this.restDays = 0
    if (sTerm(this.solarYear, (this.solarMonth - 1) * 2) == reymd(Y, 'd')) {
      this.showInLunar = this.jieqi = solarTerm[(this.solarMonth - 1) * 2]
    }
    if (sTerm(this.solarYear, (this.solarMonth - 1) * 2 + 1) == reymd(Y, 'd')) {
      this.showInLunar = this.jieqi = solarTerm[(this.solarMonth - 1) * 2 + 1]
    }
    if (this.showInLunar == '清明') {
      this.showInLunar = '清明节'
      this.restDays = 1
    }
    this.solarFestival = sFtv1[reymd(Y, 'MM') + reymd(Y, 'dd')]
    if (typeof this.solarFestival === 'undefined') {
      this.solarFestival = ''
    } else if (/\*(\d)/.test(this.solarFestival)) {
      this.restDays = parseInt(RegExp.$1)
      this.solarFestival = this.solarFestival.replace(/\*\d/, '')
    }
    this.showInLunar =
      this.solarFestival == '' ? this.showInLunar : this.solarFestival
    this.lunarFestival =
      sFtv2[
        this.lunarIsLeapMonth
          ? '00'
          : digit(this.lunarMonth) + digit(this.lunarDate)
      ]
    if (typeof this.lunarFestival === 'undefined') {
      this.lunarFestival = ''
    } else if (/\*(\d)/.test(this.lunarFestival)) {
      this.restDays =
        this.restDays > parseInt(RegExp.$1)
          ? this.restDays
          : parseInt(RegExp.$1)
      this.lunarFestival = this.lunarFestival.replace(/\*\d/, '')
    }
    if (this.lunarMonth == 12 && this.lunarDate == e(this.lunarYear, 12)) {
      this.lunarFestival = sFtv2['0100']
      this.restDays = 1
    }
    this.showInLunar =
      this.lunarFestival == '' ? this.showInLunar : this.lunarFestival
  }
  return new flunar(new Date(ly, lm, ld))
}

function puiDate(elem, options) {
  var doc = document
  const win = window
  var doc = document
  // regymdzz = 'YYYY|MM|DD|hh|mm|ss|zz',
  const gr = /\-/g
  const regymd = 'YYYY|MM|DD|hh|mm|ss|zz'.replace('|zz', '')
  const parseInt = function (n) {
    return window.parseInt(n, 10)
  }

  puiDateObj = (function (elem, options) {
    const opts = typeof options === 'function' ? options() : options
    return new jeDatePick(elem, opts)
  })(elem, options)
}

puiDateObj.dateVer = 'V6.5.0'
// 用一个或多个其他对象来扩展一个对象，返回被扩展的对象
puiDateObj.extend = jet.extend = function () {
  let options
  let name
  let src
  let copy
  let deep = false
  let target = arguments[0]
  let i = 1
  const length = arguments.length
  if (typeof target === 'boolean')
    (deep = target), (target = arguments[1] || {}), (i = 2)
  if (typeof target !== 'object' && typeof target !== 'function') target = {}
  if (length === i) (target = this), --i
  for (; i < length; i++) {
    if ((options = arguments[i]) != null) {
      for (name in options) {
        ;(src = target[name]), (copy = options[name])
        if (target === copy) continue
        if (copy !== undefined) target[name] = copy
      }
    }
  }
  return target
}
// 返回指定日期
puiDateObj.nowDate = function (val, format) {
  format = format || 'YYYY-MM-DD hh:mm'
  if (!isNaN(val)) val = { DD: val }
  return jet.parse(jet.getDateTime(val), format)
}
// 日期转换
puiDateObj.convert = function (obj) {
  obj.format = obj.format || 'YYYY-MM-DD hh:mm'
  obj.addval = obj.addval || []
  const mats = jet.reMatch(obj.format)
  const objVal = {}
  jet.each(jet.reMatch(obj.val), (i, cval) => {
    objVal[mats[i]] = parseInt(cval)
  })
  const result = new DateTime(obj.addval, objVal)
  const redate = {
    YYYY: result.GetYear(),
    MM: result.GetMonth(),
    DD: result.GetDate(),
    hh: result.GetHours(),
    mm: result.GetMinutes(),
    ss: result.GetSeconds()
  }
  return redate
}
puiDateObj.valText = function (elem, value) {
  return jet.valText(elem, value)
}
// 日期时间戳相互转换
puiDateObj.timeStampDate = function (date, format) {
  format = format || 'YYYY-MM-DD hh:mm'
  const dateTest = /^(-)?\d{1,10}$/.test(date) || /^(-)?\d{1,13}$/.test(date)
  if (/^[1-9]*[1-9][0-9]*$/.test(date) && dateTest) {
    let vdate = parseInt(date)
    if (/^(-)?\d{1,10}$/.test(vdate)) {
      vdate *= 1000
    } else if (/^(-)?\d{1,13}$/.test(vdate)) {
      vdate *= 1000
    } else if (/^(-)?\d{1,14}$/.test(vdate)) {
      vdate *= 100
    } else {
      alert('时间戳格式不正确')
      return
    }
    const setdate = new Date(vdate)
    return jet.parse(
      {
        YYYY: setdate.getFullYear(),
        MM: jet.digit(setdate.getMonth() + 1),
        DD: jet.digit(setdate.getDate()),
        hh: jet.digit(setdate.getHours()),
        mm: jet.digit(setdate.getMinutes()),
        ss: jet.digit(setdate.getSeconds())
      },
      format
    )
  } else {
    // 将日期转换成时间戳
    const arrs = jet.reMatch(date)
    const newdate = new Date(
      arrs[0],
      arrs[1] - 1,
      arrs[2],
      arrs[3] || 0,
      arrs[4] || 0,
      arrs[5] || 0
    )
    const timeStr = Math.round(newdate.getTime() / 1000)
    return timeStr
  }
}
// 获取年月日星期
puiDateObj.getLunar = function (obj) {
  // 如果为数字类型的日期对获取到日期的进行替换
  const lunars = jeLunar(obj.YYYY, parseInt(obj.MM) - 1, obj.DD)
  return {
    nM: lunars.lnongMonth, // 农历月
    nD: lunars.lnongDate, // 农历日
    cY: parseInt(lunars.solarYear), // 阳历年
    cM: parseInt(lunars.solarMonth), // 阳历月
    cD: parseInt(lunars.solarDate), // 阳历日
    cW: lunars.inWeekDays, // 汉字星期几
    nW: lunars.solarWeekDay // 数字星期几
  }
}
// 转换日期格式
puiDateObj.parse = jet.parse = function (ymdhms, format) {
  return format.replace(new RegExp(regymdzz, 'g'), (str, index) => {
    let date = jet.digit(ymdhms[str])
    if (!date && str == 'DD') {
      date = new Date().getDate()
    }
    return str == 'zz' ? '00' : date
  })
}

jet.extend(jet, {
  isType(obj, type) {
    const firstUper = function (str) {
      str = str.toLowerCase()
      return str.replace(/\b(\w)|\s(\w)/g, m => {
        return m.toUpperCase()
      })
    }
    return (
      Object.prototype.toString.call(obj) == '[object ' + firstUper(type) + ']'
    )
  },
  each(obj, callback, args) {
    let name
    let i = 0
    const length = obj.length
    const iselem = length === undefined || obj === 'function'
    if (iselem) {
      for (name in obj) {
        if (callback.call(obj[name], name, obj[name]) === false) {
          break
        }
      }
    } else {
      for (; i < length; ) {
        if (callback.call(obj[i], i, obj[i++]) === false) {
          break
        }
      }
    }
    return obj
  },
  on(elm, type, fn) {
    if (elm.addEventListener) {
      elm.addEventListener(type, fn, false) // DOM2.0
      return true
    } else if (elm.attachEvent) {
      return elm.attachEvent('on' + type, fn) // IE5+
    } else {
      elm['on' + type] = fn // DOM 0
    }
  },
  isObj(obj) {
    for (const i in obj) {
      return true
    }
    return false
  },
  trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '')
  },
  reMatch(str) {
    const smarr = []
    let maStr = ''
    const parti = /(^\w{4}|\w{2}\B)/g
    if (jet.isNum(str)) {
      maStr = str.replace(parti, '$1-')
    } else {
      maStr = /^[A-Za-z]+$/.test(str) ? str.replace(parti, '$1-') : str
    }
    jet.each(maStr.match(/\w+|d+/g), (i, val) => {
      smarr.push(jet.isNum(val) ? parseInt(val) : val)
    })
    return smarr
  },
  equals(arrA, arrB) {
    if (!arrB) return false
    if (arrA.length != arrB.length) return false
    for (let i = 0, l = arrA.length; i < l; i++) {
      if (arrA[i] instanceof Array && arrB[i] instanceof Array) {
        if (!arrA[i].equals(arrB[i])) return false
      } else if (arrA[i] != arrB[i]) {
        return false
      }
    }
    return true
  },
  docScroll(type) {
    type = type ? 'scrollLeft' : 'scrollTop'
    return document.body[type] | document.documentElement[type]
  },
  docArea(type) {
    return document.documentElement[type ? 'clientWidth' : 'clientHeight']
  },
  // 补齐数位
  digit(num) {
    return num < 10 ? '0' + (num | 0) : num
  },
  // 判断是否为数字
  isNum(value) {
    return !!/^[+-]?\d*\.?\d*$/.test(value)
  },
  // 获取本月的总天数
  getDaysNum(y, m) {
    let num = 31
    const isLeap = (y % 100 !== 0 && y % 4 === 0) || y % 400 === 0
    switch (parseInt(m)) {
      case 2:
        num = isLeap ? 29 : 28
        break
      case 4:
      case 6:
      case 9:
      case 11:
        num = 30
        break
    }
    return num
  },
  // 获取月与年
  getYM(y, m, n) {
    if (!y) {
      y = new Date().getFullYear()
    }
    if (!m) {
      m = new Date().getMonth() + 1
    }
    const nd = new Date(y, m - 1)
    nd.setMonth(m - 1 + n)
    return {
      y: nd.getFullYear(),
      m: nd.getMonth() + 1
    }
  },
  // 获取上个月
  prevMonth(y, m, n) {
    return jet.getYM(y, m, 0 - (n || 1))
  },
  // 获取下个月
  nextMonth(y, m, n) {
    return jet.getYM(y, m, n || 1)
  },
  setCss(elem, obj) {
    for (const x in obj) elem.style[x] = obj[x]
  },
  html(elem, html) {
    return typeof html === 'undefined'
      ? elem && elem.nodeType === 1
        ? elem.innerHTML
        : undefined
      : typeof html !== 'undefined' && html == true
      ? elem && elem.nodeType === 1
        ? elem.outerHTML
        : undefined
      : (elem.innerHTML = html)
  },
  // 读取设置节点文本内容
  text(elem, value) {
    const innText = document.all ? 'innerText' : 'textContent'
    return typeof value === 'undefined'
      ? elem && elem.nodeType === 1
        ? elem[innText]
        : undefined
      : (elem[innText] = value)
  },
  // 设置值
  val(elem, value) {
    if (typeof value === 'undefined') {
      return elem && elem.nodeType === 1 && typeof elem.value !== 'undefined'
        ? elem.value
        : undefined
    }
    // 将value转化为string
    value = value == null ? '' : value + ''
    elem.value = value
  },
  attr(elem, value) {
    return elem.getAttribute(value)
  },
  hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
  },
  stopPropagation(ev) {
    ev && ev.stopPropagation
      ? ev.stopPropagation()
      : (window.event.cancelBubble = true)
  },
  template(str, data) {
    const strCell = !/[^\w\-\.:]/.test(str) ? $I(str).innerHTML : str
    const keys = function (obj) {
      const arr = []
      for (arr[arr.length] in obj);
      return arr
    }
    const dataVar = function (obj) {
      let vars = ''
      for (const key in obj) {
        vars += 'var ' + key + '= $D["' + key + '"];'
      }
      return vars
    }

    const compile = function (source, data) {
      const code =
        "var $out='" +
        source
          .replace(/[\r\n]/g, '')
          .replace(/^(.+?)\{\%|\%\}(.+?)\{\%|\%\}(.+?)$/g, val => {
            return val.replace(/(['"])/g, '\\$1')
          })
          .replace(/\{\%\s*=\s*(.+?)\%\}/g, "';$out+=$1;$out+='")
          .replace(/\{\%(.+?)\%\}/g, "';$1;$out+='") +
        "';return new String($out);"
      const vars = dataVar(data)
      const Render = new Function('$D', vars + code)
      return new Render(data) + ''
    }
    return compile(strCell, data)
  },

  // 判断元素类型
  isValDiv(elem) {
    return /textarea|input/.test(elem.tagName.toLocaleLowerCase())
  },
  valText(elem, value) {
    const cell = $Q(elem)
    const type = jet.isValDiv(cell) ? 'val' : 'text'
    if (value != undefined) {
      jet[type](cell, value)
    } else {
      return jet[type](cell)
    }
  },
  isBool(obj) {
    return !!(obj == undefined || obj == true)
  },
  // 获取返回的日期
  getDateTime(obj) {
    const result = new DateTime()
    const objVal = jet.extend(
      { YYYY: null, MM: null, DD: null, hh: 0, mm: 0, ss: 0 },
      obj
    )
    const matArr = {
      YYYY: 'FullYear',
      MM: 'Month',
      DD: 'Date',
      hh: 'Hours',
      mm: 'Minutes',
      ss: 'Seconds'
    }
    jet.each(['ss', 'mm', 'hh', 'DD', 'MM', 'YYYY'], (i, mat) => {
      if (!jet.isNum(parseInt(objVal[mat]))) return null
      const reVal = result.GetValue()
      if (parseInt(objVal[mat]) || parseInt(objVal[mat]) == 0) {
        reVal['set' + matArr[mat]](
          result['Get' + matArr[mat]]() +
            (mat == 'MM' ? -1 : 0) +
            parseInt(objVal[mat])
        )
      }
    })
    // 获取格式化后的日期
    const redate = {
      YYYY: result.GetYear(),
      MM: result.GetMonth(),
      DD: result.GetDate(),
      hh: result.GetHours(),
      mm: result.GetMinutes(),
      ss: result.GetSeconds()
    }
    return redate
  }
})

const jefix = 'jefixed'
const ymdzArr = jet.reMatch(regymdzz)
const elx = '#pui-pick-date'
jet.extend(jeDatePick.prototype, {
  init() {
    const that = this
    const opts = that.$opts
    const newDate = new Date()
    const shortArr = []
    const trigges = opts.trigger
    const ndate = opts.initDate || []
    let inVal
    const range = opts.range
    const zIndex = opts.zIndex == undefined ? 10000 : opts.zIndex
    const isShow = jet.isBool(opts.isShow)
    const isinitVal = !(opts.isinitVal == undefined || opts.isinitVal == false)
    that.setDatas()
    opts.before && opts.before(that.valCell)
    // 为开启初始化的时间设置值
    if (isinitVal && trigges && isShow) {
      if (ndate[1]) {
        const addval = jet.getDateTime(ndate[0])
        inVal = [
          {
            YYYY: addval.YYYY,
            MM: jet.digit(addval.MM),
            DD: jet.digit(addval.DD),
            hh: jet.digit(addval.hh),
            mm: jet.digit(addval.mm),
            ss: jet.digit(addval.ss)
          }
        ]
      } else {
        inVal = that.getValue(jet.isObj(ndate[0]) ? ndate[0] : {})
      }
      if (!range) that.setValue([inVal[0]], opts.format, true)
    }

    const getCurrValue = function () {
      const mats = jet.reMatch(that.format)
      const isEmpty = that.getValue() != ''
      let curVal = []
      const parmat =
        that.dlen == 7 ? 'hh:mm:ss' : 'YYYY-MM' + (that.dlen <= 2 ? '' : '-DD')
      let result = that.valCell.value
      if (!result) {
        that.selectValue = [jet.parse(jet.getDateTime({}), parmat)]
      } else {
        result = result.substr(0, 11)
        let nowTime = [jet.parse(jet.getDateTime({}), parmat)]
        nowTime = nowTime[0]
        const time1 = new Date(result).setHours('0')
        const time2 = new Date(nowTime).setHours('0')
        const nDays = parseInt((time1 - time2) / 1000 / 3600 / 24)
        const redate = {
          DD: nDays
        }
        that.selectValue = [jet.parse(jet.getDateTime(redate), parmat)]
      }

      if (isEmpty && isShow) {
        let getVal = ''
        let getValEnd = ''
        if (!that.valCell.id.endsWith('posend')) {
          getVal = that.getValue().split(range)
          getValEnd =
            $I(that.valCell.id + 'posend') &&
            $I(that.valCell.id + 'posend').value // $Q(that.valCell.id + 'end').getValue();
        } else {
          getVal = document
            .getElementById(that.valCell.id.replace('posend', ''))
            .value.split(range)
          getValEnd = $I(that.valCell.id).value
        }
        jet.each(new Array(range ? 2 : 1), a => {
          curVal[a] = {}
          if (a === 1) getVal[a] = getValEnd
          if (getVal[a] != '') {
            jet.each(jet.reMatch(getVal[a]), (i, val) => {
              curVal[a][mats[i]] = parseInt(val)
            })
          }
        })
        if (range) that.selectValue = getVal
      } else {
        const parr = that.getValue({})[0]
        const nmVal = jet.nextMonth(
          parr.YYYY,
          parr.MM || jet.getDateTime({}).MM
        )
        const narr =
          that.dlen > 2 && that.dlen <= 6 ? { YYYY: nmVal.y, MM: nmVal.m } : {}
        curVal = [parr]
      }
      that.selectDate = curVal
      return curVal
    }

    let ymarr = []
    that.minDate = ''
    that.maxDate = ''

    if (!isShow || !trigges) ymarr = getCurrValue()
    if (!isShow || !trigges) {
      that.minDate = jet.isType(opts.minDate, 'function')
        ? opts.minDate(that)
        : opts.minDate
      that.maxDate = jet.isType(opts.maxDate, 'function')
        ? opts.maxDate(that)
        : opts.maxDate
      that.storeData(ymarr[0], ymarr[1])
      that.renderDate(1)
      opts.succeed && opts.succeed(that.dateCell)
    } else if (trigges) {
      jet.on(that.valCell, trigges, () => {
        if (document.querySelectorAll(elx).length > 0) return
        const gvarr = getCurrValue()
        that.minDate = jet.isType(opts.minDate, 'function')
          ? opts.minDate(that)
          : opts.minDate
        that.maxDate = jet.isType(opts.maxDate, 'function')
          ? opts.maxDate(that)
          : opts.maxDate
        that.storeData(gvarr[0], gvarr[1])
        that.renderDate(2)
      })
      that.minDate = opts.minDate
      that.maxDate = opts.maxDate
    }
  },
  setDatas() {
    const that = this
    const opts = that.$opts
    const range = opts.range
    const shortArr = []
    const isShow = jet.isBool(opts.isShow)
    const multi = opts.multiPane
    that.$data = jet.extend(
      { year: false, month: false, day: true, time: false, timebtn: false },
      {
        shortcut: [],
        lang: opts.language,
        yaerlist: [],
        monthlist: [[], []],
        ymlist: [[], []],
        daylist: [[], []],
        clear: opts.isClear,
        today: range ? false : opts.isToday,
        yes: opts.isYes,
        pane: multi ? 1 : 2,
        minDate: ''
      }
    )
    if (opts.shortcut.length > 0) {
      jet.each(opts.shortcut, (i, short) => {
        const tarr = []
        const shval = jet.isType(short.val, 'function')
          ? short.val()
          : short.val
        if (jet.isType(shval, 'object')) {
          for (const s in shval) tarr.push(s + ':' + shval[s])
          shortArr.push(
            jet.extend(
              {},
              { name: short.name, val: '{' + tarr.join('#') + '}' }
            )
          )
        }
      })
      that.$data.shortcut = shortArr
    }
    that.dlen = (function () {
      const mats = jet.reMatch(that.format)
      const marr = []
      jet.each(ymdzArr, (i, val) => {
        jet.each(mats, (m, mval) => {
          if (val == mval) marr.push(mval)
        })
      })
      const matlen = marr.length
      const lens = marr[0] == 'hh' && matlen <= 3 ? 7 : matlen
      return lens
    })()
    that.$data.dlen = that.dlen
    that.timeInspect = false
    if (that.dlen == 1) {
      jet.extend(that.$data, { year: true, day: false })
    } else if (that.dlen == 2) {
      jet.extend(that.$data, { month: true, day: false })
    } else if (that.dlen > 3 && that.dlen <= 6) {
      that.$data.timebtn = true
    } else if (that.dlen == 7) {
      jet.extend(that.$data, { day: false, time: true })
    }
    if (!isShow) {
      that.$data.clear = false
      that.$data.yes = false
    }
  },

  renderDate(x) {
    const that = this
    const opts = that.$opts
    const isShow = jet.isBool(opts.isShow)

    const elxID = !isShow ? elx + searandom() : elx
    const setzin = { zIndex: opts.zIndex == undefined ? 10000 : opts.zIndex }
    if (that.dateCell == undefined) {
      that.dateCell = document.createElement('div')
      that.dateCell.id = elxID.replace(/\#/g, '')
      that.dateCell.className =
        elx.replace(/\#/g, '') +
        ' ' +
        (opts.shortcut.length > 0 ? ' leftmenu' : '')
    }
    jet.html(that.dateCell, jet.template(that.dateTemplate(), that.$data))

    const eles =
      $C('pui-pick-date-content').length > 0 &&
      document
        .getElementsByClassName('pui-pick-date-content')[0]
        .getElementsByTagName('table')
    let displaysCount = 0
    for (let i = 0; i < eles.length; i++) {
      if (eles[i].style.display != 'none') {
        displaysCount++
      }
    }
    if (displaysCount > 1 && $C('pui-pick-date-content').length > 0) {
      $C('pui-pick-date-content')[0].style.height = '214px'
    }
    if (displaysCount > 1 && $C('pui-pick-date-content').length > 1) {
      $C('pui-pick-date-content')[1].style.height = '214px'
    }

    function getPUITheme() {
      if (window.PUI) {
        return PUI.getTheme()
      }
      return 'dark'
    }
    const theme = getPUITheme()
    opts.theme = { bgcolor: '#D5001C', pnColor: 'rgba(0,0,0,0.4)' }
    if (theme === 'dark') {
      opts.theme = { bgcolor: '#2193ff', pnColor: 'rgba(255,255,255,0.4)' }
    }
    // 自定义主题色
    if (jet.isObj(opts.theme)) {
      const styleDiv = document.createElement('style')
      const stCell = '.pui-pick-date' + searandom()
      const t = opts.theme
      const BG = 'background-color:' + t.bgcolor
      const WC = 'color:' + (t.color == undefined ? '#FFFFFF' : t.color)
      const OTH = t.pnColor == undefined ? '' : 'color:' + t.pnColor + ';'
      that.dateCell.className =
        that.dateCell.className + ' ' + stCell.replace(/^./g, '')
      styleDiv.setAttribute('type', 'text/css')
      styleDiv.innerHTML =
        stCell +
        ' .pui-pick-date-menu p:hover{' +
        BG +
        ';' +
        WC +
        ';}' +
        stCell +
        ' .pui-pick-date-header em{' +
        WC +
        ';}' +
        stCell +
        ' .pui-pick-date-content .yeartable td.action span,' +
        stCell +
        ' .pui-pick-date-content .monthtable td.action span,' +
        stCell +
        ' .pui-pick-date-content .yeartable td.action span:hover,' +
        stCell +
        ' .pui-pick-date-content .monthtable td.action span:hover{' +
        BG +
        ';border:1px ' +
        t.bgcolor +
        ' solid;' +
        WC +
        ';}' +
        stCell +
        ' .pui-pick-date-content .daystable td.action,' +
        stCell +
        ' .pui-pick-date-content .daystable td.action:hover,' +
        stCell +
        ' .pui-pick-date-content .daystable td.action .lunar,' +
        stCell +
        ' .pui-pick-date-header,' +
        // stCell +
        // ' .pui-pick-date-time .timeheader,' +
        stCell +
        ' .pui-pick-date-time .hmslist ul li.action,' +
        // stCell +
        // ' .pui-pick-date-time .hmslist ul li.action:hover,' +
        stCell +
        ' .pui-pick-date-time .hmslist ul li.disabled.action,' +
        stCell +
        ' .pui-pick-date-footbtn .timecon,' +
        stCell +
        ' .pui-pick-date-footbtn .btnscon span{' +
        BG +
        ';' +
        WC +
        ';}' +
        stCell +
        ' .pui-pick-date-content .daystable td.other,' +
        stCell +
        ' .pui-pick-date-content .daystable td.other .nolunar,' +
        stCell +
        ' .pui-pick-date-content .daystable td.other .lunar{' +
        OTH +
        '}' +
        stCell +
        ' .pui-pick-date-content .daystable td.contain,' +
        stCell +
        ' .pui-pick-date-content .daystable td.contain:hover{background-' +
        OTH +
        '}'
      that.dateCell.appendChild(styleDiv)
    }

    that.compileBindNode(that.dateCell)
    if (document.querySelectorAll(elxID).length > 0)
      document.body.removeChild($Q(elxID))
    !isShow
      ? that.valCell.appendChild(that.dateCell)
      : document.body.appendChild(that.dateCell)
    jet.setCss(
      that.dateCell,
      jet.extend(
        {
          position: !isShow
            ? 'relative'
            : opts.fixed == true
            ? 'absolute'
            : 'fixed'
        },
        isShow ? setzin : {}
      )
    )
    that.methodEventBind()
    if (that.dlen == 7 || (that.dlen > 3 && that.dlen <= 6)) that.locateScroll()
    if (opts.festival && opts.language.name == 'cn') that.showFestival()
    if (isShow) {
      that.dateOrien(that.dateCell, that.valCell)
      that.blankArea()
    }
    const pane = document
      .getElementsByClassName('pui-pick-date-pane')[0]
      .getBoundingClientRect()
    let display = ''
    if ($C('timeheader') && $C('timeheader').length > 0) {
      display = $C('timeheader')[0].style.display
    }
    const timeIdArr = ['00', '01', '02', '10', '11', '12']
    timeIdArr.forEach(i => {
      if ($I('hmslist' + i)) {
        if (display === 'none') {
          $I('hmslist' + i).style.height = pane.height - 30 + 'px'
        } else {
          $I('hmslist' + i).style.height = pane.height - 66 + 'px'
        }
      }
    })

    let timeULs = null
    if ($Q('.pui-pick-date-time', that.dateCell)) {
      timeULs = $Q('.pui-pick-date-time', that.dateCell).querySelectorAll('ul')
    }
    if (timeULs && timeULs.length > 0) {
      for (let i = 0; i < timeULs.length; i++) {
        const ulCell = timeULs[i]
        const hmsCls = ulCell.querySelector('.action')
        ulCell.scrollTop = hmsCls ? hmsCls.offsetTop - 145 : 0
      }
    }
  },
  // 设置日期值
  setValue(fnStr, matStr, bool) {
    const that = this
    const valCell = that.valCell
    let strVal
    matStr = matStr || that.format
    if (typeof fnStr === 'string' && fnStr != '') {
      const sprange = fnStr.split(that.$opts.range)
      const inArr = []
      jet.each(sprange, (i, sval) => {
        const reVal = jet.reMatch(sval)
        const inObj = {}
        jet.each(jet.reMatch(matStr), (r, val) => {
          inObj[val] = reVal[r]
        })
        inArr.push(inObj)
      })
      strVal = inArr
    } else {
      strVal = fnStr
    }
    const vals = that.parseValue(strVal, matStr)
    if (bool != false) jet.valText(valCell, vals)
    return vals
  },
  // 获取日期值
  getValue(valobj) {
    const that = this
    const valCell = that.valCell
    const opts = that.$opts
    let reObj
    const result = new DateTime().reDate()
    const dateY = result.GetYear()
    const dateM = result.GetMonth()
    const dateD = result.GetDate()
    const timeh = result.GetHours()
    const timem = result.GetMinutes()
    const times = result.GetSeconds()
    if (valobj == undefined && jet.isBool(opts.isShow)) {
      reObj = jet.valText(valCell)
    } else {
      const isValShow = jet.isBool(opts.isShow)
        ? jet.valText(valCell) == ''
        : !jet.isBool(opts.isShow)
      const objarr = jet.extend(
        { YYYY: null, MM: null, DD: null },
        valobj || {}
      )
      const ranMat = []
      const newArr = new Array(2)
      const unObj = function (obj) {
        return [objarr[obj] == undefined || objarr[obj] == null, objarr[obj]]
      }
      const defObj = [
        {
          YYYY: dateY,
          MM: dateM,
          DD: dateD,
          hh: timeh,
          mm: timem,
          ss: times,
          zz: '00'
        },
        {
          YYYY: dateY,
          MM: dateM,
          DD: dateD,
          hh: timeh,
          mm: timem,
          ss: times,
          zz: '00'
        }
      ]
      if (isValShow) {
        // 目标为空值则获取当前日期时间
        jet.each(newArr, i => {
          const inObj = {}
          jet.each(ymdzArr, (r, val) => {
            inObj[val] = parseInt(
              unObj(val)[0] ? defObj[i][val] : unObj(val)[1]
            )
          })
          ranMat.push(jet.extend(defObj[i], inObj))
        })
      } else {
        const isunRange = opts.range != false
        const initVal = that.getValue()
        const spVal = initVal.split(opts.range)
        const reMat = jet.reMatch(that.format)
        jet.each(newArr, i => {
          const inObj = {}
          const reVal = isunRange ? jet.reMatch(spVal[i]) : jet.reMatch(initVal)
          jet.each(reMat, (r, val) => {
            inObj[val] = reVal[r]
          })
          const exVal = jet.extend(inObj, valobj || {})
          ranMat.push(jet.extend(defObj[i], exVal))
        })
      }
      reObj = ranMat
    }
    return reObj
  },
  storeData(
    curr,
    next,
    need = true,
    i = null,
    calculate = false,
    direction = 'rnext'
  ) {
    const today = new Date()
    if (JSON.stringify(curr) === '{}') {
      curr = {
        DD: today.getDate(),
        MM: today.getMonth() + 1,
        YYYY: today.getFullYear()
      }
    }
    next = next || {}
    const that = this
    const opts = that.$opts
    const multi = opts.multiPane
    const valCell = that.valCell
    const days = new Date().getDate()
    const DTS = that.$data
    const isnext = jet.isObj(next)
    const RES = {
      yearlist: [],
      monthlist: [[], []],
      daylist: [],
      daytit: [],
      timelist: []
    }
    let seltime
    const cday = curr.DD == null ? days : curr.DD
    const nday = next.DD == null ? days : next.DD
    const timeA = that.$opts.showSecend
      ? { hh: curr.hh, mm: curr.mm, ss: curr.ss }
      : { hh: curr.hh, mm: curr.mm }
    const timeB = that.$opts.showSecend
      ? { hh: next.hh || 0, mm: next.mm || 0, ss: next.ss || 0 }
      : { hh: next.hh || 0, mm: next.mm || 0 }
    // if (!that.$data.yearlist) {
    if (!need && that.$data.yearlist.length > 0) {
      // 设置年的数据
      RES.yearlist.push(
        that.eachYear(parseInt(that.$data.yearlist[0][0].y), 1, 0)
      )
    } else {
      RES.yearlist.push(that.eachYear(parseInt(curr.YYYY), 1, 0))
    }
    // }
    // if (!that.$data.yearlist) {
    if (multi == false) {
      // const yearNext = isnext ? next.YYYY : curr.YYYY
      // RES.yearlist.push(that.eachYear(parseInt(yearNext), 2))
      if (i == '1' || !that.$data.yearlist || RES.yearlist.length < 2) {
        RES.yearlist.push(that.eachYear(parseInt(curr.YYYY), 1, 1))
      }
    }

    if (that.selectDate.length > 1) {
      RES.yearlist[0] = that.eachYear(parseInt(that.selectDate[0].YYYY), 1, 0)
      RES.yearlist[1] = that.eachYear(parseInt(that.selectDate[1].YYYY), 1, 1)
    }
    if (multi == false && calculate) {
      const step = opts.isClickYearNow ? 11 : 1
      if (direction == 'rnext') {
        RES.yearlist[i] = that.eachYear(
          parseInt(that.$data.yearlist[i][step].y),
          1,
          i
        )
      } else {
        const yearNext = isnext ? next.YYYY : curr.YYYY
        RES.yearlist[i] = that.eachYear(
          parseInt(that.$data.yearlist[i][0].y) - step,
          1,
          i
        )
      }
    }

    // 设置月的数据
    // RES.monthlist[0] = that.eachMonth(curr.YYYY, 0)
    if (!opts.isClickMonthBtn) {
      RES.monthlist[0] = that.eachMonth(that.selectDate[0].YYYY, 0)
    } else {
      RES.monthlist[0] = that.eachMonth(curr.YYYY, 0)
    }
    if (multi == false) {
      const monthNext = isnext ? next.YYYY : curr.YYYY + 1
      RES.monthlist[1] = that.eachMonth(curr.YYYY, 1)
    }
    // 设置天的数据
    RES.daylist.push(that.eachDays(curr.YYYY, curr.MM, cday, 0))
    // RES.daytit.push({ YYYY: curr.YYYY, MM: curr.MM })
    if (opts.isClickYearBtn || opts.isClickMonthBtn) {
      RES.daytit.push({
        YYYY: curr.YYYY,
        MM: curr.MM
      })
    } else {
      RES.daytit.push({
        YYYY: that.selectDate[0].YYYY,
        MM: that.selectDate[0].MM
      })
    }
    if (multi == false) {
      // const dayNext = jet.nextMonth(curr.YYYY, curr.MM)
      const initCurrent =
        that.selectDate.length > 1 &&
        Object.prototype.hasOwnProperty.call(that.selectDate[1], 'YYYY')
          ? that.selectDate[1]
          : curr
      RES.daylist.push(that.eachDays(initCurrent.YYYY, initCurrent.MM, nday, 1))
      // RES.daytit.push({ YYYY: dayNext.y, MM: dayNext.m })
      RES.daytit.push({
        YYYY: initCurrent.YYYY,
        MM: initCurrent.MM
      })
    }
    // 设置时间数据
    that.selectTime = [timeA, timeB]
    RES.timelist.push(that.eachTime(timeA, 1))
    if (multi == false) {
      seltime = that.dlen == 7 && opts.range && !isnext ? timeA : timeB
      if (that.dlen == 7 && opts.range && jet.valText(valCell) == '') {
        that.selectTime[1] = jet.extend(timeB, timeA)
      }
      RES.timelist.push(that.eachTime(seltime, 2))
    }
    RES.minDate = that.$opts.minDate
    // 最后将数据合并于总数据中
    jet.extend(that.$data, RES)
    opts.isClickYearBtn = false
    opts.isClickMonthBtn = false
  },
  dateTemplate() {
    const that = this
    const opts = that.$opts
    const multi = opts.multiPane
    let YMDStr = ''
    let hmsStr = ''
    const lang = opts.language
    const ytxt = lang.name == 'cn' ? '年' : ''
    const mtxt = lang.name == 'cn' ? '月' : ''
    const ymvals = multi
      ? '{%=ymlist[0].YYYY%}-{%=ymlist[0].MM%}'
      : '{%=ymlist[0].YYYY%}-{%=ymlist[0].MM%}#{%=ymlist[ynidx].YYYY%}-{%=ymlist[ynidx].MM%}'
    const aowArr = (function () {
      let butArr = []
      const ismu = multi ? '11' : '23'
      if (that.dlen == 1) {
        butArr = [
          '{%=yearlist[i][0].y-' + ismu + '%}',
          '{%=yearlist[i][yearlist[i].length-1].y%}'
        ]
      } else if (that.dlen == 2) {
        butArr = multi
          ? ['{%=yearlist[0][0].y-1%}', '{%=yearlist[0][0].y+1%}']
          : [
              '{%=yearlist[i][0].y-' + ismu + '%}',
              '{%=yearlist[i][yearlist[i].length-1].y%}'
            ]
      } else if (that.dlen > 2 && that.dlen <= 6) {
        butArr = ['{%=yearlist[0][0].y-1%}', '{%=yearlist[0][0].y+1%}']
      }
      return butArr
    })()

    const lyPrev =
      '<em class="yearprev yprev " style="margin-left:12px" @on="yearBtn(lprev,' +
      aowArr[0] +
      ',{%=i%})">' +
      opts.yearIcon +
      '</em>'
    const ryNext =
      '<em class="yearnext ynext" style="margin-right:12px" @on="yearBtn(rnext,' +
      aowArr[1] +
      ',{%=i%})">' +
      opts.doubleRightIcon +
      '</em>'
    const mPrev =
      '{% if(dlen>2){ %}<em class="monthprev mprev" style="margin-left:18px"  @on="monthBtn(mprev,{%=daytit[i].YYYY%}-{%=daytit[i].MM%},{%=i%})">' +
      opts.singleLeftIcon +
      '</em>{% } %}'
    const mNext =
      '{% if(dlen>2){ %}<em class="monthnext mnext" style="margin-right:18px" @on="monthBtn(mnext,{%=daytit[i].YYYY%}-{%=daytit[i].MM%},{%=i%})">' +
      opts.singleRightIcon +
      '</em>{% } %}'
    // 循环年的模板
    const yaerHtml =
      '<table class="yeartable year{%= i==0 ? "left":"right"%}" style="display:{%=year ? "block":"none"%};" cellspacing="0"><tbody><tr>' +
      '{% for(var y=0;y<=11;y++){ %}<td class="{%=yearlist[i][y].style%}" @on="yearClick({%=yearlist[i][y].y%},{%=i%},{%=y%})"><span>{%=yearlist[i][y].y%}' +
      ytxt +
      '</span></td>{% if((y+1)%4==0){ %} </tr>{% } %} {% } %} </tbody></table>'
    // 循环月的模板
    const monthHtml =
      '<table class="monthtable month{%= i==0 ? "left":"right"%}" style="display:{%=month ? "block":"none"%};" cellspacing="0"><tbody><tr>' +
      '{% for(var m=0;m<=11;m++){ %}<td class="{%=monthlist[i][m].style%}" ym="{%=monthlist[i][m].y%}-{%=monthlist[i][m].m%}" @on="monthClick({%=monthlist[i][m].y%}-{%=monthlist[i][m].m%},{%=i%})"><span>{%=monthlist[i][m].m%}' +
      mtxt +
      '</span></td>{% if((m+1)%4==0){ %} </tr>{% } %} {% } %} </tbody></table>'
    // 循环天的模板
    const newSize = getDefaultSize()
    let colWidth = 110
    let timeAndSecWidth = 165
    if (newSize === 'medium') {
      colWidth = 113
      timeAndSecWidth = 169
    }
    const daysHtml =
      '<div class="dayscontainer dayscontainer-size-' +
      newSize +
      '"><div class="line"></div><table class="daystable days{%= i==0 ? "left":"right"%}" style="display:{%=day ? "inline-table":"none"%};"><thead><tr>' +
      '{% for(var w=0;w<lang.weeks.length;w++){ %} <th>{%=lang.weeks[w]%}</th> {% } %}</tr></thead><tbody>' +
      '<tr>{% for(var d=0;d<=41;d++){ %}<td class="{%=daylist[i][d].style%}" ymd="{%=daylist[i][d].ymd%}" @on="daysClick({%=daylist[i][d].ymd%},{%=i%})">{%=daylist[i][d].day%}</td>{% if((d+1)%7==0){ %} </tr>{% } %} {% } %} </tbody></table></div>'
    // 循环时间模板
    let hmsHtml = ''
    if (opts.showSecend) {
      if (opts.multiPane === false) {
        hmsHtml =
          '<div class="pui-pick-date-time pui-pick-date-time-size-' +
          newSize +
          '">{% for(var h=0;h<timelist.length;h++){ %}<div class="timepane timepane-size-' +
          newSize +
          '"><div class="timeheader" style="display:inline-block">{%= timelist.length == 1 ? lang.timetxt[0]:lang.timetxt[h+1]%}</div><div class="timecontent">' +
          '<div class="hmstitle"><p style="width:' +
          colWidth +
          'px">{%=lang.times[0]%}</p><p style="width:' +
          colWidth +
          'px">{%=lang.times[1]%}</p><p style="width:' +
          colWidth +
          'px">{%=lang.times[2]%}</p></div>' +
          '<div class="hmslist">{% for(var t=0;t<3;t++){ %}<div class="hmsauto hmsauto-size-' +
          newSize +
          '"><ul style="width:' +
          colWidth +
          'px;" id="hmslist{%=h%}{%=t%}">{% for(var s=0;s<timelist[h][t].length;s++){ %}<li class="{%=timelist[h][t][s].style%}" @on="hmsClick({%= h %},{%= h>0?3+t:t %})">{%= timelist[h][t][s].hms < 10 ? "0" + timelist[h][t][s].hms :timelist[h][t][s].hms %}</li>{% } %}</ul></div>{% } %}</div></div>' +
          '</div>{% } %}</div>'
      } else {
        hmsHtml =
          '<div class="pui-pick-date-time pui-pick-date-time-size-' +
          newSize +
          '">{% for(var h=0;h<timelist.length;h++){ %}<div class="timepane timepane-size-' +
          newSize +
          '"><div class="timeheader" style="display:none">{%= timelist.length == 1 ? lang.timetxt[0]:lang.timetxt[h+1]%}</div><div class="timecontent">' +
          '<div class="hmstitle"><p style="width:' +
          colWidth +
          'px">{%=lang.times[0]%}</p><p style="width:' +
          colWidth +
          'px">{%=lang.times[1]%}</p><p style="width:' +
          colWidth +
          'px">{%=lang.times[2]%}</p></div>' +
          '<div class="hmslist">{% for(var t=0;t<3;t++){ %}<div class="hmsauto hmsauto-size-' +
          newSize +
          '"><ul style="width:' +
          colWidth +
          'px;" id="hmslist{%=h%}{%=t%}">{% for(var s=0;s<timelist[h][t].length;s++){ %}<li class="{%=timelist[h][t][s].style%}" @on="hmsClick({%= h %},{%= h>0?3+t:t %})">{%= timelist[h][t][s].hms < 10 ? "0" + timelist[h][t][s].hms :timelist[h][t][s].hms %}</li>{% } %}</ul></div>{% } %}</div></div>' +
          '</div>{% } %}</div>'
      }
    } else if (opts.multiPane === false) {
      hmsHtml =
        '<div class="pui-pick-date-time pui-pick-date-time-size-' +
        newSize +
        '">{% for(var h=0;h<timelist.length;h++){ %}<div class="timepane timepane-size-' +
        newSize +
        '"><div class="timeheader" style="display:inline-block">{%= timelist.length == 1 ? lang.timetxt[0]:lang.timetxt[h+1]%}</div><div class="timecontent">' +
        '<div class="hmstitle"><p style="width:50%">{%=lang.times[0]%}</p><p style="width:50%">{%=lang.times[1]%}</p></div>' +
        '<div class="hmslist">{% for(var t=0;t<2;t++){ %}<div class="hmsauto hmsauto-size-' +
        newSize +
        '"><ul style="width:' +
        timeAndSecWidth +
        'px;" id="hmslist{%=h%}{%=t%}">{% for(var s=0;s<timelist[h][t].length;s++){ %}<li class="{%=timelist[h][t][s].style%}" h={%=h%} t={%=t%} s={%=s%} @on="hmsClick({%= h %},{%= h>0?2+t:t %})">{%= timelist[h][t][s].hms < 10 ? "0" + timelist[h][t][s].hms :timelist[h][t][s].hms %}</li>{% } %}</ul></div>{% } %}</div></div>' +
        '</div>{% } %}</div>'
    } else {
      hmsHtml =
        '<div class="pui-pick-date-time pui-pick-date-time-size-' +
        newSize +
        '">{% for(var h=0;h<timelist.length;h++){ %}<div class="timepane timepane-size-' +
        newSize +
        '"><div class="timeheader" style="display:none">{%= timelist.length == 1 ? lang.timetxt[0]:lang.timetxt[h+1]%}</div><div class="timecontent">' +
        '<div class="hmstitle"><p style="width:50%">{%=lang.times[0]%}</p><p style="width:50%">{%=lang.times[1]%}</p></div>' +
        '<div class="hmslist">{% for(var t=0;t<2;t++){ %}<div class="hmsauto hmsauto-size-' +
        newSize +
        '"><ul style="width:' +
        timeAndSecWidth +
        'px;" id="hmslist{%=h%}{%=t%}">{% for(var s=0;s<timelist[h][t].length;s++){ %}<li class="{%=timelist[h][t][s].style%}" h={%=h%} t={%=t%} s={%=s%} @on="hmsClick({%= h %},{%= h>0?2+t:t %})">{%= timelist[h][t][s].hms < 10 ? "0" + timelist[h][t][s].hms :timelist[h][t][s].hms %}</li>{% } %}</ul></div>{% } %}</div></div>' +
        '</div>{% } %}</div>'
    }
    // 左边选择模板
    const shortHtml =
      opts.shortcut.length > 0
        ? '{% for(var s=0;s<shortcut.length;s++){ %}<p @on=shortClick({%= shortcut[s].val %})>{%=shortcut[s].name%}</p>{% } %}'
        : ''

    const ymtitHtml = (function () {
      let ymtitStr = ''
      if (that.dlen == 1) {
        ymtitStr =
          '<span class="ymbtn onlyyear">{%=yearlist[i][0].y%}' +
          ytxt +
          ' ~ {%=yearlist[i][yearlist[i].length-1].y%}' +
          ytxt +
          '</span>'
      } else if (that.dlen == 2) {
        ymtitStr =
          '<span class="ymbtn aa" @on="yearShow({%=yearlist[0][i].y%},{%=i%})">{%=yearlist[i][i==0?0:i-1].y%}' +
          ytxt +
          '</span>'
      } else if (that.dlen > 2 && that.dlen <= 6) {
        ymtitStr =
          '<span class="ymbtn cc" @on="yearShow({%=daytit[i].YYYY%},{%=i%})">{%=daytit[i].YYYY%}' +
          ytxt +
          '</span>' +
          '<span class="ymbtn bb" @on="monthShow({%=daytit[i].MM%},{%=i%})">{%=daytit[i].MM%}' +
          mtxt +
          '</span>'

      }
      return ymtitStr
    })()

    const ymButton = (function () {
      let titStrBut = ''
      if (that.dlen == 1) {
        titStrBut = multi
          ? [lyPrev + ryNext]
          : [lyPrev + ryNext, lyPrev + ryNext]
      } else if (that.dlen == 2) {
        titStrBut = multi
          ? [lyPrev + ryNext]
          : [lyPrev + ryNext, lyPrev + ryNext]
      } else if (that.dlen > 2 && that.dlen <= 6) {
        titStrBut = multi
          ? [lyPrev + mPrev + mNext + ryNext]
          : [lyPrev + mPrev + mNext + ryNext, lyPrev + mPrev + mNext + ryNext]
      } else if (that.dlen == 7) {
        titStrBut = ''
      }
      return titStrBut
    })()

    if (that.dlen == 1) {
      YMDStr = yaerHtml
    } else if (that.dlen == 2) {
      YMDStr = yaerHtml + monthHtml
    } else if (that.dlen == 3) {
      YMDStr = yaerHtml + monthHtml + daysHtml
    } else if (that.dlen > 3 && that.dlen <= 6) {
      YMDStr = yaerHtml + monthHtml + daysHtml
      hmsStr = hmsHtml
    } else if (that.dlen == 7) {
      hmsStr = hmsHtml
    }
    function getDefaultSize() {
      if (window.PUI) {
        return PUI.getDefaultSize()
      }
      return 'small'
    }
    const size = getDefaultSize()
    const paneHtml =
      '{% for(var i=0;i<pane;i++){ %}<div class="pui-pick-date-pane pui-pick-date-pane-size-' +
      size +
      '">' +
      '<div class="pui-pick-date-header">{% if(i==0){ %}' +
      ymButton[0] +
      '{% }else{ %}' +
      ymButton[1] +
      '{% } %}' +
      ymtitHtml +
      '</div>' +
      '<div class="pui-pick-date-content{%= i==1?" bordge":"" %}">' +
      YMDStr +
      '</div>' +
      '</div>{% } %}'
    const btnStr =
      '{% if(today){ %}<span class="today" @on="nowBtn">{%=lang.today%}</span>{% } %}    <div class="btnscon">{% if(clear){ %}<span class="clear" @on="clearBtn">{%=lang.clear%}</span>{% } %}  {% if(timebtn){%}<div class="timecon" style="cursor: pointer;" @on="timeBtn">{%=lang.timetxt[0]%}</div>{% } %}   {% if(yes){ %}<span class="setok" @on="sureBtn">{%=lang.yes%}</span>{% } %}</div>'
    return (
      '<div class="pui-pick-date-menu" style="display:{%=shortcut.length>0 ? "block":"none"%};">' +
      shortHtml +
      '</div><div class="pui-pick-date-wrap pui-pick-date-wrap-size-' +
      size +
      '">' +
      paneHtml +
      '</div>' +
      hmsStr +
      '<div class="pui-pick-date-footbtn pui-pick-date-footbtn-size-' +
      size +
      '">' +
      btnStr +
      '</div><div class="pui-pick-date-tips"></div>'
    )
  },
  // 递归绑定事件
  compileBindNode(dom) {
    const self = this
    const aton = '@on'
    const acquireAttr = function (atVal) {
      let args = /\(.*\)/.exec(atVal)
      if (args) {
        // 如果函数带参数,将参数字符串转换为参数数组
        args = args[0]
        atVal = atVal.replace(args, '')
        args = args.replace(/[\(\)\'\"]/g, '').split(',')
      } else args = []
      return [atVal, args]
    }
    jet.each(dom.childNodes, (i, node) => {
      if (node.nodeType === 1) {
        if (!self.$opts.festival) node.removeAttribute('ymd')
        self.compileBindNode(node)
        const geton = node.getAttribute(aton)
        if (geton != null) {
          const onarr = acquireAttr(geton)
          jet.on(node, 'click', () => {
            self[onarr[0]] && self[onarr[0]].apply(node, onarr[1])
          })
          node.removeAttribute(aton)
        }
      }
    })
  },
  methodEventBind() {
    const that = this
    const opts = that.$opts
    const multi = opts.multiPane
    const DTS = that.$data
    const result = new DateTime().reDate()
    const dateY = result.GetYear()
    const dateM = result.GetMonth()
    const dateD = result.GetDate()
    const range = opts.range
    const elCell = that.dateCell

    jet.extend(that, {
      yearBtn(type, val, i) {
        opts.isClickYearBtn = true
        if (!range) {
          if (type == 'rnext' && opts.isClickYearNow && opts.clickYearVal > 0) {
            val = parseInt(val) + 10
          } else if (
            type == 'lprev' &&
            opts.isClickYearNow &&
            opts.clickYearVal > 0
          ) {
            val = parseInt(val) - 10
          }
        }
        const yarr = (val + '').split('#') // val.split('#')
        const pval = jet.reMatch(yarr[0])
        const tmval = that.selectTime
        const exarr = [
          jet.extend({ YYYY: parseInt(val), MM: dateM, DD: dateD }, tmval[0]),
          {}
        ]
        const dateVal = that.parseValue([exarr[0]], that.format)
        that.storeData(exarr[0], exarr[1], true, i, true, type)
        that.renderDate(3)
        opts.toggle &&
          opts.toggle({ elem: that.valCell, val: dateVal, date: exarr[0] })
      },
      yearShow(val, i) {
        const opts = that.$opts
        DTS.year = !DTS.year
        DTS.month = that.dlen < 3
        if (DTS.year === true) {
          opts.isClickYearNow = true
          opts.clickYearVal = val
        } else {
          opts.isClickYearNow = false
          opts.clickYearVal = null
        }
        if (that.dlen > 2 && that.dlen <= 6) {
          const dayCell = $Q('.daystable', elCell)
          DTS.day = dayCell.style.display == 'none'
        }
        that.renderDate(4)
      },
      monthBtn(type, val, index) {
        const ymarr = jet.reMatch(val)
        const tmval = that.selectTime
        let exarr = []
        let PrevYM
        let NextYM
        const year = parseInt(ymarr[0])
        const month = parseInt(ymarr[1])
        that.$opts.isClickMonthBtn = true
        if (range) {
          if (type == 'mprev') {
            PrevYM = jet.prevMonth(year, month)
            NextYM = jet.nextMonth(PrevYM.y, PrevYM.m)
          } else {
            NextYM = jet.nextMonth(year, month)
            PrevYM = jet.prevMonth(year.y, month)
          }
          if (type == 'mprev') {
            exarr = [
              jet.extend({ YYYY: PrevYM.y, MM: PrevYM.m, DD: dateD }, tmval[0]),
              { YYYY: NextYM.y, MM: NextYM.m, DD: dateD }
            ]
          } else {
            exarr = [
              { YYYY: NextYM.y, MM: NextYM.m, DD: dateD },
              jet.extend({ YYYY: PrevYM.y, MM: PrevYM.m, DD: dateD }, tmval[0])
            ]
          }
        } else {
          const PNYM =
            type == 'mprev'
              ? jet.prevMonth(year, month)
              : jet.nextMonth(year, month)
          exarr = [
            jet.extend({ YYYY: PNYM.y, MM: PNYM.m, DD: dateD }, tmval[0]),
            {}
          ]
        }
        const dateVal = that.parseValue([exarr[0]], that.format)
        that.storeData(exarr[0], exarr[1])
        that.renderDate(5)
        opts.toggle &&
          opts.toggle({ elem: that.valCell, val: dateVal, date: exarr[0] })
      },
      monthShow(val, index) {
        DTS.year = false
        DTS.month = !DTS.month
        that.$opts.isClickYearNow = false
        that.$opts.clickYearVal = null
        // that.$opts.isClickMonthBtn = true
        if (that.dlen > 2 && that.dlen <= 6) {
          const dayCell = $Q('.daystable', elCell)
          DTS.day = dayCell.style.display == 'none'
        }
        that.renderDate(6)
      },
      shortClick(val) {
        const reval = val.replace(/\#/g, ',')
        const evobj = eval('(' + reval + ')')
        const gval = jet.getDateTime(evobj)
        let tmval = that.selectTime

        that.selectValue = [jet.parse(gval, 'YYYY-MM-DD')]
        that.selectDate = [{ YYYY: gval.YYYY, MM: gval.MM, DD: gval.DD }]
        that.selectTime = [{ hh: gval.hh, mm: gval.mm, ss: gval.ss }]
        tmval = that.selectTime
        if (opts.onClose) {
          const nYM = jet.nextMonth(gval.YYYY, gval.MM)
          const ymarr = [
            { YYYY: gval.YYYY, MM: gval.MM, DD: gval.DD },
            { YYYY: nYM.y, MM: nYM.m, DD: null }
          ]
          that.storeData(
            jet.extend(ymarr[0], tmval[0]),
            jet.extend(ymarr[1], tmval[1])
          )
          that.renderDate(7)
        } else {
          that.setValue(gval, that.format)
          that.closeDate()
        }
      },
      yearClick(val, i, y) {
        if (jet.hasClass(this, 'disabled')) return
        let yearVal = ''
        const lens = that.dlen
        that.showCurrentDayBg = true
        that.$opts.isClickYearNow = false
        that.$opts.clickYearVal = null
        if (range && lens == 1) {
          const ylen = that.selectValue.length
          that.selectDate =
            ylen == 2
              ? [{ YYYY: parseInt(val), MM: dateM }]
              : [
                  { YYYY: that.selectDate[0].YYYY, MM: that.selectDate[0].MM },
                  { YYYY: parseInt(val), MM: dateM }
                ]
          that.selectValue =
            ylen == 2
              ? [val + '-' + jet.digit(dateM)]
              : [that.selectValue[0], val + '-' + jet.digit(dateM)]

          if (that.selectValue.length == 2) {
            const svalarr = [that.selectValue[0], that.selectValue[1]]
            const newArr = [{}, {}]
            svalarr.sort((a, b) => {
              return a > b ? 1 : -1
            })
            that.selectValue = svalarr
            jet.each(svalarr, (i, strval) => {
              jet.each(jet.reMatch(strval), (s, dval) => {
                newArr[i][ymdzArr[s]] = dval
              })
            })
            that.selectDate = newArr
          }
        } else if (lens > 1 && lens <= 6) {
          yearVal = parseInt(val)
          if (range) {
            if (i == '0') {
              that.selectDate = [
                { YYYY: parseInt(val), MM: dateM },
                { YYYY: parseInt(val), MM: dateM }
              ]
              that.selectValue = [
                val + '-' + jet.digit(dateM),
                val + '-' + jet.digit(dateM)
              ]
            } else {
              that.selectDate = [
                that.selectValue[0],
                { YYYY: parseInt(val), MM: dateM }
              ]
              that.selectValue = [
                that.selectValue[0],
                val + '-' + jet.digit(dateM)
              ]
            }

            if (that.selectValue.length == 2) {
              const svalarr = [that.selectValue[0], that.selectValue[1]]
              const newArr = [{}, {}]
              svalarr.sort((a, b) => {
                return a > b ? 1 : -1
              })
              that.selectValue = svalarr
              jet.each(svalarr, (i, strval) => {
                jet.each(jet.reMatch(strval), (s, dval) => {
                  newArr[i][ymdzArr[s]] = dval
                })
              })
              that.selectDate = newArr
            }
          } else {
            that.selectValue = [val + '-' + jet.digit(dateM)]
            that.selectDate = [{ YYYY: parseInt(val), MM: dateM }]
          }
        } else {
          that.selectValue = [val + '-' + jet.digit(dateM)]
          that.selectDate = [{ YYYY: parseInt(val), MM: dateM }]
        }
        DTS.year = lens == 1
        DTS.month = lens < 3
        DTS.day = !!(lens > 2 && lens <= 6)
        const electVal =
          lens > 1 && lens <= 6 ? yearVal : parseInt(that.selectDate[0].YYYY)
        that.storeData(
          jet.extend(
            { YYYY: electVal, MM: dateM, DD: dateD },
            that.selectTime[0]
          ),
          {},
          true,
          i
        )
        that.renderDate(8)
        that.monthShow(1, i)
        if (that.$opts.yearItemClickFun) {
          that.$opts.yearItemClickFun(val)
        }
      },
      getSelectDateDefault() {
        if (
          that.selectDate[1] &&
          Object.prototype.hasOwnProperty.call(that.selectDate[1], 'YYYY')
        ) {
          return that.selectDate[1]
        }
        const today = new Date()

        const curr = {
          DD: today.getDate(),
          MM: today.getMonth() + 1,
          YYYY: today.getFullYear()
        }
        return curr
      },
      monthClick(val, i) {
        if (jet.hasClass(this, 'disabled')) return
        const ymval = jet.reMatch(val)
        const newArr = [{}, {}]
        const mlen = that.selectValue.length
        that.showCurrentDayBg = true
        that.$opts.isClickYearNow = false
        that.$opts.clickYearVal = null
        that.$opts.currentClickIndex = i
        if (range) {
          that.selectDate =
            mlen == 2 && (!i || i == '0')
              ? [{ YYYY: ymval[0], MM: ymval[1] }]
              : [
                  { YYYY: that.selectDate[0].YYYY, MM: that.selectDate[0].MM },
                  // { YYYY: parseInt(val), MM: ymval[1] }
                  {
                    YYYY: that.getSelectDateDefault().YYYY,
                    MM: ymval[1]
                  }
                ]
          that.selectValue =
            mlen == 2 && (!i || i == '0') ? [val] : [that.selectValue[0], val]

          if (that.selectValue.length == 2) {
            const svalarr = [that.selectValue[0], that.selectValue[1]]
            svalarr.sort((a, b) => {
              return a > b ? 1 : -1
            })
            that.selectValue = svalarr
            jet.each(svalarr, (i, strval) => {
              jet.each(jet.reMatch(strval), (s, dval) => {
                newArr[i][ymdzArr[s]] = dval
              })
            })
            that.selectDate = newArr
          }
          if (that.$opts.monthItemClickFun) {
            that.$opts.monthItemClickFun(that.selectDate)
          }
        } else {
          that.selectValue = [val]
          that.selectDate = [{ YYYY: ymval[0], MM: ymval[1] }]
          if (that.$opts.monthItemClickFun) {
            that.$opts.monthItemClickFun(that.selectDate)
          }
        }
        if (that.dlen > 2) {
          DTS.year = false
          DTS.month = false
        }
        DTS.day = !!(that.dlen > 2 && that.dlen <= 6)

        that.storeData(
          jet.extend(
            {
              YYYY: parseInt(that.selectDate[0].YYYY),
              MM: parseInt(that.selectDate[0].MM),
              DD: dateD
            },
            that.selectTime[0]
          ),
          {}
        )
        that.renderDate(9)
      },
      daysClick(val, index) {
        if (jet.hasClass(this, 'disabled')) return
        const tmval = that.selectTime
        const matVal = jet.reMatch(val)
        const slen = that.selectValue.length
        let dateVal = ''
        let newArr = [{}, {}]
        let sday
        let nYM
        let ymarr
        that.showCurrentDayBg = true
        if (range) {
          if (index == '1') {
            const svalarr = [that.selectValue[0], val]
            svalarr.sort((a, b) => {
              return a > b ? 1 : -1
            })
            that.selectValue = svalarr
            jet.each(svalarr, (i, strval) => {
              jet.each(jet.reMatch(strval), (s, dval) => {
                newArr[i][ymdzArr[s]] = dval
              })
            })
            that.selectDate = newArr
          } else {
            that.selectValue = [val]
            newArr = [{ YYYY: matVal[0], MM: matVal[1], DD: matVal[2] }]
            that.selectDate = [
              { YYYY: matVal[0], MM: matVal[1], DD: matVal[2] },
              {}
            ]
          }
          nYM = jet.nextMonth(newArr[0].YYYY, newArr[0].MM)
          ymarr = [
            { YYYY: newArr[0].YYYY, MM: newArr[0].MM, DD: newArr[0].DD },
            { YYYY: nYM.y, MM: nYM.m, DD: null }
          ]
          that.storeData(
            jet.extend(ymarr[0], tmval[0]),
            jet.extend(ymarr[1], tmval[1])
          )
          that.renderDate(10)
        } else {
          that.selectValue = [val]
          that.selectDate = [
            { YYYY: matVal[0], MM: matVal[1], DD: matVal[2] },
            { YYYY: matVal[0], MM: matVal[1], DD: matVal[2] }
          ]
          jet.each(new Array(range == false ? 1 : 2), a => {
            jet.each(matVal, (i, val) => {
              newArr[a][ymdzArr[i]] = val
            })
            jet.extend(newArr[a], tmval[a])
          })
          if (opts.onClose) {
            that.storeData(
              jet.extend(newArr[0], tmval[0]),
              jet.extend(newArr[1], tmval[1])
            )
            that.renderDate(11)
          } else {
            dateVal = that.setValue(newArr, that.format)
            that.closeDate()
            opts.doneFun &&
              opts.doneFun.call(that, {
                elem: that.valCell,
                val: dateVal,
                date: newArr
              })
          }
        }
        if (that.$opts.dayItemClickFun) {
          that.$opts.dayItemClickFun(val)
        }
      },
      hmsClick(idx, num) {
        const pidx = parseInt(num)
        const vals = parseInt(jet.text(this))
        const paridx = parseInt(idx)
        const act = 'action'
        const mhms = that.$opts.showSecend ? ['hh', 'mm', 'ss'] : ['hh', 'mm']
        const ulCell = $Q(
          '.pui-pick-date-time',
          that.dateCell
        ).querySelectorAll('ul')[pidx]
        const tlen = that.$data.timelist[0].length
        let minVal = []
        let maxVal = []
        const ntVal = jet.trim(that.minDate).replace(/\s+/g, ' ')
        const xtVal = jet.trim(that.maxDate).replace(/\s+/g, ' ')
        const nVal = ntVal.split(' ')
        const xVal = xtVal.split(' ')
        if (that.dlen > 3 && /\:/.test(nVal) && /\:/.test(xVal)) {
          minVal = jet.reMatch(
            /\s/.test(ntVal) && that.dlen > 3 ? nVal[1] : ntVal
          )
          maxVal = jet.reMatch(
            /\s/.test(xtVal) && that.dlen > 3 ? xVal[1] : xtVal
          )
        }
        var selectDataStr = that.selectValue
        if (idx === '0' && num === '0') {
          // 日期比较,如果不是范围，选中日期和最小值比较
          const ulSecCell = $Q(
            '.pui-pick-date-time',
            that.dateCell
          ).querySelectorAll('ul')[1]
          if (selectDataStr.length === 1) {
            if (
              Date.parse(nVal[0]) === Date.parse(selectDataStr[0].substr(0, 10))
            ) {
              if (vals > minVal[0]) {
                jet.each(ulSecCell.childNodes, (i, node) => {
                  node.classList.remove('action')
                  node.classList.remove('disabled')
                })
              } else {
                jet.each(ulSecCell.childNodes, (i, node) => {
                  if (parseInt(node.innerText) < minVal[1]) {
                    node.classList.remove('action')
                  }
                })
                that.selectTime[paridx][mhms[1]] = minVal[1]
                jet.each(ulSecCell.childNodes, (i, node) => {
                  if (parseInt(node.innerText) < minVal[1]) {
                    node.classList.add('disabled')
                  }
                })
              }
            } else if (
              Date.parse(xVal[0]) === Date.parse(selectDataStr[0].substr(0, 10))
            ) {
              if (vals < maxVal[0]) {
                jet.each(ulSecCell.childNodes, (i, node) => {
                  node.classList.remove('action')
                  node.classList.remove('disabled')
                })
              } else {
                jet.each(ulSecCell.childNodes, (i, node) => {
                  if (parseInt(node.innerText) > maxVal[1]) {
                    node.classList.remove('action')
                  }
                })
                that.selectTime[paridx][mhms[1]] = maxVal[1]
                jet.each(ulSecCell.childNodes, (i, node) => {
                  if (parseInt(node.innerText) > maxVal[1]) {
                    node.classList.add('disabled')
                  }
                })
              }
            }
          } else {
            if (
              Date.parse(nVal[0]) === Date.parse(selectDataStr[0].substr(0, 10))
            ) {
              if (vals > minVal[0]) {
                jet.each(ulSecCell.childNodes, (i, node) => {
                  node.classList.remove('action')
                  node.classList.remove('disabled')
                })
              } else {
                jet.each(ulSecCell.childNodes, (i, node) => {
                  if (parseInt(node.innerText) < minVal[1]) {
                    node.classList.remove('action')
                  }
                })
                that.selectTime[paridx][mhms[1]] = minVal[1]
                jet.each(ulSecCell.childNodes, (i, node) => {
                  if (parseInt(node.innerText) < minVal[1]) {
                    node.classList.add('disabled')
                  }
                })
              }
            } else if (
              Date.parse(xVal[0]) === Date.parse(selectDataStr[1].substr(0, 10))
            ) {
              if (vals < maxVal[0]) {
                jet.each(ulSecCell.childNodes, (i, node) => {
                  node.classList.remove('action')
                  node.classList.remove('disabled')
                })
              } else {
                jet.each(ulSecCell.childNodes, (i, node) => {
                  if (parseInt(node.innerText) > maxVal[1]) {
                    node.classList.remove('action')
                  }
                })
                that.selectTime[paridx][mhms[1]] = maxVal[1]
                jet.each(ulSecCell.childNodes, (i, node) => {
                  if (parseInt(node.innerText) > maxVal[1]) {
                    node.classList.add('disabled')
                  }
                })
              }
            }
          }
        } else if (idx === '1' && num === '2') {
          const secCell = $Q(
            '.pui-pick-date-time',
            that.dateCell
          ).querySelectorAll('ul')[3]
          const parseDate =
            selectDataStr.length > 1 ? selectDataStr[1] : selectDataStr[0]
          if (Date.parse(xVal[0]) === Date.parse(parseDate.substr(0, 10))) {
            if (vals < maxVal[0]) {
              jet.each(secCell.childNodes, (i, node) => {
                node.classList.remove('action')
                node.classList.remove('disabled')
              })
            } else {
              jet.each(secCell.childNodes, (i, node) => {
                if (parseInt(node.innerText) > maxVal[1]) {
                  node.classList.remove('action')
                }
              })
              that.selectTime[paridx][mhms[1]] = maxVal[1]

              jet.each(secCell.childNodes, (i, node) => {
                if (parseInt(node.innerText) > maxVal[1]) {
                  node.classList.add('disabled')
                }
              })
            }
          }
        }
        if (jet.hasClass(this, 'disabled')) return
        jet.each(ulCell.childNodes, (i, node) => {
          const reg = new RegExp('(^|\\s+)' + act + '(\\s+|$)', 'g')
          node.className = reg.test(node.className)
            ? node.className.replace(reg, '')
            : node.className
        })
        that.selectTime[paridx][paridx == 1 ? mhms[pidx - tlen] : mhms[pidx]] =
          vals
        this.className += act
        const hmsCls = ulCell.querySelector('.' + act)
        ulCell.scrollTop = hmsCls ? hmsCls.offsetTop - 145 : 0
      },
      timeBtn() {
        const timeCell = $Q('.pui-pick-date-time', elCell)
        const disNo = timeCell.style.display == 'none'
        jet.text(this, disNo ? opts.language.backtxt : opts.language.timetxt[0])
        jet.setCss(timeCell, { display: disNo ? 'block' : 'none' })
        const timeULs = $Q(
          '.pui-pick-date-time',
          that.dateCell
        ).querySelectorAll('ul')
        if (timeULs && timeULs.length > 0) {
          for (let i = 0; i < timeULs.length; i++) {
            const ulCell = timeULs[i]
            const hmsCls = ulCell.querySelector('.action')
            ulCell.scrollTop = hmsCls ? hmsCls.offsetTop - 145 : 0
          }
        }
      },
      // 清空按钮函数
      clearBtn() {
        if (!that.valCell.id.endsWith('posend')) {
          jet.valText(that.valCell, '')
          $I(that.valCell.id + 'posend') &&
            jet.valText($I(that.valCell.id + 'posend'), '')
        } else {
          jet.valText(that.valCell, '')
          jet.valText($I(that.valCell.id.replace('posend', '')), '')
        }
        if (that.$opts.filterMode) {
          document
            .getElementById(that.valCell.id.replace('posend', '') + '_holder')
            .classList.remove('label-holder')
        }
        that.selectDate = [jet.parse(jet.getDateTime({}), 'YYYY-MM-DD hh:mm')]
        that.showCurrentDayBg = false
        that.closeDate()
        opts.clearFun && opts.clearFun.call(that)
      },
      // 现在按钮函数
      nowBtn() {
        const newArr = jet.getDateTime({})
        const nYM = jet.nextMonth(newArr.YYYY, newArr.MM)
        let dateVal
        that.selectDate = [newArr]
        dateVal = opts.isShow
          ? that.setValue([newArr], that.format, true)
          : jet.parse(newArr, that.format)
        if ((opts.onClose && range) || !opts.isShow) {
          that.storeData(newArr, {
            YYYY: nYM.y,
            MM: nYM.m,
            DD: null,
            hh: 0,
            mm: 0,
            ss: 0
          })
          that.renderDate(13)
        } else {
          that.closeDate()
        }
        opts.doneFun &&
          opts.doneFun.call(that, {
            elem: that.valCell,
            val: dateVal,
            date: newArr
          })
      },
      // 确认按钮函数
      sureBtn() {
        let newArr = that.selectValue.length > 1 ? [{}, {}] : [{}]
        let dateVal = ''
        const tmval = that.selectTime
        const equal = function (o) {
          const h = o.hh == undefined ? 0 : o.hh
          const m = o.mm == undefined ? 0 : o.mm
          const s = o.ss == undefined ? 0 : o.ss
          return parseInt(jet.digit(h) + '' + jet.digit(m) + '' + jet.digit(s))
        }
        opts.currentClickIndex = 0
        if (range) {
          if (
            that.selectValue.length > 1 &&
            that.selectValue[0].length !== that.selectValue[1].length
          ) {
            if (that.selectValue[0].length < that.selectValue[1].length) {
              that.selectValue[0] += '-' + jet.digit(that.selectDate[0].DD)
            } else {
              that.selectValue[1] += '-' + jet.digit(that.selectDate[1].DD)
            }
          }
          const dateLen = opts.allowNullDate ? 0 : 1
          if (that.selectValue.length > dateLen) {
            const sortarr = that.selectValue
            sortarr.sort((a, b) => {
              return a > b ? 1 : -1
            })
            jet.each(sortarr, (i, arr) => {
              jet.each(jet.reMatch(arr), (a, val) => {
                newArr[i][ymdzArr[a]] = val
              })
              jet.extend(newArr[i], tmval[i])
            })
          } else if (that.dlen == 7 && tmval.length > 1) {
            newArr = tmval
          }
          let sameTime = equal(tmval[0]) >= equal(tmval[1])
          const format = that.$opts.format.replace(/ /g, '')
          if (format.indexOf('hh') === -1) {
            sameTime = false
          }

          const selVal = that.selectValue
          let sameDate = ''

          if (selVal[1] != undefined)
            sameDate =
              selVal[0].replace(/\-/g, '') == selVal[1].replace(/\-/g, '')
          if (selVal.length === 1 && that.dlen < 7 && !opts.allowNullDate) {
            that.tips(
              opts.language.name === 'cn'
                ? '未选结束日期'
                : 'Please select the end date'
            )
            return
          } else if ((that.dlen === 7 && sameTime) || (sameDate && sameTime)) {
            that.tips(
              opts.language.name === 'cn'
                ? '结束时间必须大于开始时间'
                : 'The end time must be greater than the start time'
            )
            return
          }
        } else {
          jet.each(new Array(range == false ? 1 : 2), i => {
            if (that.dlen != 7)
              jet.each(jet.reMatch(that.selectValue[0]), (a, val) => {
                newArr[i][ymdzArr[a]] = val
              })
            jet.extend(newArr[i], tmval[i])
          })
        }
        dateVal = that.setValue(newArr, that.format, !!opts.isShow)
        opts.isShow && that.closeDate()

        opts.doneFun &&
          opts.doneFun.call(that, {
            elem: that.valCell,
            val: dateVal,
            date: newArr
          })
      },
      blankArea() {
        jet.on(document, 'mouseup', ev => {
          jet.stopPropagation(ev)
          that.closeDate()
        })
        jet.on($Q(elx), 'mouseup', ev => {
          jet.stopPropagation(ev)
        })
      }
    })
  },
  // 循环生成年数据
  eachYear(val, type, index, op = 'add') {
    if (!val) {
      val = new Date().getFullYear()
    }

    const that = this
    const opts = that.$opts
    const yNum = parseInt(val)
    const yarr = []
    let seCls = ''
    const selYear = that.selectDate
    let i
    const mins = jet.reMatch(that.minDate)
    const maxs = jet.reMatch(that.maxDate)
    i = type == 1 ? yNum : that.yindex
    if (op == 'add') {
      that.yindex = type == 1 ? 12 + yNum : 12 + that.yindex
    } else {
      that.yindex = val
      i = val - 12
    }
    const endDate = selYear[1] == undefined ? '' : selYear[1].YYYY
    for (; i < that.yindex; i++) {
      let sYear = selYear[0].YYYY
      if (selYear.length > 1) {
        sYear = selYear[index].YYYY
      }
      if (i == sYear && (this.valCell.value || this.showCurrentDayBg)) {
        seCls = 'action'
      } else if (i > sYear && i < endDate) {
        seCls = 'contain'
      } else if (i < mins[0] || i > maxs[0]) {
        seCls = 'disabled'
      } else {
        seCls = ''
      }
      yarr.push({ style: seCls, y: i })
    }
    return yarr
  },
  // 循环生成月数据
  eachMonth(val, index) {
    if (!val) {
      val = new Date().getFullYear()
    }
    const that = this
    const opts = that.$opts
    const range = opts.range
    const marr = []
    const selMonth = that.selectDate
    let seCls = ''
    const monthArr = opts.language.month
    const mins = jet.reMatch(that.minDate)
    const maxs = jet.reMatch(that.maxDate)
    const minym = parseInt(mins[0] + '' + jet.digit(mins[1]))
    const maxym = parseInt(maxs[0] + '' + jet.digit(maxs[1]))
    const currStart = parseInt(
      selMonth[0].YYYY + '' + jet.digit(selMonth[0].MM)
    )
    const currEnd = selMonth[1]
      ? parseInt(selMonth[1].YYYY + '' + jet.digit(selMonth[1].MM))
      : 0
    let min = sessionStorage.getItem(opts.minSession)
    let max = sessionStorage.getItem(opts.maxSession)
    jet.each(monthArr, (i, months) => {
      // const ival = parseInt(val + '' + jet.digit(months))
      let sMonth = val
      if (selMonth.length > 1) {
        sMonth = selMonth[index].YYYY
      }
      const ival = parseInt(sMonth + '' + jet.digit(months))
      if (typeof min == 'string') {
        min = parseInt(min.replace('-', ''))
      }
      if (typeof max == 'string') {
        max = parseInt(max.replace('-', ''))
      }
      if (
        (ival == currStart || ival == currEnd) &&
        (months || that.showCurrentDayBg)
      ) {
        if (
          that.selectDate.length > 1 &&
          that.selectDate[0].YYYY == that.selectDate[1].YYYY &&
          opts.currentClickIndex == index
        ) {
          if (min && max && opts.dynamicRangeDate) {
            if (ival >= min && ival <= max) {
              seCls = 'action'
            } else {
              seCls = 'disabled'
            }
          } else seCls = 'action'
          // seCls = 'action'
        } else if (
          that.selectDate.length > 1 &&
          that.selectDate[0].YYYY == that.selectDate[1].YYYY &&
          opts.currentClickIndex != index
        ) {
          // seCls = 'contain aa'
          seCls = 'action'
        } else {
          if (min && max && opts.dynamicRangeDate) {
            if (ival >= min && ival <= max) {
              seCls = 'action'
            } else {
              seCls = 'disabled'
            }
          } else seCls = 'action'
          // seCls = 'action'
        }
      } else if (ival > currStart && ival < currEnd) {
        if (min && max && opts.dynamicRangeDate) {
          if (ival >= min && ival <= max) {
            seCls = 'contain bb'
          } else {
            seCls = 'disabled'
          }
        } else seCls = 'contain cc'
      } else if (ival < minym || ival > maxym) {
        if (min && max && opts.dynamicRangeDate) {
          if (ival >= min && ival <= max) {
            seCls = ''
          } else {
            seCls = 'disabled'
          }
        } else seCls = 'disabled'
        // seCls = 'disabled'
      } else if (min && max && opts.dynamicRangeDate) {
        // if (min && max && opts.dynamicRangeDate) {
        if (ival >= min && ival <= max) {
          seCls = ''
        } else {
          seCls = 'disabled'
        }
        // }
        // seCls = ''
      } else seCls = ''
      marr.push({ style: seCls, y: val, m: months })
    })
    return marr
  },
  // 循环生成天数据
  eachDays(yd, md, ds, idx) {
    if (!yd) {
      yd = new Date().getFullYear()
    }
    if (!md) {
      md = new Date().getMonth() + 1
    }
    const that = this
    let count = 0
    const daysArr = []
    const opts = that.$opts
    const multiPane = jet.isBool(opts.multiPane)
    const firstWeek = new Date(yd, md - 1, 1).getDay() || 7
    const valrange = opts.range != false
    const daysNum = jet.getDaysNum(yd, md)
    const didx = 0
    const sDate = that.selectDate
    const prevM = jet.prevMonth(yd, md)
    const isShow = jet.isBool(opts.isShow)
    const prevDaysNum = jet.getDaysNum(yd, prevM.m)
    const nextM = jet.nextMonth(yd, md)
    const objCell = that.valCell
    const lang = opts.language
    const endval = opts.valiDate || []
    const minArr = jet.reMatch(that.minDate)
    const minNum = parseInt(
      minArr[0] + '' + jet.digit(minArr[1]) + '' + jet.digit(minArr[2])
    )
    const maxArr = jet.reMatch(that.maxDate)
    const maxNum = parseInt(
      maxArr[0] + '' + jet.digit(maxArr[1]) + '' + jet.digit(maxArr[2])
    )
    const today = new Date()
    if (sDate[0] && !sDate[0].DD) {
      sDate[0].DD = today.getDate()
    }

    if (sDate[1] && !sDate[1].DD) {
      sDate[1].DD = today.getDate()
    }

    const startDate = sDate[0]
      ? parseInt(
          sDate[0].YYYY +
            '' +
            jet.digit(sDate[0].MM) +
            '' +
            jet.digit(sDate[0].DD)
        )
      : ''
    const endDate = sDate[1]
      ? parseInt(
          sDate[1].YYYY +
            '' +
            jet.digit(sDate[1].MM) +
            '' +
            jet.digit(sDate[1].DD)
        )
      : ''
    // 设置时间标注
    const setMark = function (my, mm, md) {
      const Marks = opts.marks
      const contains = function (arr, obj) {
        let clen = arr.length
        while (clen--) {
          if (arr[clen] === obj) return true
        }
        return false
      }
      const isArr = jet.isType(Marks, 'array')
      return isArr &&
        Marks.length > 0 &&
        contains(Marks, my + '-' + jet.digit(mm) + '-' + jet.digit(md))
        ? '<i class="marks"></i>'
        : ''
    }
    // 是否显示节日
    const isfestival = function (y, m, d) {
      let festivalStr = ''
      if (opts.festival == true && lang.name == 'cn') {
        const lunar = jeLunar(y, m - 1, d)
        const feslunar = lunar.solarFestival || lunar.lunarFestival
        const lunartext =
          (feslunar && lunar.jieqi) != ''
            ? feslunar
            : lunar.jieqi || lunar.showInLunar
        festivalStr =
          '<p><span class="solar">' +
          d +
          '</span><span class="lunar">' +
          lunartext +
          '</span></p>'
      } else {
        festivalStr = '<p class="nolunar">' + d + '</p>'
      }
      return festivalStr
    }
    // 判断是否在限制的日期之中
    const dateLimit = function (Y, M, D, isMonth) {
      const thatNum = parseInt(Y + '' + jet.digit(M) + '' + jet.digit(D))
      if (isMonth) {
        if (thatNum >= minNum && thatNum <= maxNum) return true
      } else if (minNum > thatNum || maxNum < thatNum) return true
    }

    const regExpDate = function (date, cls) {
      const inArray = function (search, array) {
        for (const i in array) if (array[i] == search) return true
        return false
      }
      if (endval.length > 0 && endval[0] != '') {
        if (/\%/g.test(endval[0])) {
          const reval = endval[0].replace(/\%/g, '').split(',')
          const enArr = []
          jet.each(reval, (r, rel) => {
            enArr.push(jet.digit(parseInt(rel)))
          })
          const isfind = inArray(jet.digit(date), enArr) == false
          cls = jet.isBool(endval[1])
            ? isfind
              ? ' disabled'
              : cls
            : isfind
            ? cls
            : ' disabled'
        } else {
          const valreg = that.dateRegExp(endval[0])
          const regday = valreg.test(jet.digit(date))
          cls = jet.isBool(endval[1])
            ? regday
              ? ' disabled'
              : cls
            : regday
            ? cls
            : ' disabled'
        }
      }
      return cls
    }

    // var ymds = ymdarr[1]
    // 上一月剩余天数
    for (let p = prevDaysNum - firstWeek + 1; p <= prevDaysNum; p++, count++) {
      const pmark = setMark(prevM.y, prevM.m, p)
      let pcls = dateLimit(prevM.y, prevM.m, p, false) ? 'disabled' : 'other'
      pcls = regExpDate(p, pcls)
      daysArr.push({
        style: pcls,
        ymd: prevM.y + '-' + jet.digit(prevM.m) + '-' + jet.digit(p),
        day: isfestival(prevM.y, prevM.m, p) + pmark
      })
    }
    // 本月的天数
    for (let b = 1; b <= daysNum; b++, count++) {
      const bmark = setMark(yd, md, b)
      let bcls = ''
      const dateval = parseInt(yd + '' + jet.digit(md) + '' + jet.digit(b))
      const parsdate = dateval > startDate
      const rangdate = dateval < endDate
      if (dateLimit(yd, md, b, true)) {
        if (
          (dateval == startDate || dateval == endDate) &&
          (this.valCell.value || this.showCurrentDayBg)
        ) {
          bcls = ' action'
        } else if (parsdate && rangdate) {
          bcls = ' contain'
        } else {
          bcls = ''
        }
      } else {
        bcls = ' disabled'
      }
      bcls = regExpDate(b, bcls)
      daysArr.push({
        style: 'normal' + bcls,
        ymd: yd + '-' + jet.digit(md) + '-' + jet.digit(b),
        day: isfestival(yd, md, b) + bmark
      })
    }
    // 下一月开始天数
    for (let n = 1, nlen = 42 - count; n <= nlen; n++) {
      const nmark = setMark(nextM.y, nextM.m, n)
      let ncls = dateLimit(nextM.y, nextM.m, n, false) ? 'disabled' : 'other'
      ncls = regExpDate(n, ncls)
      daysArr.push({
        style: ncls,
        ymd: nextM.y + '-' + jet.digit(nextM.m) + '-' + jet.digit(n),
        day: isfestival(nextM.y, nextM.m, n) + nmark
      })
    }
    // 将星期与日期拼接起来
    return daysArr
  },
  eachTime(hmsArr, type) {
    const that = this
    const opts = that.$opts
    const range = opts.range
    const multi = opts.multiPane
    let minVal = []
    let maxVal = []
    const mhms = that.$opts.showSecend ? ['hh', 'mm', 'ss'] : ['hh', 'mm']
    const timeArr = []
    let hmsCls = ''
    const format = that.format
    const ntVal = jet.trim(that.minDate).replace(/\s+/g, ' ')
    const xtVal = jet.trim(that.maxDate).replace(/\s+/g, ' ')
    const nVal = ntVal.split(' ')
    const xVal = xtVal.split(' ')
    if (that.dlen > 3 && /\:/.test(nVal) && /\:/.test(xVal)) {
      minVal = jet.reMatch(/\s/.test(ntVal) && that.dlen > 3 ? nVal[1] : ntVal)
      maxVal = jet.reMatch(/\s/.test(xtVal) && that.dlen > 3 ? xVal[1] : xtVal)
    }

    const stepArr = that.$opts.showSecend ? [24, 60, 60] : [24, 60]
    jet.each(stepArr, (s, lens) => {
      timeArr[s] = []
      const unhmsVal =
        minVal[s] == undefined || minVal[s] == 0 ? hmsArr[mhms[s]] : minVal[s]
      let currVal = that.getValue() == '' ? unhmsVal : hmsArr[mhms[s]]
      if (that.dlen > 3 && /\:/.test(nVal) && type === 1) {
        if (
          Date.parse(nVal[0]) ===
            Date.parse(that.selectValue[0].substr(0, 10)) &&
          currVal < minVal[s] // 最小日期
        ) {
          currVal = minVal[s]
        }
        that.selectTime[0][mhms[s]] = currVal
      } else if (type === 2 && that.selectValue.length > 1) {
        if (
          Date.parse(xVal[0]) ===
            Date.parse(that.selectValue[1].substr(0, 10)) &&
          currVal > maxVal[s] // 最大日期
        ) {
          currVal = maxVal[s]
        }
        that.selectTime[1][mhms[s]] = currVal
      }

      for (let h = 0; h < lens; h++) {
        const exists = new RegExp(mhms[s], 'g').test(format)
        if (h == currVal) {
          hmsCls = exists ? 'action' : 'disabled'
        } else if (
          !exists ||
          (!range && multi && (h < minVal[s] || h > maxVal[s]))
        ) {
          var dateStart =
            that.selectDate[0].YYYY +
            '-' +
            (that.selectDate[0].MM < 10
              ? '0' + that.selectDate[0].MM
              : that.selectDate[0].MM) +
            '-' +
            that.selectDate[0].DD
          if (nVal[0] === dateStart && h < minVal[s]) {
            hmsCls = 'disabled'
          } else if (xVal[0] === dateStart && h > maxVal[s]) {
            hmsCls = 'disabled'
          } else {
            hmsCls = ''
          }
        } else if (!multi) {
          let selectDataStr = that.selectValue
          if (selectDataStr.length < 2) {
            hmsCls =
              (type == 1 && h < minVal[s]) || (type == 2 && h > maxVal[s])
                ? 'disabled'
                : ''
          } else {
            if (type === 1) {
              if (
                Date.parse(nVal[0]) ===
                Date.parse(selectDataStr[0].substr(0, 10))
              ) {
                if (h < minVal[s]) {
                  hmsCls = 'disabled'
                } else {
                  hmsCls = ''
                }
              } else {
                hmsCls = ''
              }
            } else {
              if (
                Date.parse(xVal[0]) ===
                Date.parse(selectDataStr[1].substr(0, 10))
              ) {
                if (h > maxVal[s]) {
                  hmsCls = 'disabled'
                } else {
                  hmsCls = ''
                }
              } else {
                hmsCls = ''
              }
            }
          }
        } else {
          hmsCls = ''
        }
        timeArr[s].push({ style: hmsCls, hms: h })
      }
    })
    return timeArr
  },
  // 关闭日期控件
  closeDate() {
    const elem = $Q(elx)
    const tipelem = $Q('#jedatetipscon')
    elem && document.body.removeChild(elem)
    tipelem && document.body.removeChild(tipelem)
    if (
      this.valCell.className.indexOf('filterMode-single') !== -1 &&
      this.valCell.value === ''
    ) {
      $I(this.valCell.id).style.display = 'none'
    }

    if (
      this.valCell.className.indexOf('filterMode-multi') !== -1 &&
      this.valCell.value === ''
    ) {
      if ($I(this.valCell.id + 'filterMode-multi')) {
        $I(this.valCell.id + 'filterMode-multi').style.display = 'none'
      } else {
        const id = this.valCell.id.replace('posend', '')
        if ($I(id + 'filterMode-multi')) {
          $I(id + 'filterMode-multi').style.display = 'none'
        }
      }
    }
    // 再次初始化值
    this.setDatas()
  },
  // 转换日期值
  parseValue(fnObj, matStr) {
    const that = this
    const valArr = []
    const opts = that.$opts
    const range = opts.range
    jet.each(fnObj, (i, val) => {
      valArr.push(jet.parse(val, matStr))
    })
    return range == false ? valArr[0] : valArr.join(range)
  },

  // 初始验证正则
  dateRegExp(valArr) {
    const enval = valArr.split(',') || []
    let regs = ''
    const doExp = function (val) {
      let arr
      let tmpEval
      const regs = /#?\{(.*?)\}/
      val += ''
      while ((arr = regs.exec(val)) != null) {
        arr.lastIndex =
          arr.index + arr[1].length + arr[0].length - arr[1].length - 1
        tmpEval = parseInt(eval(arr[1]))
        if (tmpEval < 0) tmpEval = '9700' + -tmpEval
        val =
          val.substring(0, arr.index) +
          tmpEval +
          val.substring(arr.lastIndex + 1)
      }
      return val
    }
    if (enval && enval.length > 0) {
      for (let i = 0; i < enval.length; i++) {
        regs += doExp(enval[i])
        if (i != enval.length - 1) regs += '|'
      }
      regs = regs ? new RegExp('(?:' + regs + ')') : null
    } else {
      regs = null
    }
    // re = new RegExp((re + "").replace(/^\/\(\?:(.*)\)\/.*/, "$1"));
    return regs
  },
  // 显示农历节日
  showFestival() {
    const that = this
    const opts = that.$opts
    jet.each(that.dateCell.querySelectorAll('.daystable td'), (i, node) => {
      const tval = jet.reMatch(jet.attr(node, 'ymd'))
      const tipDiv = document.createElement('div')
      node.removeAttribute('ymd')
      // 鼠标进入提示框出现
      jet.on(node, 'mouseover', () => {
        const lunar = new jeLunar(tval[0], tval[1] - 1, tval[2])
        if ($Q('#jedatetipscon')) return
        tipDiv.id = tipDiv.className = 'jedatetipscon'
        const tiphtml =
          '<p>' +
          lunar.solarYear +
          '\u5E74' +
          lunar.solarMonth +
          '\u6708' +
          lunar.solarDate +
          '\u65E5 ' +
          lunar.inWeekDays +
          '</p><p class="red">\u519C\u5386：' +
          lunar.shengxiao +
          '\u5E74 ' +
          lunar.lnongMonth +
          '\u6708' +
          lunar.lnongDate +
          '</p><p>' +
          lunar.ganzhiYear +
          '\u5E74 ' +
          lunar.ganzhiMonth +
          '\u6708 ' +
          lunar.ganzhiDate +
          '\u65E5</p>'
        const Fesjieri =
          (lunar.solarFestival || lunar.lunarFestival) != ''
            ? '<p class="red">' +
              ('\u8282\u65E5：' + lunar.solarFestival + lunar.lunarFestival) +
              '</p>'
            : ''
        const Fesjieqi =
          lunar.jieqi != ''
            ? '<p class="red">' +
              (lunar.jieqi != '' ? '\u8282\u6C14：' + lunar.jieqi : '') +
              '</p>'
            : ''
        const tiptext =
          (lunar.solarFestival || lunar.lunarFestival || lunar.jieqi) != ''
            ? Fesjieri + Fesjieqi
            : ''
        jet.html(tipDiv, tiphtml + tiptext)
        document.body.appendChild(tipDiv)
      })
      // 鼠标移除提示框消失
      jet.on(node, 'mouseout', () => {
        document.body.removeChild($Q('#jedatetipscon'))
      })
    })
    if (that.dateCell.nodeType === 1 && !jet.hasClass(that.dateCell, 'grid'))
      that.dateCell.className = that.dateCell.className + ' grid'
  },
  // 农历方位辨别
  lunarOrien(obj, self, pos) {
    let tops
    let leris
    let ortop
    let orleri
    const rect = self.getBoundingClientRect()
    const boxW = obj.offsetWidth
    const boxH = obj.offsetHeight
    leris =
      rect.right + boxW / 1.5 >= jet.docArea(true)
        ? rect.right - boxW
        : rect.left + (pos ? 0 : jet.docScroll(true))
    tops =
      rect.bottom + boxH / 1 <= jet.docArea()
        ? rect.bottom - 1
        : rect.top > boxH / 1.5
        ? rect.top - boxH - 1
        : jet.docArea() - boxH
    if (leris + boxW > jet.docArea(true))
      leris = rect.left - (boxW - rect.width)
    ;(ortop = Math.max(tops + (pos ? 0 : jet.docScroll()) + 1, 1) + 'px'),
      (orleri = leris + 'px')
    return { top: ortop, left: orleri }
  },
  // 辨别控件的方位
  dateOrien(elbox, valCls, pos) {
    $I(valCls.id).style.display = ''
    if (this.$opts.filterMode) {
      const format = this.$opts.format.replace(/ /g, '')
      const objWidth = {
        YYYY: 50,
        'YYYY-MM': 70,
        'YYYY-MM-DD': 100,
        'YYYY-MM-DDhh:mm': 130,
        'hh:mm:ss': 80,
        'hh:mm': 60
      }
      // var pos = $I(valCls.id).getBoundingClientRect();
      $I(valCls.id).style.width = objWidth[format] + 'px'
      if (this.$opts.multiPane === false) {
        let id = valCls.id
        if (id.indexOf('posend') === -1) id += 'posend'
        $I(id).style.width = objWidth[format] + 'px'
      }
    }
    if ($I(valCls.id + 'filterMode-multi')) {
      $I(valCls.id + 'filterMode-multi').style.display = 'inline-block'
    }
    const that = this
    var tops
    var leris
    let ortop
    let orleri
    let rect = that.$opts.fixed
      ? valCls.getBoundingClientRect()
      : elbox.getBoundingClientRect()
    var leris = rect.left
    var tops = rect.bottom
    if (that.$opts.multiPane === false && that.$opts.fixed) {
      rect = document
        .getElementById(valCls.id.replace('posend', ''))
        .getBoundingClientRect()
      leris = rect.left - 12
      tops = rect.bottom
    }

    if (that.$opts.fixed) {
      const boxW = elbox.offsetWidth
      const boxH = elbox.offsetHeight
      // 如果右侧超出边界
      if (leris + boxW > jet.docArea(true)) {
        leris -= boxW - rect.width
      }
      // 如果底部超出边界
      if (tops + boxH > jet.docArea()) {
        tops = rect.top > boxH ? rect.top - boxH - 2 : jet.docArea() - boxH - 1
      }
      // 根据目标元素计算弹层位置
      const size = PUI.getDefaultSize() === 'small' ? 2 : 4
      ortop = Math.max(tops + (pos ? 0 : jet.docScroll()) + 1 + size, 1) + 'px'
      if (that.$opts.filterMode) {
        const filterLabWidth = document
          .getElementById(valCls.id.replace('posend', '') + '_holder')
          .getBoundingClientRect()
        leris = leris - filterLabWidth.width - 12
      }
      orleri = leris + 'px'
    } else {
      // 弹层位置位于页面上下左右居中
      ortop = '50%'
      orleri = '50%'
      elbox.style.cssText =
        'marginTop:' + -(rect.height / 2) + ';marginLeft:' + -(rect.width / 2)
    }
    jet.setCss(elbox, { top: ortop, left: orleri })
  },
  tips(text, time) {
    const that = this
    const tipCls = $Q('.pui-pick-date-tips', that.dateCell)
    let tipTime
    jet.html(tipCls, text || '')
    jet.setCss(tipCls, { display: 'block' })
    clearTimeout(tipTime)
    tipTime = setTimeout(() => {
      jet.html(tipCls, '')
      jet.setCss(tipCls, { display: 'none' })
    }, (time || 2.5) * 1000)
  },
  locateScroll() {
    const that = this
    const ulCell = $Q('.pui-pick-date-time', that.dateCell).querySelectorAll(
      'ul'
    )
    jet.each(ulCell, (i, cell) => {
      const hmsCls = cell.querySelector('.action')
      cell.scrollTop = hmsCls ? hmsCls.offsetTop - 145 : 0
    })
    if (that.dlen != 7)
      jet.setCss($Q('.pui-pick-date-time', that.dateCell), { display: 'none' })
  }
})

puiDateObj.renderDate = x => {
  const that = this
  const opts = that.$opts
  const isShow = jet.isBool(opts.isShow)

  const elxID = !isShow ? elx + searandom() : elx
  const setzin = { zIndex: opts.zIndex == undefined ? 10000 : opts.zIndex }

  if (that.dateCell == undefined) {
    that.dateCell = document.createElement('div')
    that.dateCell.id = elxID.replace(/\#/g, '')
    that.dateCell.className =
      elx.replace(/\#/g, '') +
      ' ' +
      (opts.shortcut.length > 0 ? ' leftmenu' : '')
  }
  jet.html(that.dateCell, jet.template(that.dateTemplate(), that.$data))
  const eles =
    $C('pui-pick-date-content').length > 0 &&
    document
      .getElementsByClassName('pui-pick-date-content')[0]
      .getElementsByTagName('table')
  let displaysCount = 0
  for (let i = 0; i < eles.length; i++) {
    if (eles[i].style.display != 'none') {
      displaysCount++
    }
  }
  if (displaysCount > 1 && $C('pui-pick-date-content').length > 0) {
    $C('pui-pick-date-content')[0].style.height = '214px'
  }
  if (displaysCount > 1 && $C('pui-pick-date-content').length > 1) {
    $C('pui-pick-date-content')[1].style.height = '214px'
  }

  // 自定义主题色
  if (jet.isObj(opts.theme)) {
    const styleDiv = document.createElement('style')
    const stCell = '.pui-pick-date' + searandom()
    const t = opts.theme
    const BG = 'background-color:' + t.bgcolor
    const WC = 'color:' + (t.color == undefined ? '#FFFFFF' : t.color)
    const OTH = t.pnColor == undefined ? '' : 'color:' + t.pnColor + ';'
    that.dateCell.className =
      that.dateCell.className + ' ' + stCell.replace(/^./g, '')
    styleDiv.setAttribute('type', 'text/css')
    styleDiv.innerHTML =
      stCell +
      ' .pui-pick-date-menu p:hover{' +
      BG +
      ';' +
      WC +
      ';}' +
      stCell +
      ' .pui-pick-date-header em{' +
      WC +
      ';}' +
      stCell +
      ' .pui-pick-date-content .yeartable td.action span,' +
      stCell +
      ' .pui-pick-date-content .monthtable td.action span,' +
      stCell +
      ' .pui-pick-date-content .yeartable td.action span:hover,' +
      stCell +
      ' .pui-pick-date-content .monthtable td.action span:hover{' +
      BG +
      ';border:1px ' +
      t.bgcolor +
      ' solid;' +
      WC +
      ';}' +
      stCell +
      ' .pui-pick-date-content .daystable td.action,' +
      stCell +
      ' .pui-pick-date-content .daystable td.action:hover,' +
      stCell +
      ' .pui-pick-date-content .daystable td.action .lunar,' +
      stCell +
      ' .pui-pick-date-header,' +
      // stCell +
      // ' .pui-pick-date-time .timeheader,' +
      stCell +
      ' .pui-pick-date-time .hmslist ul li.action,' +
      // stCell +
      // ' .pui-pick-date-time .hmslist ul li.action:hover,' +
      stCell +
      ' .pui-pick-date-time .hmslist ul li.disabled.action,' +
      stCell +
      ' .pui-pick-date-footbtn .timecon,' +
      stCell +
      ' .pui-pick-date-footbtn .btnscon span{' +
      BG +
      ';' +
      WC +
      ';}' +
      stCell +
      ' .pui-pick-date-content .daystable td.other,' +
      stCell +
      ' .pui-pick-date-content .daystable td.other .nolunar,' +
      stCell +
      ' .pui-pick-date-content .daystable td.other .lunar{' +
      OTH +
      '}' +
      stCell +
      ' .pui-pick-date-content .daystable td.contain,' +
      stCell +
      ' .pui-pick-date-content .daystable td.contain:hover{background-' +
      OTH +
      '}'
    that.dateCell.appendChild(styleDiv)
  }

  that.compileBindNode(that.dateCell)
  if (document.querySelectorAll(elxID).length > 0)
    document.body.removeChild($Q(elxID))
  !isShow
    ? that.valCell.appendChild(that.dateCell)
    : document.body.appendChild(that.dateCell)
  jet.setCss(
    that.dateCell,
    jet.extend(
      {
        position: !isShow
          ? 'relative'
          : opts.fixed == true
          ? 'absolute'
          : 'fixed'
      },
      isShow ? setzin : {}
    )
  )
  that.methodEventBind()
  if (that.dlen == 7 || (that.dlen > 3 && that.dlen <= 6)) that.locateScroll()
  if (opts.festival && opts.language.name == 'cn') that.showFestival()
  if (isShow) {
    that.dateOrien(that.dateCell, that.valCell)
    that.blankArea()
  }
}
export default puiDate
