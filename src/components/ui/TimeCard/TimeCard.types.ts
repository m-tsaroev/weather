import type { Hour } from '@/types/weatherForecast.types'

interface TimeCardProps {
  data: Hour | undefined
  isLoading: boolean
  isActive?: boolean
  timeZoneId?: string
}

export type { TimeCardProps }
