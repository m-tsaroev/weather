interface ForecastDay {
  date: Date
  date_epoch: number
  day: {
    maxtemp_c: number
    maxtemp_f: number
    mintemp_c: number
    mintemp_f: number
  }
}

interface Forecast {
  forecast: {
    forecastday: ForecastDay[]
  }
}

export type { Forecast, ForecastDay }
