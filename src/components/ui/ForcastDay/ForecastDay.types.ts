import type { ForecastApiResponse } from '@/types/weatherForecast.types'

interface ForecastDayProps {
  data: ForecastApiResponse | undefined
  isLoading: boolean
}

export type { ForecastDayProps }
