import type { ForecastApiResponse } from '@/types/weatherForecast.types'

interface ForcastNowProps {
  id: number
  city: string
  data: ForecastApiResponse | undefined
  isActive: boolean
  isLoading: boolean
}

export type { ForcastNowProps }
