import type { ForecastApiResponse } from '@/types/weatherForecast.types'

interface ForecastDayProps {
  data: ForecastApiResponse | undefined
  isActive: boolean
  isLoading: boolean
}

export type { ForecastDayProps }
