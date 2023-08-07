export {
  ThousandsSeparator,
  getColorByLetter,
  getColorByRating,
  TimeCoverter,
  RoundFloat,
}

function getColorByRating(n: number): string {
  let color = ""
  if (n < 30) {
    color = "red"
  } else if (n < 50) {
    color = "yellow"
  } else if (n < 100) {
    color = "green"
  }
  return color
}
function ThousandsSeparator(num: number) {
  return num.toString().replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ")
}
function RoundFloat(n: number) {
  return Math.round(n)
}
function TimeCoverter(minutes: number): string {
  let h = Math.floor(minutes / 60)
  let m = minutes % 60

  if (h < 1) {
    return `${m} минут`
  }
  if (h === (2 || 3 || 4)) {
    return `${h} часа ${m} минут`
  }

  return `${h} часов ${m} минут`
}

function getColorByLetter(n: string): string {
  let color = ""
  if (n === "D") {
    color = "red"
  } else if (n === "C" || n === "C+") {
    color = "orange"
  } else if (n === "B" || n === "B+") {
    color = "yellow"
  } else if (n === "A") {
    color = "green"
  }
  return color
}
