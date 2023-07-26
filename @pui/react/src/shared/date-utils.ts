export const sameDate = (d1: Date | null, d2: Date | null, isMonth = false) => {
  if (d1 === null || d2 === null) {
    return false
  }
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    (isMonth ? true : d1.getDate() === d2.getDate())
  )
}

export const strToDate = (dateStr: string, isMonth = false) => {
  if (dateStr === null) {
    return null
  }
  const datePart = dateStr.split('-')
  if (datePart.length === 3 || (isMonth && datePart.length === 2)) {
    if (
      /^\d{4}$/.test(datePart[0]) &&
      /^\d{2}$/.test(datePart[1]) &&
      (isMonth ? true : /^\d{2}$/.test(datePart[2]))
    ) {
      const date = new Date(
        parseInt(datePart[0], 10),
        parseInt(datePart[1], 10) - 1,
        isMonth ? 1 : parseInt(datePart[2], 10)
      )
      return date
    }
  }
  if (dateStr !== '') {
    console.error('"' + dateStr + '" 不是正确的日期')
  }
  return null
}

export const dateToStr = (date: Date, isMonth = false) => {
  const addZero = (n: number) => {
    if (n < 10) {
      return '0' + n
    }
    return n
  }
  return (
    date.getFullYear() +
    '-' +
    addZero(date.getMonth() + 1) +
    (isMonth ? '' : '-' + addZero(date.getDate()))
  )
}

export const isDateEquals = (
  date1: Date | null,
  date2: Date | null,
  isMonth = false
) => {
  if (date1 === date2 && date1 === null) {
    return true
  }
  if (date1 === null && date2 !== null) {
    return false
  }
  if (date2 === null && date1 !== null) {
    return false
  }
  if (
    date1!.getFullYear() === date2!.getFullYear() &&
    date1!.getMonth() === date2!.getMonth() &&
    (isMonth ? true : date1!.getDate() === date2!.getDate())
  ) {
    return true
  }
  return false
}

export const inDisableDates = (
  date: Date,
  disableDates:
    | string[]
    | Date[]
    | ((data: Date) => boolean)
    | undefined
    | null,
  isMonth = false
) => {
  let isDisableDate = false
  if (Array.isArray(disableDates)) {
    disableDates.forEach(disableDate => {
      if (typeof disableDate === 'string') {
        if (sameDate(strToDate(disableDate, isMonth), date, isMonth)) {
          isDisableDate = true
        }
      } else if (sameDate(disableDate, date, isMonth)) {
        isDisableDate = true
      }
    })
  } else if (disableDates) {
    isDisableDate = disableDates(date)
  }
  return isDisableDate
}

export const inDateRange = (
  date: Date,
  range: [Date, Date] | null,
  nullIsUnlimited = false,
  isMonth = false
) => {
  if (range) {
    range = range as [Date, Date]
    let matchRangeStart = false
    if (range[0] === null) {
      matchRangeStart = nullIsUnlimited
    } else {
      if (isMonth) {
        range[0].setDate(1)
      }
      range[0].setHours(0)
      range[0].setMinutes(0)
      range[0].setSeconds(0)
      range[0].setHours(0)
      range[0].setMinutes(0)
      range[0].setSeconds(0)
      matchRangeStart = date.getTime() >= range[0].getTime()
    }

    let matchRangeEnd = false
    if (range[1] === null) {
      matchRangeEnd = nullIsUnlimited
    } else {
      if (isMonth) {
        range[1].setDate(1)
      }
      range[1].setHours(23)
      range[1].setMinutes(59)
      range[1].setSeconds(59)
      matchRangeEnd = date.getTime() <= range[1].getTime()
    }
    return matchRangeStart && matchRangeEnd
  }

  return true
}

export const getMonthCalDates = (date: Date, isRange = false) => {
  const calenderFirstDate = new Date(date)
  calenderFirstDate.setDate(1)
  while (calenderFirstDate.getDay() !== 0) {
    calenderFirstDate.setDate(calenderFirstDate.getDate() - 1)
  }

  const calDates: Date[] = []
  const calDate = calenderFirstDate

  while (true) {
    calDates.push(new Date(calDate))
    calDate.setDate(calDate.getDate() + 1)
    const nextDay = new Date(calDate)
    nextDay.setDate(nextDay.getDate() + 1)
    if (isRange) {
      if (calDates.length >= 41) {
        calDates.push(new Date(calDate))
        break
      }
    } else if (
      calDate.getDay() === 6 &&
      nextDay.getMonth() !== date.getMonth()
    ) {
      calDates.push(new Date(calDate))
      break
    }
  }
  return calDates
}

export const getYearCalMonths = (date: Date) => {
  const calDates: Date[] = []
  const calDate = new Date(date).getFullYear()

  for (let i = 0; i < 12; i++) {
    calDates.push(new Date(calDate, i))
  }

  return calDates
}

export const addDays = (date: Date, count: number = 1) => {
  const d = new Date(date).getTime() + 86400000 * count
  return new Date(d)
}

export const addMonth = (date: Date, count: number = 1) => {
  const d = new Date(date)
  d.setDate(1)
  d.setMonth(d.getMonth() + count)
  return d
}

export const addYear = (date: Date, count: number = 1) => {
  const d = new Date(date)
  d.setFullYear(d.getFullYear() + count)
  return d
}
