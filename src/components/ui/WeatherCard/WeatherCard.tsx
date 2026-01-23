import { ForecastDay } from '@/components/ui/ForcastDay'
import { ForcastNow } from '@/components/ui/ForcastNow'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useLazyGetForecastQuery } from '@/store/api/weatherApi.slice'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import styles from './WeatherCard.module.css'
import type { WeatherCardProps } from './WeatherCard.types'

const WeatherCard = (props: WeatherCardProps) => {
  const { city, isActive } = props

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
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className={styles.weatherCard}
      >
        <ForcastNow
          city={city}
          data={data}
          isActive={isActive}
          isLoading={isLoading}
        />
        <ForecastDay data={data} isActive={isActive} isLoading={isLoading} />
      </motion.div>
    </AnimatePresence>
  )
}

export { WeatherCard }
