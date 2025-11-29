import { ICONS, type WeatherCode } from '@/config/icons'
import { Ban, Moon, Sun, type LucideIcon } from 'lucide-react'

const useWeatherIcon = (
  code: WeatherCode | undefined,
  is_day: 1 | 0 | undefined,
): LucideIcon => {
  if (is_day === undefined) {
    return Ban
  }

  if (code === undefined) {
    return is_day ? Sun : Moon
  }
  const iconSet = ICONS.WEATHER[code]

  if (!iconSet) {
    return is_day ? Sun : Moon
  }

  return is_day ? iconSet.day : iconSet.night
}

export { useWeatherIcon }
