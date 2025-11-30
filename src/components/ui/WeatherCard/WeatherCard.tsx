import { ForecastDay } from '@/components/ui/ForcastDay'
import { ForcastNow } from '@/components/ui/ForcastNow'
import { useGetForecastQuery } from '@/store/api/weatherApi.slice'
import styles from './WeatherCard.module.css'
import type { WeatherCardProps } from './WeatherCard.types'

const WeatherCard = (props: WeatherCardProps) => {
  const { city } = props

  const { data, isLoading } = useGetForecastQuery({ city })

  return (
    <div className={styles.weatherCard}>
      <ForcastNow data={data} isLoading={isLoading} />
      <ForecastDay data={data} isLoading={isLoading} />
    </div>
  )
}

export { WeatherCard }
