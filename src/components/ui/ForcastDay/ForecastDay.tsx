import { GlassDiv } from '@/components/decor/GlassDiv'
import { Spinner } from '@/components/ui/Spinner'
import { TimeCard } from '@/components/ui/TimeCard'
import type { Hour } from '@/types/weatherForecast.types'
import { getHourFromSeconds } from '@/utils/getHourFromSeconds'
import { useEffect, useState } from 'react'
import { Slider } from '../Slider'
import styles from './ForecastDay.module.css'
import type { ForecastDayProps } from './ForecastDay.types'

const ForecastDay = (props: ForecastDayProps) => {
  const { data, isActive, isLoading } = props

  const nowHour = getHourFromSeconds(
    data?.location.localtime_epoch || Date.now() / 1000,
    true,
  )

  const [hours, setHours] = useState<Hour[]>([])

  useEffect(() => {
    const hourArray = data?.forecast?.forecastday?.[0]?.hour ?? []

    setHours(hourArray.filter((_, index) => index >= nowHour || index >= 18))
  }, [data, nowHour])

  if (isLoading) {
    return (
      <GlassDiv className={styles.forecastDay} hasCircles>
        <Spinner />
      </GlassDiv>
    )
  }

  return (
    <GlassDiv
      className={styles.forecastDay}
      hasCircles
      tabIndex={isActive ? 0 : -1}
    >
      <Slider
        className={styles.forecastDaySlider}
        sliderParams={{
          mode: 'basic',
          slidesPerView: 6.3,
          spaceBetween: 15,
        }}
      >
        {hours.map((hour) => (
          <TimeCard
            data={hour}
            isLoading={isLoading}
            isActive={
              getHourFromSeconds(
                hour.time_epoch,
                true,
                data?.location.tz_id,
              ) === nowHour
            }
            timeZoneId={data?.location.tz_id}
            key={hour.time_epoch}
          />
        ))}
      </Slider>
    </GlassDiv>
  )
}

export { ForecastDay }
