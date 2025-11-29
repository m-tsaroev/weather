import type { WeatherCode } from "@/config/icons"

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
  code: WeatherCode
}

interface Location {
  name: string
  localtime_epoch: number
}

interface CurrentDay {
  temp_c: number
  temp_f: number
  feelslike_c: number
  feelslike_f: number
  wind_kph: number
  wind_mph: number
  humidity: number
  pressure_mb: number
  condition: Condition
  is_day: 1 | 0
}

interface ForecastDay {
  date: string
  date_epoch: number
  day: Day
  hour: Hour[]
}

interface ForecastApiResponse {
  location: Location
  current: CurrentDay
  forecast: {
    forecastday: ForecastDay[]
  }
}

export type { CurrentDay, ForecastApiResponse, ForecastDay }
