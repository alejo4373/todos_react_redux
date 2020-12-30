const padNumber = (number) => (number < 10) ? "0" + number : number

export const getDateString = (date) => {
  const YYYY = date.getFullYear()
  const MM = padNumber(date.getMonth() + 1)
  const DD = padNumber(date.getDate())

  return `${YYYY}-${MM}-${DD}`
}

export const getMonthDayString = (date) => {
  const MM = padNumber(date.getMonth() + 1)
  const DD = padNumber(date.getDate())

  return `${MM}-${DD}`
}

export const get24HourTimeString = (date) => {
  const HH = padNumber(date.getHours())
  const MM = padNumber(date.getMinutes())
  return `${HH}:${MM}`
}

export const sanitizeTags = (tags) => {
  return (
    tags
      .map(tag => tag.trim())
      .filter(tag => tag)
      .map(tag => tag.toLocaleLowerCase())
  )
}
