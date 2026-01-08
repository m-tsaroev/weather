import { GlassDiv } from '@/components/decor/GlassDiv'
import { DetailsCard } from '@/components/ui/DetailsCard'
import { Select } from '@/components/ui/Select'
import { Spinner } from '@/components/ui/Spinner'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useWeatherIcon } from '@/hooks/useWeatherIcon'
import { Ellipsis, Plus } from 'lucide-react'
import styles from './ForcastNow.module.css'
import type { ForcastNowProps } from './ForcastNow.types'

const ForcastNow = (props: ForcastNowProps) => {
  const { city, data, isActive, isLoading } = props

  const { activeCityName } = useTypedSelector((state) => state.cities)
  const { removeCity } = useActions()

  const onRemoveBottunClick = () => {
    removeCity(city)
  }

  const Icon = useWeatherIcon(
    data?.current.condition.code,
    data?.current.is_day,
  )

  if (isLoading) {
    return (
      <GlassDiv className={styles.forcastNow} hasCircles={true}>
        <Spinner />
      </GlassDiv>
    )
  }

  return (
    <GlassDiv
      className={styles.forcastNow}
      hasCircles={true}
      tabIndex={isActive ? 0 : -1}
    >
      <Select
        name='forecast-now'
        hasSelection={false}
        value={<Ellipsis />}
        closeValue={<Plus />}
        options={[
          {
            name: 'remove',
            optionFunction: onRemoveBottunClick,
            mode: 'red',
          },
          {
            name: 'remove',
            optionFunction: onRemoveBottunClick,
          },
          {
            name: 'remove',
            optionFunction: onRemoveBottunClick,
          },
          {
            name: 'remove',
            optionFunction: onRemoveBottunClick,
          },
        ]}
        tabIndex={city === activeCityName ? 0 : -1}
        className={styles.select}
      />
      <h2 className={styles.cityName}>{data?.location.name}</h2>
      <div className={styles.body}>
        <div className={styles.temp}>
          {data?.current && Math.round(data?.current.temp_c)}°
        </div>
        <div className={styles.infoGroup}>
          <div className={styles.icon}>
            <Icon />
          </div>
          <div className={styles.text}>{data?.current.condition.text}</div>
        </div>
      </div>
      <ul className={styles.details}>
        <li className={styles.detailsItem}>
          <DetailsCard
            name='Feels like'
            value={`${data?.current.feelslike_c}°`}
          />
        </li>
        <li className={styles.detailsItem}>
          <DetailsCard name='Wind' value={`${data?.current.wind_kph} kph`} />
        </li>
        <li className={styles.detailsItem}>
          <DetailsCard name='Humidity' value={`${data?.current.humidity} %`} />
        </li>
        <li className={styles.detailsItem}>
          <DetailsCard
            name='Pressure'
            value={`${data?.current.pressure_mb} hPa`}
          />
        </li>
      </ul>
    </GlassDiv>
  )
}

export { ForcastNow }
