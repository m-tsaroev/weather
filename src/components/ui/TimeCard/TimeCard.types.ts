import type { Hour } from "@/types/weatherForecast.types"

interface TimeCardProps {
  data: Hour | undefined
  isLoading: boolean
  isActive?: boolean
}

export type { TimeCardProps }