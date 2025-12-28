import type { ForecastApiResponse } from '@/types/weatherForecast.types'

interface ForcastNowProps {
  city: string
  data: ForecastApiResponse | undefined
  isLoading: boolean
}

export type { ForcastNowProps }
