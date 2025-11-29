import type { ForecastApiResponse } from '@/types/weatherForecast.types'

interface ForcastNowProps {
  data: ForecastApiResponse | undefined
  isLoading: boolean
}

export type { ForcastNowProps }
