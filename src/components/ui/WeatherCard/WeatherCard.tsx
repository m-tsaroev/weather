import { ForecastDay } from '@/components/ui/ForcastDay'
import { ForcastNow } from '@/components/ui/ForcastNow'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useLazyGetForecastQuery } from '@/store/api/weatherApi.slice'
import { useEffect, useState } from 'react'
import styles from './WeatherCard.module.css'
import type { WeatherCardProps } from './WeatherCard.types'

const WeatherCard = (props: WeatherCardProps) => {
  const { city } = props

  const [hasLoaded, setHasLoaded] = useState<boolean>(false)

  const [getForecastQuery, { data, isLoading }] = useLazyGetForecastQuery()

  const { activeCityName } = useTypedSelector((state) => state.cities)

  useEffect(() => {
    const fetchData = async () => {
      await getForecastQuery({ city })

      setHasLoaded(true)
    }

    if (activeCityName === city && !hasLoaded) {
      fetchData()
    }
  }, [activeCityName, city, hasLoaded, getForecastQuery])

  return (
    <div className={styles.weatherCard}>
      <ForcastNow city={city} data={data} isLoading={isLoading} />
      <ForecastDay data={data} isLoading={isLoading} />
    </div>
  )
}

export { WeatherCard }
