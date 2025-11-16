interface Day {
  maxtemp_c: number
  maxtemp_f: number
  mintemp_c: number
  mintemp_f: number
}

interface Hour {
  time_epoch: number
  time: string
  temp_c: number
  temp_f: number
  condition: Condition
}

interface Condition {
  text: string
  icon: string
  code?: number
}

interface CurrentDay {
  temp_c: number
  temp_f: number
  condition: Condition
}

interface ForecastDay {
  date: string
  date_epoch: number
  day: Day
  hour: Hour[]
}

interface ForecastApiResponse {
  current: CurrentDay
  forecast: {
    forecastday: ForecastDay[]
  }
}

export type { CurrentDay, ForecastApiResponse, ForecastDay }
