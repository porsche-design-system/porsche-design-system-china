export const sameDate = (d1: Date | null, d2: Date | null) => {
  if (d1 === null || d2 === null) {
    return false
  }
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  )
}

export const strToDate = (dateStr: string) => {
  const datePart = dateStr.split('-')
  if (datePart.length === 3) {
    if (
      /^\d{4}$/.test(datePart[0]) &&
      /^\d{2}$/.test(datePart[1]) &&
      /^\d{2}$/.test(datePart[2])
    ) {
      const date = new Date(
        parseInt(datePart[0]),
        parseInt(datePart[1]) - 1,
        parseInt(datePart[2])
      )
      return date
    }
  }
  if (dateStr !== '') {
    console.error('"' + dateStr + '" 不是正确的日期')
  }
  return null
}

export const dateToStr = (date: Date) => {
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
    '-' +
    addZero(date.getDate())
  )
}

export const inDateRange = (date: Date, range: [Date, Date] | null) => {
  if (range) {
    if (range[0] == null || range[1] == null) {
      return false
    }

    range = range as [Date, Date]
    range[0].setHours(0)
    range[0].setMinutes(0)
    range[0].setSeconds(0)
    range[1].setHours(23)
    range[1].setMinutes(59)
    range[1].setSeconds(59)
    return (
      date.getTime() >= range[0].getTime() &&
      date.getTime() <= range[1].getTime()
    )
  }
  return true
}

export const getMonthCalDates = (date: Date) => {
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
    if (calDates.length >= 41) {
      calDates.push(new Date(calDate))
      break
    }
  }
  return calDates
}

export const addMonth = (date: Date, count: number = 1) => {
  const d = new Date(date)
  d.setMonth(d.getMonth() + count)
  return d
}

export const addYear = (date: Date, count: number = 1) => {
  const d = new Date(date)
  d.setFullYear(d.getFullYear() + count)
  return d
}
