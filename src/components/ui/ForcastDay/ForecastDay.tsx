import { GlassDiv } from '@/components/decor/GlassDiv'
import { TimeCard } from '@/components/ui/TimeCard'
import type { Hour } from '@/types/weatherForecast.types'
import { getHourFromSeconds } from '@/utils/getHourFromSeconds'
import { useEffect, useState } from 'react'
import styles from './ForecastDay.module.css'
import type { ForecastDayProps } from './ForecastDay.types'

const ForecastDay = (props: ForecastDayProps) => {
  const { data, isLoading } = props

  const nowHour = getHourFromSeconds(
    data?.location.localtime_epoch || Date.now() / 1000,
    true,
  )

  const [hours, setHours] = useState<Hour[]>([])

  useEffect(() => {
    const coefficient = 3 - Math.floor(24 / nowHour)

    setHours(
      data
        ? [
            ...data?.forecast.forecastday[0].hour.filter(
              (_, index) =>
                index + 1 > 6 * coefficient &&
                index + 1 <= 6 * (coefficient + 1),
            ),
          ]
        : [],
    )
  }, [data])

  return (
    <GlassDiv className={styles.forecastDay} hasCircles={true}>
      {hours.map((hour) => (
        <TimeCard
          data={hour}
          isLoading={isLoading}
          isActive={
            getHourFromSeconds(hour.time_epoch, true, data?.location.tz_id) ===
            nowHour
          }
          timeZoneId={data?.location.tz_id}
          key={hour.time_epoch}
        />
      ))}
    </GlassDiv>
  )
}

export { ForecastDay }
