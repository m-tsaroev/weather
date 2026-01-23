import { Spinner } from '@/components/ui/Spinner'
import { useWeatherIcon } from '@/hooks/useWeatherIcon'
import { getHourFromSeconds } from '@/utils/getHourFromSeconds'
import classNames from 'classnames'
import styles from './TimeCard.module.css'
import type { TimeCardProps } from './TimeCard.types'

const TimeCard = (props: TimeCardProps) => {
  const {
    data,
    isLoading,
    isActive = false,
    timeZoneId = 'Europe/Moscow',
  } = props

  const Icon = useWeatherIcon(data?.condition.code, data?.is_day)

  if (isLoading) {
    return (
      <div className={styles.timeCard}>
        <Spinner />
      </div>
    )
  }

  return (
    <div className={classNames(styles.timeCard, isActive && styles.isActive)}>
      <div className={styles.time}>
        {getHourFromSeconds(data?.time_epoch || 0, false, timeZoneId)}
      </div>
      <div className={styles.icon}>
        <Icon />
      </div>
      <div className={styles.temp}>{data?.temp_c}°</div>
    </div>
  )
}

export { TimeCard }
