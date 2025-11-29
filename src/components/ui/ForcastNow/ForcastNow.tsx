import { GlassDiv } from '@/components/decor/GlassDiv'
import { useWeatherIcon } from '@/hooks/useWeatherIcon'
import { useGetForecastQuery } from '@/store/api/weatherApi.slice'
import styles from './ForcastNow.module.css'
import type { ForcastNowProps } from './ForcastNow.types'
import { DetailsCard } from '@/components/ui/DetailsCard'

const ForcastNow = (props: ForcastNowProps) => {
  const { city } = props

  const { data } = useGetForecastQuery({ city })

  const Icon = useWeatherIcon(
    data?.current.condition.code,
    data?.current.is_day,
  )

  return (
    <GlassDiv className={styles.forcastNow} hasCircles={true}>
      <h2 className={styles.cityName}>{data?.location.name}</h2>
      <div className={styles.body}>
        <div className={styles.temp}>
          {data?.current && Math.round(data?.current.temp_c)}
        </div>
        <div className={styles.icon}>
          <Icon />
        </div>
      </div>
      <div className={styles.details}>
        <DetailsCard name='Feels like' value={`${data?.current.feelslike_c} C`} />
      </div>
    </GlassDiv>
  )
}

export { ForcastNow }
