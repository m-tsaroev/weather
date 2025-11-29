import { GlassDiv } from '@/components/decor/GlassDiv'
import { TimeCard } from '@/components/ui/TimeCard'
import styles from './ForecastDay.module.css'
import type { ForecastDayProps } from './ForecastDay.types'

const ForecastDay = (props: ForecastDayProps) => {
  const { data, isLoading } = props

  return (
    <GlassDiv className={styles.forecastDay} hasCircles={true}>
      <TimeCard
        data={data?.forecast.forecastday[0].hour[0]}
        isLoading={isLoading}
      />
      <TimeCard
        data={data?.forecast.forecastday[0].hour[0]}
        isLoading={isLoading}
        />
      <TimeCard
        data={data?.forecast.forecastday[0].hour[0]}
        isLoading={isLoading}
        />
      <TimeCard
        data={data?.forecast.forecastday[0].hour[0]}
        isLoading={isLoading}
        />
      <TimeCard
        data={data?.forecast.forecastday[0].hour[0]}
        isLoading={isLoading}
        />
      <TimeCard
        data={data?.forecast.forecastday[0].hour[0]}
        isLoading={isLoading}
        isActive={true}
      />
    </GlassDiv>
  )
}

export { ForecastDay }
