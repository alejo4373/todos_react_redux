export const getDateString = (date) => {
  const padDayOrMonth = (number) => (number < 10) ? "0" + number : number

  const year = date.getFullYear()
  const month = padDayOrMonth(date.getMonth() + 1)
  const day = padDayOrMonth(date.getDate())

  return `${year}-${month}-${day}`
}
